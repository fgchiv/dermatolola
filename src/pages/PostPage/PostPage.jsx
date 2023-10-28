import React, {useState, useEffect} from 'react'
import './PostPage.css'
import ServiciosOverlay from '../../components/ServiciosOverlay/ServiciosOverlay'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const PostPage = (data) => {
  let {id} = useParams()
  id = parseInt(id) - 1
  const [showOverlay, setShowOverlay] = useState(false)
  const [SOdata, setSOdata] = useState({})
  const [post, setPost] = useState(data.data[id])
  useEffect(() => {
    setPost(data.data[id])
  }, [id])

  
  const clickOnServicio = (servicio) => {
      setShowOverlay(!showOverlay)
      console.log("OVERLAY", servicio)
      setSOdata(servicio)
  }
  let next = ((id + 1) % 6)+1
  let prev
  if (id === 0) {
    prev = 6
  } else {
    prev = id
  }


  return (
    <div className='PostPage'>
      <Link to={'/'} >
        <div className='VolverCont' >
          <div className='VolverSVG' >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9.53033 15.625L3.90533 10L9.53033 4.375" stroke="#D77577" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.68762 10.0002H16.0939" stroke="#D77577" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className='VolverText' > Volver </div>
        </div>
      </Link>
      <div className='PPCont' >
        <div className='PPImgTextCont' >
          <div className='PPImg' style={{background: `url(${post.img}) center / cover, lightgray 50% `}} ></div>
          <div className='PPTextCont' >
            <div className='PPTitle' > {post.title} </div>
            <div className='PPText' > { post.text } </div>
          </div>
        </div>
        <div className='PPServiciosCont' >
          <div className='PPServiciosCont2' >
            <div className='PPSTitle' >Servicios relacionados: </div>
            {
              post.servicios.map((servicio) => {
                return(
                <div className='PPSText' key={servicio.id} onClick={ () => clickOnServicio(servicio)} > {servicio.title}. 
                {
                                showOverlay && (
                                    <div className='FondoOverlay' >
                                        <ServiciosOverlay data={SOdata}/>
                                    </div>
                                )
                            }
                </div>
              )})
            }
          </div>
        </div>
      </div>
      <Link to={ `/post/${prev}` }>
        <div className='PrevPost' >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="48" viewBox="0 0 26 48" fill="none">
            <g clip-path="url(#clip0_1725_846)">
              <path d="M24.7037 1.18506L1.88886 23.9999L24.7037 46.8147" stroke="#D77577" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_1725_846">
                <rect width="24.8889" height="48" fill="white" transform="matrix(-1 0 0 1 25.7407 0)"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      </Link>
      <Link to={ `/post/${next}` }>
        <div className='NextPost' >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="48" viewBox="0 0 25 48" fill="none">
            <g clip-path="url(#clip0_1725_848)">
              <path d="M1.03699 1.18506L23.8518 23.9999L1.03699 46.8147" stroke="#D77577" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_1725_848">
                <rect width="24.8889" height="48" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      </Link>
    </div>
  )
}

export default PostPage