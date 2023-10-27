import React from 'react'
import './ServiciosOverlay.css'

const ServiciosOverlay = (data) => {
  return (
    <div className='ServiciosOverlay'>
        {console.log("DATA", data)}
        <div className='SOImg' style={{ background: `url(${data.data.img}), lightgray 50%`,
            backgroundPosition: 'center', backgroundSize: 'cover'}} ></div>
        <div className='SOContInfo'>
            <div className='SOContNav'>
                <div className='SOTitle'>{data.data.title}</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <g clipPath="url(#clip0_1891_62)">
                        <path d="M8.50855 8.51024C2.17277 14.846 2.17277 25.1554 8.50855 31.4912C14.8443 37.827 25.1537 37.827 31.4895 31.4912C37.8253 25.1554 37.8253 14.846 31.4895 8.51024C25.1537 2.17446 14.8443 2.17446 8.50855 8.51024ZM25.3023 16.4652L21.7668 20.0007L25.3023 23.5363C25.5368 23.7707 25.6685 24.0886 25.6685 24.4201C25.6685 24.7517 25.5368 25.0696 25.3023 25.304C25.0679 25.5385 24.75 25.6702 24.4185 25.6702C24.0869 25.6702 23.769 25.5385 23.5346 25.304L19.999 21.7685L16.4635 25.304C16.2291 25.5385 15.9111 25.6702 15.5796 25.6702C15.2481 25.6702 14.9302 25.5385 14.6957 25.304C14.4613 25.0696 14.3296 24.7517 14.3296 24.4202C14.3296 24.0886 14.4613 23.7707 14.6957 23.5363L18.2313 20.0007L14.6957 16.4652C14.4613 16.2308 14.3296 15.9128 14.3296 15.5813C14.3296 15.2498 14.4613 14.9319 14.6957 14.6974C14.9302 14.463 15.2481 14.3313 15.5796 14.3313C15.9111 14.3313 16.2291 14.463 16.4635 14.6974L19.999 18.233L23.5346 14.6974C23.769 14.463 24.0869 14.3313 24.4185 14.3313C24.75 14.3313 25.0679 14.463 25.3023 14.6974C25.5368 14.9319 25.6685 15.2498 25.6685 15.5813C25.6685 15.9128 25.5368 16.2308 25.3023 16.4652Z" fill="#D77577"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1891_62">
                        <rect width="40" height="40" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className='SOText'>{data.data.text}</div>
        </div>
    </div>
  )
}

export default ServiciosOverlay