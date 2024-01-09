FROM node:lts AS base
RUN mkdir /app
WORKDIR /app
COPY package.json package-lock.json ./

FROM base AS prod-dependencies
RUN npm install --force --production

FROM base AS build-dependencies
RUN npm install --force --production=false

FROM build-dependencies AS build
COPY . /app
RUN npm run build

FROM base AS runtime
COPY --from=prod-dependencies /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
