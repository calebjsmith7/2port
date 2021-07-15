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
                    <div className="techlogo fab fa-js-square" id="icon1"></div>
                    <div className="showme">JavaScript</div>
                    <div className="techlogo fab fa-react" id="icon2"></div>
                    <div className="showme rtext">React</div>
                    <div className="techlogo fab fa-bootstrap" id="icon3"></div>
                    <div className="showme">Bootstrap</div>
                    <div className="techlogo fab fa-github" id="icon4"></div>
                    <div className="showme gtext">Github</div>
                    <div className="techlogo fab fa-wordpress-simple" id="icon5"></div>
                    <div className="showme">Wordpress</div>
                </div>
                
                <a href="http://github.com/calebjsmith7"><button className="designyours btn btn-light">VIEW CODE</button></a>
            </div>
        </div>
    );
  }
}

export default Home;