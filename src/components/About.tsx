import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn, staggerContainer } from '../utils/motion'
import { TypingText } from './CustomText'

const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className='gradient-02 z-0' />
      <motion.div
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>

        <TypingText styleText=' text-center' text='| Sobre o METAMUNDUS' />
      </motion.div>

    </section>
  )
}

export default About