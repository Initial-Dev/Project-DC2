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
COPY .env .

RUN npm ci

COPY ./dist ./dist

EXPOSE 3000

CMD ["npm", "run", "dev"]


