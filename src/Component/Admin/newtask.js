import React from 'react';
import { Grid, Box, Typography, TextField, FormControl, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';

const NewTask = () => {
  const Names = [
    { id: 1, name: 'Assignee', label: 'Enter Assignee Name' },
    { id: 2, name: 'Created By', label: 'Add Creator' },
    { id: 3, name: 'Participants', label: 'Add Participants' },
    { id: 4, name: 'Observers', label: 'Add Observers' }
  ];

  const handleCancelClick = () => {
    window.location.reload(); // Refresh the page
  };

  return (
    <Grid container justifyContent="center">
      <Grid item lg={12} >
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',mt:10}}>

    
        <Box sx={{ height: 'auto', width: '80%', display: 'flex', flexDirection: 'column', }}>
          <Typography variant='h4' gutterBottom>New Task</Typography>

          <FormControl component="fieldset" sx={{ mb: 3 }}>
           
            <FormGroup>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <TextField id="task-name" label="Enter Task Name" variant="standard" sx={{width:'500px'}} />
                <FormControlLabel
                  control={<Checkbox />}
                  label="High Priority"
                  sx={{ ml: 2 }}
                />
              </Box>

              {Names.map((item) => (
                <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant='h6' sx={{ width: '25%' }}>{item.name}</Typography>
                  <TextField label={item.label} variant="standard" fullWidth />
                </Box>
              ))}

              {/* Deadline Section */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant='h6' sx={{ width: '25%' }}>Deadline</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <TextField
                    label="Start Date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    variant="standard"
                    sx={{ width: '45%' }}
                  />
                  <TextField
                    label="End Date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    variant="standard"
                    sx={{ width: '45%' }}
                  />
                </Box>
              </Box>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '10px' }}>
                  <Button variant="contained" sx={{ bgcolor: '#004E69', color: 'white', width: '100px' }}>Submit</Button>
                  <Button variant="contained" onClick={handleCancelClick} sx={{ bgcolor: '#004E69', color: 'white', marginLeft: '50px' }}>
                Cancel
              </Button>
                </Box>
          
            </FormGroup>
          </FormControl>
        </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NewTask;