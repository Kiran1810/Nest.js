FROM node:18 AS builder

WORKDIR /app

# copy dependency files
COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18

WORKDIR /app


COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

ARG SERVER_RELEASE_VERSION
ENV SERVER_RELEASE_VERSION=${SERVER_RELEASE_VERSION}

CMD ["/bin/sh", "-c", "npm run start:migrate:prod"]
