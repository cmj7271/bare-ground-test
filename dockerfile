FROM node:22-alpine3.19

WORKDIR /front/app/

COPY package.json package-lock.json /front/app/

RUN npm install

COPY . /front/app/

EXPOSE 5173

CMD [ "npm", "run", "dev" ]