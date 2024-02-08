FROM node:16-alpine AS base

FROM base AS dev
RUN echo "Run as Dev"

WORKDIR /usr/local/client

COPY package.json .
COPY package-lock.json .
COPY .env .

RUN npm ci

EXPOSE 3000

CMD ["npm", "run", "dev"]

FROM base AS prod
RUN echo "Run as Prod"

WORKDIR /usr/local/client

COPY package*.json .
COPY src/ ./src
COPY public/ ./public
COPY tailwind.config.ts .
COPY components.json .
COPY index.html .
COPY vite.config.ts .
COPY .env .

RUN npm ci

EXPOSE 3000

CMD ["npm", "run", "dev"]


