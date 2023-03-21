"use strict";
// const nums = number[] = []
const nums = [];
const colors = [];
const inputEl = document.querySelector("#username");
console.dir(inputEl);
inputEl.value = "ㅎㅇㅎㅇㅎㅇㅎㅇ";
const btn = document.querySelector(".btn");
//
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
identity(7);
identity("ㅎㅇ");
identity(true);
identity({ name: "white", breed: "mixed" });
