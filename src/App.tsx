import React from 'react';
import {BottomNavigation, BottomNavigationAction, Container, Paper} from '@material-ui/core';
import {Restore as RestoreIcon, Favorite as FavoriteIcon, Sports as SportsIcon} from '@material-ui/icons';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {teal, green} from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: green
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Paper>
          <Container>
            <h2>Feudily</h2>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Work" secondary="Jan 7, 2014" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Vacation" secondary="July 20, 2014" />
              </ListItem>
            </List>
            
          </Container>
        <BottomNavigation
          showLabels
        >
          <BottomNavigationAction label="Feuds" icon={<SportsIcon/>} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="History" icon={<RestoreIcon />} />
        </BottomNavigation>
        </Paper>
        
      </Container>
    </ThemeProvider>
    
  );
}

export default App;
