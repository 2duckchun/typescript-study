/*
Array Types
Arrays can be typed using a type annotation followed by empty array brackets, like number[] for an array of numbers.
Note: these arrays only allow data of that one type inside them.
*/

// const activeUsers: [] = [1]
// 빈 배열이 아니기 때문에 에러가 발생함

const nickNames1: string[] = ["2DC", "3DC"]
const nickNames2: Array<string> = ["4DC", "5DC"]

const numArr1: number[] = [1, 2, 3]
const numArr2: Array<number> = [1, 2, 3] 

const booleanArr1: boolean[] = [false, true]
const bolleanArr2: Array<boolean> = [true, false]

type Points = {
  x: number,
  y: number
}

const coords: Points[] = [{x: 10, y: 20}]
coords.push('2DC')
coords.push({x: 20, y: 40})

const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"]
]

const demo: number[][][][] = [
  [[[2, 4]]]
]
