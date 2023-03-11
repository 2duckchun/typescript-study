"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    console.log(input.value);
    input.value = "";
});
// let greeting: unknown = "Hello World"
// const greetnum = (greeting as string).length
