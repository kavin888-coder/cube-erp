import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton, Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Cube from "../../../Assets/cube.png";

export default function Nav() {
  const [currentTime, setCurrentTime] = React.useState('');
  const [currentDate, setCurrentDate] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const Navigate = useNavigate();

  React.useEffect(() => {
    const updateTimeAndDate = () => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
      const formattedTime = `${hours}:${minutes} ${ampm}`;

      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const formattedDate = `${day}-${month}-${year}`;

      setCurrentTime(formattedTime);
      setCurrentDate(formattedDate);
    };

    updateTimeAndDate();
    const intervalId = setInterval(updateTimeAndDate, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 
  const handleLogout = ()=>{
    Navigate('/')

  }
  return (
    <Box sx={{ display: 'flex', marginBottom: "65px" }}>
      <AppBar position="sticky" style={{ borderBottom: "1px solid #E5F1FF", background: "white", boxShadow: "0px 0px 4px 0px #E5F1FF", height: "80.43px" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={Cube} style={{ width: '100px', height: '70px', marginLeft: '-16px' }} alt="Cube" />
            <Typography sx={{ fontFamily: "Lato", fontWeight: 700, fontSize: { xs: "30px", sm: "24px", md: "28px", lg: "32px" }, lineHeight: "38.4px", color: "#388fa9", ml: { xs: "0px", sm: "12px" }, mt: "10px" }}>
              <span style={{ color: "#003444" }}>C</span>ube<span style={{ color: "#003444" }}>AIS</span>olutions
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Typography variant='h5' style={{ color: '#2596BE', fontFamily: "Lato", fontWeight: "700", lineHeight: "24px" }}>{currentDate}</Typography>
            <Typography variant='h5' style={{ fontFamily: "Lato", fontWeight: "700", lineHeight: "24px", color: '#DC143C' }}>{currentTime}</Typography>
            <Typography variant='h5' style={{ width: "74px", height: "25px", fontFamily: "Lato", fontWeight: "700", lineHeight: "24px", color: "#004E69" }}>Admin</Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircleIcon sx={{ height: "50px", width: "50px", color: "#004E69" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>admin@gmail.com</MenuItem>
              <MenuItem onClick={handleClose}>Continue</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
