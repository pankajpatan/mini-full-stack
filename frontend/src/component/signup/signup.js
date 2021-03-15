import axios from 'axios'
import {Link} from 'react-router-dom'

const Signup = (props) => {


    const handlesubmit=e=>{
        e.preventDefault()
        Credential ={
            username : e.target['email'].value,
            password : e.target['password'].value
        }
        axios.post('http://127.0.0.1:8000/users/',Credential).then(
            res=>{
                console.log(res,'response')
            }
        ).catch(err=>console.log(err))
        axios.post('http://127.0.0.1:8000/auth/',Credential).then(
            res=>{
               props.authsuccess(res.data)
              
            }
        )
        props.history.push('/')
    }



    return (  <>
    <form onSubmit={handlesubmit}>
 
<div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                        <span class="text-red-500">password must be more than 8 charactors</span>
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1" 
                        style={{backgroundColor:'black',color:'white'}}
                    >Create Account</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <Link no-underline border-b border-blue text-blue to='/login'>Log in</Link>
                    {/* <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>. */}
                </div>
            </div>
        </div>
        </form>
    </>);
}
 
export default Signup;