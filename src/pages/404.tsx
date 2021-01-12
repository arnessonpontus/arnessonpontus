import * as React from 'react';

import SEO from '../components/seo';

const NotFoundPage: React.FC = () => (
  <div
    style={{
      backgroundColor: '#0F2635',
      height: '90vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </div>
);

export default NotFoundPage;
