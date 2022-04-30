export interface IState{
    count:number,
    value:number
}
// 1. Create an initial State
const initialState:IState = {
    count:0,
    value:123
};

interface IActions{
    type:string,
    payload?:any    
}

export enum Actions{
    INCREMENT="INCREMENT",
    DECREMENT="DECREMENT"
}
// ActionCreators => return action 
export const incrementAction = (payload=1)=>{
    return {type:Actions.INCREMENT,payload}
}
export function incrementAsyncAction(payload) {
    return dispatch => {
      setTimeout(() => {
        // Yay! Can invoke sync or async actions with `dispatch`
        dispatch(incrementAction(payload))
      }, 1000)
    }
}
export const decrementAction = ()=>{
    return {type:Actions.DECREMENT}
}
// 2. create a reducer, which is the only thing that should interact with store

// {type:"INCREMENT"}
const countReducer = (state=initialState,action:IActions)=>{
    switch (action.type){
        case Actions.INCREMENT:
            console.log(action.payload);
            return {...state,count:state.count + action.payload}
        case Actions.DECREMENT:
            return {...state,count:state.count-1}
        default:
            return state
    }

}

export default countReducer;