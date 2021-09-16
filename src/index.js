import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// export default function ContainedButtons() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Button variant="contained">Default</Button>
//       <Button variant="contained" color="primary">
//         Primary
//       </Button>
//       <Button variant="contained" color="secondary">
//         Secondary
//       </Button>
//       <Button variant="contained" disabled>
//         Disabled
//       </Button>
//       <Button variant="contained" color="primary" href="#contained-buttons">
//         Link
//       </Button>
//     </div>
//   );
// }