FROM node:lts-alpine

WORKDIR app

COPY index.js newrelic.js package.json yarn.lock ./

RUN yarn

ENTRYPOINT yarn start

EXPOSE 4000

ENV PORT=4000
ENV DATABASE_URL=postgresql://postgres:password@db:5432/postgres
ENV SESSION_SECRET=keyboard-cat-dart

LABEL version="0.3.4-beta.0"
LABEL maintainer="Birkir Gudjonsson <birkir.gudjonsson@gmail.com>"
