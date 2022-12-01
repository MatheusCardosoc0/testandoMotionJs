import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn } from '../utils/motion'
import { insights } from '../constants/index'
import { TypingText, TypingTitle } from './CustomText'
import InsightCard from './InsightCard'

const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>

      <motion.div initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>

        <TypingText text='Entendimento' styleText='text-center' />
        <TypingTitle text='Entenda sobre o METAMUNDOS' styleText='text-center mx-8' />

        <div className='mt-[50px] flex flex-col gap-[30px]'>
          {insights.map((insight, index) => (
            <InsightCard index={index}
              insight={insight} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Insights