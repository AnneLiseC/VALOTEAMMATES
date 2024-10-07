import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Valorant Team Mate</h1>
      <div style={styles.buttonContainer}>
        <Link to="/register" style={styles.button}>Register</Link>
        <Link to="/login" style={styles.button}>Login</Link>
      </div>
      <div style={styles.modeContainer}>
        <Link to="/casual" style={styles.modeButton}>Play in Casual</Link>
        <Link to="/ranked" style={styles.modeButton}>Play in Ranked</Link>
        <Link to="/competition" style={styles.modeButton}>Competition</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  buttonContainer: {
    margin: '20px',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  },
  modeContainer: {
    marginTop: '40px',
  },
  modeButton: {
    display: 'block',
    margin: '10px auto',
    padding: '15px 30px',
    backgroundColor: '#28a745',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    width: '200px',
  },
};

export default Home;
