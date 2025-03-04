import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Routers.css';

const BlogHome = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json()) 
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>All Blogs</h1>
      </div>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <h2 className="blog-title">{blog.title ? capitalizeFirstLetter(blog.title) : ''}</h2>
            {/* <p className="blog-content">{blog.description}</p> */}
            <Link to={`/blogdetails/${blog.id}`} className="blog-link">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogHome;
