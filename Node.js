const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servire i file statici dalla cartella "public"
app.use(express.static(path.join(__dirname, 'public')));

// Avvia il server
app.listen(port, () => {
  console.log(`Sito web avviato su http://squalettimc:${port}`);
});
