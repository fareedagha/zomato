import React from 'react';
import {Navbar , Slider , Footer , AddResturant } from '../../components/index'

class Home extends React.Component {
    render() {
      return(
          <div style={{ display: 'flex' , flexDirection:'column' , height:'99vh'}} > 
              
              <div style={{flex : '1 0 auto'}} >
              
              <Navbar/>
              <AddResturant/>
              
              {/* <Slider/> */}
              
              </div>

              <div style={{flexShrink:0}}>
              <Footer/>
              </div>


          </div>

      )
    }
  }

  export default Home