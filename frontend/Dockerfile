# Etapa de build
FROM node:24 as builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build 

FROM nginx:alpine

COPY --from=builder app/dist/controle-estoque/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]