import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';

export const Navbar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${ drawerWidth }px)` },
        ml: `${ drawerWidth }px`,
        boxShadow: "none"
      }}
    >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuOutlined />
          </IconButton>

          <Grid
            container
            direction="row"
            justifyContent='space-between'
            alignItems="center"
          >

            <Typography variant="h6" noWrap component="div">
              TUTI    
            </Typography> 
            <IconButton color="error">
              <LogoutOutlined />    
            </IconButton>    
          </Grid>
        </Toolbar>      
    </AppBar>
  )
}
