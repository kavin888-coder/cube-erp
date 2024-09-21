import React, { useState} from 'react';
import { Box, Button, Card, FormControl, InputAdornment, InputLabel, OutlinedInput, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField, Pagination, Paper, Grid,Dialog } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Assets/Nav';
import Side from './Assets/Side';
import EmployeeAction from './Assets/EmpAction';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DeleteEmployee from './Assets/DeleteEmployee';
import EditIcon from '@mui/icons-material/Edit';


const adminTable = [
    { no: 1, name: "Sandra Williams",gender:"Female", staffId: "0246AHR", role: "Admin", phoneNumber: "08130000000", designation:"Human Resources",Action:"View more"},
    { no: 2, name: "Abubakar Ibrahim",gender:"Male",staffId: "0251ITO", role: "I.T", phoneNumber: "07062000033", designation:"Operations",Action:"View more" },
    { no: 3, name: "Ikechukwu Ugbonna",gender:"Male", staffId: "0340ITO", role: "I.T", phoneNumber: "08130000000", designation:"Operations",Action:"View more" },
    { no: 4, name: "Joshua Adewale",gender:"Male", staffId: "0146APM", role: "Admin", phoneNumber: "07038126632",designation:"Project Management",Action:"View more"},
    { no: 5, name: "Fatimah Nasir",gender:"Female", staffId: "0226ACS", role: "Admin", phoneNumber: "08130000000", designation:"Customer Service",Action:"View more" },
    { no: 6, name: "Hauwa Lateef",gender:"Female", staffId: "0124HR", role: "I.T", phoneNumber: "08130000000", designation:"Human Resources",Action:"View more"},
    { no: 7, name: "Sandra Williams",gender:"Female", staffId: "0246AH", role: "Admin", phoneNumber: "08130000000", designation:"Human Resources",Action:"View more" },
    { no: 8, name: "Sandra Williams",gender:"Female", staffId: "0246AH", role: "None", phoneNumber: "08130000000", designation:"Cleaning",Action:"View more"},
    { no: 9, name: "Sandra Williams",gender:"Female", staffId: "0246PMO", role: "P.M", phoneNumber: "08130000000", designation:"Operations",Action:"View more" },
    { no: 10, name: "Sunday Alison",gender:"Male", staffId: "0246AH", role: "None", phoneNumber: "08130000000", designation:"Security",Action:"View more" },
    { no: 11, name: "John Doe",gender:"Male", staffId: "0256XYZ", role: "Admin", phoneNumber: "08130000001", designation:"Project Management",Action:"View more"},
    { no: 12, name: "Jane Smith",gender:"Male", staffId: "0257XYZ", role: "I.T", phoneNumber: "08130000002", designation:"Project Management",Action:"View more" },
];

const AdminEmployee = () => {

    const [data, setData] = useState(adminTable);
    const [searchTerm, setSearchTerm] = useState(''); 
    const [staff, setStaff] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage] = useState(10);
    const [open, setOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState(null);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const navigate=useNavigate();

    const handlenavigate=()=>{
      navigate('/editemployee');
    }

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

    
    const handleRequest=()=>{
      setDialogContent(<EmployeeAction/>)
      setOpen(true)
  }
  const clickClose = () => {
      console.log('Back to Home clicked'); // For debugging
      setOpen(false);
  };


  const handleDeleteClick = (employee) => {
    setSelectedEmployee(employee);
    setDeleteOpen(true);
  };

  const handleDeleteEmployee = (staffId) => {
    const updatedData = data.filter(employee => employee.staffId !== staffId);
    setData(updatedData);
    console.log(`Employee with staff ID ${staffId} has been deleted.`);
    setDeleteOpen(false);
  };
  
  const handleCloseDialog = () => {
    setDeleteOpen(false);
  };

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
                          <MenuItem value="P.M">P.M Staff</MenuItem>
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
                                        <TableCell sx={{borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: "12px", lineHeight: "16.8px", color:"#515151" }}>S/N</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: "12px", lineHeight: "16.8px", color:"#515151" }}>Name</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: "12px", lineHeight: "16.8px", color:"#515151",ml:-2}}>Gender</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: "12px", lineHeight: "16.8px", color:"#515151",ml:-2 }}>Staff ID</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: "12px", lineHeight: "16.8px", color:"#515151",ml:-2 }}>Phone Number</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: "12px", lineHeight: "16.8px", color:"#515151",ml:-2 }}>Role</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: "12px", lineHeight: "16.8px", color:"#515151",ml:-2 }}>Designation</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: "12px", lineHeight: "16.8px", color:"#515151",ml:2}}>Action</Typography></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {paginatedData.map((row, index) => (
                                            <TableRow key={row.no}>
                                            <TableCell ><Typography sx={{ fontWeight: "500", fontSize: "12px",  color: "#515151" }}>{row.no}</Typography></TableCell>
                                            <TableCell ><Typography sx={{ fontWeight: "500", fontSize: "12px",  color: "#515151" }}>{row.name}</Typography></TableCell>
                                            <TableCell ><Typography sx={{ fontWeight: "500", fontSize: "12px",  color: "#515151",ml:-2 }}>{row.gender}</Typography></TableCell>
                                            <TableCell ><Typography sx={{ fontWeight: "500", fontSize: "12px",  color: "#515151",ml:-2 }}>{row.staffId}</Typography></TableCell>
                                            <TableCell ><Typography sx={{ fontWeight: "500", fontSize: "12px",  color:"#515151",ml:-2}}>{row.phoneNumber}</Typography></TableCell>
                                            <TableCell ><Typography sx={{ fontWeight: "500", fontSize: "12px",  color: "#515151",ml:-2}}>{row.role}</Typography></TableCell>
                                            <TableCell ><Typography sx={{ fontWeight: "500", fontSize: "12px",  color: "#515151",ml:-2}}>{row.designation}</Typography></TableCell>
                                            <TableCell >
                                            <Button
                                                  sx={{
                                                    fontFamily: 'Lato',
                                                    fontWeight: '600',
                                                    fontSize: '12px',
                                                    color: '#004E69',
                                                    background: 'none', 
                                                    boxShadow: 'none',  
                                                    padding: '0',       
                                                    border: 'none',     
                                                    textTransform: 'none', 
                                                  }}
                                                  onClick={handleRequest}
                                                >
                                                  {row.Action}
                                                </Button>
                                                <EditIcon onClick={handlenavigate} style={{color:"skyblue",marginLeft:"20px",marginBottom:"-8px",cursor:"pointer"}}/>
                                                <DeleteOutlineOutlinedIcon onClick={() => handleDeleteClick(row)} style={{color:"red",marginLeft:"20px",marginBottom:"-8px",cursor:"pointer"}}/>
                                                </TableCell>
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
              
            <Dialog open={open} onClose={clickClose} 
        PaperProps={{
            sx: {
                width: '80%', // Adjust this value to increase or decrease the width
                maxWidth: 'none', // Optional: removes any maxWidth constraints
                height: 'auto', // Reduced height
            },
        }}>
    
      <Box
        sx={{
          position: 'absolute',
          top: 16,     
          right: 16,   
          display: 'flex',
          flexDirection: 'column',
        }}
      >
               <Button
                    sx={{
                        mt: -2,
                        fontFamily: "lato",
                        fontWeight: 500,
                        fontSize: "14px",
                        textDecoration: "underline",
                        color: "inherit",
                        "&:hover": {
                            textDecoration: "underline",
                            backgroundColor: "transparent",
                        },
                        height: "auto",
                        width: "auto",
                    }}
                    onClick={clickClose}
                >
                    Back
                </Button>
               
            </Box>
            {dialogContent}
        </Dialog>
        
        <Dialog open={deleteOpen} onClose={handleCloseDialog} 
        PaperProps={{
            sx: {
                width: '75%', 
                maxWidth: 'none',
                height: '542px',               
                borderRadius:"25px",
                boxShadow: "5px 4px 50px 5px #3354F44D" 
            },
        }}>
            <DeleteEmployee selectedEmployee={selectedEmployee} onDelete={handleDeleteEmployee} onClose={handleCloseDialog}/>        
            </Dialog>
            </Grid>
    );
};

export default AdminEmployee