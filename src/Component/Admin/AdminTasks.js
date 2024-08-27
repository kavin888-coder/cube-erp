import React, { useState, useEffect } from 'react';
import { Box, Button, Card, FormControl, InputAdornment, InputLabel, OutlinedInput, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField, Divider, Pagination, Paper, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Nav from './Assets/Nav';
import Side from './Assets/Side';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminTasks = () => {

    const [data, setData] = useState([]);
    const [staff, setStaff] = useState('');
    const [gender, setGender] = useState('');
    const [role, setRole] = useState('');
    const [designation, setDesignation] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState(''); // State for search input

    useEffect(() => {
        axios.get('https://api.example.com/data')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleStaffFilter = (event) => setStaff(event.target.value);
    const handleGenderChange = (event) => setGender(event.target.value);
    const handleRoleChange = (event) => setRole(event.target.value);
    const handleDesignationChange = (event) => setDesignation(event.target.value);

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

    // Get filtered data
    const filteredData = filterData();
    const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    const handleChangePage = (event, newPage) => setPage(newPage);

    const getCurrentPageItemsCount = () => {
        const startIndex = page * rowsPerPage;
        const endIndex = Math.min(startIndex + rowsPerPage, filteredData.length);
        return endIndex - startIndex;
    };

    const itemsPerPage = getCurrentPageItemsCount();

    return (
        <Grid container bgcolor={'#E5F1FF'} sx={{ height: '100vh', overflow: 'hidden' }}>
            <Grid item lg={12} xs={12} sx={{ flexShrink: 0 }}> 
                <Nav sx={{ height: '64px', overflow: "hidden" }} /> 
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
                                    {filteredData.length}
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
                            <Link to='/addNewtask'> <Button
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
                                        Add New Task
                                    </Typography>
                                </Button>
                            </Link>
                            </Grid>
                        </Grid>
                    </Card>
                    <TableContainer component={Paper} sx={{ width: '100%', height: '632px', mt: 2, borderRadius: '10px', overflow: 'auto' ,ml:"20px"}}>
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
                                            <TableCell sx={{fontFamily:"Lato",fontWeight:"700",color:"#515151",borderBottom:"none"}}>S/N</TableCell>
                                            <TableCell sx={{fontFamily:"Lato",fontWeight:"700",color:"#515151",borderBottom:"none"}}>Name</TableCell>
                                            <TableCell sx={{fontFamily:"Lato",fontWeight:"700",color:"#515151",borderBottom:"none"}}>Gender</TableCell>
                                            <TableCell sx={{fontFamily:"Lato",fontWeight:"700",color:"#515151",borderBottom:"none"}}>Staff ID</TableCell>
                                            <TableCell sx={{fontFamily:"Lato",fontWeight:"700",color:"#515151",borderBottom:"none"}}>Phone Number</TableCell>
                                            <TableCell sx={{fontFamily:"Lato",fontWeight:"700",color:"#515151",borderBottom:"none"}}>Role</TableCell>
                                            <TableCell sx={{fontFamily:"Lato",fontWeight:"700",color:"#515151",borderBottom:"none"}}>Start Date</TableCell>
                                            <TableCell sx={{fontFamily:"Lato",fontWeight:"700",color:"#515151",borderBottom:"none"}}>End Date</TableCell>
                                            <TableCell sx={{fontFamily:"Lato",fontWeight:"700",color:"#515151",borderBottom:"none"}}>Task</TableCell>
                                            <TableCell sx={{fontFamily:"Lato",fontWeight:"700",color:"#515151",borderBottom:"none"}}>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {paginatedData.map((staffMember, index) => (
                                            <TableRow key={staffMember.staffId}>
                                                <TableCell sx={{fontFamily: "Lato", fontWeight: "500", color:"#515151",borderBottom:"none"}}>{page * rowsPerPage + index + 1}</TableCell>
                                                <TableCell sx={{fontFamily: "Lato", fontWeight: "500", color:"#515151",borderBottom:"none"}}>{staffMember.name}</TableCell>
                                                <TableCell sx={{fontFamily: "Lato", fontWeight: "500", color:"#515151",borderBottom:"none"}}>{staffMember.gender}</TableCell>
                                                <TableCell sx={{fontFamily: "Lato", fontWeight: "500", color:"#515151",borderBottom:"none"}}>{staffMember.staffId}</TableCell>
                                                <TableCell sx={{fontFamily: "Lato", fontWeight: "500", color:"#515151",borderBottom:"none"}}>{staffMember.phoneNumber}</TableCell>
                                                <TableCell sx={{fontFamily: "Lato", fontWeight: "500", color:"#515151",borderBottom:"none"}}>{staffMember.role}</TableCell>
                                                <TableCell sx={{fontFamily: "Lato", fontWeight: "500", color:"#515151",borderBottom:"none"}}>{staffMember.startDate}</TableCell>
                                                <TableCell sx={{fontFamily: "Lato", fontWeight: "500", color:"#515151",borderBottom:"none"}}>{staffMember.endDate}</TableCell>
                                                <TableCell sx={{fontFamily: "Lato", fontWeight: "500", color: staffMember.tasks==='In progress'?"#FEB634":staffMember.tasks==="Completed"?"#3FC28A":staffMember.tasks==='Yet to Start'?"#2596BE":staffMember.tasks==='In Validation'?"#004E69":"black",borderBottom:"none" }}>{staffMember.tasks}</TableCell>
                                                <TableCell sx={{fontFamily: "Lato", fontWeight: "500", color:"#004E69",borderBottom:"none"}}>Actions</TableCell> 
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

export default AdminTasks;