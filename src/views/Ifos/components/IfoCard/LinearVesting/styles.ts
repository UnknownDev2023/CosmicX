import styled from 'styled-components'
import { Button, Text } from '@apeswapfinance/uikit'
import BaseUnlockButton from 'components/UnlockButton'

export const styles = {
  tab: {
    padding: '4px 0',
    minWidth: '120px',
    fontSize: '12px',
    'button, span': { padding: '4px 0', fontSize: '12px' },
  },
}

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white3};
  padding: 15px;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 360px;
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const VestingClaimButton = styled(Button)`
  width: 220px;
  height: 44px;
  background-color: secondary;
  margin: 0 auto 12px auto;
  flex-shrink: 0;
  background: #3c817f;
  padding: 0;
  :focus {
    outline: none !important;
    box-shadow: none !important;
    background: #3c817f;
  }
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`

export const Claim = styled(Text)`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 20px;
  }
`

export const TextWrapRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 15px 0;
`

export const ApproveButton = styled(Button)`
  width: 220px;
  margin: 0 auto;
`

export const UnlockButton = styled(BaseUnlockButton)`
  width: 220px;
  margin: 0 auto 12px auto;
  height: 44px;
  font-size: 16px;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`
