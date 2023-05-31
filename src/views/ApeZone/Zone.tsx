import React, { useState } from 'react'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import Spacer from 'components/Spacer'
import Banner from 'components/Banner'
import GnanaUtility from './components/GnanaUtility/GnanaUtility'
import GnanaDisclaimers from './components/GnanaDisclaimers/GnanaDisclaimers'
import ConvertCard from './components/ConvertCard'
import ReturnCard from './components/ReturnCard'
import {
  PaddedCard,
  TopCon,
  CenterCard,
  OuterContent,
  OuterContentText,
  InnerContent,
  InnerContentText,
  Cards,
  ReadMore,
  WarningHeader,
} from './styles'
import SwiperProvider from '../../contexts/SwiperProvider'

const Zone = () => {
  const [readingMore, setReadingMore] = useState(false)
  const { t } = useTranslation()

  const toggleReadMore = () => {
    setReadingMore(!readingMore)
  }

  return (
    <>
      <Page width="1130px">
        <Banner
          banner="gnana"
          link="?modal=tutorial"
          title={t('COSMICX')}
          margin="0px 0px 20px 0px"
          maxWidth={1130}
        />
         <div style={{marginTop:"-8%", lineHeight:"25px", width:"90%", marginLeft:"50px", marginBottom:"40px"}}>PigPen is the Animal Farm's governance staking pool which allows PIGS (AFP) holders to secure a shared ownership of the Animal Farm platform. This includes BUSD & PIGS dividends generated from deposit/withdrawal fees from Farms & Pools, taxes applied to DOGS (AFD) transactions, yield earned on lending and Piggy Bank fees. Votes on roadmap proposals is also based on PigPen share. Read the Documentation to learn more.</div>

        <Cards id="convert">
          <ConvertCard fromToken="COSMIC" toToken="COSMICX" />
          <ReturnCard fromToken="COSMICX" toToken="COSMIC" />
        </Cards>

        <SwiperProvider>
          <GnanaUtility />
        </SwiperProvider>
        <GnanaDisclaimers />

        <Spacer size="lg" />
        <Spacer size="md" />
      </Page>
    </>
  )
}
export default React.memo(Zone)
