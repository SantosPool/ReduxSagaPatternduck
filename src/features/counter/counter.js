import {createStructuredSelector} from 'reselect';
export const NAME='counter';


//action types
const INCREMENT='[counter]/INCREMENT';
const DECREMENT='[counter]/DECREMENT';

//initial state=
const initialState={
    value:10,
    isCounterLoading:false
}


//Reducer
export default (state= initialState, action={})=>{
    switch(action.type){
        case actionTypes.INCREMENT:
            return{...state,value: ++state.value}
        case actionTypes.DECREMENT:
        return{...state, value: --state.value}
        default:
            return state;
    }
}

function increment(){
    return {type: INCREMENT}
}

function decrement(){
    return {type: DECREMENT}
}

export const actionCreators={
    increment,
    decrement
}


//---------------------------
export const actionTypes={
    INCREMENT,
    DECREMENT
}

//---------------------------


const counter=(state)=>state[NAME];

export const selector= createStructuredSelector({
    counter,
})


