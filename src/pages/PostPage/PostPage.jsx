import React, { useState, useEffect } from "react";
import "./PostPage.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PD1 from '../../components/PostDetail/PD1'
import PD2 from '../../components/PostDetail/PD2'
import PD3 from '../../components/PostDetail/PD3'
import PD4 from '../../components/PostDetail/PD4'
import PD5 from '../../components/PostDetail/PD5'
import PD6 from '../../components/PostDetail/PD6'


const PostPage = (data) => {
  let { id } = useParams();
  id = parseInt(id) - 1;

  const [post, setPost] = useState(data.data[id]);


  useEffect(() => {
    setPost(data.data[id]);
  }, [id]);



  let next = ((id + 1) % 6) + 1;
  let prev;
  if (id === 0) {
    prev = 6;
  } else {
    prev = id;
  }

  return (
    <div className="PostPage">
      <Link to={"/"}>
        <div className="VolverCont">
          <div className="VolverSVG">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.53033 15.625L3.90533 10L9.53033 4.375"
                stroke="#D77577"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.68762 10.0002H16.0939"
                stroke="#D77577"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="VolverText"> Volver </div>
        </div>
      </Link>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        key={post.id}
      >
        { (post.id == 1) && (<PD1 data={post} ></PD1>) }
        { (post.id == 2) && (<PD2 data={post} ></PD2>) }
        { (post.id == 3) && (<PD3 data={post} ></PD3>) }
        { (post.id == 4) && (<PD4 data={post} ></PD4>) }
        { (post.id == 5) && (<PD5 data={post} ></PD5>) }
        { (post.id == 6) && (<PD6 data={post} ></PD6>) }

        {/* <div className="PPCont">
          <div className="PPImgTextCont">
            <div
              className="PPImg"
              style={{
                background: `url(${post.img}) center / cover, lightgray 50% `,
              }}
            ></div>
            <div className="PPTextCont">
              <div className="PPTitle">{post.title} </div>
              <div className="PPText">{post.text} </div>
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
        </div>  */}
      </motion.div>
      <Link to={`/post/${prev}`}>
        <div className="PrevPost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="48"
            viewBox="0 0 26 48"
            fill="none"
          >
            <g clip-path="url(#clip0_1725_846)">
              <path
                d="M24.7037 1.18506L1.88886 23.9999L24.7037 46.8147"
                stroke="#D77577"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1725_846">
                <rect
                  width="24.8889"
                  height="48"
                  fill="white"
                  transform="matrix(-1 0 0 1 25.7407 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </Link>
      <Link to={`/post/${next}`}>
        <div className="NextPost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="48"
            viewBox="0 0 25 48"
            fill="none"
          >
            <g clip-path="url(#clip0_1725_848)">
              <path
                d="M1.03699 1.18506L23.8518 23.9999L1.03699 46.8147"
                stroke="#D77577"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1725_848">
                <rect width="24.8889" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default PostPage;
