/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from 'react'
import { Text, Flex, Skeleton } from '@ape.swap/uikit'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSwiper from 'hooks/useSwiper'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import useWindowSize from 'hooks/useDimensions'
import { ServiceData } from 'state/types'
import { useFetchHomepageServiceStats, useHomepageServiceStats } from 'state/hooks'
import ServiceTokenDisplay from 'components/ServiceTokenDisplay'
import { useTranslation } from 'contexts/Localization'
import { getDotPos } from 'utils/getDotPos'
import { styles, YieldCard } from './styles'
import { defaultServiceData } from './defaultServiceData'

const Services: React.FC<{ bab?: boolean }> = ({ bab }) => {
  return (
    <>
      <div style={{maxWidth:"1200px", marginLeft: "auto", marginRight:"auto", marginTop:"50px", marginBottom:"50px"}}>
          testing this
      </div>
    </>
  )
}

export default React.memo(Services)
