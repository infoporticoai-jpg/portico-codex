# Industry photos

Real photos for the homepage "Built Around Your Business" section — one per
industry, shown on the right of each tab (like a real lifestyle photo, not a
UI mockup). Until you add them, a placeholder frame shows.

## How to add
1. Save a photo here as `<id>.jpg` (or `.png`/`.webp`).
2. In `components/landing-page.tsx`, add `photo: "/industries/<id>.jpg"` to the
   matching `SOLUTIONS` entry. That industry then shows the real photo.

## Filenames (match the SOLUTIONS ids)
`property-management.jpg`, `hvac.jpg`, `dental.jpg`, `law-firms.jpg`,
`veterinary.jpg`, `medical-clinics.jpg`, `real-estate.jpg`

Landscape photos (roughly 4:3) look best — they're cropped to fill the frame.
