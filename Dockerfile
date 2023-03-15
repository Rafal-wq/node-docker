FROM node:18-alpine
COPY package.json /app/
COPY index.js /app/
WORKDIR /app
RUN npm install
CMD ["node", "index.js"]