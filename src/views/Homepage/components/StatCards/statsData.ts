
import { StatType } from './types'
import { ContextApi } from '../../../../contexts/Localization/types'

export const statsData: (t: ContextApi['t']) => StatType[] = (t) => [
  {
    title:'Private Sale',
    value: null,
    id: 'tvl',
  },
  {
    title: "Public Sale Round 1",
    value: null,
    id: 'totalVolume',
  },
  {
    title: "Public Sale Round 2",
    value: null,
    id: 'marketCap',
  },
  {
    title: 'Publick Sale Round 3',
    value: null,
    id: 'partnerCount',
  },
]
