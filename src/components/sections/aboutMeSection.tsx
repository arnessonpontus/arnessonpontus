import * as React from 'react';
import { Link } from 'gatsby';
import Image from '../image';
import { Theme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '90vh',
    textAlign: 'center',
    marginTop: '10vh',
  },
  imageWrapper: {
    width: `250px`,
    marginBottom: `1.45rem`,
  },
  image: {
    borderRadius: '50%',
    overflow: 'hidden',
  },
  link: {
    textDecoration: 'none',
    color: '#00E0FF',
    fontStyle: 'italic',
  },
}));

const AboutMeSection: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        className={classes.root}
        spacing={2}
        id="about"
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Grid item className={classes.imageWrapper}>
          <div className={classes.image}>
            <Image />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">About Me</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1">
            I am currently studying my last year at M.Sc. in Media Technology at
            Linköping University. I am interested in several different areas
            including Machine Learning, Computer vision, Computer graphics, Web,
            Mobile Applications etc. I like to live an active lifestyle and move
            my body including playing sports, going to the gym and running in
            the nature. I also enjoy hobby programming projects, spending time
            with friends and family or just relaxing with a series of film.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMeSection;
