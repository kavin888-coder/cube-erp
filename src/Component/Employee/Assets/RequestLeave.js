import React, { useState } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField
} from "@mui/material";
import DatePicker from "react-datepicker";

const RequestLeave = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [type1, setType1] = useState("");
  

  const handleType1Change = (event) => setType1(event.target.value);


  return (
    <Box
      sx={{
        maxWidth: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "495px", height: "625px" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", position: "relative" }}></Box>
        <Box
          sx={{
            width: "459px",
            height: "412px",
            position: "relative",
            left: "40px",
            top: "48px",
          }}
        >
          <Box
            sx={{
              width: "271px",
              height: "38px",
              position: "relative",
              top: "-19px",
              left: "-25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontFamily: "lato", fontWeight: 500, fontSize: "32px" }}>
              Request for leave
            </Typography>
          </Box>

          <Box
            sx={{
              position: "relative",
              top: "35px",
              left: "3px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              width: "439px",
              height: "269px",
            }}
          >
            <Box sx={{ display: "flex", gap: 12 }}>
              <Typography sx={{ mt: 1.5 }}>Type</Typography>
              <FormControl sx={{ width: "303px" }}>
                <InputLabel id="type1-label">Select Leave type</InputLabel>
                <Select
                  labelId="type1-label"
                  value={type1}
                  onChange={handleType1Change}
                  label="Select Leave type "
                  sx={{
                    borderRadius: "12px",
                    height: "49px",
                  }}
                >
                  <MenuItem value={"Type1-Option1"}>General</MenuItem>
                  <MenuItem value={"Type1-Option2"}>personal</MenuItem>
                  <MenuItem value={"Type1-Option3"}>Sick leave</MenuItem>
                </Select>
              </FormControl>
            </Box>

            


            <Box sx={{ display: "flex", gap: 8 }}>
              <Typography sx={{ mt: 1.5 }}>Start date</Typography>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="d MMMM yyyy"
                placeholderText="Select a date"
                showYearDropdown
                scrollableMonthYearDropdown
                customInput={
                  <input
                    style={{
                      width: "110px",
                      height: "25px",
                      padding: "8px",
                      fontSize: "16px",
                      borderRadius: "5px",
                      border: "1px solid #D5D9DD",
                      background: "#C0C0C033",
                    }}
                  />
                }
              />
            </Box>

            <Box sx={{ display: "flex", gap: 8.5 }}>
              <Typography sx={{ mt: 1.5 }}>End date</Typography>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="d MMMM yyyy"
                placeholderText="Select a date"
                showYearDropdown
                scrollableMonthYearDropdown
                customInput={
                  <input
                    style={{
                      width: "110px",
                      height: "25px",
                      padding: "8px",
                      fontSize: "16px",
                      borderRadius: "5px",
                      border: "1px solid #D5D9DD",
                      background: "#C0C0C033",
                    }}
                  />
                }
              />
            </Box>

            <Box sx={{ display: "flex", gap: 10 }}>
              <Typography sx={{ mt: 1.5 }}>Reason</Typography>
              <TextField
                variant="outlined"
                placeholder="Enter your reason"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    border: "1px",
                    borderRadius: "12px",
                    width: "303px",
                    height: "127px",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RequestLeave;
