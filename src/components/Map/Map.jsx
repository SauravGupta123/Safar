import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/lab/Rating';
import resturant from '../../assets/resturant.jpeg'
import mapStyles from '../../mapStyles';
import useStyles from './styles.js';

const Map = ({setCoordinates,setBounds,coordinates,places,setChildClicked}) => {
  
  const isDesktop = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  


  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA5hdTqBHYGJ1G_kHWq9BmrHampjLpZ9hM" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[150, 150, 50, 50]}
        options={ '' }
        onChange={(e)=>{

          // console.log(e.marginBounds.ne)
          // console.log(e.marginBounds.sw)
          // setCoordinates({lat:e.center.lat,lng:e.center.lng})
          // setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw})
        }}
          onChildClick={(child) => {
             
              setChildClicked(child)
          }
          }
      >

      
        {
  places?.map((place, i) => (
    <div
      className={classes.markerContainer}
      lat={Number(place.latitude)}
      lng={Number(place.longitude)}
      key={i}
    >
      {/* {console.log(place.latitude)} */}
      {!isDesktop ? (
        <LocationOnOutlinedIcon color="primary" fontSize="large" />
      ) : (
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.typography} variant="subtitle2" gutterBottom>
            {place.name}
          </Typography>
          <img
            className={classes.pointer}
            src={place.photo ? place.photo.images.large.url : resturant}
            alt={place.name}
          />
          <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
        </Paper>
      )}
    </div>
  ))
}


      </GoogleMapReact>
    </div>
  );
};

export default Map;
