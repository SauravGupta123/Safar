import React from 'react'
import { Box,Typography,Card, CardMedia,CardContent, CardActions,Chip ,Button} from '@mui/material'
import { LocationOn } from '@mui/icons-material'
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@mui/material/Rating';
import mystyles from './styles'

function PlaceDetails({place}) {
  const classes= mystyles();
  return (
    <Card elevation={6}>
    <CardMedia
      style={{ height: 350 }}
      image={place.photo ? place.photo.images.large.url : 'https://www.foodservicehttps://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frestaurant&psig=AOvVaw2HPD0GxVlQY-Xil0dYlugo&ust=1697394956601000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLi50I2X9oEDFQAAAAAdAAAAABAEandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
      title={place.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5">{place.name}</Typography>
      <Box display="flex" justifyContent="space-between" my={2}>
        <Rating name="read-only" value={Number(place.rating)} readOnly />
        <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
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
          <img src={award.images.small} />
          <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
        </Box>
      ))}

      {place?.cuisine?.map(({ name }) => (
        <Chip key={name} size="small" variant='outlined' label={name} className={classes.chip} />
      ))}

      {place.address && (
        <Typography  variant="body2" color="textSecondary" className={classes.subtitle}>
          <LocationOn />{place.address}
        </Typography>
      )}
      {place.phone && (
        <Typography variant="body2" color="textSecondary" className={classes.spacing}>
          <PhoneIcon /> {place.phone}
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
  </Card>
  )
}

export default PlaceDetails
