import * as React from 'react';
import Image from '../image';

import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Bubble from '../bubble';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '90vh',
    textAlign: 'center',
  },
}));

const WelcomeSection: React.FC = () => {
  const classes = useStyles();

  function handleOnClick() {
    console.log('welcome section');
  }

  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      id="welcome"
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <Bubble width={250} height={250} onClicked={handleOnClick}>
          <Image />
        </Bubble>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">Hi people</Typography>
        <Typography variant="body1">Welcome to your new Gatsby site</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam numquam
          aspernatur impedit unde quo ipsum repellendus vitae non libero nisi
          mollitia neque quia, quidem cum debitis animi amet natus! Atque?
        </Typography>
      </Grid>
    </Grid>
  );
};

export default WelcomeSection;
