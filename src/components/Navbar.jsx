import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}></div>
          <span className="text-gradient">LaunchKit</span>
        </div>
        
        <div className={styles.navLinks}>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faq">FAQ</a>
        </div>
        
        <div className={styles.navActions}>
          <button className="btn btn-secondary" style={{ marginRight: '1rem', border: 'none' }}>Log in</button>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
}
