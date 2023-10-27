import React from 'react'
import './HomePage.css'
import ServiciosContainer from '../../components/ServiciosContainer/ServiciosContainer'
import PostContainer from '../../components/PostContainer/PostContainer';

const HomePage = (data) => {
  console.log("DATA HOMEPAGE", data)
  return (
    <div className='HomePage' >
      <ServiciosContainer data={data.data.servicios} />
      <PostContainer data={data.data.posts} />
    </div>
  )
}

export default HomePage