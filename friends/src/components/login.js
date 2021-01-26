import React, { useState } from "react";
import { useLogin } from "../utils/reducers/actions/friendsActions";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Login(props) {
  //setting state--------------------------
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const history = useHistory()

//-----------event handlers------------------
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  function submitHandle(e){
    e.preventDefault();
    props.useLogin(form)
        .then(res=>{
            window.localStorage.setItem('Token', res);
            history.push('/friendList')
        })
  }

  //---------------return form----------------------
  return (
    <form onSubmit={submitHandle}>
      <input
        name="username"
        placeholder="username"
        type="text"
        onChange={handleChange}
        value={form.username}
      />
      <input
        name="password"
        placeholder="password"
        type="text"
        onChange={handleChange}
        value={form.password}
      />
      <button>Go!</button>
    </form>
  );
}

//redux -------------------------------
const mapStateToProps=(state)=>{
    return{
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { useLogin })(Login);