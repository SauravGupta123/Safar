import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';

const List = ({places}) => {

  // const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();
  const [type, setType] = useState('resturants');
  const [rating, setRating] = useState('');

  return (
    <div className={classes.container}>
      <Typography variant="h4">Food & Dining around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value='resturants'>Resturants</MenuItem>
          <MenuItem value='hotels'>Hotels</MenuItem>
          <MenuItem value='attractions'>Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place,i)=>(
          <Grid item key={i} xs={12}>
             <PlaceDetails place={place}/>    {/* individual place detail */}
          </Grid> 
        ))}
      </Grid>




    </div>
  );
};

export default List;