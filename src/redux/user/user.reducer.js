const INITIAL_STATE = {
    currentUser:null
}

const useReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'add':
            return { ...state, new:'flan' }    
        default:
            return state;
    }
}

export default useReducer