const express = require('express');
const app = express();
const port = 5000;

// Route de test pour vérifier si le serveur fonctionne
app.get('/', (req, res) => {
  res.send('ça fonctionne dinguerie!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
