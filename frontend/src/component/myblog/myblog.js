import axios from 'axios'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Myblog = (props) => {
    const [posts,setposts]=useState([])
    useEffect(()=>{
       if(props.auth.tokenid===null){
           props.history.push('/login')
       }
        else{
           axios.get('http://127.0.0.1:8000/userpost/',{
                headers: {
                    authorization: `Token ${props.auth.tokenid}`
                  }
            }).then(res=>res.data).
            then(data=>{ setposts(data)}).catch(err=>console.log(err))
        }
       
     },[posts])
     
 
     const handleDelete=(id)=>{
         axios.delete(`http://127.0.0.1:8000/posts/${id}`,{
            headers: {
                authorization: `Token ${props.auth.tokenid}`
              }
         }).then(res=>console.log(res)).
         catch(err=>console.log(err))

         
     }

console.log(props.auth,'token')
    return (<> <div>
        <div class=" flex justify-end space-x-5 mr-5 ">
       {posts ?  <h2 class=" " >Write YOUR Post Here!</h2>:<h2 class=" " >Write YOUR First Blog Here!</h2>}
        <Link to='/post'  class="bg-black px-3 rounded text-white " >Post</Link>
        
        </div>
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap flex-row -m-4">

                   { posts.map(item=>{
                       return  <div class="p-4 md:w-1/3">

                       <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                           <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://source.unsplash.com/random" alt="blog" />
                           <div class="p-6">
                               <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                               <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{item.title}</h1>
                               <p class="leading-relaxed mb-3">{item.summary}</p>
                               <div class="flex items-center flex-wrap ">

                                   <Link class=" text-blue-600 inline-flex items-center md:mb-2 lg:mb-0 mr-3 " to={`home/${item.id}`}>Learn More</Link>
                                   <Link to={`/put/${item.id}`}  class="bg-black px-3 rounded text-white " >Edit</Link>
                                   <button onClick={()=>handleDelete(item.id)} class="bg-black px-3 rounded text-white ml-1 " >DELETE</button>

                               </div>
                           </div>
                       </div>
                   </div>
                   })}



                </div>
            </div>
        </section>

    </div>

    </>

    );
}

const mapStateToProps=state=>{
    return {
        auth:state.authentication
    }
}

export default connect(mapStateToProps,null)(Myblog);