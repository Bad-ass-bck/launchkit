import styles from './Footer.module.css';
import { MessageCircle, Globe, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}></div>
              <span>LaunchKit</span>
            </div>
            <p className={styles.description}>
              The absolute best way to build SaaS landing pages. 
              Stop wasting time and start selling today.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Twitter"><MessageCircle size={20} /></a>
              <a href="#" aria-label="GitHub"><Globe size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Mail size={20} /></a>
            </div>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linksColumn}>
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#">Changelog</a></li>
              </ul>
            </div>
            <div className={styles.linksColumn}>
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Templates</a></li>
              </ul>
            </div>
            <div className={styles.linksColumn}>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} LaunchKit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
