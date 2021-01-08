import * as React from 'react';
import { Theme } from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
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
    marginTop: '10vh',
  },
  link: {
    color: `white`,
    textDecoration: `none`,
  },
}));

const ProjectsSection: React.FC = () => {
  const classes = useStyles();

  function handleOnClick(text: string) {
    console.log('project ' + text);
  }

  const projects = useStaticQuery(graphql`
    query ProjectSectionQuery {
      allContentfulProjectItem(limit: 10) {
        edges {
          node {
            id
            title
            updatedAt
            slug
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
      spacing={6}
      id="projects"
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Grid item xs={12}>
        <Typography variant="h3">Projects</Typography>
      </Grid>

      <Grid container item xs={12} justify="center" spacing={2}>
        {projects.map((project: Project, i: number) => (
          <Grid key={i} item>
            <Link className={classes.link} to={project.node.slug || '/'}>
              <Bubble
                onClicked={() => handleOnClick(i.toString())}
                width={200}
                height={200}
              >
                <Img
                  fluid={{
                    ...(project.node.thumbnail?.fluid as FluidObject),
                    aspectRatio: 1 / 1,
                  }}
                  alt={project.node.title!}
                />
              </Bubble>
              <Typography variant="subtitle1">
                <Box fontWeight="fontWeightBold" m={1}>
                  {project.node.title}
                </Box>
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Typography> See more projects here... </Typography>
    </Grid>
  );
};

export default ProjectsSection;
