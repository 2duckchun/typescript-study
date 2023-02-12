/*
Union Types
Union types allow us to give a value a few different possible types. if the eventual value's
type is included, Typescript will be happy.

We can create a union type be using the single | (pipe character) to separate the types we want to include.
it's like saying, "This thing is allowed to be this, this, or this". Typescript will enforce it from there.
*/

let age: number | string = 21;
age = "스물한살"
age = 29
age = 54 + 88
// age = ["29"]
// age = true

type UnionPoint = {
  x: number;
  y: number;
}

type UnionLoc = {
  lat: number;
  long: number;
}

let unionCoordinate: UnionPoint | UnionLoc = {x : 1, y : 2}
unionCoordinate = {lat : 1, long : 2}

/*
Unions - Narrowing the Type
Narrowing the Type is simply doing a type check before working with a value.
if your value is string you may want to use it differently than if you got a number.

Since unions allow multiple types for a value,
it's good to check what came through before working with it.
*/

function unionTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace('$', ''))
  } else {
    return price * tax
  }
}

const anyany: any[] = [1, 2, false, true, "짱"]
const num: number[] = [1, 2, 3, 4]
const numstring: (number | string)[] = [1, 2, 3, "4"]
// const numstring: number[] | string[] = [??]

const coordis: (UnionPoint | UnionLoc)[] = []
coordis.push({lat: 5, long: 6})
coordis.push({x: 6, y: 6})

/*
Literal Types
Literal types are not just types - but the values themselves too!

On it's own, that's not super helpful.
but combine it with something like unions and you can have very fine-tuned type options for Typescript to enforce.
*/

let zero: 0 = 0
// zero = 1

let hi: "hi" = "hi"
// hi = "hello"

let mood: "Happy" | "Sad" = "Sad"
mood = "Happy"

type DayOfWeek = "월" | "화" | "수" | "목" | "금" | "토" | "일"

const oneWeek: DayOfWeek[] = []
oneWeek.push("월")
oneWeek.push("일")
oneWeek.push("궭")

function choiceWeek(day: DayOfWeek ):DayOfWeek {
  return "일"
  // return "궭"
}
