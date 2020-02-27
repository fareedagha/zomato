import React from 'react';

import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar , Toolbar , Button ,TextField ,Typography , Box ,Drawer , Modal , Fade , Backdrop , Divider , Grid , InputAdornment} from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PasswordIcon from '@material-ui/icons/LockOpen';
import FacebookIcon from '@material-ui/icons/Facebook';
import GmailIcon from '@material-ui/icons/Mail';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LoginSignupIcon from '@material-ui/icons/ExitToAppSharp';
import RestaurantIcon from '@material-ui/icons/RestaurantSharp';



const useStyles = makeStyles(theme => ({
  
  // navbar Css  

  root: {
    flexGrow: 1, 
  },

  signup_resturant:{
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

  login_signup_btn:{
   color : 'white',
   fontSize : '15px'
  },

  box:{
  minWidth : '250px'
  },

  //  Modal css  

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid grey',
    boxShadow: theme.shadows[5],
    borderRadius : '5px' ,
    padding: theme.spacing(2, 4, 3),
  },

submit_btn:{
    backgroundColor : 'rgb(9 , 158 , 68)' ,
    marginTop : '20px' ,
    height : '50px' ,
    color : 'white',
    '&:hover': {
      backgroundColor: 'rgb(7 , 124 , 64)',
    },
},

facebook_btn:{
  backgroundColor : 'rgb(66 , 103 , 178)' ,
  marginTop : '20px' ,
  height : '50px' ,
  color : 'white' ,
  '&:hover': {
    backgroundColor: 'rgb(51 , 79 , 136)',
  },
  },
 
//  link_btn : {
//    height : 'auto' ,
//   '&:hover': {
//     textDecoration : 'none'
//   },
//  },


gmail_btn:{
  backgroundColor : 'rgb(206 , 0 , 0)' ,
  marginTop : '20px' ,
  height : '50px' ,
  color : 'white' ,
  '&:hover': {
    backgroundColor: 'rgb(185 , 0 , 0)',
  },
},

// Drawer Css

  list: {
    width: 250,
  },
  fullList: {
    width: '300px',
  }
  
 })
);

export default function Navbar() {
  const classes = useStyles();
   
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignup, setOpenSignup]  = React.useState(false);
  const [leftDrawer, setDrawer] = React.useState(false)

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer(open);
  };


  const handleLoginOpen = () => {
    setOpenSignup(false);
    setOpenLogin(true);
  };

  const handleLoginClose = () => {
    setOpenLogin(false);
    setOpenSignup(false)
  };

  const handleSignUpOpen = () => {
    setOpenLogin(false);
    setOpenSignup(true);
  };

  const handleSignUpClose = () => {
    setOpenLogin(false);
    setOpenSignup(false)
  };

  const sideList = side => (
  <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >

        <Typography variant="h4" className={classes.title}>
          <b><i>Zomato</i></b>
        </Typography>

      <Divider/>

      <List>
        
          <ListItem button onClick={handleLoginOpen}>
            <ListItemIcon> <LoginSignupIcon /> </ListItemIcon>
            <ListItemText primary="Login/Signup" />
          </ListItem>

          <Link to="/addResturant" style={{textDecoration : 'none' , color : 'black'}}>
            <ListItem button>
              <ListItemIcon> <RestaurantIcon /> </ListItemIcon>
              <ListItemText primary="Add Resturant" />
            </ListItem>
          </Link>

      </List>

    </div>  
  );

  return (
    <div className={classes.root}>

      <Drawer open={leftDrawer} onClose={toggleDrawer(false)}>
        {sideList('setDrawer')}
      </Drawer>

      <AppBar position="static" style={{backgroundColor : 'rgb(206 , 0 , 0)' }}>
        <Toolbar>

        <Box display={{ xs: 'block' , sm:'block'  , lg: 'none', xl: 'none' }}>
          <IconButton  edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={toggleDrawer(true)} />
          </IconButton>
       </Box>



          <Typography variant="h4" className={classes.title}>
            <b><i>Zomato</i></b>
          </Typography>


          <Box display={{ xs: 'none' , sm:'none'  , lg: 'block', xl: 'block' }}>
          <Button className={classes.login_signup_btn} onClick={handleLoginOpen} >Login / Signup</Button>
          </Box>

          <Box display={{ xs: 'none' , sm:'none'  , lg: 'block', xl: 'block' }} className={`${classes.box}`}>
            <Link to="/addResturant" style={{textDecoration : 'none'}}>
              <Button className={classes.signup_resturant}>Add Resturant</Button>  
            </Link>
          </Box>

        </Toolbar>
      </AppBar>

      {/* Login Modal  */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openLogin}
        onClose={handleLoginClose}
         closeAfterTransition
        // BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={openLogin}>
        <Grid  xs={10} md={6} lg={4} xl={4}  className={classes.paper}>
            
            <div id="transition-modal-title" style={{textAlign:'center'}}>
             <h2> Login Form </h2>  
            </div>

            <hr/>

            <div id="transition-modal-description">

                <Button fullWidth='true' className={classes.facebook_btn} 
                 startIcon={<FacebookIcon fontSize='large' />}
                > 
                  Login with Facebook  
                </Button>

                <Button fullWidth='true' className={classes.gmail_btn} 
                  startIcon={<GmailIcon/>}
                 > 
                Login with Gmail  
                </Button>

                 <hr/>
                
                <TextField  fullWidth='true' variant='outlined' label='Email'  margin='normal'
                   InputProps={{
                    startAdornment: <InputAdornment position="start"><MailOutlineIcon/></InputAdornment>,
                  }}
                />
                

               <TextField  fullWidth='true' variant='outlined' label='Password' margin='normal'
                   InputProps={{
                    startAdornment: <InputAdornment position="start"><PasswordIcon/></InputAdornment>,
                  }}
                />

                <Button fullWidth='true' className={classes.submit_btn} > Login </Button>

                <hr/>

                <Button fullWidth='true' variant='text' style={{fontSize : '100%'}} onClick={handleSignUpOpen} > <b> CREATE AN ACCOUNT ? </b> </Button>
                
            </div>
            </Grid>
        </Fade>
      </Modal>

      {/* End of Login Modal */}


 {/* Signup Modal */}

 <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openSignup}
        onClose={handleSignUpClose}
         closeAfterTransition
        //  BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={openSignup}>
        <Grid  xs={10} md={6} lg={4} xl={4}  className={classes.paper}>
            
            <div id="transition-modal-title" style={{textAlign:'center'}}>
             <h2> Signup Form </h2>  
            </div>

            <hr/>

            <div id="transition-modal-description">

                
                <TextField  fullWidth='true' variant='outlined' label='Name'  margin='normal'
                   InputProps={{
                    startAdornment: <InputAdornment position="start"><b>N</b></InputAdornment>,
                  }}
                />
                

               <TextField  fullWidth='true' variant='outlined' label='Email' margin='normal'
                   InputProps={{
                    startAdornment: <InputAdornment position="start"><MailOutlineIcon/></InputAdornment>,
                  }}
                />

                <TextField  fullWidth='true' variant='outlined' label='Password' margin='normal'
                   InputProps={{
                    startAdornment: <InputAdornment position="start"><PasswordIcon/></InputAdornment>,
                  }}
                />

                <TextField  fullWidth='true' variant='outlined' label='Re-type Password' margin='normal'
                   InputProps={{
                    startAdornment: <InputAdornment position="start"><PasswordIcon/></InputAdornment>,
                  }}
                />

                <Button fullWidth='true' className={classes.submit_btn} > Signup </Button>
                
                <hr/>     
                
                <Button fullWidth='true' variant='text' style={{fontSize : '100%'}} onClick={handleLoginOpen} > <b> ALL READY MEMBER ?  </b> </Button>
                
            </div>
            </Grid>
        </Fade>
      </Modal>

      {/* End of Login Modal */}




    </div>
  );
}
