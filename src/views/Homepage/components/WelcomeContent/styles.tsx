import { Button, Text } from '@apeswapfinance/uikit'
import styled from 'styled-components'

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  align-self: center;
  justify-content: space-between;
  text-align: center;
  max-width: 1412px;
  width: 95vw;
  height: 300px;
  margin-bottom: 100px;
  top: 100px;
  ${({ theme }) => theme.mediaQueries.sm} {
    text-align: left;
    height: 300px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    height: 400px;
    margin-bottom: 175px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 95vw;
    padding-top: 50px;
  }
`

export const HeadingText = styled(Text)`
  font-size: 35px;
  line-height: 40px;
  font-weight: 700;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 40px;
    line-height: 50px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    font-size: 60px;
    line-height: 70px;
    text-shadow: 1px 1px 2px #000000;
  }
`

export const BuyBanana = styled(Button)`
  font-size: 16px;
  font-weight: 700;
  border-radius: 0px;
  height: 64px;
  width: 100%;
  margin-right: 25px;
  line-height: 5px;
  background-color: #3c817f;
  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
  }
  :hover {
    background-color: #36706f !important;
    opacity: 0.7;
  }
`

export const LearnMore = styled(Button)`
  font-size: 16px;
  font-weight: 700;
  border-radius: 0px;
  height: 64px;
  line-height: 5px;
  width: 100%;
  margin-top: 10px;
  border: 3px solid #3c817f;
  color: #ffffff;
  background-color: transparent;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    margin-top: 0px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
    margin-top: 0px;
  }
  :hover {
    background-color: transparent !important;
    border: 3px solid #36706f !important;
    color: #ffffff !important;
    opacity: 0.7;
  }
`
