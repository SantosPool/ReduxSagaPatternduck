import { createStructuredSelector } from 'reselect';
export const NAME = 'users';


//action types
const LIST_TRY = '[users]/LIST_TRY';
const LIST_SUCCES = '[users]/LIST_SUCCES';
const LIST_FAILED = '[users]/LIST_FAILED';

//initial state=
const initialState = {
    dataSource: [],
    isLoading: false
}


//Reducer
export default (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.LIST_TRY:
            return { ...state, isLoading: true }
        case actionTypes.LIST_SUCCES:
            return { ...state, isLoading: false, dataSource: action.data }
        case actionTypes.LIST_FAILED:
            return { ...state, isLoading: false }
        default:
            return state;
    }
}

function list() {
    return { type: LIST_TRY }
}


export const actionCreators = {
    list,
}


//---------------------------
export const actionTypes = {
    LIST_TRY,
    LIST_SUCCES,
    LIST_FAILED
}

//---------------------------


const users = (state) => state[NAME];

export const selector = createStructuredSelector({
    users,
})


