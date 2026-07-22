/**
 * ────────────────────────────────────────────────────────────────────────────
 *  PORTICO — VOICE DEMO CONFIG
 * ────────────────────────────────────────────────────────────────────────────
 *  This is the ONLY file you edit to swap in real calls. No code changes needed.
 *
 *  For each industry you can change:
 *    • audio     – path to the recording (drop the file in /public/demos/)
 *    • duration  – length in seconds (used only until the real audio loads;
 *                  once the mp3 is present its true duration is used)
 *    • transcript – the lines, each with a timestamp (t, in seconds), a speaker,
 *                   and text. Optionally a `capability` to glow and a `status`
 *                   patch for the right-hand Call Status panel.
 *
 *  A line is revealed automatically the moment playback reaches its `t`.
 *  Everything (transcript, capability glow, call-status cards) stays in sync
 *  with the audio — no manual wiring.
 *
 *  NOTE: The transcripts below are placeholders so the demo runs before your
 *  recordings arrive. Replace each `audio` path + `transcript` with your real
 *  calls. Until an mp3 is present the player runs in a silent "preview" mode so
 *  you can still see the timing/animations.
 * ────────────────────────────────────────────────────────────────────────────
 */

export type Speaker = "portico" | "caller" | "human" | "system";

export type CapabilityId =
  | "appointment-booking"
  | "lead-qualification"
  | "faq"
  | "bilingual"
  | "call-transfers"
  | "emergency-dispatch"
  | "customer-support"
  | "after-hours";

export interface CallStatus {
  language: string;
  intent: string;
  sentiment: string;
  knowledgeBase: string;
  transfer: string;
  appointment: string;
}

export interface TranscriptLine {
  /** Seconds into the recording when this line begins. */
  t: number;
  speaker: Speaker;
  text: string;
  /** Capability card to glow while this line is active. */
  capability?: CapabilityId;
  /** Partial Call Status update applied when this line is reached. */
  status?: Partial<CallStatus>;
  /** Special centered banner in the transcript. */
  event?: "transfer-initiated" | "receptionist-connected";
}

export interface Demo {
  id: string;
  label: string;
  labelFr: string;
  /** Business name (spoken in the recording). */
  business: string;
  /** Path under /public — e.g. "/demos/property-management.mp3". */
  audio: string;
  /** Fallback length in seconds until the real audio metadata loads. */
  duration: number;
  initialStatus: CallStatus;
  transcript: TranscriptLine[];
  /**
   * Optional French recording + transcript (drop the file in /public/demos/
   * and add the matching transcript). When the language toggle is set to
   * French and these aren't provided yet, the demo falls back to the
   * English recording rather than showing a broken player.
   */
  audioFr?: string;
  durationFr?: number;
  transcriptFr?: TranscriptLine[];
}

const baseStatus = (over: Partial<CallStatus> = {}): CallStatus => ({
  language: "English",
  intent: "Detecting…",
  sentiment: "Neutral",
  knowledgeBase: "Connected",
  transfer: "Not required",
  appointment: "—",
  ...over,
});

export const DEMOS: Demo[] = [
  {
    id: "property-management",
    label: "Property Management",
    labelFr: "Gestion immobilière",
    business: "ABC Property Management",
    audio: "/demos/property-management.mp3",
    duration: 50,
    initialStatus: baseStatus(),
    transcript: [
      { t: 0, speaker: "portico", text: "Thank you for calling ABC Property Management. How can I help you today?" },
      { t: 5, speaker: "caller", text: "Hi — I'd like to schedule a viewing for one of your apartments.", capability: "lead-qualification", status: { intent: "Apartment Viewing", appointment: "Booking in progress" } },
      { t: 10, speaker: "portico", text: "Absolutely, I can help with that. Which property are you interested in?", capability: "appointment-booking" },
      { t: 15, speaker: "caller", text: "The Maple Street building." },
      { t: 19, speaker: "portico", text: "Great choice. Let me check the viewing calendar for Maple Street.", capability: "appointment-booking", status: { knowledgeBase: "Connected" } },
      { t: 25, speaker: "portico", text: "I have Thursday at 2 PM or Friday at 10 AM open. Which works better for you?", capability: "appointment-booking" },
      { t: 31, speaker: "caller", text: "Thursday at 2 works perfectly.", status: { sentiment: "Positive" } },
      { t: 35, speaker: "portico", text: "You're all set for Thursday at 2 PM. Can I get your name and a good callback number?", capability: "appointment-booking", status: { appointment: "Confirmed" } },
      { t: 41, speaker: "caller", text: "Jordan Lee, 555-0142.", capability: "lead-qualification" },
      { t: 45, speaker: "portico", text: "Thank you, Jordan. I'll text you a confirmation now. Have a great day!", capability: "customer-support" },
    ],
  },
  {
    id: "home-services",
    label: "Home Services",
    labelFr: "Services à domicile",
    business: "Summit Heating & Air",
    audio: "/demos/home-services.mp3",
    duration: 54,
    initialStatus: baseStatus({ intent: "Detecting…" }),
    transcript: [
      { t: 0, speaker: "portico", text: "Thanks for calling Summit Heating and Air. What can I help you with?" },
      { t: 4, speaker: "caller", text: "My furnace stopped working and it's freezing — I think this is an emergency.", capability: "emergency-dispatch", status: { intent: "Emergency Repair", sentiment: "Concerned" } },
      { t: 10, speaker: "portico", text: "I'm sorry to hear that. I can get an on-call technician dispatched right away. Is there any gas smell in the home?", capability: "emergency-dispatch" },
      { t: 16, speaker: "caller", text: "No gas smell, it's just very cold." },
      { t: 20, speaker: "portico", text: "Understood. Let me confirm your address and priority-flag this as an urgent no-heat call.", capability: "lead-qualification", status: { knowledgeBase: "Connected" } },
      { t: 26, speaker: "caller", text: "It's 48 Birch Lane." },
      { t: 30, speaker: "system", event: "transfer-initiated", text: "Warm transfer initiated…", capability: "call-transfers", status: { transfer: "In progress" } },
      { t: 33, speaker: "system", event: "receptionist-connected", text: "On-call dispatcher connected", status: { transfer: "Connected" } },
      { t: 36, speaker: "human", text: "Hi, this is Marcus with the Summit dispatch team. I've got your no-heat call at 48 Birch Lane — a technician can be there within the hour." },
      { t: 45, speaker: "caller", text: "That's a relief, thank you.", status: { sentiment: "Positive" } },
      { t: 49, speaker: "human", text: "You're welcome. You'll get a text with your technician's name and ETA shortly.", capability: "customer-support" },
    ],
  },
  {
    id: "law-firms",
    label: "Law Firms",
    labelFr: "Cabinets d’avocats",
    business: "Harbor & Cole LLP",
    audio: "/demos/law-firms.mp3",
    duration: 50,
    initialStatus: baseStatus(),
    transcript: [
      { t: 0, speaker: "portico", text: "Thank you for calling Harbor and Cole. How can I direct your call?" },
      { t: 4, speaker: "caller", text: "I was in a car accident last week and I think I need a lawyer.", capability: "lead-qualification", status: { intent: "Personal Injury Intake", sentiment: "Concerned" } },
      { t: 11, speaker: "portico", text: "I'm sorry that happened. I can take a few details and connect you with our intake attorney. Was anyone injured?", capability: "lead-qualification" },
      { t: 18, speaker: "caller", text: "Yes, I hurt my back and I've already seen a doctor." },
      { t: 23, speaker: "portico", text: "Thank you. Has any insurance company contacted you yet?", capability: "faq" },
      { t: 28, speaker: "caller", text: "Not yet." },
      { t: 31, speaker: "system", event: "transfer-initiated", text: "Warm transfer initiated…", capability: "call-transfers", status: { transfer: "In progress" } },
      { t: 34, speaker: "system", event: "receptionist-connected", text: "Intake attorney connected", status: { transfer: "Connected" } },
      { t: 37, speaker: "human", text: "Hi, this is Dana with Harbor and Cole's intake team. I have your accident details — let's talk about next steps." },
      { t: 45, speaker: "caller", text: "Thank you, I appreciate it.", status: { sentiment: "Positive" } },
    ],
  },
];
