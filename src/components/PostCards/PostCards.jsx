import React from 'react'
import './PostCards.css'

const PostCards = (data) => {


  return (
    <div className='PostCards' style={{ background: `linear-gradient(180deg, rgba(0, 0, 0, 0.17) 42.23%, rgba(0, 0, 0, 0.50) 73.75%), url(${data.data.img}), lightgray 50%`,
      backgroundPosition: 'center', backgroundSize: 'cover'}}>
      {console.log("POSTDATA", data)}

        <div className='PCTitle'> {data.data.title} </div>
        <div className='MasInfo'>Ver más información</div>
    </div>
  )
}

export default PostCards