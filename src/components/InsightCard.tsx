import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn } from '../utils/motion'
import { insights } from '../constants/index'
import { TypingText, TypingTitle } from './CustomText'

interface InsightCardProps {
  index: number
  insight: {
    imgUrl: string
    title: string
    subtitle: string
  }
}

const InsightCard = ({ index, insight }: InsightCardProps) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4 mx-auto">

      <img src={insight.imgUrl}
        alt="planet-01"
        className='md:w-[270px] w-full h-[250px] rounded-[32px] object-cover' />

      <div className='w-full flex justify-between items-center'>

        <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>

          <h4 className='font-normal lg:text-[42px] text-[26px] text-white'>
            {insight.title}
          </h4>
          <p className='mt-[16px] font-normal lg:text-[20px] text-[14px] text-gray-100'>
            {insight.subtitle}
          </p>
        </div>

        <div className='lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white'>
          <img src='arrow.svg'
          alt='arrow'
          className='w-[40%] h-[40%] object-contain' />
        </div>
      </div>
    </motion.div>
  )
}

export default InsightCard