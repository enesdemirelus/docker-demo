FROM node:24-alpine3.24

RUN addgroup app && adduser -S -G app app

WORKDIR /website
RUN chown app:app /website

USER app

COPY --chown=app:app package*.json .

RUN npm install

COPY --chown=app:app . .

cmd ["npm", "run", "dev"]