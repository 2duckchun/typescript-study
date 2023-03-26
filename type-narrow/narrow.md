# narrowing
## Typeof Guards
- typeof Type Guards involve simply doing a type check before working with a value.
- Since unions allow multiple types for a value, we can first check what came through before working with it.
```ts
function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3)
  } // 타입스크립트는 코드를 해석해 문자열인지 알게 됨
  return value * 3 // 타입스크립트는 코드를 해석해 이게 문자열일리 없다고 알게 됨
}
```

## Truthiness Guards
- Truthiness Type Guards involve checking a value for being truthy or falsy before working with it.
- This is helpful in avoiding errors when values might be null or undefined.
```ts
const printLetters = (word?: string) => {
  word // string | undefined
  if (word) {
    for(let char of word) {
      console.log(char)
    }
  } else {
    word // string | undefined  (빈 문자열도 falsy임)
    console.log("You did not pass in a word!")
  }
}
```

## Equality Narrowing
- equality Type Guards involve comparing types to each other before doing certain operations with values.
- By checking two values against one another, we can be sure they're both the same before working with them in a type-specific way.
```ts
const someFunc = (x: string | boolean, y: string | number) => {
  if (x === y) {
    x.toUpperCase()
    y.toLowerCase()
  } else {
    console.log(x)
    console.log(y)
  }
}
/**
 * someFunc의 x는 string과 boolean을, y는 string과 number를 받는다.
 * 이 때 x === y가 참이라면 x.toUpprCase() y.toLowerCase()를 하게 되는데, 이 메서드는 문자열에만 존재하므로 알아서 타입이 좁혀진다.
 */


const badCase = (x: string | boolean, y: string | number) => {
  if (x == y) {
    x.toUpperCase()
    y.toLowerCase()
  } else {
    console.log(x)
    console.log(y)
  }
}
/**
 * 이중 등호를 사용하게 되면 3 == "3" 을 같다고 인식한다.
 * 이 경우, 숫자는 toUpperCase() 메서드가 없기 때문에 타입에서는 통과하더라도 런타임에서 오류가 나게 된다.
 */
badCase(3, "3") // ??!
```

## in Operator Narrowing
- JS's in operator helps check if a certain property exists in an object.
- This means we can use it to check if a value exists in an object, according to its type alias or aliases, before working with it.
```ts
type Cat = { meow: () => void}
type Dog = { bark: () => void}

const talk = (creature: Cat | Dog) => {
  if ("meow" in creature) {
    console.log(creature.meow())
  } else {
    console.log(creature.bark())
  }
}
const kitty: Cat = {meow: () => "MEOWWW"}
talk(kitty)

interface Movie {
  title: string,
  duration: number
}

interface TVShow {
  title: string,
  numEpisodes: number,
  episodeDuration: number
}

function getRuntime(media: Movie | TVShow) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration
  }
  return media.duration // Movie Type (위에서 리턴했으므로)
} 

getRuntime({title: "Amadeus", duration: 140})
getRuntime({title: "Spongebob", numEpisodes: 140, episodeDuration: 20})
```

## instanceof Narrowing
- instanceof is a JS operator that allows us to check if one thing is an instance of another. (remember prototype!)
- This can help us narrow types when working with things like classes.
```ts
[1, 2, 3] instanceof Array // true
[1, 2, 3] instanceof Date // false

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    date
    console.log(date.toUTCString())
  } else {
    date
    console.log(new Date(date).toUTCString())
  }
}

class User {
  constructor(public username: string) {}
}
class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if(entity instanceof User) {
    console.log(entity.username)
  } else {
    console.log(entity.name)
  }
}
```

## Type Predicates (타입 명제)
- Typescript allows us to write custom functions that can narrow the type of a value.
- These functions have a very special return type called a type predicate.
- A predicate takes the form parameterName is Type
```ts
interface Cat {
  name: string,
  numLives: number
}
interface Dog {
  name: string,
  breed: number
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined
}

function makeNoise(animal: Cat | Dog): string {
  if(isCat(animal)) {
    animal
    return "Meow"
  } else {
    animal
    return "Bark"
  }
}
```

## discriminated unions
- A common pattern in Typescript involves creating a literal property that is common across multiple types.
- We can then narrow the type using that literal property.
```ts
interface Rooster{
  TYPE: "rooster"
  name: string,
  weight: number,
  age: number,
}

interface Cow{
  TYPE: "cow"
  name: string,
  weight: number,
  age: number
}

interface Pig{
  TYPE: "pig"
  name: string,
  weight: number,
  age: number
}

type FarmAnimal = Pig | Rooster | Cow
function getFarmAnimalSound(animal:FarmAnimal) {
  switch(animal.TYPE) {
    case("pig"):
      animal // pig
      return "Oink"
    case("cow"):
      animal // cow
      return "Muu"
    case("rooster"):
      animal // rooster
      return "kokodack"
  }
}

const stevie:Rooster = {
  TYPE: 'rooster',
  name: "스티비원더",
  weight: 3,
  age: 1.5
}
getFarmAnimalSound(stevie)
```

## Exhaustiveness Check, Never
- 소진검사, never 타입 검사.
- 가능한 모든 옵션을 다 쓴것이 맞는지를 검사함.
- never에는 어떤 것도 할당할 수 없다는 것에 근거하여 기능을 사용함.

```ts
interface Rooster{
  TYPE: "rooster"
  name: string,
  weight: number,
  age: number,
}

interface Cow{
  TYPE: "cow"
  name: string,
  weight: number,
  age: number
}

interface Pig{
  TYPE: "pig"
  name: string,
  weight: number,
  age: number
}

interface Sheep{
  TYPE: "sheep"
  name: string,
  weight: number,
  age: number
}

type FarmAnimal = Pig | Rooster | Cow | Sheep
function getFarmAnimalSound(animal:FarmAnimal) {
  switch(animal.TYPE) {
    case("pig"):
      animal // pig
      return "Oink"
    case("cow"):
      animal // cow
      return "Muu"
    case("rooster"):
      animal // rooster
      return "kokodack"
    default:
      console.log("무언가 잘못되었네용ㅎ")
      // 모든 케이스가 올바르게 처리되면 여기까지 진행되지 않을 것임.
      const _exhaustiveCheck: never = animal // Sheep에 대한 case가 없어서 에러를 뿜게됨.
      return _exhaustiveCheck
  }
}
```