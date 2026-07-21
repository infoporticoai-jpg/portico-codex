# Portico voice-demo recordings

Drop your real call recordings here. The player picks them up automatically —
no code changes needed.

Expected filenames (referenced by `components/demo-config.ts` → `audio`):

| Industry            | File                          |
|---------------------|-------------------------------|
| Property Management | `property-management.mp3`     |
| HVAC                | `hvac.mp3`                    |
| Dental              | `dental.mp3`                  |
| Law Firms           | `law-firms.mp3`               |
| Veterinary          | `veterinary.mp3`              |
| Storage             | `storage.mp3`                 |

Notes
- Any browser-playable audio works (`.mp3`, `.m4a`, `.wav`, `.ogg`); if you use a
  different extension, update the `audio` path in `components/demo-config.ts`.
- Until a file is present, the player runs in a silent **preview** mode so you can
  still see the transcript timing and animations. Once the file loads, its true
  duration is used automatically.
- To edit the transcript, timestamps, highlighted capabilities, or call-status
  values, edit the matching entry in `components/demo-config.ts`. Each transcript
  line is `{ t: <seconds>, speaker, text, capability?, status? }` and is revealed
  the moment playback reaches `t`.
