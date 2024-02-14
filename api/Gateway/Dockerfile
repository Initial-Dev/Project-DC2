FROM node:16-alpine
WORKDIR /usr/local/gateway

COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY .env .
COPY prisma ./prisma

RUN npm ci

EXPOSE 5000

COPY tsconfig.json .
CMD ["npm", "run", "dev"]