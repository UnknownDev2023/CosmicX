/** @jsxImportSource theme-ui */
import { Text } from '@apeswapfinance/uikit'
import BillsDiagram from 'components/MarketingModalContent/Bills/BillsDiagram'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'contexts/Localization'
import {
  BillDiagramContainer,
  BillGifContainer,
  DescriptionContainer,
  FirstTimeCardContainer,
} from '../UserBillsView/styles'
import { AnimatePresence, motion } from 'framer-motion'
import useDebounce from 'hooks/useDebounce'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useBills } from 'state/bills/hooks'
import useIsMobile from 'hooks/useIsMobile'
import MobileCard from './MobileCard'

const FirstTimeCard = () => {
  const { t } = useTranslation()
  const { account } = useActiveWeb3React()
  const [loaded, setLoaded] = useState(false)
  const isMobile = useIsMobile()

  const bills = useBills()
  const ownedBillsAmount = bills?.flatMap((bill) => {
    if (bill?.userOwnedBillsData !== undefined && !loaded) {
      setLoaded(true)
    }
    return bill?.userOwnedBillsData ? bill?.userOwnedBillsData : []
  }).length

  // logic used to prevent FirstTimeCard to pop up abruptly
  const [showFirstTimeCard, setShowFirstTimeCard] = useState(false)
  const debouncedShowCard = useDebounce(showFirstTimeCard, 1000)
  useEffect(() => {
    setShowFirstTimeCard(!account || (ownedBillsAmount === 0 && loaded))
  }, [account, ownedBillsAmount, loaded])

  return (
    null
  )
}

export default React.memo(FirstTimeCard)
