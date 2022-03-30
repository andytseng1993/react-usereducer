import { useState,useReducer } from "react"
import TodoList from "./TodoList"

export const ACTIONS ={
    ADD_TODO:'add_todo',
    TOGGLE_TODO:'toggle_todo',
    DELETE_TODO:'delete_todo'
}
const reducer =(todos,action)=>{
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...todos,newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
                if(todo.id === action.payload.id){
                    return {...todo, completed:!todo.completed }
                }
                return todo
        })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
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
            payload: {name:name}
        })
        setName('')
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={event => setName(event.target.value)} required='required'></input>
            
            </form>
            <ul style={{paddingLeft:'10px'}}>
            {todos.map((todo) => {
                return <TodoList  todo={todo} key={todo.id} dispatch={dispatch}></TodoList>
            })}
            </ul>  
        </>
     
    )}