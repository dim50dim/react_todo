

import './App.css'
import FilterButton from './components/FilterButton';
import Form from './components/Form';
import Todo from './components/Todo'
  // const taskList = props.tasks?.map((task) => task.name);
function App(props) {
const taskList = props.tasks?.map((task) => (
  <Todo id={task.id}
   name={task.name}
    completed={task.completed}
    key={task.id} />
));

  return(
    <>
    
    
     <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
     <Form/>
     
      <div className="filters btn-group stack-exception">
       <FilterButton/>
       <FilterButton/>
       <FilterButton/>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
         {/* <Todo name='Eat' completed id='todo-0'/>
         <Todo name='Sleep' id="todo-1"/>
         <Todo name='Repeat' id='todo-2'/> */}
         {taskList}
      </ul>
    </div>
  
    </>
  )
}
  
export default App
