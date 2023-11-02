FROM node:16.14-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .
RUN mv dockerize/env-staging .env

RUN npm install
RUN npm run build

CMD ["npm", "run", "serve"]
