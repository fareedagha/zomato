import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1, 
  },

  signup_btn:{
   color : 'white' ,
   border : 'solid 1px white' ,
   borderRadius : '10px' ,
   padding : '10px',
   marginRight:'10%' ,
   marginLeft:'10px'
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
    marginLeft : '5%'
  },

  login_btn:{
   color : 'white',
   fontSize : '15px'
  }
  
 })
);

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor : 'rgb(206 , 0 , 0)' }}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h4" className={classes.title}>
            <b><i>Zomato</i></b>
          </Typography>

          <Button className={classes.login_btn}>Login / Signup</Button>
        
          <Button className={classes.signup_btn}>Add Resturant</Button>
        
        </Toolbar>
      </AppBar>
    </div>
  );
}
