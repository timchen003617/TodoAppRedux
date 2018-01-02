import ActionTypes from 'constants/ActionTypes'

const createTodo = (todos, title) => {
  if (todos.length === 0) {
    return [...todos, { // new todo
      id: 0,
      title,
      completed: false,
    }]
  }
  return [...todos, {
    id: todos[todos.length - 1].id + 1,
    title,
    completed: false,
  }]
}

// 將編輯邏輯抽成一個 function
const updateTodo = (todos, id, title) => {
  const idx = todos.findIndex((todo) => { return todo.id === id })
  if (idx === -1) return todos

  // 2. 每次修改項目，就回傳新陣列
  const newTodos = [...todos]
  newTodos[idx] = {
    ...todos[idx],
    title,
  }
  return newTodos
}
// 將切換邏輯抽成一個 function
const toggleTodo = (todos, id, completed) => {
  const idx = todos.findIndex((todo) => { return todo.id === id })
  if (idx === -1) return todos

  const newTodos = [...todos]
  newTodos[idx] = {
    ...todos[idx],
    completed,
  }

  return newTodos
}

// 將刪除邏輯抽成一個 function
const deleteTodo = (todos, id) => {
  const idx = todos.findIndex((todo) => { return todo.id === id })
  if (idx === -1) return todos

  const newTodos = [...todos]
  newTodos.splice(idx, 1) // 移除1個 索引idx元素,回傳移除後的陣列
  return newTodos
}

const todos = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.LOAD_TODOS_SUCCESS:
      return action.todos
    case ActionTypes.CREATE_TODO:
      return createTodo(state, action.title)
    case ActionTypes.UPDATE_TODO:
      return updateTodo(state, action.id, action.title)
    case ActionTypes.TOGGLE_TODO:
      return toggleTodo(state, action.id, action.completed)
    case ActionTypes.DELETE_TODO:
      return deleteTodo(state, action.id)
    default:
      return state
  }
}

export default todos
