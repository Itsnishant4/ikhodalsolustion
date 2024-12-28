"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-scroll';

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const linkMappings = {
    Home: 'home',
    Projects: 'projects',
    About: 'about',
    Skill: 'skill',
    Reviews: 'reviews',
    Contact: () => window.open('https://wa.me/+919773005701'),
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {Object.keys(linkMappings).map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={text === 'Contact' ? linkMappings[text] : undefined}>
              <ListItemIcon />
              <ListItemText>
                {text === 'Contact' ? (
                  text
                ) : (
                  <Link
                    to={linkMappings[text]}
                    smooth={true}
                    duration={500}
                    offset={-70} // Optional: Adjust to account for fixed headers
                  >
                    {text}
                  </Link>
                )}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IoMenu onClick={toggleDrawer('left', true)} className="navmenu" />
      <React.Fragment key="left">
        <Drawer
          anchor="left"
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
