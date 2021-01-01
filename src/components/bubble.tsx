import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

type Props = {
  children: React.ReactNode;
  width: number;
  height: number;
  onClicked: () => void;
};

const useStyles = makeStyles({
  bubbleBorder: (props: Props) => ({
    width: props.width,
    height: props.height,
    borderWidth: '4px',
    borderColor: 'white',
    borderStyle: 'solid',
    borderRadius: '50%',
  }),
  contentWrapper: (props: Props) => ({
    width: props.width * 0.9 - 6, // subtract Line width
    height: props.height * 0.9 - 6,
    borderRadius: '50%',
    transition: 'transform 0.2s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      transform: `scale3d(1.1111, 1.1111, 1)`,
    },
  }),
  bubble: {
    borderRadius: '50%',
    overflow: 'hidden',
  },
});

const Bubble: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);

  return (
    <Grid
      justify="center"
      alignItems="center"
      container
      className={classes.bubbleBorder}
    >
      <Grid item className={classes.contentWrapper}>
        <div onClick={props.onClicked} className={classes.bubble}>
          {props.children}
        </div>
      </Grid>
    </Grid>
  );
};

export default Bubble;
