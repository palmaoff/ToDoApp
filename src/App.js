import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TasksListContainter from './components/TasksList/TasksListContainer'
import NewTaskContainer from './components/NewTask/NewTaskContainer'
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {

  let state = props.store.getState()

  return (
    <div>
      <HeaderContainer store={props.store} />
      {state.tasks.showNewTask ? <NewTaskContainer store={props.store} /> : null}
      <TasksListContainter store={props.store} />
    </div>
  )
}

export default App;
