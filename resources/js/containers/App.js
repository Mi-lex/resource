import React from 'react'
import MainLayout from './MainLayot'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Content from '../components/Content'
import { Provider } from 'react-redux'
import store from '../redux/store/configureStore'

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainLayout/>
        <Content>
          <Switch>
            <Route exact path="/public">
              <Home/>	
            </Route>	
          </Switch>
        </Content>
      </Router>
    </Provider>
  )
}