import React from 'react'
import './HomePage.css'
import ServiciosContainer from '../../components/ServiciosContainer/ServiciosContainer'
import PostContainer from '../../components/PostContainer/PostContainer';
import Carrousel from '../../components/Carrousel/Carrousel';

const HomePage = (data) => {
  console.log("DATA HOMEPAGE", data)
  return (
    <div className='HomePage' >
      <ServiciosContainer data={data.data.servicios} />
      <PostContainer data={data.data.posts} />
      < Carrousel data={data.data.fotos}/>
    </div>
  )
}

export default HomePage