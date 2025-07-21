import React from 'react';

import duelite from '../assets/duelite.webp'
import rt from '../assets/rabbittrail.webp'

import octoStrike from '../assets/duelite.webp'
import sharkTwist from '../assets/rabbittrail.webp'
import zumerios from '../assets/duelite.webp'
import goldHeist from '../assets/rabbittrail.webp'




const DrAndriu = () => {
  return (
    <div style={styles.container}>
      {/* HEADER */}
      <header style={styles.header}>
        <h1 style={styles.name}>Andrés Jiménez</h1>
        <h2 style={styles.role}>Game Developer</h2>
        <p style={styles.description}>
          Indie developer with 3+ years of experience. Published 2 games on Steam and built several game jam titles across various genres. Passionate about game mechanics, systems design, and fun.
        </p>
      </header>

      {/* PUBLISHED GAMES */}
      <section>
        <h2 style={styles.sectionTitle}>🎮 Published Games</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <img src={duelite} alt="Duelite" style={styles.image} />
            <h3>Duelite</h3>
            <p>
              Card-based roguelite published on Steam. Solo developed. Includes deck-building, procedural maps, and strategic battles.
            </p>
            <a href="https://store.steampowered.com/app/2961480/Duelite" target="_blank">Steam Page →</a>
          </div>
          <div style={styles.card}>
            <img src={rt} alt="Rabbit Trail" style={styles.image} />
            <h3>Rabbit Trail</h3>
            <p>
              Puzzle platformer published on Steam. Focused on level design, mechanics and exploration. Built with Unity.
            </p>
            <a href="https://store.steampowered.com/app/3371710/RabbitTrail" target="_blank">Steam Page →</a>
          </div>
        </div>
      </section>

      {/* GAME JAMS */}
      <section>
        <h2 style={styles.sectionTitle}>🚀 Game Jam Projects</h2>
        <div style={styles.grid}>
          {[
            { name: 'Octo Strike', img: '/assets/octo-strike.png', desc: '16-bit arcade jam. Programmed movement, AI, and mechanics.' },
            { name: 'Shark Twist', img: '/assets/shark-twist.png', desc: 'FPS + survival jam. Enemy spawner, stamina, mechanic swap.' },
            { name: 'Zumerios', img: '/assets/zumerios.png', desc: 'Tactics-style project. Created terrain and character systems.' },
            { name: 'Gold Heist', img: '/assets/gold-heist.png', desc: 'Top-down shooter. Item pickup, enemy logic and weapons.' },
          ].map((jam, i) => (
            <div key={i} style={styles.card}>
              <img src={jam.img} alt={jam.name} style={styles.image} />
              <h4>{jam.name}</h4>
              <p>{jam.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section>
        <h2 style={styles.sectionTitle}>🛠️ Skills & Tools</h2>
        <ul style={styles.list}>
          <li>Unity (C#)</li>
          <li>2D/3D Gameplay Programming</li>
          <li>Game Design & Level Design</li>
          <li>Steam Publishing / Itch.io</li>
          <li>Git, Trello, Photoshop</li>
        </ul>
      </section>

      {/* TIMELINE */}
      <section>
        <h2 style={styles.sectionTitle}>📅 Career Timeline</h2>
        <ul style={styles.timeline}>
          <li><strong>2022:</strong> Started development of Duelite</li>
          <li><strong>2023:</strong> Published Duelite on Steam</li>
          <li><strong>2024:</strong> Developed and launched Rabbit Trail</li>
          <li><strong>2025:</strong> Seeking first role in game industry</li>
        </ul>
      </section>

      {/* CONTACT */}
      <footer style={styles.footer}>
        <h2>📬 Contact</h2>
        <ul style={styles.list}>
          <li>Email: andres.dev@gmail.com</li>
          <li><a href="https://github.com/drandriu" target="_blank">GitHub</a></li>
          <li><a href="https://linkedin.com/in/drandriu" target="_blank">LinkedIn</a></li>
        </ul>
      </footer>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#0e0e0e',
    color: '#fff',
    padding: '2rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  name: {
    fontSize: '3rem',
    margin: 0,
  },
  role: {
    fontSize: '1.5rem',
    color: '#00ffd9',
    margin: '0.5rem 0',
  },
  description: {
    maxWidth: '600px',
    margin: '0 auto',
    fontSize: '1.1rem',
    color: '#ccc',
  },
  sectionTitle: {
    fontSize: '2rem',
    borderBottom: '2px solid #00ffd9',
    marginBottom: '1rem',
    marginTop: '3rem',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#1e1e1e',
    padding: '1rem',
    borderRadius: '10px',
    width: '280px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0,255,255,0.2)',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '6px',
    marginBottom: '0.5rem',
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0,
    fontSize: '1rem',
  },
  timeline: {
    listStyle: 'square',
    paddingLeft: '1rem',
    color: '#bbb',
  },
  footer: {
    marginTop: '4rem',
    textAlign: 'center',
  },
};

export default DrAndriu;
