import axios from 'axios';
import { axiosWithAuth } from '../../customHooks/axiosWithAuth'
const baseUrl= 'http://localhost:5000'

export const useLogin=(user) => dispatch=>{
    dispatch({ type: "API_START" });
    return axios.post(`${baseUrl}/api/login`, user)
        .then(res=>{
            dispatch({type: "API_GOOD"})
            console.log(res)
            return res.data.payload
        })
        .catch(res=>{
            console.log(res)
            dispatch({ type: "API_BAD", payload: res})
        })
}

export const getFriends=()=>dispatch=>{
    dispatch({ type: "API_START"});
    axiosWithAuth().get(`${baseUrl}/api/friends`)
    .then(res=>{
        dispatch({ type: "API_GOOD"})
        dispatch({ type: "SET_FRIENDS", payload: res.data})
    })
    .catch(drama=>{
        dispatch({ type:"API_BAD", payload: drama})
    })
    
}

export const addFriend=(friend)=>dispatch=>{
    dispatch({ type: "API_START"});
    axiosWithAuth().post(`${baseUrl}/api/friends`, friend)
    .then(res=>{
        dispatch({ type: "API_GOOD"})
        dispatch({ type: "SET_FRIENDS", payload: res.data})
    })
    .catch(drama=>{
        dispatch({ type: "API_BAD", payload: drama})
    })
}