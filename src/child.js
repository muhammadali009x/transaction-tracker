import React, { useContext, useState } from 'react';
import { TransactionContext } from './transContext'
let duplicate_checker = true;
function Child() {
    let { transactions, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);
    let [tempArr, settempArr] = useState([]);

    const handleAddition = (event) => {

        event.preventDefault();
        // for (ind = 0; ind < transactions.length; ind++) {
        //     if (transactions[ind].desc === newDesc) {
        //         transactions[ind].amount += Number(newAmount)

        //         console.log(transactions[ind].amount);
        //         duplicate_checker = false

        //     }

        //     return transactions[ind].amount;
        // }
        if (duplicate_checker == true)
            addTransaction({
                amount: Number(newAmount),
                desc: newDesc
            })
    }
    const getIncome = () => {
        let income = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0) {
                income += transactions[i].amount;
            }
        }
        return income
    }
    const getExpence = () => {
        let expence = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0) {
                expence += transactions[i].amount;
            }
        }
        return expence;
    }
    const delete_anList = (key) => {
    //     tempArr[key] = null
    //    for(let i=0; i<tempArr.length; i++) {
    //         console.log(i)
    //         let arr = []
    //         if (tempArr[i] !== null) {
    //             arr.push(tempArr[i])
    //         }
    //         settempArr(arr)
    //         console.log(arr)
    //     }
    //     console.log(tempArr)

    }
    return (
        <div className="main-container">
            <h1 className="main-header-text">Expence Tracker</h1>
            <h3>Your Balance <br />${getIncome() + getExpence()}</h3>

            <div className="expence-container">
                <h3>INCOME <br />${getIncome()}</h3>
                <h3>EXPENCE <br />${getExpence()}</h3>
            </div>

            <div className="history-container">
                <h3>History</h3>
                <hr /><br />
                <ul className="history-list">
                    {transactions.map((transObj, ind) => {
                        return (
                            <div className="dvLists" key={ind}>
                                <div className="dvdvLists">
                                    <li>
                                        <span>{transObj.desc} </span>
                                        <span>{transObj.amount}</span>
                                    </li>
                                </div>
                                {/* <button className="btnDelete" key={ind} onClick={() => delete_anList(ind)}>x</button> */}
                            </div>
                        );
                        // if (duplicate_checker === false) {
                        //     console.log(transactions[ind].desc)
                        //     return(
                        //         <li key={ind}>
                        //             <span>{transactions[ind].desc} </span>
                        //             <span>{transactions[ind].amount}</span>
                        //         </li>
                        //     )
                        // }
                    })}
                </ul>
            </div>

            <div className="transaction-form">
                <h3>Add New Transaction</h3>
                <hr />
                <form onSubmit={handleAddition}>
                    <label>
                        Enter Description:
                        <input type="text" value={newDesc} placeholder="Enter Description ..." onChange={(ev) => setDesc(ev.target.value)} required />
                    </label>
                    <br />
                    <label>
                        Enter Amount:
                        <input type="number" value={newAmount} placeholder="Enter Amount like (e.g: 1234...)" onChange={(ev) => {
                            setAmount(ev.target.value);
                            }} required />
                    </label>
                    <br />
                    <input type="submit" value="Add Transaction" />
                </form>
            </div>

        </div>
    );
}
export default Child;
