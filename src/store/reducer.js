import * as actionTypes from './actions'

const initialState = {
    from:'',
    to: ''
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.SELECT_AIRPOT_FROM:
            state = {
                ...state,
                from:action.from
            }
            return state;
        case actionTypes.SELECT_AIRPOT_TO:
            state = {
                ...state,
                to:action.to
            }
            return state
        default:
            return state
    }
};

export default reducer;