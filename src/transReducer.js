const TransactionReducer = ((state, action) => {
    switch (action.type){
        case "ADD_TRANSACTION": {
            return [action.payload, ...state]
        }
        case "UPDATE_TRANSACTION": {
            return 
        }
        case "DELETE_TRANSACTION": {
            return 
        }
        default:
            return state
    }
})
export default TransactionReducer;