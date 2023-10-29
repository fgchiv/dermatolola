import React from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Link to={"/"}>
        <div className="APVolverCont">
          <div className="APVolverSVG">
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.68762 10.0002H16.0939"
                stroke="#D77577"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="APVolverText"> Volver </div>
        </div>
      </Link>
      <div className="APTitle"> ¿Quién soy? </div>
      <div className="APTextCont1">
        <div className="APText1">
          {" "}
          Mi nombre es Lola Kuperman Wilder, médica dermatóloga.{" "}
        </div>
        <div className="APText2">
          {" "}
          Me recibí en la Universidad de Buenos Aires, realicé mi residencia de
          dermatología y jefatura de residentes en el Hospital Ramos Mejía. Allí
          creamos{" "}
          <span className="APResaltado1">
            el primer consultorio para pacientes trans y personas no binarias
          </span>
          . Realicé la diplomatura de oncología dermatológica y de estética y
          actualmente, la de enfermedades autoinflamatorias.{" "}
        </div>
      </div>
      <div className="APImg1"></div>
      <div className="APImg2"></div>
      <div className="APText3">
        {" "}
        Más allá de la medicina, estudié periodismo en TEA. Me gusta ir al cine,
        al teatro y aprender sobre arte. En las consultas, hago el intento de
        explicar con dibujos -no muy buenos-. Creo que entender qué le pasa a la
        piel es fundamental para mantener cualquier hábito.{" "}
      </div>
      <div className="APCitaCont">
        <div className="APCitaText">
          {" "}
          “Elegí la dermatología porque me fascina que tenga una forma propia de
          expresarse en el cuerpo y porque, la mayoría de las veces, refleja
          también lo que nos pasa por dentro”.{" "}
        </div>
      </div>
      <div className="APAbordajeCont">
        <div className="APLine"></div>
        <div className="APATextCont">
          <div className="APAText">Abordaje</div>
        </div>
      </div>
      <div className="APAContenidoCont">
        <div className="APACTextCont1">
          <div className="APACText1">
            {" "}
            ¿Qué tiene que ver la dermatología con el mundo en el que vivimos?{" "}
          </div>
          <div className="APACText2">
            {" "}
            <br />
            La dermatología existe desde que tenemos registro: la piel, el pelo
            y las uñas siempre fueron visibles. En los últimos años, esta
            especialidad está en constante transformación, en una era donde la
            dismorfofobia (preocupación excesiva por el aspecto físico) está
            cada vez más presente.{" "}
          </div>
        </div>
        <div className="APACImg1"></div>
        <div className="APACCitaTextCont">
          <div className="APACCitaText">
            <span className="APResaltado2">
              La dermatología tiene una posición privilegiada para cuestionar
              los estándares hegemónicos de belleza
            </span>{" "}
            y trabajar sobre los estigmas que rodean los problemas en la piel.
            Me parece fundamental abordar la dermatología con{" "}
            <span className="APResaltado2">
              perspectiva de género, en forma transdisciplinaria, inclusiva e
              integral
            </span>{" "}
            para que la información se convierta en autonomía a la hora de
            decidir en un mundo lleno de recetas mágicas que, como ya sabemos,
            no funcionan.
          </div>
          <div className="APACCSVG1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M44.6154 46.923C45.8905 46.923 47.1133 46.4165 48.0149 45.5149C48.9166 44.6133 49.4231 43.3904 49.4231 42.1153V30.375C49.4231 29.0999 48.9166 27.877 48.0149 26.9754C47.1133 26.0738 45.8905 25.5673 44.6154 25.5673H37.9423C37.9423 23.8798 38.0433 22.1875 38.2404 20.5C38.5385 18.7115 39.0385 17.1202 39.7308 15.7307C40.4279 14.3365 41.3221 13.2452 42.4183 12.4471C43.5096 11.5528 44.8991 11.1057 46.5914 11.1057V3.65381C43.8077 3.65381 41.375 4.24996 39.2837 5.44227C37.2105 6.62249 35.4281 8.25213 34.0673 10.2115C32.7016 12.3717 31.6949 14.7389 31.0866 17.2211C30.4735 19.9603 30.1735 22.7603 30.1923 25.5673V42.1153C30.1923 43.3904 30.6988 44.6133 31.6005 45.5149C32.5021 46.4165 33.7249 46.923 35 46.923H44.6154ZM15.7692 46.923C17.0443 46.923 18.2672 46.4165 19.1688 45.5149C20.0704 44.6133 20.5769 43.3904 20.5769 42.1153V30.375C20.5769 29.0999 20.0704 27.877 19.1688 26.9754C18.2672 26.0738 17.0443 25.5673 15.7692 25.5673H9.09617C9.09617 23.8798 9.19713 22.1875 9.39425 20.5C9.69232 18.7115 10.1923 17.1202 10.8846 15.7307C11.5817 14.3365 12.476 13.2452 13.5721 12.4471C14.6635 11.5528 16.0529 11.1057 17.7452 11.1057V3.65381C14.9616 3.65381 12.5289 4.24996 10.4375 5.44227C8.36437 6.62249 6.58195 8.25213 5.22117 10.2115C3.85543 12.3717 2.84879 14.7389 2.2404 17.2211C1.62735 19.9603 1.32735 22.7603 1.34617 25.5673V42.1153C1.34617 43.3904 1.85269 44.6133 2.75431 45.5149C3.65593 46.4165 4.87878 46.923 6.15386 46.923H15.7692Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="APACCSVG2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M5.38472 3.07696C4.10964 3.07696 2.88679 3.58349 1.98517 4.4851C1.08355 5.38672 0.57703 6.60958 0.57703 7.88465V19.625C0.57703 20.9001 1.08355 22.123 1.98517 23.0246C2.88679 23.9262 4.10964 24.4327 5.38472 24.4327H12.0578C12.0578 26.1202 11.9568 27.8125 11.7597 29.5C11.4616 31.2885 10.9616 32.8798 10.2693 34.2693C9.57222 35.6635 8.67799 36.7548 7.58184 37.5529C6.49049 38.4472 5.10107 38.8943 3.40876 38.8943V46.3462C6.19241 46.3462 8.62511 45.75 10.7165 44.5577C12.7896 43.3775 14.572 41.7479 15.9328 39.7885C17.2985 37.6283 18.3052 35.2611 18.9136 32.7789C19.5266 30.0397 19.8266 27.2397 19.8078 24.4327V7.88465C19.8078 6.60958 19.3013 5.38672 18.3997 4.4851C17.498 3.58349 16.2752 3.07696 15.0001 3.07696H5.38472ZM34.2309 3.07696C32.9558 3.07696 31.7329 3.58349 30.8313 4.4851C29.9297 5.38672 29.4232 6.60958 29.4232 7.88465V19.625C29.4232 20.9001 29.9297 22.123 30.8313 23.0246C31.7329 23.9262 32.9558 24.4327 34.2309 24.4327H40.904C40.904 26.1202 40.803 27.8125 40.6059 29.5C40.3078 31.2885 39.8078 32.8798 39.1155 34.2693C38.4184 35.6635 37.5241 36.7548 36.428 37.5529C35.3366 38.4472 33.9472 38.8943 32.2549 38.8943V46.3462C35.0386 46.3462 37.4713 45.75 39.5626 44.5577C41.6357 43.3775 43.4182 41.7479 44.779 39.7885C46.1447 37.6283 47.1513 35.2611 47.7597 32.7789C48.3728 30.0397 48.6728 27.2397 48.654 24.4327V7.88465C48.654 6.60958 48.1474 5.38672 47.2458 4.4851C46.3442 3.58349 45.1213 3.07696 43.8463 3.07696H34.2309Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="APACImg2"></div>
        <div className="APACTextCont2">
          <div className="APACText4">
            Si bien aún nos falta un largo recorrido, de a poco existe mayor
            representatividad en la formación médica. En conjunto con la
            creación del consultorio gratuito dermatológico para la comunidad
            LGTBIQ+, formamos el grupo de trabajo de la Sociedad Argentina de
            Dermatología “Diversidad y piel”, a través del cual publicamos una{" "}
            <a
              style={{
                fontWeight: "700",
                color: "var(--gris-claro-aaa-sobre-blanco, #595959)",
                textDecoration: "underline",
              }}
              href="https://sad.org.ar/wp-content/uploads/2022/12/Guia-para-una-atencion-respetuosa-de-la-diversidad-de-genero-de-las-personas-adaptada-a-la-consulta-dermatologica.docx.pdf"
            >
              guía de atención respetuosa
            </a>{" "}
            y logramos mayor inclusión a la hora de indicar{" "}
            <a  style={{
                fontWeight: "700",
                color: "var(--gris-claro-aaa-sobre-blanco, #595959)",
                textDecoration: "underline",
              }} href="https://www.boletinoficial.gob.ar/detalleAviso/primera/291566/20230804?busqueda=2">
              isotretinoína
            </a>
            , una medicación muy utilizada para el acné.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
