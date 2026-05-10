import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "LaunchKit saved us literally weeks of development time. We were able to launch our MVP and get our first 100 paying customers faster than ever.",
    author: "Sarah Jenkins",
    role: "Founder, TechFlow",
    avatar: "https://i.pravatar.cc/150?img=47"
  },
  {
    quote: "The code quality is outstanding. It's rare to find a template that looks this good and is actually built with modern React best practices.",
    author: "David Chen",
    role: "Lead Engineer, StartupInc",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "I'm not a designer, but with LaunchKit my product looks like it was designed by a premium agency. Absolutely worth the investment.",
    author: "Michael Roberts",
    role: "Indie Hacker",
    avatar: "https://i.pravatar.cc/150?img=33"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className="container">
        <div className="section-title">
          <h2 className="text-gradient">Don't just take our word for it</h2>
          <p>Join thousands of founders who have successfully launched using our template.</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <div key={index} className={`glass-panel ${styles.card}`}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>"{item.quote}"</p>
              <div className={styles.author}>
                <img src={item.avatar} alt={item.author} className={styles.avatar} />
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{item.author}</h4>
                  <p className={styles.authorRole}>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
