import React from 'react'

export default function Tasks(props) {
    console.log(props.task)
    return (
        <div>
            <p>{props.task.task}</p>
        </div>

    )
}