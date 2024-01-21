FROM node:16-alpine AS base

FROM base AS dev
RUN echo "Run as Dev"

WORKDIR /usr/local/cart

COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY .env .
COPY prisma ./prisma

RUN npm ci

EXPOSE 5002

CMD ["npm", "run", "dev"]

FROM base AS prod
RUN echo "Run as Prod"

WORKDIR /usr/local/cart

COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY .env .
COPY prisma ./prisma
COPY ./src .

RUN npm ci

EXPOSE 5002

CMD ["npm", "run", "dev"]


