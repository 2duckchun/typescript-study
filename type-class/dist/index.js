class Player {
  static description = "Game of Throne"

  static newPlayer() {
    return new Player("Ser", "Jaime")
  }

  numLives = 10
  #score = 0
  constructor(first, last) {
    this.#onNewbee()
    this.first = first
    this.last = last
  }

  get fullName() {
    return `whose name is ${this.first} of house ${this.last}`
  }

  set fullName(newName) {
    const [first, last] = newName.split(" ")
    this.first = first
    this.last = last
    console.log('FullName has changed')
  }

  set firstName(newFirst) {
    this.first = newFirst
    console.log("FirstName has changed")
  }

  get score() {
    return this.#score
  }

  set score(newScore) {
    if(newScore < 0) {
      throw new Error("점수는 양수여야 합니다.")
    }
    this.#score = newScore
  }

  setScore(newScore) {
    this.#score = newScore
  }

  loseLife() {
    this.numLives -= 1
  }

  #onNewbee() {
    console.log("새 플레이어가 생성되었습니다.")
  }
}

class adminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last)
    this.powers = powers
  }
  #isAdmin = true
}

const admin = new adminPlayer("강", "원기", ["delete", "restore world"])

// const player1 = new Player("Daenerys", "targaryen")