import { ApiResponse } from '../types'

export interface ProjectedData {
  type: 'cosmic farms' | 'space farms' | 'pools' | 'maximizers' | 'total'
  amountStaked: number
  projectedEarnings: {
    daily: number
    weekly: number
    monthly: number
    yearly: number
  }
  roi?: {
    daily: number
    weekly: number
    monthly: number
    yearly: number
  }
}

interface IPeriodEarnings {
  period: number
  farmApy: number
  stakedValue: number
}

const stakingPeriodsInDays = [1, 7, 30, 365] as const

const namedPeriods = {
  1: 'daily',
  7: 'weekly',
  30: 'monthly',
  365: 'yearly',
} as const

export function rawToProjected({ userStats, analytics }: ApiResponse) {
  const projectedProducts: ProjectedData[] = []

  userStats.forEach(({ farms, pools, jungleFarms,  maximizers }) => {
    farms?.forEach((farm) => {
      const farmApy = 'earnedBalance' in farm ? +farm.bananaApr : farm.earnApr
      const stakedValue = +farm.stakedBalance * farm.stakedToken.price

      const { daily, monthly, weekly, yearly } = getEarnings({ farmApy, stakedValue })

      const projectedProduct = projectedProducts.find((product) => product.type === 'cosmic farms')

      if (projectedProduct) {
        projectedProduct.projectedEarnings.daily += daily
        projectedProduct.projectedEarnings.weekly += weekly
        projectedProduct.projectedEarnings.monthly += monthly
        projectedProduct.projectedEarnings.yearly += yearly
      } else {
        projectedProducts.push({
          type: 'cosmic farms',
          projectedEarnings: { daily, weekly, monthly, yearly },
          amountStaked: +analytics.tvl.farms.value,
        })
      }
    })

    pools?.forEach(({ apr, stakedBalance, stakedToken }) => {
      const { daily, monthly, weekly, yearly } = getEarnings({
        farmApy: +apr,
        stakedValue: +stakedBalance * stakedToken.price,
      })

      const projectedProduct = projectedProducts.find((product) => product.type === 'pools')

      if (projectedProduct) {
        projectedProduct.projectedEarnings.daily += daily
        projectedProduct.projectedEarnings.weekly += weekly
        projectedProduct.projectedEarnings.monthly += monthly
        projectedProduct.projectedEarnings.yearly += yearly
      } else {
        projectedProducts.push({
          type: 'pools',
          projectedEarnings: { daily, weekly, monthly, yearly },
          amountStaked: +analytics.tvl.pools.value,
        })
      }
    })

    jungleFarms?.forEach(({ apr, stakedBalance, stakedToken }) => {
      const { daily, monthly, weekly, yearly } = getEarnings({
        farmApy: +apr,
        stakedValue: +stakedBalance * stakedToken.price,
      })

      const projectedProduct = projectedProducts.find((product) => product.type === 'space farms')

      if (projectedProduct) {
        projectedProduct.projectedEarnings.daily += daily
        projectedProduct.projectedEarnings.weekly += weekly
        projectedProduct.projectedEarnings.monthly += monthly
        projectedProduct.projectedEarnings.yearly += yearly
      } else {
        projectedProducts.push({
          type: 'space farms',
          projectedEarnings: { daily, weekly, monthly, yearly },
          amountStaked: +analytics.tvl.jungleFarms.value,
        })
      }
    })

    

    maximizers?.forEach(({ apy, stakedBalance, stakedToken }) => {
      const { daily, monthly, weekly, yearly } = getEarnings({
        farmApy: +apy.yearly,
        stakedValue: +stakedBalance * stakedToken.price,
      })

      const projectedProduct = projectedProducts.find((product) => product.type === 'maximizers')

      if (projectedProduct) {
        projectedProduct.projectedEarnings.daily += daily
        projectedProduct.projectedEarnings.weekly += weekly
        projectedProduct.projectedEarnings.monthly += monthly
        projectedProduct.projectedEarnings.yearly += yearly
      } else {
        projectedProducts.push({
          type: 'maximizers',
          projectedEarnings: { daily, weekly, monthly, yearly },
          amountStaked: +analytics.tvl.maximizers.value,
        })
      }
    })
  })

  projectedProducts.push({
    type: 'total',
    amountStaked: +analytics.tvl.total,
    projectedEarnings: projectedProducts.reduce(
      (acc, curr) => ({
        daily: acc.daily + curr.projectedEarnings.daily,
        weekly: acc.weekly + curr.projectedEarnings.weekly,
        monthly: acc.monthly + curr.projectedEarnings.monthly,
        yearly: acc.yearly + curr.projectedEarnings.yearly,
      }),
      {
        daily: 0,
        weekly: 0,
        monthly: 0,
        yearly: 0,
      },
    ),
  })

  return projectedProducts.map((product) => ({
    ...product,
    roi: {
      daily: calculateRoi({
        amountEarned: product.amountStaked + product.projectedEarnings.daily,
        amountInvested: product.amountStaked,
      }),
      weekly: calculateRoi({
        amountEarned: product.amountStaked + product.projectedEarnings.weekly,
        amountInvested: product.amountStaked,
      }),
      monthly: calculateRoi({
        amountEarned: product.amountStaked + product.projectedEarnings.monthly,
        amountInvested: product.amountStaked,
      }),
      yearly: calculateRoi({
        amountEarned: product.amountStaked + product.projectedEarnings.yearly,
        amountInvested: product.amountStaked,
      }),
    },
  }))
}

export function calculateRoi({ amountEarned, amountInvested }) {
  const percentage = (amountEarned / amountInvested - 1) * 100

  return isNaN(percentage) ? 0 : percentage
}

function getUsdPeriodEarnings({ period, farmApy, stakedValue }: IPeriodEarnings) {
  /**
   * For APYs under 1e-4 it is not worth calculating the value since
   * the estimated return is about $0.001 in a year per $1000 staked.
   */
  if (farmApy < 1e-4) return 0

  const compoundFrequency = 365
  const daysAsDecimalOfYear = period / compoundFrequency
  const apyAsDecimal = farmApy / 100

  const finalAmount = stakedValue * (1 + apyAsDecimal / compoundFrequency) ** (compoundFrequency * daysAsDecimalOfYear)

  return finalAmount - stakedValue
}

function getEarnings(params: Omit<IPeriodEarnings, 'period'>) {
  const totalEarnings = {
    daily: 0,
    weekly: 0,
    monthly: 0,
    yearly: 0,
  }

  for (const period of stakingPeriodsInDays)
    totalEarnings[namedPeriods[period]] = getUsdPeriodEarnings({ period, ...params })

  return totalEarnings
}
