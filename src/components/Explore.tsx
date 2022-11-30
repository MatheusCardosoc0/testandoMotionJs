import { motion } from 'framer-motion'
import styles from '../styles'
import { slideIn, staggerContainer, textVariant } from '../utils/motion'
import { exploreWorlds } from '../constants/index'
import { TypingText, TypingTitle } from './CustomText'
import ExploreCard from './ExploreCard'
import { useState } from 'react'

const Explore = () => {

  const [active, setActive] = useState<string>("world-1")

  return (
    <section className={`${styles.paddings}`}
      id="explore">
      <motion.div initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>

        <TypingText text='| Mundo' styleText='text-center' />

        <TypingTitle text='Escolha seu mundo e explore' styleText='text-center md:mx-auto md:w-[50rem]' />

        <div className='mt-[50px] h-[1000px] mx-3 flex lg:flex-row flex-col min-h-70vh gap-5'>
          {exploreWorlds.map((world, index) => (
            <ExploreCard key={world.id}
            index={index}
            active={active}
            setActive={setActive}
            id={world.id}
            imgUrl={world.imgUrl}
            title={world.title}
             />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Explore