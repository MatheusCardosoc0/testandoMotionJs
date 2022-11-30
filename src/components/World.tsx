import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn, planetVariants, slideIn, staggerContainer, textVariant } from '../utils/motion'
import { exploreWorlds, newFeatures } from '../constants/index'
import { TypingText, TypingTitle } from './CustomText'
import ExploreCard from './ExploreCard'
import { useState } from 'react'
import StartSteps from './StartSteps'
import NewFeatures from './NewFeatures'

const World = () => {
  return (
    <section>

      <motion.div initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>

        <TypingText text='| Pessoas mo mundo'
          styleText='text-center' />

        <TypingTitle text='Convide seus amigos para jogarem contigo' styleText='text-center' />

        <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full justify-center h-[550px]">

          <img src='/map.png'
          alt="map"
          className='w-full h-full object-contain' />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default World