import { useState } from 'react';
import { Check } from 'lucide-react';
import styles from './Pricing.module.css';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      price: isAnnual ? '$9' : '$12',
      description: 'Perfect for side projects and indie hackers.',
      features: ['Up to 1,000 visitors/mo', 'Custom domain', 'Basic analytics', 'Community support'],
      popular: false,
    },
    {
      name: 'Pro',
      price: isAnnual ? '$29' : '$39',
      description: 'For growing startups ready to scale.',
      features: ['Up to 50,000 visitors/mo', 'Multiple domains', 'Advanced analytics', 'Priority email support', 'A/B testing'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: isAnnual ? '$99' : '$129',
      description: 'For large teams with complex needs.',
      features: ['Unlimited visitors', 'Unlimited domains', 'Custom reporting', '24/7 phone support', 'Dedicated account manager', 'SSO authentication'],
      popular: false,
    }
  ];

  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className="container">
        <div className="section-title">
          <h2 className="text-gradient">Simple, transparent pricing</h2>
          <p>Start for free, upgrade when you need to. No hidden fees.</p>
        </div>

        <div className={styles.toggleWrapper}>
          <span className={!isAnnual ? styles.activeText : styles.inactiveText}>Monthly</span>
          <button 
            className={`${styles.toggle} ${isAnnual ? styles.toggleActive : ''}`}
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <span className={styles.toggleKnob}></span>
          </button>
          <span className={isAnnual ? styles.activeText : styles.inactiveText}>
            Annually <span className={styles.discountBadge}>Save 20%</span>
          </span>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <div key={index} className={`glass-panel ${styles.card} ${plan.popular ? styles.popularCard : ''}`}>
              {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
              
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planDesc}>{plan.description}</p>
              
              <div className={styles.priceContainer}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>/month</span>
              </div>
              
              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} ${styles.planBtn}`}>
                Get Started
              </button>
              
              <ul className={styles.featureList}>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex}>
                    <Check size={18} className={plan.popular ? styles.checkPopular : styles.checkNormal} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
