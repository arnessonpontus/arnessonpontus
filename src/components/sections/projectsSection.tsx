import * as React from 'react';
import { Theme } from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Bubble from '../bubble';
import Image from '../image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { BlogPagesQueryQuery } from '../../../types/graphql-types'; // eslint-disable-line import/no-unresolved

interface post {
  item: BlogPagesQueryQuery;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '90vh',
    textAlign: 'center',
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

  const posts = useStaticQuery(graphql`
    query BlogPagesQuery {
      allContentfulBlogPost(limit: 10) {
        edges {
          node {
            id
            title
            updatedAt
            slug
            images {
              title
              description
              file {
                url
              }
            }
            body {
              json
            }
          }
        }
      }
    }
  `).allContentfulBlogPost.edges;

  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      id="projects"
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Grid item xs={12}>
        <Typography variant="h3">Projects</Typography>
      </Grid>

      <Grid container item xs={12} justify="center" spacing={6}>
        {posts.map((post: any, i: number) => (
          <Grid key={i} item>
            <Link className={classes.link} to={post.node.slug || '/'}>
              <Bubble
                onClicked={() => handleOnClick(post.node.slug)}
                width={200}
                height={200}
              >
                <Image></Image>
              </Bubble>
              <p>{post.node.title}</p>
            </Link>
          </Grid>
        ))}
      </Grid>
      <p> See more projects here... </p>
    </Grid>
  );
};

export default ProjectsSection;
