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
          <Typography variant="h3">About me</Typography>
          <Typography variant="body1">
            Welcome to your new Gatsby site
          </Typography>
        </Grid>

        <Grid item container xs={12} justify="center">
          <List>
            <ListItem>
              <Link className={classes.link} to="/page-2/">
                Go to page 2
              </Link>
            </ListItem>
            <ListItem>
              <Link className={classes.link} to="/blogPosts/">
                Go to blog posts (Source: Contentful)
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam numquam
            aspernatur impedit unde quo ipsum repellendus vitae non libero nisi
            mollitia neque quia, quidem cum debitis animi amet natus! Atque?
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMeSection;
