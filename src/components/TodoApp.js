/* TodoApp                      // 負責 UI 排版
 ├── TodoHeaderContainer      // 負責與 Store 及 Action 溝通
 │   └── TodoHeader           // 負責 UI 排版
 ├── CreateTodoFieldContainer // 負責與 Store 及 Action 溝通
 │   └── InputField           // 負責 UI 排版
 └── TodoListContainer        // 負責與 Store 及 Action 溝通
     └── TodoList             // 負責 UI 排版
         └── TodoItem * N     // 負責 UI 排版
*/

import React from 'react'
import {connect} from 'react-redux'
import CreateTodoFieldContainer from 'containers/CreateTodoFieldContainer'
import TodoHeaderContainer from 'containers/TodoHeaderContainer'
import TodoListContainer from 'containers/TodoListContainer'
import Container from 'components/Container'
import TodoActions from 'actions/TodoActions'

class TodoApp extends React.Component {
  componentDidMount () {
    this.props.loadTodos()
  }

  render () {
    return (
      <Container _width='1024px'>
        <TodoHeaderContainer />
        <CreateTodoFieldContainer />
        <TodoListContainer />
      </Container>
    )
  }
}

const newTodoApp = connect(undefined, {
  loadTodos: TodoActions.loadTodos
})(TodoApp)

export default newTodoApp
