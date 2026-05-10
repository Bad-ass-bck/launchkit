import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="glow-bg"></div>
      <div className={`container ${styles.heroContainer}`}>
        <div className={`${styles.heroContent} animate-fade-in`}>
          <div className={styles.badge}>
            <span className={styles.badgePulse}></span>
            <span>LaunchKit v2.0 is now live</span>
          </div>
          
          <h1 className={styles.title}>
            The absolute best way to build <br />
            <span className="text-gradient-accent">SaaS Landing Pages</span>
          </h1>
          
          <p className={styles.subtitle}>
            A premium, modern, and converting landing page template for your next SaaS product. 
            Built with React and perfectly designed to impress your visitors.
          </p>
          
          <div className={styles.ctaGroup}>
            <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}>
              Get Started <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </button>
            <button className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}>
              View Documentation
            </button>
          </div>
          
          <div className={styles.socialProof}>
            <div className={styles.avatars}>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={styles.avatar} style={{ zIndex: 5 - i }}>
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                </div>
              ))}
            </div>
            <div className={styles.proofText}>
              <div className={styles.stars}>★★★★★</div>
              <span>Trusted by 10,000+ founders</span>
            </div>
          </div>
        </div>

        <div className={`${styles.dashboardWrapper} animate-fade-in delay-300`}>
          <div className={styles.dashboardGlow}></div>
          <div className={`glass-panel ${styles.dashboardMock}`}>
            <div className={styles.mockHeader}>
              <div className={styles.mockDots}>
                <span></span><span></span><span></span>
              </div>
              <div className={styles.mockUrl}>launchkit.dev</div>
            </div>
            <div className={styles.mockBody}>
              {/* Dashboard visualization */}
              <div className={styles.sidebar}>
                <div className={styles.skeletonLine} style={{ width: '80%', marginBottom: '2rem' }}></div>
                <div className={styles.skeletonLine} style={{ width: '60%' }}></div>
                <div className={styles.skeletonLine} style={{ width: '70%' }}></div>
                <div className={styles.skeletonLine} style={{ width: '50%' }}></div>
                <div className={styles.skeletonLine} style={{ width: '65%' }}></div>
              </div>
              <div className={styles.mainContent}>
                <div className={styles.headerRow}>
                  <div>
                    <div className={styles.skeletonTitle}></div>
                    <div className={styles.skeletonLine} style={{ width: '150px' }}></div>
                  </div>
                  <div className={styles.skeletonBtn}></div>
                </div>
                <div className={styles.statsGrid}>
                  {[1, 2, 3].map(i => (
                    <div key={i} className={styles.statCard}>
                      <div className={styles.skeletonLine} style={{ width: '40%' }}></div>
                      <div className={styles.skeletonTitle} style={{ width: '70%', height: '24px', marginTop: '1rem' }}></div>
                    </div>
                  ))}
                </div>
                <div className={styles.chartArea}>
                  <div className={styles.chartLine}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
