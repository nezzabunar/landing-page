# Gunakan Node.js image sebagai base image
FROM node:16

# Set working directory di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependencies aplikasi
RUN npm install

# Salin seluruh kode aplikasi ke dalam container
COPY . .

# Ekspos port aplikasi
EXPOSE 3000

# Jalankan aplikasi
CMD ["node", "server.js"]
