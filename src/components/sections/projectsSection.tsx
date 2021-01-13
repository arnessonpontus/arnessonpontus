import * as React from 'react';
import { Theme } from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Card } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Bubble from '../bubble';
import Img, { FluidObject } from 'gatsby-image';

import { useStaticQuery, graphql, Link } from 'gatsby';
import { ContentfulProjectItem } from '../../../types/graphql-types'; // eslint-disable-line import/no-unresolved

interface Project {
  node: ContentfulProjectItem;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '90vh',
    textAlign: 'center',
    paddingBottom: '5vh',
  },
  link: {
    color: `white`,
    textDecoration: `none`,
  },
  sectionTitle: {
    marginBottom: '5vh',
  },
  projectCard: {
    paddingTop: '10px',
    backgroundColor: '#0D4560',

    [theme.breakpoints.up('sm')]: {
      width: 220,
    },
    width: '70vw',
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    transition: '0.3s',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: '#11597d',
    },
  },
  subtitleContainer: {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

const ProjectsSection: React.FC = () => {
  const classes = useStyles();

  const projects = useStaticQuery(graphql`
    query ProjectSectionQuery {
      allContentfulProjectItem(limit: 10) {
        edges {
          node {
            id
            title
            updatedAt
            slug
            subTitle
            thumbnail {
              title
              description
              fluid(maxWidth: 150) {
                ...GatsbyContentfulFluid
              }
            }
            description {
              json
            }
          }
        }
      }
    }
  `).allContentfulProjectItem.edges;

  return (
    <Grid
      container
      className={classes.root}
      id="projects"
      spacing={2}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Grid item xs={12}>
        <Typography variant="h3">Projects</Typography>
      </Grid>

      <Grid item container xs={12} justify="center" spacing={2}>
        {projects.map((project: Project, i: number) => (
          <Grid key={i} item>
            <Link className={classes.link} to={project.node.slug || '/'}>
              <Card raised elevation={10} className={classes.projectCard}>
                <Bubble size={200}>
                  <Img
                    fluid={{
                      ...(project.node.thumbnail?.fluid as FluidObject),
                      aspectRatio: 1 / 1,
                    }}
                    alt={project.node.title!}
                  />
                </Bubble>
                <Box
                  component="h3"
                  height={40}
                  style={{ wordWrap: 'break-word' }}
                  fontWeight="fontWeightBold"
                  my={2}
                >
                  {project.node.title}
                </Box>
                <Box
                  fontWeight="fontWeighItalic"
                  fontSize={12}
                  m={1}
                  className={classes.subtitleContainer}
                >
                  {project.node.subTitle}
                </Box>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Grid item>
        <Typography variant="subtitle2"> See more projects here... </Typography>
      </Grid>
    </Grid>
  );
};

export default ProjectsSection;
