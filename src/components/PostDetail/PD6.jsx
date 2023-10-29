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
            background: `url(${post.img}) -146.817px 0px / 206.27% 100%, lightgray 50% `,
          }}
        ></div>
        <div className="PPTextCont">
          <div className="PPTitle">{post.title} </div>
          <div className="PPText" style={{ width: "319px" }}>
            Además de la recomendación del <span className="PPTextRColor" >chequeo anual</span> de lunares, cualquier
            lesión nueva que aparezca en forma espontánea en la piel, amerita
            consulta. Ahora, ¿Cómo saber si un lunar nos debe preocupar? Gracias
            a la regla del ABCDE: <br /><span className="PPTextRColor" >A</span>simétrico: si al dividirlo a la mitad, una es
            diferente de otra. <br /><span className="PPTextRColor" >B</span>ordes irregulares o poco definidos. <br /><span className="PPTextRColor" >C</span>olores
            distintos en un mismo lunar. <br /><span className="PPTextRColor" >D</span>iámetro mayor a 6 mm. <br /><span className="PPTextRColor" >E</span>volución
            distinta de los otros lunares, aumento de forma, tamaño o color.
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
