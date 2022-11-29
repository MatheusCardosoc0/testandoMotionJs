import { motion } from 'framer-motion'
import styles from '../styles'
import { slideIn, staggerContainer, textContainer, textVariant, textVariant2 } from '../utils/motion'

interface TypingTextProps{
 text: string
 styleText?: string
}

export const TypingText = ({styleText, text}: TypingTextProps) => (
  <motion.p 
  variants={textContainer}
  className={`font-normal text-[14px] text-gray-50 ${styleText}`}>
    {Array.from(text).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === '' ? '\u80A4' : letter}
      </motion.span>
    ))}
  </motion.p>
)

export const TypingTitle = () => (
  <h2></h2>
)