import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
//import Button from '@material-ui/core/Button';



const styles = theme => ({
  img: {
    height: 500,
    maxWidth: 300,
    overflow: 'hidden',
    width: '100%',
  },
  Paper:{
    margin:"2rem"
  }
});


const Pics = props => {
  console.log(props.items);
  const {classes} = props;
    
  return (
    <div>
      <Paper className={classes.Paper} elevation={4}>
      <img  className={classes.img} src={props.items.img} alt={props.items.safe_title} />
      <p>{props.items.alt}</p>
      </Paper>
    </div>
  );
}

Pics.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Pics);