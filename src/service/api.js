import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import axios from "axios";
import { API_NOTIFICATION_MESSAGES } from "../constants/config";
const API_URL = 'http://localhost:8000';


const axiosInstance = axios.create({
    baseURL:API_URL,
    timeout:10000, // 10 sec
    headers:{
        "content-type":"application/json"
    }
})

axiosInstance.interceptors.request.use(
    function (config){
        return config
    },
    function(error){
        return Promise.reject(error)
    }

)


axiosInstance.interceptors.response.use(

    function(response){
        return processResponse(response)
    },
    function(error){
        return Promise.reject(processError(error))
    }

)

// for success and error of response // 

const processResponse = (response) => {
    if(response?.status === 200){
        return {isSuccess:true,data:response.data}
    }
    else{
        return{
            isFailure:true,
            status:response?.status,
            msg:response?.msg,
            code:response?.code
        }

    }
}

const processError = (error) => {
    if(error.response){
        // if error comes with response ../ /
        console.log("ERROR IN RESPONSE",error.toJSON())
        return{
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.responseFailure,
            code:error.response.status
        }

    }
    else if(error.request){
        // request made but no response // 
        console.log("ERROR IN REQUEST",error.toJSON())
        return{
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.responseFailure,
            code:error.response.status
        }

    }
    else{
        // frontend error // 
        console.log("ERROR IN NETWORK",error.toJSON())
        return{
            
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.responseFailure,
            code:error.response.status
        }


    }
}
