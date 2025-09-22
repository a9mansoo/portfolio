FROM node:20 as build


WORKDIR /opt/app

COPY portfolio/ ./

RUN npm install package-lock.json

RUN npm run build


FROM nginx:stable-alpine
COPY --from=build /opt/app/dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/
CMD ["nginx", "-g", "daemon off;"]
