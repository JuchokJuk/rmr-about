FROM node:12-alpine
RUN npm install pm2 -g

#ADD ./lib /app/lib/
ADD ./public /app/public/
ADD ./src /app/src/
ADD ./shared /app/shared/
ADD ./.eslintrc.json /app/
ADD ./next.config.js /app/
ADD ./package.json /app/
ADD ./package-lock.json /app/
ADD ./run.json /app/
ADD ./server.js /app/
ADD ./service-worker.js /app/
ADD ./.env /app/
ADD ./run-node-cluster.sh /scripts/
ADD ./config /app/config/
WORKDIR /app

RUN rm -rf node_modules
RUN rm -rf ./.cache
RUN rm -rf ./.next
#RUN rm -f ./.env
#RUN rm -f ./package-lock.json

#RUN npm i --only=prod
RUN npm ci
RUN ls -la
RUN npm run build
ENTRYPOINT []
CMD []
