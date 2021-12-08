import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, Button,Input, useWalletModal } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'
import { useWeb3React } from '@web3-react/core'
import UnlockButton from 'components/UnlockButton'
// import CakeWalletBalance from './CakeWalletBalance'



const Hero = styled.div`
  align-items: center;
  background-image: url('/images/pixel/ecosystem.png');
  background-repeat: no-repeat;
  background-position: top;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    ${'' /* background-image: url('/images/pixel/ecosystem.png'), url('/images/pixel/ecosystem.png'); */}
    ${'' /* background-position: left center, right center; */}
    height: 165px;
    padding-top: 0;
  }
`

// window.onload = function() {
//     const anchors = document.getElementsByTagName("a");
//     for (let i = 0; i < anchors.length; i++) {
//         anchors[i].onclick = function() {return false;};
//     }
// };

// const Cards = styled(BaseLayout)`
//   align-items: stretch;
//   justify-content: stretch;
//   margin-bottom: 32px;
//
//   & > div {
//     grid-column: span 6;
//     width: 100%;
//   }
//
//   ${({ theme }) => theme.mediaQueries.sm} {
//     & > div {
//       grid-column: span 8;
//     }
//   }
//
//   ${({ theme }) => theme.mediaQueries.lg} {
//     & > div {
//       grid-column: span 6;
//     }
//   }
// `
//
// const CTACards = styled(BaseLayout)`
//   align-items: start;
//   margin-bottom: 32px;
//
//   & > div {
//     grid-column: span 6;
//   }
//
//   ${({ theme }) => theme.mediaQueries.sm} {
//     & > div {
//       grid-column: span 8;
//     }
//   }
//
//   ${({ theme }) => theme.mediaQueries.lg} {
//     & > div {
//       grid-column: span 4;
//     }
//   }
// `

const StyledInput = styled(Input)`
  width: 44%;
  margin-bottom: 15px;
  box-shadow: 0px 0px 0px 1px #eeeaf4, 0px 0px 0px 3px rgb(111, 49, 8);
  ${'' /* background-color: #faf9fa; */}

  &:focus {
    box-shadow : 0px 0px 0px 1px #eeeaf4, 0px 0px 0px 4px rgb(251, 66, 45);
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()
  const { account } = useWeb3React()


  return (
    <Page>
      <Hero>
        {/* <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'BalloonSwap')}
        </Heading>
        <Text>{TranslateString(578, 'The #1 zero gravity exchange on the bsc smart chain')}</Text> */}
      </Hero>
      <div style = {{display : 'flex', flexDirection : 'row'}}>
        <div style = {{width : '50%'}}><h1 style={{"fontSize" : "60px", "color" : "#80543b"}}>THE SWEET TASTE <br/>OF DE-FI</h1>

        <br/>

        <Text style={{marginTop : "20px", marginBottom : "18px"}}>Take a bite into our tasty eco-system, with confidence and security, to earn</Text>


        {account ? (
          // <Button
          //   id="harvest-all"
          //   disabled={balancesWithValue.length <= 0 || pendingTx}
          //   onClick={harvestAllFarms}
          //   width="100%"
          // >
          //   {pendingTx
          //     ? TranslateString(548, 'Collecting RBL Token')
          //     : TranslateString(532, `Harvest all (${balancesWithValue.length})`, {
          //         count: balancesWithValue.length,
          //       })}
          // </Button>
          <div style={{display : "flex", justifyContent:"space-between"}}>

          {/* // width: 44%;
          // margin-bottom: 15px;
          // box-shadow: 0px 0px 0px 1px #eeeaf4, 0px 0px 0px 2px rgb(111 49 8) */}
            <StyledInput type="text" scale="md" value="233 BNB" />
            {/* <Button style={{marginBottom : "20px", backgroundColor : "rgb(251 66 45)"}}> YAY YOU ARE IN ! 😁</Button> */}

            <Button style={{marginBottom : "20px", backgroundColor : "rgb(251 66 45)"}}>Reserve Tokens</Button>

          </div>
        ) : (
          <UnlockButton style={{marginBottom : "20px"}} />
        )}



        {/* <h3></h3> */}

        <Heading style={{fontSize : "29px"}} mb="24px">
          TVL ~ $1,567,892
        </Heading>

        </div>
        <div style= {{width : '50%'}}><img width = "80%" src="/images/pixel/LogoWhite.gif" alt="cookie img" /></div>
      </div>
      <div>
        {/* <Cards>
          <LotteryCard />
        </Cards>
        <CTACards>
        <EarnAssetCard />
        <FarmStakingCard />
          <EarnAPRCard />
          <WinCard />
        </CTACards>
        <Cards>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards> */}
      </div>
    </Page>
  )
}

export default Home
