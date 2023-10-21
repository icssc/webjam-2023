import faq_data from "../../../assets/faq.json";
import styles from "../../styles/components/Faq.module.css";

function FAQTab(props) {
  const { title, content, id } = props;
  return (
    <div className={styles.tab}>
      <input type="checkbox" name={styles.accordion} id={id} />
      <label htmlFor={id} className={styles.tab__label}>
        {title}
      </label>
      <div className={styles.tab__content}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <div className="flex flex-col items-center mx-[10%] md:mx-[20%] gap-4 my-20">
      <div className="text-7xl md:text-8xl">ABOUT</div>
      <div className="text-xl sm:text-2xl md:text-3xl text-center font-light leading-relaxed">
        ICS Student Council invites you to WebJam, a week-long competition where
        teams of students will create fully functional web applications! We'll
        be providing workshops throughout the week to help you get started, and
        awarding amazing prizes for the best projects out there!
      </div>
    </div>
  );
}
