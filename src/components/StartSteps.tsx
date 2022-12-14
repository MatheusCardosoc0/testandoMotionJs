import React from 'react'
import styles from '../styles'

interface StartStepsProps{
  text: string
  number: number
}

const StartSteps = ({number, text}: StartStepsProps) => {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div className={`${styles.flexCenter} w-[70px] rounded-[24px] bg-[#323f5d]`}>

        <p className='font-bold text-[20px] text-white'
        >0{number}</p>
      </div>

      <p className='flex-1 ml-[30px] font-normal text-[18px] text-gray-200 leading-8'>
        {text}
      </p>
    </div>
  )
}

export default StartSteps