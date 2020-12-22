import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import WelcomeSection from '../components/sections/welcomeSection';
import AboutMeSection from '../components/sections/aboutMeSection';
import ProjectsSection from '../components/sections/projectsSection';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <WelcomeSection />
    <AboutMeSection />
    <ProjectsSection />
  </Layout>
);

export default IndexPage;
