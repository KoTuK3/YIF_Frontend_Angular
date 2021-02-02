FROM node:latest as build-step

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app

RUN npm install

COPY . /app
RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /app/dist/YIF-Frontend-Angular /usr/share/nginx/html