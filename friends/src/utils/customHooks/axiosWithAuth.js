import axios from 'axios';

export const axiosWithAuth = ()=>{
    const token = window.localStorage.getItem('Token');

    return axios.create({
        headers: {
            Authorization: token
        }
    });
}
