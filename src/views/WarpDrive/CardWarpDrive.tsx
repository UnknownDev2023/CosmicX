import React, { useState } from 'react'
import { Card, Text, Button, ArrowDropDownIcon } from '@apeswapfinance/uikit'
import styled from 'styled-components'
import { Field } from 'theme-ui'

interface DropdownProps {
  down?: boolean
}

const ColumnFull = styled(Card)`
  border-radius: 0px;
  text-align: center;
  width: 100%;
  margin-bottom: 55px;
  display: grid;
  padding: 16px;
  padding-right: 50px;
  background: ${({ theme }) => theme.colors.navbar};
  .mainContainer{
    
  },
  .title{
    text-align: left;
    padding-left: 30px;
    padding-top: 30px;
    padding-bottom: 10px;
    font-size: 24px;
  },
  .subtitle{
    text-align: left;
    font-size: 16px;
    padding-left: 30px;
    padding-bottom: 30px;
  }, 
`
const SmallContainer = styled(Card)`
  border-radius: 0px;
  border: 1px solid #383838;
  text-align: center;
  width: 95%;
  margin-bottom: 25px;
  padding: 26px 30px;
  margin-left: 30px !important;
  margin-right: 50px !important;
  position: relative;
  background: #383838 !important;
  
`
const MainField = styled(Card)`
  border-radius: 0px;
  border: 1px solid #383838;
  text-align: center;
  width: 95%;
  margin-bottom: 25px;
  margin-top: 30px !important;
  padding: 0px 30px;
  margin-left: 30px !important;
  margin-right: 50px !important;
  position: relative;
  background: #383838 !important;
  .mainInput{
    background: transparent;
    border: 0px;
    color: #ffffff;
    float: right;
    height: 50px;
    width: 20%;
    outline: none;
    border-bottom: 1px solid #e2e2e2;
    text-align: right;
    font-size: 20px;
  }
  .mainInput:focus{
    border-bottom: 1px solid #e2e2e2;
    text-align: right;
  }
`

const PlayButton = styled(Button)`
  width: 100%;
  max-width: 654px;
  height: 55px;
  margin-top: 30px;
  margin-left: 30px;
  padding-bottom : 30px !important;
  margin-bottom: 30px;
  margin-right: 60px !important;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 0px;
  :focus {
    outline: none !important;
    box-shadow: none !important;
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`

const PlayText = styled(Text)`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 56px;
  text-align: center;
`

const MaxButton = styled(Button)`
  float: right;
`

const CardWarpDrive: React.FC<any> = ({ game }) => {
  const [sortDirection, setSortDirection] = useState<boolean | 'desc' | 'asc'>('desc')
  return (
    <>
    <ColumnFull>
        <div className='title'>Staked COSMIC</div>
        <div className='subtitle'>Manage your staked COSMIC.</div>
        <SmallContainer>
          <p style={{float: "left"}}>COSMIC earned</p>
          <p style={{float: "right"}}>0 COSMIC</p>
        </SmallContainer>
        <MainField>
          <p style={{float: "left", lineHeight:"50px"}}>COSMIC</p>
          <input placeholder="0" className='mainInput'/>
          <br/><br/><br/><br/>
          <p style={{float: "left", paddingBottom:"20px", fontSize: "14px"}}>Balance: 0</p>
          <MaxButton as='a' href="#">Max</MaxButton>
        </MainField>
        <p style={{paddingLeft:"30px", lineHeight:"40px", paddingTop:"30px"}}>Lock duration: 100 days</p>
        <PlayButton as="a" href="#" target="_blank">
          <PlayText color="white">Stake</PlayText>
        </PlayButton>
    </ColumnFull>
    </>
  )
}

export default CardWarpDrive
