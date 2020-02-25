import React from 'react';
// import '../../bootstrap.min.css';
 import SlideImage from '../../images/slide_image.jpg'
import './styles.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import Grid from '@material-ui/core/Grid';
import { Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({

    root: {
      // flexGrow : 1
      },

      city_field : {
        margin:theme.spacing(1),
        width: '12%',
        minWidth : '150px',
        backgroundColor : 'white' ,
        borderRadius : '5px'
      },

      location_field :{
        marginLeft : theme.spacing(1),
        marginTop : theme.spacing(1),
        marginBottom : theme.spacing(1),
        width : '30%',
        minWidth:'150px' ,
        backgroundColor : 'white',
        borderRadius : '5px'
      } ,

      searchBtn : {
        marginTop : theme.spacing(1),
        marginBottom : theme.spacing(1),
        marginLeft : theme.spacing(1),
        minWidth:'150px' ,
        width : '12%', 
        height : '55px',
        backgroundColor : 'rgb(9 , 158 , 68)' ,
        color : 'white',
    } ,
    
    shadow : {
      // boxShadow: '5px 5px 10px 10px rgb(190 , 190 , 190)' ,
      borderRadius : '10px', 
      // backgroundColor : 'grey' ,
      // Opacity : 0.6 ,
      background: 'rgba(98, 98, 98, 0.6)' 
    } ,
    
    searchDiv:{
      paddingTop : '20vh',
      textAlign : 'center',
    },

    slideImageDiv : {
      backgroundImage : `url(${SlideImage})` ,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '50vh' 
    } 
  
  })
);

const city = [
    {
      value: 'Karachi',
      label: 'Karachi',
    },
    {
      value: 'Lahore',
      label: 'Lahore',
    },
  ];

  const currlocation = [
    {
      value: '', 
      label: 'Add Your Current Location',
    },
    {
      value: 'Location',
      label: 'Detecting Your Current Location',
    },
  ];

export default function Slider() {

  const classes = useStyles();
  const [location, setLocation] = React.useState('Karachi');
  const [location1, currentLocation] = React.useState('');

  const handleChangeCity = event => {
    setLocation(event.target.value);
  };

  const handleChangeLocation = event => {
    currentLocation(event.target.value);
  };

  return (
    
  <div className={classes.slideImageDiv}>

    <div className={classes.searchDiv} >
    
      {/* <Grid container  justify="center" spacing={0}>
      <Grid item xs={10}  className={classes.shadow}> */}

   

      <span style={{ paddingTop: '40px' , paddingBottom:'40px' ,paddingRight:'15px' , background: 'rgba(98, 98, 98, 0.6)' , borderRadius:'10px' }}>

        <TextField
          xs='12'
          className={classes.city_field}
          variant="outlined"
          id="outlined-select-currency-native"
          select
          // label="City"
          onChange={handleChangeCity}  
          SelectProps={{ native: true}}
          InputProps={{
            startAdornment: <InputAdornment position="start"><LocationOnIcon/></InputAdornment>,
          }}
         >

          {city.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}

        </TextField>

        <TextField
          className={classes.city_field}
          variant="outlined"
          id="outlined-select-currency-native"
          select
          // label="City"
          onChange={handleChangeCity}  
          SelectProps={{ native: true}}
          InputProps={{
            startAdornment: <InputAdornment position="start"><FastfoodIcon/></InputAdornment>,
          }}
         >

          {city.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}

        </TextField>
    
        <TextField 
          className = {classes.location_field}
          id="outlined-basic"  
          variant="outlined" 
          select
          // label="Location"  
          SelectProps={{ native: true}}
          InputProps={{
            startAdornment: <InputAdornment position="start"><ControlPointIcon/></InputAdornment>,
          }}
          >
            {currlocation.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}

          </TextField>
       
          <Button variant="outlined" className={classes.searchBtn}>Serach</Button>

          </span>

       </div>
  </div>
  );
}



