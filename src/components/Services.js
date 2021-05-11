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
            <h1 className='spec'>Our Services</h1>
            <div className='boxes'>
              <div className='triplebox b1'>
                <h1 className='boxtext'>Kennedy Race Cars</h1>
              </div>
              <div className='triplebox b2'>
                <h1 className='boxtext'>Jubilee Fellowship Church</h1>
              </div>
              <div className='triplebox b3'>
                <h1 className='boxtext'>Coming Soon...</h1>
              </div>
            </div>
           </div>
        </div>
    );
  }
}

export default Services;