import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Paper } from '@mui/material';
import Side from './Assets/Side';
import Nav from './Assets/Nav';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer'
import PeopleIcon from '@mui/icons-material/People';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { PieChart } from '@mui/x-charts/PieChart';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import Img from "../../Assets/8deceac56443041edd2d47c9dae21163.png";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const EmployeeDashborad = () => {
  const card = [
    { id: 1, num: 250, ty1: "Total no of staffs", ty2: "12 more than etc...", icon: <PeopleIcon sx={{ height: "35px", width: "50px" ,color:'#F29425'}} />,col:"#FFF4E8",icon2:<ArrowUpwardIcon/> },
    { id: 2, num: 250, ty1: "Total Projects", ty2: "12 more than etc...", icon: <FileCopyIcon sx={{ height: "35px", width: "50px",color:'#248CD8' }} />,col:"#E8F5FF",icon2:<ArrowUpwardIcon/> },
    { id: 3, num: 250, ty1: "Ongoing Projects", ty2: "12 more than etc...", icon: <RocketLaunchIcon sx={{ height: "35px", width: "50px",color:"#A601FF" }} />,col:"#F9EFFF",icon2:<ArrowUpwardIcon/> },
    { id: 4, num: 250, ty1: "Total Departments", icon: <ReduceCapacityIcon sx={{ height: "35px", width: "50px",color:"#10A142" }} />,col:"#ECFFF2" }

  ];

  const data2 = [
    { label: 'Pending', value: 100 ,color:"#004E69"},
    { label: 'Approved', value: 300,color:'#10A142'},
    {label:"Rejected",value:200,color: '#E54F53'}
    
  ];
  function createData(sl_no, Staff_Name, Staff_Role, Designation) {
    return { sl_no, Staff_Name, Staff_Role, Designation };
  }

  const rows = [
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),
    createData(1, "Kishore", "Front End", "ssjkdhnfdhihyoiel.cjsuf;ov"),

    // ... Add more rows as needed
  ];



  const secondTable =[{id:1,name:"kishore",designation:"team-lead",type:"office",CheckIntime:"9:34 AM",status:"in time",img:Img},
    {id:1,name:"kishore",designation:"team-lead",type:"office",CheckIntime:"9:34 AM",status:"in time",img:Img},
    {id:1,name:"kishore",designation:"team-lead",type:"office",CheckIntime:"9:34 AM",status:"late",img:Img},
    {id:1,name:"kishore",designation:"team-lead",type:"office",CheckIntime:"9:34 AM",status:"in time",img:Img},
    {id:1,name:"kishore",designation:"team-lead",type:"office",CheckIntime:"9:34 AM",status:"in time",img:Img},
    {id:1,name:"kishore",designation:"team-lead",type:"office",CheckIntime:"9:34 AM",status:"in time",img:Img},
    {id:1,name:"kishore",designation:"team-lead",type:"office",CheckIntime:"9:34 AM",status:"in time",img:Img},
    {id:1,name:"kishore",designation:"team-lead",type:"office",CheckIntime:"9:34 AM",status:"in time",img:Img},
    {id:1,name:"kishore",designation:"team-lead",type:"office",CheckIntime:"9:34 AM",status:"in time",img:Img},
    {id:1,name:"kishore",designation:"team-lead",type:"office",CheckIntime:"9:34 AM",status:"in time",img:Img},
    {id:1,name:"kishore",designation:"team-lead",type:"office",CheckIntime:"9:34 AM",status:"in time",img:Img},
    {id:1,name:"kishore",designation:"team-lead",type:"office",CheckIntime:"9:34 AM",status:"in time",img:Img}]

  return (
    <Grid container  bgcolor={'#E5F1FF'}>
      <Grid item lg={12} xs={12}>
        <Nav />
      </Grid>

      <Grid item lg={2} md={2} sm={2} xs={12} sx={{height:{lg:'100vh'}}}> {/* Adjust height to account for the navbar */}
        <Side />
      </Grid>


      <Grid item lg={10} md={10} sm={10} xs={12} bgcolor={'#E5F1FF'}>
      <Typography variant='h4' fontWeight={'bold'} color={'#004E69'}>Dashboard</Typography>
        <Grid container spacing={2}  rowGap={4} sx={{ padding: 2 }}   >
       

       <Grid item lg={6} sm={6}>
       <Paper>
  <TableContainer sx={{ maxHeight: 300 }} bgcolor={"white"}> {/* Reduced height */}
  < Typography sx={{fontFamily:"Lato",fontWeight:"700",color:"#272525",ml:"30px",mt:1,fontSize:"20px"}}>Team Members</Typography>
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell align='center' sx={{borderBottom:"none"}}><Typography fontWeight={'bold'}>Sl.no</Typography></TableCell>
          <TableCell align="center" sx={{borderBottom:"none"}}><Typography fontWeight={'bold'}>Name</Typography></TableCell>
          <TableCell align="center" sx={{borderBottom:"none"}}><Typography fontWeight={'bold'}>Role</Typography></TableCell>
          <TableCell align="center" sx={{borderBottom:"none"}}><Typography fontWeight={'bold'}>Designation</Typography></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.sl_no}>
            <TableCell align='center' sx={{borderBottom:"none"}}>{row.sl_no}</TableCell>
            <TableCell align="center" sx={{borderBottom:"none"}}>{row.Staff_Name}</TableCell>
            <TableCell align="center" sx={{borderBottom:"none"}}>{row.Staff_Role}</TableCell>
            <TableCell align="center" sx={{borderBottom:"none"}}>{row.Designation}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </Paper>
</Grid>

<Grid lg={6} sm={3} padding={"15px"}  sx={{display:"flex",justifyContent:{lg:'center',sm:'flex-start'},marginLeft:{lg:0,sm:'30px'}}} >

<Box sx={{maxHeight:"300px",display:"flex",justifyContent:"center",bgcolor:"white",borderRadius:"15px",border:'1px solid black',width:"500px"}}>
<div>
      <Typography variant="h6" align="center"  color={'#004E69'}>
        Project Status
      </Typography>
      < Typography sx={{fontFamily:"Lato",fontWeight:"700",color:"#272525",ml:"30px",mt:1,fontSize:"20px",textAlign:"right"}}>Project Done you</Typography>
      <PieChart 
      sx={{marginTop:'-90px'}}
        series={[
          {
            data: data2,
            width: 500,
            height: 200,
            innerRadius: 40,
            outerRadius: 80,
          },
        ]}
        height={350}
        width={300}
        slotProps={{
          legend: { hidden: false },

       
        }}
       
      />
    </div>
       </Box>


</Grid>

<Grid lg={12} sm={12}>
<Paper>
<TableContainer sx={{ maxHeight: 400 }} bgcolor={"white"}> {/* Reduced height */}
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell align='left' sx={{borderBottom:"none"}}><Typography fontWeight={'bold'}>Team Members</Typography></TableCell>
          <TableCell align="left" sx={{borderBottom:"none"}}><Typography fontWeight={'bold'}>Designation</Typography></TableCell>
          <TableCell align="left" sx={{borderBottom:"none"}}><Typography fontWeight={'bold'}>Type</Typography></TableCell>
          <TableCell align="left" sx={{borderBottom:"none"}}><Typography fontWeight={'bold'}>CheckIntime</Typography></TableCell>
          <TableCell align="left" sx={{borderBottom:"none"}}><Typography fontWeight={'bold'}>Status</Typography></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {secondTable.map((row) => (
          <TableRow key={row.sl_no}>
            <TableCell align='left' sx={{borderBottom:"none"}}> <Box sx={{display:'flex',alignItems:"center"}}>
                                     <Box
                                        component="img"
                                        src={row.img}
                                        alt="u2"
                                        sx={{ height: "50px", width: "50px", borderRadius: "100%" }}
                                    /><Typography sx={{marginLeft:"10px",fontSize:"20px"}}>{row.name}</Typography>

            </Box></TableCell>
            <TableCell align="left" sx={{borderBottom:"none"}}><Typography sx={{fontSize:"20px"}}>{row.designation}</Typography></TableCell>
            <TableCell align="left" sx={{borderBottom:"none"}}><Typography sx={{fontSize:"20px"}}>{row.type}</Typography></TableCell>
            <TableCell align="left" sx={{borderBottom:"none"}}><Typography sx={{fontSize:"20px" }}>{row.CheckIntime}</Typography></TableCell>
            <TableCell align="left" sx={{borderBottom:"none", color: row.status === "late" ? "#F45B69" : "#3FC28A" ,fontSize:"20px"   }}>{row.status}</TableCell>
            </TableRow>
      
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </Paper>
</Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}

export default EmployeeDashborad;
