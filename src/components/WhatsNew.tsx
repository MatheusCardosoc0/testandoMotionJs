import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn, planetVariants, slideIn, staggerContainer, textVariant } from '../utils/motion'
import { exploreWorlds, newFeatures } from '../constants/index'
import { TypingText, TypingTitle } from './CustomText'
import ExploreCard from './ExploreCard'
import { useState } from 'react'
import StartSteps from './StartSteps'
import NewFeatures from './NewFeatures'

const WhatsNew = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>

        <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col ml-4">

          <TypingText text='| O que há de novo' />

          <TypingTitle text='O que há de novo sobre o METAMUNDUS' />

          <div className='mt-[48px] flex flex-wrap justify-between gap-[54px]'>
            {newFeatures.map((feature, index) => (
              <NewFeatures key={feature.title}
                feature={feature} />
            ))}

          </div>
        </motion.div>

        <motion.div variants={planetVariants('right')}
          className={`${styles.flexCenter} flex-1`}>

          <img src='/whats-new.png'
            alt="get-started"
            className='w-[90%] h-[90%] object-contain' />
        </motion.div>


      </motion.div>
    </section>
  )
}

export default WhatsNew