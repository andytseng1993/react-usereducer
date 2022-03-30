import { useState,useReducer } from "react"
import TodoList from "./TodoList"

const ACTIONS ={
    ADD_TODO:'add_todo'
}
const reducer =(todos,action)=>{
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...todos,newTodo(action.payload)]
        default:
            return 
    }
}
function newTodo(name){
    return {id: Date.now(),name:name,completed:false}
}

export default function Todos(){
    const [todos,dispatch]=useReducer(reducer,[])
    const [name ,setName ]=useState('')
    console.log(todos);

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: name
        })
        setName('')
    }

    return (
    <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={event => setName(event.target.value)}></input>
        <ul style={{paddingLeft:'10px'}}>
           {todos.map((todo) => (
           <TodoList  todo={todo} key={todo.id}></TodoList>
           ))}
        </ul>
        
    </form>)
}