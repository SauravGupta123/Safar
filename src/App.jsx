import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid ,Rating} from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import List from './components/List/List';
import { getPlaceData } from './api';

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({lat: 28.613017599999978, lng: 76.97858559999997});
  const[childClicked,setChildClicked]=useState({index:""});
  const[isLoading,setisLoading]= useState(false);
  const [bounds, setBounds] = useState({
    ne:
    {
      lat: 28.6250726754745, lng: 76.9927476635986
    },
    sw: {

      lat: 28.593425151145183, lng: 76.95584046755368
    }
  });
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  

  // const[bounds,setBounds]=useState(null);

  // useEffect(() => {
  //   const controller = new AbortController();

  //   console.log("u1 called");
  //   navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
  //     setCoordinates({ lat: latitude, lng: longitude });
     

  //   });

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);


  // useEffect(() => {
  //   console.log(childClicked);

    
  // }, [childClicked]);






  useEffect(() => {
    setisLoading(true);
    console.log("u2 called");

      if(bounds){
        getPlaceData(type,bounds.sw,bounds.ne)
        .then((data) => {
          console.log("Place data found", data);
          setPlaces(data);
          setFilteredPlaces([])
          setisLoading(false);
        })  
        .catch((error) => {
          console.error(error);
        });
      }
  

    
  }, [type]);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [rating]);



  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates}/>
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          {places && places.length > 0 ? (
            <List 
            places={filteredPlaces.length ? filteredPlaces : places}
             childClicked={childClicked} 
             isLoading={isLoading} 
             type={type}
             setType={setType}
             rating={rating}
             setRating={setRating}
            />
          ) : (
            <p>No places to display</p>
          )}
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
           
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
