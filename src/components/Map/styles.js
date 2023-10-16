import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  paper: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100px',
  },
  mapContainer: {
    height: '85vh',
    width: '100%',
    marginTop:'10px'
  },
  markerContainer: {
    position: 'absolute',
    border: '2px solid green', // Changed border and border-color
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '&:hover': {
      zIndex: 2,
    },
  },
  pointer: {
    cursor: 'pointer',
  },
}));
