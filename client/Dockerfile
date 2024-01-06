FROM node:16-alpine
WORKDIR /usr/local/client

COPY package.json .
COPY package-lock.json .

RUN npm ci

EXPOSE 3000

COPY . .

CMD ["npm", "run", "dev"]