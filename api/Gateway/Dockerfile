FROM node:16-alpine AS base

FROM base AS dev
RUN echo "Run as Dev"

WORKDIR /usr/local/gateway

COPY package.json .
COPY package-lock.json .
COPY .env .

RUN npm ci

EXPOSE 5000

COPY tsconfig.json .
CMD ["npm", "run", "dev"]

FROM base AS prod
RUN echo "Run as Prod"

WORKDIR /usr/local/gateway

COPY package.json .
COPY package-lock.json .
COPY .env .
COPY ./src .

RUN npm ci

EXPOSE 5000

COPY tsconfig.json .
CMD ["npm", "run", "dev"]


