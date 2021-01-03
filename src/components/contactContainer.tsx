import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '10vh',
    maxWidth: '50vh',
    backgroundColor: '#ebebeb',
    marginTop: '20px',
    borderRadius: '20px',
  },
  link: {
    color: `white`,
    textDecoration: `none`,
  },
  iconWrapper: {
    width: '12%',
    transition: 'transform 0.2s ease-in-out',
    cursor: 'pointer',
    filter: `drop-shadow(2px 4px 3px #b6b4b4)`,
    '&:hover': {
      transform: `scale3d(1.2, 1.2, 1)`,
      filter: `drop-shadow(3px 5px 5px #b6b4b4)`,
    },
  },
}));

const ContactContainer: React.FC = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      fbLogo: file(relativePath: { eq: "logos/fb-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mailLogo: file(relativePath: { eq: "logos/mail-logo-outline.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cvLogo: file(relativePath: { eq: "logos/cv-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      githubLogo: file(relativePath: { eq: "logos/github-logo-black.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkedinLogo: file(relativePath: { eq: "logos/linkedin-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Grid
      container
      justify="space-around"
      alignItems="center"
      direction="row"
      className={classes.root}
    >
      <Grid item className={classes.iconWrapper}>
        <a
          href="mailto:aresson.pontus@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fluid={data.mailLogo.childImageSharp.fluid} />
        </a>
      </Grid>
      <Grid item className={classes.iconWrapper}>
        <a
          href="https://www.facebook.com/pontus.arnesson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fluid={data.fbLogo.childImageSharp.fluid} />
        </a>
      </Grid>
      <Grid item className={classes.iconWrapper}>
        <a
          href="https://github.com/arnessonpontus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fluid={data.githubLogo.childImageSharp.fluid} />
        </a>
      </Grid>
      <Grid item className={classes.iconWrapper}>
        <a
          href="https://www.linkedin.com/in/pontus-arnesson-2a2212151/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fluid={data.linkedinLogo.childImageSharp.fluid} />
        </a>
      </Grid>
      <Grid item className={classes.iconWrapper}>
        <a
          href="files/CV_2019_Pontus.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fluid={data.cvLogo.childImageSharp.fluid} />
        </a>
      </Grid>
    </Grid>
  );
};

export default ContactContainer;
