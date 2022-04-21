import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {

  const [categories, setCategories] = useState();

    useEffect(()=>{

        fetch(`http://localhost/FinalProject/bedrock/web/wp-json/wp/v2/categories`)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => setCategories(response))
        .catch(err => console.error(err));
    },[])

  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning mb-5">
      {console.log(categories)}
      <div className="container-fluid">
          <Link className="navbar-brand" to='/'>HobbyBlog</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/page/40'>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/page/2'>Contacts</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><button className="dropdown-item" onClick={() => props.allCategories()}>All</button></li>

                  {categories ? categories.map(category => {
                    return (
                      <li key={category.id}><button onClick={() => props.filter(category.id)} className="dropdown-item">{category.name}</button></li>
                    )
                  }): ''}

                </ul>
              </li>
            </ul>
        </div>
    </div>
  </nav>
  )
}

