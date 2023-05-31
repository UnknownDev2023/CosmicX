import { MenuEntry } from '@ape.swap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const CURRENT_MIGRATE_PATH = 'the-migration'

const bscConfig: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: 'Trade',
    lightIcon: 'ExchangeLightImage',
    darkIcon: 'ExchangeDarkImage',
    items: [
      {
        label: t('Swap'),
        href: '/swap',
        isNew: false,
      },
      {
        label: t('Liquidity'),
        href: '/zap',
        isNew: false,
      },
      {
        label: t('COSMICX'),
        href: '/cosmicx',
        isNew: false,
      },
    ],
  },
  {
    label: 'Silent Swap',
    lightIcon: 'StakeLightImage',
    darkIcon: 'StakeDarkImage',
    href: '/silentswap',
  },
  {
    label: t('Stake'),
    lightIcon: 'StakeLightImage',
    darkIcon: 'StakeDarkImage',
    items: [
      {
        label: t('Staking Pools'),
        href: '/pools',
        isNew: false,
      },

      {
        label: t('COSMIC Farms'),
        href: '/farms',
        isNew: false,
      },
      {
        label: t('Space Farms'),
        href: '/space-farms',
        isNew: false,
      },
    ],
  },

  {
    label: 'Certificates',
    lightIcon: 'StakeLightImage',
    darkIcon: 'StakeDarkImage',
    href: '/certificates',
  },

  {
    label: 'Warp Drive',
    lightIcon: 'StakeLightImage',
    darkIcon: 'StakeDarkImage',
    href: '/warpdrive',
  },
 
  {
    label: 'Stats',
    lightIcon: 'MoreLightImage',
    darkIcon: 'MoreDarkImage',
    href: '/stats',
  },
  {
    label: 'Governance',
    lightIcon: 'StakeLightImage',
    darkIcon: 'StakeDarkImage',
    href: '/governance',
  },
]

export default bscConfig
