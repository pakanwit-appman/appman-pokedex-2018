import * as R from 'ramda'

const matchNumber = /\d+/g

export const calcHP = (item) => {
  if (item.hp === 'None') return 0
  return item.hp > 100 ? 100 : item.hp
}

export const calcStrength = (item) => {
  const x = item.convertedRetreatCost || 0
  const Strength = R.multiply(50, x)
  return Strength > 100 ? 100 : Strength
}

export const calcWeaknesses = (item) => {
  console.log('weakness', item.weaknesses)
  const weaknessData = item.weaknesses[0]
  // console.log('calcWeaknesses', weaknessData.value)
  const weakness = weaknessData.value.match(matchNumber)
  return weakness
}

export const calcDamage = (item) => {

}

export default (item) => ({
  hp: calcHP(item),
  str: calcStrength(item),
  weak: 100,//calcWeaknesses(item)
})