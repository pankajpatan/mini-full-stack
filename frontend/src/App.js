
import './App.css';
import Header from './component/header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './component/Home/home'
import Login from './component/login/login'
import Signup from './component/signup/signup'
import Singlepost from './component/singlePost/singlePost'
import {connect} from 'react-redux'
import Myblog from './component/myblog/myblog'
import {useEffect} from 'react'
import Logout from './component/logout/logout'
import Put from './component/put/put'
import Post from './component/post'
function App(props) {

  useEffect(()=>{
    props.authinit()
  },[])
  

  return (
  <div>
    <BrowserRouter>
    <Header/>
    <Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/login" component={Login}/>
  <Route path="/signup" component={Signup}/>
  <Route path="/home/:id" component={Singlepost}/>
   <Route path="/myblog" component={Myblog} />
   <Route path="/logout" component={Logout} />
   <Route path="/put/:id" component={Put} />
   <Route path='/post' component={Post}/>

    </Switch>
    
      </BrowserRouter>
  
  </div>

  );
}

const mapStateToProps=state=>{
  return {
      state
  }
}
const mapDispatchToProps=dispatch=>{
 return {
  authinit:()=>dispatch({type:'AUTH_INIT'})
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
