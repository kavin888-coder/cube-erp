import React, { useState } from 'react';
import { AppBar, Box, Button, Dialog, Grid, Toolbar, Typography } from '@mui/material';
import logo from '../Assets/logo.png';
import bgimg from '../Assets/bgimg.png';
import Poplogin from './poplogin';

const Home = () => {
    const [open, setOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState(null);

    const clickOpen = (page) => {
        setDialogContent(page);
        setOpen(true);
    };

    const clickClose = () => {
        setOpen(false);
        setDialogContent(null);
    }

    return (
        <Box sx={{ width: "100vw", height: "100vh", overflow: "hidden", display: 'flex', flexDirection: 'column' }}>
            <Grid container sx={{ flex: '1 0 auto' }}>
                <Grid item xs={12}>
                    <AppBar position="static" sx={{
                        width: "100%",
                        height: "80px",
                        borderBottom: "1px solid #E5F1FF",
                        background: "white",
                        boxShadow: "0px 0px 4px 0px #E5F1FF"
                    }}>
                        <Toolbar sx={{ justifyContent: "space-between" }}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <img src={logo} alt="logo" style={{ marginLeft: "12px", marginTop: "10px", width: "50px", height: "50px" }} />
                                <Typography sx={{ fontFamily: "Lato", fontWeight: 700, fontSize: "24px", lineHeight: "38.4px", color: "#388fa9", ml: "12px", mt: "10px" }}>
                                    <span style={{ color: "#003444" }}>C</span>ube<span style={{ color: "#003444" }}>AIS</span>olutions
                                </Typography>
                            </Box>
                            <Button variant="contained" onClick={() => clickOpen(<Poplogin />)} sx={{
                                height: "41px",
                                borderRadius: "12px",
                                background: "#004E69",
                                padding: "12px 36px",
                                mt: "10px",
                                ":hover": { background: "#004E69" }
                            }}>
                                <Typography>Login</Typography>
                            </Button>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>

            <Grid container sx={{ flexGrow: 1, position: "relative", overflow: "hidden" }}>
                <Grid item xs={12} sx={{ width: "100%", height: "calc(100vh - 80px)", position: "relative" }}>
                    <Box component="img" src={bgimg} alt="bg" sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }} />
                    <Box sx={{
                        position: "absolute",
                        top: "40%",
                        left: "30%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "left",
                        color: "white",
                        padding: "0 16px"
                    }}>
                        <Typography sx={{
                            fontFamily: "Montserrat",
                            fontWeight: 700,
                            fontSize: "24px",
                            lineHeight: "32px",
                            color: "white",
                        }}>
                        At Cube AIsolutions, we transform cutting-<br/>edge technology into seamless solutions,<br/>empowering businesses to reach new heights<br/>through innovation and excellence.
                        </Typography>
                        <Button variant='contained' onClick={() => clickOpen(<Poplogin />)} sx={{
                            width: "245px",
                            height: "60px",
                            borderRadius: "18px",
                            mt: "24px",
                            background: "#004E69",
                            ":hover": { background: "#004E69" }
                        }}>
                            <Typography sx={{
                                fontFamily: "Inter",
                                fontWeight: 500,
                                fontSize: "16px",
                                lineHeight: "25.6px",
                                color: "white"
                            }}>
                                Get started
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            <Grid container sx={{ width: '100%', textAlign: 'center', padding: '16px 0', background: "#eafaff", flexShrink: 0 }}>
                <Grid item xs={12}>
                    <Typography sx={{ fontFamily: "Lato", fontWeight: 500, fontSize: "20px", lineHeight: "32px", color: "#020C14" }}>
                        2024 All rights Reserved by CubeAiSolutions
                    </Typography>
                </Grid>
            </Grid>

            <Dialog open={open} onClose={clickClose} fullScreen sx={{
                '& .MuiDialog-paper': {
                    margin: 0,
                    width: '100%',
                    height: '100%',
                    maxWidth: 'none',
                    maxHeight: 'none',
                },
            }}>
                {dialogContent}
            </Dialog>
        </Box>
    );
}

export default Home;
