import React from 'react';
import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';

import SEO from '../components/seo';
import ContentfulRichText from '../components/contentfulRichText';
import { ContentfulProjectItem } from '../../types/graphql-types'; // eslint-disable-line import/no-unresolved

import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles';
import { Typography, Grid, Box, Chip, Link } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import Bubble from '../components/bubble';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: '5vh',
    minHeight: '90vh',
  },
  titleContainer: {
    textAlign: 'center',
    fontStyle: 'italic',
    minHeight: '30vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0 20px',
  },
  heroWrapper: {
    width: '100%',
    marginBottom: '5vh',
  },
  hero: {
    maxHeight: '60vh',
  },
  about: {
    paddingLeft: '10vw',
    paddingRight: '10vw',
  },
  link: {
    color: `white`,
    textDecoration: `none`,
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  carousel: {
    marginBottom: '5vh',
  },
  videoWrapper: {
    position: 'relative',
    overflow: 'hidden',
    width: '80%',
    paddingBottom: '45.2%',
    marginBottom: '5vh',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  imageWrapper: {
    width: '80vw',
    [theme.breakpoints.up('md')]: {
      width: '65vw',
    },
  },
  demoWrapper: {
    marginBottom: '5vh',
  },
  demoButton: {
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    opacity: 0.8,
    textDecoration: 'none',
  },
  bottomItem: {
    marginBottom: '4vh',
  },
  keyword: {
    marginRight: 10,
    marginBottom: '10px',
  },
}));

interface Props {
  data: {
    contentfulProjectItem: ContentfulProjectItem;
  };
}

const ProjectTemplate = (props: Props) => {
  const classes = useStyles();
  const project = props.data.contentfulProjectItem;

  return (
    <Grid
      direction="column"
      alignItems="center"
      container
      className={classes.root}
    >
      <SEO title={project.title!} />
      <Grid item>
        <Box className={classes.titleContainer}>
          <Typography variant="h3">{project.title}</Typography>

          <Typography variant="h6">{project.subTitle}</Typography>
        </Box>
      </Grid>
      <Grid item className={classes.heroWrapper}>
        <Img
          className={classes.hero}
          fluid={project.hero?.fluid as FluidObject}
          alt={project.title!}
        />
      </Grid>
      {project.videoLink ? (
        <Grid item className={classes.videoWrapper}>
          <iframe
            className={classes.video}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            src={project.videoLink}
            title="video"
            scrolling="no"
          ></iframe>
        </Grid>
      ) : null}
      <Grid item className={classes.about}>
        <ContentfulRichText
          document={project.description?.json}
          key={`${project.id}-content`}
        />
      </Grid>
      {project.images ? (
        <Carousel
          autoPlay={project.images?.length > 1 ? true : false}
          interval={6000}
          animation="slide"
          className={classes.carousel}
          navButtonsAlwaysInvisible={project.images?.length > 1 ? false : true}
          indicators={project.images?.length > 1 ? true : false}
        >
          {project.images?.map((img, i) => (
            <Grid item key={i} className={classes.imageWrapper}>
              <Link
                href={img?.fluid?.src!}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img
                  fluid={{
                    ...(img?.fluid as FluidObject),
                    aspectRatio: 16 / 9,
                  }}
                  imgStyle={{
                    backgroundColor: '#f5f5f5',
                    objectFit: 'contain',
                  }}
                  alt={project.title!}
                />
              </Link>
            </Grid>
          ))}
        </Carousel>
      ) : null}

      {project.demo ? (
        <Grid item className={classes.demoWrapper}>
          <Bubble size={80}>
            <Link
              className={classes.demoButton}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>DEMO</span>
              <PlayArrowIcon />
            </Link>
          </Bubble>
        </Grid>
      ) : null}
      <Grid
        className={classes.about}
        alignItems="center"
        justify="space-between"
        item
        container
      >
        <Grid item className={classes.bottomItem}>
          {project.keywords?.map((keyword, i) => (
            <Chip key={i} className={classes.keyword} label={keyword} />
          ))}
        </Grid>

        <Grid item className={classes.bottomItem}>
          {project.report ? (
            <Link
              className={classes.link}
              href={project.report.file?.url!}
              target="_blank"
              rel="noopener noreferrer"
            >
              <DescriptionIcon fontSize="large" />
              <Box marginLeft={2}>Report</Box>
            </Link>
          ) : null}
          {project.githubLink ? (
            <Link
              className={classes.link}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" />
              <Box marginLeft={2}>Find on Github</Box>
            </Link>
          ) : null}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProjectItem(slug: { eq: $slug }) {
      title
      id
      subTitle
      videoLink
      githubLink
      report {
        title
        file {
          url
        }
      }
      demo
      keywords
      description {
        json
      }
      hero {
        title
        description
        fluid(maxWidth: 4000) {
          ...GatsbyContentfulFluid
        }
      }
      images {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
