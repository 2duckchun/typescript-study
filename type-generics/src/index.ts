// const nums = number[] = []
const nums: Array<number> = []
const colors: Array<string> = []

const inputEl = document.querySelector<HTMLInputElement>("#username")!
console.dir(inputEl)
inputEl.value = "ㅎㅇㅎㅇㅎㅇㅎㅇ"

const btn = document.querySelector<HTMLButtonElement>(".btn")!

//
function numberIdentity(item: number): number {
  return item
}

function stringIdentity(item: string): string {
  return item
}

function booleanIdentity(item: boolean): boolean {
  return item
}


interface Cat {
  name: string,
  breed: string
}


function identity<T>(item: T):T {
  return item
}

identity<number>(7)
identity<string>("ㅎㅇ")
identity<boolean>(true)
identity<Cat>({name: "white", breed: "mixed"})