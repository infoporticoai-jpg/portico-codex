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
  /** Business name spoken in the French recording, if different (falls back to `business`). */
  businessFr?: string;
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
   * French and these aren't provided yet, no audio plays — it never falls
   * back to the English recording under a French label.
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
    business: "Cityline Property Management",
    audio: "/demos/property-management.mp3",
    duration: 108,
    real: true,
    initialStatus: baseStatus(),
    // Real recording, real transcript — timed against the actual 108s file
    // (the recording has ~6s of dead air before Nora starts speaking).
    transcript: [
      { t: 6, speaker: "portico", text: "Thanks for calling Cityline Property Management! This is Nora, your virtual assistant. How can I help you today?" },
      { t: 14, speaker: "caller", text: "Hi Nora, uh, a bird flew into my balcony window and it shattered. Can I get a hold of someone to take a look?", capability: "lead-qualification", status: { intent: "Broken Window / Maintenance Request" } },
      { t: 23, speaker: "portico", text: "Oh, I'm sorry to hear that. We'll get this sorted out quickly. Can I start with your name?", capability: "lead-qualification" },
      { t: 31, speaker: "caller", text: "Yeah, my name is Ludwig.", capability: "lead-qualification" },
      { t: 32, speaker: "portico", text: "Thanks, Ludwig. And what's the best number to reach you?", capability: "lead-qualification" },
      { t: 37, speaker: "caller", text: "It's seven six seven five, five one four, three one two three." },
      { t: 43, speaker: "portico", text: "Got it. So that's seven six seven, five one four, three one two three. Is that right?", capability: "lead-qualification" },
      { t: 52, speaker: "caller", text: "That's correct." },
      { t: 53, speaker: "portico", text: "Perfect. And what's the full address and unit number?", capability: "lead-qualification" },
      { t: 57, speaker: "caller", text: "It is unit number 201 at the 780 St. Joseph Boulevard, in Montreal.", capability: "lead-qualification" },
      { t: 64, speaker: "portico", text: "Okay, noted. I'll pass this to the team and they'll confirm the building and get back to you. And do mornings or afternoons work better for you?", capability: "appointment-booking", status: { appointment: "Booking in progress" } },
      { t: 75, speaker: "caller", text: "Uh, better in the afternoon since I'm working throughout the day.", status: { sentiment: "Positive" } },
      { t: 80, speaker: "portico", text: "Alright. So, just to confirm, that's a shattered balcony window at 780 Saint Joseph Boulevard, unit 201, for Ludwig, with a preference for an afternoon callback. Anything else I should note?", capability: "appointment-booking", status: { appointment: "Callback scheduled" } },
      { t: 94, speaker: "caller", text: "That is everything. Thank you so much.", status: { sentiment: "Positive" } },
      { t: 97, speaker: "portico", text: "Right. Thanks so much, Ludwig. It's all noted, we'll take care of you. Have a great day, thanks for calling, bye now.", capability: "customer-support" },
      { t: 106, speaker: "caller", text: "Bye." },
    ],
  },
  {
    id: "home-services",
    label: "Home Services",
    labelFr: "Services à domicile",
    business: "Comfort Home Services",
    businessFr: "Maison Confort",
    audio: "/demos/home-services.mp3",
    duration: 110,
    real: true,
    audioFr: "/demos/home-services-fr.mp3",
    durationFr: 103,
    initialStatus: baseStatus({ intent: "Detecting…" }),
    // Real recording, real transcript — timed against the actual 110s file
    // (the recording has ~6s of dead air before Ava starts speaking).
    transcript: [
      { t: 6, speaker: "portico", text: "Thanks for calling Comfort Home Services. This is Ava, your virtual assistant. How can I help you today?" },
      { t: 14, speaker: "caller", text: "Hi, Ava. The AC is not working at my house. I'd like to get a technician sent over as soon as you can.", capability: "lead-qualification", status: { intent: "AC Repair Request" } },
      { t: 24, speaker: "portico", text: "Oh, I understand — that can't be comfortable. We'll take care of it. Alright, let's get your details so the team can reach you quickly. Can I start with your name?", capability: "lead-qualification" },
      { t: 37, speaker: "caller", text: "Yeah, my name is Nicholas.", capability: "lead-qualification" },
      { t: 40, speaker: "portico", text: "Thanks, Nicholas. And what's the best number to reach you?", capability: "lead-qualification" },
      { t: 45, speaker: "caller", text: "It's gonna be (514) 280-1770." },
      { t: 49, speaker: "portico", text: "Okay, so that's (514) 280-1770. Is that right?", capability: "lead-qualification" },
      { t: 53, speaker: "caller", text: "That's correct." },
      { t: 55, speaker: "portico", text: "Perfect. And what's the service address, please?", capability: "lead-qualification" },
      { t: 59, speaker: "caller", text: "It's gonna be 484 Bass Road in Chicago." },
      { t: 63, speaker: "portico", text: "Okay, so that's 484 Bass Road in Chicago. Is that correct?", capability: "lead-qualification" },
      { t: 68, speaker: "caller", text: "That is correct." },
      { t: 70, speaker: "portico", text: "Great. And generally, do mornings or afternoons work better for you?", capability: "appointment-booking", status: { appointment: "Booking in progress" } },
      { t: 74, speaker: "caller", text: "The afternoons work better. If you could send a technician later this week, that would be the best.", status: { sentiment: "Positive" } },
      { t: 83, speaker: "portico", text: "Okay, so I've got your AC not working at 484 Bass Road in Chicago, and the team will call you back on the next business day to confirm a time. Anything else I should note for them?", capability: "appointment-booking", status: { appointment: "Callback scheduled" } },
      { t: 98, speaker: "caller", text: "That'll be everything. Thank you so much, Ava.", status: { sentiment: "Positive" } },
      { t: 102, speaker: "portico", text: "Alright, thanks so much, Nicholas. It's all noted. Have a great day. Thanks for calling — bye now.", capability: "customer-support" },
      { t: 109, speaker: "caller", text: "Bye." },
    ],
    // Real French recording, real transcript — timed against the actual 102.7s file
    // (the recording has ~7s of dead air before Léa starts speaking).
    transcriptFr: [
      { t: 7, speaker: "portico", text: "Merci d’avoir appelé Maison Confort. Ici Léa, votre assistante virtuelle. Comment je peux vous aider aujourd’hui?" },
      { t: 13, speaker: "caller", text: "Dans le fond, je vais prendre ma douche ce matin, puis je n’ai juste pas d’eau qui sortait.", capability: "lead-qualification", status: { intent: "Demande de plomberie" } },
      { t: 18, speaker: "portico", text: "Ah, je comprends, ça doit être inconfortable. On va s’occuper de ça. Je commence par votre nom.", capability: "lead-qualification" },
      { t: 23, speaker: "caller", text: "Thomas.", capability: "lead-qualification" },
      { t: 26, speaker: "portico", text: "Merci Thomas. Et quel est le meilleur numéro pour vous joindre?", capability: "lead-qualification" },
      { t: 30, speaker: "caller", text: "C’est le 438 828 5177." },
      { t: 38, speaker: "portico", text: "Parfait. J’ai 438 828 5177. C’est bien ça?", capability: "lead-qualification" },
      { t: 45, speaker: "caller", text: "Oui." },
      { t: 46, speaker: "portico", text: "Et quelle est l’adresse où un technicien devrait se rendre?", capability: "lead-qualification" },
      { t: 49, speaker: "caller", text: "Le 295 rue Brunet à Saint-Lazare.", capability: "lead-qualification" },
      { t: 53, speaker: "portico", text: "Laissez-moi m’assurer que j’ai bien ça. C’est le 295 rue Brunet, à Saint-Lazare. C’est exact?", capability: "lead-qualification" },
      { t: 62, speaker: "caller", text: "Exact." },
      { t: 66, speaker: "portico", text: "Entendu. Et en général, est-ce que les avant-midi ou les après-midi marchent mieux pour vous?", capability: "appointment-booking", status: { appointment: "Prise de rendez-vous en cours" } },
      { t: 70, speaker: "caller", text: "L’avant-midi, s’il vous plaît.", status: { sentiment: "Positif" } },
      { t: 74, speaker: "portico", text: "Parfait. Donc j’ai un problème de plomberie pour l’eau qui ne sort pas, au 295 rue Brunet à Saint-Lazare, et l’équipe va vous rappeler pour confirmer l’heure. Autre chose que je peux noter pour eux?", capability: "appointment-booking", status: { appointment: "Rappel prévu" } },
      { t: 83, speaker: "caller", text: "Ouais, je veux m’assurer qu’ils n’ont pas peur des chiens parce que j’ai un gros chien chez moi." },
      { t: 89, speaker: "portico", text: "Pas de problème, je l’ajoute à la demande. Parfait, merci beaucoup Thomas. C’est noté, l’équipe va vous rappeler pour confirmer l’heure. Bonne journée, merci d’avoir appelé, au revoir.", capability: "customer-support" },
      { t: 100, speaker: "caller", text: "Merci et bonne journée.", status: { sentiment: "Positif" } },
    ],
  },
  {
    id: "law-firms",
    label: "Law Firms",
    labelFr: "Cabinets d’avocats",
    business: "Harper & Associates",
    audio: "/demos/law-firms.mp3",
    duration: 172,
    real: true,
    initialStatus: baseStatus(),
    // Real recording, real transcript — timed against the actual 172.5s file
    // (the recording has ~6s of dead air before Claire starts speaking).
    transcript: [
      { t: 6, speaker: "portico", text: "Thanks for calling Harper and Associates! This is Claire, your virtual assistant. How can I help you today?" },
      { t: 13, speaker: "caller", text: "Hey Claire, yeah I was just calling about your guys's process. Um, yesterday I walked into a restaurant. And there was no sign indicated that it was like a wet floor. And I slipped and I hit my head really hard and now like I really want to sue them.", capability: "lead-qualification", status: { intent: "Personal Injury Intake", sentiment: "Concerned" } },
      { t: 32, speaker: "portico", text: "Oh, I'm so sorry to hear that. I hope you're doing okay. Um, do you already have a case open with us, or is this something recent?", capability: "lead-qualification" },
      { t: 43, speaker: "caller", text: "No, it's something recent." },
      { t: 44, speaker: "portico", text: "Alright, well, one important piece of advice before we go on: if the other side's insurance company contacts you, avoid giving a recorded statement or signing anything before you've talked to an attorney. It doesn't commit you to anything to let us look at it first.", capability: "faq" },
      { t: 62, speaker: "caller", text: "All right." },
      { t: 63, speaker: "portico", text: "The attorney will walk you through the process and your options. Let me just grab a few quick details so they can call you back today. Can I start with your name?", capability: "lead-qualification" },
      { t: 75, speaker: "caller", text: "Yeah, it's Christian.", capability: "lead-qualification" },
      { t: 76, speaker: "portico", text: "Thanks, Christian. And what's the best number to reach you?", capability: "lead-qualification" },
      { t: 80, speaker: "caller", text: "It's gonna be 208-692-1234." },
      { t: 83, speaker: "portico", text: "Got it. I got two zero eight, six nine two, one two three four. Is that right?", capability: "lead-qualification" },
      { t: 92, speaker: "caller", text: "Yeah, exactly." },
      { t: 93, speaker: "portico", text: "Perfect. And were there any injuries from the fall?", capability: "lead-qualification" },
      { t: 97, speaker: "caller", text: "Oh, I mean, I think I might have a concussion.", status: { sentiment: "Concerned" } },
      { t: 101, speaker: "portico", text: "Okay, noted. And was there a police report, or were you seen at a hospital or a clinic?", capability: "faq" },
      { t: 107, speaker: "caller", text: "No. No, no police report." },
      { t: 109, speaker: "portico", text: "Understood. And can you confirm the full date of the incident for me?", capability: "lead-qualification" },
      { t: 115, speaker: "caller", text: "Yeah, it was July 22nd. 2026." },
      { t: 118, speaker: "portico", text: "Got it. Let me make sure I've got this: it happened on July twenty-second, is that right?" },
      { t: 127, speaker: "caller", text: "Yeah." },
      { t: 128, speaker: "portico", text: "Okay. And roughly where did it happen?", capability: "lead-qualification" },
      { t: 130, speaker: "caller", text: "Uh, like I said, I hit my head pretty hard, so I don't remember the exact location, but I know it was on St. Catherine. In Montreal." },
      { t: 140, speaker: "portico", text: "Okay. On Saint Catherine in Montreal, is that right?" },
      { t: 144, speaker: "caller", text: "Yeah." },
      { t: 145, speaker: "portico", text: "Perfect, thank you. Just so you know, the consultation is free, and our fee is thirty-three percent of what we recover, only if we win. An attorney will call you back today. Does that work for you?", capability: "appointment-booking", status: { appointment: "Callback scheduled" } },
      { t: 159, speaker: "caller", text: "Yeah, it's perfect. Thank you.", status: { sentiment: "Positive" } },
      { t: 161, speaker: "portico", text: "Alright, thanks so much, Christian. We've got everything we need, it's already with the attorney. Have a good day, thanks for calling, bye now.", capability: "customer-support" },
      { t: 170, speaker: "caller", text: "Thank you, bye-bye." },
      { t: 171, speaker: "portico", text: "Take care!" },
    ],
  },
];
