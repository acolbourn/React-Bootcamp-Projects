import sizes from './sizes';
import { DRAWER_WIDTH } from '../constants';
const drawerWidth = DRAWER_WIDTH;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  navBtns: {
    whiteSpace: 'nowrap',
    marginRight: '1rem',
    '& a': {
      textDecoration: 'none',
    },
    [sizes.down('sm')]: {
      marginRight: '0.5rem',
    },
  },
  button: {
    whiteSpace: 'nowrap',
    margin: '0 0.5rem',
    [sizes.down('md')]: {
      margin: '0 0.2rem',
      padding: '0.45rem',
    },
    [sizes.down('xs')]: {
      margin: '0 0.1rem',
      padding: '0.1rem',
    },
  },
  navTitle: {
    [sizes.down('sm')]: {
      fontSize: '1rem',
      margin: '0 0',
    },
    [sizes.down('xs')]: {
      display: 'none',
    },
  },
});

export default styles;
