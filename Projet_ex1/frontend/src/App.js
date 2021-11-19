// @bekbrace
// FARMSTACK Tutorial - Sunday 13.06.2021
 
import React, { useState, useEffect} from 'react';
import './App.css';
import TodoView from './components/TodoListView';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/Form"


function App() {

  const [todoList, setTodoList] = useState([{}])
  /*const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const taskList = props.tasks.map(task => (
      <TodoView id={task.id}
                name={task.name}
                completed={task.completed}
                key={task.id}
      />
  ));*/
  
    

  // Read all todos
  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
      .then(res => {
        setTodoList(res.data)
      })
  });

  // Post a todo
  /*const addTodoHandler = () => {
    axios.post('http://localhost:8000/api/todo/', {'title': title, 'description': desc })
      .then(res => console.log(res))
};*/

  return (
    <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}} >
      <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">Task Manager</h1>
      <Form />
      <h5 className="text-center card text-white bg-dark mb-3">
      <div  aria-pressed="false">
          Your tasks
      </div>
      </h5>
      <div>
        <TodoView todoList={todoList}/>
      </div>
    </div>
  );
}

export default App;