import React, {useState} from 'react'
import './ServiciosContainer.css'
import ServiciosCards from '../ServiciosCards/ServiciosCards'
import ServiciosOverlay from '../ServiciosOverlay/ServiciosOverlay'

const ServiciosContainer = ({data}) => {
    const [showOverlay, setShowOverlay] = useState(false)
    const [SOdata, setSOdata] = useState({})
    
    const clickOnServicio = (servicio) => {
        setShowOverlay(!showOverlay)
        console.log("OVERLAY", servicio)
        setSOdata(servicio)
    }


  return (
    <div className='ServiciosContainer'>
        <div className='ContCentrado'>
            <div className='Title'>Tipos de servicios</div>
            <div className='ContainerCards'>
                {data.map((servicio) => {
                    return (
                        <div className='Servicio' key={servicio.id} onClick={ () => clickOnServicio(servicio)} >
                            <ServiciosCards data={servicio}  />
                            {
                                showOverlay && (
                                    <div className='FondoOverlay' >
                                        <ServiciosOverlay data={SOdata}/>
                                    </div>
                                )
                            }
                        </div>
                    );
                })}
            </div>
        </div>

    </div>
  )
}

export default ServiciosContainer