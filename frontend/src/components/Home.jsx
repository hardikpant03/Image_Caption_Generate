import React from 'react';
import styles from '../styles.module.css';
import projLogoVideo from '../videos/proj_logo.mp4';
import projectLogoVideo from '../videos/project_logo.mp4';
import catImage from '../background/cat.png';
import { Link } from 'react-router-dom';


const Home = () => {
  
  return (
    <div className={styles.topContainer}>
      <video id="bg-video" autoPlay loop muted>
        <source src={projectLogoVideo} type="video/mp4" />
      </video>
      <div className={styles.info}>
        <h2>The Next-Gen Image Insight Generation</h2>
        <div className={styles.description}>
        <img className={styles.cat} src={catImage} alt="Cat" />
          <h3>
            Let our AI do the talking! Generate captions for your images in
            seconds....
          </h3>
          <h3>So come, upload your images and listen to them come to life</h3>
        </div>
        <div style={{display:'flex' , flexDirection:'column'}}>
        <div>
          <Link className={styles.btn} to="/upload">
          Image Caption Generator!
          </Link>
        </div>
        <div style={{padding:'40px'}}>
          <Link className={styles.btn} to="/text">
          Image Text Extractor!
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
