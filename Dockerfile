FROM node:18

WORKDIR /node-app
COPY /node-app .
# COPY /node-app/package.json .
RUN npm install

CMD npm run dev
