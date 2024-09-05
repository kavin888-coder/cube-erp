import React, { useState } from 'react';
import { AppBar, Box, Button, Checkbox, Grid, IconButton, InputAdornment, TextField, Toolbar, Typography, Alert } from '@mui/material';
import logo from '../Assets/logo.png';
import bgimg from '../Assets/bgimg.png';
import HomeIcon from '@mui/icons-material/Home';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

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
        <Box sx={{ width: "100vw", height: "100vh", overflow: "hidden", display: 'flex', flexDirection: 'column' }}>
            <Grid container sx={{ flex: '1 0 auto' }}>
                <Grid item xs={12}>
                    <AppBar position="static" sx={{
                        width: "100%",
                        height: "60px",
                        borderBottom: "1px solid #E5F1FF",
                        background: "white",
                        boxShadow: "0px 0px 4px 0px #E5F1FF"
                    }}>
                        <Toolbar sx={{ justifyContent: "space-between" }}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <img src={logo} alt="logo" style={{ marginLeft: "12px", width: "50px", height: "50px" }} />
                                <Typography sx={{ fontWeight: 700, fontSize: "24px", color: "#388fa9", ml: "12px"}}>
                                    <span style={{ color: "#003444" }}>C</span>ube<span style={{ color: "#003444" }}>AIS</span>olutions
                                </Typography>
                            </Box>
                            <Button variant="contained" onClick={handleCancelClick} sx={{
                                height: "31px",
                                borderRadius: "10px",
                                background: "#004E69",
                                padding: "12px 36px",
                                ":hover": { background: "#004E69" },
                                textTransform:"none"
                            }}>
                                <Typography>Home</Typography>
                            </Button>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>

            <Grid container sx={{ flexGrow: 1, position: "relative", overflow: "hidden" }}>
                <Grid item xs={12} sx={{ width: "100%", height: "calc(100vh - 60px)", position: "relative" }}>
                    <Box component="img" src={bgimg} alt="bg" sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex:-1
                    }} />
                    <Grid container justifyContent="left" sx={{ml: 15 }}>
                        <Grid item>
                            <Box sx={{ zIndex: 1, width: "100%", maxWidth: "360px", background: "white", borderRadius: "24px", textAlign: "left",mt:8 }}>

                                <Box sx={{ textAlign: "right", }}>
                                        <Button onClick={handleCancelClick}
                                            startIcon={<HomeIcon sx={{height:"13px"}}/>}
                                            sx={{
                                                color: "black",
                                                textDecoration: "underline",
                                            }}>
                                            <Typography sx={{ fontWeight: "500", fontSize: "12px", color: "#333333", textTransform: "none", mt: "1px" }}>
                                                Back to Home
                                            </Typography>
                                        </Button>
                                </Box>

                                <Typography sx={{ fontWeight: "500", fontSize: "24px", color: "#333333", marginBottom: "20px", ml: 4 }}>Login as Admin</Typography>
                                <Typography sx={{ fontWeight: "400", fontSize: "12px", color: "#3D3D3D", marginBottom: "20px", ml: 4 }}>Enter your User ID and password to access your account</Typography>

                                {error && (
                                    <Alert severity="error" sx={{ width: "75%", marginBottom: "20px", ml: 4,height:40 }}>
                                        {error}
                                    </Alert>
                                )}

                                <TextField
                                    variant='outlined'
                                    placeholder='User ID / Email ID'
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    sx={{
                                        width: "83%",
                                        ml: 4,
                                        marginBottom: "20px",
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '12px',
                                            height: "40px", 
                                            '& input': {
                                                padding: "4px 8px", 
                                                fontSize: "14px", 
                                                height: "30px", 

                                            }
                                        }
                                    }}
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
                                        ),
                                    }}
                                    sx={{
                                        width: "83%",
                                        ml: 4,
                                        marginBottom: "20px",
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '12px',
                                            height: "40px", 
                                            '& input': {
                                                padding: "4px 8px", 
                                                fontSize: "14px", 
                                                height: "30px", 
                                            }
                                        }
                                    }}
                                />

                                <Button
                                    variant='contained'
                                    onClick={handleLogin}
                                    sx={{ width: "83%", height: "40px", ml: 4,mt:1, borderRadius: "14px", bgcolor: "#004E69", ":hover": { background: "#004E69" } }}
                                >
                                    <Typography sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "18px", color: "#FFFFFF", textTransform: "none" }}>
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
                    <Grid container sx={{ 
                        width: '100%', 
                        textAlign: 'center', 
                        padding: '10px 0', 
                        background: "#eafaff", 
                        position: "fixed", 
                        bottom: 0, 
                        left: 0,
                        flexShrink: 0 
                    }}>
                        <Grid item xs={12}>
                            <Typography sx={{ fontWeight: 500, fontSize: "16px", color: "#020C14" }}>
                                2024 All rights Reserved by CubeAiSolutions
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AdminLogin;
