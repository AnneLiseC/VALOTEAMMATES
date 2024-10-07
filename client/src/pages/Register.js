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
    mainRole: '',
    favoriteAgents: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', formData);
      console.log(response.data); // Utilise la réponse ici
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Registration</h2>
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
        <input type="text" name="currentLevel" placeholder="Current Level" value={formData.currentLevel} onChange={handleChange} required style={styles.input}/>
        <select name="mainRole" value={formData.mainRole} onChange={handleChange} required style={styles.input}>
          <option value="">Select the main role</option>
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
