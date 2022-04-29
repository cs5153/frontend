FROM node:alpine

COPY . ./

RUN npm install --force &&\
    npm run build &&\
    npm install -g serve

CMD ["serve", "-s", "build", "-l", "80"]
