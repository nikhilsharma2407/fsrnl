import { login } from "../services/apiRequest";

export interface IUserState {
    isLoggedIn:boolean;
    message:string;
}
// 1. Create an initial State
const initialState:IUserState = {
    isLoggedIn:false,
    message:''
};

interface IUserActions{
    type:string,
    payload?:any 
}

export enum UserActions{
    LOGIN="LOGIN",
    LOGOUT="LOGOUT",
    API_FAILURE= "API_FAILURE",
}
// ActionCreators => return action 

const loginActionCreator = (payload)=>({type:UserActions.LOGIN,payload})
// 2. create a reducer, which is the only thing that should interact with store
export const loginAction = (payload)=>{
    return async (dispatch)=>{
        const userData = await (await login(payload)).data;
        console.log(userData);
        if(userData.success){
            alert(userData.message);
            dispatch(loginActionCreator({isLoggedIn:true}));
        }else{
            dispatch(UserActions.API_FAILURE);
        }
        
    }
}
const userReducer = (state:IUserState=initialState,action:IUserActions)=>{
    switch (action.type){
        case UserActions.LOGIN:
            const {isLoggedIn} = action.payload;
            console.log("LOGIN REDUCER");
            
            return {...state,isLoggedIn}
        case UserActions.LOGOUT:
        case UserActions.API_FAILURE:
            return {...state,name:'',isLoggedIn:false};
        default:
            return state
    }

}

export default userReducer;