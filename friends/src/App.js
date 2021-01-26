import { Route, Switch } from 'react-router-dom'
import Login from './components/login'
import PrivateRoute from './utils/PrivateRoute'
import FriendList from './components/friendList'
import { connect } from 'react-redux'

function App(props) {
  return (
    <div className={`App ${props.isLoading ? "loading" : ""}`}>
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
    error: state.error,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps)(App);
