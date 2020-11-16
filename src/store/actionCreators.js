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

export const getCabin = cabin=>{
    return{
        type:actionTypes.SELECT_CABIN_TYPE,
        cabin
    }
}

export const addAdult = ()=>{
    return{
        type:actionTypes.ADD_ADULT
    }
}

export const addChild = ()=>{
    return{
        type:actionTypes.ADD_ChILD
    }
}

export const addInfant = ()=>{
    return{
        type:actionTypes.ADD_INFANT
    }
}