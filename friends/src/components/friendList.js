import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { getFriends } from '../utils/reducers/actions/friendsActions'

function FriendList (props){
    useEffect(()=>{
        props.getFriends();
    }, [])
    return(
        <div>
            {props.friends.map(friend=>{
                return(
                    <div key={friend.id} className="card">
                        <h3>{friend.name}</h3>
                        <p>{friend.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

function mapStateToProps(state){
    return{
        friends: state.friends
    }
}
export default connect(mapStateToProps, { getFriends })(FriendList);