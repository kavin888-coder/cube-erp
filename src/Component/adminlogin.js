import React, { useState } from 'react';
import { AppBar, Box, Button, Checkbox, Grid, IconButton, InputAdornment, TextField, Toolbar, Typography, Alert } from '@mui/material';
import logo from '../Assets/logo.png';
import bgimg from '../Assets/bgimg.png';
import HomeIcon from '@mui/icons-material/Home';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        if (userId === '' || password === '') {
            setError('User ID and Password are required');
        } else if (userId !== 'admin' || password !== 'password123') {
            setError('Incorrect User ID or Password');
        } else {
            setError('');
            navigate('/admindashboard'); 
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleCancelClick = () => {
        window.location.reload(); 
      };

    return (
        <Box sx={{ width: "100vw", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Grid container>
                <Grid item xs={12}>
                    <AppBar position='static' sx={{ width: "100%", height: "80px", borderBottom: "1px solid #E5F1FF", background: "white", boxShadow: "0px 0px 4px 0px #E5F1FF" }}>
                        <Toolbar sx={{ justifyContent: "space-between" }}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <img src={logo} alt="logo" style={{ marginLeft: { xs: "10px" }, marginTop: "10px" }} />
                                <Typography sx={{ fontFamily: "Lato", fontWeight: 700, fontSize: "28px", lineHeight: "38.4px", color: "#388fa9", ml: "12px", mt: "10px" }}>
                                    <span style={{ color: "#003444" }}>C</span>ube<span style={{ color: "#003444" }}>AIS</span>olutions
                                </Typography>
                            </Box>
                            <Link to='/'><Button variant="contained" sx={{ width: "95px", height: "41px", borderRadius: "12px", background: "#004E69", padding: "12px 36px", mt: "10px", ":hover": { background: "#004E69" } }}><Typography>Login</Typography></Button></Link>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>

            <Box sx={{ position: "relative", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: `url(${bgimg})`, backgroundSize: "cover", backgroundPosition: "center", zIndex: -1 }}></Box>
                
                <Grid container justifyContent="left" sx={{ mb: 8, ml: 15 }}>
                    <Grid item>
                        <Box sx={{ zIndex: 1, width: "100%", maxWidth: "470px", padding: "20px", background: "white", borderRadius: "24px", textAlign: "left" }}>

                            <Box sx={{ textAlign: "right" }}>
                                
                                    <Button
                                        onClick={handleCancelClick}
                                        startIcon={<HomeIcon />}
                                        sx={{
                                            color: "black",
                                            textDecoration: "underline",
                                        }}>
                                        <Typography sx={{ fontFamily: "Lato", fontWeight: "500", fontSize: "14px", lineHeight: "16.8px", color: "#333333", textTransform: "none", mt: "1px" }}>
                                            Back to Home
                                        </Typography>
                                    </Button>
                            </Box>

                            <Typography sx={{ fontFamily: "Lato", fontWeight: "500", fontSize: "28px", color: "#333333", marginBottom: "20px", ml: 4 }}>Login as Admin</Typography>
                            <Typography sx={{ fontFamily: "Lato", fontWeight: "400", fontSize: "16px", color: "#3D3D3D", marginBottom: "20px", ml: 4 }}>Enter your User ID and password to access your account</Typography>

                            {error && (
                                <Alert severity="error" sx={{ width: "83%", marginBottom: "20px", ml: 4 }}>
                                    {error}
                                </Alert>
                            )}

                            <TextField
                                variant='outlined'
                                placeholder='User ID / Email ID'
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                sx={{ width: "90%", height: "56px", ml: 4, borderRadius: "12px", marginBottom: "20px", '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                            />
                            <TextField
                                variant='outlined'
                                placeholder='Password'
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={togglePasswordVisibility}>
                                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                sx={{ width: "90%", height: "56px", ml: 4, borderRadius: "12px", marginBottom: "20px", '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                            />
                            <Button
                                variant='contained'
                                onClick={handleLogin}
                                sx={{ width: "90%", height: "50px", ml: 4, borderRadius: "18px", bgcolor: "#004E69", ":hover": { background: "#004E69" } }}
                            >
                                <Typography sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "20px", color: "#FFFFFF", textTransform: "none" }}>
                                    Log In
                                </Typography>
                            </Button>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: "20px" }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', ml: 4 }}>
                                    <Checkbox />
                                    <Typography sx={{ fontFamily: "Poppins", fontWeight: "400", fontSize: "16px", color: "#333333" }}>Remember me</Typography>
                                </Box>
                                <Typography sx={{ fontFamily: "Poppins", fontWeight: "400", fontSize: "16px", color: "#333333", mr: 4, mt: 1, textTransform: "none" }}>Need Help?</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ width: '100%', textAlign: 'center', padding: '16px 0', background: "#eafaff", flexShrink: 0 }}>
                <Typography sx={{ fontFamily: "Lato", fontWeight: "500", fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "24px" }, lineHeight: "32px", color: "#020C14", }}>2024 All rights Reserved by CubeAiSolutions</Typography>
            </Box>
        </Box>
    );
}

export default AdminLogin;
