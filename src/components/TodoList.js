import { ACTIONS } from "./Todos"
export default function TodoList(props){
    
    return(
        <li style={{listStyle: 'none', color: props.todo.completed?'#AAA':'#000'}}>
            {props.todo.name}
            <button onClick={()=>props.dispatch({type: ACTIONS.TOGGLE_TODO,payload:{id: props.todo.id}})}>Toggle</button>
            <button onClick={()=>props.dispatch({type: ACTIONS.DELETE_TODO,payload:{id: props.todo.id}})}>Delete</button>
        </li>
    )
}