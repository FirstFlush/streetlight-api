# Streetlight API

![WIP](https://img.shields.io/badge/status-WIP-blueviolet?style=for-the-badge)  
> This repo is in active early-stage development. Expect bugs, breakage, and rapid iteration.

**Streetlight API** is the public infrastructure layer of the Street Ninja ecosystem — a clean, standards-based API for exposing real-time resource data to support homeless and low-income individuals in Vancouver.

The goal is to make Streetlight API the most accurate and up-to-date source of crisis resources available, built not just for Street Ninja, but for any nonprofit, outreach team, or civic tech project that wants to help.

This app is responsible for:

- Scheduling scraping jobs (HTML, PDF, API)
- Passing raw content to the Python-powered [Ninja Crawl](https://github.com/FirstFlush/ninja_crawl) scraping engine
- Validating, normalizing, and storing structured resource data (shelters, meals, hygiene, etc.)
- Exposing a clean, public-facing API


## 🔗 Architecture

Streetlight API delegates all parsing logic to [**Ninja Crawl**](https://github.com/FirstFlush/ninja_crawl), a standalone Python FastAPI service. This app never scrapes HTML or PDFs directly — instead, it handles orchestration:

1. Fetches raw content (using Axios, Playwright, or external APIs)
2. Sends raw data to Ninja Crawl (`POST /scrape`)
3. Validates the response using Zod schemas
4. Saves the result to PostgreSQL via Prisma


## 🧱 Tech Stack

- **Language**: TypeScript (strict)
- **Framework**: NestJS
- **HTTP Client**: Axios
- **Browser Automation**: Playwright
- **Database**: PostgreSQL (Prisma ORM)
- **Scraping Queue**: BullMQ (Redis-backed jobs)
- **Validation**: Zod
- **Scheduling**: `@nestjs/schedule`
- **Logging**: Pino
- **Testing**: Jest


## 🔍 Know a Data Source?

Know of a website, PDF, or open data portal that lists services for unhoused or low-income people in BC?

Please reach out. I’m always looking to expand the dataset that powers Street Ninja.

Start a discussion, open an issue, or [email me](mailto:firstflush@protonmail.com).


## 🕸 Street Ninja Ecosystem

- [Streetlight API (you are here)](https://github.com/FirstFlush/streetlight-api) — orchestrates scraping and exposes public API
- [Ninja Crawl](https://github.com/FirstFlush/ninja_crawl) — Python-based scraping engine (HTML/PDF → JSON)
- [Street Ninja SMS App](https://github.com/FirstFlush/street_ninja) — SMS assistant for accessing resources by text
- [Street Ninja Website](https://github.com/FirstFlush/website_street_ninja) — map and public frontend


## ☕ Support This Project

If you believe in what I'm building and want to help cover hosting or SMS costs:

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Donate-yellow?logo=buy-me-a-coffee&style=for-the-badge)](https://www.buymeacoffee.com/firstflush)
