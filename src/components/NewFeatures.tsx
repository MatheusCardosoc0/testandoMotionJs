import styles from '../styles/index'

interface NewFeaturesProps {
  feature: {
    imgUrl: string
    title: string
    subtitle: string
  }
}

const NewFeatures = ({ feature }: NewFeaturesProps) => {
  return (
    <div className='flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]'>

      <div className={`${styles.flexCenter} flex lg:w-[300px] h-[70px] rounded-[24px] bg-[#323f5d] gap-4`}>

        <img src={feature.imgUrl}
          alt="icon"
          className='w-1/2 h-1/2 object-contain' />

        <h2 className='mt-[26px] font-bold sm:text-[24px] text-lg leading-[30px] text-white'>Titulo: <br /> {feature.title}</h2>
        
      </div>

      <p className='flex-1 mt-[16px] font-normal sm:text-[22px] text-[#b0b0b0] leading-[32px]'>{feature.subtitle}</p>
    </div>
  )
}

export default NewFeatures