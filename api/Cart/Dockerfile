FROM node:16-alpine
WORKDIR /usr/local/cart

COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY .env .

RUN npm ci

EXPOSE 5002

CMD ["npm", "run", "dev"]