import * as React from 'react';
import { Theme } from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Bubble from '../bubble';
import Image from '../image';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '90vh',
    textAlign: 'center',
  },
}));

const ProjectsSection: React.FC = () => {
  const classes = useStyles();

  function handleOnClick(i: number) {
    console.log('project ' + i);
  }

  return (
    <Grid
      container
      className={classes.root}
      spacing={10}
      id="projects"
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Grid item xs={12}>
        <Typography variant="h3">Projects</Typography>
      </Grid>

      <Grid container justify="center" spacing={2}>
        {[0, 1, 2].map((value, i) => (
          <Grid key={value} item>
            <Bubble onClicked={() => handleOnClick(i)} width={200} height={200}>
              <Image></Image>
            </Bubble>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProjectsSection;
