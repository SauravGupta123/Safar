import { makeStyles } from '@mui/styles';


export default makeStyles(() => ({
  cards:{
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    backgroundColor:"blue",
  },



  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  address:{
    
    width:330,
    fontSize:14
  }

}));