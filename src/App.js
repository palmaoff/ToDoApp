import React from 'react'
import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import TasksListContainter from './components/Task/TasksListContainer'

const App = (props) => {
  return (
    <div>
      <Header />
      <TasksListContainter store={props.store} />
    </div>
  )
}

export default App;
