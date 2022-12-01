import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn } from '../utils/motion'
import { } from '../constants/index'
import { TypingText, TypingTitle } from './CustomText'


const World = () => {
  return (
    <section>

      <motion.div initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>

        <div>
          <TypingText text='| Pessoas mo mundo'
            styleText='text-center' />

          <TypingTitle text='Convide seus amigos para jogarem contigo' styleText='text-center' />
        </div>

        <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-[68px] flex w-full justify-center h-[550px]">

          <img src='/map.png'
            alt="map"
            className='w-full h-full object-contain' />

          <div className='absolute bottom-[110px] right-20 w-[70px] p-[6px] rounded-full bg-[#5d6680]'>
            <img src='people-01.png'
              alt='people-01'
              className='w-full h-full' />
          </div>

          <div className='absolute top-20 left-20 w-[70px] p-[6px] rounded-full bg-[#5d6680]'>
            <img src='people-02.png'
              alt='people-01'
              className='w-full h-full' />
          </div>

          <div className='absolute top-1/2 left-[45%] w-[70px] p-[6px] rounded-full bg-[#5d6680]'>
            <img src='people-03.png'
              alt='people-01'
              className='w-full h-full' />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default World