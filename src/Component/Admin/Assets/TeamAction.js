import React, { useState, useEffect } from 'react';
import { parse, isValid, format } from 'date-fns';
import { Grid, Box, Typography, TextField, MenuItem, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { styled } from '@mui/material/styles';

const CustomDatePicker = styled(DatePicker)({
  '& .MuiInputBase-root': {
    height: '25px',
    width:"160px",
    borderRadius:"10px",
    marginLeft:"-85px",
  },
  '& .MuiInputBase-input': {
    // padding: '4px 8px',
    fontSize: '12px',
    lineHeight: '16px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#515151',
  },
  '& .MuiIconButton-root': {
    // padding: '4px',
  },
});

const parseDateSafely = (dateString) => {
  if (!dateString) return null;
  const parsedDate = parse(dateString, 'dd/MM/yyyy', new Date());
  return isValid(parsedDate) ? parsedDate : null;
};

const TeamAction = ({ task, onSave }) => {
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (task) {
      console.log('Task received:', task);
      const parsedStartDate = parseDateSafely(task.startDate);
      const parsedEndDate = parseDateSafely(task.endDate);

      setStartDate(parsedStartDate ? dayjs(parsedStartDate) : dayjs());
      setEndDate(parsedEndDate ? dayjs(parsedEndDate) : dayjs());
      setStatus(task.tasks || '');
    }
  }, [task]);

  const handleSaveChanges = () => {
    const updatedTask = {
      ...task,
      startDate: startDate ? format(startDate.toDate(), 'dd/MM/yyyy') : '',
      endDate: endDate ? format(endDate.toDate(), 'dd/MM/yyyy') : '',
      tasks: status,
    };

    if (onSave) {
      onSave(updatedTask);
    }
  };

  const styles = {
    container: {
      padding: '16px',
    },
    title: {
      marginBottom: '24px',
    },
    label: {
      fontWeight: '700',
      fontSize: '12px',
      color: '#515151',
    },
    textField: {
      height: 'auto',
      '& .MuiOutlinedInput-root': {
        height: 'auto',
        borderRadius: '10px',
      },
      '& .MuiInputLabel-root': {
        lineHeight: '20px',
      },
    },
    button: {
      width: '110px',
      height: '20px',
      background: '#004E69',
      '&:hover': {
        background: '#004E69',
      },
    },
    buttonText: {
      color: 'white',
      fontSize: '12px',
      textTransform: 'none',
    },
  };

  return (
    <Box style={styles.container}>
      {task ? (
        <Grid container spacing={2} sx={{ display: "flex", flexDirection: "column" }}>
          <Grid item xs={12} sm={12} sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={styles.label}>Team Name</Typography>
            <TextField
              value={task.team}
              InputProps={{
                readOnly: true,
                sx: {
                  height: '20px',
                  '& input': {
                    padding: '4px 8px',
                    fontSize: '12px',
                    lineHeight: '16px',
                  },
                },
              }}
              sx={{ ...styles.textField, ml: 5 }}
            />
          </Grid>

          <Grid item xs={12} sm={10} sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={styles.label}>Team Lead</Typography>
          <TextField
              value={task.teamlead}
              InputProps={{
                readOnly: true,
                sx: {
                  height: '20px',
                  '& input': {
                    padding: '4px 8px',
                    fontSize: '12px',
                    lineHeight: '16px',
                  },
                },
              }}
              sx={{...styles.textField,ml:5.5}}
            />
          </Grid>

          <Grid item xs={12} sm={10} sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={styles.label}>Phone Number</Typography>
            <TextField
              value={task.phoneNumber}
              InputProps={{
                readOnly: true,
                sx: {
                  height: '20px',
                  '& input': {
                    padding: '4px 8px',
                    fontSize: '12px',
                    lineHeight: '16px',
                  },
                },
              }}
              sx={{ ...styles.textField, ml: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={10}>
            <Box sx={{ display: "flex", flexDirection: "row", overflow: "hidden" }}>
              <Typography sx={{ ...styles.label, width: "188px" }}>Start Date</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CustomDatePicker
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      InputProps={{
                        readOnly: true,
                        sx: {
                          height: '20px',
                          width: 150,
                          '& input': {
                            padding: '4px 8px',
                            fontSize: '12px',
                            lineHeight: '16px',
                          },
                        },
                      }}
                      sx={{ ...styles.textField, ml:5 }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Box>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ ...styles.label, width: "188px", mt: 1 }}>End Date</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CustomDatePicker
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      InputProps={{
                        readOnly: true,
                        sx: {
                          height: '20px',
                          width: 150,
                          '& input': {
                            padding: '4px 8px',
                            fontSize: '12px',
                            lineHeight: '16px',
                          },
                        },
                      }}
                      sx={{ ...styles.textField, ml: -5, mt: 2.5 }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Box>
          </Grid>

          <Grid item xs={12} sm={10} sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ ...styles.label, width: "78px", mt: 2 }}>Task</Typography>
            <TextField
              select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              InputProps={{
                sx: {
                  height: '10px',
                  '& input': {
                    padding: '2px 2px',
                    fontSize: '10px',
                    lineHeight: '20px',
                  },
                },
              }}
              sx={{
                height: '20px',
                ml: 2.5,
                mt: 2,
                '& .MuiOutlinedInput-root': {
                  height: '100%',
                  borderRadius: '10px',
                },
                '& .MuiInputLabel-root': {
                  lineHeight: '40px',
                },
              }}
            >
              <MenuItem value="Yet to Start" sx={{ fontWeight: "400", fontSize: "12px" }}>Yet to Start</MenuItem>
              <MenuItem value="In progress" sx={{ fontWeight: "400", fontSize: "12px" }}>In Progress</MenuItem>
              <MenuItem value="Completed" sx={{ fontWeight: "400", fontSize: "12px" }}>Completed</MenuItem>
              <MenuItem value="In Validation" sx={{ fontWeight: "400", fontSize: "12px" }}>In Validation</MenuItem>
              <MenuItem value="Cancelled" sx={{ fontWeight: "400", fontSize: "12px" }}>Cancelled</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Button
              onClick={handleSaveChanges}
              sx={styles.button}
            >
              <Typography sx={styles.buttonText}>
                Save Changes
              </Typography>
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h6">No task found.</Typography>
      )}
    </Box>
  );
};

export default TeamAction;
