import {createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import todos from 'reducers/todos'
import thunk from 'redux-thunk'

// 啟用 Redux DevTools Extension

// 1. 將 reducers 集合物件轉換成一個 reducer 函數
const composedReducer = combineReducers({todos})

// 2. 使用 reducer 函數，建立 Store 實例，Store 會將改變狀態邏輯委託給 reducer 實作
const store = createStore(
    composedReducer,
    // 1. 將 middleware 依序傳遞進 applyMiddleware
    // 2. 將回傳的 enhancer 函數傳遞給 createStore
    // 要讓 Store 加入 Middlewares 擴充 dispatch 函數，我們必須使用 applyMiddleware
    composeWithDevTools(applyMiddleware(thunk))
)

export default store
