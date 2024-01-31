FROM node:14-alpine

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY .. ..

RUN npm build run

EXPOSE 3000

CMD [ "npm", "start" ]