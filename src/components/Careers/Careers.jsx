import axios from 'axios';
import { useEffect, useState } from 'react';
import '../Careers/Careers.css'

const Careers = () => {
    const [careers, setCareers] = useState([]);

    const getCareers = async () => {
        const response = await axios.get("https://c13-app-back.up.railway.app/api/careers");
        setCareers(response.data.careers);
    }

    useEffect(() => {
        getCareers();
    }, []);

  return (
    <div className="cajota">
        <div>
            <h4>Aprende las tecnologías necesarias para conventirte en un desarrollador web.</h4>
            {
                careers.length === 0 
                ?
                <div className='no-info'><h2>No hay <span>información</span> sobre las carreras</h2></div>
                :
                careers.map((career) => (
                    <div key={careers.id}>

                        <section className='careers-box'>
                            <details>
                                <summary>{career.name}</summary>
                                <p>{career.description}</p>
                                <a href="/"><button>Más información</button></a>
                            </details>
                        </section>
                    </div>
                ))
            }
        </div>
                <picture className='image-careers'>
                     <img src="https://ouch-cdn2.icons8.com/dWH8dzQ9WJcWxJEvJJbbdWe60kKW8BAcM-pSxlX0vQ8/rs:fit:256:579/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDQy/L2M5Mjk5N2E3LWI0/NjQtNGNkMC05MDBh/LTU0Yjg1MjIwMTA3/YS5wbmc.png" alt=""/>
                </picture>
    </div>
  )
}

export default Careers
