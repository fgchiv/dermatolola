import React, { useState, useEffect } from "react";
import ServiciosOverlay from "../../components/ServiciosOverlay/ServiciosOverlay";
import { motion } from "framer-motion";

const PDRutina = (data) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [SOdata, setSOdata] = useState({});
  const [dissolveOverlay, setDissolveOverlay] = useState(false);

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
    setDissolveOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
      setSOdata({});
      setDissolveOverlay(false);
    }, 800);
  };

  console.log("PDR", data);
  const post = data.data;
  return (
    <div className="PPCont" style={{ width: "640px" }}>
      <div className="PPImgTextCont" style={{ gap: '64px'}}>
        <div
          className="PPImg"
          style={{
            width: "256px",
            background: `url(${post.img}) center / cover, lightgray 50% `,
          }}
        ></div>
        <div className="PPTextCont" >
          <div className="PPTitle">{post.title} </div>
          <div className="PPText" style={{ width: "319px" }}>
            El acné es un desorden inflamatorio de la piel, específicamente de
            la glándula sebácea y del folículo piloso. Hay muchos factores que
            intervienen, si bien la <span className="PPTextRColor" >genética</span> tiene un rol importante, el <span className="PPTextRColor" >estilo
            de vida</span> (y los factores hormonales) es fundamental. Existen
            diferentes tipos de pieles con acné y no todos los granitos son
            acné. El <span className="PPTextRColor" >tratamiento temprano</span> (y no explotar los granitos) es
            primordial para evitar marcas y cicatrices.
          </div>
        </div>
      </div>
      <div className="PPServiciosCont">
        <div className="PPServiciosCont2">
          <div className="PPSTitle">Servicios relacionados: </div>
          {post.servicios.map((servicio) => {
            return (
              <div
                className="PPSText"
                key={servicio.id}
                onClick={() => clickOnServicio(servicio)}
                style={{ cursor: "pointer" }}
              >
                {" "}
                {servicio.title}.
              </div>
            );
          })}
          {showOverlay &&
            (dissolveOverlay ? (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="FondoOverlay" onClick={clickOnFondo}>
                  <ServiciosOverlay cerrar={clickCerrar} data={SOdata} />
                </div>
              </motion.div>
            ) : (
              <div className="FondoOverlay" onClick={clickOnFondo}>
                <ServiciosOverlay cerrar={clickCerrar} data={SOdata} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PDRutina;
