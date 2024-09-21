import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const CheckOut = () => {
  const [startDate, setStartDate] = useState("");
  const [type1, setType1] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [cameraVisible, setCameraVisible] = useState(false);
  const [videoStream, setVideoStream] = useState(null);
  const [avatarSrc, setAvatarSrc] = useState(null);
  const [isAvatarUploaded, setIsAvatarUploaded] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const videoRef = useRef(null);
  const canvasRef = useRef(document.createElement('canvas'));

  const handleType1Change = (event) => setType1(event.target.value);

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;
    
    setStartDate(formattedDate);
    setCheckInTime(formattedTime);
  }, []);

  useEffect(() => {
    if (videoStream && videoRef.current) {
      videoRef.current.srcObject = videoStream;
    }
  }, [videoStream]);

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setVideoStream(stream);
      setCameraVisible(true);
    } catch (error) {
      console.error("Error accessing camera: ", error);
    }
  };

  const closeCamera = () => {
    if (videoStream) {
      videoStream.getTracks().forEach(track => track.stop());
    }
    setCameraVisible(false);
  };

  const takeSnapshot = () => {
    if (videoRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      const dataURL = canvas.toDataURL('image/png');
      setAvatarSrc(dataURL);
      setIsAvatarUploaded(true); // Mark avatar as uploaded
      closeCamera();
    }
  };

  const handleDoneClick = () => {
    if (!isAvatarUploaded) {
      setDialogMessage("Please upload your profile picture.");
      setDialogOpen(true);
    } else {
      setDialogMessage("Your check-out has been recorded successfully.");
      setDialogOpen(true);
    }
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%", height: "100%" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", position: "relative" }}></Box>
        <Box
          sx={{
            width: "640px",
            height: "400px",
            position: "relative",
            left: "40px",
            top: "20px"
          }}
        >
          <Box
            sx={{
              width: "161px",
              height: "38px",
              position: "relative",
              top: 5,
              left: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontFamily: "lato", fontWeight: 400, fontSize: "32px",color:'#252C58'}}>
              Attendance
            </Typography>
          </Box>

          <Box
            sx={{
              width: "200px",
              height: "205px",
              backgroundColor: "lightgray",
              position: "relative",
              top: 65,
              left: 42,
              border: "1px solid black",
            }}
          >
            <Avatar
              sx={{
                width: "200px",
                height: "204.85px",
                cursor: "pointer", 
                color:' white',
                bgcolor:'#004E69',
              }}
              onClick={openCamera}
              src={avatarSrc} // Use the avatarSrc state for the image
            />
             <Typography onClick={openCamera} sx={{ cursor: 'pointer',ml:5,fontFamily: "lato", fontWeight: 400, fontSize: "20px",color:'#252C58' }}>
               Click a picture
             </Typography>
          </Box>
          
          <Box sx={{ display: "flex", gap: 8, ml: 45, mt: -16.5 }}>
            <Typography sx={{ mt: 1.5,fontFamily: "lato", fontWeight: 400, fontSize: "20px",color:'#252C58' }}>Date</Typography>
            <Typography sx={{ mt: 1.5,ml:10 }}>{startDate}</Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 8, mt: 1, ml: 45 }}>
            <Typography sx={{ mt: 1.5,fontFamily: "lato", fontWeight: 400, fontSize: "20px",color:'#252C58' }}>CheckIn Time</Typography>
            <Typography sx={{ mt: 1.5 }}>{checkInTime}</Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 12, mt: 1, ml: 45 }}>
            <Typography sx={{ mt: 1.5,fontFamily: "lato", fontWeight: 400, fontSize: "20px",color:'#252C58' }}>Status</Typography>
            <FormControl sx={{ width: "150px" }}>
              <InputLabel id="type1-label">select status </InputLabel>
              <Select
                labelId="type1-label"
                value={type1}
                onChange={handleType1Change}
                label="select status type"
                sx={{
                  borderRadius: "12px",
                  height: "49px",
                }}
              >
                <MenuItem value={"Type1-Option1"}>work from office</MenuItem>
                <MenuItem value={"Type1-Option2"}>work from home</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {cameraVisible && (
            <Box
              sx={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "8px",
                padding: "10px",
                zIndex: 1000
              }}
            >
              <video
                autoPlay
                ref={videoRef}
                style={{
                  width: '250px',
                  height: '220px',
                  border: '1px solid black'
                }}
              ></video>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', mt: '10px' }}>
                <Button variant="contained" color="primary" onClick={takeSnapshot}>Click</Button>
                <Button variant="contained" color="secondary" onClick={closeCamera}>Cancel</Button>
              </Box>
            </Box>
          )}

          <Button
            onClick={handleDoneClick}
            sx={{
              mt: 10,
              width: "15%",
              ml:70,
              fontFamily: "lato",
              fontWeight: 500,
              fontSize: "14px",
              bgcolor: "#2596BE",
              color: "white",
              "&:hover": {
                bgcolor: "#2596BE",
              },
              disabled: !isAvatarUploaded // Disable button until avatar is uploaded
            }}
          >
            Done
          </Button>      
        </Box>
      </Box>

      {/* Dialog for alert messages */}
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle>Alert</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CheckOut;