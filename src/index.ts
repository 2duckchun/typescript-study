import { init, exit } from "./myPackage.js";

init({
  debug: false,
  url: "123",
});

console.log(exit(15));
