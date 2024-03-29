import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import $ from 'jquery';

import kenexample from '../images/kenexample.png';
import russoexample from '../images/russoexample.png';
import trexample from '../images/trexample.png';
import wppexample from '../images/wppexample.png';
import worshipproexample from '../images/worshipproexample.png';
import greenhouseexample from '../images/greenhouseexample.png';
import jfcstoreexample from '../images/jfcstoreexample.png';
import jfcmissionsexample from '../images/jfcmissionsexample.png';
import setlistgeniusexample from '../images/setlistgeniusexa.png';
import backroadsexample from '../images/backroadsexample.png';
import magnaexample from '../images/magnaexample.png';
import isaexample from '../images/isaexample.png';
import jfcexample from '../images/jfcexample.png';
import jfcstore from '../images/jfcstore.png';
import kenlogowht from '../images/kenlogowht.png';
import trlogo from '../images/trlogo.png';
import russo from '../images/russo.png';
import worshippads from '../images/worshippads.png';
import foolishfriends from '../images/foolishfriends.png';
import sbp from '../images/sbp-logo.png';
import synthbassexample from '../images/synthbassexample.png';
import roto from '../images/roto.png';
import rotoexample from '../images/rotoexample.png';
import ywamexample from '../images/ywamexample.png';
import lessons from '../images/lp-logo.png';
import setlist from '../images/setlistgenius.png';
import magnaexa from '../images/magnaexa.png';
import plexample from '../images/pl-example.png';
import pllogo from '../images/pl-logo-wht.png';
import mmexample from '../images/magnamechexample.png';
import plmexa from '../images/plmexa.png';
import lpguitar from '../images/lessonpro.png';


const Services = () => {
    
    $(document).ready(function(){
        
            $("#title").removeClass('title1').addClass('title2');
            $('#bars').css('color' , 'white');
        
      }) 



    return (
        <div className='services'>
          <a id="top"/>
          <div className='sb'>
          <h1 className='satext'>WEBSITES</h1>
            <div className='boxes'>
            
                    <div className='webprojects'>
                        <a href="https://magnafab.com/">
                            <img src={magnaexa} className='projectimage' />
                        </a>
                        <h2 className="projecttext ptitles">Magna Fab</h2>
                        <hr className="projhr" />
                        <h4 className="projecttext">Wordpress</h4>
                        <br />
                    </div>
                    <div className='webprojects'>
                        <a href="https://thisisisaac.com/">
                            <img src={isaexample} className='projectimage' />
                        </a>
                        <h2 className="projecttext ptitles">isaac! Artist Site</h2>
                        <hr className="projhr" />
                        <h4 className="projecttext">Wordpress</h4>
                        <br />
                    </div>

                <div className='webprojects'>
                <a href="https://daniellelrusso.com">
                    <img src={russoexample} className='projectimage'/>
                    </a>
                    <h2 className="projecttext ptitles">Danielle Russo</h2>
                    <hr className="projhr"/>
                    <h4 className="projecttext">WordPress</h4>
                    <br/>
                </div>

                <div className='webprojects'>
                <a href="https://backroadsministry.org">
                    <img src={backroadsexample} className='projectimage'/>
                    </a>
                    <h2 className="projecttext ptitles">Backroads Ministry</h2>
                    <hr className="projhr"/>
                    <h4 className="projecttext">WordPress</h4>
                    <br/>
                </div>
                <div className='webprojects'>
                        <a href="https://magnamechanical.net/">
                            <img src={mmexample} className='projectimage' />
                        </a>
                        <h2 className="projecttext ptitles">Magna Mechanical</h2>
                        <hr className="projhr" />
                        <h4 className="projecttext">Wordpress</h4>
                        <br />
                    </div>

                <div className='webprojects'>
                    <a href="https://kennedy-84a26.web.app/">
                    <img src={kenexample} className='projectimage'/>
                    </a>
                    <h2 className="projecttext ptitles">Kennedy Racecars</h2>
                    <hr className="projhr"/>
                    <h4 className="projecttext">React</h4>
                    <br/>
                </div>
              

                <div className='webprojects'>
                <a href="https://ywamazua.com">
                    <img src={ywamexample} className='projectimage'/>
                    </a>
                    <h2 className="projecttext ptitles">YWAM Azua</h2>
                    <hr className="projhr"/>
                    <h4 className="projecttext">WordPress</h4>
                    <br/>
                </div>
              
              
                <div className='webprojects'>
                <a href="https://tradersrally.com">
                    <img src={trexample} className='projectimage'/>
                    </a>
                    <h2 className="projecttext ptitles">Traders Rally</h2>
                    <hr className="projhr"/>
                    <h4 className="projecttext">WordPress and WooCommerce</h4>
                    <br/>
                </div>
              
                <div className='webprojects'>
                <a href="https://shop.jfc.org">
                    <img src={jfcstoreexample} className='projectimage'/>
                    </a>
                    <h2 className="projecttext ptitles">Jubilee Store</h2>
                    <hr className="projhr"/>
                    <h4 className="projecttext">WordPress and WooCommerce</h4>
                    <br/>
                </div>
             
                <div className='webprojects'>
                <a href="https://worshippro.org">
                    <img src={worshipproexample} className='projectimage'/>
                    </a>
                    <h2 className="projecttext ptitles">Worship Pro</h2>
                    <hr className="projhr"/>
                    <h4 className="projecttext">React</h4>
                    <br/>
                </div>
              
              
                <div className='webprojects'>
                <a href="https://greenhousebotanicals-a7a0b.web.app/">
                    <img src={greenhouseexample} className='projectimage'/>
                    </a>
                    <h2 className="projecttext ptitles">Greenhouse Botanicals</h2>
                    <hr className="projhr"/>
                    <h4 className="projecttext">React</h4>
                    <br/>
                </div>
              
              
                <div className='webprojects'>
                <a href="https://jfc.org/missions">
                    <img src={jfcmissionsexample} className='projectimage'/>
                    </a>
                    <h2 className="projecttext ptitles">Jubilee Missions</h2>
                    <hr className="projhr"/>
                    <h4 className="projecttext">WordPress</h4>
                    <br/>
                </div>
             
              
                <div className='webprojects'>
                <a href="https://jubilee-3e466.web.app">
                    <img src={jfcexample} className='projectimage'/>
                    </a>
                    <h2 className="projecttext ptitles">Jubilee Fellowship Church</h2>
                    <hr className="projhr"/>
                    <h4 className="projecttext">React</h4>
                    <br/>
                </div>
              
            </div>

            <h1 className='satext'>APPS</h1>
            <div className="boxes">
            <div className='webprojects'>
                    <a href="https://apps.apple.com/us/app/lesson-pro-guitar-lessons/id1614678527">
                        <img src={lpguitar} className='projectimage'/>
                    </a>
                    <h2 className="projecttext ptitles">Lesson Pro - Guitar Lessons</h2>
                    <hr className="projhr"/>
                    <h4 className="projecttext">React Native</h4>
                    <br/>
                </div>
                <div className='webprojects'>
                    <a href="https://apps.apple.com/us/app/prayer-list-a-prayer-app/id1614678041">
                        <img src={plexample} className='projectimage'/>
                    </a>
                    <h2 className="projecttext ptitles">Prayer List</h2>
                    <hr className="projhr"/>
                    <h4 className="projecttext">React Native</h4>
                    <br/>
                </div>
                <div className='webprojects'>
                    <a href="https://apps.apple.com/us/app/prayer-list-for-ministries/id1614678377">
                        <img src={plmexa} className='projectimage'/>
                    </a>
                    <h2 className="projecttext ptitles">Prayer List for Minsitries</h2>
                    <hr className="projhr"/>
                    <h4 className="projecttext">React Native</h4>
                    <br/>
                </div>
                <div className='webprojects'>
                    <a href="https://apps.apple.com/us/app/worship-pads-pro/id1586199401">
                        <img src={wppexample} className='projectimage'/>
                    </a>
                    <h2 className="projecttext ptitles">Worship Pads Pro</h2>
                    <hr className="projhr"/>
                    <h4 className="projecttext">React Native</h4>
                    <br/>
                </div>

                <div className='webprojects'>
                    <a href="https://apps.apple.com/us/app/setlist-genius-pads-click/id1599615188">
                        <img src={setlistgeniusexample} className='projectimage'/>
                    </a>
                    <h2 className="projecttext ptitles">Setlist Genius</h2>
                    <hr className="projhr"/>
                    <h4 className="projecttext">React Native</h4>
                    <br/>
                </div>

                <div className='webprojects'>
                    <a href="https://apps.apple.com/us/app/synth-bass-pro/id1592554833">
                        <img src={synthbassexample} className='projectimage'/>
                    </a>
                    <h2 className="projecttext ptitles">Synth Bass Pro</h2>
                    <hr className="projhr"/>
                    <h4 className="projecttext">React Native</h4>
                    <br/>
                </div>
                <div className='webprojects'>
                    <a href="https://apps.apple.com/us/app/roto-electronic-toms/id1593485681">
                        <img src={rotoexample} className='projectimage'/>
                    </a>
                    <h2 className="projecttext ptitles">Roto - Electronic Toms</h2>
                    <hr className="projhr"/>
                    <h4 className="projecttext">React Native</h4>
                    <br/>
                </div>

            </div>

            <h1 className='satext'>LOGOS</h1>
            <div className="boxes">
                <div className='logoprojects'>
                    <img src={jfcstore} className='logoimage'/>
                </div>
                <div className='logoprojects'>
                    <img src={kenlogowht} className='logoimage'/>
                </div>
                <div className='logoprojects'>
                    <img src={trlogo} className='logoimage alsize'/>
                </div>
                <div className='logoprojects'>
                    <img src={russo} className='logoimage'/>
                </div>
                <div className='logoprojects'>
                    <img src={worshippads} className='logoimage'/>
                </div>
                <div className='logoprojects'>
                    <img src={foolishfriends} className='logoimage  alsize'/>
                </div>
                <div className='logoprojects'>
                    <img src={sbp} className='logoimage'/>
                </div>
                <div className='logoprojects'>
                    <img src={roto} className='logoimage alsize'/>
                </div>
                <div className='logoprojects'>
                    <img src={lessons} className='logoimage alsize'/>
                </div>
                <div className='logoprojects'>
                    <img src={setlist} className='logoimage'/>
                </div>
                <div className='logoprojects'>
                    <img src={pllogo} className='logoimage'/>
                </div>
            </div>
           </div>
        </div>
    );

}

export default Services;