import { DefaultServiceData } from './types'
import { ContextApi } from '../../../../contexts/Localization/types'

export const defaultServiceData: (t: ContextApi['t']) => DefaultServiceData[] = (t) => [
  {
    id: 'poolDetails',
    title: t('Staking Pools'),
    description: t('Earn partner tokens by staking COSMIC or COSMICX'),
    backgroundImg: 'images/homepage-pools',
    link: '',
    stats: [],
  },
  {
    id: 'farmDetails',
    title: t('Yield Farms'),
    description: t('Earn COSMIC or partner tokens by staking LP tokens'),
    backgroundImg: 'images/homepage-farms',
    link: '',
    stats: [],
  },
  {
    id: 'billDetails',
    title: t('Certificates'),
    description: t('Create protocol-owned liquidity with yield-generating NFTs'),
    backgroundImg: 'images/homepage-bills',
    link: '',
    stats: [],
  },
  {
    id: 'test',
    title: t('Lending Network'),
    description: t('Earn interest by supplying popular tokens'),
    backgroundImg: 'images/homepage-lending',
    link: '',
    stats: [],
  },
]
