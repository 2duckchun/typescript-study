const btn = document.getElementById("btn")
const input = document.getElementById("todoinput") as HTMLInputElement

btn?.addEventListener("click", () => {
  console.log(input.value)
  input.value = ""
})


// let greeting: unknown = "Hello World"
// const greetnum = (greeting as string).length
