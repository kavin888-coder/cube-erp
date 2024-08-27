import React from "react";
import {
	Box,
	Typography,
	Icon,
	Button,
	TextField,
	InputAdornment,
	IconButton,
	Checkbox,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
const label = {
	InputProps: {
		"arial-label": "checkbox",
	},
};
const RequestLeave = () => {
	return (
		<Box
			sx={{
				maxWidthwidth: "100vw",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box sx={{ width: "495px", height: "625px" }}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						position: "relative",
					}}
				></Box>
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
						<Typography
							sx={{ fontFamily: "lato", fontWeight: 500, fontSize: "32px" }}
						>
							Request for leave
						</Typography>
					</Box>

					<Box
						sx={{
							position: "relative",
							top: "45px",
							left: "3px",
							display: "flex",
							flexDirection: "column",
							gap: 4,
							width: "439px",
							height: "269px",
						}}
					>
						<Box sx={{ display: "flex",gap:12  }}>
							<Typography sx={{ mt: 1.5 }}>Type</Typography>
							<TextField
								variant="outlined"
								placeholder="Password"
								sx={{
									"& .MuiOutlinedInput-root": {
										border: "1px",
										borderRadius: "12px",
										width: "303px",
										height: "49px",
									},
								}}
							></TextField>
						</Box>

						<Box sx={{ display: "flex",gap:8}}>
							<Typography sx={{ mt: 1.5 }}>Start date</Typography>
							<TextField
								variant="outlined"
								placeholder="Password"
								sx={{
									"& .MuiOutlinedInput-root": {
										border: "1px",
										borderRadius: "12px",
										width: "303px",
										height: "49px",
									},
								}}
							></TextField>
						</Box>
						<Box sx={{ display: "flex", gap: 8.5 }}>
							<Typography sx={{ mt: 1.5 }}>End date</Typography>
							<TextField
								variant="outlined"
								placeholder="Password"
								sx={{
									"& .MuiOutlinedInput-root": {
										border: "1px",
										borderRadius: "12px",
										width: "303px",
										height: "49px",
									},
								}}
							></TextField>
						</Box>

						<Box sx={{ display: "flex", gap: 10 }}>
							<Typography sx={{ mt: 1.5 }}>Reason</Typography>
							<TextField
								variant="outlined"
								placeholder="Password"
								sx={{
									"& .MuiOutlinedInput-root": {
										border: "1px",
										borderRadius: "12px",
										width: "303px",
										height: "127px",
									},
								}}
							></TextField>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
export default RequestLeave;
