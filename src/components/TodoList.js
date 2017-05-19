import React from 'react'
import TodoItem from 'components/TodoItem'

class TodoList extends React.Component {
  /* TodoList.js */
// 3. 當待辦項目被刪除，觸發上層元件 (TodoApp) 傳遞的 onDeleteTodo callback：
//    callback 必須傳遞 todo 的 id，讓上層元件知道哪一筆項目需要刪除；
//    使用 props 傳遞 callback 的好處是，可以不用在底層 view 元件中加入業務邏輯。
//
//    小筆記：讓 view 元件職責簡單，只需顯示 props 的資料，和呼叫 props 中相對應的 callback
 // if onDeleteTodo = true then call onDeleteTodo()
  render () {
    const { todos, onDeleteTodo, onToggleTodo, onUpdateTodo } = this.props
    const todoItems = todos.map(todo =>
      <li key={todo.id}>
        <TodoItem title={todo.title} completed={todo.completed}
          onDelete={() => onDeleteTodo && onDeleteTodo(todo.id)}
          onToggle={(completed) => onToggleTodo && onToggleTodo(todo.id, completed)}
          onUpdate={((title) => onUpdateTodo && onUpdateTodo(todo.id, title))} />
      </li>
    )
    return <ul>{todoItems}</ul>
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onDeleteTodo: React.PropTypes.func,
  onToggleTodo: React.PropTypes.func
}

export default TodoList
