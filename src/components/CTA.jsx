import { ArrowRight } from 'lucide-react';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={`glass-panel ${styles.ctaWrapper}`}>
          <div className={styles.glowBg}></div>
          <div className={styles.content}>
            <h2>Ready to launch your next big thing?</h2>
            <p>Join thousands of founders who are building better landing pages in half the time.</p>
            
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={styles.input}
                required
              />
              <button type="submit" className={`btn btn-primary ${styles.btn}`}>
                Get Access <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </button>
            </form>
            <p className={styles.disclaimer}>No credit card required. 14-day free trial.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
