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
  /** True once this industry has a real recording + real transcript (not a placeholder). */
  real?: boolean;
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
    business: "Comfort Home Services",
    audio: "/demos/home-services.mp3",
    duration: 110,
    real: true,
    initialStatus: baseStatus({ intent: "Detecting…" }),
    // Real recording, real transcript — timed against the actual 110s file.
    transcript: [
      { t: 0, speaker: "portico", text: "Thanks for calling Comfort Home Services. This is Ava, your virtual assistant. How can I help you today?" },
      { t: 8, speaker: "caller", text: "Hi, Ava. The AC is not working at my house. I'd like to get a technician sent over as soon as you can.", capability: "lead-qualification", status: { intent: "AC Repair Request" } },
      { t: 19, speaker: "portico", text: "Oh, I understand — that can't be comfortable. We'll take care of it. Alright, let's get your details so the team can reach you quickly. Can I start with your name?", capability: "lead-qualification" },
      { t: 33, speaker: "caller", text: "Yeah, my name is Nicholas.", capability: "lead-qualification" },
      { t: 36, speaker: "portico", text: "Thanks, Nicholas. And what's the best number to reach you?", capability: "lead-qualification" },
      { t: 41, speaker: "caller", text: "It's gonna be (514) 280-1770." },
      { t: 45, speaker: "portico", text: "Okay, so that's (514) 280-1770. Is that right?", capability: "lead-qualification" },
      { t: 50, speaker: "caller", text: "That's correct." },
      { t: 52, speaker: "portico", text: "Perfect. And what's the service address, please?", capability: "lead-qualification" },
      { t: 56, speaker: "caller", text: "It's gonna be 484 Bass Road in Chicago." },
      { t: 60, speaker: "portico", text: "Okay, so that's 484 Bass Road in Chicago. Is that correct?", capability: "lead-qualification" },
      { t: 65, speaker: "caller", text: "That is correct." },
      { t: 67, speaker: "portico", text: "Great. And generally, do mornings or afternoons work better for you?", capability: "appointment-booking", status: { appointment: "Booking in progress" } },
      { t: 72, speaker: "caller", text: "The afternoons work better. If you could send a technician later this week, that would be the best.", status: { sentiment: "Positive" } },
      { t: 81, speaker: "portico", text: "Okay, so I've got your AC not working at 484 Bass Road in Chicago, and the team will call you back on the next business day to confirm a time. Anything else I should note for them?", capability: "appointment-booking", status: { appointment: "Callback scheduled" } },
      { t: 97, speaker: "caller", text: "That'll be everything. Thank you so much, Ava.", status: { sentiment: "Positive" } },
      { t: 101, speaker: "portico", text: "Alright, thanks so much, Nicholas. It's all noted. Have a great day. Thanks for calling — bye now.", capability: "customer-support" },
      { t: 109, speaker: "caller", text: "Bye." },
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
