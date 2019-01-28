const initialState= {
    currentValue: 0
}

//action types
const INCREMENT =  'INCREMENT';
const DECREMENT = 'DECREMENT';

//action creators
export const increment = (num) => {
    return{
        type: INCREMENT,
        payload: num
    }
} 

export const decrement = (num)=>{
    return{
        type: DECREMENT,  
        payload: num
    }
}

//export reducer
export default function reducer(state = initialState, action){
    switch(action.type){
        case INCREMENT :
        return {
            // ...state, dont need to spread because this example only has one value to track
            currentValue: state.currentValue + action.payload
        }
        case DECREMENT :
        return {
            currentValue: state.currentValue - action.payload
        }
        default:
        return state;
    }
}