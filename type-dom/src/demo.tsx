function getRandomElement<T>(list: Array<T>): T {
  const randomIdx = Math.floor(Math.random() * list.length)
  return list[randomIdx]
}

const getRandomElementTsx = <T,>(list: Array<T>): T => {
  const randomIdx = Math.floor(Math.random() * list.length)
  return list[randomIdx]
}