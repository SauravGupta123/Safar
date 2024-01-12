import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  parent:{
      display:'inline-block',
      marginLeft:'1rem',


  },
  formControl: {
    margin: theme.spacing(1), minWidth: 3000, marginBottom: '300px',
  },

  label:{
    color:'green',
  },



  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',marginBottom:'0px'
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
}));