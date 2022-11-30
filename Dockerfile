FROM node:16.18.1-alpine3.16
LABEL maintainer="Paulo Gomes da Cruz Junior <paulushc@gmail.com>"

WORKDIR /app/

COPY build/ .
COPY simple-pm2-process.json ./

RUN npm install pm2@5.2.2 serve@14.1.2 -g

CMD ["pm2-runtime","simple-pm2-process.json"]
