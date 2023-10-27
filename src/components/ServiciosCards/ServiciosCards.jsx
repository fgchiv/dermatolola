import React from 'react'
import './ServiciosCards.css'

const ServiciosCards = ({data}) => {
  return (
    <div className='ServiciosCards'>
      <div className='ServiciosTitle'> {data.title} </div>
    </div>
  )
}

export default ServiciosCards