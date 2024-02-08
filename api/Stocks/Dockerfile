FROM node:16-alpine AS base

FROM base AS dev
RUN echo "Run as Dev"

WORKDIR /usr/local/stocks

COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY .env .

RUN npm ci

EXPOSE 5004

CMD ["npm", "run", "dev"]

FROM base AS prod
RUN echo "Run as Prod"

WORKDIR /usr/local/stocks

COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY .env .

RUN npm ci

COPY ./dist ./dist

EXPOSE 5004

CMD ["npm", "start"]


