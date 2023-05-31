/** @jsxImportSource theme-ui */
import { Flex, Svg, Text, TooltipBubble } from '@ape.swap/uikit'
import React from 'react'
import { useTranslation } from 'contexts/Localization'
import CountUp from 'react-countup'
import { useFetchOverviewProtocolMetrics } from 'state/protocolDashboard/hooks'
import { styles } from './styles'

const TOOLTIPS = {
  'Banana Holders': 'Includes the number of wallets that actively hold or stake COSMIC or COSMICX.',
  'Market Cap': 'Total value of COSMIC tokens in circulation, based on current COSMIC price.',
  'Banana Burned': 'Total number of COSMIC tokens burned through manual and protocol burns.',
  POL: 'Total value of the liquidity that CosmicX owns in the form of LP tokens.',
}

const ProtocolMetrics: React.FC = () => {
  const protocolMetrics = useFetchOverviewProtocolMetrics()
  const filterProtocolMetrics = protocolMetrics?.filter((metric) => metric.description !== 'Banana Holders')
  const { t } = useTranslation()
  return (
    <Flex sx={styles.cardContainer}>
      <Flex sx={{ flexDirection: 'column', textAlign: 'center', marginBottom: '20px' }}>
        <Text size="22px" weight={700} mb="10px">
          {t('Protocol Metrics')}
        </Text>
      </Flex>
      {filterProtocolMetrics?.map((data) => {
        return (
          <Flex sx={{ justifyContent: 'space-between', margin: '8.5px 0px' }} key={data.description}>
            <Flex sx={{ alignItems: 'center' }}>
              <Text weight={500} mr="5px">
                {t(data.description)}
              </Text>
              <TooltipBubble
                body={<Text>{t(TOOLTIPS[data.description])}</Text>}
                transformTip="translate(-15px, 0px)"
                width="200px"
                placement="topLeft"
              >
                <Svg icon="info" width="15px" color="gray" />
              </TooltipBubble>
            </Flex>
            <Text weight={700}>
              {(data.description === 'Market Cap' || data.description === 'POL') && '$'}
              <CountUp end={data.amount} decimals={2} duration={1} separator="," />
            </Text>
          </Flex>
        )
      })}
    </Flex>
  )
}

export default React.memo(ProtocolMetrics)
