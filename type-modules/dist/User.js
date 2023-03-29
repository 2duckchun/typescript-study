import { abc } from "./types.js";
export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} log out!`);
        console.log(abc);
    }
}
export function userHelper() {
    console.log("user helper");
}
