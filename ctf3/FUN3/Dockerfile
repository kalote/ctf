FROM node:alpine

# Install
COPY package*.json /tmp/
RUN cd /tmp && npm install
RUN mkdir -p /opt/app-root/src && cp -a /tmp/node_modules /opt/app-root/src/

# Copy src
WORKDIR /opt/app-root/src
ADD . .

EXPOSE 8080
CMD ["node", "index.js"]
