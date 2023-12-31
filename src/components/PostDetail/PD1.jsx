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
      <div className="PPImgTextCont">
        <div
          className="PPImg"
          style={{
            background: `url(${post.img}) center / cover, lightgray 50% `,
            width: "256px",
          }}
        ></div>
        <div className="PPTextCont">
          <div className="PPTitle">{post.title} </div>
          <div className="PPText" style={{ width: "319px" }}>
            La piel tiene muchas funciones, entre ellas, ser una <span className="PPTextRColor" >barrera
            cutánea</span>. Para cuidarla, es fundamental comenzar por una <span className="PPTextRColor" >rutina
            básica</span>. Esto incluye una limpieza (acá dependerá si es sensible, una
            espuma o leche de limpieza, y si tiene tendencia a ser grasa, un
            gel). Luego, colocar una crema hidratante. Los activos van a
            depender del tipo de piel en general, el ácido hialurónico es una
            buena opción. Realizar esto pasos a la mañana y a la noche,
            acompañando con un <span className="PPTextRColor" >protector solar</span> durante el día es una excelente
            forma de comenzar con tu rutina.
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
