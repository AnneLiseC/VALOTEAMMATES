import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    pseudo: '',
    email: '',
    password: '',
    age: '',
    platform: 'PC',
    language: 'Français',
    riotId: '',
    currentLevel: '',
    mainRole: [],
    favoriteAgents: '',
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value, options } = event.target;
  
    // Vérifie si le champ est une sélection multiple
    if (name === "mainRole") {
      const selectedRoles = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);
      
      setFormData({ ...formData, [name]: selectedRoles });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    setSuccess(false); // Reset success message
  
    try {
      const response = await axios.post('/api/register', formData);
      console.log(response.data); // Afficher la réponse dans la console ou traiter les données
      setSuccess(true); // Indiquer que l'inscription est réussie
    } catch (error) {
      setError('Une erreur est survenue lors de l\'inscription.');
      console.error("Erreur lors de l'inscription :", error);
    }
  };  
  
  return (
    <div style={styles.container}>
      <h2>Registration</h2>

      {success && <p style={{ color: 'green' }}>Inscription réussie !</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="pseudo" placeholder="Pseudo" value={formData.pseudo} onChange={handleChange} required style={styles.input}/>
        <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required style={styles.input}/>
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={styles.input}/>
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required style={styles.input}/>
        <select name="platform" value={formData.platform} onChange={handleChange} style={styles.input}>
          <option value="PC">PC</option>
          <option value="Console">Console</option>
        </select>
        <select name="language" value={formData.language} onChange={handleChange} style={styles.input}>
          <option value="French">French</option>
          <option value="English">English</option>
          <option value="Mandarin">Mandarin</option>
          <option value="Japanese">Japanese</option>
          <option value="Korean">Korean</option>
          <option value="Spanish">Spanish</option>
          <option value="German">German</option>
          <option value="Russian">Russian</option>
          <option value="Turkish">Turkish</option>
        </select>
        <input type="text" name="riotId" placeholder="Riot ID" value={formData.riotId} onChange={handleChange} required style={styles.input}/>
        <select name="currentLevel" value={formData.currentLevel} onChange={handleChange} required style={styles.input}>
          <option value="" disabled>Choisissez votre niveau</option>
          <option value="Fer I">Fer I</option>
          <option value="Fer II">Fer II</option>
          <option value="Fer III">Fer III</option>
          <option value="Bronze I">Bronze I</option>
          <option value="Bronze II">Bronze II</option>
          <option value="Bronze III">Bronze III</option>
          <option value="Argent I">Argent I</option>
          <option value="Argent II">Argent II</option>
          <option value="Argent III">Argent III</option>
          <option value="Or I">Or I</option>
          <option value="Or II">Or II</option>
          <option value="Or III">Or III</option>
          <option value="Platine I">Platine I</option>
          <option value="Platine II">Platine II</option>
          <option value="Platine III">Platine III</option>
          <option value="Diamant I">Diamant I</option>
          <option value="Diamant II">Diamant II</option>
          <option value="Diamant III">Diamant III</option>
          <option value="Immortel I">Immortel I</option>
          <option value="Immortel II">Immortel II</option>
          <option value="Immortel III">Immortel III</option>
          <option value="Radiant">Radiant</option>
        </select>


        <select name="mainRole" value={formData.mainRole} onChange={handleChange} required multiple style={styles.input}>
          <option value="Duelist">Duelist</option>
          <option value="Controller">Controller</option>
          <option value="Initiator">Initiator</option>
          <option value="Sentinel">Sentinelle</option>
        </select>

        <input type="text" name="favoriteAgents" placeholder="Favorite Agents" value={formData.favoriteAgents} onChange={handleChange} required style={styles.input}/>
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    margin: '10px',
    padding: '10px',
    width: '300px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Register;
