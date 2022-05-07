import { addFriend, login, loginWithCookie, logout, removeFriend } from "../services/apiRequest";

export interface IUserState {
    isLoggedIn:boolean;
    message:string;
    username:string;
    name:string;
    friendList:string[]
}
// 1. Create an initial State
const initialState:IUserState = {
    isLoggedIn:false,
    username:'',
    name:'',
    friendList:[],
    message:''
};

interface IUserActions{
    type:string,
    payload?:any 
}

export enum UserActions{
    LOGIN="LOGIN",
    LOGOUT="LOGOUT",
    ADD_FRIEND="ADD_FRIEND",
    REMOVE_FRIEND="REMOVE_FRIEND",
    API_FAILURE= "API_FAILURE",
}
// ActionCreators => return action 

const loginActionCreator = (payload)=>({type:UserActions.LOGIN,payload})

const logoutActionCreator = ()=>({type:UserActions.LOGOUT});

const addFriendActionCreator = (payload)=>({type:UserActions.ADD_FRIEND,payload});
const removeFriendActionCreator = (payload)=>({type:UserActions.REMOVE_FRIEND,payload});

// 2. create a reducer, which is the only thing that should interact with store
export const logoutAction = ()=>{
    return async (dispatch)=>{
        const userData = await (await logout()).data;
        console.log(userData);
        if(userData.success){
            alert(userData.message);
            dispatch(logoutActionCreator());
        }else{
            dispatch(UserActions.API_FAILURE);
        }
        
    }
}
export const loginAction = (payload)=>{
    return async (dispatch)=>{
        const userData = await (await login(payload)).data;
        console.log(userData);
        if(userData.success){
            alert(userData.message);
            dispatch(loginActionCreator({...userData.data,isLoggedIn:true}));
        }else{
            dispatch(UserActions.API_FAILURE);
        }
        
    }
}
export const loginCookieAction = ()=>{
    return async (dispatch)=>{
        const userData = await (await loginWithCookie()).data;
        console.log(userData);
        if(userData.success){
            alert(userData.message);
            dispatch(loginActionCreator({...userData.data,isLoggedIn:true}));
        }else{
            dispatch(UserActions.API_FAILURE);
        }
        
    }
}

export const addFriendAction = (payload)=>{
    return async (dispatch)=>{
        const data = await (await addFriend(payload)).data;
        console.log(data);
        if(data.success){
            alert(data.message);
            const {id} = payload;
            dispatch(addFriendActionCreator(id))
        }
    }
}
export const removeFriendAction = (payload)=>{
    return async (dispatch)=>{
        const response = await (await removeFriend(payload)).data;
        console.log(response);
        if(response.success){
            const {message,data:friendList} = response
            alert(response.message);
            console.log(friendList);
            
            dispatch(removeFriendActionCreator({...payload,friendList}))
        }
    }
}

const userReducer = (state:IUserState=initialState,action:IUserActions)=>{
    switch (action.type){
        case UserActions.LOGIN:
            var {payload} = action;
            console.log("LOGIN REDUCER");
            
            return {...state,...payload}
        case UserActions.LOGOUT:
        case UserActions.API_FAILURE:
            return initialState;
        case UserActions.ADD_FRIEND:
            var {payload} = action;
            console.log({...state,friendList:[...state.friendList,payload]});
            return {...state,friendList:[...state.friendList,payload]}
        case UserActions.REMOVE_FRIEND:
            var {payload} = action;
            const {friendList=null,message} = payload
            console.log({...state,friendList,message});
            return {...state,friendList,message}
        default:
            return state
    }

}

export default userReducer;