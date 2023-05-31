export enum banners {
  COSMIC_FARMS = 'banana-farms',
  POLYGON_FARMS = 'polygon-farms',
  JUNGLE_FARMS = 'jungle-farms',
  POOLS = 'pools',
  IAO = 'iao',
  AUCTION = 'auction',
  COSMIC_MAXIMIZERS = 'banana-maximizers',
  NFB_COLLECTION = 'nfb-collection',
  NFA_COLLECTION = 'nfa-collection',
  NFA_STAKING = 'nfa-staking',
  BURNING = 'burning',
  TREASURY_BILL = 'treasury-bill',
  SSIAO = 'ssiao',
  COSMICX = 'gnana',
  PROTOCOL_DASHBOARD = 'protocol-dashboard',
  BABbanner = 'BABbanner',
  MIGRATE = 'migrate',
}

export type BannerTypes = `${banners}`

enum colorValues {
  background = 'background',
  backgroundDisabled = 'backgroundDisabled',
  navbar = 'navbar',
  body = 'body',
  lvl1 = 'lvl1',
  lvl2 = 'lvl2',
  primaryBright = 'primaryBright',
  primaryDark = 'primaryDark',
  success = 'success',
  error = 'error',
  info = 'info',
  yellow = 'yellow',
  brown = 'brown',
  primaryButtonDisable = 'primaryButtonDisable',
  secondaryButtonDisableBg = 'secondaryButtonDisableBg',
  secondaryButtonDisableColor = 'secondaryButtonDisableColor',
  dividerColor = 'dividerColor',
  text = 'text',
  textDisabled = 'textDisabled',
  textareaColor = 'textareaColor',
  heading = 'heading',
  black = 'black',
  gradient = 'gradient',
  white1 = 'white1',
  white2 = 'white2',
  white3 = 'white3',
  white4 = 'white4',
  navMenuLogo = 'navMenuLogo',
}

export type ColorProps = `${colorValues}`
