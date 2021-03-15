import axios from 'axios'
import {useState} from 'react'
import {connect} from 'react-redux'

const Post = (props) => {

    const {id}=props.match.params
  
    
    const [title,settitle] = useState()
    const [body,setbody] = useState()
    const [summary,setsummary]=useState()

        const data = {
            title:title,
            body:body,
            summary:summary
        }

      

     const handleSubmit=(id)=>{
        axios.post('http://127.0.0.1:8000/posts/',data                                               
    ,{
            headers: {
                authorization: `Token ${props.auth.tokenid}`
              }
        }).then(res=>console.log(res.data,'post data')).catch(err=>console.log(err,'err'))
        props.history.push('/myblog')
     }
        console.log(props.auth,'post')

    return (  <div>
         <section class="text-gray-600 body-font text-center">
             <div class="text-center space-x-12">
                 <span class=" text-black text-2xl text-base  " >Title</span>
                 <input type='text' placeholder="Enter Your Title"
                  class="inline-block border border-black w-1/2 text-center text-black" 
                  value={title}
                  onChange={(e)=>settitle(e.target.value)} />
             </div>
             <div class=" text-center space-x-10 mt-6 -ml-10 ">
             <span class=" text-black text-2xl text-base   " >summary</span>
            <textarea style={{height:"100px"}} placeholder="Enter Your Summary" name="summary" 
            class="inline-block h-4 border border-black text-center text-black w-1/2 block "

            value={summary}
            onChange={(e)=>setsummary(e.target.value)}
             ></textarea>
             </div>

             <div class=" text-center space-x-10 mt-6 ">
             <span class=" text-black text-2xl text-base   " >Body</span>
            <textarea style={{height:"500px"}} placeholder="Enter Your Description" name="body" 
            class="inline-block h-10 border border-black text-center text-black w-1/2 block "

            value={body}
            onChange={(e)=>setbody(e.target.value)}
             ></textarea>
             </div>
           
           <div class="text-center">
               <button class=" border border-black bg-black text-white rounded px-5 py-3 mt-5" 
               onClick={()=>handleSubmit()}
               >Submit</button>
           </div>
         </section>
    </div>);
}
 
const mapStateToProps=state=>{
    return {
        auth:state.authentication    
    }
}

export default connect(mapStateToProps,null)(Post);