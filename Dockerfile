FROM node:20.10-alpine3.19

RUN npm install
RUN npm run build
EXPOSE 3000

CMD [ "npm", "start" ]
