// Mengimpor Express
const express = require('express');
const path = require('path');
const cors = require('cors');

// Membuat instance dari Express
const app = express();

// Mengaktifkan CORS untuk semua domain
app.use(cors());

// Menentukan port server
const PORT = process.env.PORT || 3000;

// Menyajikan file statis dari folder "public"
app.use(express.static(path.join(__dirname, 'public')));

// Menyajikan landing page (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  console.log('log')
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
