import React, { useState } from "react";
import {
	Box,
	Button,
	Card,
	FormControlLabel,
	RadioGroup,
	Radio,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	Grid,
	Dialog,
	Pagination,
	FormControl,
	Select,MenuItem,
	InputLabel
} from "@mui/material";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import Navbar from "./Assets/Nav";
import Sidebar from "./Assets/Side";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RequestLeave from "./RequestLeave";


const employeeTable = [
	{
		no: 1,
		day: "Monday",
		date: "17/07/2024",
		checkIn: "9:00",
		checkOut: "18:00",
		status: "Work from home",
		hours: "10h2m",
	},
	{
		no: 2,
		day: "Tuesday",
		date: "17/07/2024",
		checkIn: "00:00",
		checkOut: "00:00",
		status: "Absent",
		hours: "0m",
	},
	{
		no: 3,
		day: "Wednesday",
		date: "17/07/2024",
		checkIn: "9:00",
		checkOut: "18:00",
		status: "Work from office",
		hours: "10h2m",
	},
	{
		no: 4,
		day: "Thursday",
		date: "17/07/2024",
		checkIn: "9:00",
		checkOut: "18:00",
		status: "Work from home",
		hours: "10h2m",
	},
	{
		no: 5,
		day: "Friday",
		date: "17/07/2024",
		checkIn: "10:30",
		checkOut: "18:00",
		status: "Work from office",
		hours: "8h30m",
	},
	{
		no: 6,
		day: "Saturday",
		date: "17/07/2024",
		checkIn: "00:00",
		checkOut: "00:00",
		status: "Absent",
		hours: "0m",
	},
	{
		no: 7,
		day: "Sunday",
		date: "17/07/2024",
		checkIn: "00:00",
		checkOut: "00:00",
		status: "Absent",
		hours: "0m",
	},
	{
		no: 8,
		day: "Monday",
		date: "17/07/2024",
		checkIn: "9:00",
		checkOut: "18:00",
		status: "Work from home",
		hours: "10h2m",
	},
	{
		no: 9,
		day: "Tuesday",
		date: "17/07/2024",
		checkIn: "10:30",
		checkOut: "18:00",
		status: "Work from office",
		hours: "8h30m",
	},
	{
		no: 10,
		day: "Wednesday",
		date: "17/07/2024",
		checkIn: "9:00",
		checkOut: "18:00",
		status: "Work from home",
		hours: "10h2m",
	},
];

const EmployeeAttendance = () => {
	const [data, setData] = useState(employeeTable);
	const [selectedDate, setSelectedDate] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedFilter, setSelectedFilter] = useState("All"); // Add state for filter
	const [page, setPage] = useState(0);
	const [rowsPerPage] = useState(10);
	const filterData = () => {
		return data.filter((staffMember) => {
			const matchesSearch = Object.values(staffMember).some((value) =>
				value.toString().toLowerCase().includes(searchTerm.toLowerCase())
			);

			let matchesFilter = true;
			if (selectedFilter === "Half Day") {
				matchesFilter = staffMember.checkIn === "10:30";
			} else if (selectedFilter === "Present") {
				matchesFilter =
					staffMember.checkIn !== "00:00" && staffMember.status !== "Absent";
			} else if (selectedFilter === "Absent") {
				matchesFilter = staffMember.checkIn === "00:00";
			}

			// Filter by selected date
			let matchesDate = true;
			if (selectedDate) {
				const formattedSelectedDate = selectedDate.toLocaleDateString("en-GB"); // Format date as "dd/MM/yyyy"
				matchesDate = staffMember.date === formattedSelectedDate;
			}

			return (
				matchesSearch &&
				(selectedFilter === "All" || matchesFilter) &&
				matchesDate
			);
		});
	};

	const filteredData = filterData();
	const paginatedData = filteredData.slice(
		page * rowsPerPage,
		page * rowsPerPage + rowsPerPage
	);
	const totalPages = Math.ceil(filteredData.length / rowsPerPage);

	const handleChangePage = (event, newPage) => setPage(newPage - 1);

	const getCurrentPageItemsCount = () => {
		const startIndex = page * rowsPerPage;
		const endIndex = Math.min(startIndex + rowsPerPage, filteredData.length);
		return endIndex - startIndex;
	};

	const itemsPerPage = getCurrentPageItemsCount();
    const [open, setOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState(null);
    
    const clickClose = () => {
        setOpen(false);
    };
    
    const handleRequestForLeaveClick = () => {
        setDialogContent(<RequestLeave />);
        setOpen(true);
    };
    
    const [openIn, setOpenIn] = useState(false);
    const [dialogContentIn, setDialogContentIn] = useState(null);
    
    const clickCloseIn = () => {
        setOpenIn(false); // Use openIn state to control the first dialog
    };
    
    const handleRequestForLeaveClickIn = () => {
        setDialogContentIn(<CheckIn />);
        setOpenIn(true); // Use openIn state to open the first dialog
    };
    
    const [openOut, setOpenOut] = useState(false);
    const [dialogContentOut, setDialogContentOut] = useState(null);
    const clickCloseOut = () => {
        console.log('Back to Home clicked'); // For debugging
        setOpenOut(false);
    };
    const handleRequestForLeaveClickOut = () => {
        setDialogContentOut(<CheckOut />);
        setOpenOut(true); // Use openOut state to open the second dialog
    };

	return (
    <Grid container bgcolor={'#E5F1FF'} sx={{ height: '100vh', overflowY: "auto" }}>
    <Grid item lg={12} xs={12} sx={{ flexShrink: 0 }}>
    <Navbar sx={{ height: '64px' }} />
    </Grid>

    <Grid container item lg={12} xs={11.5} sx={{ height: 'calc(100vh - 64px)' }}>
    <Grid item lg={2} md={1.2} sm={2} xs={12} sx={{ height: '100%' }}>
        <Sidebar />
    </Grid>

    <Grid item lg={9.8} md={10.8} sm={10} xs={12} bgcolor={'#E5F1FF'} sx={{ height: '100%', mt: -5 }}>
      <Card
        sx={{
          width: "94%",
          height: "950px",
          border: "1px solid #E8E8E8",
          borderRadius: "20px",
          ml: { xs: 0, sm: 2, md: 4 },
          padding: "20px",
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            mb: 3,
            flexWrap: { xs: "wrap" }, // Allow wrapping on small screens
          }}
        >
          <Grid item xs={12} sm={6} md="auto">
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: "700",
                fontSize: { xs: "16px", sm: "20px" },
                color: "#000000",
              }}
            >
              Attendance overview
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md="auto">
            <FormControl fullWidth variant="outlined">
              <InputLabel id="filter-select-label">Filter</InputLabel>
              <Select
                labelId="filter-select-label"
                id="filter-select"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                label="Filter"
                sx={{
                  fontFamily: "Lato",
                  fontSize: "16px",
                  fontWeight: 300,
                  width: { xs: "100%", md: "150px" }, // Full width on small screens
                }}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Present">Present</MenuItem>
                <MenuItem value="Half Day">Half Day</MenuItem>
                <MenuItem value="Absent">Absent</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md="auto">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="d MMMM yyyy"
              placeholderText="Select a date"
              showYearDropdown
              scrollableMonthYearDropdown
              customInput={
                <input
                  style={{
                    width: "100%", // Full width on small screens
                    maxWidth: "110px", // Set max width for larger screens
                    height: "25px",
                    padding: "8px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    background: "#C0C0C033",
                  }}
                />
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md="auto">
            <Button
              onClick={handleRequestForLeaveClick}
              sx={{
                width: "100%", // Full width on small screens
                maxWidth: "130px", // Set max width for larger screens
                height: "40px",
                bgcolor: "#004E69",
                "&:hover": {
                  bgcolor: "#004E69",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: "400",
                  fontSize: "10px",
                  lineHeight: "24px",
                  color: "white",
                }}
              >
                Request for leave
              </Typography>
            </Button>
          </Grid>

          <Grid item xs={6} sm={3} md="auto">
            <Button
              onClick={handleRequestForLeaveClickIn}
              sx={{
                width: "100%", // Full width on small screens
                maxWidth: "75px", // Set max width for larger screens
                height: "40px",
                bgcolor: "#2596BE",
                "&:hover": {
                  bgcolor: "#2596BE",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: "400",
                  fontSize: "10px",
                  lineHeight: "24px",
                  color: "white",
                }}
              >
                IN
              </Typography>
            </Button>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Button
              onClick={handleRequestForLeaveClickOut}
              sx={{
                width: "100%", // Full width on small screens
                maxWidth: "75px", // Set max width for larger screens
                height: "40px",
                bgcolor: "#2596BE",
                "&:hover": {
                  bgcolor: "#2596BE",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: "400",
                  fontSize: "10px",
                  lineHeight: "24px",
                  color: "white",
                }}
              >
                OUT
              </Typography>
            </Button>
          </Grid>
        </Grid>
      
						<TableContainer
							sx={{
								width: "100%",
								height: "100%",
								overflow: "hidden",
								marginTop: "50px",
							}}
						>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell sx={{ width: "5%", borderBottom: "none" }}>
											<Typography
												sx={{
													fontFamily: "Lato",
													fontWeight: "700",
													fontSize: "14px",
													lineHeight: "16.8px",
													color: "#515151",
												}}
											>
												S/N
											</Typography>
										</TableCell>
										<TableCell sx={{ width: "10%", borderBottom: "none" }}>
											<Typography
												sx={{
													fontFamily: "Lato",
													fontWeight: "700",
													fontSize: "14px",
													lineHeight: "16.8px",
													color: "#515151",
												}}
											>
												Day
											</Typography>
										</TableCell>
										<TableCell sx={{ width: "10%", borderBottom: "none" }}>
											<Typography
												sx={{
													fontFamily: "Lato",
													fontWeight: "700",
													fontSize: "14px",
													lineHeight: "16.8px",
													color: "#515151",
												}}
											>
												Date
											</Typography>
										</TableCell>
										<TableCell sx={{ width: "10%", borderBottom: "none" }}>
											<Typography
												sx={{
													fontFamily: "Lato",
													fontWeight: "700",
													fontSize: "14px",
													lineHeight: "16.8px",
													color: "#515151",
												}}
											>
												Check In
											</Typography>
										</TableCell>
										<TableCell sx={{ width: "10%", borderBottom: "none" }}>
											<Typography
												sx={{
													fontFamily: "Lato",
													fontWeight: "700",
													fontSize: "14px",
													lineHeight: "16.8px",
													color: "#515151",
												}}
											>
												Check Out
											</Typography>
										</TableCell>
										<TableCell sx={{ width: "10%", borderBottom: "none" }}>
											<Typography
												sx={{
													fontFamily: "Lato",
													fontWeight: "700",
													fontSize: "14px",
													lineHeight: "16.8px",
													color: "#515151",
												}}
											>
												Status
											</Typography>
										</TableCell>
										<TableCell sx={{ width: "10%", borderBottom: "none" }}>
											<Typography
												sx={{
													fontFamily: "Lato",
													fontWeight: "700",
													fontSize: "14px",
													lineHeight: "16.8px",
													color: "#515151",
												}}
											>
												Hours
											</Typography>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{paginatedData.map((staffMember, index) => (
										<TableRow key={index}>
											<TableCell sx={{ borderBottom: "none" }}>
												{staffMember.no}
											</TableCell>
											<TableCell sx={{ borderBottom: "none" }}>
												{staffMember.day}
											</TableCell>
											<TableCell sx={{ borderBottom: "none" }}>
												{staffMember.date}
											</TableCell>
											<TableCell sx={{ borderBottom: "none" }}>
												<Typography
													sx={{
														color:
															staffMember.checkIn === "9:00"
																? "#0043FF"
																: staffMember.checkIn === "00:00"
																? "#AA0000"
																: staffMember.checkIn === "10:30"
																? "#D5B500"
																: "black",
													}}
												>
													{staffMember.checkIn}
												</Typography>
											</TableCell>
											<TableCell sx={{ borderBottom: "none" }}>
												<Typography
													sx={{
														color:
															staffMember.checkOut === "18:00"
																? "#0043FF"
																: "#AA0000",
													}}
												>
													{staffMember.checkOut}
												</Typography>
											</TableCell>
											<TableCell sx={{ borderBottom: "none" }}>
												<Typography
													sx={{
														color:
															staffMember.status === "Work from home"
																? "#FEB634"
																: staffMember.status === "Absent"
																? "#AA0000"
																: staffMember.status === "Work from office"
																? "#8A8A8A"
																: "black",
													}}
												>
													{staffMember.status}
												</Typography>
											</TableCell>
											<TableCell
												sx={{ borderBottom: "none", color: "#004E69" }}
											>
												{staffMember.hours}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
							<Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
								<Pagination
									variant="outlined"
									shape="rounded"
									count={totalPages}
									page={page + 1}
									onChange={handleChangePage}
									color="primary"
									style={{
										marginBottom: "40px",
										marginTop: "10px",
										marginLeft: "10px",
									}}
								/>
							</Box>
						</TableContainer>
					</Card>
				</Grid>
			</Grid>

      <Dialog open={open} onClose={clickClose} sx={{ height: "720px" }}>
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Button
                    sx={{
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
                    Back to Home
                </Button>
                <Button
                    onClick={clickClose}
                    sx={{
                        mt: 60,
                        width: "80%",
                        fontFamily: "lato",
                        fontWeight: 500,
                        fontSize: "14px",
                        bgcolor: "#2596BE",
                        color: "white",
                        "&:hover": {
                            bgcolor: "#2596BE",
                        },
                    }}
                >
                    Done
                </Button>
            </Box>
            {dialogContent}
        </Dialog>

        <Dialog open={openIn} onClose={clickCloseIn}     PaperProps={{
        sx: {
            width: '60%', // Adjust this value to increase or decrease the width
            maxWidth: 'none', // Optional: removes any maxWidth constraints
            height:'550px'
        },
    }}>
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Button
                    sx={{
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
                    onClick={clickCloseIn}
                >
                    Back to Home
                </Button>
            </Box>
            {dialogContentIn}
        </Dialog>

        <Dialog open={openOut} onClose={clickCloseOut} 
        PaperProps={{
            sx: {
                width: '60%', // Adjust this value to increase or decrease the width
                maxWidth: 'none', // Optional: removes any maxWidth constraints
                height:'550px'
            },
        }}>
    
      <Box
        sx={{
          position: 'absolute',
          top: 16,      // Added some spacing from the top
          right: 16,    // Added some spacing from the right
          display: 'flex',
          flexDirection: 'column',
        }}
      >
               <Button
                    sx={{
                        mt:-2,
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
                    onClick={clickCloseOut}
                >
                    Back to Home
                </Button>
               
            </Box>
            {dialogContentOut}
        </Dialog>		</Grid>
	);
};

export default EmployeeAttendance;