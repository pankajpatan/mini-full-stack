import { NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
const Header = (props) => {

  console.log(props,'header')
    return ( <>
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
      <span class="ml-3 text-xl">Blog</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap space-x-4 items-center text-base justify-center">
    <NavLink class="mr-5  black hover:text-gray-900" to='/'>Home</NavLink>
    <NavLink class="mr-5 hover:text-gray-900" to='/myblog'>MyBlog</NavLink>
    {props.auth==null?<NavLink class="mr-5 hover:text-gray-900" to='/login'>Log in</NavLink>:<NavLink class="mr-5 hover:text-gray-900" to='/logout'>LOG OUT</NavLink>}
      
     <NavLink class="mr-5 hover:text-gray-900" to='/signup'>signup</NavLink>
   
     
     
    </nav>
  </div>
</header>
    
    </> );
}
 const mapStateToProps=state=>{
   return {
    auth:state.authentication
   }
 }
export default connect(mapStateToProps,null) (Header);