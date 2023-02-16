"use strict";
const norma = {
    breed: "Silkie",
    eggsPerWeek: 4,
    name: "Norma",
    age: 2
};
const juniper = {
    breed: "Silkie",
    eggsPerWeek: 5,
    name: "juniper",
    age: 1
};
// tsc --watch ddd.ts
// tsc -w ddd.ts
// tsc
// tsc -w
// https://www.typescriptlang.org/tsconfig
// 탑레벨 설정 : files
// 글로브 패턴 ?? https://ko.wikipedia.org/wiki/%EA%B8%80%EB%A1%9C%EB%B8%8C_(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)
// "include": ["src"] -> 포함하는 것만 컴파일
// "include": ["src"],
// "exclude": ["src/dontTouch.ts"]
//  ... "exclude": ["**.test.ts"]
// outDir - 다른 파일에 컴파일할 수 있도록 도와줌
