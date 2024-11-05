# syntax = docker/dockerfile:1

# Első szakasz: építés
FROM node:20.15.1-slim as build

WORKDIR /app

# Függőségek telepítése
COPY package*.json ./
RUN npm install
COPY . .

# NestJS buildelése
RUN npm run build

# Második szakasz: futtatás
FROM node:20.15.1-slim

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE 8080

CMD ["node", "dist/main"]
