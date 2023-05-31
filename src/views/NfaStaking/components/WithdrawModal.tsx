import React, { useState } from 'react'
import { Button, Modal, AutoRenewIcon, Text } from '@apeswapfinance/uikit'
import Image from 'views/Nft/components/Image'
import styled from 'styled-components'
import { useFetchNfas, useNfas } from 'state/hooks'
import ModalActions from 'components/ModalActions'
import { useTranslation } from 'contexts/Localization'
import UnderlinedButton from 'components/UnderlinedButton'

interface WithdrawModalProps {
  onConfirm: (amount: number[]) => void
  onDismiss?: () => void
  stakedNfas: number[]
}

const OwnedNfaWrapper = styled.div`
  width: 305px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-self: center;
  margin-bottom: 10px;
  margin-top: 20px;
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 405px;
  }
`

const Nfa = styled.div<{ active: boolean }>`
  width: 80px;
  height: 80px;
  box-shadow: 0px 0px ${(props) => (props.active ? '15px #3c817f' : '2px black')};
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 15px;
`

const WithdrawModal: React.FC<WithdrawModalProps> = ({ onConfirm, onDismiss, stakedNfas }) => {
  useFetchNfas()
  const [selectedNfas, setSelectedNfas] = useState([])
  const [pendingTx, setPendingTx] = useState(false)
  const { t } = useTranslation()
  const { nfas } = useNfas()
  const mappedNfas = nfas?.filter((nfa) => stakedNfas.includes(nfa.index))

  const handleNfaChange = (index) => {
    if (selectedNfas.includes(index)) {
      setSelectedNfas(selectedNfas.filter((i) => i !== index))
    } else {
      setSelectedNfas([...selectedNfas, index])
    }
  }

  return (
    <Modal title={t('Withdraw NFAs')} onDismiss={onDismiss}>
      <Text marginBottom="20px">
        {t('NFAs Selected')}:
        {selectedNfas.map((index) => {
          return ` ${index},`
        })}
      </Text>
      <OwnedNfaWrapper>
        {mappedNfas.length !== 0 ? (
          mappedNfas?.map((nfa) => {
            return (
              <Nfa onClick={() => handleNfaChange(nfa.index)} active={selectedNfas.includes(nfa.index)} key={nfa.index}>
                <Image src={nfa.image} alt={nfa.name} rarityTier={nfa.attributes.rarityTierNumber} />
              </Nfa>
            )
          })
        ) : (
          <Text marginBottom="20px">{t('You do not have any NFAs staked')} 😢</Text>
        )}
      </OwnedNfaWrapper>
      <ModalActions>
        <Button
          fullWidth
          disabled={pendingTx || selectedNfas.length === 0}
          onClick={async () => {
            setPendingTx(true)
            await onConfirm(selectedNfas)
            setPendingTx(false)
            onDismiss()
          }}
          endIcon={pendingTx && <AutoRenewIcon spin color="currentColor" />}
          style={{
            borderRadius: '0px',
          }}
        >
          {pendingTx ? t('Pending Confirmation') : t('Confirm')}
        </Button>
        <UnderlinedButton text={t('Cancel')} handleClick={onDismiss} />
      </ModalActions>
    </Modal>
  )
}

export default WithdrawModal
