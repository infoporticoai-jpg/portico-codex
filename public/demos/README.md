# Portico voice-demo recordings

Drop your real call recordings here. The player picks them up automatically —
no code changes needed.

The interactive voice demo shows 3 industries: Property Management,
Home Services, and Law Firms.

Expected filenames (referenced by `components/demo-config.ts` → `audio` /
`audioFr`):

| Industry            | English file                | French file (optional)         |
|---------------------|------------------------------|---------------------------------|
| Property Management | `property-management.mp3`    | `property-management-fr.mp3`    |
| Home Services       | `home-services.mp3`          | `home-services-fr.mp3`          |
| Law Firms           | `law-firms.mp3`              | `law-firms-fr.mp3`              |

Notes
- Any browser-playable audio works (`.mp3`, `.m4a`, `.wav`, `.ogg`); if you use a
  different extension, update the `audio`/`audioFr` path in
  `components/demo-config.ts`.
- Until a file is present, the player runs in a silent **preview** mode so you can
  still see the transcript timing and animations. Once the file loads, its true
  duration is used automatically.
- The nav has an EN/FR language toggle. When French is selected, the demo uses
  `audioFr` + `transcriptFr` for the active industry if you've added them; if not,
  it falls back to the English recording so nothing breaks.
- To edit a transcript, its timestamps, highlighted capabilities, or call-status
  values, edit the matching entry in `components/demo-config.ts`. Each transcript
  line is `{ t: <seconds>, speaker, text, capability?, status? }` and is revealed
  the moment playback reaches `t`. `transcriptFr` follows the same shape.
