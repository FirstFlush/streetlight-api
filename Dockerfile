FROM node:20-slim

# Install Chromium deps
RUN apt-get update && apt-get install -y \
  wget ca-certificates fonts-liberation libappindicator3-1 libasound2 libatk-bridge2.0-0 \
  libatk1.0-0 libcups2 libdbus-1-3 libgdk-pixbuf2.0-0 libnspr4 libnss3 libxcomposite1 \
  libxdamage1 libxrandr2 xdg-utils libu2f-udev libvulkan1 \
  && apt-get clean && rm -rf /var/lib/apt/lists/*

# Set workdir and copy files
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Install chromium only (you've already done it locally but Docker needs it too)
RUN npx playwright install chromium

# Run app
CMD ["npm", "run", "start:prod"]
