import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import WelcomeSection from '../components/sections/welcomeSection';
import AboutMeSection from '../components/sections/aboutMeSection';
import ProjectsSection from '../components/sections/projectsSection';

import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles';
import SectionSwitcher from '../components/sectionSwitcher';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background:
      'linear-gradient(#87a8b9 0%, #215d7a 33%, #063247 66%, #0f2635 100%)',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '20vw',
      paddingRight: '20vw',
    },
    paddingLeft: '10vw',
    paddingRight: '10vw',
  },
}));

const IndexPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SEO title="Home" />
      <Hidden mdDown>
        <SectionSwitcher />
      </Hidden>
      <WelcomeSection />
      <AboutMeSection />
      <ProjectsSection />
    </div>
  );
};

export default IndexPage;
