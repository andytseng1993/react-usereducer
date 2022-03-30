
export default function TodoList({todo}){
    function handlerToggle(){

    }
    function handlerDelete(){
        
    }
    return(
        <li style={{listStyle: 'none', color: todo.completed?'#AAA':'#000'}}>
            {todo.name}
            <button onClick={handlerToggle}>Toggle</button>
            <button onClick={handlerDelete}>Delete</button>
        </li>
    )
}