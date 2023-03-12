interface Todo {
  text: string,
  completed: boolean
}

const btn = document.getElementById("btn") as HTMLButtonElement
const input = document.getElementById("todoinput") as HTMLInputElement
const form = document.querySelector("#todoform") as HTMLFormElement
const list = document.querySelector("#todoList") as HTMLUListElement

const readTodos = (): Todo[] => {
  const todosJSON = localStorage.getItem("todos")
  if (todosJSON === null) return []
  return JSON.parse(todosJSON)
}

const createTodo = (todo: Todo) => {
  const newLI = document.createElement("li")
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.checked = todo.completed
  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked
    saveTodos()
  })
  newLI.append(todo.text)
  newLI.append(checkbox)
  list?.append(newLI)
}

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos))
}

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault()
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  }
  createTodo(newTodo)
  todos.push(newTodo)
  saveTodos()
  input.value = ""
}

const todos: Todo[] = readTodos()
todos.forEach(createTodo)
form.addEventListener("submit", handleSubmit)