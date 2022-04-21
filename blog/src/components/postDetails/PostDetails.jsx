import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function PostDetails(props) {
    
        const {id} = useParams();
        const [singlePost, setSinglePost] = useState();

        useEffect(()=>{
            

            fetch(`http://localhost/FinalProject/bedrock/web/wp-json/wp/v2/posts/${id}?_embed`)
            .then(response => response.json())
            .then(response => setSinglePost(response))
            .catch(err => console.error(err));
        },[])
    
        return(
            <div className='text-center' >
                {console.log(singlePost)}

                {singlePost ? <div className="card mt-5" style={{width: "100%"}}>
                                <img src={singlePost._embedded['wp:featuredmedia']['0'].source_url.toString()} style={{margin: "0 auto", width: "30%"}} className="card-img-top text-center mt-2" alt="image"/>
                                <div className="card-body">
                                    <h5 className="card-title">{singlePost.title.rendered}</h5>
                                    <p className="card-text" dangerouslySetInnerHTML={{__html: singlePost.content.rendered}}></p>
                                    <Link to='/' className="btn btn-primary">Back to all posts</Link>
                                </div>
                            </div> : ''}
                
                
            </div>
        )
    
}