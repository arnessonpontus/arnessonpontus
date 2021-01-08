import React from 'react';
import { graphql } from 'gatsby';
import Img, { FixedObject, FluidObject } from 'gatsby-image';

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
    paddingLeft: '10vw',
    paddingRight: '10vw',
    paddingBottom: '5vh',
    paddingTop: '5vh',
    minHeight: '90vh',
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
    githubLogo: ChildImage;
    reportLogo: ChildImage;
  };
}

type ChildImage = {
  childImageSharp: {
    fixed: FixedObject;
  };
};

const ProjectTemplate = (props: Props) => {
  const classes = useStyles();
  const project = props.data.contentfulProjectItem;
  const ghLogo = props.data.githubLogo;
  const reportLogo = props.data.reportLogo;

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
          <Box textAlign="center" fontStyle="italic">
            <Typography variant="h3">{project.title}</Typography>

            <Typography variant="h6">{project.subTitle}</Typography>
          </Box>
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
        <ContentfulRichText
          document={project.description?.json}
          key={`${project.id}-content`}
        />
        <Grid alignItems="center" justify="space-between" item container>
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
                <Img fixed={reportLogo.childImageSharp?.fixed} />
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
                <Img fixed={ghLogo.childImageSharp?.fixed} />
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
  query IconsAndProjectBySlug($slug: String!) {
    githubLogo: file(relativePath: { eq: "logos/github-logo-white.png" }) {
      childImageSharp {
        fixed(width: 35, height: 35) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    reportLogo: file(relativePath: { eq: "logos/report-logo-white.png" }) {
      childImageSharp {
        fixed(width: 35, height: 35) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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
      images {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
