/** @jsxImportSource theme-ui */
import React, { useState } from 'react'
import { Flex, Text } from '@ape.swap/uikit'
import { Select, SelectItem } from '@apeswapfinance/uikit'

import { useTranslation } from 'contexts/Localization'

import useIsMobile from 'hooks/useIsMobile'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

import { useStats } from 'state/statsPage/hooks'
import { ChainOption } from 'state/statsPage/types'

import Page from 'components/layout/Page'
import ConnectButton from 'components/LiquidityWidget/ConnectButton'
import { NFT } from './components/NFT'
import Analytics from './components/Analytics'
import Portfolio from './components/Portfolio'
import PageLoader from '../../components/PageLoader'
import { BannerStats } from './components/BannerStats'
import { TabOption, TabNavStats } from './components/TabNavStats'
import { ShareButton } from './components/ShareButton'
import MigrationRequiredPopup from 'components/MigrationRequiredPopup'

import { Pacoca, PacocaCard, StatsContent, StyledFlex, TopContent } from './styles'

const displayChainOptions = [
  {
    label: 'All Chains',
    value: 'all',
  },
  {
    label: 'BNB Chain',
    value: 'bnb',
  },
]

const Stats: React.FC = () => {
  const { t } = useTranslation()
  const isMobile = useIsMobile()
  const { account } = useActiveWeb3React()
  const { selectedChain, handleChangeSelectedChain, loading, stats } = useStats()
  const [activeTab, setActiveTab] = useState<TabOption>(TabOption.ANALYTICS)

  const tabMenuMap = {
    Portfolio: <Portfolio />,
    Analytics: <Analytics />,
    NFT: <NFT />,
  }

  const handleChangeActiveTab = (tab: TabOption) => {
    setActiveTab(tab)
  }

  return (
    <>
      <MigrationRequiredPopup
        v2Farms={[]}
        farms={[]}
        vaults={[]}
        hasPositionsToMigrate={stats?.hasPositionsToMigrate}
      />
      

      <BannerStats />

      <Page width="1220px">
        <TabNavStats activeTab={activeTab} onChangeActiveTab={handleChangeActiveTab} />

        <StatsContent>
          {!account ? (
            <>
              <Flex sx={{ flexDirection: 'column', margin: '128px 0', gap: '16px' }}>
                <Text sx={{ textTransform: 'uppercase' }}>{t('You are not connected')}</Text>
                <ConnectButton />
              </Flex>
            </>
          ) : loading ? (
            <PageLoader />
          ) : (
            tabMenuMap[activeTab]
          )}
        </StatsContent>
      </Page>
    </>
  )
}

export default Stats
