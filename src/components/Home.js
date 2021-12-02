import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Home = () => {
    
    $(document).ready(function(){
        
            $("#title").removeClass('title2').addClass('title1');
            $("#bars").css("color", "black");
            $(".nbg").css("background-color", "#2b2b2b5b");

            $(window).scroll(function(){
                var scroll = $(window).scrollTop();
                if (scroll > 600) {
                    $("#title").removeClass('title1').addClass('title2');
                    $("#bars").css("color", "white");
                    $(".nbg").css("background-color", "#ffffff5b");
                }
                else{
                    $("#title").removeClass('title2').addClass('title1');
                    $("#bars").css("color", "black");
                    $(".nbg").css("background-color", "#2b2b2b5b"); 	
                }
            })
       
      })



  

    return (
        <div>
            <a id="top"></a>
            <div className="a">
                <h1 className="atext">Caleb Smith is a Web Developer based in Denver.</h1>
                <p className='asubtext'>I create beautiful web experiences for businesses and non-profits. </p>
            </div>
            
            
            
        

            <div className="c">
                <a id="restorations">
                    <h3 className="mods">WEB PROJECTS</h3>
                    <HashLink to="/services"><button className="designyours btn btn-light">EXPLORE</button></HashLink>
                </a>
            </div>
            <div className="d">
                <h3 className="mods ts">TECH STACK</h3>
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
                
                <a href="http://github.com/calebjsmith7"><button className="designyours codebtn btn btn-light">VIEW CODE</button></a>
            </div>
            <a id="homecontact"></a>
            <div className="e">
                <h1 className="atext">For any work proposal send an email:</h1>
                <h2 className="esubtext">calebjoelsmith@gmail.com</h2>
                <p className='esub1'>My passion is working closely with interesting companies to visually elevate their brand. Lets talk to discuss availibility &amp; find a fit.</p>
            </div>
        </div>
    );
  
}

export default Home;