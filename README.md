# CrownServer Website

Il sito web ufficiale di CrownServer - Servizi cloud semplici, sicuri e affidabili per tutta la famiglia.

Costruito con [Astro](https://astro.build) e Tailwind CSS v4.

## Live Site

**[https://www.crownserver.it](https://www.crownserver.it)**

## Features

- ✅ Astro 5.5.2
- ✅ Tailwind CSS v4
- ✅ Content Collections per gestione strutturata
- ✅ i18n (Italiano + Inglese)
- ✅ Responsive Design
- ✅ Gradient branding (Cyan to Blue)
- ✅ Waitlist modal (placeholder)
- ✅ Contact form
- ✅ Ottimizzato per SEO
- ✅ Pronto per Netlify

## Getting Started

### 1. Installare le Dipendenze

```bash
npm install
```

### 2. Avviare il Server di Sviluppo

```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:4321`

### 3. Build per Produzione

```bash
npm run build
```

### 4. Preview della Build

```bash
npm run preview
```

## Struttura del Progetto

```
/
├── public/
│   ├── favicon.svg           # Favicon del sito (logo crown)
│   ├── opengraph.jpg         # Immagine per social sharing
│   └── robots.txt            # Robots.txt
├── src/
│   ├── assets/
│   │   └── crown.svg         # Logo crown SVG
│   ├── components/
│   │   ├── logo.astro        # Logo component
│   │   ├── service-cards.astro
│   │   ├── waitlist-modal.astro
│   │   ├── why-choose-us.astro
│   │   ├── social-links.astro
│   │   ├── founder-card.astro
│   │   ├── language-selector.astro
│   │   ├── navbar/
│   │   ├── footer.astro
│   │   └── ui/               # Button, Link components
│   ├── content/
│   │   ├── founders/         # 4 founder markdown files
│   │   ├── products/         # 3 product markdown files
│   │   └── about/            # Company story
│   ├── i18n/
│   │   ├── it.json           # Traduzioni italiane
│   │   ├── en.json           # Traduzioni inglesi
│   │   └── translations.ts   # Utilities per i18n
│   ├── layouts/
│   │   └── Layout.astro      # Layout principale
│   ├── pages/
│   │   ├── index.astro       # Homepage
│   │   ├── about.astro       # Chi Siamo
│   │   ├── contact.astro     # Contatti
│   │   ├── products.astro    # Prodotti
│   │   └── 404.astro         # Pagina 404
│   ├── styles/
│   │   └── global.css        # Stili globali + colori brand
│   └── utils/
│       └── i18n.ts           # Helper functions per traduzioni
├── netlify.toml              # Config Netlify
├── astro.config.mjs          # Config Astro
└── package.json
```

## Content Management

### Aggiungere/Modificare Founders

I founder sono gestiti tramite Astro Content Collections. I file si trovano in `src/content/founders/`.

**Esempio di file founder:**

```markdown
---
draft: false
name: "Nome Cognome"
role: "Ruolo"
bio: "Breve biografia"
avatar:
  seed: "unique-seed"
  style: "avataaars"
order: 1
publishDate: "2026-01-12"
---

Biografia estesa in markdown (opzionale).
```

Gli avatar sono generati usando [Dicebear API](https://dicebear.com/) con il seed specificato.

### Aggiungere/Modificare Prodotti

I prodotti si trovano in `src/content/products/`.

**Esempio di file prodotto:**

```markdown
---
title: "Nome Servizio"
slug: "nome-servizio"
icon: "bx:icon-name"
tagline: "Breve descrizione"
status: "coming-soon"
features:
  - "Feature 1"
  - "Feature 2"
  - "Feature 3"
order: 1
---

Descrizione dettagliata del servizio in markdown.
Puoi usare ## per sottotitoli, liste, etc.
```

### Modificare la Company Story

Il contenuto "Chi Siamo" si trova in `src/content/about/company-story.md`.

Modifica questo file per aggiornare la storia dell'azienda.

## Traduzioni (i18n)

Le traduzioni sono gestite tramite file JSON in `src/i18n/`.

### Struttura delle Traduzioni

```json
{
  "nav": {
    "products": "Prodotti",
    "about": "Chi Siamo"
  },
  "hero": {
    "title": "Il cloud semplice per tutta la famiglia"
  }
}
```

### Aggiungere Nuove Traduzioni

1. Aggiungi la chiave in `src/i18n/it.json`
2. Aggiungi la traduzione corrispondente in `src/i18n/en.json`
3. Usa nel componente: `t(lang, 'chiave.sottochiave')`

### Come Funziona

- La lingua di default è l'italiano
- L'utente può cambiare lingua tramite il selector nell'header
- La scelta viene salvata in localStorage
- Le pagine si ricaricano per applicare la nuova lingua

## Styling & Branding

### Colori Brand

I colori sono definiti in `src/styles/global.css`:

```css
@theme {
  --color-crown-cyan: #00c6fb;
  --color-crown-blue: #005bea;
  --color-crown-bg: #F5F7FA;
  --color-crown-text: #333333;
}
```

### Utility Classes Personalizzate

```css
.gradient-crown {
  background: linear-gradient(135deg, #00c6fb 0%, #005bea 100%);
}

.text-gradient-crown {
  background: linear-gradient(135deg, #00c6fb 0%, #005bea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Cambiare i Colori

Per cambiare i colori del brand:

1. Modifica le variabili CSS in `src/styles/global.css`
2. Aggiorna i gradienti nelle utility classes
3. Il resto del sito si aggiornerà automaticamente

### Componenti UI

I componenti Button e Link supportano diversi stili:

```astro
<!-- Gradient button (primary) -->
<Button style="primary">Click Me</Button>

<!-- Outline button -->
<Button style="outline">Click Me</Button>

<!-- Inverted button -->
<Button style="inverted">Click Me</Button>
```

## Deployment

### Netlify (Recommended)

Il sito è configurato per Netlify con `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

**Steps:**

1. Push del codice su GitHub
2. Connetti il repo a Netlify
3. Netlify rileverà automaticamente le impostazioni
4. Deploy!

### Altri Providers

Il sito può essere deployato su qualsiasi provider che supporta siti statici:

- **Vercel**: Aggiungi il progetto e seleziona Astro
- **Cloudflare Pages**: Comando: `npm run build`, Output: `dist`
- **GitHub Pages**: Usa GitHub Actions con l'action ufficiale di Astro

## Link Social Media

I link social sono definiti in `src/components/social-links.astro`:

```typescript
const socialLinks = [
  { name: 'Discord', url: 'https://discord.gg/crownserver', icon: 'simple-icons:discord' },
  { name: 'X (Twitter)', url: 'https://x.com/crownserver', icon: 'simple-icons:x' },
  // ...
];
```

Aggiorna gli URL con i tuoi account social reali.

## Contact Form

Il form di contatto utilizza Web3Forms. Per renderlo funzionante:

1. Registrati su [Web3Forms](https://web3forms.com/)
2. Ottieni la tua Access Key
3. Aggiorna `src/components/contactform.astro` con la tua key

## Waitlist Modal

Il modal della waitlist è **placeholder only** (design senza backend).

Per renderlo funzionale:

1. Integra con un servizio email (Mailchimp, ConvertKit, etc.)
2. Aggiorna lo script in `src/components/waitlist-modal.astro`
3. Implementa la chiamata API quando il form viene submitted

## SEO

### Meta Tags

I meta tags sono gestiti in `src/layouts/Layout.astro`:

- Title
- Description
- OpenGraph tags
- Twitter cards

### Sitemap

Il sitemap viene generato automaticamente da Astro e sarà disponibile su `/sitemap-index.xml`.

## Performance

Il sito è ottimizzato per performance:

- ✅ Static Site Generation (SSG)
- ✅ Immagini ottimizzate
- ✅ CSS minificato
- ✅ Font ottimizzati
- ✅ Lazy loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tech Stack

- **Framework**: Astro 5.5.2
- **Styling**: Tailwind CSS v4
- **Icons**: Astro Icon (Iconify)
- **Fonts**: Inter Variable, Bricolage Grotesque
- **Content**: Astro Content Collections
- **SEO**: astro-seo

## Cross-linking con CrownGaming

Il footer include un link a [CrownGaming](https://www.crowngaming.it), il sito fratello dedicato al gaming.

Per modificare o rimuovere questo link, edita `src/components/footer.astro`.

## Troubleshooting

### Build Errors

Se riscontri errori durante il build:

1. Verifica che tutte le dipendenze siano installate: `npm install`
2. Pulisci la cache: `rm -rf node_modules .astro && npm install`
3. Controlla che i file markdown in `/content` abbiano frontmatter valido

### i18n Non Funziona

1. Verifica che localStorage sia abilitato nel browser
2. Controlla la console per errori JavaScript
3. Verifica che i file JSON in `/i18n` siano validi

### Stili Non Applicati

1. Verifica che `global.css` sia importato in `Layout.astro`
2. Controlla che Tailwind stia processando i file correttamente
3. Riavvia il dev server

## Support

Per domande o supporto:

- **Email**: staff@crownserver.it
- **GitHub Issues**: [Apri un issue](https://github.com/crownserver/www.crownserver.it/issues)

## License

Copyright © 2026 CrownServer. All rights reserved.

---

Costruito con ❤️ dal team di CrownServer
