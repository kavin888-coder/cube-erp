import {Box,Button,Card,FormControl,Grid,IconButton,InputLabel,MenuItem,OutlinedInput,Paper,Select,TextField, Typography, useMediaQuery} from '@mui/material';
import React,{useEffect,useRef,useState} from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import emp from '../../Assets/emp.png';
import Sidebar from './Assets/Side';
import AppBarComponent from './Assets/Nav';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Link } from 'react-router-dom';

const employee = [
  {
    name: "Vignesh",
    lname: "Haridoss",
    email: "Vigneshharidoss12@gmail.com",
    pNumber: "9940061733",
    gender: "male",
    aNumber: "7845693258",
    staffid: "12BAY08",
    designation: "Intern",
    offEmail: "abcd@gmail.com",
    userid: "CAS0012",
    role: "UI/UX Designer"
  }
];

const EditEmployee = () => {
  const [formData, setFormData] = useState(employee[0]);
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setFormData(employee[0]);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
        <Grid container bgcolor={'#E5F1FF'} sx={{ height: '100vh',overflowY:"auto"}}>
            <Grid item lg={12} xs={12} sx={{ flexShrink: 0 }}> 
                <AppBarComponent sx={{ height: '64px'}} /> 
            </Grid>

        <Grid container item lg={12} xs={11.5} sx={{ height: 'calc(100vh - 64px)' }}> 
            <Grid item lg={2} md={2} sm={2} xs={12} sx={{ height: '100%' }}> 
                <Sidebar />
            </Grid>
        
            <Grid item lg={9.8} md={10} sm={10} xs={12} bgcolor={'#E5F1FF'} sx={{ height: '100%',mt: -5}}>    
                  <Link to='/employeeAdd'> <Button sx={{ 
                          width: "100px", 
                          height: "40px", 
                          mt: "20px", 
                          ":focus": { outline: "transparent" }, 
                          ":active": { background: "transparent", bgcolor: "#E5F1FF" },
                      }}>
                      <Typography 
                          sx={{ 
                              fontFamily: "Lato", 
                              fontWeight: "500", 
                              fontSize: "16px", 
                              lineHeight: "24px", 
                              color: "linear-gradient(135deg, #14ADD6 0%, #384295 100%)", 
                          }}>
                          <KeyboardArrowLeftIcon sx={{ verticalAlign: "middle" }} />
                          Back
                      </Typography>
                  </Button></Link>

                  <Card sx={{
                          padding: "20px",
                          borderRadius: '10px',
                          width: { xs: "100%", sm: "100%" },
                          border: '1px solid #E8E8E8',
                          marginTop: '20px',
                          height: 'auto', 
                          ml: { xs: "-20px", sm: "20px" },
                          maxWidth: '95%', 
                          mx: 'auto',
                      }}>
                      <Typography sx={{ 
                              width: "157px", 
                              height: "27px", 
                              mt: "20px", 
                              ml: "30px", 
                              fontFamily: "Nunito", 
                              fontWeight: "800", 
                              fontSize: "20px", 
                              lineHeight: "27.28px", 
                              color: "#000000",
                          }}>
                          Edit Staff Profile
                      </Typography>

                      <Grid container spacing={3} sx={{ mt: '40px' }}>
                        <Grid item xs={12} md={5}>
                            <Paper
                                elevation={0}
                                sx={{
                                height: { sm: "100%", md: "100%", lg: '90%' },
                                width: { md: "80%", lg: '80%' },
                                border: "0.5px solid #E8E8E8",
                                borderRadius: "10px",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                ml: '40px',
                                maxWidth: '300px',
                                }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Box
                                    sx={{
                                    width: { xs: '75px', sm: "130px", lg: '150px' },
                                    height: { xs: '75px', sm: "130px", lg: '150px' },
                                    borderRadius: '50%',
                                    background: '#F2F2F2',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    }}>
                                    <img
                                    src={emp}
                                    alt='emp'
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        position: 'relative',
                                        zIndex: 1,
                                        opacity: 0.8,
                                    }}
                                    />
                                    <IconButton
                                    onClick={handleUploadClick}
                                    sx={{
                                        position: "absolute",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        zIndex: 2,
                                        p: 1,
                                    }}
                                    >
                                    <AddAPhotoIcon color='#A3A3A3' />
                                    </IconButton>
                                    <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    accept=".jpg,.jpeg,.png"
                                    />
                                </Box>
                                <Button variant='text' 
                                    onClick={handleUploadClick} sx={{
                                                  ":hover": { background: 'transparent' },
                                                  ":active": { background: 'transparent' },
                                                  padding: 0,
                                                  border: 'none',
                                                  position: "relative", 
                                                  zIndex: 2
                                              }}>
                                              <Typography sx={{
                                                      width: "84px", 
                                                      height: "24px", 
                                                      fontFamily: "Lato", 
                                                      fontWeight: "400", 
                                                      fontSize: "14px", 
                                                      lineHeight: "24px", 
                                                      color: "#515151", 
                                                      mt:-15,
                                                      textTransform: "none"
                                                  }}>
                                                  Upload Photo
                                              </Typography>
                                          </Button>
                                <Typography
                                    sx={{
                                    width: "126px",
                                    height: "48px",
                                    mt: "80px",
                                    fontFamily: "Lato",
                                    fontWeight: "400",
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                    color: "#777777",
                                    textTransform: "none",
                                    textAlign: "center"
                                    }}
                                >
                                    Allowed format<br /><span style={{ color: "black" }}>JPG, JPEG, and PNG</span>
                                </Typography>
                                <Typography
                                    sx={{
                                    width: "126px",
                                    height: "48px",
                                    mt: "20px",
                                    fontFamily: "Lato",
                                    fontWeight: "400",
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                    color: "#777777",
                                    textTransform: "none",
                                    textAlign: "center"
                                    }}
                                >
                                    Max file size<br /><span style={{ color: "black" }}>2MB</span>
                                </Typography>
                                </Box>
                            </Paper>
                            </Grid>
                          <Grid item xs={12} md={7}>
                            <Grid container spacing={2.5}>
                              <Grid item xs={6} md={6}>
                                <Typography sx={{width: "65px",height: "24px",fontFamily: "Lato",fontWeight: "500",fontSize: "14px",lineHeight: "24px",color: "#121212"}}>
                                  First name
                                </Typography>
                                <TextField
                                  name='name' placeholder="Enter first name" variant="outlined" value={formData.name} onChange={handleChange} fullWidth InputProps={{ readOnly: !isEditing }} sx={{width: "100%",height: "50px",mt: "10px",borderRadius: "10px",border: "1px solid #D0D0D0",'& .MuiInputBase-root': { height: "100%" },'& .MuiInputBase-input': {height: "100%",padding: '0 14px',textAlign: 'center'}}}/>
                              </Grid>

                              <Grid item xs={6} md={6}>
                                <Typography sx={{width: "65px",height: "24px",fontFamily: "Lato",fontWeight: "500",fontSize: "14px",lineHeight: "24px",color: "#121212"}}>
                                  Last name
                                </Typography>
                                <TextField 
                                  placeholder="Enter Last name" variant="outlined" name="lname" value={formData.lname} onChange={handleChange} fullWidth InputProps={{ readOnly: !isEditing }} sx={{width: "100%",height: "50px",mt: "10px",borderRadius: "10px",border: "1px solid #D0D0D0",'& .MuiInputBase-root': { height: "100%" },'& .MuiInputBase-input': {height: "100%",padding: '0 14px',textAlign: 'center'}}}/>
                              </Grid>

                              <Grid item xs={6} md={6}>
                                <Typography
                                  sx={{
                                    width: "85px",
                                    height: "24px",
                                    fontFamily: "Lato",
                                    fontWeight: "500",
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                    color: "#121212"
                                  }}
                                >
                                  Email address
                                </Typography>
                                <TextField
                                  placeholder="Enter email address"
                                  variant="outlined"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  fullWidth InputProps={{ readOnly: !isEditing }}
                                  sx={{
                                    width: "100%",
                                    height: "50px",
                                    mt: "10px",
                                    borderRadius: "10px",
                                    border: "1px solid #D0D0D0",
                                    '& .MuiInputBase-root': { height: "100%" },
                                    '& .MuiInputBase-input': {
                                      height: "100%",
                                      padding: '0 14px',
                                      textAlign: 'center',
                                      color: "#A3A3A3"
                                    }
                                  }}
                                />
                              </Grid>

                              <Grid item xs={6} md={6}>
                                <Typography
                                  sx={{
                                    width: "95px",
                                    height: "24px",
                                    fontFamily: "Lato",
                                    fontWeight: "500",
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                    color: "#121212"
                                  }}
                                >
                                  Phone Number
                                </Typography>
                                <TextField
                                  placeholder="Enter phone number"
                                  variant="outlined"
                                  name="PNumber"
                                  value={formData.pNumber}
                                  onChange={handleChange}
                                  fullWidth 
                                  InputProps={{ readOnly: !isEditing }}
                                  sx={{
                                    width: "100%",
                                    height: "50px",
                                    mt: "10px",
                                    borderRadius: "10px",
                                    border: "1px solid #D0D0D0",
                                    '& .MuiInputBase-root': { height: "100%" },
                                    '& .MuiInputBase-input': {
                                      height: "100%",
                                      padding: '0 14px',
                                      textAlign: 'center',
                                      color: "#A3A3A3"
                                    }
                                  }}
                                />
                              </Grid>

                              <Grid item xs={6} md={6}>
                                <Typography
                                  sx={{
                                    width: "65px",
                                    height: "24px",
                                    fontFamily: "Lato",
                                    fontWeight: "500",
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                    color: "#121212"
                                  }}
                                >
                                  Gender
                                </Typography>
                                <FormControl
                                  sx={{
                                    width: "100%",
                                    height: "50px",
                                    mt: "10px",
                                    borderRadius: "10px"
                                  }}
                                >
                                  <InputLabel id="gender-label">Select Gender</InputLabel>
                                  <Select
                                    labelId="gender-label"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    input={<OutlinedInput label="Select Gender" />}
                                    sx={{
                                      width: "100%",
                                      height: "100%",
                                      '& .MuiSelect-select': {
                                        padding: '0 14px',
                                        textAlign: 'center'
                                      }
                                    }}
                                  >
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>

                              <Grid item xs={6} md={6}>
                                <Typography
                                  sx={{
                                    width: "155px",
                                    height: "24px",
                                    fontFamily: "Lato",
                                    fontWeight: "500",
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                    color: "#121212"
                                  }}
                                >
                                  Alternative Phone number
                                </Typography>
                                <TextField
                                  placeholder="Enter Phone number"
                                  name="Anumber"
                                  value={formData.aNumber}
                                  onChange={handleChange}
                                  fullWidth InputProps={{ readOnly: !isEditing }}
                                  sx={{
                                    width: "100%",
                                    height: "50px",
                                    mt: "10px",
                                    borderRadius: "10px",
                                    border: "1px solid #D0D0D0",
                                    '& .MuiInputBase-root': { height: "100%" },
                                    '& .MuiInputBase-input': {
                                      height: "100%",
                                      padding: '0 14px',
                                      textAlign: 'center'
                                    }
                                  }}
                                />
                              </Grid>

                              <Grid item xs={6} md={6}>
                                <Typography
                                  sx={{
                                    width: "65px",
                                    height: "24px",
                                    fontFamily: "Lato",
                                    fontWeight: "500",
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                    color: "#121212"
                                  }}
                                >
                                  Staff ID
                                </Typography>
                                <TextField
                                  placeholder="Staff ID"
                                  name="StaffID"
                                  value={formData.staffid}
                                  onClick={handleChange}
                                  fullWidth InputProps={{ readOnly: !isEditing }}
                                  sx={{
                                    width: "100%",
                                    height: "50px",
                                    mt: "10px",
                                    borderRadius: "10px",
                                    border: "1px solid #D0D0D0",
                                    background: "#F2F2F2",
                                    '& .MuiInputBase-root': { height: "100%" },
                                    '& .MuiInputBase-input': {
                                      height: "100%",
                                      padding: '0 14px',
                                      textAlign: 'center'
                                    }
                                  }}
                                />
                              </Grid>

                              <Grid item xs={6} md={6}>
                                <Typography
                                  sx={{
                                    width: "65px",
                                    height: "24px",
                                    fontFamily: "Lato",
                                    fontWeight: "500",
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                    color: "#121212"
                                  }}
                                >
                                  Designation
                                </Typography>
                                <FormControl
                                  sx={{
                                    width: "100%",
                                    height: "50px",
                                    mt: "10px",
                                    borderRadius: "10px"
                                  }}
                                >
                                  <InputLabel id="designation-label">Select Designation</InputLabel>
                                  <Select
                                    labelId="designation-label"
                                    value={formData.designation}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    input={<OutlinedInput label="Select Designation" />}
                                    sx={{
                                      width: "100%",
                                      height: "100%",
                                      '& .MuiSelect-select': {
                                        padding: '0 14px',
                                        textAlign: 'center'
                                      }
                                    }}
                                  >
                                    <MenuItem value="Software Engineer">Software Engineer</MenuItem>
                                    <MenuItem value="Intern">Intern</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>

                              <Grid item xs={6} md={6}>
                                <Typography
                                  sx={{
                                    width: "85px",
                                    height: "24px",
                                    fontFamily: "Lato",
                                    fontWeight: "500",
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                    color: "#121212"
                                  }}
                                >
                                  Official Email
                                </Typography>
                                <TextField
                                  placeholder="Official Email"
                                  name="offEmail"
                                  value={formData.offEmail}
                                  onClick={handleChange}
                                  fullWidth InputProps={{ readOnly: !isEditing }}
                                  sx={{
                                    width: "100%",
                                    height: "50px",
                                    mt: "10px",
                                    borderRadius: "10px",
                                    border: "1px solid #D0D0D0",
                                    '& .MuiInputBase-root': { height: "100%" },
                                    '& .MuiInputBase-input': {
                                      height: "100%",
                                      padding: '0 14px',
                                      textAlign: 'center',
                                      color: "#A3A3A3"
                                    }
                                  }}
                                />
                              </Grid>
                              <Grid item xs={6} md={6}>
                            <Button
                              variant='contained'
                              onClick={handleEditClick}
                              sx={{
                                width: "100%",
                                height: "55px",
                                background: "#004E69",
                                mt: "30px",
                                ml: "5px",
                                borderRadius: "10px",
                                padding: "10px",
                                ":hover": { background: "#004E69" },
                                mb: "50px"
                              }}
                            >
                              <Typography
                                sx={{
                                  width: "88px",
                                  height: "24px",
                                  fontFamily: "Lato",
                                  fontWeight: "700",
                                  fontSize: "14px",
                                  lineHeight: "24px",
                                  textTransform: "none"
                                }}
                              >
                                {isEditing ? "Save" : "Edit Profile"}
                                </Typography>
                            </Button>
                          </Grid>
                          </Grid>
                          </Grid>
                          </Grid>
                          </Card>
                          

                            <Card
                            sx={{
                                padding: "20px",
                                borderRadius: '10px',
                                border: '1px solid #E8E8E8',
                                marginTop: '20px',
                                height: "220px",
                                ml: { xs: "-20px", sm: "20px" },
                                maxWidth: '95%',
                                mx: 'auto'
                            }}
                            >
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <Typography
                                sx={{
                                    width: "157px",
                                    height: "27px",
                                    fontFamily: "Lato",
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    lineHeight: "24px",
                                    color: "#000000",
                                    mt: "20px",
                                    ml: "20px"
                                }}
                                >
                                Assign Role
                                </Typography>
                                <Grid container spacing={2} sx={{ mt: "50px" }}>
                                <Grid item xs={4} sm={4}>
                                    <Typography
                                    sx={{
                                        width: "85px",
                                        height: "24px",
                                        fontFamily: "Lato",
                                        fontWeight: "600",
                                        fontSize: "14px",
                                        lineHeight: "24px",
                                        color: "#121212"
                                    }}
                                    >
                                    User ID
                                    </Typography>
                                    <TextField
                                    placeholder="User ID"
                                    variant='outlined'
                                    name='userid'
                                    value={formData.userid}
                                    onChange={handleChange}
                                    sx={{
                                        width: "100%",
                                        height: "50px",
                                        mt: "10px",
                                        borderRadius: "10px",
                                        border: "1px solid #D0D0D0",
                                        background: "#F2F2F2",
                                        '& .MuiInputBase-root': { height: "100%" },
                                        '& .MuiInputBase-input': {
                                        height: "100%",
                                        padding: '0 14px',
                                        textAlign: 'center'
                                        }
                                    }}
                                    />
                                </Grid>
                                <Grid item xs={4} sm={4}>
                                    <Typography
                                    sx={{
                                        width: "65px",
                                        height: "24px",
                                        fontFamily: "Lato",
                                        fontWeight: "500",
                                        fontSize: "14px",
                                        lineHeight: "24px",
                                        color: "#121212"
                                    }}
                                    >
                                    Role
                                    </Typography>
                                    <FormControl
                                    sx={{
                                        width: "100%",
                                        height: "50px",
                                        mt: "10px",
                                        borderRadius: "10px"
                                    }}
                                    >
                                    <InputLabel id="role-label">Select role</InputLabel>
                                    <Select
                                        labelId="role-label"
                                        value={formData.role}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Select Role" />}
                                        sx={{
                                        width: "100%",
                                        height: "100%",
                                        '& .MuiSelect-select': {
                                            padding: '0 14px',
                                            textAlign: 'center'
                                        }
                                        }}
                                    >
                                        <MenuItem value="Developer">Developer</MenuItem>
                                        <MenuItem value="UI/UX Designer">UI/UX Designer</MenuItem>
                                        <MenuItem value="Tester">Tester</MenuItem>
                                        <MenuItem value="other">Other</MenuItem>
                                    </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button
                                    variant='contained'
                                    sx={{
                                        width: "100%",
                                        height: "50px",
                                        background: "#004E69",
                                        mt: "30px",
                                        borderRadius: "10px",
                                        padding: "10px",
                                        ":hover": { background: "#004E69" }
                                    }}
                                    >
                                    <Typography
                                        sx={{
                                        width: "88px",
                                        height: "24px",
                                        fontFamily: "Lato",
                                        fontWeight: "700",
                                        fontSize: "14px",
                                        lineHeight: "24px",
                                        textTransform: "none"
                                        }}
                                    >
                                        Submit
                                    </Typography>
                                    </Button>
                                </Grid>
                                </Grid>
                            </Box>
                            </Card>

                        </Grid>
                    </Grid>
                </Grid>
    
    )
}

export default EditEmployee;
