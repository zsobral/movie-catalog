FROM node:10-alpine

ARG NODE_ENV=production
ARG PORT=3000

ENV NODE_ENV $NODE_ENV
ENV PORT $PORT

EXPOSE $PORT

# update to the latest npm
RUN npm i npm@latest -g

# create a folder with non root permissions
RUN mkdir /opt/node_app && chown node:node /opt/node_app
WORKDIR /opt/node_app
USER node
COPY package.json package-lock.json ./
RUN npm i && npm cache clean --force
ENV PATH /opt/node_app/node_modules/.bin:$PATH

HEALTHCHECK --interval=30s CMD node healthcheck.js

WORKDIR /opt/node_app/app
COPY . .

CMD ["node", "index.js"]
