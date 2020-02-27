import React from 'react';
import {Grid , GridList , GridListTile  , Box} from '@material-ui/core';

class  Cites extends React.Component {

  constructor(){
      super();
      this.state = {
          cities : [
              { name : 'Karachi' , places : '78'} ,  { name : 'Lahore' , places : '102'} ,
              { name : 'Islamabad' , places : '30'} , { name : 'Multan' , places : '45'} ,
              { name : 'Peshawar' , places : '42'} ,  { name : 'Quetta' , places : '19'} ,
              { name : 'Rawalpindi' , places : '5'} , { name : 'Muree' , places : '34'} ,
              { name : 'Karachi' , places : '78'} ,  { name : 'Lahore' , places : '102'} ,
              { name : 'Islamabad' , places : '30'} , { name : 'Multan' , places : '45'} ,
              { name : 'Peshawar' , places : '42'} ,  { name : 'Quetta' , places : '19'} ,
              { name : 'Rawalpindi' , places : '5'} , { name : 'Muree' , places : '34'} ,
              { name : 'Karachi' , places : '78'} ,  { name : 'Lahore' , places : '102'} ,
              { name : 'Islamabad' , places : '30'} , { name : 'Multan' , places : '45'} ,
              { name : 'Peshawar' , places : '42'} ,  { name : 'Quetta' , places : '19'} ,
              { name : 'Rawalpindi' , places : '5'} , { name : 'Muree' , places : '34'} ,
              { name : 'Karachi' , places : '78'} ,  { name : 'Lahore' , places : '102'} ,
              { name : 'Islamabad' , places : '30'} , { name : 'Multan' , places : '45'} ,
              { name : 'Peshawar' , places : '42'} ,  { name : 'Quetta' , places : '19'} ,
              { name : 'Rawalpindi' , places : '5'} , { name : 'Muree' , places : '34'} ,
              
          ]
      }
     }

render(){

    const {cities} = this.state; 

  return (
    
    <div style={{padding : '20px' }}>

        <div style={{marginLeft:'5%' , marginTop:'2%'}} >
        <h2 > Popular localities in and around Durban </h2>
        <p> Explore restaurants, bars, and cafés by locality</p>
        </div>


   <Grid  xs={12} sm={12} lg={10} style={{margin:'2px auto'}}>
     
     <Box  boxShadow={3} bgcolor="background.paper" m={1} p={1}>

     <GridList cols={3} spacing={1} cellHeight={30} >
      {cities.map((val , ind) => {
        return (
          <GridListTile spacing={1} > 
            <b style={{color:'gray'}}> {val.name}  ({val.places}) </b>
          </GridListTile>
        );
      })}
     </GridList>
        
     </Box>
  </Grid> 

  </div>
  )}
}

export default Cites;
