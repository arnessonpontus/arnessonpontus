import React from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#03141c',
    width: '100vw',
    height: '20vh',
  },
  email: {
    width: "80%"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.root}
    >
      <Grid item container direction="row" justify="center" spacing={1} className={classes.email}>
        <Grid item>
          <MailIcon />
        </Grid>
        <Grid item>
          <Typography>arnesson.pontus@gmail.com</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Typography>Copyright © Pontus Arnesson 2021</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
