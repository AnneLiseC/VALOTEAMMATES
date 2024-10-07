require('dotenv').config();
const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');
const mysql = require('mysql2');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err.stack);
    return;
  }
  console.log('Connecté à la base de données.');
});

// Vérifier la communication entre le client et le serveur
app.get('/api/test', (req, res) => {
  res.json({ message: 'Le serveur fonctionne correctement !' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// Route d'inscription
app.post('/api/register', (req, res) => {
  const { pseudo, email, password, age, platform, language, riotId, currentLevel, mainRole, favoriteAgents } = req.body;
  
  // Hashage du mot de passe (à implémenter pour la sécurité)
  // Pour simplifier, nous allons stocker le mot de passe en clair (À NE PAS UTILISER EN PROD)
  
  const query = 'INSERT INTO users (pseudo, email, password, age, platform, language, riotId, currentLevel, mainRole, favoriteAgents) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [pseudo, email, password, age, platform, language, riotId, currentLevel, mainRole, favoriteAgents];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de l\'inscription');
    }
    res.status(201).send('Utilisateur inscrit avec succès');
  });
});

// Route de connexion
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  const values = [email, password];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de la connexion');
    }

    if (results.length > 0) {
      // Générer un token (à implémenter pour la gestion de sessions)
      res.status(200).send('Connexion réussie');
    } else {
      res.status(401).send('E-mail ou mot de passe incorrect');
    }
  });
});
