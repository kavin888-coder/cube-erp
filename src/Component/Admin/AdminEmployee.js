import React, { useState, useEffect } from 'react';
import { Box, Button, Card, FormControl, InputAdornment, InputLabel, OutlinedInput, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField, Pagination, Paper, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import Nav from './Assets/Nav';
import Side from './Assets/Side';

const adminTable = [
    { no: 1, firstname: "Sandra",lastname:"Williams",gender:"Female", staffId: "0246AHR", role: "Admin", phoneNumber: "08130000000", designation:"Human Resources",Action:"View more"},
    { no: 2, firstname: "Abubakar",lastname:"Ibrahim",gender:"Male",staffId: "0251ITO", role: "I.T", phoneNumber: "07062000033", designation:"Operations",Action:"View more" },
    { no: 3, firstname: "Ikechukwu",lastname:"Ugbonna",gender:"Male", staffId: "0340ITO", role: "I.T", phoneNumber: "08130000000", designation:"Operations",Action:"View more" },
    { no: 4, firstname: "Joshua",lastname:"Adewale",gender:"Male", staffId: "0146APM", role: "Admin", phoneNumber: "07038126632",designation:"Project Management",Action:"View more"},
    { no: 5, firstname: "Fatimah",lastname:"Nasir",gender:"Female", staffId: "0226ACS", role: "Admin", phoneNumber: "08130000000", designation:"Customer Service",Action:"View more" },
    { no: 6, firstname: "Hauwa",lastname:"Lateef",gender:"Female", staffId: "0124HR", role: "I.T", phoneNumber: "08130000000", designation:"Human Resources",Action:"View more"},
    { no: 7, firstname: "Sandra",lastname:"Williams",gender:"Female", staffId: "0246AH", role: "Admin", phoneNumber: "08130000000", designation:"Human Resources",Action:"View more" },
    { no: 8, firstname: "Sandra",lastname:"Williams",gender:"Female", staffId: "0246AH", role: "None", phoneNumber: "08130000000", designation:"Cleaning",Action:"View more"},
    { no: 9, firstname: "Sandra",lastname:"Williams",gender:"Female", staffId: "0246PMO", role: "P.M", phoneNumber: "08130000000", designation:"Operations",Action:"View more" },
    { no: 10, firstname: "Sunday",lastname:"Alison",gender:"Male", staffId: "0246AH", role: "None", phoneNumber: "08130000000", designation:"Security",Action:"View more" },
    { no: 11, firstname: "John",lastname:"Doe",gender:"Male", staffId: "0256XYZ", role: "Admin", phoneNumber: "08130000001", designation:"Project Management",Action:"View more"},
    { no: 12, firstname: "Jane",lastname:"Smith",gender:"Male", staffId: "0257XYZ", role: "I.T", phoneNumber: "08130000002", designation:"Project Management",Action:"View more" },
];

const AdminEmployee = () => {

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
          <Grid container bgcolor={'#E5F1FF'} sx={{ height: '100vh', overflowY: "auto" }}>
          <Grid item lg={12} xs={12} sx={{ flexShrink: 0 }}>
            <Nav sx={{ height: '64px' }} />
          </Grid>
    
          <Grid container item lg={12} xs={11.5} sx={{ height: 'calc(100vh - 64px)' }}>
            <Grid item lg={2} md={1.2} sm={2} xs={12} sx={{ height: '100%' }}>
              <Side />
            </Grid>
    
              <Grid item lg={9.8} md={10.8} sm={10} xs={12} bgcolor={'#E5F1FF'} sx={{ height: '100%', mt: -5 }}>
                <Card sx={{ width: '100%', height: '130px', borderRadius: '20px', mt: 2, ml: "20px" }}>
                  <Grid container spacing={2} sx={{ p: 1, mt:"-5px"}}>
                    <Grid item xs={12} sm={2.8} sx={{ ml:1,display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: { xs: 'center', sm: 'flex-start' } }}>
                      <Typography sx={{ fontWeight: "400", fontSize: "14px", color: "#121212" }}>
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
                    </Grid>
                    <Grid item xs={12} sm={2.8} sx={{ml:2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: { xs: 'center', sm: 'flex-start' } }}>
                      <Typography sx={{ fontWeight: "800", fontSize: "24px", color: "#272525" }}>
                        {adminTable.length}
                      </Typography>
                      <Typography sx={{ fontWeight: "400", fontSize: "14px", color: "#515151" }}>
                        Total number of staff
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2.8} sx={{ml:2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: { xs: 'center', sm: 'flex-start' } }}>
                      <Typography sx={{ fontWeight: "400", fontSize: "14px", color: "#121212" }}>
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
                          <MenuItem value="Human Resources">Human Resources staff</MenuItem>
                          <MenuItem value="None">None</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={2.8} sx={{ ml:2,display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Link to='/employeeAdd'><Button
                        sx={{
                          width: '100%',
                          maxWidth: '180px',
                          height: '46px',
                          bgcolor: "#004E69",
                          mt: { xs: 2, sm: 4 },
                          borderRadius: "10px",
                          textTransform: 'none',
                          '&:hover': {
                            bgcolor: "#004E69",
                          },
                        }}
                      >
                        <Typography sx={{ fontWeight: "700", fontSize: "14px", color: "white", textTransform: "none" }}>
                          Add New Staff
                        </Typography>
                      </Button></Link>
                    </Grid>
                  </Grid>
                </Card>
                    <TableContainer component={Paper} sx={{ width: '100%', height: 'auto', mt: 2, borderRadius: '10px', overflow: 'auto',ml:"20px" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
                            <Typography sx={{ fontWeight: "700", fontSize: "20px", color: "#515151" }}>
                                    All Staff
                                </Typography>
                                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <Typography sx={{ width: "54px", height: "24px", fontWeight: "600", fontSize: "14px", lineHeight: "24px", color: "#000000", }}>
                                        Showing
                                    </Typography>
                                    <Box sx={{ height: "40px", width: "40px", ml: "10px", borderRadius: "5px", padding: "10px", border: "1px solid #004E69", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Typography sx={{ width: "17px", height: "24px", fontWeight: "400", fontSize: "14px", lineHeight: "24px", color: "#004E69" }}>
                                            {itemsPerPage}
                                        </Typography>
                                    </Box>
                                    <Typography sx={{ width: "64px", height: "24px", fontWeight: "600", fontSize: "14px", lineHeight: "24px", color: "#000000", ml: "10px" }}>
                                        per page
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ flex: 1, overflow: 'auto' }}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                        <TableCell sx={{borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>S/N</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>First Name</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Last Name</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Gender</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Staff ID</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Phone Number</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Role</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Designation</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Action</Typography></TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {paginatedData.map((row, index) => (
                                            <TableRow key={row.no}>
                                               <TableCell ><Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{row.no}</Typography></TableCell>
                                            <TableCell ><Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{row.firstname}</Typography></TableCell>
                                            <TableCell ><Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{row.lastname}</Typography></TableCell>
                                            <TableCell ><Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{row.gender}</Typography></TableCell>
                                            <TableCell ><Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{row.staffId}</Typography></TableCell>
                                            <TableCell ><Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "24px", color:"#515151"}}>{row.phoneNumber}</Typography></TableCell>
                                            <TableCell ><Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151"}}>{row.role}</Typography></TableCell>
                                            <TableCell ><Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151"}}>{row.designation}</Typography></TableCell>
                                            <TableCell ><Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#004E69"}}>{row.Action}</Typography></TableCell>
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

export default AdminEmployee