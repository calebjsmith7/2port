import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


class Home extends Component {
  

  render() {

    return (
        <div>
            <a id="top"></a>
            <div className="a">
                
            </div>
            
            
            <div className="b">
                <div className="centertext">
                    <h1 className="info">Partnering with small businesses and non-profits to create beautiful and high-performing websites.</h1>
                    <hr className="binfoh"/>
                </div>
            </div>
        

            <div className="c">
                <a id="restorations">
                    <h3 className="mods">WEB PROJECTS</h3>
                    <HashLink to="/services"><button className="designyours btn btn-light">EXPLORE</button></HashLink>
                </a>
            </div>
            <div className="d">
                <h3 className="mods">TECH STACK</h3>
                <div className="techlogos">
                    <div className="techlogo fab fa-js-square"></div>
                    <div className="techlogo fab fa-react"></div>
                    <div className="techlogo fab fa-bootstrap"></div>
                    <div className="techlogo fab fa-github"></div>
                    <div className="techlogo fab fa-wordpress-simple"></div>
                </div>
                <HashLink to="/services"><button className="designyours btn btn-light">CONTACT</button></HashLink>
            </div>
        </div>
    );
  }
}

export default Home;