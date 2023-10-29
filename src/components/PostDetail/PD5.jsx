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
            height: "356px",
            background: `url(${post.img}) center / cover, lightgray 50% `,
          }}
        ></div>
        <div className="PPTextCont">
          <div className="PPTitle">{post.title} </div>
          <div className="PPText" style={{ width: "319px" }}>
            El pelo tiene un <span className="PPTextRColor" >ciclo</span> donde pasa por tres fases: una donde crece,
            otra donde está en reposo y otra donde se cae. Cuando se alteran
            algunas de estas fases, se cae en una cantidad mayor a la habitual
            (que es 50 a 100 pelos por día). Hay <span className="PPTextRColor" >muchas causas</span> de caída de pelo
            y es esencial la consulta para determinarla y así, elegir el
            tratamiento adecuado.
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
