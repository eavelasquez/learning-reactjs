const API_URL = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'

export const getRandomNumber = async (): Promise<number> => {
  const response = await fetch(API_URL)
  const text = await response.text()
  return parseInt(text)
}
