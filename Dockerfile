FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @nestjs/cli

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:${NODE_ENV}"]
