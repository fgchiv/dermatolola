import React, { useEffect, useState } from "react";
import "./Carrousel.css";
import { motion, AnimatePresence } from "framer-motion";

const Carrousel = ({ data }) => {

  const cambiarOrden = (arr) => {
    const ord = [...arr];
    const primerEl = ord.shift();
    ord.push(primerEl);
    return ord;
  };

  const fotosInicial = {
    actual: data,
    next: cambiarOrden(data),
  };

  const [fotos, setFotos] = useState(fotosInicial);

  useEffect(() => {

    setTimeout(() =>{
        setFotos((prevFotos) => {
            const fotosAct = {
                actual: cambiarOrden(cambiarOrden(prevFotos.next)),
                next: cambiarOrden(cambiarOrden(cambiarOrden(prevFotos.next))),
            }
            return fotosAct;
        })
    }, 3000)
  }, [fotos])


  return (
    <div className="Carrousel">
      <div className="CarrouselCont">
        <AnimatePresence mode="wait">
        { 
            fotos.actual.map((foto, index)=>{
                return (
                    <motion.div
                      key={foto.id + Date.now()}
                      initial={{ opacity: 0.4 }}
                      animate={{ opacity: 1 }}
                      transition={{duration: 0.8, ease:'easeOut'}}
                      className="CarrouselFoto"

                      style={{
                        background: `url(${foto.img}) center / cover, lightgray 50% `,
                      }}
                    ></motion.div>
                  );
            })
        }
        </AnimatePresence>
{/*         <AnimatePresence>
            {
                transitionFotos ? (
                    fotos.next.map((foto) => {
                    return (
                      <motion.div
                        initial= {{opacity: 0}}
                        animate= {{opacity: 1}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="CarrouselFoto"
                        key={foto.id}
                        style={{
                          background: `url(${foto.img}) center / cover, lightgray 50% `,
                        }}
                      ></motion.div>
                    );
                  })) : (          
                    fotos.actual.map((foto) => {
                    return (
                      <motion.div
                        initial= {{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="CarrouselFoto"
                        key={foto.id}
                        style={{
                          background: `url(${foto.img}) center / cover, lightgray 50% `,
                        }}
                      ></motion.div>
                    );
                  }))
            }
        </AnimatePresence> */}
{/*         {transitionFotos ? (
          fotos.actual.map((foto) => {
            return (
              <motion.div
                className="CarrouselFoto"
                key={foto.id}
                style={{
                  background: `url(${foto.img}) center / cover, lightgray 50% `,
                }}
              ></motion.div>
              );
          })
        ) : (
          fotos.actual.map((foto) => {
            return (
              <motion.div
                className="CarrouselFoto"
                key={foto.id}
                style={{
                  background: `url(${foto.img}) center / cover, lightgray 50% `,
                }}
              ></motion.div>
            );
          })
        )} */}
      </div>
    </div>
  );
};

export default Carrousel;
