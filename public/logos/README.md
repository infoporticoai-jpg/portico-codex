# Integration logos

Drop official brand SVGs here to replace the text names in the homepage
integrations marquee.

## How to add a logo
1. Get the **official** logo from the company's brand / press kit (each brand
   publishes one with usage terms — please follow them; these are trademarks).
2. Save it here as `<slug>.svg` — the slug matches the entry in
   `components/integrations-marquee.tsx`.
3. In that file, add `logo: "/logos/<slug>.svg"` to the matching entry. The
   marquee then renders the image instead of the text.

## Expected filenames
`hubspot.svg`, `salesforce.svg`, `gohighlevel.svg`, `zoho.svg`, `pipedrive.svg`,
`dynamics.svg`, `google-calendar.svg`, `outlook.svg`, `calendly.svg`, `zapier.svg`,
`slack.svg`, `teams.svg`, `gmail.svg`, `google-sheets.svg`, `stripe.svg`,
`twilio.svg`, `quickbooks.svg`, `clio.svg`, `servicetitan.svg`, `jobber.svg`

Monochrome (single-color) SVGs look best — the marquee greyscales them and
restores color on hover.
