function square(num: number) {
  return num * num
}
square("문자") // argument가 숫자형이 아니라 오류 발생.
square(false) // argument가 숫자형이 아니라 오류 발생.
square(3)

function greet(person: string) {
  // person * person
  return `Hi! ${person.toUpperCase()}` 
}
greet(4) // argument가 문자형이 아니라 오류 발생.
greet(true) // argument가 문자형이 아니라 오류 발생.
greet("2DC")

const doSomething = (person: string, isFunny: boolean, age: number = 29):object => {
  return {
    name: person,
    isFunny: isFunny,
    age: age
  }
}
doSomething('2DC', true)


// Function Return Types
/*
We can specify the type returned by a function. Even though TypeScript can often
infer this, I prefer the explicit annotations.

Add the type annotation after the function parameter list.
*/

const addNums = (x: number, y:number):number => {
  return x + y
}

function addNumsToo(x:number, y:number = 2):number {
  return x + y
}


function voidSquare(x:number, y:number) {
  x * y
}

addNumsToo(5) // return number

voidSquare(2, 2) // return void


// Union type
// 값이나 타입이 하나만 반환되지 않을 경우 유니온 타입이라고 함.
function rando(num:number) {
  if (Math.random() < 0.5) return num.toString()
  return num
}
rando(6)


// Anonymous Functions
/*
When Typescript can infer how an unnamed function is going to be called,
it can automatically infer its parameters' types.
*/

const numbers = [1, 2, 3]

// Contextual typing on an arrow function
numbers.forEach(num => {
  return num.toUpperCase() // Error!
  // .toUpperCase() doesn't work for nums
})

const mixed = [1, "2", 3, true, (num:number ) => {return num}]
mixed.map(thing => {
  return thing
})

// Void
/*
Void is a return type for functions that don't return anything.
it means just that - this function is void of any data.

Typescript can infer this type fairly well,
but sometimes it may want you to annotate a function with a void return explicitly.
*/

// 보이드는 변수가 아닌 함수에서 주로 사용됨.
// 아무것도 반환하지 않는 함수의 반환 타입으로 사용함.

const voidUser = (num:number): void => {
  for (let i = 0; i < num; i++) {
    console.log("VoOiDddddddD")
  }
}

const justPrint = (msg: string):void => {
  console.log(msg)
  console.log(msg)
  // return ""
}
justPrint('ㅎㅇ')

// Never
// TypeScript의 고유 타입
/*
The never type represents values that NEVER occur.
We might use it to annotate a function that always throws an exception, or a function
that never finishes executing.

Don't confuse with void - void returns undefined or null, which is technically still a type of value.
With never, a function doesn't even finish executing.
*/

// A function that doesn't finish running
const neverStop = (): never => {
  while(true) {
    console.log("i'm still going")
  }
}
neverStop()

const giveError = (msg: string) => {
  throw new Error(msg)
}
giveError('에러네욤')