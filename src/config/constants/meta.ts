import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MuskyDoge Swap',
  description:
    'The most popular AMM on BSC by user count! Earn MuskyCash through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by MuskyDoge), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/easter-battle.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/competition': {
    title: 'MuskyDoge Easter Battle',
    description: 'Register now for the MuskyDoge Easter battle!',
    image: 'https://pancakeswap.finance/images/easter-battle.png',
  },
}
