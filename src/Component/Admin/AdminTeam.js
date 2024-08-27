import React, { useState} from 'react';
import { Box, Card, FormControl, InputAdornment, InputLabel, OutlinedInput, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField, Pagination, Paper, Button, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Nav from './Assets/Nav';
import Side from './Assets/Side';
import { Link } from 'react-router-dom';

const adminTable = [
    { no: 1, team: "Artificial Intelligence", teamlead: "Sandra Williams",  phoneNumber: "08130000000", startDate: "01/07/2024", endDate: "25/07/2024", tasks: "In progress", action: "View more",  },
    { no: 2, team: "Machine Learning", teamlead: "Abubakar Ibrahim ",  phoneNumber: "07062000033", startDate: "10/07/2024", endDate: "30/07/2024", tasks: "In progress", action: "View more",  },
    { no: 3, team: "Chatbot", teamlead: "Ikechukwu Ugbonna",  phoneNumber: "08130000000", startDate: "05/07/2024", endDate: "25/07/2024", tasks: "In progress", action: "View more",  },
    { no: 4, team: "Data analytics", teamlead: "Sunday Alison",  phoneNumber: "07038126632", startDate: "12/07/2024", endDate: "25/07/2024", tasks: "Completed", action: "View more",  },
    { no: 5, team: "Web Development", teamlead: "Sandra Williams",  phoneNumber: "08130000000", startDate: "04/07/2024", endDate: "26/07/2024", tasks: "In progress", action: "View more",  },
    { no: 6, team: "App Development", teamlead: "Hauwa Lateef",  phoneNumber: "08130000000", startDate: "12/07/2024", endDate: "30/07/2024", tasks: "In progress", action: "View more",  },
    { no: 7, team: "Cloud Engineering", teamlead: "0246AH",  phoneNumber: "08130000000", startDate: "11/07/2024", endDate: "25/07/2024", tasks: "Completed", action: "View more",  },
    { no: 8, team: "Cyber Security", teamlead: "Fatimah Nasir",  phoneNumber: "08130000000", startDate: "14/07/2024", endDate: "30/07/2024", tasks: "In progress", action: "View more",  },
    { no: 9, team: "Data Engineering", teamlead: "Joshua Adewale",  phoneNumber: "08130000000", startDate: "18/07/2024", endDate: "28/07/2024", tasks: "In progress", action: "View more",  },
    { no: 10, team: "Medical Data analytics", teamlead: "Ikechukwu Ugbonna",  phoneNumber: "08130000000", startDate: "19/07/2024", endDate: "25/07/2024", tasks: "In Validation", action: "View more",  },
    { no: 11, team: "Cyber Security", teamlead: "Abubakar Ibrahim ",  phoneNumber: "08130000001", startDate: "02/07/2024", endDate: "23/07/2024", tasks: "Yet to Start", action: "View more",  },
    { no: 12, team: "Medical Data analytics", teamlead: "Sunday Alison",  phoneNumber: "08130000002", startDate: "07/07/2024", endDate: "25/07/2024", tasks: "Completed", action: "View more",}
];

const AdminTeam = () => {
    const [data, setData] = useState(adminTable);
    const [searchTerm, setSearchTerm] = useState(''); // State for search input
    const [staff, setStaff] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage] = useState(10);

    const handleStaffFilter = (event) => {
        setStaff(event.target.value);
        setPage(0); 
    };
    
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase()); 
        setPage(0);
    };

    const filterData = () => {
        return data.filter(staffMember => {
            const matchesSearch = Object.values(staffMember).some(value => 
                value.toString().toLowerCase().includes(searchTerm)
            );
            const matchesStaffFilter = staff ? staffMember.role === staff : true;
            return matchesSearch && matchesStaffFilter;
        });
    };

    const filteredData = filterData();
    const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    const handleChangePage = (event, newPage) => setPage(newPage - 1);

    const getCurrentPageItemsCount = () => {
        const startIndex = page * rowsPerPage;
        const endIndex = Math.min(startIndex + rowsPerPage, filteredData.length);
        return endIndex - startIndex;
    };

    const itemsPerPage = getCurrentPageItemsCount();


    return (
        <Grid container bgcolor={'#E5F1FF'} sx={{ height: '100vh',overflowY:"auto"}}>
            <Grid item lg={12} xs={12} sx={{ flexShrink: 0 }}> 
                <Nav sx={{ height: '64px'}} /> 
            </Grid>

            <Grid container item lg={12} xs={11.5} sx={{ height: 'calc(100vh - 64px)' }}> 
            <Grid item lg={2} md={1.2} sm={2} xs={12} sx={{ height: '100%' }}> 
                <Side />
            </Grid>
        
        
            <Grid item lg={9.8} md={10.8} sm={10} xs={12} bgcolor={'#E5F1FF'} sx={{ height: '100%',mt: -5}}> 
                    <Card sx={{ width: '100%', height: '130px', borderRadius: '20px', mt: 2, ml:"20px"}}>
                        <Grid container spacing={2} sx={{ p: 1,justifyContent:"space-between" }}>
                            <Grid item xs={4} sm={2}>
                            <Box sx={{ flex: 1,ml:3,mt:1 }}>
                                    <Typography sx={{ fontFamily: "Lato", fontWeight: "400", fontSize: "14px", color: "#121212" }}>
                                        Quick search a staff
                                    </Typography>
                                    <TextField
                                        variant="outlined"
                                        placeholder="Enter search word"
                                        value={searchTerm} 
                                        onChange={handleSearchChange} 
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{
                                            width: '100%',
                                            maxWidth: '350px',
                                            borderRadius: 1,
                                            backgroundColor: 'white',
                                            mt: 1,
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    border: "1px solid #D0D0D0",
                                                    borderRadius: "10px",
                                                },
                                                '&:hover fieldset': {
                                                    border: "1px solid #D0D0D0",
                                                    borderRadius: "10px",
                                                },
                                                '&.Mui-focused fieldset': {
                                                    border: "1px solid #D0D0D0",
                                                    borderRadius: "10px",
                                                },
                                            },
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' ,ml:8}}>
                                <Typography sx={{ fontFamily: "Lato", fontWeight: "800", fontSize: "24px", color: "#272525" }}>
                                    {adminTable.length}
                                </Typography>
                                <Typography sx={{ fontFamily: "Lato", fontWeight: "400", fontSize: "14px", color: "#515151" }}>
                                    Total number of staff
                                </Typography>
                            </Grid>
                            <Grid item xs={4} sm={2} sx={{mt:1}}>
                                <Typography sx={{ fontFamily: "Lato", fontWeight: "400", fontSize: "14px", color: "#121212" }}>
                                    Filter Staff
                                </Typography>
                                <FormControl sx={{ width: "100%", mt: "10px", borderRadius: "20px", background: "#F2F7FF", border: "none" }}>
                                    <InputLabel id="staff-label">All Staff</InputLabel>
                                    <Select
                                        labelId="staff-label"
                                        id="staff-select"
                                        value={staff}
                                        onChange={handleStaffFilter}
                                        input={
                                            <OutlinedInput
                                                label="Staff"
                                                sx={{
                                                    borderRadius: "10px", 
                                                    "& .MuiOutlinedInput-notchedOutline": {
                                                        border: "none" 
                                                    },
                                                }}
                                            />
                                        }
                                        sx={{
                                            borderRadius: "10px",
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                border: "none", 
                                            },
                                        }}
                                    >
                                        <MenuItem value="">All Staff</MenuItem>
                                        <MenuItem value="Admin">Admin Staff</MenuItem>
                                        <MenuItem value="I.T">I.T Staff</MenuItem>
                                        <MenuItem value="I.T">Human Resources staff</MenuItem>
                                        <MenuItem value="None">None</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} sm={2} sx={{mt:1}}>
                            <Link to='/addNewteam'> <Button
                                    sx={{
                                        width: '100%',
                                        maxWidth: '180px',
                                        height: '46px',
                                        bgcolor: "#004E69",
                                        mt: 3,
                                        borderRadius:"10px",
                                        textTransform: 'none',
                                        '&:hover': {
                                            bgcolor: "#004E69",
                                        },
                                    }}
                                >
                                    <Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize: "14px", color: "white",textTransform:"none" }}>
                                        Add New Team
                                    </Typography>
                                </Button>
                            </Link>
                            </Grid>
                        </Grid>
                    </Card>
                    <TableContainer component={Paper} sx={{ width: '100%', height: 'auto', mt: 2, borderRadius: '10px', overflow: 'auto',ml:"20px" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
                            <Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize: "20px", color: "#515151" }}>
                                    All Staff
                                </Typography>
                                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <Typography sx={{ width: "54px", height: "24px", fontFamily: "Lato", fontWeight: "600", fontSize: "14px", lineHeight: "24px", color: "#000000", }}>
                                        Showing
                                    </Typography>
                                    <Box sx={{ height: "40px", width: "40px", ml: "10px", borderRadius: "5px", padding: "10px", border: "1px solid #004E69", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Typography sx={{ width: "17px", height: "24px", fontFamily: "Lato", fontWeight: "400", fontSize: "14px", lineHeight: "24px", color: "#004E69" }}>
                                            {itemsPerPage}
                                        </Typography>
                                    </Box>
                                    <Typography sx={{ width: "54px", height: "24px", fontFamily: "Lato", fontWeight: "600", fontSize: "14px", lineHeight: "24px", color: "#000000", ml: "10px" }}>
                                        per page
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ flex: 1, overflow: 'auto' }}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                        <TableCell sx={{borderBottom:"none" }}><Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>S/N</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Team</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Team Lead</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Phone Number</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Start Date</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>End Date</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Tasks</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Action</Typography></TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {paginatedData.map((row, index) => (
                                            <TableRow key={row.no}>
                                               <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontFamily: "Lato", fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{row.no}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontFamily: "Lato", fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{row.team}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontFamily: "Lato", fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{row.teamlead}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontFamily: "Lato", fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{row.phoneNumber}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontFamily: "Lato", fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{row.startDate}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontFamily: "Lato", fontWeight: "500", fontSize: "14px", lineHeight: "24px", color:"#515151"}}>{row.endDate}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontFamily: "Lato", fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: row.tasks==='In progress'?"#FEB634":row.tasks==="Completed"?"#3FC28A":row.tasks==='Yet to Start'?"#2596BE":row.tasks==='In Validation'?"#004E69":"black" }}>{row.tasks}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontFamily: "Lato", fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#004E69"}}>{row.action}</Typography></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <Pagination variant="outlined" shape="rounded"
                                    count={totalPages}
                                    page={page+1}
                                    onChange={handleChangePage}
                                    color="primary"
                                style={{marginBottom:"40px",marginTop:"10px",marginLeft:"10px"}}/>
                            </Box>
                        </Box>
                    </TableContainer>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AdminTeam