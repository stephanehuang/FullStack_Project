// @bekbrace
// FARMSTACK Tutorial - Sunday 13.06.2021
import axios from 'axios'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoItem(props) {
    const deleteTodoHandler = (title) => {
    axios.delete(`http://localhost:8000/api/todo/${title}`)
        .then(res => console.log(res.data)) }
  
    return (
        <div>
            <p>
                <span style={{ fontWeight: 'bold, underline' }}>Task: {props.todo.title}</span> <br/>
                <span style={{ fontWeight: 'bold, underline' }}>Description: {props.todo.description}</span>
                <button onClick={() => deleteTodoHandler(props.todo.title)} className="btn btn-danger" >X</button>
                <hr></hr>
            </p>
        </div>
    )
}

export default TodoItem;