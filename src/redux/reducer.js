const initialState = {
    count: 0,
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const CHANGE_NUM = 'CHANGE_NUM'

export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});
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
        default: {
            return state;
        }
    }
}

export default reducer;