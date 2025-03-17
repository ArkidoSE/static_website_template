# Static website template
Starter kit for creating a static website with Astro.js, Solid.js and Contentful


## Development setup

This assumes that you want to use Contentful and Solid.js. If you want to use any other setup please checkout https://astro.build/

### Prerequisites

1. Create a Contentful account
2. Create a set of Contentful API keys

### Local setup

1. Clone repository `git clone git@github.com:ArkidoSE/static_website_template.git && cd static_website_template`
2. Install dependencies `npm install`
3. Create dotenv file: `cp .env.example .env` and fill in the required values from your Contentful setup
4. Start development server `npm run dev` and open http://localhost:4321/


## Build release package

Run command `npm run build`. The release package will be placed in the `dist` folder in the root directory
