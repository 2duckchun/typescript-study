import {type Person, abc } from "./types.js"

export default class User implements Person{
  constructor(public username: string, public email: string) {

  }
  logout() {
    console.log(`${this.username} log out!`)
    console.log(abc)
  }
}

export function userHelper() {
  console.log("user helper")
}