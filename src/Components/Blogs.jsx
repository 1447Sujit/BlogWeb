import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spiner from "./Spiner";


const Blogs = () => {
  //Consumeing
 
  const { posts, loading } =  useContext(AppContext);
  

  return (
    <div className="blogs">
      {
       loading  ? 
      ( <Spiner></Spiner> )  :
      (
        posts.length === 0 ?
        ( <div>
          <p>No Post Found</p>
        </div>):
        (posts.map( (post) => (
          <div key={post.id}>
            <p className="title">{post.title}</p>
            <p className="author">By <span className="authorname">{post.author}</span> on <span className="authorcategory">{post.category}</span> </p>
            <p className="date">Posted on {post.date}</p>
            <p className="content">{post.content}</p>
            <div className="tags">
              {post.tags.map( (tag , index)=>{
                return <span key={index} className="tag">{`#${tag}`}</span>
              })}
            </div>
          </div>
        )))
      )
       }
    </div>
  );
};

export default Blogs;
