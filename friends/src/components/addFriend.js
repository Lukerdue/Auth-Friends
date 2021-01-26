import React, { useState } from "react";
import { connect } from 'react-redux';
import { addFriend } from '../utils/reducers/actions/friendsActions'

const initState = {
    name: "",
    email: "",
    id: null
}
function AddFriend(props) {
  const [newFriend, setNewFriend] = useState(initState);
  const [hidden, setHidden] = useState(true)

  function handleChange(e) {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  }

  function handleAdding(e){
    e.preventDefault();
    setHidden(!hidden)
  }

  function handleSubmit(e){
      e.preventDefault();
    props.addFriend({...newFriend, id: Date.now()});
    setNewFriend(initState);
    setHidden(true)
  }

  return (
    <div>
      <button onClick={handleAdding}>Add New Friend</button>
      <form onSubmit={handleSubmit} className={`add ${hidden? " hidden": ""}`}>
        <input
          name="name"
          type="text"
          placeholder="Jane Doe"
          onChange={handleChange}
          value={newFriend.name}
        />
        <input
          name="email"
          type="text"
          placeholder="jane@friends.com"
          onChange={handleChange}
          value={newFriend.email}
        />
        <button>Add!</button>
      </form>
    </div>
  );
}
function mapStateToProps(state){
    return {}
}
export default connect(mapStateToProps, { addFriend })(AddFriend);