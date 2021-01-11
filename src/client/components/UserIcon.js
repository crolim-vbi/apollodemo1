import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';




import IconButton from '@material-ui/core/IconButton';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import AccountBoxIcon from '@material-ui/icons/AccountBox';


import Divider from '@material-ui/core/Divider';

import { Link } from 'react-router-dom';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={2}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:hover': {
      // backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: "#00b3f0",
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "yellow2"}}>
      <>
        <IconButton
          aria-controls="customized-menu"
          aria-haspopup="true"
          // variant="contained"
          // color="primary"
          onClick={handleClick}
          color="inherit"
          style={{padding: "0px", margin: "0px"}}
        >
          <AccountCircleIcon />
        </IconButton>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <StyledMenuItem>
            <div style={{padding: "16px 16px", width: "100%", textAlign: "center", }}>
              <AccountBoxIcon fontSize="Large" style={{color: "dimgray"}}/><br />
              <a>Diogo Massaro</a><br />
              <a style={{color: "dimgray"}}>dmassaro@vbirealestate.com </a>
            </div>
          </StyledMenuItem>
          <Divider light />
          <StyledMenuItem>
            <ListItemIcon>
              <AccountCircleIcon fontSize="" />
            </ListItemIcon>
            <ListItemText primary="Minha Conta" />
          </StyledMenuItem>
          <Divider light />
          <StyledMenuItem>
            <ListItemIcon>
              <SettingsIcon fontSize="" />
            </ListItemIcon>
            <ListItemText primary="Administrar Sistema" />
          </StyledMenuItem>
          <Divider light />
          <StyledMenuItem component={Link} to="/login">
            <ListItemIcon>
              <ExitToAppIcon fontSize="" />
            </ListItemIcon>
            <ListItemText primary="Sair" />
          </StyledMenuItem>
        </StyledMenu>
      </>
    // </div>
  );
}
