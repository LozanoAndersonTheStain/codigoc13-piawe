import axios from "axios";
import { useEffect, useState } from "react";
import "../Aboutus/Aboutus.css";

const Aboutus = () => {
  const [aboutus, setAboutus] = useState([]);

  const getAboutus = async () => {
    const response = await axios.get(
      "hhttps://c13-app-back.up.railway.app/api/articles?from=1&lot=5"
    );
    setAboutus(response.data.articles);
  };

  useEffect(() => {
    getAboutus();
  }, []);

  return (
    <div>
      {aboutus.length === 0 ? (
        <div className="no-info">
          <h2>No hay información sobre nosotros</h2>
        </div>
      ) : (
        aboutus.map((about) => (
          <div key={aboutus.id}>
            <article>
              <p>{about.history}</p>
            </article>
          </div>
        ))
      )}

      <div className="aboutus-content">
        <iframe
          width="560"
          height="315"
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
