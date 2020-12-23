import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import WelcomeSection from '../components/sections/welcomeSection';
import AboutMeSection from '../components/sections/aboutMeSection';
import ProjectsSection from '../components/sections/projectsSection';

import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: 'linear-gradient(#87A8B7 0%, #0F2635 100%)',
    paddingLeft: '10vw',
    paddingRight: '10vw',
  },
}));

const IndexPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <SEO title="Home" />
        <WelcomeSection />
        <AboutMeSection />
        <ProjectsSection />
      </div>
    </Layout>
  );
};

export default IndexPage;