import React from 'react';
import {Grid , Box} from '@material-ui/core';

class  QuickSearch extends React.Component {

  constructor(){
      super();
      this.state = {}
     }

render(){
  return (
    
    <div style={{padding : '20px' }}>

        <div style={{marginLeft:'5%' , marginTop:'2%'}} >
        <h2 > Quick Search </h2>
        <p> Discover restaurants by type of meal </p>
        </div>


 <Grid  xs={12} sm={12} lg={10} style={{margin:'2px auto'}}>
     <Box boxShadow={3} bgcolor="background.paper" m={1} p={1}>

        <Grid container spacing={5} direction="row" justify="center" alignItems="center">

            <Grid item style={{marginLeft:'20px' , marginRight:'20px'}}>
                <figure>
                <img style={{width : '50px' , height: '50px'}} src={require('../../../images/c.png')} />
                <figcaption >Cafe</figcaption>
                </figure>
            </Grid>

            <Grid item style={{marginLeft:'20px' , marginRight:'20px'}}>
                <figure>
                <img style={{width : '50px' , height: '50px'}} src={require('../../../images/ta.png')} />
                <figcaption >Take Away</figcaption>
                </figure>
            </Grid>

            <Grid item style={{marginLeft:'20px' , marginRight:'20px'}}>
                <figure>
                <img style={{width : '50px' , height: '50px'}} src={require('../../../images/bf.png')} />
                <figcaption >Break fast</figcaption>
                </figure>
            </Grid>

           
            <Grid item style={{marginLeft:'20px' , marginRight:'20px'}}>
                <figure>
                <img style={{width : '50px' , height: '50px'}} src={require('../../../images/l.png')} />
                <figcaption >Lunch</figcaption>
                </figure>
            </Grid>

            <Grid item style={{marginLeft:'20px' , marginRight:'20px'}}>
                <figure>
                <img style={{width : '50px' , height: '50px'}} src={require('../../../images/d.png')} />
                <figcaption >Dinner</figcaption>
                </figure>
            </Grid>

        </Grid>
     </Box>
  </Grid> 

  </div>
  )}
}

export default QuickSearch;
