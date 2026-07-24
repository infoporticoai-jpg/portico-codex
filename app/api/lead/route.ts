import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO = "hello@porticointelligence.com";
const FROM = "Portico Website <no-reply@porticointelligence.com>";

const FORM_LABELS: Record<string, string> = {
  demo: "Enterprise demo request",
  contact: "Contact form message",
  partners: "Partner application",
  careers: "Careers waitlist signup",
  api: "API waitlist signup",
};

const FIELD_LABELS: Record<string, string> = {
  name: "Full name",
  email: "Work email",
  company: "Company",
  location: "Location",
  teamSize: "Team size",
  callsPerMonth: "Calls per month",
  goal: "What would make this a win",
  message: "Message",
  interest: "Area of interest",
  type: "Partner type",
};

function humanize(key: string) {
  return FIELD_LABELS[key] ?? key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (c) => c.toUpperCase());
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderEmail(label: string, title: string, fields: Record<string, string>) {
  const rows = Object.entries(fields)
    .filter(([, value]) => value && String(value).trim())
    .map(
      ([key, value]) => `
        <tr>
          <td style="padding:11px 16px 11px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#64748b;font-weight:600;white-space:nowrap;vertical-align:top;width:1%;">${escapeHtml(humanize(key))}</td>
          <td style="padding:11px 0;border-bottom:1px solid #f1f5f9;font-size:14px;color:#1b2438;line-height:1.5;">${escapeHtml(String(value)).replace(/\n/g, "<br/>")}</td>
        </tr>`
    )
    .join("");

  return `
<div style="background:#f4f1ec;padding:32px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" width="100%" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #eef2f7;">
    <tr>
      <td style="background:#1b2438;padding:22px 32px;">
        <span style="color:#ffffff;font-size:17px;font-weight:800;letter-spacing:0.03em;">PORTICO</span>
      </td>
    </tr>
    <tr>
      <td style="padding:28px 32px 4px;">
        <span style="display:inline-block;background:#fff3ea;color:#d75c12;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;padding:5px 11px;border-radius:999px;">${escapeHtml(label)}</span>
        <h1 style="margin:14px 0 0;font-size:21px;color:#1b2438;letter-spacing:-0.02em;">${escapeHtml(title)}</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:12px 32px 30px;">
        <table role="presentation" width="100%" style="border-collapse:collapse;">${rows}</table>
      </td>
    </tr>
    <tr>
      <td style="background:#f8fafc;padding:14px 32px;border-top:1px solid #eef2f7;">
        <span style="font-size:12px;color:#94a3b8;">Sent automatically from a form on porticointelligence.com</span>
      </td>
    </tr>
  </table>
</div>`;
}

export async function POST(req: NextRequest) {
  let body: { formType?: string; fields?: Record<string, string> };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { formType, fields } = body;
  if (!formType || !fields || typeof fields !== "object") {
    return NextResponse.json({ error: "Missing formType or fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY ?? process.env.Resend;
  if (!apiKey) {
    console.error("RESEND_API_KEY (or Resend) is not set");
    return NextResponse.json({ error: "Email is not configured yet" }, { status: 500 });
  }

  const label = FORM_LABELS[formType] ?? "Website form submission";
  const nameField = typeof fields.name === "string" && fields.name.trim() ? fields.name.trim() : undefined;
  const companyField = typeof fields.company === "string" && fields.company.trim() ? fields.company.trim() : undefined;
  const emailField = typeof fields.email === "string" ? fields.email : undefined;
  const title = nameField ? `${nameField}${companyField ? ` · ${companyField}` : ""}` : companyField ?? "New submission";

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: emailField,
      subject: `${label}${nameField ? ` — ${nameField}` : ""}`,
      html: renderEmail(label, title, fields),
    });
    if (error) {
      console.error("Resend send failed", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend send failed", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }
}
