// Action Creators
import fetch from 'isomorphic-fetch'
import ActionTypes from 'constants/ActionTypes'

const loadTodos = () => {
  return (dispatch) => {
    fetch('http://localhost:3004/todoList')
      .then((response) => response.json()).then(todos => new Promise((resolve) => {
        return resolve(todos)
      }))
      .then((todos) => dispatch({
        type: ActionTypes.LOAD_TODOS_SUCCESS,
        todos
      })
      )
  }
}

const createTodo = (title) => {
  const action = {
    type: ActionTypes.CREATE_TODO,
    title
  }
  return action
}

const updateTodo = (id, title) => {
  const action = {
    type: ActionTypes.UPDATE_TODO,
    id,
    title
  }
  return action
}

const toggleTodo = (id, completed) => {
  const action = {
    type: ActionTypes.TOGGLE_TODO,
    id,
    completed
  }
  return action
}

const deleteTodo = (id) => {
  const action = {
    type: ActionTypes.DELETE_TODO,
    id
  }
  return action
}

export default {
  loadTodos,
  createTodo,
  updateTodo,
  toggleTodo,
  deleteTodo
}
