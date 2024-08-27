import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Alert, Box, Button, Card, FormControl, Grid, IconButton, InputLabel, MenuItem, Modal, OutlinedInput, Paper, Select, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBarComponent from './Assets/Nav';
import Sidebar from './Assets/Side';
import Img from "../../Assets/Congratulations.jpg";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius:'5px',
  p: 4,
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center'
};
const EmployeeAdd = () => {
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [designation, setDesignation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [number, setNumber] = useState("");
  const [staffId, setStaffId] = useState("");
  const [officialEmail, setOfficialEmail] = useState("");
  const [error, setError] = useState("");
  
  const fileInputRef = useRef(null); 
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => setGender(event.target.value);
  const handleRoleChange = (event) => setRole(event.target.value);
  const handleDesignationChange = (event) => setDesignation(event.target.value);

  const handleUploadClick = () => {
    fileInputRef.current.click(); 
  };

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !phoneNumber || !gender || !number || !role || !designation || !staffId || !officialEmail) {
      setError("Please enter all the details.");
      return;
    }


    

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || !emailRegex.test(officialEmail)) {
      setError("Please enter valid email addresses.");
      return;
    }

    setError('');
    setOpen(true)
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, '');
    setPhoneNumber(numericValue);
  };
  
  const handleNumberChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, '');
    setNumber(numericValue);
  };


  const handleContinue = ()=>{
    navigate("/editEmployee")
  }
  return (
    <Grid container bgcolor={'#E5F1FF'} sx={{ height: '100vh', overflow: 'auto' }}>
      <Grid item lg={12} xs={12} sx={{ flexShrink: 0 }}> 
        <AppBarComponent sx={{ height: '64px', overflow: "hidden" }} /> 
      </Grid>

      <Grid container item lg={12} xs={11.5} sx={{ height: 'calc(100vh - 64px)' }}> 
        <Grid item lg={2} md={2} sm={2} xs={12} sx={{ height: '100%' }}> 
          <Sidebar />
        </Grid>

        <Grid item lg={9.8} md={10} sm={10} xs={12} bgcolor={'#E5F1FF'} sx={{ height: '100%', mt: -5 }}>        
          <Link to='/adminEmployee'>
            <Button sx={{width: "100px", height: "40px", ":focus": { outline: "transparent" }, ":active": { background: "transparent", bgcolor: "#E5F1FF" },}}>
              <Typography sx={{fontFamily: "Lato", fontWeight: "500", fontSize: "16px", lineHeight: "24px", color: "linear-gradient(135deg, #14ADD6 0%, #384295 100%)",}}>
                <KeyboardArrowLeftIcon sx={{ verticalAlign: "middle" }} />Back
              </Typography>
            </Button>
          </Link>

          <Card sx={{
            padding:"20px",
            borderRadius: '10px',
            width:{xs:"100%",sm:"100%"},
            border: '1px solid #E8E8E8',
            marginTop: '20px',
            height: 'auto', 
            maxWidth: '95%', 
            mx: 'auto', 
          }}>
            <Typography sx={{width: "157px", height: "27px", mt:"20px", ml:"30px", fontFamily: "Nunito", fontWeight: "800", fontSize: "20px", lineHeight: "27.28px", color: "#000000",}}>Add a New Staff</Typography>
            <Grid container spacing={3} sx={{ mt: '40px' }}>
              <Grid item xs={12} md={5}>
                <Paper elevation={0} sx={{
                  height: {sm:"100%",md:"100%",lg:'90%'},
                  width: {md:"80%",lg:'80%'},
                  border: "0.5px solid #E8E8E8",
                  borderRadius:"10px",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  ml: '40px',
                  maxWidth: '300px', 
                }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{
                      width: { xs: '75px', sm:"130px", lg: '150px' },
                      height: { xs: '75px', sm:"130px", lg: '150px' },
                      borderRadius: '50%',
                      background: '#F2F2F2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}>
                      <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        accept=".jpg,.jpeg,.png"
                      />
                      <IconButton onClick={handleUploadClick}><AddAPhotoIcon color='#A3A3A3' /></IconButton>
                      <Button variant='text' onClick={handleUploadClick} sx={{
                        ":hover": { background: 'transparent' },
                        ":active": { background: 'transparent' },
                        padding: 0,
                        border: 'none',
                      }}>
                        <Typography sx={{width:"84px", height:"24px", fontFamily:"Lato", fontWeight:"400", fontSize:"14px", lineHeight:"24px", color:"#515151", textTransform:"none"}}>Upload Photo</Typography>
                      </Button>
                    </Box>
                    <Typography sx={{width:"126px", height:"48px", mt:"50px", fontFamily:"Lato", fontWeight:"400", fontSize:"14px", lineHeight:"24px", color:"#777777", textTransform:"none", textAlign:"center"}}>Allowed format <br/><span style={{color:"black"}}>JPG, JPEG, and PNG</span></Typography>
                    <Typography sx={{width:"126px", height:"48px", mt:"40px", fontFamily:"Lato", fontWeight:"400", fontSize:"14px", lineHeight:"24px", color:"#777777", textTransform:"none", textAlign:"center"}}>Max file size<br/><span style={{color:"black"}}>2MB</span></Typography>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} md={7}>
                {error && (
                  <Alert severity="error" sx={{ width: "83%", marginBottom: "20px", ml: 4,mt:-10 }}>
                    {error}
                  </Alert>
                )}
                <Grid container spacing={3}>
                  <Grid item xs={6} md={6}>
                    <Typography sx={{ width: "65px", height: "24px", fontFamily: "Lato", fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#121212" }}>First name</Typography>
                    <TextField
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter first name"
                      sx={{ width: "100%", height: "50px", mt: "10px", borderRadius: "10px", border: "1px solid #D0D0D0", '& .MuiInputBase-root': { height: "100%" }, '& .MuiInputBase-input': { height: "100%", padding: '0 14px', textAlign: 'center' } }}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Typography sx={{ width: "65px", height: "24px", fontFamily: "Lato", fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#121212" }}>Last name</Typography>
                    <TextField
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter Last name"
                      sx={{ width: "100%", height: "50px", mt: "10px", borderRadius: "10px", border: "1px solid #D0D0D0", '& .MuiInputBase-root': { height: "100%" }, '& .MuiInputBase-input': { height: "100%", padding: '0 14px', textAlign: 'center' } }}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Typography sx={{ width: "85px", height: "24px", fontFamily: "Lato", fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#121212" }}>Email Address</Typography>
                    <TextField
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email address"
                      sx={{ width: "100%", height: "50px", mt: "10px", borderRadius: "10px", border: "1px solid #D0D0D0", '& .MuiInputBase-root': { height: "100%" }, '& .MuiInputBase-input': { height: "100%", padding: '0 14px', textAlign: 'center' } }}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Typography sx={{ width: "95px", height: "24px", fontFamily: "Lato", fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#121212" }}>Phone Number</Typography>
                    <TextField
                    type='tel'
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      placeholder="Enter phone number"
                      inputProps={{ pattern: "[0-9]*" }}
                      sx={{ width: "100%", height: "50px", mt: "10px", borderRadius: "10px", border: "1px solid #D0D0D0", '& .MuiInputBase-root': { height: "100%" }, '& .MuiInputBase-input': { height: "100%", padding: '0 14px', textAlign: 'center' } }}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Typography sx={{ width: "65px", height: "24px", fontFamily: "Lato", fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#121212" }}>Gender</Typography>
                    <FormControl sx={{ width: "100%", mt: "10px" }}>
                      <InputLabel>Gender</InputLabel>
                      <Select
                        value={gender}
                        onChange={handleChange}
                        input={<OutlinedInput label="Gender" />}
                        sx={{ height: "50px", borderRadius: "10px", border: "1px solid #D0D0D0" }}>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="">Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Typography sx={{ width: "95px", height: "24px", fontFamily: "Lato", fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#121212" }}>Phone Number</Typography>
                    <TextField
                    type='tel'
                      value={number}
                      onChange={handleNumberChange}
                      placeholder="Enter phone number"
                      inputProps={{ pattern: "[0-9]*" }}
                      sx={{ width: "100%", height: "50px", mt: "10px", borderRadius: "10px", border: "1px solid #D0D0D0", '& .MuiInputBase-root': { height: "100%" }, '& .MuiInputBase-input': { height: "100%", padding: '0 14px', textAlign: 'center' } }}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                  <Typography sx={{ width: "95px", height: "24px", fontFamily: "Lato", fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#121212" }}>Role</Typography>
                    <FormControl sx={{ width: "100%", mt: "10px" }}>
                      <InputLabel>Role</InputLabel>
                      <Select
                        value={role}
                        onChange={handleRoleChange}
                        input={<OutlinedInput label="Role" />}
                        sx={{ height: "50px", borderRadius: "10px", border: "1px solid #D0D0D0" }}
                      >
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="Employee">Employee</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} md={6}>
                  <Typography sx={{ width: "95px", height: "24px", fontFamily: "Lato", fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#121212" }}>Designation</Typography>
                    <FormControl sx={{ width: "100%", mt: "10px" }}>
                      <InputLabel>Designation</InputLabel>
                      <Select
                        value={designation}
                        onChange={handleDesignationChange}
                        input={<OutlinedInput label="Designation" />}
                        sx={{ height: "50px", borderRadius: "10px", border: "1px solid #D0D0D0" }}
                      >
                        <MenuItem value="Manager">Manager</MenuItem>
                        <MenuItem value="Developer">Developer</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Typography sx={{ width: "65px", height: "24px", fontFamily: "Lato", fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#121212" }}>Staff ID</Typography>
                    <TextField
                      value={staffId}
                      onChange={(e) => setStaffId(e.target.value)}
                      placeholder="Enter Staff ID"
                      sx={{ width: "100%", height: "50px", mt: "10px", borderRadius: "10px", border: "1px solid #D0D0D0", '& .MuiInputBase-root': { height: "100%" }, '& .MuiInputBase-input': { height: "100%", padding: '0 14px', textAlign: 'center' } }}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Typography sx={{ width: "95px", height: "24px", fontFamily: "Lato", fontWeight: "500", fontSize: "14px", lineHeight: "24px", color: "#121212" }}>Official Mail</Typography>
                    <TextField
                      value={officialEmail}
                      onChange={(e) => setOfficialEmail(e.target.value)}
                      placeholder="Enter official email"
                      sx={{ width: "100%", height: "50px", mt: "10px", borderRadius: "10px", border: "1px solid #D0D0D0", '& .MuiInputBase-root': { height: "100%" }, '& .MuiInputBase-input': { height: "100%", padding: '0 14px', textAlign: 'center' } }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: '20px',mb:"20px" }}>
              <Button onClick={handleSubmit} variant='contained' sx={{width:"293px",height:"46px",background:"#004E69",ml:"40px",borderRadius:"10px",padding:"10px",":hover":{background:"#004E69"}}}><Typography sx={{width:"88px",height:"24px",fontFamily:"Lato",fontWeight:"700",fontSize:"14px",lineHeight:"24px",textTransform:"none"}}>Add Staff</Typography></Button>
              </Box>

              <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
               
               <Box
                component='img'
                src={Img}
                sx={{height:'200px',margin:'10px'}}
                
               />

               <Box sx={{  display:'flex', flexDirection:'column',  justifyContent:'center',  alignItems:'center',margin:'10px'}}>
                <Typography variant='h4' fontWeight={'bold'}>Congratulations</Typography>
                <Typography>You have successfully added a new staff</Typography>
               </Box>
                 
                 <Button onClick={handleContinue} variant='contained' sx={{color:'white',bgcolor:"#004E69",margin:'10px'}}> Continue</Button>
        </Box>
      </Modal>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EmployeeAdd;
