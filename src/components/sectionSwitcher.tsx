import React, { useEffect } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { makeStyles, Theme, Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  sections: {
    position: 'fixed',
    right: '3%',
    top: '50%',
    transform: 'translateY(-40%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '12vw',
    height: '30vh',
  },
  section: {
    opacity: 0.7,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: `scale3d(1.05, 1.05, 1)`,
      opacity: 1.0,
    },
  },
  activated: {
    opacity: 1.0,
    transform: `scale3d(1.05, 1.05, 1)`,
  },
  link: {
    textDecoration: 'none',
  },
  circle: {
    opacity: 0.5,
  },
}));

const SectionSwitcher = () => {
  const classes = useStyles();

  const [currentActive, setCurrentActive] = React.useState(0);

  const scrollHandeler = () => {
    const winScroll: number = window.pageYOffset;

    const height: number =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled: number = winScroll / height;

    console.log(scrolled);

    if (scrolled < 0.33) {
      handleActiveChange(0);
    } else if (scrolled > 0.33 && scrolled < 0.66) {
      handleActiveChange(1);
    } else {
      handleActiveChange(2);
    }
  };

  useEffect(() => {
    document.addEventListener('wheel', throttle(scrollHandeler, 200));
  }, []);

  function throttle(func: Function, limit: number) {
    let inThrottle: boolean;
    return function (this: any) {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  function handleActiveChange(i: number) {
    setCurrentActive(i);
  }

  return (
    <div className={classes.sections}>
      <AnchorLink
        to="/#welcome"
        className={classes.link}
        onAnchorLinkClick={() => {
          handleActiveChange(0);
        }}
      >
        <div
          className={clsx(classes.section, {
            [classes.activated]: currentActive == 0,
          })}
        >
          <Typography variant="h6">Welcome</Typography>
          <svg
            className={classes.circle}
            width="24"
            height="24"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="white" />
          </svg>
        </div>
      </AnchorLink>
      <AnchorLink
        to="/#about"
        className={classes.link}
        onAnchorLinkClick={() => {
          handleActiveChange(1);
        }}
      >
        <div
          className={clsx(classes.section, {
            [classes.activated]: currentActive == 1,
          })}
        >
          <Typography variant="h6">About me</Typography>
          <svg
            className={classes.circle}
            width="24"
            height="24"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="white" />
          </svg>
        </div>
      </AnchorLink>
      <AnchorLink
        to="/#projects"
        className={classes.link}
        onAnchorLinkClick={() => {
          handleActiveChange(2);
        }}
      >
        <div
          className={clsx(classes.section, {
            [classes.activated]: currentActive == 2,
          })}
        >
          <Typography variant="h6">Projects</Typography>
          <svg
            className={classes.circle}
            width="24"
            height="24"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="white" />
          </svg>
        </div>
      </AnchorLink>
    </div>
  );
};

export default SectionSwitcher;
