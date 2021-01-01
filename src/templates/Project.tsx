import React from 'react';
import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ContentfulRichText from '../components/contentfulRichText';
import { ContentfulProjectItem } from '../../types/graphql-types'; // eslint-disable-line import/no-unresolved

import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: '#0F2635',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    minHeight: '90vh',
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
      <div className={classes.root}>
        <SEO title={'title'} />
        <h2>{project.title}</h2>
        <ContentfulRichText
          document={project.description?.json}
          key={`${project.id}-content`}
        />
        {project.images ? (
          <Img
            fluid={project.images[0]?.fluid as FluidObject}
            alt={project.title!}
          />
        ) : null}
        {project.videolink ? (
          <a href={project.videolink}>link to video</a>
        ) : null}
      </div>
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
      videolink
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
