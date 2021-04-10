import React from "react";

const BlogPost = ({ blog }) => {
  return (
    <div className="col-md-4">
      <div className="blog-card p-4">
        <div className="blog-card-body">
          <div className="d-flex align-items-center">
            <img className="me-4" src={blog.authorImg} alt="" />
            <div>
              <h6> {blog.author} </h6>
              <p className="text-secondary"> {blog.date} </p>
            </div>
          </div>
          <div className="mt-3">
            <h6> {blog.title} </h6>
            <p className="pt-3 text-secondary"> {blog.description} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
