import React, { useState } from 'react'
import './PostContainer.css'
import PostCards from '../PostCards/PostCards'

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';



const PostContainer = ({data}) => {

    const [dragging, setDragging] = useState(false)

    const navigate = useNavigate()

    const postNavigate = (post) =>{
        if (!dragging) {
            navigate(`/post/${post.id}`)
        }
    }

    const dragStart = () =>{
        setDragging(true)
    }

    const dragEnd = () => {
        setDragging(false)
    }

  return (
    <div className='PostContainer'>
        <div className='PContCentrado'>
            <div className='Title'>¿Sobre qué tema te gustaría saber más?</div>

                <motion.div className='PContainerCards' drag='x' dragConstraints={{ left:-1500, right:0 }} 
                    onDragStart={dragStart}
                    onDragEnd={dragEnd}
                >
                    {data.map((post) => {
                        console.log('POST', post)
                        return (
                            <motion.div className='Post' key={post.id} onClick={() => postNavigate(post)} style={{cursor: 'pointer'}} >

                                    <PostCards data={post}  />

                            </motion.div>
                        );
                    })}
                </motion.div>
        </div>
    </div>
  )
}

export default PostContainer