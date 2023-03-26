import axios from "axios"
import _ from "lodash"

_.sample([1, 2, 3, 5, 6])
interface Geo {
  lat: string,
  lng: string,
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo,
  }
  phone: string,
  website: string,
  company: {
    name: string,
    catchPrase: string,
    bs: string
  },
}

axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
.then(res => {
  console.log("Woo!")
  const { data } = res
  data.forEach(printUser)
}).catch(e => {
  console.log("error", e)
})

function printUser(user: User) {
  console.log(user.address.geo)
}
// 사용자 지정 타입 만들기

// {
//   id: 1,
//   name: 'Leanne Graham',
//   username: 'Bret',
//   email: 'Sincere@april.biz',
//   address: {
//     street: 'Kulas Light',
//     suite: 'Apt. 556',
//     city: 'Gwenborough',
//     zipcode: '92998-3874',
//     geo: { lat: '-37.3159', lng: '81.1496' }
//   },
//   phone: '1-770-736-8031 x56442',
//   website: 'hildegard.org',
//   company: {
//     name: 'Romaguera-Crona',
//     catchPhrase: 'Multi-layered client-server neural-net',
//     bs: 'harness real-time e-markets'
//   }
// }