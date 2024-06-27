const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

// Mengaktifkan CORS untuk semua domain (perhatikan untuk pengembangan saja)
app.use(cors());

// Middleware untuk mengurai body request sebagai JSON
app.use(bodyParser.json());

// Endpoint untuk menerima POST request di /api/posts
app.post('/api/posts', (req, res) => {
  const postData = req.body;
  console.log('Data diterima:', postData);

  // Berikan respons balik ke klien
  res.status(201).json({ message: 'Data berhasil diterima', data: postData });
});

app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:8000`);
});
