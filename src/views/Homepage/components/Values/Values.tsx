import React, { useEffect, useState } from 'react'
import { Flex, Text, useMatchBreakpoints, Skeleton } from '@apeswapfinance/uikit'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSwiper from 'hooks/useSwiper'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { useTranslation } from 'contexts/Localization'
import { getDotPos } from 'utils/getDotPos'
import { Bubble, ValueCard, ValueImage, ValuesWrapper, ValueText } from './styles'
import { defaultValues } from './defaultValues'
import { Link } from '@ape.swap/uikit'

const SLIDE_DELAY = 5000
SwiperCore.use([Autoplay])

const Values: React.FC = () => {
  const { swiper, setSwiper } = useSwiper()
  const [activeSlide, setActiveSlide] = useState(0)
  const [loadValues, setLoadValues] = useState(false)
  const { isMd, isSm, isXs } = useMatchBreakpoints()
  const { t } = useTranslation()
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const swiperFlag = isMd || isSm || isXs

  const slideVal = (index: number) => {
    setActiveSlide(index)
    swiper.slideTo(defaultValues(t).length + index)
    swiper.autoplay.start()
  }

  const handleSlide = (event: SwiperCore) => {
    const slideNumber = getDotPos(event.activeIndex, defaultValues(t).length)
    setActiveSlide(slideNumber)
  }

  useEffect(() => {
    if (isIntersecting) {
      setLoadValues(true)
    }
  }, [isIntersecting])

  return (
    <>
      
      
    </>
  )
}

export default Values
