import React , {Component}from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid , Paper , Select , MenuItem , Checkbox , Button , InputLabel , TextField , Radio , FormControl , FormGroup , FormLabel , FormControlLabel , RadioGroup }  from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import {city} from '../../constants/index'


class ResturantRegisteration extends React.Component {

    constructor(){
        super();
        this.state = {
            resturantOpeningStatus : '' ,
            seatingInResturant : '' ,
            paymentType : '' ,
            showMoreFields : false ,
        }
    }

    handlestate(e){
      this.setState({ [e.target.name]:e.target.value })
      console.log(''+e.target.name , e.target.value)
    }

    handleAddMore(){
        const {showMoreFields} = this.state;
        if(showMoreFields == false){
            this.setState({showMoreFields : true});
        }else{
            this.setState({showMoreFields : false});
        }
    }

resturantBasicInformation = () =>{
    const {classes} = this.props;
    return(
            <div className={`${classes.input_item_div}`}>
                {/* resturant name */}
                <TextField fullWidth='true' id="" label="Resturant Name" variant="outlined" margin='normal' /> 
                
                {/* cities */}
                <Grid  xs={12} md={6} lg={4}>
                    <TextField fullWidth='true' id="" label="City" variant="outlined" margin='normal' select SelectProps={{ native: true}}> 
                        {city.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </TextField>
                </Grid>
               
               {/* Phone and STD number */}
                <Grid container  spacing={2}>
                    <Grid item xs={12} md={6} lg={4}>
                        <TextField  fullWidth='true' item id=""  label="STD" variant="outlined" margin='normal'/>  
                    </Grid>
                        
                    <Grid item xs={12} md={6} lg={4}>
                        <TextField   fullWidth='true' id=""  label="Phone Number" variant="outlined" margin='normal'/>
                    </Grid>
                            
                    <br/>    
                </Grid>
                
                {/* Resturant Opening Status Fields*/}
                <FormControl component="fieldset" className={`${classes.radio_form}`}>
                    
                    <FormLabel component="legend">OPENING STATUS</FormLabel>
                    
                    <RadioGroup aria-label="position" name="resturantOpeningStatus" onChange={(e)=>{this.handlestate(e)}} row>
                        <FormControlLabel value="already_open" control={<Radio color="primary" />} label="placed already open" labelPlacement="end"/>
                        <FormControlLabel value="open_soon" control={<Radio color="primary" />} label="Placed opening soon" labelPlacement="end" />
                    </RadioGroup>

                </FormControl>
               
            </div>
        )
    } 
    
resturantShowMoreField = () => {
    const {classes} = this.props;  
    const {addMoreBtn} = this.state; 
    return(
        <Button variant="outlined" color="default" className = {classes.btn_class}  fullWidth='true'
           endIcon={
             !addMoreBtn && <ExpandLessIcon/> || 
              addMoreBtn && <ExpandMoreIcon/> 
             }
           onClick={()=>{this.handleAddMore()}}
           >
           + Add more fields
           </Button>
    )
}    

resturantLocation = () => {
    const {classes} = this.props;    
    return(
        <div className={`${classes.input_item_div}`}>

            <TextField  fullWidth='true' item id=""  label="Add your Address" variant="outlined" margin='normal'/>
    
            <Button
            variant="outlined"
            color="default"
            className = {classes.btn_class}
            endIcon={<AddLocationIcon fontSize="large"/>}         
            >
            + Add image
            </Button>
        
       </div>
    )
}

resturantCharacteristic = () => {

    const {classes} = this.props;

    return(
        <div className={`${classes.input_item_div}`}>
                        
             <FormControl component="fieldset" className={`${classes.radio_form}`} >  

                {/* Seating Fields */}
                <FormLabel component="legend">SEATING</FormLabel>
                
                <RadioGroup aria-label="position" name="seatingInResturant"  onChange={(e)=>{this.handlestate(e)}} row>
                    <FormControlLabel value="available" control={<Radio color="primary" />} label="Available" labelPlacement="end"/>
                    <FormControlLabel value="not_available" control={<Radio color="primary" />} label="Not Available" labelPlacement="end"/>
                </RadioGroup>

              </FormControl>

              <br/>

             {/* Services Fields */}
              <FormControl component="fieldset">
           
                <FormLabel component="legend">SERVICES</FormLabel>
           
                <FormGroup aria-label="position" row>
                    <FormControlLabel value="breakfast" control={<Checkbox color="primary" />} label="Break Fast" labelPlacement="end"/>
                    <FormControlLabel value="lunch" control={<Checkbox color="primary" />} label="Lunch" labelPlacement="end"/>
                    <FormControlLabel value="dinner" control={<Checkbox color="primary" />} label="Dinner" labelPlacement="end"/>
                    <FormControlLabel value="cafe" control={<Checkbox color="primary" />} label="Cafe" labelPlacement="end"/>
                    <FormControlLabel value="nightlife" control={<Checkbox color="primary" />} label="Night Life" labelPlacement="end"/>
                </FormGroup>

             </FormControl>
        
             <br/>

            {/* Payment Type Fileda */}
             <FormControl component="fieldset" className={`${classes.radio_form}`} >
                <FormLabel component="legend">PAYMENT</FormLabel>
                    
                    <RadioGroup aria-label="position" name=" paymentType"  onChange={(e)=>{this.handlestate(e)}} row>
                        <FormControlLabel value="cash" control={<Radio color="primary" />} label="Cash" labelPlacement="end"/>
                        <FormControlLabel value="cash_card" control={<Radio color="primary" />} label="Cash and Card" labelPlacement="end" />
                   </RadioGroup>

            </FormControl>

        </div>
    )
}

resturantTiming = () =>{
    const { classes } = this.props;
    return(
        <div  className={`${classes.input_item_div}`}>
            
            {/* Label of resturant opening Days  */}
            <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                
                <FormGroup aria-label="position" row>
                    <FormControlLabel   value="monday" control={<Checkbox color="primary" />}  label="Monday"    labelPlacement="end"/>
                    <FormControlLabel value="tuesday" control={<Checkbox color="primary" />}   label="Tuesday"   labelPlacement="end"/>
                    <FormControlLabel value="wednesday" control={<Checkbox color="primary" />} label="Wednesday" labelPlacement="end"/>
                    <FormControlLabel value="thursday" control={<Checkbox color="primary" />}  label="Thursday"  labelPlacement="end" />
                    <FormControlLabel value="friday" control={<Checkbox color="primary" />}    label="Friday"    labelPlacement="end"/>
                    <FormControlLabel value="saturday" control={<Checkbox color="primary" />}  label="Saturday"  labelPlacement="end"/>
                    <FormControlLabel value="sunday" control={<Checkbox color="primary" />} label="Sunday" labelPlacement="end" />
               </FormGroup>
       
             </FormControl>

            {/* Spinners of Timing  */}
            <Grid>

                <FormControl variant="outlined" className={classes.time_spinner}>
                    <InputLabel id="demo-simple-select-filled-label">From</InputLabel>
                        <Select labelId="demo-simple-select-filled-label"   id="demo-simple-select-filled">
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.time_spinner}>
                    <InputLabel id="demo-simple-select-filled-label">To</InputLabel>
                        <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled">
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                 </FormControl>

                <Button variant="outlined" color="default" className = {classes.btn_class} size = 'large'>
                    <b> + Add Time </b>
                </Button>

            </Grid>
       
    </div>
    )
}

resturantContactInformation = () =>{
    const { classes } = this.props;

    return(
        <div  className={`${classes.input_item_div}`}>
            <Grid container  spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                    <TextField  fullWidth='true' item id=""  label="Resturant Email" variant="outlined" margin='normal'/>  
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <TextField   fullWidth='true' id=""  label="Resturant Website" variant="outlined" margin='normal'/>
                </Grid>
            </Grid>
        </div>
    )
}

resturantWork = () =>{
    const {classes} = this.props
 return(
    <div className={`${classes.form_div}`} > 
    <h5> How its Work </h5>
    <ul>
        <li> If you are the owner of a restaurant, or if you are a user who's discovered a place not listed on Zomato, let us know using this form  </li>
        <li> Once you send the information to us, our awesome content team will verify it. To help speed up the process, please provide a contact number or email address.  </li>
        <li> That's it! Once verified the listing will start appearing on Zomato </li>
    </ul>
   </div> 
 )
}


render(){

    const {classes} = this.props;
    const { showMoreFields} = this.state; 
    return(
        <div>
            <Grid container className={classes.root} spacing={2} justify='center'>
                
                <Grid item xs={12}  md={9} lg={8}  xl={8} >
                   
                    <div  className={`${classes.description_div}`} >      
                        <h3> ADD A RESTURANT </h3>
                        <hr/>

                        <h5> Basic Information </h5>
                        {/* Contain All fieds of Basic Information */}
                        {this.resturantBasicInformation()} 
            
                        {/* Show More Fields Button */}
                        {this.resturantShowMoreField()}

                        { showMoreFields && 
                         
                         <div>
                
                            <br/>
                            <h5> Location </h5>
                            {/* contain Location Fields */}
                            {this.resturantLocation()}
                    
                            <br/>
                            <h5> Characteristic </h5>
                            {/* contain All Characteristics Fields */}
                            {this.resturantCharacteristic()}
                
                        
                            <br/>
                            <h5> Timings </h5>
                            {/* Conatin resturant opening days and Timing Fields */}
                            {this.resturantTiming()}


                             <br/>
                             <h5> Contact Information </h5>
                             {/* contain Fields of Contact info */}
                             {this.resturantContactInformation()}

                            <Button className={classes.submit_btn} fullWidth='true' variant="outlined"  size = 'large'> Submit </Button>

                         </div>
                        }
                    </div>
            
             </Grid>
                <Grid xs={12}  md={2} lg={2}  xl={2} >
                    {/* Div of "How its Work" */}
                    {this.resturantWork()}
                </Grid>
             </Grid>    
        </div>
    )}
} 


const useStyles = theme => ({
    
    root: {
      backgroundColor : 'rgb(243 , 243 , 243)' ,
      width : '100%' ,
      minHeight : '80vh'
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
        marginTop : '15%'
    },

    input_item_div:{
       height:'auto' ,
       backgroundColor : 'white' ,
       padding : '10px',
       border : 'solid 1px rgb(223 , 223 , 223)'
    },

    btn_class:{
        marginTop : '20px' ,
        height:'40px' ,
        fontSize : '15px'
    },

    radio_form:{

    },

    time_spinner: {
        margin: theme.spacing(1),
        minWidth: 120,
      },

      submit_btn:{
          backgroundColor : 'rgb(9 , 158 , 68)' ,
          marginTop : '20px' ,
          height : '50px' ,
          color : 'white'
      }

  });
export default withStyles(useStyles)(ResturantRegisteration)