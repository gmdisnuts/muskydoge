import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label : 'Private Sale',
    icon : 'PrivateSaleIcon',
    href: '/psale'
  },
  {
    label: 'Stake and Bake',
    icon: 'GloveIcon',
    status: {
      text: 'SOON',
      color: 'warning',
    },
    items: [
      // {
      //   label: 'LP Migration',
      //   href: 'https://v1exchange.pancakeswap.finance/#/migrate',
      // },
      {
        label: 'Farms',
        href: 'https://exchange.balloonswap.com/#/swap',
      },
      {
        label: 'Vaults',
        href: 'https://exchange.balloonswap.com/#/pool',
      },
      {
        label: 'Dividends',
        href: 'https://exchange.balloonswap.com/#/pool',
      },
    ],
  },
  // {
  //   label: 'Stake and Bake',
  //   icon: 'MoreIcon',
  //   status: {
  //     text: 'MIGRATE',
  //     color: 'warning',
  //   },
  //   items: [
  //     // {
  //     //   label: 'LP Migration',
  //     //   href: 'https://v1exchange.pancakeswap.finance/#/migrate',
  //     // },
  //     {
  //       label: 'Farms',
  //       href: 'https://exchange.balloonswap.com/#/swap',
  //     },
  //     {
  //       label: 'Vaults',
  //       href: 'https://exchange.balloonswap.com/#/pool',
  //     },
  //     {
  //       label: 'Dividends',
  //       href: 'https://exchange.balloonswap.com/#/pool',
  //     },
  //   ],
  // },

  {
    label: 'Trade',
    icon: 'TradeIcon',
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      // {
      //   label: 'LP Migration',
      //   href: 'https://v1exchange.pancakeswap.finance/#/migrate',
      // },
      {
        label: 'Exchange',
        href: 'https://exchange.balloonswap.com/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.balloonswap.com/#/pool',
      },
      // {
      //   label: 'V1 Liquidity (Old)',
      //   href: 'https://v1exchange.pancakeswap.finance/#/pool',
      // },
    ],
  },
  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   href: '/farms',
  // },
  {
    label: 'Cookie Shop',
    icon: 'CookieShopIcon',
    href: '/farms',
    status: {
      text: 'SOON',
      color: 'warning',
    }
  },
  {
    label: 'The Oven',
    icon: 'TheOvenIcon',
    href: '/farms',
    status: {
      text: 'SOON',
      color: 'warning',
    },
  },
  {
    label: 'Contact Us',
    icon: 'GroupsIcon',
    href: '/farms',
  },
  {
    label: 'Documentation',
    icon: 'DocumenationIcon',
    href: '/farms',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Team Battle',
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Contact',
  //       href: '#',
  //     },
  //     {
  //       label: 'Voting',
  //       href: '#',
  //     },
  //     {
  //       label: 'Github',
  //       href: '#',
  //     },
  //     {
  //       label: 'Docs',
  //       href: '#',
  //     },
  //     {
  //       label: 'Blog',
  //       href: '#',
  //     },
  //     {
  //       label: 'Merch',
  //       href: '#',
  //     },
  //   ],
  // },
]

export default config
