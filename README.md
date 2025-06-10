# ninja-crawl

![WIP](https://img.shields.io/badge/status-WIP-blueviolet?style=for-the-badge) 
>this repo is in active early-stage development. Expect bugs, breakage, and rapid iteration.

**ninja-crawl** is a NestJS-powered scraping framework built to collect, normalize, and store data relevant to low-income and homeless individuals across the Lower Mainland (BC, Canada). The goal is to build the most comprehensive, real-time database of resources available to someone in crisis — including food programs, shelter availability, hygiene services, public internet, and more.

This project will aggregate data from a wide variety of sources:
- Public websites (via HTML scraping)
- PDF documents (using PDF parsers)
- Open APIs (from municipal, nonprofit, and health organizations)

All harvested data is funneled into a clean, unified format and stored in a PostgreSQL database. From there, it can be exposed via API to support projects like [Street Ninja](https://streetninja.ca) and other community-led initiatives.


### Tech Stack

- **Language**: TypeScript (strict mode)
- **Framework**: NestJS (modular architecture)
- **Scraping Tools**: Playwright, Cheerio, Axios, pdf-parse
- **Database**: PostgreSQL (via Prisma ORM)
- **Job Queue**: BullMQ (Redis-backed async scraping jobs)
- **Parsing/Validation**: Zod
- **Scheduling**: `@nestjs/schedule`
- **Logging**: Pino


This is the scraping backbone of a larger ecosystem. The goal is not just to build tech, but to help people — fast, clean, and at scale.


### Part of the Street Ninja Ecosystem

- 🧠 [Street Ninja SMS App](https://github.com/FirstFlush/street_ninja) — SMS app for finding essential resources by text message
- 🌐 [Street Ninja Website](https://github.com/FirstFlush/website_street_ninja) — public-facing site and map of live resource data