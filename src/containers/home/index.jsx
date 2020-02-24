import React from 'react';
import {Navbar , Slider , Footer } from '../../components/index'

class Home extends React.Component {
    render() {
      return(
          <div>
              <Navbar/>
              <Slider/>
              <Footer/>
          </div>

      )
    }
  }

  export default Home