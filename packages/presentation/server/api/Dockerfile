FROM node:16.3

WORKDIR /app

COPY .npmrc .npmrc
COPY ./package*.json ./
RUN npm install

COPY ./packages/presentation/server/api/ ./packages/presentation/server/api/
RUN npm install

WORKDIR /app/packages/presentation/server/api

ENV PORT=3001

EXPOSE 3001