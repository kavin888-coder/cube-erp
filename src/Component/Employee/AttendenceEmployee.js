import React, { useState } from "react";
import {
	Box,
	Button,
	Card,
	FormControlLabel,
	InputAdornment,
	RadioGroup,
	Radio,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	TextField,
	Grid,
	Dialog,
	Pagination,
} from "@mui/material";
import Navbar from "./Assets/Nav";
import Sidebar from "./Assets/Side";
import RequestLeave from "./RequestLeave";
import SearchIcon from "@mui/icons-material/Search";

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
        day:"Tuesday",
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
	const [searchTerm, setSearchTerm] = useState("");
	const [staff, setStaff] = useState("");
	const [page, setPage] = useState(0);
	const [rowsPerPage] = useState(10);

	const filterData = () => {
		return data.filter((staffMember) => {
			const matchesSearch = Object.values(staffMember).some((value) =>
				value.toString().toLowerCase().includes(searchTerm)
			);
			const matchesStaffFilter = staff ? staffMember.role === staff : true;
			return matchesSearch && matchesStaffFilter;
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

	return (
		<Grid
			container
			bgcolor={"#E5F1FF"}
			sx={{ height: "100vh", overflowY: "hidden" }}
		>
			<Grid item lg={12} xs={12} sx={{ flexShrink: 0 }}>
				<Navbar sx={{ height: "64px" }} />
			</Grid>

			<Grid
				container
				item
				lg={12}
				xs={11.5}
				sx={{ height: "calc(100vh - 64px)" }}
			>
				<Grid item lg={2} md={1.2} sm={2} xs={12} sx={{ height: "100%" }}>
					<Sidebar />
				</Grid>

				<Grid
					item
					lg={9.8}
					md={10.8}
					sm={10}
					xs={12}
					bgcolor={"#E5F1FF"}
					sx={{ height: "100%", mt: -5 }}
				>
					<Card
						sx={{
							width: "95%",
							height: "800px",
							border: "1px solid #E8E8E8",
							borderRadius: "20px",
							ml: { xs: 2, md: 4 },
							padding: "20px",
						}}
					>
						<Grid container spacing={2} alignItems="center" sx={{ mb: 3 }}>
							<Grid item xs={12} sm={6} md={3}>
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

							<Grid item xs={12} sm={6} md={5}>
								<RadioGroup
									row
									aria-labelledby="demo-row-radio-buttons-group-label"
									name="row-radio-buttons-group"
								>
									<FormControlLabel
										value="All"
										control={<Radio />}
										label="All"
										sx={{
											"& .MuiTypography-root": {
												fontFamily: "Lato",
												fontSize: "16px",
												fontWeight: 300,
											},
										}}
									/>
									<FormControlLabel
										value="Present"
										control={<Radio />}
										label="Present"
										sx={{
											"& .MuiTypography-root": {
												fontFamily: "Lato",
												fontSize: "16px",
												fontWeight: 300,
											},
										}}
									/>
									<FormControlLabel
										value="Half Day"
										control={<Radio />}
										label="Half Day"
										sx={{
											"& .MuiTypography-root": {
												fontFamily: "Lato",
												fontSize: "16px",
												fontWeight: 300,
											},
										}}
									/>
									<FormControlLabel
										value="Absent"
										control={<Radio />}
										label="Absent"
										sx={{
											"& .MuiTypography-root": {
												fontFamily: "Lato",
												fontSize: "16px",
												fontWeight: 300,
											},
										}}
									/>
								</RadioGroup>
							</Grid>

							<Grid item xs={12} sm={6} md={1.5}>
								<TextField
									sx={{
										"& .MuiInputBase-root": {
											width: "100%",
											height: "40px",
										},
										"& .MuiInputBase-input": {
											height: "40px",
											padding: "0 14px",
										},
									}}
									placeholder="Search"
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<SearchIcon />
											</InputAdornment>
										),
									}}
								/>
							</Grid>

							<Grid item xs={12} sm={6} md={1.25}>
								<Button
									onClick={handleRequestForLeaveClick}
									sx={{
										width: "100%",
										height: "40px",
										border: "1px solid black",
										bgcolor: "#004E69",
										"&:hover": {
											bgcolor: "#004E69", // Same background color as default
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

							<Grid item xs={12} sm={6} md={1.25}>
								<Button
									sx={{
										width: "100%",
										height: "40px",
										border: "1px solid black",
										bgcolor: "#2596BE",
										"&:hover": {
											bgcolor: "#2596BE", // Same background color as default
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
										View Attendance
									</Typography>
								</Button>
							</Grid>
						</Grid>

						<TableContainer
							sx={{
								width: "100%",
								height: "100%",
								overflowX: "hidden",
								marginTop: "50px",
							}}
						>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell sx={{ width: "5%",borderBottom:"none" }}>
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
										<TableCell sx={{ width: "10%",borderBottom:"none" }}>
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
										<TableCell sx={{ width: "10%",borderBottom:"none" }}>
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
										<TableCell sx={{ width: "10%",borderBottom:"none" }}>
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
										<TableCell sx={{ width: "10%",borderBottom:"none" }}>
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
										<TableCell sx={{ width: "10%",borderBottom:"none" }}>
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
										<TableCell sx={{ width: "10%",borderBottom:"none" }}>
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
											<TableCell sx={{borderBottom:"none"}}>{staffMember.no}</TableCell>
											<TableCell sx={{borderBottom:"none"}}>{staffMember.day}</TableCell>
											<TableCell sx={{borderBottom:"none"}}>{staffMember.date}</TableCell>
                                            <TableCell sx={{borderBottom:"none"}}><Typography sx={{color: staffMember.checkIn === "9:00"?"#0043FF":staffMember.checkIn === "00:00"?'#AA0000':staffMember.checkIn==="10:30"?"#D5B500":"black" }}>{staffMember.checkIn}</Typography></TableCell>											
                                            <TableCell sx={{borderBottom:"none"}}><Typography sx={{color: staffMember.checkOut==='18:00'?"#0043FF":"#AA0000" }}>{staffMember.checkOut}</Typography></TableCell>											
                                            <TableCell sx={{borderBottom:"none"}}><Typography sx={{ color: staffMember.status === "Work from home" ? "#FEB634" : staffMember.status === "Absent" ? "#AA0000" :staffMember.status === "Work from office" ? "#8A8A8A":"black",}}>{staffMember.status}</Typography></TableCell>
                                            <TableCell sx={{borderBottom:"none",color: "#004E69"}}>{staffMember.hours}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
							<Box
								sx={{
									p: 2,
									display: "flex",
									justifyContent: "center",
									backgroundColor: "white",
									borderBottomLeftRadius: "10px",
									borderBottomRightRadius: "10px",
								}}
							>
								<Pagination
									variant="outlined"
									shape="rounded"
									count={totalPages}
									page={page + 1}
									onChange={handleChangePage}
								/>
							</Box>
						</TableContainer>
					</Card>
				</Grid>
			</Grid>
			<Dialog open={open} onClose={clickClose} sx={{ height: "700px" }}>
				<Box sx={{ position: "absolute", top: 0, right: 0, p: 2 ,display:'flex'}}>
					<Button
						sx={{mr:-10,
                            mt:-60,
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
                    sx={{mt:63
                        
                    }}onClick={clickClose}>Done</Button>
				</Box>
				{dialogContent}
			</Dialog>
		</Grid>
	);
};

export default EmployeeAttendance;
