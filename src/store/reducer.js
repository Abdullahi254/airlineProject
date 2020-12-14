import * as actionTypes from './actions'

const initialState = {
    from:'',
    to: '',
    cabin:'',
    adult:1,
    children:0,
    infant:0,
    outBound:undefined,
    round:undefined,
    spinner:false
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
        case actionTypes.SELECT_CABIN_TYPE:
            state = {
                ...state,
                cabin:action.cabin
            }
            return state
        case actionTypes.ADD_ADULT:
            state = {
                ...state,
                adult:state.adult +=1
            }
            return state
        case actionTypes.ADD_ChILD:
            state = {
                ...state,
                children:state.children +=1
            }
            return state
        case actionTypes.ADD_INFANT:
            state = {
                ...state,
                infant:state.infant +=1
            }
            return state
            case actionTypes.REMOVE_ADULT:
                state = {
                    ...state,
                    adult:state.adult -=1
                }
                return state
            case actionTypes.REMOVE_ChILD:
                state = {
                    ...state,
                    children:state.children -=1
                }
                return state
            case actionTypes.REMOVE_INFANT:
                state = {
                    ...state,
                    infant:state.infant -=1
                }
                return state
            case actionTypes.GET_OUTBOUND:
                state = {
                    ...state,
                    outBound:action.date
                }
                return state
            case actionTypes.GET_RETURN:
                state = {
                    ...state,
                    return:action.date
                }
                return state
            case actionTypes.TOOGLE_SPINNER:
                state = {
                    ...state,
                    spinner:!state.spinner
                }
                return state
            case actionTypes.TURN_OFF_SPINNER:
                state = {
                    ...state,
                    spinner:false
                }
                return state
             case actionTypes.TURN_ON_SPINNER:
                state = {
                    ...state,
                    spinner:true
                }
                return state
        default:
            return state
    }
};

export default reducer;