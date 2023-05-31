import React, { useEffect, useState } from 'react'
import { Flex, Skeleton, Text } from '@apeswapfinance/uikit'
import { Swiper, SwiperSlide } from 'swiper/react'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import SwiperCore from 'swiper'
import { useFetchHomepageLaunchCalendar, useHomepageLaunchCalendar } from 'state/hooks'
import { useTheme } from 'styled-components'
import useSwiper from 'hooks/useSwiper'
import { QuestionMark } from 'components/Icons'
import { useTranslation } from 'contexts/Localization'
import {
  Bubble,
  CalendarImg,
  ColorWrap,
  LaunchCalendarWrapper,
  LaunchCard,
  LaunchText,
  SkeletonWrapper,
} from './styles'

const LaunchCalendar: React.FC = () => {
  const [loadNews, setLoadNews] = useState(false)
  const today = new Date()
  today.setHours(today.getHours() - 6)
  useFetchHomepageLaunchCalendar(loadNews)
  const { swiper, setSwiper } = useSwiper()
  const [activeSlide, setActiveSlide] = useState(0)
  const theme = useTheme()
  const launchCal = useHomepageLaunchCalendar()
  const sortLaunch = launchCal?.filter((launch) => new Date(launch.launchTime) > today)
  const launchCalLength = sortLaunch?.length || 0
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const { t } = useTranslation()

  const slideNewsNav = (index: number) => {
    setActiveSlide(index)
    swiper.slideTo(index)
  }

  const handleSlide = (event: SwiperCore) => {
    setActiveSlide(event.activeIndex)
  }

  useEffect(() => {
    if (isIntersecting) {
      setLoadNews(true)
    }
  }, [isIntersecting])

  return (
    null
  )
}

export default LaunchCalendar
