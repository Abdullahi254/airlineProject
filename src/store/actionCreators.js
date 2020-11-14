import * as actionTypes from './actions'

export const getFrom = (from)=>{
    return{
        type:actionTypes.SELECT_AIRPOT_FROM,
        from
    }
}

export const getTo = (to)=>{
    return{
        type:actionTypes.SELECT_AIRPOT_TO,
        to
    }
}