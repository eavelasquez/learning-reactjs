export const sumTotal = (cart) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue.price
  const sum = cart.reduce(reducer, 0)
  return sum
}
