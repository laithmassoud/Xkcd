import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views'



const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    margin:'auto'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 500,
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
});

class Pics extends React.Component {
 
state = {
    activeStep: 0
  };


  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };


  
   render() {
     
     let photo = this.props.items.map(item =>{
       return(
        {
          id:item.id,
          safe_title: item.safe_title,
          imgPath: `https://imgs.xkcd.com/comics${item.img}`
        }
)
     })     
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
           
        </Paper>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {photo.map(step => (
            <img key={step.id} className={classes.img} src={step.imgPath} alt={step.safe_title} />
          ))}
        </SwipeableViews>
        
    <MobileStepper
          variant="text"
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
    />
      </div>
    );
  }
}

Pics.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Pics);