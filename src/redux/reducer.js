const initialState = {
    count: 0,
    dollars: 0,
    name: 'Kenia',
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const CHANGE_NUM = 'CHANGE_NUM';
const DEPOSIT = 'DEPOSIT'

export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});
export const deposit = () => ({type: DEPOSIT})
export const changeNum = (newNum) => ({type: CHANGE_NUM, payload: newNum})

function reducer(state = initialState, action){
    switch(action.type){
        case INCREMENT: {
            return {
                ...state,
                count: state.count + 1,
            }
        }
        case DECREMENT: {
            return {
                ...state,
                count: state.count - 1,
            }
        }
        case CHANGE_NUM: {
            return {
                ...state,
                count: action.payload,
            }
        }
        case DEPOSIT: {
            return{
                ...state,
                dollars: state.dollars + 10,
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;