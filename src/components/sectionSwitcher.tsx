import React, { useEffect, useState } from 'react';
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
      transform: `scale3d(1.1, 1.1, 1)`,
      opacity: 1.0,
    },
  },
  activated: {
    opacity: 1.0,
    transform: `scale3d(1.1, 1.1, 1)`,
  },
  link: {
    textDecoration: 'none',
  },
  circle: {
    opacity: 1.0,
  },
}));

let ticking = false;

const SectionSwitcher = () => {
  const classes = useStyles();

  const [currentActive, setCurrentActive] = useState(0);

  const scrollHandeler = () => {
    const winScroll: number = window.pageYOffset;

    const welcomeSection: HTMLElement | null = document.getElementById(
      'welcome'
    );
    const aboutSection: HTMLElement | null = document.getElementById('about');
    const appbar: HTMLElement | null = document.getElementById('appbar');

    let welcomeHeight: number = 0;
    let aboutHeight: number = 0;
    let appBarHeight: number = 0;

    if (welcomeSection) {
      welcomeHeight = welcomeSection.offsetTop + welcomeSection.offsetHeight;
    }

    if (aboutSection) {
      aboutHeight = aboutSection.offsetTop + aboutSection.offsetHeight;
    }

    if (appbar) {
      appBarHeight = appbar.offsetTop + appbar.offsetHeight;
    }

    if (
      winScroll > welcomeHeight - appBarHeight &&
      winScroll < aboutHeight - appBarHeight
    ) {
      setCurrentActive(1);
    } else if (winScroll >= aboutHeight - appBarHeight) {
      setCurrentActive(2);
    } else {
      setCurrentActive(0);
    }
  };

  function scrolled() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        scrollHandeler();
        ticking = false;
      });
  
      ticking = true;
    }
  }

  useEffect(() => {
    scrollHandeler();
    window.addEventListener('scroll', scrolled, false);

    return () => window.removeEventListener('scroll', scrolled, false);
  }, []);

  

  return (
    <div className={classes.sections}>
      <AnchorLink
        to="/#welcome"
        className={classes.link}
        onAnchorLinkClick={() => {
          setCurrentActive(0);
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
          setCurrentActive(1);
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
          setCurrentActive(2);
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
