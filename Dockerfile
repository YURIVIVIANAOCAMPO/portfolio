# --- STAGE 1: Build ---
FROM node:20-alpine AS builder
WORKDIR /app

# Instalamos dependencias primero para aprovechar el cache de Docker
COPY package*.json ./
RUN npm install

# Copiamos el resto del código y construimos el sitio estático
COPY . .
RUN npm run build

# --- STAGE 2: Export ---
# Esta etapa es solo para que sepas dónde están los archivos.
# Al final del proceso, los archivos estarán en la carpeta /app/out del contenedor.
FROM alpine:latest AS exporter
WORKDIR /app
COPY --from=builder /app/out ./out
CMD ["cp", "-r", "./out", "/target"]
