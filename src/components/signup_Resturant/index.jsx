import React from 'react';
import './index.css'
import { withStyles } from '@material-ui/core/styles';
import { Grid , Paper , TextField }from '@material-ui/core'


const useStyles = theme => ({
    
    root: {
      backgroundColor : 'rgb(243 , 243 , 243)' ,
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      height : '100%'
    },

    description_div : {
     borderRadius : '1px' ,
     height:'auto',
     padding:'10px',
     marginTop : '20px'
    },

    form_div:{
        border : 'solid 1px rgb(223 , 223 , 223)' ,
        borderRadius : '1px' ,
        height:'auto',
        padding:'10px',
        backgroundColor : 'white',
        marginTop : '5%'
    },

    input_item_div:{
       height:'auto' ,
       backgroundColor : 'white' ,
       padding : '10px',
       border : 'solid 1px rgb(223 , 223 , 223)'
    }

  });

class ResturantRegisteration extends React.Component {

    constructor(){
        super();
        this.state = {
            city:[
                {
                  value: 'Karachi',
                  label: 'Karachi',
                },
                {
                  value: 'Lahore',
                  label: 'Lahore',
                },
              ]
        }
    }

render(){

    const {classes} = this.props;
    const { city } = this.state; 
    return(
        <div>
            <Grid container className={classes.root} spacing={2} justify='center'>
               
                <Grid item xs={12}  md={9} lg={8}  xl={8} >
                    <div  className={`${classes.description_div}`} > 
                     <h3> ADD A RESTURANT </h3>
                     <hr/>
                       <h5> Basic Information </h5>
                
                        <div className={`${classes.input_item_div}`}>
                          <TextField fullWidth='true' id="" label="Resturant Name" variant="outlined" margin='normal' /> 
                          
                          <Grid  xs={12} md={6} lg={4}>
                          <TextField fullWidth='true'
                                     id="" 
                                     label="City" 
                                     variant="outlined" 
                                     margin='normal'
                                     select 
                                     SelectProps={{ native: true}}
                                     > 

                                {city.map(option => (
                                            <option key={option.value} value={option.value}>
                                            {option.label}
                                            </option>
                                        ))}
                        </TextField>
                        </Grid>

                        <Grid container  spacing={2}>
                            
                            <Grid item xs={12} md={6} lg={4}>
                                <TextField  fullWidth='true' item id=""  label="STD" variant="outlined" margin='normal'/>  
                            </Grid>

                            <Grid item xs={12} md={6} lg={4}>
                              <TextField   fullWidth='true' id=""  label="Phone Number" variant="outlined" margin='normal'/>
                            </Grid>
                        
                        </Grid>

                          <TextField fullWidth='true' id="" label="Resturant Name" variant="outlined" margin='normal' /> 
                        </div>
                    </div>
                </Grid>

                <Grid xs={12}  md={2} lg={3}  xl={3}>
                    <div className={`${classes.form_div}`} > 
                     <h5> How its Work </h5>
                     <ul>
                         <li> If you are the owner of a restaurant, or if you are a user who's discovered a place not listed on Zomato, let us know using this form  </li>
                         <li> Once you send the information to us, our awesome content team will verify it. To help speed up the process, please provide a contact number or email address.  </li>
                         <li> That's it! Once verified the listing will start appearing on Zomato </li>
                     </ul>
                    </div> 
                </Grid>

             </Grid>    
        </div>
    )}
} 

export default withStyles(useStyles)(ResturantRegisteration)