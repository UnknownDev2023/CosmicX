import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'CosmicX : Your One-Stop DeFi Hub',
  description:
    'CosmicX is a DeFi Hub on BNB Chain, Polygon, & Ethereum. Swap, stake, and lend cryptocurrencies, from stablecoins to altcoins - all in one place.',
  image: 'https://apeswap.finance/logo.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home Page | CosmicX: Your One-Stop DeFi Hub',
    description:
      'CosmicX is a DeFi Hub on BNB Chain, Polygon, & Ethereum. Swap, stake, and lend cryptocurrencies, from stablecoins to altcoins - all in one place.',
  },
  '/swap': {
    title: 'Swap | CosmicX : Your One-Stop DeFi Hub',
    description: 'Swap between hundreds of crypto tokens using our decentralized exchange.',
  },
  '/stats': {
    title: 'ApeStats | CosmicX : Your One-Stop DeFi Hub',
    description: 'Track your portfolio on CosmicX using our custom dashboard.',
  },
  '/nft': {
    title: 'Non Fungible Apes | CosmicX : Your One-Stop DeFi Hub',
    description: 'Buy and sell CosmicX NFTs and join our NFT community.',
  },
  '/farms': {
    title: 'COSMIC Farms | CosmicX : Your One-Stop DeFi Hub',
    description: 'Stake your liquidity provider (LP) tokens in COSMIC Farms to earn COSMIC.',
  },
  '/space-farms': {
    title: 'Space Farms | CosmicX : Your One-Stop DeFi Hub',
    description: 'Stake your liquidity provider (LP) tokens to earn partner project tokens.',
  },
  '/pools': {
    title: 'Staking Pools | CosmicX : Your One-Stop DeFi Hub',
    description: 'Stake COSMIC in Staking Pools to earn partner project tokens.',
  },
  '/liquidity': {
    title: 'Liquidity | CosmicX : Your One-Stop DeFi Hub',
    description: 'Add liquidity to the CosmicX decentralized exchange to create LPs and earn trading fees.',
  },
  '/add-liquidity': {
    title: 'Liquidity | CosmicX : Your One-Stop DeFi Hub',
    description: 'Add liquidity to the CosmicX decentralized exchange to create LPs and earn trading fees.',
  },
  '/iao': {
    title: 'Initial Cosmic Offerings | CosmicX : Your One-Stop DeFi Hub',
    description: 'Launch your crypto project with CosmicX, or commit into Initial Cosmic Offerings.',
  },
  '/cosmicx': {
    title: 'COSMICX | CosmicX : Your One-Stop DeFi Hub',
    description: 'Convert your COSMIC to COSMICX to gain exclusive access to governance, pools, and more.',
  },
  '/maximizers': {
    title: 'COSMIC Maximizers | CosmicX : Your One-Stop DeFi Hub',
    description: 'Stake your liquidity provider (LP) tokens in auto-compounding vaults to earn COSMIC.',
  },
  '/auction': {
    title: 'Auction | CosmicX : Your One-Stop DeFi Hub',
  },
  '/staking': {
    title: 'NFA Staking | CosmicX : Your One-Stop DeFi Hub',
  },
  '/certificates': {
    title: 'Certificates | CosmicX : Your One-Stop DeFi Hub',
    description: 'Get COSMIC and partner project tokens at a discount using your liquidity provider (LP) tokens.',
  },
  '/limit-orders': {
    title: 'Limit Orders | CosmicX : Your One-Stop DeFi Hub',
    description: 'Trade crypto tokens at the price you want using limit orders on the CosmicX DEX.',
  },
}
