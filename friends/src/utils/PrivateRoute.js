import React from 'react'
import { useHistory } from 'react-router-dom';

function PrivateRoute ({component: Component}) {
    //set history -----------------
    const history = useHistory();

    //set token variable--------------
    let token = window.localStorage.getItem("Token")
    //If there isn't a token, route to login
    //else render the component from props
    if(token){
        return(
            <Component/>
        )
    }
    else{
        history.push('/')
    }
}
export default PrivateRoute