import { useReducer } from "react"

const ACTIONS ={
    DEPOSIT:'deposit',
    WITHDRAW :'withdraw',
    RESET: 'reset'
}

// state = 500 initially defined
// action = {type: 'DEPOSIT',payload:amount}

const reducer =(state,action) => {
    switch(action.type){
        case ACTIONS.DEPOSIT:
            return {count:state.count +action.payload}
        case ACTIONS.WITHDRAW:
            return {count:state.count -action.payload}
        case ACTIONS.RESET:
            return {count:state.count = 500}
        default:
            return {count:state.count}
    }
}

export default function ComponentUseReducer(){
    const deposit = (amount) =>{
        dispatch({
            type: ACTIONS.DEPOSIT,
            payload:amount
        })
    }
    const withdraw = (amount)=>{
        dispatch({
            type: ACTIONS.WITHDRAW,
            payload: amount
        })
    }
    const reset =()=>{
        dispatch({
            type: ACTIONS.RESET,
            payload:null
        })
    }

    const [state,dispatch] = useReducer(reducer,{count: 500})

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>deposit(10)}>Deposit</button>
            <button onClick={()=>reset()}>Reset</button>
            <button onClick={()=>withdraw(10)}>Withdraw</button>
        </div>
    )
}