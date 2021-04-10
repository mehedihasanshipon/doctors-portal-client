import React from "react";
import './Blogs.css';
import wilson from '../../../images/Harry.png'
import BlogPost from "../BlogPost/BlogPost";

const blogData = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Sinthia',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'The tooth cancer is taking a challenge',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
]

const Blogs = () => {
  return (
    <section className="blogs my-3">
      <div className="container">
        <div className="blog-header text-center">
          <h5 style={{color:'#5FC7C7',fontWeight:'600'}}>Blogs</h5>
          <h2>From our blog news</h2>
        </div>
        <div className="row mt-5">
            {
                blogData.map(blog=> <BlogPost blog={blog} /> )
            }
        </div>
      </div>
    </section>
  );
};

export default Blogs;
