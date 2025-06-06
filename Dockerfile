FROM node:17-alpine

WORKDIR /electronics-store

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]