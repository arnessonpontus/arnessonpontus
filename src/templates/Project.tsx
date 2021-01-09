import React from 'react';
import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ContentfulRichText from '../components/contentfulRichText';
import { ContentfulProjectItem } from '../../types/graphql-types'; // eslint-disable-line import/no-unresolved

import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles';
import { Typography, Grid, Box, Chip, Link } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: '#0F2635',
    paddingBottom: '5vh',
    minHeight: '90vh',
  },
  heroWrapper: {
    width: '100%',
    marginBottom: '5vh',
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
    marginTop: '5vh',
    marginBottom: '5vh',
  },
  imageWrapper: {
    maxHeight: '50vh',
    width: '80vw',
    [theme.breakpoints.up('md')]: {
      width: '50vw',
    },
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
    <Layout>
      <Grid
        direction="column"
        alignItems="center"
        container
        className={classes.root}
      >
        <SEO title={'title'} />
        <Grid item>
          <Box
            textAlign="center"
            fontStyle="italic"
            height="30vh"
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <Typography variant="h3">{project.title}</Typography>

            <Typography variant="h6">{project.subTitle}</Typography>
          </Box>
        </Grid>
        <Grid item className={classes.heroWrapper}>
          <Img
            style={{ maxHeight: '60vh' }}
            fluid={project.thumbnail?.fluid as FluidObject}
            alt={project.title!}
          />
        </Grid>
        <Grid item className={classes.about}>
          <ContentfulRichText
            document={project.description?.json}
            key={`${project.id}-content`}
          />
        </Grid>
        <Carousel
          interval={6000}
          animation="slide"
          className={classes.carousel}
          navButtonsAlwaysVisible
          indicators={false}
        >
          {project.images?.map((img, i) => (
            <Grid item key={i} className={classes.imageWrapper}>
              <Link
                href={img?.fluid?.src!}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img fluid={img?.fluid as FluidObject} alt={project.title!} />
              </Link>
            </Grid>
          ))}
        </Carousel>
        <Grid
          className={classes.about}
          alignItems="center"
          justify="space-between"
          item
          container
        >
          <Grid item>
            {project.keywords?.map((keyword, i) => (
              <Chip
                key={i}
                className={classes.keyword}
                icon={<FaceIcon />}
                label={keyword}
              />
            ))}
          </Grid>
          <Grid item>
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
    </Layout>
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
      keywords
      description {
        json
      }
      thumbnail {
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
