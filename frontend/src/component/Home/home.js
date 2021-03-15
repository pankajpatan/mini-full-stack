
import {useState,useEffect} from 'react'
import  axios from 'axios'
import {Link, link} from 'react-router-dom'

const Home = () => {
const [posts,setposts] = useState([])

 useEffect(()=>{
   axios.get('http://127.0.0.1:8000/posts/').then(res=>res.data).
   then(data=>{ setposts(data)}).catch(err=>console.log(err))

},[])
// console.log(posts,'posts')
    return ( 
      
     <div>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
  <div class="flex flex-row -m-4 flex-wrap">
  {posts.map(item=>{
    return  <div class="p-4  w-1/3">
    
    
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://source.unsplash.com/random" alt="blog"/>
        <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{item.title}</h1>
  <p class="leading-relaxed mb-3">{item.summary}</p>
          <div class="flex items-center flex-wrap ">

            <Link class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" to={`home/${item.id}`}>Learn More</Link>
          
            </div>
        </div>
      </div>
    </div>


  })}
      </div>
      </div>
      </section>

     </div>
           

     
);
}
 
export default Home;