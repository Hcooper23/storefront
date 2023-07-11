import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position='static' color='inherit'>
      <Container>
        <Toolbar disableGutters>
          <Typography variant='h4' color='textPrimary'>
            Virtual Store
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
