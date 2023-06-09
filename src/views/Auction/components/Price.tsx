import React from 'react'
import styled from 'styled-components'
import { Text } from '@apeswapfinance/uikit'
import BigNumber from 'bignumber.js'
import { getBalanceNumber } from 'utils/formatBalance'
//import { useTokenPriceFromSymbol } from 'state/hooks'
import { useTranslation } from 'contexts/Localization'

const PriceWrapper = styled.div`
  position: absolute;
  width: 165px;
  height: 24px;
  margin-top: 305px;
  margin-left: 165px;
  border-radius: 0px;
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 1;
  background: ${({ theme }) => theme.colors.navbar};
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 300px;
    height: 64px;
    top: 355px;
    margin-left: 25px;
    border-radius: 0px;
    margin-top: 0px;
    background: ${({ theme }) => theme.colors.white3};
  }
`

const PriceText = styled(Text)`
  position: absolute;
  width: 52px;
  height: 24px;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.05em;
  margin-left: 10px;
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 16px;
    margin-left: 20px;
  }
`

const BnbLogo = styled.div`
  position: absolute;
  background-image: url(/images/rounded-bnb-sm.svg);
  background-position: center;
  width: 16px;
  height: 16px;
  left: 67.5px;
  margin-top: 0px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 2px;
    width: 40px;
    height: 40px;
    left: 100px;
    background-image: url(/images/rounded-bnb-lg.svg);
  }
`

const CurrentBidWrapper = styled(Text)`
  position: absolute;
  width: 159px;
  height: 41px;
  left: 100px;
  margin-bottom: 0px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 50px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 159px;
    height: 41px;
    left: 150px;
    font-size: 27px;
    margin-bottom: 18px;
    line-height: 40px;
  }
`

const CurrentBidDollarWrapper = styled(Text)`
  font-weight: 600;
  display: none;
  ${({ theme }) => theme.mediaQueries.lg} {
    position: absolute;
    width: 81px;
    height: 15px;
    left: 155px;
    margin-top: 25px;
    font-style: normal;
    font-weight: 800;
    font-size: 10px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
  }
`

interface TimerProps {
  currentBid: string
}

const Price: React.FC<TimerProps> = ({ currentBid }) => {
  const rawBidAmount = getBalanceNumber(new BigNumber(currentBid))
  //const bnbPrice = useTokenPriceFromSymbol('BNB')
  //const dollarValue = (getBalanceNumber(new BigNumber(bnbPrice), 0) * rawBidAmount).toFixed(2)
  const { t } = useTranslation()

  return (
    <PriceWrapper>
      <PriceText>{t('Price')}:</PriceText>
      <CurrentBidWrapper> {rawBidAmount.toFixed(3)} </CurrentBidWrapper>
      <CurrentBidDollarWrapper>BNB</CurrentBidDollarWrapper>
      <BnbLogo />
    </PriceWrapper>
  )
}

export default Price
