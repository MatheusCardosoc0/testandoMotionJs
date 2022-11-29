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

        <motion.p variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[24px] text-[18px] text-center text-gray-50 mx-8">
          METAMUNDUS é uma nova coisa no futuro,Onde você pode aproveitar o mundo virtual sentindo o que realmente é real, você pode sentir o que quiser no METAMUNDUS, porque esta é realmente a loucura do METAMUNDUS de todo dia, usando apenas dispositivos VR você pode explorar facilmente o mundo do METAMUNDUS que deseja, transformar seus sonhos em realidade. Vamos explorar a loucura do METAMUNDUS rolando para baixo.
        </motion.p>

        <motion.img
        variants={fadeIn('up', 'tween', 0.5, 1)}
        src="/arrow-down.svg"
        alt='arrow-down'
        className='w-[18px] h-[28px] object-contain mt-[28px]'/>
      </motion.div>

    </section>
  )
}

export default About