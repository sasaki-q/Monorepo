FROM node:16.3

WORKDIR /app

COPY .npmrc .npmrc
COPY ./package*.json ./
RUN npm install

COPY ./packages/presentation/client/app/ ./packages/presentation/client/app/
RUN npm install

WORKDIR /app/packages/presentation/client/app

ENV PORT=3000

EXPOSE 3000