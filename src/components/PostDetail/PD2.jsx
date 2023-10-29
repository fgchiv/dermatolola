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
    <div className="PPCont" style={{ width: "785px" }}>
      <div className="PPImgTextCont" style={{ gap: '64px'}} >
        <div
          className="PPImg"
          style={{
            width: "320px",
            background: `url(${post.img}) center / cover, lightgray 50% `,
          }}
        ></div>
        <div className="PPTextCont">
          <div className="PPTitle">{post.title} </div>
          <div className="PPText" style={{ width: "365px" }}>
            El sol es fundamental para el bienestar de las personas. Por eso,
            tenemos que aprender a relacionarnos de forma saludable y
            consciente. ¿Y por qué es importante incorporar estos hábitos? Ya
            que el <span className="PPTextRColor" >daño solar</span> es acumulativo e irreversible y puede llevar al
            cáncer de piel, además de empeorar la calidad de la piel al
            predisponer a arrugas tempranas y manchas. <br /> <br />
            <span className="PPTextRColorBold" >Recomendaciones:</span> utilizar
            protector solar de amplio espectro (UVA y UVB) mayor a 30 y renovar
            cada 2 horas. Esto solo no es suficiente, lo ideal es utilizar
            sombreros, anteojos (ideal con filtro UV) y remeras manga larga o
            UV. Si la sombra es más corta que tu altura, es importante buscar
            refugio del sol. Lo ideal es evitar el sol de 10 a 16 horas.
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
