import {connect} from 'react-redux'
import {useEffect} from 'react'
import {Redirect, redirect} from 'react-router-dom'
const Logout = (props) => {
    useEffect(()=>{
        props.logout()
    },[])

    return ( <>
    <Redirect to='/login'/>
    </> );
}
 const mapDispatchToProps=dispatch=>{
    return {
        logout : ()=> dispatch({type:"LOG_OUT"})
    }
 }
export default connect(null,mapDispatchToProps) (Logout);