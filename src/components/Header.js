import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Header() {
  return (
    <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h4" color="inherit">
            To do list
          </Typography>
        </Toolbar>
    </AppBar>
  );
}
export default Header;
