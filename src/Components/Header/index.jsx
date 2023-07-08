import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const HeaderModified = () => {
  return (
    <AppBar position='static' sx={{ backgroundColor: 'white' }}>
      <Container>
        <Toolbar disableGutters>
          <Typography variant='h4' sx={{ color: 'black' }}>
            Virtual Store
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderModified;
