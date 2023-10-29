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
      <div className="PPImgTextCont" style={{ gap: "64px" }}>
        <div
          className="PPImg"
          style={{
            width: "256px",
            background: `url(${post.img}) center / cover, lightgray 50% `,
          }}
        ></div>
        <div className="PPTextCont">
          <div className="PPTitle">{post.title} </div>
          <div className="PPText" style={{ width: "319px" }}>
            Es una afectación inflamatoria crónica de la piel donde se puede ver
            en forma (casi) constante el centro de la cara <span className="PPTextRColor" >colorado</span> que empeora
            ante el calor, el frío, el ejercicio, el sol, el estrés, comidas
            picantes, el alcohol y el cigarrillo. La rosácea se acompaña de una
            <span className="PPTextRColor" > piel sensible</span> donde la barrera cutánea está alterada, es fundamental
            además del tratamiento médico, utilizar pocos productos y de buena
            calidad.
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
