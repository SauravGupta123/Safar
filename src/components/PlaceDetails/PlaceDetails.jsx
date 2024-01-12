import React from 'react'
import { Box,Typography,Card, CardMedia,CardContent, CardActions,CardActionArea ,Chip ,Button} from '@mui/material'
import { LocationOn,  } from '@mui/icons-material'

import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@mui/material/Rating';
import mystyles from './styles'
import resturant from '../../assets/resturant.jpeg';


const PlaceDetails = ({ place, selected, refProp }) => {

  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const classes = mystyles();

  return (
  
  

    <Card elevation={6} className={classes.cards } variant="outlined" sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } , marginBottom: '8px', boxShadow: '10px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) inset',}}>
      <CardActionArea>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : resturant}
        title={place.name}
        sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="flex-start">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.large} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOn   fontSize="large"/>
            <div className={classes.address}>
                  {place.address}
            </div>
           
          </Typography>
        )}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon sx={{ marginLeft:'7px'}}/> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>
      </CardActions>
      </CardActionArea>
    </Card>

  );
};

export default PlaceDetails;