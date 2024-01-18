FROM node:16-alpine
WORKDIR /usr/local/products

COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY .env .
COPY prisma ./prisma

RUN npm ci

EXPOSE 5003

CMD ["npm", "run", "dev"]