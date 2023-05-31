import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import { Button, Modal, AutoRenewIcon } from '@apeswapfinance/uikit'
import ModalInput from 'components/ModalInput'
import { getFullDisplayBalance } from 'utils/formatBalance'
import { useTranslation } from 'contexts/Localization'

interface DepositModalProps {
  max: string
  onConfirm: (amount: string) => void
  onDismiss?: () => void
  tokenName?: string
  addLiquidityUrl?: string
}

const DepositModal: React.FC<DepositModalProps> = ({ max, onConfirm, onDismiss, tokenName = '', addLiquidityUrl }) => {
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const { t } = useTranslation()
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(new BigNumber(max))
  }, [max])

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [fullBalance, setVal])

  return (
    <Modal title={tokenName === 'COSMIC' ? t('Stake COSMIC') : t('Stake LP tokens')} onDismiss={onDismiss}>
      <ModalInput
        value={val}
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        max={fullBalance}
        addLiquidityUrl={addLiquidityUrl}
        inputTitle={t('Stake')}
      />
      <Button
        fullWidth
        disabled={pendingTx || fullBalance === '0' || val === '0' || parseFloat(fullBalance) < parseFloat(val)}
        onClick={async () => {
          setPendingTx(true)
          try {
            await onConfirm(val)
            onDismiss()
          } catch (e) {
            console.error('Transaction Failed')
          } finally {
            setPendingTx(false)
          }
        }}
        endIcon={pendingTx && <AutoRenewIcon spin color="currentColor" />}
        style={{
          borderRadius: '0px',
          marginTop: '10px',
        }}
      >
        {pendingTx ? t('Pending Confirmation') : t('Confirm')}
      </Button>
    </Modal>
  )
}

export default React.memo(DepositModal)
