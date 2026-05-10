import { Zap, Shield, Smartphone, Globe, BarChart3, Clock } from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    icon: <Zap className={styles.icon} />,
    title: 'Lightning Fast',
    description: 'Built on modern React architecture ensuring sub-second load times and silky smooth animations.'
  },
  {
    icon: <Shield className={styles.icon} />,
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols out of the box. Your users data is encrypted and safe.'
  },
  {
    icon: <Smartphone className={styles.icon} />,
    title: 'Fully Responsive',
    description: 'Flawless experience across all devices. Mobile, tablet, or 4K monitors – it just works perfectly.'
  },
  {
    icon: <Globe className={styles.icon} />,
    title: 'Global CDN',
    description: 'Deploy anywhere. Edge computing capabilities mean your site is fast no matter where your users are.'
  },
  {
    icon: <BarChart3 className={styles.icon} />,
    title: 'Advanced Analytics',
    description: 'Built-in tracking capabilities. Know exactly how your users are interacting with your platform.'
  },
  {
    icon: <Clock className={styles.icon} />,
    title: 'Setup in Minutes',
    description: 'Don\'t waste weeks on landing pages. LaunchKit gets you from zero to production in hours.'
  }
];

export default function Features() {
  return (
    <section id="features" className={styles.featuresSection}>
      <div className="container">
        <div className="section-title">
          <h2 className="text-gradient">Everything you need to scale</h2>
          <p>
            LaunchKit comes packed with everything a modern SaaS needs. 
            Focus on your product, let us handle the presentation.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={`glass-panel ${styles.card}`}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
