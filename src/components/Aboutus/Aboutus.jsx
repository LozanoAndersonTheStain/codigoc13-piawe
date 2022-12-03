// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
import '../Aboutus/Aboutus.css';

let aboutus = [
    {
        "imageAboutus": "https://ouch-cdn2.icons8.com/kVKVp7r2c1c-eRk13aOpjWNgwD0gPF2nqYS_xiJ5Gzg/rs:fit:256:259/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODAy/L2UzNDhiOGRlLTI0/YWYtNGNmYy04MWUz/LTg4OTkzZmEzYjU4/Mi5wbmc.png",
        "history": "Código-C-Trece nace en la Comuna-Trece gracias a Son Batá"
    }
]

const Aboutus = () => {

    // const [aboutus, setAboutus] = useState([]);

    // const getAboutus = async () => {
    //     const response = await axios.get("https://c13-app-back-production.up.railway.app/api/articles")
    //     setAboutus(response.data.articles)
    // }

    // useEffect(() => {
    //     getAboutus();
    // }, [])



  return (
    <div>
        
        {
            aboutus.length === 0
            ?
            <div className='no-info'><h2>No hay información sobre nosotros</h2></div>
            :
            aboutus.map((about) => (
                <div key={aboutus.id} className="aboutus-content">
                    <article>
                        <p>{about.history}</p>
                    </article>
                    <picture className='image-aboutus'>
                        <img src={about.imageAboutus} alt="" />
                    </picture>
                </div>
            ))
        }
    </div>
  )
}

export default Aboutus