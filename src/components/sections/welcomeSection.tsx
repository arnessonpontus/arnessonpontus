import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Bubble from '../bubble';
import ContactContainer from '../contactContainer';

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

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

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
          <Link
            href={data.placeholderImage.childImageSharp.fluid.src}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </Link>
        </Bubble>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">Welcome</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body1">
          Hi and welcome to my website! Here you can read more about me, find my
          contact information and see preivous project
        </Typography>
      </Grid>
      <ContactContainer />
    </Grid>
  );
};

export default WelcomeSection;
