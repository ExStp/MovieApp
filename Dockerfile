# Этап 1: Сборка приложения
FROM node AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Этап 2: Настройка nginx для обслуживания собранного приложения
FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]