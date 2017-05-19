import React from 'react'
import {connect} from 'react-redux'
import TodoHeader from 'components/TodoHeader'

class TodoHeaderContainer extends React.Component {
  render () {
    return (
      <TodoHeader title='我的待辦清單'
        username='Tim'
        todoCount={this.props.todos.filter((todo) => !todo.completed).length} />
    )
  }
}

const newTodoHeaderContainer = connect(
  (state) => ({ todos: state.todos })
)(TodoHeaderContainer)

export default newTodoHeaderContainer
