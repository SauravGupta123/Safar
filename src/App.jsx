import React,{ useState,useEffect } from 'react'
import { CssBaseline,Grid } from '@mui/material'
import './App.css'
import Header from './components/Header/Header'
import Map from './components/Map/Map'
// import PlaceDetails from './components/PlaceDetails/PlaceDetails'
import List from './components/List/List'
import { getPlaceData } from './api'

function App() {
const [places, setPlaces]= useState([])
const [coordinates,setCoordinates]=useState({});
const [bounds,setBounds]=useState({sw:"", ne: ""});
useEffect(()=>{
  navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
    setCoordinates({lat:latitude,lng:longitude})
  })
},[]);

  useEffect(()=>{
    getPlaceData(bounds.sw, bounds.ne).then((data)=>{
      console.log("Place data found",data);
        setPlaces(data); 
    })
  },[coordinates,bounds])

  return (
    <>
      <CssBaseline />
      <Header/>
      <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
            <List places={places}/>
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
  )
}

export default App
