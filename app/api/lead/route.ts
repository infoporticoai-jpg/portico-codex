import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO = "hello@porticointelligence.com";
const FROM = "Portico Website <no-reply@porticointelligence.com>";

const LABELS: Record<string, string> = {
  demo: "Enterprise demo request",
  contact: "Contact form message",
  partners: "Partner application",
  careers: "Careers waitlist signup",
  api: "API waitlist signup",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email is not configured yet" }, { status: 500 });
  }

  const label = LABELS[formType] ?? "Website form submission";
  const rows = Object.entries(fields)
    .filter(([, value]) => value && String(value).trim())
    .map(
      ([key, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#64748b;font-weight:600;text-transform:capitalize;white-space:nowrap;">${escapeHtml(key)}</td><td style="padding:4px 0;">${escapeHtml(String(value)).replace(/\n/g, "<br/>")}</td></tr>`
    )
    .join("");

  const nameField = typeof fields.name === "string" ? fields.name : undefined;
  const emailField = typeof fields.email === "string" ? fields.email : undefined;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: emailField,
      subject: `${label}${nameField ? ` — ${nameField}` : ""}`,
      html: `<h2 style="margin:0 0 14px;font-family:sans-serif;">${escapeHtml(label)}</h2><table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">${rows}</table>`,
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
