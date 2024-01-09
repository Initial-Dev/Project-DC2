FROM node:16-alpine
WORKDIR /usr/local/stocks

COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY .env .

RUN npm ci

EXPOSE 5004

CMD ["npm", "run", "dev"]