import React from 'react'
import PropTypes from 'prop-types'
import InputField from 'components/InputField'

class TodoItem extends React.Component {
  constructor (props, context) {
    super(props, context)

    // 1. 使用 class constructor (類別建構子) 初始元件狀態
    this.state = {editable: false}
    // 7. 在 ES6 component class 中，你必須手動綁定 this
    this.toggleEditMode = this.toggleEditMode.bind(this)
  }

  toggleEditMode () {
    // 6. 更新元件狀態來切換模式
    this.setState({ editable: !this.state.editable })
  }
  // 當刪除按鈕被點選，觸發上層元件 (TodoList) 傳遞的 onDelete callback
  // if onDelete = true then call onDelete()
  renderViewMode () {
    const {title, completed, onDelete, onToggle} = this.props
    return (<div>
      <input type='checkbox' checked={completed} onChange={() => onToggle && onToggle(!completed)} />
      <span onDoubleClick={this.toggleEditMode}>{title}</span>
      <button onClick={() => onDelete && onDelete()}>刪除</button>
    </div>)
  }

  renderEditMode () {
    const { title, onUpdate } = this.props
     // 4. 「編輯模式」使用 InputField 元件
    return (
      <InputField autoFocus // 5. autoFocus 讓使用者切換到編輯模式後，可以立即編打
        placeholder='編輯待辦事項'
        value={title}
        onBlur={this.toggleEditMode} // 8. 當使用者點擊其他地方，則切換為「瀏覽模式」
        onKeyDown={e => {
          if (e.keyCode === 27) { // 按下Esc
            e.preventDefault()
            this.toggleEditMode()
          }
        }}
          // 2. 傳遞 onSubmitEditing callback，該 callback 做兩件事情：
          //    a. 呼叫上層元件的 onUpdate callback
          //    b. 切換為「預覽模式」
        onSubmitEditing={(content) => {
          onUpdate && onUpdate(content)
          this.toggleEditMode()
        }}
      />
    )
  }
  render () {
    // 2. 判斷目前模式為何，渲染不同的畫面
    return this.state.editable ? this.renderEditMode() : this.renderViewMode()
  }
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func,
  onToggle: PropTypes.func,
  onDelete: PropTypes.func
}

export default TodoItem
