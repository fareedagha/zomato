import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';


class  Footer extends React.Component {
  
  constructor(){
    super()
    this.state = {
    }
  }

 render(){
  const {classes} = this.props; 
  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
      
        <Grid item xs='12' md='4' lg='4' alignContent='center'>
          <h4 className={classes.footer_head}> ABOUT ZOMATO </h4>
          <ul className={classes.ul_items}>
              <li className={classes.li_items}> About Us </li>
              <li className={classes.li_items}> Capture </li>
              <li className={classes.li_items}> Blog </li>
              <li className={classes.li_items}> Contact </li>
          </ul>
        </Grid>
      
        <Grid item xs='12' md='4' lg='4'>
          <h4 className={classes.footer_head} > DETAILS </h4>
          <ul className={classes.ul_items}>
              <li className={classes.li_items}> Office : Khayaban - e - jami , Defence Phase II near Sunset Club </li>
              <li className={classes.li_items}> Email : contactUs@ebike.com.pk </li>
              <li className={classes.li_items}> PH_NO : 021-0000000 </li>
          </ul>
        </Grid>
        
        <Grid item xs='12' md='4' lg='4'>
        <h4 className={classes.footer_head} > Contact Us </h4>
          <div>
            <FacebookIcon className={classes.contact_icons} />
            <MailOutlineIcon className={classes.contact_icons} />
            <PhoneIcon className={classes.contact_icons} />
          </div>
          <p  className={classes.footer_head}> 24 hours Service Support </p>
        </Grid>
      
      </Grid>
    </div>
  )}
}

const useStyles = theme => ({
 
  root: {
  backgroundColor : 'rgb(40 , 44 , 53)',
  textAlign : 'center' ,
  padding : '10px' ,
  width : '100%' ,
},

paper: {
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
},

ul_items : {
    listStyleType : 'none' ,
    color : 'white'
},

li_items : {
  color:'white' ,
  fontSize:'18px'
},

footer_head:{
 color : 'white' , 
},

contact_icons : {
 fontSize : '25px' ,
 color : 'white' ,
 margin : '5px'
}

});


export default withStyles(useStyles)(Footer);