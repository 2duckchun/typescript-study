"use strict";
// class Player {
//   // 생성자 내부의 프로퍼티는 생성자 밖에서 미리 타입을 정의해주어야 함
//   // public, private은 가시성의 여부 결정 / readonly는 프로퍼티에 대한 쓰기 여부 결정
//   public readonly first: string;
//   public readonly last: string;
//   private _score: number | string = 0 // 클래스 필드는 알아서 추론함. 그래도 애너테이션 해주는게 좋음
//   // private는 클래스 내부에서만 엑세스할 수 있게 됨
//   // 하지만 private는 런타임에서는 어디에서도 접근 가능함
//   // # 접근제어자는 JS의 기능이고, JS에서도 접근 못함
//   constructor(first: string, last: string) {
//     this.first = first
//     this.last = last
//     this.newPlayer()
//   }
//   private newPlayer():void {
//     console.log("새 캐릭터가 생성되었습니다.")
//   }
// }
class Player {
    // private _score: number = 0 
    // 클래스 필드는 알아서 추론함. 그래도 애너테이션 해주는게 좋음
    // private는 클래스 내부에서만 엑세스할 수 있게 됨
    // 하지만 private는 런타임에서는 어디에서도 접근 가능함
    // # 접근제어자는 JS의 기능이고, JS에서도 접근 못함
    // shortcut syntax
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
        this.newPlayer();
    }
    newPlayer() {
        console.log("새 캐릭터가 생성되었습니다.");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("점수가 0보다 작을 수 없다.");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 999999;
    }
}
const deny = new SuperPlayer("daenerys", "targaryen", 100);
const john = new Player("John", "Snow", 151);
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log("이게 프린트가 된다고?");
    }
}
const bike1 = new Bike("teal");
const jacket1 = new Jacket("Prada", "black");
// 인스턴스를 생성할 수 없는 클래스
// 자식을 만드는 클래스이다.
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("HELLO");
    }
}
class FullTime extends Employee {
    constructor(first, last, salaly) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salaly = salaly;
    }
    getPay() {
        return this.salaly;
    }
}
class PartTime extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const 김씨 = new FullTime("김", "돌쇠", 300);
const 최씨 = new PartTime("최", "번개", 0.9, 8);
/**
 * Employee
 * FullTime
 * PartTime
 */ 
