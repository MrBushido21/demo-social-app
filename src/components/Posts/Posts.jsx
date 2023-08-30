import React from 'react';
import '../Posts/posts.css'
import NewPost from './NewPost';
import PostFormik from './PostFormik';


const Posts = React.memo(props => { 
    console.log("render");
    return (
        <div className='post-box'>
            <h4 className='post-title'>My posts</h4>
            <PostFormik {...props}/>
            <div className="posts">
                {props.posts.map( item => <NewPost id={item.id} message={item.message} />)}
            </div>
        </div>
    );
});


export default Posts