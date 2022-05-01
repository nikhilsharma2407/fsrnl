import axios, { AxiosRequestConfig } from "axios";

const api = (path:string):string =>("http://localhost:5000/user"+path);

interface Response{
    success:boolean;
    message:string;
    data?:any
}

enum ApiEndpoints{
    Signup = "/signup",
    Login = "/login",
    GenerateOtp = "/generateOTP",
    Reset = "/reset",
    Logout = "/logout",
    AddFriend = "/addFriend",
    RemoveFriend = "/removeFriend"
}

const axiosConfig:AxiosRequestConfig  = {
    withCredentials:true
}

export const signup=(data)=>{
    const url = api(ApiEndpoints.Signup);
    return axios.post(url,data,axiosConfig);
};

export const login=(payload)=>{
    const url = api(ApiEndpoints.Login);
    return axios.post<Response>(url,payload,axiosConfig);
};

export const loginWithCookie=()=>{
    const url = api(ApiEndpoints.Login);
    return axios.get<Response>(url,axiosConfig);
};

export const logout=()=>{
    const url = api(ApiEndpoints.Logout);
    return axios.get<Response>(url,axiosConfig);
};

export const addFriend = (payload)=>{
    const url = api(ApiEndpoints.AddFriend);
    return axios.post<Response>(url,payload,axiosConfig);
}
