import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import '../News/News.css'

const News = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const response = await axios.get("https://c13-app-back.up.railway.app/api/novelties?");
    setNews(response.data.novelties)
  };

  useEffect(() => {
    getNews();
  }, []);

  return (


    <div className="contenedor-noticias">
        {
            news.length === 0 
            ?
            <div className='no-info'><h2>No hay <span>información</span> sobre las noticias</h2></div>
            :
            news.map((mostrandoNoticias,index)=>(
                <div key={index}>
                    <div className="noticia-caja">
                        <div className="noticia-tarjeta">
                            <picture className="imagen-noticia">
                                <img src='https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg' alt="" />
                            </picture>
                            <h2>{mostrandoNoticias.title}</h2>
                            <div className="caja-fecha">
                                <data className="fecha-noticia">05/09/2022</data>
                                <span className="Autor-noticia">Wiston Mosquera</span>
                            </div>
                            <p className="descricion-noticia">{mostrandoNoticias.description}</p>
                        </div>
                    </div>

            

                </div>
            ))
        }
      {/* <div className="noticia-caja">
        <div className="noticia-tarjeta">
          <picture className="imagen-noticia">
            <img
              src="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg"
              alt=""
            />
          </picture>
          <h2>Noticia uno</h2>
          <div className="caja-fecha">
            <data className="fecha-noticia">05/09/2022</data>
            <span className="Autor-noticia">Wiston Mosquera</span>
          </div>

          <p className="descricion-noticia">
            Para hacer una función en javascript, se utiliza la palabra clav
            "function" seguida del nombre de la función y una lista de
          </p>
        </div>
      </div>
      <div className="noticia-caja">
        <div className="noticia-tarjeta">
          <picture className="imagen-noticia">
            <img
              src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg"
              alt=""
            />
          </picture>
          <h2>Noticia dos</h2>
          <div className="caja-fecha">
            <data className="fecha-noticia">20/09/2022</data>
            <span className="Autor-noticia">Anderson lozano</span>
          </div>

          <p className="descricion-noticia">
            Para hacer una función en javascript, se utiliza la palabra clav
            "function" seguida del nombre de la función y una lista de
          </p>
        </div>
      </div>
      <div className="noticia-caja">
        <div className="noticia-tarjeta">
          <picture className="imagen-noticia">
            <img
              src="https://cdn.pixabay.com/photo/2015/02/02/11/08/office-620817_960_720.jpg"
              alt=""
            />
          </picture>
          <h2>Noticia tres</h2>
          <div className="caja-fecha">
            <data className="fecha-noticia">25/09/2022</data>
            <span className="Autor-noticia">pipito murillo</span>
          </div>

          <p className="descricion-noticia">
            Para hacer una función en javascript, se utiliza la palabra clav
            "function" seguida del nombre de la función y una lista de
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default News;
