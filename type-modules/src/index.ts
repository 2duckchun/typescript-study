import { add, sample as randomSample, pi } from "./utils.js"
import qwerty, { userHelper } from "./User.js"

const sample = 12345

console.log(randomSample([12, 3, 4]))
console.log(add(1, 2))
console.log("ㅎㅇㅎㅇ")
console.log(pi)
const user = new qwerty("ㅎㅇㅎㅇ", "ㅎㅇㅎㅇ")
console.log(user)
user.logout()
userHelper()