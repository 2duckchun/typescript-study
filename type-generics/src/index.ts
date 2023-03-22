// const nums = number[] = []
const nums: Array<number> = []
const colors: Array<string> = []

const inputEl = document.querySelector<HTMLInputElement>("#username")!
console.dir(inputEl)
inputEl.value = "ㅎㅇㅎㅇㅎㅇㅎㅇ"

document.querySelector

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



function getRandomElement<T>(list: Array<T>): T {
  const randomIdx = Math.floor(Math.random() * list.length)
  return list[randomIdx]
}
getRandomElement<string>(["1", "2", "3"])
getRandomElement(["4", "5", "6"])

getRandomElement<Cat>([{name: "black", breed: "mixed"},{name: "white", breed: "koshort"}])
getRandomElement([{name: "black", breed: "mixed"},{name: "white", breed: "koshort"}])
document.querySelector<HTMLInputElement>("#username")

function merge<T, U>(object1:T, object2:U) {
  return {
    ...object1,
    ...object2
  }
}

const comboObj = merge({name: "2DC"}, {job: "developer"})
const dontdo = merge<{name: string}, {job: string}>({name: "2DC"}, {job: "developer"})

function extendMerge<T extends object, U extends Cat>(object1:T, object2:U) {
  return {
    ...object1,
    ...object2
  }
}
const catMaster = extendMerge({master: "2DC"}, {name: "white", breed: "koshort"})

interface Lengthy {
  length: number;
}

function multiplyLength<T extends Lengthy, U extends number>(thing: T, thing2: U): number{
  return (thing.length * 2 + thing2)
}

function nogenericMultiplyLength(thing: Lengthy, thing2: number): number{
  return (thing.length * 2 + thing2)
}

multiplyLength("문자열", 5)
multiplyLength([1, 2, 3, 4,], 5)

function makeEmptyArray<T>():T[] {
  return []
}
const unknown = makeEmptyArray()
const stringEmptyArr = makeEmptyArray<string>()

function makedefaultNumberEmptyArray<T = number>():T[] {
  return []
}
const numberdefaultArr = makedefaultNumberEmptyArray()
const thisisBoolArr = makedefaultNumberEmptyArray<boolean>()


interface Song {
  title: string;
  artist: string
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {
  public queue: T[] = []
  add(el: T) {
    this.queue.push(el)
  }
}

const songs = new Playlist<Song>()
const videos = new Playlist<Video>()
songs.add({title: "내사랑내곁에", artist: "김현식"})
videos.add({title: "프응TV", creator: "프응", resolution: "4DX"})