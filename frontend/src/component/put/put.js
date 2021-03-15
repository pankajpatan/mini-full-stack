import axios from 'axios'
import {useEffect,useState} from 'react'

import {connect}  from 'react-redux'
const Put = (props) => {

    const {id}=props.match.params
  
    
    const [title,settitle] = useState(props.post.title)
    const [body,setbody] = useState(props.post.body)
    const [user,setuser]= useState(props.post.owner)

        const data = {
            title:title,
            body:body,
            owner:user
        }

      useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/posts/${id}`,{
            headers: {
                authorization: `Token ${props.auth.tokenid}`
              }
        }).then(res=>res.data).
        then(data=>
           props.updateblog(data))
          .catch(err=>console.log(err))
     
     },[])

     const handleSubmit=(id)=>{
        axios.put(`http://127.0.0.1:8000/posts/${id}/`,data                                               
    ,{
            headers: {
                authorization: `Token ${props.auth.tokenid}`
              }
        }).then(res=>console.log(res.data,'put data')).catch(err=>console.log(err,'err'))
        props.history.push('/myblog')
     }

 console.log(props,'tokern')
// console.log(singleppost,'posts')
// console.log(post,'postwala')
    return (  <div>
         <section class="text-gray-600 body-font text-center">
             <div class="text-center space-x-12">
                 <span class=" text-black text-2xl text-base  " >Title</span>
                 <input type='text' placeholder="Enter Your Title"
                  class="inline-block border border-black w-1/2 text-center text-black" 
                  value={title}
                  onChange={(e)=>settitle(e.target.value)} />
             </div>
             <div class=" text-center space-x-10 mt-6 ">
             <span class=" text-black text-2xl text-base   " >Body</span>
            <textarea style={{height:"500px"}} placeholder="Enter Your Description" name="body" 
            class="inline-block h-10 border border-black text-center text-black w-1/2 block "

            value={body}
            onChange={(e)=>setbody(e.target.value)}
             ></textarea>
             </div>
             <div class=" space-x-20 -ml-80 ">
             <span class=" text-black text-2xl text-base inline-block   " >User</span>
             <select name="user" id="cars" class="inline-block px-20 mt-5 border border-black text-black " >
                 <option class="inline-block text-black " value={user}>{user}</option>
             </select>
             </div>
           <div class="text-center">
               <button class=" border border-black bg-black text-white rounded px-5 py-3 mt-5" 
               onClick={()=>handleSubmit(props.post.id)}
               >Submit</button>
           </div>
         </section>
    </div>);
}
 
const mapStateToProps=state=>{
    return {
        auth:state.authentication,
        post:state.post
        
    }
}
const  mapDispatchToProps=dispatch=>{
    return {
     updateblog:val=>dispatch({type:'UPDATE_BLOG',payload:val})
    }
 }
export default connect(mapStateToProps,mapDispatchToProps)(Put);