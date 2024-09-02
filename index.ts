function checkSubarraySum(nums: number[], k: number): boolean {
  // k === 0
  if (k === 0) {
    let accumulatedSum = 0
    const seenAccumulatedSums = new Set<number>([0])

    for (const num of nums) {
      accumulatedSum += num
      // Verifica se a soma acumulada já foi vista
      if (seenAccumulatedSums.has(accumulatedSum)) {
        return true
      }
      // Adiciona a soma acumulada ao conjunto
      seenAccumulatedSums.add(accumulatedSum)
    }
    return false
  }

  // k !== 0
  const remainderIndexMap: { [key: number]: number } = { 0: -1 }
  let accumulatedSum = 0

  for (let i = 0; i < nums.length; ++i) {
    // Atualiza a soma acumulada e calcula o resto ao dividir por k
    accumulatedSum = (accumulatedSum + nums[i]) % k

    // Verifica se o resto já foi visto antes
    if (!remainderIndexMap.hasOwnProperty(accumulatedSum)) {
      // Armazena o índice atual para este resto
      remainderIndexMap[accumulatedSum] = i
    } else if (i - remainderIndexMap[accumulatedSum] > 1) {
      // Se a distância entre os índices for maior que 1, retorna true
      return true
    }
  }

  return false
}

const validKEqualsZero = checkSubarraySum([0, 0, 0, 0], 0)
const notValidKEqualsZero = checkSubarraySum([1, 2, 3, 4], 0)
const withValidSubarray = checkSubarraySum([23, 2, 4, 6, 7], 7)
const withoutValidSubarray = checkSubarraySum([1, 2, 3, 4], 11)

console.log(`valid subarray with k equals zero:`, validKEqualsZero)
console.log(`not valid subarray with k equals zero:`, notValidKEqualsZero)
console.log(`with valid subarray:`, withValidSubarray)
console.log(`without valid subarray:`, withoutValidSubarray)
