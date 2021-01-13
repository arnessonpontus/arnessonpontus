import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Theme } from '@material-ui/core/styles';

import Img from 'gatsby-image';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '90vh',
    textAlign: 'center',
    marginTop: '10vh',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '10vh',
    },
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

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "magnifying_glass.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

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
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
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
            Mobile Applications etc. I like to live an active lifestyle by for
            example playing sports, going to the gym or having a run in the
            nature. I also enjoy hobby programming projects, spending time with
            friends and family or just relaxing with a tv series or film.
          </Typography>
          <br />
          <Typography variant="body1">
            If you want to contact me of any reason, don't hesitate to send me
            an email or contact me in any other way.{' '}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMeSection;
