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
      <Grid item container spacing={1} direction="row" justify="center">
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
