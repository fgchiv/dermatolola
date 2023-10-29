import React, { useState, useEffect } from "react";
import "./ServiciosContainer.css";
import ServiciosCards from "../ServiciosCards/ServiciosCards";
import ServiciosOverlay from "../ServiciosOverlay/ServiciosOverlay";
import { motion } from "framer-motion";

const ServiciosContainer = ({ data }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [SOdata, setSOdata] = useState({});
  const [dissolveOverlay, setDissolveOverlay] = useState(false)

  const clickOnServicio = (servicio) => {
    setShowOverlay(true);
    console.log("OVERLAY", servicio);
    setSOdata(servicio);
  };

  const clickOnFondo = (e) => {
    if (e.target === e.currentTarget) {
      setShowOverlay(false);
      setSOdata({});
    }
  };

  const clickCerrar = () => {
    setDissolveOverlay(true)
    setTimeout(() => {
        setShowOverlay(false);
        setSOdata({});
        setDissolveOverlay(false);
    }, 800)
};

  return (
    <div className="ServiciosContainer">
      <div className="ContCentrado">
        <div className="Title">Tipos de servicios</div>
        <div className="ContainerCards">
          {data.map((servicio) => {
            return (
              <div
                className="Servicio"
                key={servicio.id}
                onClick={() => clickOnServicio(servicio)}
              >
                <ServiciosCards data={servicio} />
              </div>
            );
          })}
          {showOverlay && (
            dissolveOverlay ? (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className='FondoOverlay' onClick={clickOnFondo}>
                        <ServiciosOverlay cerrar={clickCerrar} data={SOdata} />
                    </div>
                </motion.div>
            ) : (
              <div className='FondoOverlay' onClick={clickOnFondo}>
                <ServiciosOverlay cerrar={clickCerrar} data={SOdata} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiciosContainer;
