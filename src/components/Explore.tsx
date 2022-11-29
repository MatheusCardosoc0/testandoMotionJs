import { motion } from 'framer-motion'
import styles from '../styles'
import { slideIn, staggerContainer, textVariant } from '../utils/motion'
import {exploreWorlds} from '../constants/index'
import { TypingText } from './CustomText'

const Explore = () => {
  return (
    <section className={`${styles.paddings}`}
    id="explore">
      <motion.div initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}>

        <TypingText text='| Mundo' />
      </motion.div>
    </section>
  )
}

export default Explore