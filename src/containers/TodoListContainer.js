import React from 'react'
import {connect} from 'react-redux'
import TodoActions from 'actions/TodoActions'
import TodoList from 'components/TodoList'

class TodoListContainer extends React.Component {
  render () {
    const {
      todos,
      updateTodo,
      toggleTodo,
      deleteTodo
    } = this.props
    return (
      <TodoList todos={todos}
        onUpdateTodo={updateTodo}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo} />
    )
  }
}
const newTodoListContainer = connect(
  (state) => ({ todos: state.todos }),
  {
    updateTodo: TodoActions.updateTodo,
    toggleTodo: TodoActions.toggleTodo,
    deleteTodo: TodoActions.deleteTodo
  }
)(TodoListContainer)

export default newTodoListContainer
