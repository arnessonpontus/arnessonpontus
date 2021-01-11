import React from 'react';
import Layout from './src/components/layout';
import NoSsr from '@material-ui/core/NoSsr';

export const wrapRootElement = ({ element }) => {
  return (
    <NoSsr>
      <Layout>{element}</Layout>
    </NoSsr>
  );
};
