import React, { useState, useEffect } from 'react';
import { Box, Card, FormControl, InputAdornment, InputLabel, OutlinedInput, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField, Pagination, Paper, useMediaQuery, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Navbar from './Assets/Nav';
import Sidebar from './Assets/Side';

const adminTable = [
    { no: 1, name: "Sandra Williams", staffId: "0246AHR", role: "Admin", phoneNumber: "08130000000", date: "17/07/2024", checkIn: "9:00", checkOut: "18:00", status: "Work from home", hours: "10h2m" },
    { no: 2, name: "Abubakar Ibrahim", staffId: "0251ITO", role: "I.T", phoneNumber: "07062000033", date: "17/07/2024", checkIn: "00:00", checkOut: "00:00", status: "Absent", hours: "0m" },
    { no: 3, name: "Ikechukwu Ugbonna", staffId: "0340ITO", role: "I.T", phoneNumber: "08130000000", date: "17/07/2024", checkIn: "9:00", checkOut: "18:00", status: "Work from office", hours: "10h2m" },
    { no: 4, name: "Joshua Adewale", staffId: "0146APM", role: "Admin", phoneNumber: "07038126632", date: "17/07/2024", checkIn: "9:00", checkOut: "18:00", status: "Work from home", hours: "10h2m" },
    { no: 5, name: "Fatimah Nasir", staffId: "0226ACS", role: "Admin", phoneNumber: "08130000000", date: "17/07/2024", checkIn: "10:30", checkOut: "18:00", status: "Work from office", hours: "8h30m" },
    { no: 6, name: "Hauwa Lateef", staffId: "0124HR", role: "I.T", phoneNumber: "08130000000", date: "17/07/2024", checkIn: "00:00", checkOut: "00:00", status: "Absent", hours: "0m" },
    { no: 7, name: "Sandra Williams", staffId: "0246AH", role: "Admin", phoneNumber: "08130000000", date: "17/07/2024", checkIn: "9:00", checkOut: "18:00", status: "Work from home", hours: "10h2m" },
    { no: 8, name: "Sandra Williams", staffId: "0246AH", role: "None", phoneNumber: "08130000000", date: "17/07/2024", checkIn: "00:00", checkOut: "00:00", status: "Absent", hours: "0m" },
    { no: 9, name: "Sandra Williams", staffId: "0246PMO", role: "P.M", phoneNumber: "08130000000", date: "17/07/2024", checkIn: "10:30", checkOut: "18:00", status: "Work from office", hours: "8h30m" },
    { no: 10, name: "Sunday Alison", staffId: "0246AH", role: "None", phoneNumber: "08130000000", date: "17/07/2024", checkIn: "9:00", checkOut: "18:00", status: "Work from home", hours: "10h2m" },
    { no: 11, name: "John Doe", staffId: "0256XYZ", role: "Admin", phoneNumber: "08130000001", date: "17/07/2024", checkIn: "10:00", checkOut: "17:00", status: "Work from home", hours: "7h" },
    { no: 12, name: "Jane Smith", staffId: "0257XYZ", role: "I.T", phoneNumber: "08130000002", date: "17/07/2024", checkIn: "09:00", checkOut: "18:00", status: "Work from office", hours: "9h" }
];

const AdminAttendence = () => {

    const [data, setData] = useState(adminTable);
    const [searchTerm, setSearchTerm] = useState(''); 
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
                <Navbar sx={{ height: '64px'}} /> 
            </Grid>

        <Grid container item lg={12} xs={11.5} sx={{ height: 'calc(100vh - 64px)' }}> 
            <Grid item lg={2} md={1.2} sm={2} xs={12} sx={{ height: '100%' }}> 
                <Sidebar />
            </Grid>
        
        
            <Grid item lg={9.8} md={10.8} sm={10} xs={12} bgcolor={'#E5F1FF'} sx={{ height: '100%',mt: -5}}> 
                    <Card sx={{ width: '100%', height: '130px', borderRadius: '20px', mt: 2, ml:"20px"}}>
                        <Grid container spacing={2} sx={{ p: 1 }}>
                            <Grid item xs={4} sm={4}>
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
                            <Grid item xs={4} sm={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' ,ml:8}}>
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
                        </Grid>
                    </Card>
                    <TableContainer component={Paper} sx={{ width: '100%', mt: 2, borderRadius: '10px', ml: "20px"  }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
                                <Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize: "20px",mt:2, color: "#515151" }}>
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
                                            <TableCell sx={{ borderBottom: "none" }}>
                                                <Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize:"14px", color: "#515151" }}>
                                                    S/N
                                                </Typography>
                                            </TableCell>
                                            <TableCell sx={{ borderBottom: "none" }}>
                                                <Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize:"14px", color: "#515151" }}>
                                                    Name
                                                </Typography>
                                            </TableCell>
                                            <TableCell sx={{ borderBottom: "none" }}>
                                                <Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize:"14px", color: "#515151" }}>
                                                    Staff ID
                                                </Typography>
                                            </TableCell>
                                            <TableCell sx={{ borderBottom: "none" }}>
                                                <Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize:"14px", color: "#515151" }}>
                                                    Role
                                                </Typography>
                                            </TableCell>
                                            <TableCell sx={{ borderBottom: "none" }}>
                                                <Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize:"14px", color: "#515151" }}>
                                                    Phone Number
                                                </Typography>
                                            </TableCell>
                                            <TableCell sx={{ borderBottom: "none" }}>
                                                <Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize:"14px", color: "#515151" }}>
                                                    Date
                                                </Typography>
                                            </TableCell>
                                            <TableCell sx={{ borderBottom: "none" }}>
                                                <Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize:"14px", color: "#515151" }}>
                                                    Check In
                                                </Typography>
                                            </TableCell>
                                            <TableCell sx={{ borderBottom: "none" }}>
                                                <Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize:"14px", color: "#515151" }}>
                                                    Check Out
                                                </Typography>
                                            </TableCell>
                                            <TableCell sx={{ borderBottom: "none" }}>
                                                <Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize:"14px", color: "#515151" }}>
                                                    Status
                                                </Typography>
                                            </TableCell>
                                            <TableCell sx={{ borderBottom: "none" }}>
                                                <Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize:"14px", color: "#515151" }}>
                                                    Working Hours
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {paginatedData.map((staffMember) => (
                                            <TableRow key={staffMember.no}>
                                                <TableCell sx={{ borderBottom: "none" }}>
                                                    <Typography sx={{ fontFamily: "Lato", fontWeight: "400", fontSize:"14px",color: "#515151" }}>
                                                        {staffMember.no}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell sx={{ borderBottom: "none" }}>
                                                    <Typography sx={{ fontFamily: "Lato", fontWeight: "400", fontSize:"14px", color: "#515151" }}>
                                                        {staffMember.name}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell sx={{ borderBottom: "none" }}>
                                                    <Typography sx={{ fontFamily: "Lato", fontWeight: "400", fontSize:"14px", color: "#515151" }}>
                                                        {staffMember.staffId}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell sx={{ borderBottom: "none" }}>
                                                    <Typography sx={{ fontFamily: "Lato", fontWeight: "400", fontSize:"14px", color: "#515151" }}>
                                                        {staffMember.role}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell sx={{ borderBottom: "none" }}>
                                                    <Typography sx={{ fontFamily: "Lato", fontWeight: "400", fontSize:"14px", color: "#515151" }}>
                                                        {staffMember.phoneNumber}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell sx={{ borderBottom: "none" }}>
                                                    <Typography sx={{ fontFamily: "Lato", fontWeight: "400", fontSize:"14px", color: "#515151" }}>
                                                        {staffMember.date}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell sx={{ borderBottom: "none" }}>
                                                    <Typography sx={{ fontFamily: "Lato", fontWeight: "400", fontSize: "14px",color: staffMember.checkIn === "9:00"?"#0043FF":staffMember.checkIn === "00:00"?'#AA0000':staffMember.checkIn==="10:30"?"#D5B500":"black" }}>
                                                        {staffMember.checkIn}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell sx={{ borderBottom: "none" }}>
                                                    <Typography sx={{ fontFamily: "Lato", fontWeight: "400", fontSize: "14px",color: staffMember.checkOut==='18:00'?"#0043FF":"#AA0000" }}>
                                                        {staffMember.checkOut}
                                                    </Typography>
                                                </TableCell>

                                                <TableCell sx={{borderBottom:"none"}}>
                                                    <Typography sx={{ fontFamily: "Lato", fontWeight: "400", fontSize:"14px",color: staffMember.status === "Work from home" ? "#FEB634" : staffMember.status === "Absent" ? "#AA0000" :staffMember.status === "Work from office" ? "#8A8A8A":"black",}}>
                                                        {staffMember.status}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell sx={{ borderBottom: "none" }}>
                                                    <Typography sx={{ fontFamily: "Lato", fontWeight: "400", fontSize:"14px", color: "#004E69" }}>
                                                        {staffMember.hours}
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                            <Box   sx={{ p: 2, display: 'flex', justifyContent: 'center', backgroundColor: 'white', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                                <Pagination variant="outlined" shape="rounded" count={totalPages} page={page + 1} onChange={handleChangePage} />
                            </Box>
                        </Box>
                    </TableContainer>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AdminAttendence

