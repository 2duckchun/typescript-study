function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3)
  } // 타입스크립트는 코드를 해석해 문자열인지 알게 됨
  return value * 3 // 타입스크립트는 코드를 해석해 이게 문자열일리 없다고 알게 됨
}

const el = document.getElementById("idk") // HTMLElement or null
if(el){
  el // HTMLElement
} else {
  el // null
}

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

const someFunc = (x: string | boolean, y: string | number) => {
  if (x === y) {
    x.toUpperCase()
    y.toLowerCase()
  } else {
    console.log(x)
    console.log(y)
  }
}

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
      const shouldNeverGetHere: never = animal // Sheep에 대한 case가 없어서 에러를 뿜게됨.
  }
}

const stevie:Rooster = {
  TYPE: 'rooster',
  name: "스티비원더",
  weight: 3,
  age: 1.5
}
getFarmAnimalSound(stevie)