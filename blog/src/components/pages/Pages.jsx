import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';

export default function Pages() {

    const {id} = useParams();
    const [page, setPage] = useState();
    
    useEffect(()=>{
  
        fetch(`http://localhost/FinalProject/bedrock/web/wp-json/wp/v2/pages/${id}`)
        .then(response => response.json())
        .then(response => setPage(response))
        .catch(err => console.error(err));
    },[id])

    return (
        <div>
            <Header/>

            <h1>{page ? page.title.rendered : ''}</h1>
            <div dangerouslySetInnerHTML={{__html: page ? page.content.rendered : ""}}></div>

            <Footer />
        </div>
    )
}