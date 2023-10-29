FROM node:18.17.1 AS build

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]