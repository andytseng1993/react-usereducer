import { useState,useReducer } from "react"


export default function Todos(){
    const [todos,dispatch]=useReducer([])
    const [name ,setName ]=useState('')

    return (
    <div>
        <input type='text' value={name} onChange={event => setName(event.target.value)}></input>
    </div>)
}