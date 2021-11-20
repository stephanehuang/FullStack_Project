import React, {useState} from "react";
import axios from "axios";
import { Router, Route, Link } from 'react-router-dom'

function Form(props) {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [checked, setChecked] = useState('')

    const addTodoHandler = () => {
    axios.post('http://localhost:8000/api/todo/', {'title': title, 'description': desc })
      .then(res => console.log(res))
};

    return (
        <form className="card-body">
            <span className="card-text">
                <input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder='Title'/>
                <input className="mb-2 form-control desIn" onChange={event => setDesc(event.target.value)}   placeholder='Description'/>
                <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}}  onClick={addTodoHandler}>
                    Add Task
                </button>
            </span>
        </form>
    )
}

export default Form;