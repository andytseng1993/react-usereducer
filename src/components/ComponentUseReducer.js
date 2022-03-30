import { useReducer } from "react"

// state = 500 initially defined
// action = {type: 'DEPOSIT',payload:amount}

const reducer =(state,action) => {
    switch(action.type){
        case 'DEPOSIT':
            return state +action.payload
        case 'WITHDRAW':
            return state -action.payload
        default:
            return state
    }
}

export default function ComponentUseReducer(){
    const deposit = (amount) =>{
        dispatch({
            type: 'DEPOSIT',
            payload:amount
        })
    }
    const withdraw = (amount)=>{
        dispatch({
            type: 'WITHDRAW',
            payload: amount
        })
    }

    const [amount,dispatch] = useReducer(reducer,500)

    return (
        <div>
            <h1>{amount}</h1>
            <button onClick={()=>deposit(10)}>Deposit</button>
            <button onClick={()=>withdraw(10)}>Withdraw</button>
        </div>
    )
}