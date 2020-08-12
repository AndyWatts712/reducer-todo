import React, { useState, useReducer } from 'react'
import { initialState, reducer } from '../reducers/reducer'

export default function ToDoForm(props) {
    console.log('PROPS', props)
    const [form, setForm] = useState('')

    const handleChange = (e) => {
        setForm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       const newItem = {
           task: form,
           completed: false,
           id: new Date()
        }
        props.dispatch({ type: 'SUBMIT', payload: newItem })

    }

    return (
        <div>
            <form>
                <input
                    type='text'
                    name='item'
                    value={form}
                    onChange ={handleChange}
                ></input>
                <button onClick={handleSubmit}>Add Task</button>
                <button>Clear Completed</button>
            </form>
        </div>
    )
}