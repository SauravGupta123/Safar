import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/lab/Rating';

import mapStyles from '../../mapStyles';
import useStyles from './styles.js';

const Map = ({setCoordinates,setBounds,coordinates}) => {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  


  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAsJufb2ilCHs7WktSoPfd95oIvY81TU4M" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={ '' }
        onChange={(e)=>{
          setCoordinates({lat:e.center.lat,lng:e.center.lng})
          setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw})
        }}
        onChildClick={(child) => setChildClicked(child)}
      >

      </GoogleMapReact>
    </div>
  );
};

export default Map;
