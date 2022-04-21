import React, { useState, useEffect }  from 'react';
import Header from '../header/Header';

export default function Contacts() {

    const [dataContacts, setDataContacts] = useState();
    
  
      useEffect(()=>{
  
          fetch(`http://localhost/FinalProject/bedrock/web/wp-json/wp/v2/pages/2`)
          .then(response => response.json())
        //   .then(response => console.log(response))
          .then(response => setDataContacts(response))
          .catch(err => console.error(err));
      },[])

    return (
        <div >
            <Header/>

            <h1>Find us</h1>
            {dataContacts ? dataContacts.content.rendered : ""}

            {console.log (dataContacts ? dataContacts.content.rendered : "")}
        </div>
    )
}