import axios from 'axios';
const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



export const getPlaceData= async(sw,ne)=>{

    const options = {

        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng
         },
        headers: {
          'X-RapidAPI-Key': 'dea3e114dfmsh91e213d727e46bep1e9de5jsn100cb0e2a6c3',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      };
      
    try {
        const {data:{data}} = await axios.request(URL, options);
        
        return data;
    } catch (error) {
        console.error(error);
    }
}