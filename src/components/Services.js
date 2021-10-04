import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

class Services extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className='services'>
          <a id="top"/>
          <div className='sa'>
            <h1 className='satext'>PROJECTS</h1>
          </div>
          
          <div className='sb'>
            <div className='boxes'>
            <a href="https://kennedy-84a26.web.app/">
                <div className='triplebox b1'></div>
              </a>
              <a href="https://wordpress-665021-2176451.cloudwaysapps.com/">
                <div className='triplebox b2'></div>
              </a>
              <a href="https://tradersrally.com">
                <div className='triplebox b3'></div>
              </a>
              <a href="https://apps.apple.com/us/app/worship-pads-pro/id1586199401">
                <div className='triplebox b4'></div>
              </a>
              <a href="https://worshippro.org">
                <div className='triplebox b5'></div>
              </a>
              <a href="https://greenhousebotanicals-a7a0b.web.app/">
                <div className='triplebox b6'></div>
              </a>
              <a href="https://shop.jfc.org">
                <div className='triplebox b7'></div>
              </a>
              <a href="https://jfc.org/missions">
                <div className='triplebox b8'></div>
              </a>
              <a href="https://jubilee-3e466.web.app">
                <div className='triplebox b9'></div>
              </a>
            </div>
           </div>
        </div>
    );
  }
}

export default Services;