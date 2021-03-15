import {useState,useEffect} from 'react'
import  axios from 'axios'



const Singlepost = (props) => {
  const {id}=props.match.params
const [singleppost,setsinglepost]=useState([])
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/posts/${id}`).then(res=>res.data).
    then(data=>
      { setsinglepost(data)})
      .catch(err=>console.log(err))
 
 },[])


    return (   <div>
    
 
    
      <section class="text-gray-600 body-font">
     
      <div class="container px-5 py-24 mx-auto flex flex-col">
      <h1 class="text-5xl text-center mb-10">{singleppost.title}</h1>
        <div class="lg:w-4/6 mx-auto">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://source.unsplash.com/random"/> 
          </div>
    
            
            <div class="sm:w-3/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="leading-relaxed text-lg mb-4">{singleppost.body}</p>
             
            </div>
    
          </div>
        </div>
     
    </section>
    
    
    </div>);
}
 
export default Singlepost;