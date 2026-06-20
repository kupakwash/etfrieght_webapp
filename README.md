# ET Freight

A modern, responsive marketing website for **ET Freight**, a specialist road
transport and logistics company moving abnormal, heavy-duty, project, and
general cargo across Southern, Central, and East Africa.

The site uses ET Freight's real fleet photography and presents the company as
a capable, professional cross-border transport partner.

## Preview

The experience includes:

- A full-screen fleet-led hero section
- Abnormal load, heavy haulage, and general freight capabilities
- An accurate interactive map of ET Freight's African transport network
- Routes covering Zimbabwe, Mozambique, Malawi, Tanzania, DRC, Angola,
  Zambia, Kenya, and Uganda
- A real-world project gallery
- A four-stage operating process
- A responsive quotation enquiry form
- Desktop, tablet, and mobile layouts
- Reduced-motion accessibility support

## Tech stack

| Layer | Technology |
| --- | --- |
| Structure | Semantic HTML5 |
| Styling | Modern CSS3, Grid, Flexbox, custom properties |
| Interaction | Vanilla JavaScript |
| Typography | Manrope and DM Sans |
| Mapping | Custom SVG generated from geographic boundary data |
| Assets | Optimized ET Freight fleet photography |
| Local preview | Lightweight Node.js HTTP server |

The project intentionally has no frontend framework or production dependency.
It is fast, portable, and can be deployed as a static website.

## Project structure

```text
etfrieght_webapp/
├── assets/
│   ├── africa-map.svg
│   ├── abnormal-load.jpeg
│   ├── general-freight.jpeg
│   ├── heavy-lift.jpeg
│   ├── hero-fleet.jpeg
│   ├── project-cargo.jpeg
│   └── project-vessel.jpeg
├── index.html
├── styles.css
├── script.js
├── server.mjs
└── README.md
```

## Run locally

Node.js is only needed for the included preview server:

```bash
node server.mjs
```

Then visit:

```text
http://127.0.0.1:4173
```

You can also open `index.html` directly in a browser.

## Deployment

Because this is a static website, it can be deployed to:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any conventional web server

Set `index.html` as the entry page and publish the repository root.

## Brand and content

The website is designed around ET Freight's existing visual identity:

- Signal red brand accent
- White heavy-duty Volvo fleet
- Industrial editorial typography
- Authentic abnormal-load and project-cargo photography

Contact details and company information should be reviewed before production
deployment to ensure they remain current.

## License

All ET Freight branding and fleet photography remain the property of their
respective owner. The source code is provided for the ET Freight website
project.
