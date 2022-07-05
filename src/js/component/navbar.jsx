import React from 'react';


const Navbar = ({header, home, about, service, contact}) =>{
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">{header}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">{home} <span class="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">{about}</a>
            <a className="nav-item nav-link" href="#">{service}</a>
            <a className="nav-item nav-link disabled" href="#">{contact}</a>
        </div>
    </div> 
    </nav>
    )
}

export default Navbar;
