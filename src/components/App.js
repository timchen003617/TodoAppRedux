import React from 'react'
import {Provider} from 'react-redux'
import store from 'stores/store'
import createHistory from 'history/createHashHistory'
import TodoApp from 'components/TodoApp'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Container from 'components/Container'
import AboutContainer from 'containers/AboutContainer'
import NavbarContainer from 'containers/NavbarContainer'

const history = createHistory()
const routes = props => (
  <Provider store={store}>
    <Router history={history}>
      <Container _width='1024px'>
        <NavbarContainer />
        <hr />
        <Route path='/' />
        <Route path='/about' component={AboutContainer} />
        <Route path='/todoApp' component={TodoApp} />
      </Container>
    </Router>
  </Provider>
)

export default routes
