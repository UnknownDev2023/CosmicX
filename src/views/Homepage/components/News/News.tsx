import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Box } from 'theme-ui'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSwiper from 'hooks/useSwiper'
import { orderBy } from 'lodash'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/swiper.min.css'
import { Flex, Skeleton } from '@apeswapfinance/uikit'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useFetchHomepageNews, useHomepageNews } from 'state/hooks'
import track from 'utils/track'
import { getDotPos } from 'utils/getDotPos'
import { Bubble, NewsCard, NewsWrapper, SkeletonWrapper } from './styles'

const SLIDE_DELAY = 5000

SwiperCore.use([Autoplay])

const News: React.FC = () => {
  const history = useHistory()
  const { chainId } = useActiveWeb3React()
  const [loadImages, setLoadImages] = useState(false)
  useFetchHomepageNews(loadImages)
  const today = new Date()
  const fetchedNews = useHomepageNews()
  const sortedNews = orderBy(fetchedNews, 'CardPosition')
  const filterNews = sortedNews?.filter(
    (news) =>
      (new Date(news.StartTime) <= today && new Date(news.EndTime) > today) || (!news.StartTime && !news.EndTime),
  )
  const newsLength = filterNews?.length || 0
  const { swiper, setSwiper } = useSwiper()
  const [activeSlide, setActiveSlide] = useState(0)
  const { observerRef, isIntersecting } = useIntersectionObserver()

  const slideNewsNav = (index: number) => {
    setActiveSlide(index)
    swiper.slideTo(newsLength + index)
  }

  const handleSlide = (event: SwiperCore) => {
    const slideNumber = getDotPos(event.activeIndex, newsLength)
    setActiveSlide(slideNumber)
  }

  useEffect(() => {
    if (isIntersecting) {
      setLoadImages(true)
    }
  }, [isIntersecting])

  const trackBannersClick = (bannerId: number, clickUrl: string, chainIdentifier: string | number) => {
    track({
      event: 'newsClick',
      chain: chainIdentifier,
      data: {
        banner: bannerId,
        clickUrl,
      },
    })
  }

  const clickNews = (newsUrl, isModal) => (isModal ? history.push({ search: newsUrl }) : window.open(newsUrl, '_blank'))

  return (
    <>
      <div ref={observerRef} />
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        style={{ position: 'relative', width: '100%' }}
      >
        <NewsWrapper>
          <Flex justifyContent="space-between" style={{ width: '100%', overflow: 'hidden' }}>
           
          </Flex>
        </NewsWrapper>
        
      </Flex>
    </>
  )
}

export default React.memo(News)
