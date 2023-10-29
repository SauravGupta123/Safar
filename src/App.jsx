import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import List from './components/List/List';
import { getPlaceData } from './api';

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    console.log("u1 called");

    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });

    return () => {
      controller.abort();
    };
  }, []);



  useEffect(() => {
    if (bounds && coordinates) {
      const controller = new AbortController();
      console.log("u2 called");
      getPlaceData(bounds.sw, bounds.ne)
      .then((data) => {
        console.log("Place data found", data);
        setPlaces(data);
      })
      .catch((error) => {
        console.error(error);
      });
      
  
      return () => {
        controller.abort();
      };
    }
  }, [ bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          {places && places.length > 0 ? (
            <List places={places} childClick />
          ) : (
            <p>No places to display</p>
          )}
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
