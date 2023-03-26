"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash"));
lodash_1.default.sample([1, 2, 3, 5, 6]);
axios_1.default.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
    console.log("Woo!");
    const { data } = res;
    data.forEach(printUser);
}).catch(e => {
    console.log("error", e);
});
function printUser(user) {
    console.log(user.address.geo);
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
