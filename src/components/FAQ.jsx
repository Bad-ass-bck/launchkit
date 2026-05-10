import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: "Do I need to know React to use this template?",
    answer: "Yes, this template is built with React and Vite. Basic knowledge of React components and JSX is recommended to customize it effectively."
  },
  {
    question: "Can I use this for client projects?",
    answer: "Absolutely! The Pro and Enterprise licenses allow you to use this template for unlimited client projects."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "We offer a 14-day money-back guarantee if you're not satisfied with the template for any reason. No questions asked."
  },
  {
    question: "Do you provide support?",
    answer: "Yes, we provide 6 months of premium support with the Pro plan, and priority 24/7 support with the Enterprise plan."
  },
  {
    question: "Is it responsive?",
    answer: "Yes, the template is fully responsive and looks great on all devices, from mobile phones to large desktop monitors."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className="container">
        <div className="section-title">
          <h2 className="text-gradient">Frequently asked questions</h2>
          <p>Everything you need to know about the product and billing.</p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
            >
              <button 
                className={styles.question} 
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <ChevronDown className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`} />
              </button>
              <div 
                className={styles.answerWrapper}
                style={{ height: openIndex === index ? 'auto' : '0px' }}
              >
                <div className={styles.answer}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
