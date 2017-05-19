import React from 'react'

class InputField extends React.Component {
  constructor (props, context) {
    super(props, context)
    // 1. 讓上層元件傳遞的 value，初始元件狀態
    this.state = {value: props.value || ''}
     // 2. 手動綁定 this 給 handleChange
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  // 3. handleChange 用來傾聽 input onChange 事件，將使用者輸入的資料更新到元件狀態中
  // 等同於handleChange: function (e)...
  handleChange (e) {
    this.setState({ value: e.target.value })
  }
  // 1. 傾聽使用者 keydown 事件：
  //    當使用者按下 enter (keyCode = 13) 後，
  //    呼叫上層傳遞的 onSubmitEditing callback，
  //    將資料傳遞給上層元件。
  // 資料都從元件狀態中取出，和呼叫 this.setState 更新狀態
  handleKeyDown (e) {
    const { onKeyDown, onSubmitEditing } = this.props
    const { value } = this.state
    switch (e.keyCode) {
      // 如果使用者沒有鍵入任何值（包括都是空白），則不會呼叫 callback
      case 13:
        if (value.trim()) {
          onSubmitEditing && onSubmitEditing(value)
        }
        this.setState({value: ''})
        break
    }
    // 如果上層元件傳遞 onKeyDown callback，我們必須觸發它
    onKeyDown && onKeyDown(e)
  }

  render () {
    const { autoFocus, onBlur, placeholder } = this.props
    return (<input autoFocus={autoFocus} onBlur={onBlur} placeholder={placeholder}
      type='text' value={this.state.value}
      onChange={this.handleChange}
      onKeyDown={this.handleKeyDown} />)
  }
}

InputField.PropTypes = {
  onSubmitEditng: React.PropTypes.func
}

export default InputField
