import React, { useState, useEffect } from 'react';
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

        fetch(`http://localhost/FinalProject/bedrock/web/wp-json/wp/v2/posts?per_page=20`)
        .then(response => response.json())
        .then(response => setPosts(response))
        .catch(err => console.error(err));
    },[])


    return (
        <div>
            <Header filter={filterResult} allCategories={allCategories}/>

            <form>
                {filteredPosts ? filteredPosts.map(post => {
                    console.log(post)
                    return (
                        <div className='form-group' key={post.id}>
                            <label className='form-label'> Title: {post.title.rendered}</label>
                            <textarea className='form-control pb-5 mb-5' readOnly  value={post.content.rendered} />
                        </div>
                    )
                }) : ''}
            </form>
        </div>
    )
}

export default Home;