import React, { useEffect, useState} from 'react';
import { Box,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Pagination, Paper, Grid, Button, Dialog } from '@mui/material';
import Nav from './Assets/Nav';
import Side from './Assets/Side';
import TeamAction from './Assets/TeamAction';
import { useLocation } from 'react-router-dom';

const adminTable = [
    { no: 1, team: "Cube ERP", teamlead: "Sandra Williams",  phoneNumber: "08130000000", startDate: "01/07/2024", endDate: "25/07/2024", tasks: "In progress", action: "View more",  },
    { no: 2, team: "Cube AI", teamlead: "Abubakar Ibrahim ",  phoneNumber: "07062000033", startDate: "10/07/2024", endDate: "30/07/2024", tasks: "In progress", action: "View more",  },
    { no: 3, team: "Cube Events", teamlead: "Ikechukwu Ugbonna",  phoneNumber: "08130000000", startDate: "05/07/2024", endDate: "25/07/2024", tasks: "In progress", action: "View more",  },
    { no: 4, team: "Wise World", teamlead: "Joshua Adewale",  phoneNumber: "07038126632", startDate: "12/07/2024", endDate: "25/07/2024", tasks: "Completed", action: "View more",  },
    { no: 5, team: "Cube ERP", teamlead: "Fatimah Nasir",  phoneNumber: "08130000000", startDate: "04/07/2024", endDate: "26/07/2024", tasks: "In progress", action: "View more",  },
    { no: 6, team: "Cube AI", teamlead: "Hauwa Lateef",  phoneNumber: "08130000000", startDate: "12/07/2024", endDate: "30/07/2024", tasks: "In progress", action: "View more",  },
    { no: 7, team: "Cube Events", teamlead: "Sandra Williams",  phoneNumber: "08130000000", startDate: "11/07/2024", endDate: "25/07/2024", tasks: "Completed", action: "View more",  },
    { no: 8, team: "Wise World", teamlead: "Sandra Williams",  phoneNumber: "08130000000", startDate: "14/07/2024", endDate: "30/07/2024", tasks: "In progress", action: "View more",  },
    { no: 9, team: "Nature life", teamlead: "Sandra Williams",  phoneNumber: "08130000000", startDate: "18/07/2024", endDate: "28/07/2024", tasks: "In progress", action: "View more",  },
    { no: 10, team: "Cube Events", teamlead: "Sunday Alison",  phoneNumber: "08130000000", startDate: "19/07/2024", endDate: "25/07/2024", tasks: "In Validation", action: "View more",  },
    { no: 11, team: "Cube AI", teamlead: "Ikechukwu Ugbonna ",  phoneNumber: "08130000001", startDate: "02/07/2024", endDate: "23/07/2024", tasks: "Yet to Start", action: "View more",  },
    { no: 12, team: "Cube ERP", teamlead: "Fatimah Nasir",  phoneNumber: "08130000002", startDate: "07/07/2024", endDate: "25/07/2024", tasks: "Completed", action: "View more",}
];

const EmployeeTeam = () => {
    const location = useLocation();
    const [data, setData] = useState(adminTable);
    const [searchTerm, setSearchTerm] = useState(''); // State for search input
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
		<Grid container  bgcolor={'#E5F1FF'}>
    
		{/* Navbar */}
		<Grid item lg={12} xs={12}>
		  <Nav/>
		</Grid>
  
		{/* Sidebar */}
		<Grid item lg={2} md={2} sm={2} xs={12}>
		  <Side />
		</Grid>
  
		{/* Main Content Area */}
		<Grid item lg={10} md={10} sm={10} xs={12} bgcolor={'#E5F1FF'}>
		  <Grid container spacing={4} padding={3}>
                    <TableContainer component={Paper} sx={{ width: '100%', height: 'auto', mt: -2, borderRadius: '10px',ml:"20px" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
                            <Typography sx={{  fontWeight: "700", fontSize: "20px", color: "#515151" }}>
                                    Team
                                </Typography>
                                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <Typography sx={{ width: "54px", height: "24px",  fontWeight: "600", fontSize: "14px", lineHeight: "24px", color: "#000000", }}>
                                        Showing
                                    </Typography>
                                    <Box sx={{ height: "40px", width: "40px", ml: "10px", borderRadius: "5px", padding: "10px", border: "1px solid #004E69", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Typography sx={{ width: "17px", height: "24px",  fontWeight: "400", fontSize: "14px", lineHeight: "24px", color: "#004E69" }}>
                                            {itemsPerPage}
                                        </Typography>
                                    </Box>
                                    <Typography sx={{ width: "64px", height: "24px",  fontWeight: "600", fontSize: "14px", lineHeight: "24px", color: "#000000", ml: "10px" }}>
                                        per page
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ flex: 1, overflow: 'auto' }}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                        <TableCell sx={{borderBottom:"none" }}><Typography sx={{  fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>S/N</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{  fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Task Name</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{  fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Team Members</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{  fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Phone Number</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{  fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Start Date</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{  fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>End Date</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{  fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Tasks</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{  fontWeight: "700", fontSize: {sm:"10px",md:"12px",lg:"14px"}, lineHeight: "16.8px", color:"#515151" }}>Action</Typography></TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {paginatedData.map((row, index) => (
                                            <TableRow key={row.no}>
                                               <TableCell sx={{ borderBottom:"none" }}><Typography sx={{  fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{row.no}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{  fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{row.team}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{  fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{row.teamlead}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{  fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{row.phoneNumber}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{  fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#515151" }}>{row.startDate}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{  fontWeight: "500", fontSize: "14px", lineHeight: "24px", color:"#515151"}}>{row.endDate}</Typography></TableCell>
                                            <TableCell sx={{ borderBottom:"none" }}><Typography sx={{  fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: row.tasks==='In progress'?"#FEB634":row.tasks==="Completed"?"#3FC28A":row.tasks==='Yet to Start'?"#2596BE":row.tasks==='In Validation'?"#004E69":row.tasks==='Cancelled'?"#CE0A0A":"black" }}>{row.tasks}</Typography></TableCell>
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
                                                  onClick={() => handleAction(row)}                                                >
                                                  {row.action}
                                                </Button></TableCell>                                                 </TableRow>
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
            <TeamAction task={selectedTask} onSave={handleSaveChanges} />
            </Dialog>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default EmployeeTeam