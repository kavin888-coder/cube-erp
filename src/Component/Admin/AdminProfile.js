import React, { useState } from 'react';
import { Grid, Typography, Box, Paper, Stack, TextField, FormControl, Button, Autocomplete,Modal} from '@mui/material';
import Nav from './Assets/Nav';
import Side from './Assets/Side';
import CircleIcon from '@mui/icons-material/Circle';
import Img from "../../Assets/33fe647a46f9bf668322f8c1d94ed937.png";
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CakeIcon from '@mui/icons-material/Cake';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import DeckIcon from '@mui/icons-material/Deck';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const indianStates = [
  { label: 'Andhra Pradesh' },
  { label: 'Arunachal Pradesh' },
  { label: 'Assam' },
  { label: 'Bihar' },
  { label: 'Chhattisgarh' },
  { label: 'Goa' },
  { label: 'Gujarat' },
  { label: 'Haryana' },
  { label: 'Himachal Pradesh' },
  { label: 'Jharkhand' },
  { label: 'Karnataka' },
  { label: 'Kerala' },
  { label: 'Madhya Pradesh' },
  { label: 'Maharashtra' },
  { label: 'Manipur' },
  { label: 'Meghalaya' },
  { label: 'Mizoram' },
  { label: 'Nagaland' },
  { label: 'Odisha' },
  { label: 'Punjab' },
  { label: 'Rajasthan' },
  { label: 'Sikkim' },
  { label: 'Tamil Nadu' },
  { label: 'Telangana' },
  { label: 'Tripura' },
  { label: 'Uttar Pradesh' },
  { label: 'Uttarakhand' },
  { label: 'West Bengal' }
];


const AdminProfile = () => {
  const [name,setName] = useState("Kishore")
  const [address,setAddress] = useState("hello hello")
  const [email,setEmail] = useState("kishore1234@gmail.com")
  const [zip,setZip] = useState("678578")
  const [state,setState] = useState("Tamil Nadu")
  const[number,setNumber] = useState("9876543219")
  const [open, setOpen] = useState(false);
  const [open2,setOpen2] = useState(false)
  const [aboutMe,setAboutMe] = useState("Share interesting life stories or tell other users about yourself, upload photos of memorable moments.")
  const [personalInfo,setPersonalInfo] =useState("This area contains HR related information and other documentation. It will be visible only to users with sufficient permissions.") 
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);


  
  const formInfo = [ {firstName:name,address:address,email:email,zip:zip,state:state,num:number}]
  const user = formInfo[0]
  const [disable,setDisable] = useState(true)
  const handleDisable=()=>{
    setDisable(false)
  }
  const handleSubmit=()=>{
    setDisable(true)
  }
  
  const handleNameChange=(e)=>{
    setName(e)

  }
  const handleAddressChange=(e)=>{
    setAddress(e)
  }
  const handleEmailChange=(e)=>{
    setEmail(e)
  }

  const handleZipChange=(e)=>{
    setZip(e)
  }
  const handleStateChange=(e)=>{
    setState(e)
  }
  const handlePhoneNumChange=(e)=>{
    setNumber(e)
  }
  
 const handleAboutChange=(e)=>{
  setAboutMe (e)
 }
const handlePersonalChange=(e)=>{
  setPersonalInfo(e)
}
  return (

    
    <Grid container  bgcolor={'#E5F1FF'}>
    
      {/* Navbar */}
      <Grid item lg={12} xs={12}>
        <Nav />
      </Grid>

      {/* Sidebar */}
      <Grid item lg={2} md={2} sm={2} xs={12}>
        <Side />
      </Grid>

      {/* Main Content Area */}
      <Grid item lg={10} md={10} sm={10} xs={12} bgcolor={'#E5F1FF'}>
        <Grid container spacing={4} padding={3}>
          {/* Administrator Profile Card */}
          <Grid item lg={4} md={5} sm={12}>
            <Stack direction={  'column'} spacing={2}>
              <Paper sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '100%', height: '270px', padding: '10px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box bgcolor={'#004E69'} padding={'7px'}>
                    <Typography color={'white'} variant='h6'>Administrator</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" marginRight="10px">
                    <CircleIcon sx={{ fontSize: '10px', color: 'green' }} />
                    <Typography fontWeight="bold" marginLeft="4px">online</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box
                    component="img"
                    src={Img}
                    alt="Profile"
                    sx={{ height: "170px", width: "170px", borderRadius: "50%" }}
                  />
                </Box>
              </Paper>

              <Paper sx={{  width: '105%',
                    height: '270px',marginRight:"-15px",}}>
                <Gauge
                  value={75}
                  startAngle={-110}
                  endAngle={110}
                  sx={{
                    width: '100%',
                    height: '250px',
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 40,
                      transform: 'translate(0px, 0px)',
                    },
                  }}
                  text={({ value, valueMax }) => `${value} / ${valueMax}`}
                />
                <Typography fontWeight={'bold'} textAlign={'center'}>Measure your stress level</Typography>
              </Paper>
            </Stack>
          </Grid>

          {/* Form Grid */}
          <Grid item lg={8} md={7} sm={12}>
            <Paper sx={{ height: "500px", padding: "40px", textAlign: 'center' }}>
              <FormControl sx={{ padding: '20px', maxWidth: '600px', margin: 'auto' }} >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <Typography fontWeight="bold">Contact Information</Typography>
                  <Button fontWeight="bold" onClick={handleDisable} variant='contained'   sx={{ textTransform: 'capitalize' ,color:(disable) ? 'black' : 'white',bgcolor:(disable) ? 'white' : '#004E69'}} >Edit</Button>
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                     disabled= {disable}
                     onChange={(e)=>handleNameChange(e.target.value)}
                      required
                      label="First Name"
                      defaultValue={user.firstName}
                      id="outlined-start-adornment"
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      disabled= {disable}
                      onChange={(e)=>handleAddressChange(e.target.value)}
                      defaultValue={user.address}
                      required
                      id="filled-required"
                      label="Address 1"
                      variant="filled"
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                        onChange={(e)=>handleEmailChange(e.target.value)}
                      disabled= {disable}
                      defaultValue={user.email}
                      required
                      label="Email"
                      id="outlined-start-adornment"
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      onChange={(e)=>handlePhoneNumChange(e.target.value)}
                      disabled= {disable}
                      defaultValue={user.num}
                      required
                      label="Phone Number"
                      id="outlined-start-adornment"
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Autocomplete
                      onChange={(e)=>handleStateChange(e.target.value)}
                      disabled= {disable}
                      defaultValue={user.state}
                      id="combo-box-demo"
                      options={indianStates}
                      renderInput={(params) => <TextField {...params} label="State" />}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      onChange={(e)=>handleZipChange(e.target.value)}
                      disabled= {disable}
                      defaultValue={user.zip}
                      required
                      label="Zip Code"
                      id="outlined-start-adornment"
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'start' }}>
                    <Button onClick={handleSubmit} variant="contained" sx={{ marginRight: '10px',bgcolor:"#004E69",color:"white" }}>Submit</Button>
                    <Button variant="outlined" sx={{color:"#004E69"}}>Cancel</Button>
                  </Grid>
                </Grid>
              </FormControl>
            </Paper>
          </Grid>

          {/* Appreciations Card */}
          <Grid item lg={4} md={6} sm={12}>
            <Paper sx={{ height: '130px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '10px' }}>
              <Typography sx={{ fontWeight: 'bold', marginLeft: '10px' }}>Appreciations</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <EmojiEmotionsIcon sx={{color:'#0000008A'}}/>
                <EmojiEventsIcon sx={{color:'#0000008A'}} />
                <CakeIcon  sx={{color:'#0000008A'}}/>
                <NightsStayIcon sx={{color:'#0000008A'}} />
                <EmojiFlagsIcon sx={{color:'#0000008A'}} />
                <DeckIcon sx={{color:'#0000008A'}}/>
                <ThumbUpIcon sx={{color:'#0000008A'}}/>
              </Box>
            </Paper>
          </Grid>

          {/* Personal Info Card */}
          <Grid item lg={8} md={6} sm={12}>
          <Paper sx={{ minHeight: '130px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '10px' }}>
              <Typography sx={{ fontWeight: 'bold', padding: '2px' }}>Personal Info</Typography>
             
              <Typography>{personalInfo}</Typography>  
              <Button onClick={()=>handleOpen2()} variant="contained" sx={{ marginRight: '10px', width: '100px' ,bgcolor:"#004E69",color:"white"}}>Edit</Button>
            </Paper>
          </Grid>
          <Modal open={open2} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Personal Info
          </Typography>
          <Box sx={{display:'flex',flexDirection:'column'}}>
          <TextField   id="outlined-multiline-static"    multiline
          rows={10} sx={{ mt: 2 ,height:'300px'}} defaultValue={personalInfo} onChange={(e)=>handlePersonalChange(e.target.value)}>
          
          </TextField>
          <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
          
          <Button onClick={handleClose2} variant="contained" sx={{ mt: 2, bgcolor: '#004E69', color: 'white' }}>
            Close
          </Button>
          <Button onClick={handleClose2} variant="contained" sx={{ mt: 2, bgcolor: '#004E69', color: 'white' }}>
            Submit
          </Button>
          </Box>
         
          </Box>
         
        </Box>
      </Modal>
            

          <Grid item lg={4} md={6} sm={12}>
            <Paper sx={{ height: '130px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '10px' }}>
              <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
                <Typography fontWeight={'bold'} variant='h6'>Mobile Appilication</Typography>
                <Button variant='contained'  sx={{bgcolor:'#FF505F',color:'white'}}>Download</Button>
              </Box>
              <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
                <Typography fontWeight={'bold'} variant='h6'>Desktop Appilication</Typography>
                <Button variant='contained' sx={{bgcolor:'#FF505F',color:'white'}}>Download</Button>
              </Box>
            </Paper>
          </Grid>


          <Grid item lg={8} md={6} sm={12}>
            <Paper sx={{ minHeight: '130px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '10px' }}>
              <Typography sx={{ fontWeight: 'bold', padding: '2px' }}>About me</Typography>
             
              <Typography>{aboutMe}</Typography>  
              <Button onClick={()=>handleOpen()} variant="contained" sx={{ marginRight: '10px', width: '100px' ,bgcolor:"#004E69",color:"white"}}>Edit</Button>
            </Paper>
          </Grid>
          <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            About me
          </Typography>
          <Box sx={{display:'flex',flexDirection:'column'}}>
          <TextField id="modal-description"     multiline
          rows={10}sx={{ mt: 2 }} defaultValue={aboutMe} onChange={(e)=>handleAboutChange(e.target.value)}>
          
          </TextField>
          <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
          
          <Button onClick={handleClose} variant="contained" sx={{ mt: 2, bgcolor: '#004E69', color: 'white' }}>
            Close
          </Button>
          <Button onClick={handleClose} variant="contained" sx={{ mt: 2, bgcolor: '#004E69', color: 'white' }}>
            Submit
          </Button>
          </Box>
         
          </Box>
         
        </Box>
      </Modal>
        </Grid>
      </Grid>
    
    </Grid>



  );
}

export default AdminProfile;
