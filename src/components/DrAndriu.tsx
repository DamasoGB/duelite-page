import React from 'react';

import duelite from '../assets/duelite.webp'
import rt from '../assets/rabbittrail.webp'

import octoStrike from '../assets/octo.webp'
import sharkTwist from '../assets/shark.webp'
import zumerios from '../assets/zum.webp'
import goldHeist from '../assets/goldheist.webp'
import snowend from '../assets/snowend.webp'




const DrAndriu = () => {
  return (
    <div style={styles.container}>
      {/* HEADER */}
      <header style={styles.header}>
        <h1 style={styles.name}>Andrés Jiménez</h1>
        <h2 style={styles.role}>Game Developer & Game Designer</h2>
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
              Card-based roguelite published on Steam. Includes deck-building, procedural maps, and strategic battles.
            </p>
            <a href="https://store.steampowered.com/app/2961480/Duelite" target="_blank"  style={styles.link}>Steam Page →</a>
          </div>
          <div style={styles.card}>
            <img src={rt} alt="Rabbit Trail" style={styles.image} />
            <h3>Rabbit Trail</h3>
            <p>
              Puzzle platformer published on Steam. Focused on level design, mechanics and narrative story.
            </p>
            <a href="https://store.steampowered.com/app/3371710/RabbitTrail" target="_blank"  style={styles.link}>Steam Page →</a>
          </div>
        </div>
      </section>

      {/* GAME JAMS */}
      <section>
        <h2 style={styles.sectionTitle}>🚀 Game Jam Projects</h2>
        <div style={styles.grid}>
          {[
            { name: 'Snowend', img: snowend, desc: 'Loop Platformer for the GMTK 2025. Every time Snow falls, the cycle begins again… but not everything resets.', itch: 'https://drandriu.itch.io/snowend'},
            { name: 'Shark Twist', img: sharkTwist, desc: 'FPS + survival jam. Enemy spawner, stamina, mechanic swap.', itch: 'https://antonio-serrano-esquerdo.itch.io/shark-twist'},
            { name: 'Zumerios', img: zumerios, desc: 'Colorful juice shop game. Mix fruits to match colors, manage chaos and earn the King’s visit.', itch: 'https://drandriu.itch.io/zumerios'},
            { name: 'Gold Heist', img: goldHeist, desc: 'Be the villain, sneak around to collect car parts and steal gold while managing stamina and avoiding detection.', itch: 'https://drandriu.itch.io/gold-heist' },
            { name: 'Octo Strike', img: octoStrike, desc: '16-bit arcade jam. Programmed movement, AI, and mechanics.', itch: 'https://drandriu.itch.io/octo-strike' },
          ].map((jam, i) => (
            <div key={i} style={styles.card}>
              <img src={jam.img} alt={jam.name} style={styles.image} />
              <h4>{jam.name}</h4>
              <p>{jam.desc}</p>
              <a href={jam.itch} target="_blank" style={styles.link}>Itch.io Page →</a>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section>
        <h2 style={styles.sectionTitle}>🛠️ Skills & Tools</h2>
        <div style={styles.skillsContainer}>
          {['Unity (C#)', '2D/3D Gameplay Programming', 'Game Design & Level Design', 'Steam Publishing / Itch.io', 'Git', 'Trello', 'Photoshop'].map((skill, i) => (
            <span key={i} style={styles.skillBadge}>{skill}</span>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section>
        <h2 style={styles.sectionTitle}>📅 Career Timeline</h2>
        <div style={styles.timelineContainer}>
          <div style={styles.timelineItem}>
            <div style={styles.timelineDot}></div>
            <div><strong>2022:</strong> Started development of Duelite</div>
          </div>
          <div style={styles.timelineItem}>
            <div style={styles.timelineDot}></div>
            <div><strong>2023:</strong> Published Duelite on Steam</div>
          </div>
          <div style={styles.timelineItem}>
            <div style={styles.timelineDot}></div>
            <div><strong>2024:</strong> Developed and launched Rabbit Trail</div>
          </div>
          <div style={styles.timelineItem}>
            <div style={styles.timelineDot}></div>
            <div><strong>2025:</strong> Developing my third game</div>
          </div>
        </div>
      </section>


            {/* CONTACT */}
      <footer style={styles.footer}>
        <h2></h2>
        <div style={styles.contactButtons}>
          <a href="mailto:drandriu@gmail.com" style={styles.contactButton}>✉️ Email Me</a>
          <a href="https://linkedin.com/in/andresjimenezjimenez" target="_blank" style={styles.contactButton}>💼 LinkedIn</a>
        </div>
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
  link: {
  color: '#00ffd9',
  textDecoration: 'none',
  fontWeight: 'bold',
  display: 'inline-block',
  marginTop: '0.5rem',
  transition: 'color 0.2s ease',
},
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  skillBadge: {
    backgroundColor: '#1e1e1e',
    border: '1px solid #00ffd9',
    color: '#00ffd9',
    padding: '0.3rem 0.7rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    transition: 'background 0.2s ease',
  },

  timelineContainer: {
    position: 'relative',
    margin: '2rem auto',
    paddingLeft: '1.5rem',
    maxWidth: '600px',
    borderLeft: '2px solid #00ffd9',
  },
  timelineItem: {
    position: 'relative',
    marginBottom: '1.5rem',
    paddingLeft: '1rem',
    color: '#ccc',
  },
  timelineDot: {
    position: 'absolute',
    left: '-10px',
    top: '4px',
    width: '12px',
    height: '12px',
    backgroundColor: '#00ffd9',
    borderRadius: '50%',
    boxShadow: '0 0 8px #00ffd9',
  },
    contactButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem',
  },
  contactButton: {
    backgroundColor: '#00ffd9',
    color: '#0e0e0e',
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
    borderRadius: '25px',
    textDecoration: 'none',
    transition: 'transform 0.2s ease, background 0.3s ease',
  },

};

export default DrAndriu;
