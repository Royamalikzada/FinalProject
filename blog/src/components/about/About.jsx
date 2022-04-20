import React, { useState, useEffect }  from 'react';
import Header from '../header/Header';

export default function About() {

    const [dataAbout, setDataAbout] = useState();
    
  
      useEffect(()=>{
  
          fetch(`http://localhost/FinalProject/bedrock/web/wp-json/wp/v2/pages/40`)
          .then(response => response.json())
        //   .then(response => console.log(response))
          .then(response => setDataAbout(response))
          .catch(err => console.error(err));
      },[])

    return (
        <div>
            <Header/>

            <h1>About us</h1>
            {dataAbout ? dataAbout.content.rendered : ""}

            {console.log (dataAbout ? dataAbout.content.rendered : "")}
        </div>
    )
}