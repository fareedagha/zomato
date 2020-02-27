import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class  MediaCard extends React.Component {

  constructor(){
      super();
      
      this.state = {
        resturantData :[
         {
           name : 'Zomato' ,
           location : 'karachi' ,
           description : 'The best Place for BBQ Cuisine' ,
           image : require('../../../images/res1.jpg')
        } ,

        {
            name : 'Al-buraq' ,
            location : 'Lahore' ,
            description : 'Come to make historical moments with your relative' ,
            image : require('../../../images/res2.jpg')
         } ,

         {
            name : 'KFC' ,
            location : 'Multan' ,
            description : 'KFC is one of the oldest resturants in city' ,
            image : require('../../../images/res3.jpg')
         } ,

         {
            name : 'McDonland' ,
            location : 'karachi' ,
            description : 'The best place for fast foood' ,
            image : require('../../../images/res4.jpg')
         } ,

         {
            name : 'Shaheen Shinwari' ,
            location : 'karachi' ,
            description : 'Come with your friends and treat your self with magical dinner' ,
            image : require('../../../images/res5.jpg')
         } ,

         {
            name : 'shahi kila' ,
            location : 'lahore' ,
            description : 'one of the oldest place in country' ,
            image : require('../../../images/res6.jpg')
         } ,
        ]
      }

    }
render(){

const {resturantData} = this.state;

  return (

    <div style={{padding : '20px' }}>

        <div style={{marginLeft:'5%' , marginTop:'2%'}} >
        <h2 > TOP RESTURANTS </h2>
        <p> Explore curated lists of top restaurants, cafes, pubs, and bars in Durban, based on trends </p>
        </div>
        {/* <hr/> */}

        <Grid  xs={12} sm={12} lg={10} 
                container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="center"
                style={{margin : '2px auto'}}
            >

      { resturantData.map((val , ind) => {
        return(
            <Grid item xs={12} sm={6} md={3} key={ind}> 
            <Card style={{maxWidth : 345 , height : 300 }}>
            <CardActionArea>
              <CardMedia
                style={{height : 150 }}
                image={val.image}
                // title={val.name}
              />
              <CardContent>
                
                <Typography gutterBottom variant="h5" component="h2">
                 {val.name}
                </Typography>
      
                <Typography variant="body2" color="textSecondary" component="p">
                  {val.description}
                </Typography>
      
              </CardContent>
            </CardActionArea>
      
            <CardActions>
              
              <Button size="small" color="primary">
                Share
              </Button>

              <Button size="small" color="primary">
                Learn More
              </Button>
            
            </CardActions>
          </Card>
         </Grid> 
      )
     })
   }
   </Grid>
  </div>
  )}
}

export default MediaCard;
