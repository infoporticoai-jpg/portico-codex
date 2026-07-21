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
  /** Business name (spoken in the recording). */
  business: string;
  /** Path under /public — e.g. "/demos/property-management.mp3". */
  audio: string;
  /** Fallback length in seconds until the real audio metadata loads. */
  duration: number;
  initialStatus: CallStatus;
  transcript: TranscriptLine[];
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
    id: "hvac",
    label: "HVAC",
    business: "Summit Heating & Air",
    audio: "/demos/hvac.mp3",
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
    id: "dental",
    label: "Dental",
    business: "Brightleaf Dental",
    audio: "/demos/dental.mp3",
    duration: 48,
    initialStatus: baseStatus(),
    transcript: [
      { t: 0, speaker: "portico", text: "Thank you for calling Brightleaf Dental. How can I help you today?" },
      { t: 4, speaker: "caller", text: "Hi, I'm a new patient and I'd like to book a cleaning.", capability: "lead-qualification", status: { intent: "New Patient Booking", appointment: "Booking in progress" } },
      { t: 10, speaker: "portico", text: "Wonderful, welcome! Are you looking for a routine cleaning and exam, or do you have a specific concern?", capability: "faq" },
      { t: 16, speaker: "caller", text: "Just a routine cleaning." },
      { t: 20, speaker: "portico", text: "Perfect. Dr. Nguyen has openings next Tuesday morning or Wednesday afternoon. Any preference?", capability: "appointment-booking", status: { knowledgeBase: "Connected" } },
      { t: 27, speaker: "caller", text: "Wednesday afternoon is better.", status: { sentiment: "Positive" } },
      { t: 31, speaker: "portico", text: "Great. Do you have dental insurance you'd like us to verify before the visit?", capability: "faq" },
      { t: 36, speaker: "caller", text: "Yes, I'll bring the details." },
      { t: 39, speaker: "portico", text: "You're booked for Wednesday at 3 PM. I'll text new-patient forms so check-in is quick.", capability: "appointment-booking", status: { appointment: "Confirmed" } },
    ],
  },
  {
    id: "law-firms",
    label: "Law Firms",
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
  {
    id: "veterinary",
    label: "Veterinary",
    business: "Cedar Creek Animal Hospital",
    audio: "/demos/veterinary.mp3",
    duration: 42,
    initialStatus: baseStatus({ intent: "Detecting…" }),
    transcript: [
      { t: 0, speaker: "portico", text: "Cedar Creek Animal Hospital, how can I help?", capability: "after-hours" },
      { t: 4, speaker: "caller", text: "My dog just ate something he shouldn't have and he's acting strange.", capability: "emergency-dispatch", status: { intent: "Urgent Care", sentiment: "Concerned" } },
      { t: 11, speaker: "portico", text: "Okay, let's act quickly. Can you tell me what he ate and roughly how much?", capability: "emergency-dispatch" },
      { t: 17, speaker: "caller", text: "Some chocolate — maybe a small bar." },
      { t: 21, speaker: "portico", text: "Thank you. Given his size that can be serious. I can get you into our urgent care line right now.", capability: "lead-qualification", status: { knowledgeBase: "Connected" } },
      { t: 28, speaker: "portico", text: "We have an opening in fifteen minutes — can you come in?", capability: "appointment-booking", status: { appointment: "Urgent — hold" } },
      { t: 33, speaker: "caller", text: "Yes, we're leaving now.", status: { sentiment: "Positive" } },
      { t: 37, speaker: "portico", text: "Great. I'll let the vet team know you're on the way. Drive safe.", capability: "customer-support", status: { appointment: "Confirmed" } },
    ],
  },
  {
    id: "medical-clinics",
    label: "Medical Clinics",
    business: "Lakeshore Family Medicine",
    audio: "/demos/medical-clinics.mp3",
    duration: 46,
    initialStatus: baseStatus(),
    transcript: [
      { t: 0, speaker: "portico", text: "Thank you for calling Lakeshore Family Medicine. How can I help you today?" },
      { t: 4, speaker: "caller", text: "Hi, I'd like to book a check-up with Dr. Alvarez.", capability: "lead-qualification", status: { intent: "Appointment Booking", appointment: "Booking in progress" } },
      { t: 10, speaker: "portico", text: "Of course. Are you an existing patient with us?", capability: "faq" },
      { t: 15, speaker: "caller", text: "Yes, I've been in before." },
      { t: 19, speaker: "portico", text: "Great. Dr. Alvarez has Tuesday morning or Thursday afternoon open next week. Which works?", capability: "appointment-booking", status: { knowledgeBase: "Connected" } },
      { t: 26, speaker: "caller", text: "Thursday afternoon, please.", status: { sentiment: "Positive" } },
      { t: 30, speaker: "portico", text: "Booked for Thursday at 2:30. Has your insurance changed since your last visit?", capability: "faq" },
      { t: 36, speaker: "caller", text: "No, same as before." },
      { t: 39, speaker: "portico", text: "Perfect — you're all set. I'll text a reminder the day before.", capability: "customer-support", status: { appointment: "Confirmed" } },
    ],
  },
  {
    id: "real-estate",
    label: "Real Estate",
    business: "Beacon Realty Group",
    audio: "/demos/real-estate.mp3",
    duration: 44,
    initialStatus: baseStatus(),
    transcript: [
      { t: 0, speaker: "portico", text: "Thank you for calling Beacon Realty Group. How can I help?" },
      { t: 4, speaker: "caller", text: "I saw a listing on Oak Street and I'd like to schedule a showing.", capability: "lead-qualification", status: { intent: "Showing Request", appointment: "Booking in progress" } },
      { t: 11, speaker: "portico", text: "I'd be happy to set that up. Are you working with an agent already?", capability: "faq" },
      { t: 17, speaker: "caller", text: "No, not yet." },
      { t: 21, speaker: "portico", text: "No problem. The Oak Street home has showings Saturday at 11 or 1. Which suits you?", capability: "appointment-booking", status: { knowledgeBase: "Connected" } },
      { t: 28, speaker: "caller", text: "Saturday at 11 works.", status: { sentiment: "Positive" } },
      { t: 32, speaker: "portico", text: "Great. Can I get your name and number so an agent can meet you there?", capability: "lead-qualification", status: { appointment: "Confirmed" } },
      { t: 38, speaker: "caller", text: "Sure — Sam Rivera, 555-0179." },
      { t: 42, speaker: "portico", text: "Thanks, Sam. You'll get a confirmation text shortly. See you Saturday!", capability: "customer-support" },
    ],
  },
];
