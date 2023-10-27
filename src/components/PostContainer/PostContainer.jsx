import React from 'react'
import './PostContainer.css'
import PostCards from '../PostCards/PostCards'
import { Link } from 'react-router-dom';


const PostContainer = ({data}) => {
  return (
    <div className='PostContainer'>
        <div className='PContCentrado'>
            <div className='Title'>¿Sobre qué tema te gustaría saber más?</div>
            <div className='PContainerCards'>
                {data.map((post) => {
                    console.log('POST', post)
                    return (
                        <div className='Post' key={post.id}>
                            <Link to= {`/post/${post.id}`} >
                                <PostCards data={post}/>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default PostContainer