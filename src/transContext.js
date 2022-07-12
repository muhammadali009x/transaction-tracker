import React, { createContext, useReducer } from 'react'
import TransactionReducer from './transReducer'

const intitialTransactions = [

]

export const TransactionContext = createContext(intitialTransactions);

export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, intitialTransactions);

    function addTransaction(transObj) {
        let ind = 0;

        // try {
        //     for (ind = 0; ind < state.length; ind++) {
        //         if (state[ind].desc === transObj.desc) {
        //             console.log(transObj.amount)
        //             state[ind].amount = Number(state[ind].amount) + Number(transObj.amount);
        //             console.log(state[ind].amount)

        //             dispatch({
        //                 type: "ADD_TRANSACTION",
        //                 payload: {
        //                     amount: state[ind].amount,
        //                     desc: state[ind].desc
        //                 },
        //             })
        //         }
        //         return
        //     }

        // }
        // catch {
        //     console.log("state[ind+1]")
        // }

        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            },
        })
    }
    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,
            
        }}>
            {children}
        </TransactionContext.Provider>
    )
}

