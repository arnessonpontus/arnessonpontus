import * as React from 'react';
import { Link } from 'gatsby';
import Image from '../image';

import { Theme } from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#fff',
    minHeight: '90vh',
  },
  imageWrapper: {
    maxWidth: `300px`,
    marginBottom: `1.45rem`,
  },
}));

const WelcomeSection: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="welcome">
      <Typography variant="h3">Hi people</Typography>
      <Typography variant="body1">Welcome to your new Gatsby site</Typography>

      <div className={classes.imageWrapper}>
        <Image />
      </div>
      <ul>
        <li>
          <Link to="/page-2/">Go to page 2</Link>
        </li>
        <li>
          <Link to="/blogPosts/">Go to blog posts (Source: Contentful)</Link>
        </li>
      </ul>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam numquam
        aspernatur impedit unde quo ipsum repellendus vitae non libero nisi
        mollitia neque quia, quidem cum debitis animi amet natus! Atque?
      </Typography>
    </div>
  );
};

export default WelcomeSection;
