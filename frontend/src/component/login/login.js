import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const Login = (props) => {

const handlesubmit=e=>{
    e.preventDefault()
    Credential ={
        username : e.target['email'].value,
        password : e.target['password'].value
    }
    axios.post('http://127.0.0.1:8000/auth/',Credential).then(
        res=>{
           props.authsuccess(res.data)
            props.history.push('/myblog')
        }
    )
}
       
    return (<> <form onSubmit={handlesubmit} >

<body class="bg-grey-lighter h-screen font-sans">
    <div class="container mx-auto h-full flex justify-center items-center">
        <div class="w-1/3">
            <h1 class="font-hairline mb-6 text-center">Login to our Website</h1>
            <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                <div class="mb-4">
                    <label class="font-bold text-grey-darker block mb-2">Username or Email</label>
                    <input type="text" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Username" name="email"/>
                </div>

                <div class="mb-4">
                    <label class="font-bold text-grey-darker block mb-2">Password</label>
                    <input type="text" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Password" name="password"/>
                </div>

                <div class="flex items-center justify-between">
                    <button type='submit'  class="bg-teal-dark hover:bg-teal text-white font-bold py-2 px-4 rounded" style={{backgroundColor:'black',color:'white'}}>
                        Login
                    </button>
                 
                </div>
                
            </div>
            <div class="text-center">
                <p class="text-grey-dark text-sm">Don't have an account? <Link to='/signup' class="no-underline text-blue font-bold">Create an Account</Link></p>
            </div>
        </div>
    </div>
</body>
</form>

    </>  );
}

const mapStateToProps=state=>{
    return {
        state
    }
}
const mapDispatchToProps=dispatch=>{
   return {
    authsuccess:auth=>dispatch({type:'AUTH_SUCCESS',payload:auth})
   }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Login);