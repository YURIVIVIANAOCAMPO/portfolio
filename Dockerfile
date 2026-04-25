# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Para despliegue estático en S3, los archivos estarán en /app/out
# Si quieres ejecutarlo como servidor Docker normal (ej: en EC2 o App Runner):
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/out ./out

EXPOSE 3000
CMD ["npm", "start"]
