import React, { useState, useEffect } from 'react';
import { Modal,Box, Button, Card, FormControl, InputAdornment, InputLabel, OutlinedInput, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField,Pagination, Paper, Grid, Dialog } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Nav from './Assets/Nav';
import Side from './Assets/Side';
import NewTask from './Assets/newtask';
import TaskAction from './Assets/TaskAction';
import { useLocation } from 'react-router-dom';





const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height:550,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius:'20px',
   
    display:'flex',
    flexDirection:'column',
    justifyContent:'start',
    alignItems:'center'
  };



  const adminTable = [
    { no: 1, name: "Sandra Williams",gender:"Female", staffId: "0246AHR",  phoneNumber: "08130000000",role: "Admin", startDate: "01/07/2024", endDate: "25/07/2024", tasks: "In progress", action: "View more",  },
    { no: 2, name: "Abubakar Ibrahim ",gender:"Male",staffId: "0251ITO",  phoneNumber: "07062000033",role: "I.T", startDate: "10/07/2024", endDate: "30/07/2024", tasks: "In progress", action: "View more",  },
    { no: 3, name: "Ikechukwu Ugbonna",gender:"Male", staffId: "0340ITO", phoneNumber: "08130000000",role: "I.T", startDate: "05/07/2024", endDate: "25/07/2024", tasks: "In progress", action: "View more",  },
    { no: 4, name: "Sunday Alison",gender:"Male",staffId: "0146APM",  phoneNumber: "07038126632",role: "Admin", startDate: "12/07/2024", endDate: "25/07/2024", tasks: "Completed", action: "View more",  },
    { no: 5, name: "Sandra Williams", gender:"Female",staffId: "0226ACS", phoneNumber: "08130000000",role: "Admin", startDate: "04/07/2024", endDate: "26/07/2024", tasks: "In progress", action: "View more",  },
    { no: 6, name: "Hauwa Lateef",gender:"Female",staffId: "0124HR",   phoneNumber: "08130000000",role: "I.T", startDate: "12/07/2024", endDate: "30/07/2024", tasks: "In progress", action: "View more",  },
    { no: 7, name: "Sandra Williams", gender:"Female",staffId: "0124HR",  phoneNumber: "08130000000",role: "Admin", startDate: "11/07/2024", endDate: "25/07/2024", tasks: "Completed", action: "View more",  },
    { no: 8, name: "Fatimah Nasir",gender:"Female",staffId: "0226ACS",  phoneNumber: "08130000000",role: "None", startDate: "14/07/2024", endDate: "30/07/2024", tasks: "In progress", action: "View more",  },
    { no: 9, name: "Joshua Adewale", gender:"Male",staffId: "0340ITO", phoneNumber: "08130000000",role: "P.M", startDate: "18/07/2024", endDate: "28/07/2024", tasks: "In progress", action: "View more",  },
    { no: 10, name: "Ikechukwu Ugbonna",gender:"Male",staffId: "0251ITO",  phoneNumber: "08130000000",role: "None", startDate: "19/07/2024", endDate: "25/07/2024", tasks: "In Validation", action: "View more",  },
    { no: 11, name: "Abubakar Ibrahim ",gender:"Male", staffId: "0246AHR",  phoneNumber: "08130000001",role: "Admin", startDate: "02/07/2024", endDate: "23/07/2024", tasks: "Yet to Start", action: "View more",  },
    { no: 12, name: "Sunday Alison",gender:"Male", staffId: "0146APM", phoneNumber: "08130000002",role: "I.T", startDate: "07/07/2024", endDate: "25/07/2024", tasks: "Completed", action: "View more",}
];


const AdminTasks = () => {
  const location = useLocation();
  const [data, setData] = useState(adminTable);
  const [searchTerm, setSearchTerm] = useState('');
  const [staff, setStaff] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);
  const [actionOpen, setActionOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    if (location.state?.updatedTask) {
      const updatedTask = location.state.updatedTask;
      setData(prevData =>
        prevData.map(task => (task.no === updatedTask.no ? updatedTask : task))
      );
      setPage(0); // Reset page to 0 to show updated data
    }
  }, [location.state]);

  const handleAction = (task) => {
    setSelectedTask(task);
    setActionOpen(true);
  };

  const handleSaveChanges = (updatedTask) => {
    setData(prevData =>
      prevData.map(task => (task.no === updatedTask.no ? updatedTask : task))
    );
    setActionOpen(false);
  };

  const clickTaskClose = () => {
    setActionOpen(false);
  };


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                    <Button
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
                      onClick={handleOpen}
                    >
                      <Typography sx={{ fontWeight: "700", fontSize: "14px", color: "white", textTransform: "none" }}>
                        Add New Task
                      </Typography>
                    </Button>
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
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Name</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Gender</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Staff ID</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Phone Number</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Role</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Start Date</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>End Date</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Tasks</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Action</Typography></TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {paginatedData.map((task, index) => (
                                            <TableRow key={task.no}>
                                              <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{task.no}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{task.name}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{task.gender}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{task.staffId}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{task.phoneNumber}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{task.role}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{task.startDate}</Typography></TableCell>                                            
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "24px", color:"#515151"}}>{task.endDate}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: task.tasks==='In progress'?"#FEB634":task.tasks==="Completed"?"#3FC28A":task.tasks==='Yet to Start'?"#2596BE":task.tasks==='In Validation'?"#004E69":task.tasks==='Cancelled'?"#CE0A0A":"black" }}>{task.tasks}</Typography></TableCell>
                                            <TableCell sx={{borderBottom:"none"}}>
                                            <Button
                                                  sx={{
                                                    fontFamily: 'Lato',
                                                    fontWeight: '400',
                                                    fontSize: '14px',
                                                    color: '#004E69',
                                                    background: 'none', 
                                                    boxShadow: 'none',  
                                                    padding: '0',       
                                                    border: 'none',     
                                                    textTransform: 'none', 
                                                  }}
                                                  onClick={() => handleAction(task)}                                                >
                                                  {task.action}
                                                </Button></TableCell>                                        
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

                    <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style} >
                    <NewTask  setOpen={setOpen} handleClose={handleClose}/>
                    </Box>
                  </Modal>
                <Dialog open={actionOpen} onClose={clickTaskClose} 
                  PaperProps={{
                      sx: {
                          width: '30%', 
                          maxWidth: 'none', 
                          height: '350px', 
                          borderRadius:"25px",
                          mt:-15,
                          overflow:"hidden"
                      },
                  }}>
              
                <Box
                  sx={{
                    position: 'absolute',
                    top: 10,      
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
                    onClick={clickTaskClose}
                >
                    Back
                </Button>     
            </Box>
            <TaskAction task={selectedTask} onSave={handleSaveChanges} />
            </Dialog>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AdminTasks;