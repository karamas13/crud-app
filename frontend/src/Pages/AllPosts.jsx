import PostList from "../Components/PostList";
import { useState, useEffect } from "react";
import axios from 'axios';

const AllPosts = () => {
    const[posts, setPosts] = useState([])

    useEffect(()=>{
      axios.get("http://localhost:3001/allposts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err))
        
   },[])
    
    return ( 
      <div style={{height:'100%',minHeight:'100vh' }}>
       <PostList posts={posts} />
       </div>
     );
}
 
export default AllPosts;