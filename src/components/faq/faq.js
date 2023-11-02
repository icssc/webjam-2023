import faq_data from '../../../assets/faq.json'
import styles from '../../styles/components/Faq.module.css'

function FAQTab(props) {
  const {title, content, id} = props;
  return (
  <div className={styles.tab}>
    <input type="checkbox" name={styles.accordion} id={id} />
    <label htmlFor={id} className={styles.tab__label}>{title}</label>
    <div className={styles.tab__content}>
      <p className='text-xl'>{content}</p>
    </div>
  </div>
  )
}

export default function FAQSection() {
  return (
    <div className="flex flex-col items-center gap-4 mt-5">
    <div className="text-4xl md:text-7xl">FAQ</div>
    <div className={`${styles.accordion} md:max-w-[50%] `}>
      {faq_data.map((element, index) => <FAQTab key={index} id={index} {...element}/>)}
    </div>
    </div>
  )
}
