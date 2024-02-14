FROM node:16-alpine AS devbase

FROM devbase AS dev
RUN echo "Run as Dev"

WORKDIR /usr/local/client

COPY package.json .
COPY package-lock.json .
COPY .env .

RUN npm ci

EXPOSE 3000

CMD ["npm", "run", "dev"]

FROM nginx:alpine AS prodbase

FROM prodbase AS prod
RUN echo "Run as Prod"

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY dist/ .

COPY custom-nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000


