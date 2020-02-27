import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router , Switch , Route , Redirect} from 'react-router-dom'; 
import {Navbar , Home , Footer , AddResturantForm } from './components/index'

// import AddResturant from './components/add_Resturant/index'

class App extends React.Component {

  render(){
  return (
    <Router>
       <div style={{ display: 'flex' , flexDirection:'column' , height:'99vh'}} > 
         
          <div style={{flex : '1 0 auto'}} >
            
            <Navbar/>

            <Switch> 
              <Route exact path="/" component={Home}/>
              <Route exact path="/addResturant" component={AddResturantForm}/>
              <Redirect to="/404" />
            </Switch>
            
          </div>
         
          <div style={{flexShrink:0}}>
            <Footer/>
          </div>

      </div>
   </Router> 
  );
}
}
export default App;
