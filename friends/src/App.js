import { Route, Switch } from 'react-router-dom'
import Login from './components/login'
import PrivateRoute from './utils/PrivateRoute'
import FriendList from './components/friendList'
import { connect } from 'react-redux'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <p>{props.error}</p>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/friendList">
          <PrivateRoute component={FriendList}/>
        </Route>
      </Switch>
    </div>
  );
}
function mapStateToProps(state){
  return{
    error: state.error
  }
}

export default connect(mapStateToProps)(App);
