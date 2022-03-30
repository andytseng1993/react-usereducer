
export default function TodoList(props){
    function handleToggle(){
        props.toggle()
    }
    function handleDelete(){
        props.delete()
    }
    return(
        <li style={{listStyle: 'none', color: props.todo.completed?'#AAA':'#000'}}>
            {props.todo.name}
            <button onClick={handleToggle}>Toggle</button>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}