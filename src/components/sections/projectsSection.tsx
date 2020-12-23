import * as React from 'react';
import { Theme } from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '90vh',
    textAlign: 'center',
  },
  paper: {
    height: 140,
    width: 140,
    borderRadius: '50%',
    transition: 'transform 0.15s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale3d(1.1, 1.1, 1)',
    },
  },
}));

const ProjectsSection: React.FC = () => {
  const classes = useStyles();

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
        {[0, 1, 2].map((value) => (
          <Grid key={value} item>
            <Paper elevation={10} className={classes.paper} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProjectsSection;
