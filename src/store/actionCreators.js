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
export const addPerson = person=>{
    switch(person){
        case 'adult':
            return {
                type: actionTypes.ADD_ADULT
            }
        case 'children':
            return {
                type: actionTypes.ADD_ChILD
            }
        case 'infant':
            return {
                type: actionTypes.ADD_INFANT
            }
        default:
            return {
                type: actionTypes.ADD_ADULT
            }
    }
}

export const removePerson = person=>{
    switch(person){
        case 'adult':
            return {
                type: actionTypes.REMOVE_ADULT
            }
        case 'children':
            return {
                type: actionTypes.REMOVE_ChILD
            }
        case 'infant':
            return {
                type: actionTypes.REMOVE_INFANT
            }
        default:
            return {
                type: actionTypes.REMOVE_ADULT
            }
    }
}
