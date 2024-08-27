import { Autocomplete, Box, Grid, Stack, TextField, Typography, Switch, styled, Paper } from '@mui/material';
import React from 'react';
import Nav from "./Assets/Nav";
import Side from './Assets/Side';

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

const EmployeeSettings = () => {
    const Mode = [{ label: 'Light' }, { label: 'Dark' }];
    const Language = [{ label: 'English' }];
    const Credential = [
        { id: '1', ty1: 'Two-factor Authentication', ty2: 'Keep your account secure by enabling 2FA via mail' },
        { id: '2', ty1: 'Mobile Push Notifications', ty2: 'Receive push notifications' },
        { id: '3', ty1: 'Desktop Notification', ty2: 'Receive push notifications on desktop' },
        { id: '4', ty1: 'Email Notifications', ty2: 'Receive email notifications' }
    ];

    return (
        <Grid container sx={{ bgcolor: '#E5F1FF', height: '100vh', overflow: 'hidden' }}>
            {/* Navbar */}
            <Grid item lg={12} xs={12}>
                <Nav />
            </Grid>

            {/* Sidebar */}
            <Grid item lg={2} md={2} sm={2} xs={12}>
                <Side />
            </Grid>

            {/* Main Content Area */}
            <Grid item lg={10} md={10} sm={10} xs={12} sx={{ bgcolor: '#E5F1FF', overflow: 'hidden' }}>
                <Stack sx={{ height: '100%' }}>
                    <Paper sx={{ margin: '20px', height: 'auto', overflow: 'hidden' }}>
                        <Box sx={{ height: '80px', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '10px' }}>
                                <Typography fontWeight={'bold'}>Appearance</Typography>
                                <Typography color={'#A2A1A8'}>Customize how your theme looks on your device</Typography>
                            </Box>
                            <Autocomplete
                                defaultValue='Light'
                                id="combo-box-mode"
                                options={Mode}
                                sx={{ width: 150, margin: '10px' }}
                                renderInput={(params) => <TextField {...params} label='Mode' />}
                            />
                        </Box>

                        <Box sx={{ height: '80px', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '10px' }}>
                                <Typography fontWeight={'bold'}>Language</Typography>
                                <Typography color={'#A2A1A8'}>Select your Language</Typography>
                            </Box>
                            <Autocomplete
                                defaultValue='English'
                                id="combo-box-language"
                                options={Language}
                                sx={{ width: 150, margin: '10px' }}
                                renderInput={(params) => <TextField {...params} label='Language' />}
                            />
                        </Box>

                        {Credential.map((temp) => (
                            <Box key={temp.id} sx={{ height: '80px', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '10px' }}>
                                    <Typography fontWeight={'bold'}>{temp.ty1}</Typography>
                                    <Typography color={'#A2A1A8'}>{temp.ty2}</Typography>
                                </Box>
                                <Box sx={{ width: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <IOSSwitch />
                                </Box>
                            </Box>
                        ))}
                    </Paper>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default EmployeeSettings;
