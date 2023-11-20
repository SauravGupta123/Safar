import axios from 'axios';
const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'




export const getPlaceData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': 'f325ed34f3mshe0e437172d2631bp17f42ajsnd1a20f4552c8',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};