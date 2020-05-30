import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import TasksListContainter from './components/TasksList/TasksListContainer'
import NewTaskContainer from './components/NewTask/NewTaskContainer'

const App = (props) => {
  return (
    <div>
      <Header />
      <NewTaskContainer store={props.store} />
      <TasksListContainter store={props.store} />
    </div>
  )
}

export default App;
