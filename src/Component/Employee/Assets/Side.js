import DehazeIcon from '@mui/icons-material/Dehaze';
import GroupsIcon from '@mui/icons-material/Groups';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import SpeedIcon from '@mui/icons-material/Speed';
import TaskIcon from '@mui/icons-material/Task';
import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom'; 

const Side = () => {

  const [drawOpen, setDrawOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 

  const Pages = [
    { id: 0, icon: <DehazeIcon sx={{ height: "30px", width: "30px", color: "#004E69", display: { lg: "none" } }} onClick={() => handleDrawOpen()}/>, path: "" },
    { id: 1, icon: <SpeedIcon />, icName: "Dashboard", path: "/employeedashboard" },
    { id: 2, icon: <HowToRegOutlinedIcon />, icName: "Attendence", path: "/employeeAttendence" },
    { id: 3, icon: <TaskIcon />, icName: "Tasks", path: "/employeetask" },
    { id: 4, icon: <GroupsIcon />, icName: "Team", path: "/employeeteam" },
    { id: 5, icon: <PersonIcon />, icName: "Profile", path: "/employeeProfile" },
    { id: 6, icon: <SettingsIcon />, icName: "Settings", path: "/employeeSettings" },
  ];

  const handleDrawOpen = () => {
    setDrawOpen(!drawOpen);
  };

  const handleListItem = (path) => {
    navigate(path);
  };

  const isActive = (page) => {
    if (page.paths) {
      return page.paths.includes(location.pathname);
    }
    return location.pathname === page.path;
  };

  return (
    <Box width={"100%"}>
      <Drawer
        variant="persistent"
        anchor="left"
        open={drawOpen}
        onClose={handleDrawOpen}  
        PaperProps={{ style: { top: '80.43px', width: '280px', height: "100%",overflow:"hidden"} }}
      >
        <Box p={1} sx={{ bgcolor: '#E5F1FF', }}>
          <List sx={{ width: '100%', height: "100vh" }}>
            {Pages.map((list) => (
              <ListItem
                button
                key={list.id}
                onClick={() => handleListItem(list.path || list.paths?.[0])}
                  sx={{
                  '& .MuiListItemIcon-root': {
                    color: isActive(list) ? "#004E69" : "#2596BE", 
                    fontSize: "40px", 
                    ml:4
                  }
                }}
              >
                <ListItemIcon>{list.icon}</ListItemIcon>
                <ListItemText
                  primary={list.icName}
                  primaryTypographyProps={{
                    fontFamily:"Lato",
                    fontSize: '25px', 
                    fontWeight: '800',
                    color: isActive(list) ? "#004E69" : "#2596BE" 
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box bgcolor={"#E5F1FF"} sx={{ height: "100vh", mt:-8,borderRight: "1px solid #c6e0ff" }}>
        <List sx={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center", gap:4, ml:4,  }}>
          {Pages.map((page) => (
            <ListItem
              button
              key={page.id}
              onClick={() => handleListItem(page.path || page.paths?.[0])}
              sx={{
                '& .MuiListItemIcon-root': {
                  color: isActive(page) ? "#004E69" : "#2596BE", 
                  fontSize: "80px",
                }
              }}
            >
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontFamily:"Lato",
                  fontSize: '25px', 
                  fontWeight: '800',
                  color: isActive(page) ? "#004E69" : "#2596BE", 
                  display: {
                    xs: 'none',
                    sm: 'none',
                    lg: 'block',
                  }
                }}
              >
                {page.icName}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Side;
