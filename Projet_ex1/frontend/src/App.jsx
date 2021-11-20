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

  // Read all todos
  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
      .then(res => {
        setTodoList(res.data)
      })
  });

  return (
    <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}} >
      <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">Task Manager</h1>
      <Form />
      <h5 className="text-center card text-white bg-dark mb-3">
      <div aria-pressed="false">
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