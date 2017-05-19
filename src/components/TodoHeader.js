import React from 'react'
import PropTypes from 'prop-types'

class TodoHeader extends React.Component {
  render () {
    const {title, username, todoCount} = this.props
    return <div>
      <h1>{title}</h1>
      <span>Hello,{username}: 你有{todoCount}項未完成的待辦清單</span>
    </div>
  }
}
// 1. 使用 propTypes 定義參數的型別
TodoHeader.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  todoCount: PropTypes.number
}

// 2. 使用 defaultProps 定義參數的預設值
TodoHeader.defaultProps = {
  name: '我的待辦清單',
  username: 'Guest',
  todoCount: 0
}

export default TodoHeader
