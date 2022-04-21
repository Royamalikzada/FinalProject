import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Home = (props) => {

    const [posts, setPosts] = useState();
    const [filteredPosts, setFilteredPosts] = useState();
    
    const filterResult = (categoryId) => {
         const result = posts.filter((data) =>{
            return data.categories.toString() === categoryId.toString()
        });

        setFilteredPosts(result);
      }

    const allCategories = () => {
        return setFilteredPosts(posts)
    }

    useEffect(()=>{

        fetch(`http://localhost/FinalProject/bedrock/web/wp-json/wp/v2/posts?per_page=20&_embed`)
        .then(response => response.json())
        .then(response => setPosts(response))
        .catch(err => console.error(err));

    },[])

    return (
        <div>
            <Header filter={filterResult} allCategories={allCategories}/>

            <div className='row'>
                {filteredPosts ? filteredPosts.map(post => {
                    return (
                        <div className='col-md-4 col-sm-12 mb-3 text-center' key={post.id}>
                            <div className="card" style={{width: "18rem"}}>
                                <img src={post._embedded['wp:featuredmedia']['0'].source_url.toString()} className="card-img-top" alt="image"/>
                                <div className="card-body">
                                    <h5 className="card-title">{post.title.rendered}</h5>
                                    <p className="card-text">Feel free to read more about posts and leave your comments, which are important for us :)</p>
                                <Link to={`${post.id}`} className="btn btn-primary">Read more...</Link>
                                </div>
                            </div>
                        </div>
                    )}) : ''}
            </div>

            <Footer />
        </div>
    )
}

export default Home;