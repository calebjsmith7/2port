import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({title}) =>{
    // Darkened navbar on scroll function
    /*$(document).ready(function(){
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if (scroll > 600) {
              $(".navbar").css("background" , "#ffffffd0");
              $(".nbg").css("background" , "none");
            }
            else{
                $(".navbar").css("background" , "none");
                $(".nbg").css("background" , "#ffffff5b");  	
            }
        })
      }) */
      // handleCollapse function for navbar collapse onClick
function handleCollapse() {
    var nav = document.getElementById("navbarSupportedContent");
    var btn = document.getElementById("navbarbtn");
    nav.classList.remove("show");
    btn.classList.add("collapsed");
}
//HashLink used specifically for anchors vs. regular React Router Link

    return (
        <nav className="navbar navbar-dark navv fixed-top">
            
            <div id="title" className="navbar-brand title1 title2"><HashLink to ='/#top' className='faketitle'>Caleb Smith</HashLink></div>
            <button className="navbar-toggler n ml-auto" id="navbarbtn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="customicon"><i id="bars" class="fas fa-bars"></i></span>
                </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto n nbg">
                <li className="nav-item active"><HashLink to='/#top' className="nav-link l" onClick={handleCollapse}>HOME <span className="sr-only">(current)</span></HashLink></li>
                <li className="nav-item active"><HashLink to='/services#top' className="nav-link l" onClick={handleCollapse}>PROJECTS</HashLink></li>
                <li className="nav-item active"><HashLink to='/#homecontact' className="nav-link l" onClick={handleCollapse}>CONTACT</HashLink></li>
            </ul>
        </div>
    
        </nav>
    )
}
export default Navbar;