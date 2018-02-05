FROM node:alpine AS build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . /app
RUN npm run package

FROM alpine:latest
WORKDIR /app
ENV NODE_ENV=production
RUN apk update && apk add --no-cache libstdc++ libgcc
COPY --from=build /app/app /app/app
COPY --from=build /app/db/ /app/db
COPY --from=build /app/dist/ /app/dist
CMD ["/app/app"]