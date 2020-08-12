import React from 'react'
import Tasks from './Tasks'

export default function TaskList(props) {
    const {state} = props
    return(
        <div>
            {state.map((task, i)=> {
                return <Tasks key={i} task={task}/>
            })}
            
        </div>
    )
}