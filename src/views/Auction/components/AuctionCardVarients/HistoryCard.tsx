import React from 'react'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useWeb3React } from '@web3-react/core'
import { Auction } from 'state/types'
import { ZERO_ADDRESS } from 'config'
import { Text } from '@apeswapfinance/uikit'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import Image from '../../../Nft/components/Image'

interface HistoryCardProps {
  auction: Auction
}

interface CardProps {
  highestBidFlag: boolean
}

const Card = styled.div<CardProps>`
  width: 300px;
  height: 435px;
  border-radius: 0px;
  opacity: 0.7;
  background-color: ${({ theme }) => theme.colors.navbar};
  display: flex;
  align-items: center;
  box-shadow: ${(props) => props.highestBidFlag && '0px 0px 20px #3c817f'};
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 420px;
    height: 235px;
  }
`

const NfaImageHolder = styled.div`
  position: absolute;
  height: 150px;
  width: 280px;
  left: 10px;
  top: 10px;
  border-radius: 45px 0px 0px 0px;
  ${({ theme }) => theme.mediaQueries.lg} {
    height: 200px;
    width: 200px;
    left: 15px;
    top: 17px;
  }
`

const TextHolder = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 280px;
  left: 0px;
  width: 300px;
  height: 200px;
  ${({ theme }) => theme.mediaQueries.lg} {
    top: 20px;
    left: 225px;
    width: 180px;
    height: 200px;
  }
`

const BoughtText = styled(Text)`
  position: absolute;
  top: 36px;
  font-size: 25px;
  font-weight: 800;

  ${({ theme }) => theme.mediaQueries.lg} {
    top: 30px;
    font-size: 20px;
  }
`

const NameText = styled(Text)`
  position: absolute;
  top: 8px;
  font-size: 25px;
  font-weight: 800;

  ${({ theme }) => theme.mediaQueries.lg} {
    top: 0px;
    font-size: 20px;
  }
`

const BidAmount = styled(Text)`
  position: absolute;
  top: 70px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  ${({ theme }) => theme.mediaQueries.lg} {
  }
`

/*
const CurrentBidDollarWrapper = styled(Text)`
  position: absolute;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #38a611;
`
*/

const HighestBidder = styled.div`
  position: absolute;
  top: 22.5px;
  right: 30px;
  background-image: url(/images/number-one.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 35px;
  height: 35px;
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 50px;
    height: 50px;
    top: 155px;
    right: 90px;
  }
`

const HistoryCard: React.FC<HistoryCardProps> = ({ auction }) => {
  const { nfa, highestBid, highestBidder } = auction
  const { account } = useWeb3React()
  const highestBidFlag = highestBidder === account
  const notSold = highestBidder === ZERO_ADDRESS
  const rawBidAmount = getBalanceNumber(new BigNumber(highestBid))
  const { t } = useTranslation()
  return (
    <Card highestBidFlag={highestBidFlag}>
      <TextHolder>
        <NameText>#{nfa.index}</NameText>
        {notSold ? (
          <>
            <BoughtText>{t('Did Not Sell')}</BoughtText>
            <BidAmount>{t('Ask %amount% BNB', { amount: rawBidAmount.toFixed(3) })}</BidAmount>
          </>
        ) : (
          <>
            <BoughtText>{t('Bought For')}</BoughtText>
            <BidAmount> {rawBidAmount.toFixed(3)} BNB</BidAmount>
          </>
        )}
      </TextHolder>
      <NfaImageHolder>
        <Image src={nfa.image} rarityTier={nfa.attributes.rarityTierNumber} alt={nfa.name} borderRadius="10px" />
      </NfaImageHolder>
      {highestBidFlag && <HighestBidder />}
    </Card>
  )
}

export default HistoryCard
