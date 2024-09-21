import React, { useState } from 'react';
import { AppBar, Box, Button, Dialog, Grid, Toolbar, Typography } from '@mui/material';
import logo from '../Assets/logo.png';
import bgimg2 from '../Assets/bgimg2.png';
import Adminlogin from './adminlogin';
import EmployeeLogin from './employeeLogin';

const Poplogin = () => {
    const [open, setOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState(null);

    const clickOpen = (page) => {
        setDialogContent(page);
        setOpen(true);
    };

    const clickClose = () => {
        setOpen(false);
        setDialogContent(null);
    };

    const handleCancelClick=()=>{
        window.location.reload();
    }

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
                                <Typography sx={{fontWeight: 700, fontSize: "24px", color: "#388fa9", ml: "12px"}}>
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
                <Grid item xs={12} sx={{ position: "relative" }}>
                    <Box component="img" src={bgimg2} alt="bg" sx={{
                        width: "100%", height: "100%", objectFit: "cover"
                    }} />
                    <Box sx={{
                        position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)",
                        width: "100%", maxWidth: "285px", textAlign: "center", backgroundColor: "white", padding: "15px",
                    }}>
                        <Button variant='contained' onClick={() => clickOpen(<Adminlogin />)} sx={{
                            width: "100%",borderRadius: "8px", background: "#004E69",
                            ":hover": { background: "#004E69" }
                        }}>
                            <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#FFFFFF",textTransform:"none" }}>
                                Admin Login
                            </Typography>
                        </Button>
                        <Button variant='contained' onClick={() => clickOpen(<EmployeeLogin />)} sx={{
                            width: "100%", borderRadius: "8px", background: "#004E69", mt: "20px",
                            ":hover": { background: "#004E69" }
                        }}>
                            <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#FFFFFF",textTransform:"none" }}>
                                Employee Login
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            <Grid container sx={{ width: '100%', textAlign: 'center', padding: '10px 0', background: "#eafaff", flexShrink: 0 }}>
                <Grid item xs={12}>
                    <Typography sx={{ fontWeight: 500, fontSize: "16px", color: "#020C14" }}>
                        2024 All rights Reserved by CubeAiSolutions
                    </Typography>
                </Grid>
            </Grid>

            <Dialog open={open} onClose={clickClose} fullScreen sx={{'& .MuiDialog-paper': { margin: 0, width: '100%', height: '100%', maxWidth: 'none', maxHeight: 'none',backgroundColor: 'rgba(255, 255, 255, 0)',  },}}>{dialogContent}</Dialog>
        </Box>
    )
}

export default Poplogin;
