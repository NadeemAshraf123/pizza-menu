import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Routers.css'


const BlogDetails = () => {

  const { id } = useParams();
  const[blog, setBlog] = useState(null);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}` )
    .then(response => {
      if(!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();

    }).then(data=>{
      setBlog(data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setError(error);
      setLoading(false);
    });
  }, [id]);

  if(loading) {
    return <div>Loading...</div>;
  }
  if(error){
    return <div> Error: {error.message}</div>
  }
  if(!blog){
    return <div>Blog Not Found</div>
  }


  return (
    <div className="container">
      <div className="header">
      <h1>{blog.title}</h1>
      </div>
      <div className="blog-content">
      <p>{blog.body}</p>
      <button onClick={()=>navigate(-1)} className="back-button">back to blog home page</button>
    </div>
    </div>
  );
};

export default BlogDetails;
