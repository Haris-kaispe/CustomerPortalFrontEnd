FROM node:14-alpine3.16
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . ./
EXPOSE 3000
CMD ["yarn","run", "dev", "--host=0.0.0.0"]

# npm rebuild esbuild && yarn dev