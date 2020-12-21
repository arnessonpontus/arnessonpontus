import React from 'react';
import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ContentfulRichText from '../components/contentfulRichText';
import { ContentfulBlogPost } from '../../types/graphql-types'; // eslint-disable-line import/no-unresolved

interface Props {
  data: {
    contentfulBlogPost: ContentfulBlogPost;
  };
}

const BlogPostTemplate = (props: Props) => {
  const post: ContentfulBlogPost = props.data.contentfulBlogPost;
  return (
    <Layout>
      <SEO title={'title'} />
      <h2>{post.title}</h2>
      <ContentfulRichText
        document={post.body?.json}
        key={`${post.id}-content`}
      />
      {post.images ? (
        <Img fluid={post.images[0]?.fluid as FluidObject} alt={post.title!} />
      ) : null}
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      id
      body {
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
