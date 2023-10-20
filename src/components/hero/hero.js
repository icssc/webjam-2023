import { FaCalendar, FaLocationArrow } from 'react-icons/fa'
import styles from '../../styles/components/Hero.module.css'

export default function HeroSection() {
  return (
    <>
      <div className='w-[500px]'/>
      <div
        className={`
        ${styles.heroContainer}
        md:p-[2rem]
        md:text-left
        max-w-[600px]
        h-[fit-content]
        self-center
        `}
      >
        <h1 className='md:text-[4rem] text-[3rem]'>WebJam 2023</h1>
        <span>
          <FaCalendar size={20}/>
          <h2>November 13-17, 2023</h2>
        </span>
        <span>
          <FaLocationArrow size={20}/>
          <h2>DBH 3011</h2>
        </span>
        <p>ICS Student Council's week-long web application competition — no experience necessary!</p>
        <p><a className={styles.button}>Apply</a> or be a <a className={styles.underline}>mentor</a>!</p>
      </div>
    </>
  )
}