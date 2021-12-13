FROM node:17-alpine

WORKDIR /app

COPY . .

RUN sh ./docker/install_deps.sh

CMD ["node", "./build/server.prod.js"]
