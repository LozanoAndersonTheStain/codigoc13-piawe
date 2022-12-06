import axios from "axios";
import { useEffect, useState } from "react";
import "../Aboutus/Aboutus.css";

const Aboutus = () => {
  const [aboutus, setAboutus] = useState([]);

  const getAboutus = async () => {
    const response = await axios.get(
      "https://c13-app-back.up.railway.app/api/articles?lot=3"
    );
    setAboutus(response.data.articles);
  };

  useEffect(() => {
    getAboutus();
  }, []);

  return (
    <div className="todo">
      <div className="contenedor">

      {aboutus.length === 0 ? (
        <div className="no-info">
          <h2>No hay información sobre nosotros</h2>
        </div>
      ) : (
        aboutus.map((about) => (
          <div className="conte">
          <div key={aboutus.id} className="container-abouts">
            <div className="tarjetas-about">
              <p>{about.description}</p>
            </div>
          </div>
          </div>
        ))
        )}

    
          </div>
          <div className="aboutus-content">
        <iframe
          width="560"
          height="400"
          src="https://www.youtube.com/embed/C166BCGgD-c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          ></iframe>
      </div>
    </div>
  );
};

export default Aboutus;
