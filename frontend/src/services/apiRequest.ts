import axios from "axios";

axios.defaults.withCredentials = true;

const api = (path:string):string =>("http://localhost:5000/user"+path);

interface Response{
    success:boolean;
    message:string;
}

enum ApiEndpoints{
    Signup = "/signup",
    Login = "/login",
    GenerateOtp = "/generateOTP",
    Reset = "/reset",
    Logout = "/logout"
}


export const signup=(data)=>{
    const url = api(ApiEndpoints.Signup);
    return axios.post(url,data);
};

export const login=(payload)=>{
    const url = api(ApiEndpoints.Login);
    return axios.post<Response>(url,payload);
};

export const loginWithCookie=()=>{
    const url = api(ApiEndpoints.Login);
    return axios.get<Response>(url);
};

export const logout=()=>{
    const url = api(ApiEndpoints.Logout);
    return axios.get<Response>(url);
};


