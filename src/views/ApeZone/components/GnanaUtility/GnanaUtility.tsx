/** @jsxImportSource theme-ui */
import React from 'react'
import 'swiper/swiper.min.css'
import { useTranslation } from 'contexts/Localization'
import { UtilityCon, UtilityHeading, UtilityTitle, UtilityWrapper } from './styles'
import { Flex } from '@apeswapfinance/uikit'
import useIsMobile from 'hooks/useIsMobile'
import MobileCard from './MobileCard'
import { utilitySlides } from './UtilitySlides'

export const GnanaUtility: React.FC = () => {
  const { t } = useTranslation()
  const isMobile = useIsMobile()

  return (
    null
  )
}

export default GnanaUtility
