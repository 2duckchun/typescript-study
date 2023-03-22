"use strict";
// const nums = number[] = []
const nums = [];
const colors = [];
const inputEl = document.querySelector("#username");
console.dir(inputEl);
inputEl.value = "ㅎㅇㅎㅇㅎㅇㅎㅇ";
document.querySelector;
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
function getRandomElement(list) {
    const randomIdx = Math.floor(Math.random() * list.length);
    return list[randomIdx];
}
getRandomElement(["1", "2", "3"]);
getRandomElement(["4", "5", "6"]);
getRandomElement([{ name: "black", breed: "mixed" }, { name: "white", breed: "koshort" }]);
getRandomElement([{ name: "black", breed: "mixed" }, { name: "white", breed: "koshort" }]);
document.querySelector("#username");
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: "2DC" }, { job: "developer" });
const dontdo = merge({ name: "2DC" }, { job: "developer" });
function extendMerge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const catMaster = extendMerge({ master: "2DC" }, { name: "white", breed: "koshort" });
function multiplyLength(thing, thing2) {
    return (thing.length * 2 + thing2);
}
function nogenericMultiplyLength(thing, thing2) {
    return (thing.length * 2 + thing2);
}
multiplyLength("문자열", 5);
multiplyLength([1, 2, 3, 4,], 5);
function makeEmptyArray() {
    return [];
}
const unknown = makeEmptyArray();
const stringEmptyArr = makeEmptyArray();
function makedefaultNumberEmptyArray() {
    return [];
}
const numberdefaultArr = makedefaultNumberEmptyArray();
const thisisBoolArr = makedefaultNumberEmptyArray();
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
const videos = new Playlist();
songs.add({ title: "내사랑내곁에", artist: "김현식" });
videos.add({ title: "프응TV", creator: "프응", resolution: "4DX" });
