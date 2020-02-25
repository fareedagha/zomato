import React from 'react';
import {Navbar , Slider , Footer , AddResturant } from '../../components/index'

class Home extends React.Component {
    render() {
      return(
          <div> 
              <Navbar/>
              <AddResturant/>
              {/* <Slider/> */}
              <Footer/>
          </div>

      )
    }
  }

  export default Home