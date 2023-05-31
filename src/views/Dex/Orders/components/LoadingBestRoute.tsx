/** @jsxImportSource theme-ui */
import { Flex, Text } from '@ape.swap/uikit'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import { Spinner } from 'theme-ui'
import { styles } from '../../Swap/components/DexTradeInfo/styles'

const LoadingBestRoute: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Flex sx={{ ...styles.dexTradeInfoContainer }}>
      <Flex sx={{ alignItems: 'center' }}>
        
        <Text size="12px">{t('Fetching the best route')}</Text>
      </Flex>
    </Flex>
  )
}

export default React.memo(LoadingBestRoute)
