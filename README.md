# ninja-crawl

![WIP](https://img.shields.io/badge/status-WIP-blueviolet?style=for-the-badge) 
>this repo is in active early-stage development. Expect bugs, breakage, and rapid iteration.

**ninja-crawl** is a NestJS-powered scraping framework built to collect, normalize, and store data relevant to low-income and homeless individuals across the Lower Mainland (BC, Canada). The goal is to build the most comprehensive, real-time database of resources available to someone in crisis — including food programs, shelter availability, hygiene services, public internet, and more.

This project will aggregate data from a wide variety of sources:
- Public websites (via HTML scraping)
- PDF documents (using PDF parsers)
- Open APIs (from municipal, nonprofit, and health organizations)

All harvested data is funneled into a clean, unified format and stored in a PostgreSQL database. From there, it can be exposed via API to support projects like [Street Ninja](https://streetninja.ca) and other community-led initiatives.


## Tech Stack

- **Language**: TypeScript (strict mode)
- **Framework**: NestJS
- **Scraping Tools**: Playwright, Cheerio, Axios, pdf-parse
- **Database**: PostgreSQL (via Prisma ORM)
- **Job Queue**: BullMQ (Redis-backed async scraping jobs)
- **Parsing/Validation**: Zod
- **Scheduling**: `@nestjs/schedule`
- **Logging**: Pino


## 💡 Know a Data Source?

If you’re aware of a public website, PDF, API, or any source of useful information for homeless or low-income individuals in BC — please reach out.

I'm always looking for new data to scrape, parse, and include in the Street Ninja resource network.

Open an issue, start a discussion, or [email me](mailto:firstflush@protonmail.com). Let's make this dataset better together.


## Part of the Street Ninja Ecosystem

- 🧠 [Street Ninja SMS App](https://github.com/FirstFlush/street_ninja) — SMS app for finding essential resources by text message
- 🌐 [Street Ninja Website](https://github.com/FirstFlush/website_street_ninja) — public-facing site and map of live resource data


## ☕ Support This Project

If you believe in what I'm building and want to help cover hosting, SMS infrastructure, or even just a cup of coffee while I write scrapers at 2am:

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Donate-yellow?logo=buy-me-a-coffee&style=for-the-badge)](https://www.buymeacoffee.com/firstflush)