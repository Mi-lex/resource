import React, { useState } from 'react'
import Aux from './HOC'
import MainLayout from './MainLayot'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Content from '../components/Content'

export default function App() {
  const [isLayoutOpen, toggleAside] = useState(false);

  const toggleAction = () => {
      toggleAside(!isLayoutOpen)
  } 

  return (
    <Aux>
      <Router>
        <MainLayout isLayoutOpen={isLayoutOpen} toggleAction={toggleAction}/>
        <Content isLayoutOpen={isLayoutOpen}>
          <Switch>
            <Route exact path="/public">
              <Home/>	
            </Route>	
          </Switch>
        </Content>
      </Router>
    </Aux>
  )
}