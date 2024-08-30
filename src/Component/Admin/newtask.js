import React, { useState } from 'react';
import { Grid, Box, Typography, TextField, FormControl, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';

const NewTask = (props) => {
    const [taskName, setTaskName] = useState('');
    const [highPriority, setHighPriority] = useState(false);
    const [assignee, setAssignee] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [participants, setParticipants] = useState('');
    const [observers, setObservers] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleInputChange = (setter) => (e) => setter(e.target.value);

    const handleSubmit = () => {
        console.log('Task Name:', taskName);
        console.log('High Priority:', highPriority);
        console.log('Assignee:', assignee);
        console.log('Created By:', createdBy);
        console.log('Participants:', participants);
        console.log('Observers:', observers);
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);

        props.handleClose();
    };

    const Names = [
        { id: 1, name: 'Assignee', label: 'Enter Assignee Name', value: assignee, setter: setAssignee },
        { id: 2, name: 'Created By', label: 'Add Creator', value: createdBy, setter: setCreatedBy },
        { id: 3, name: 'Participants', label: 'Add Participants', value: participants, setter: setParticipants },
        { id: 4, name: 'Observers', label: 'Add Observers', value: observers, setter: setObservers }
    ];

    return (
        <Grid container justifyContent="center">
            <Grid item lg={12}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5 }}>
                    <Box sx={{ height: 'auto', width: '80%', display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='h4' gutterBottom>New Task</Typography>

                        <FormControl component="fieldset" sx={{ mb: 3 }}>
                            <FormGroup>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                    <TextField
                                        id="task-name"
                                        label="Enter Task Name"
                                        variant="standard"
                                        sx={{ width: '500px' }}
                                        value={taskName}
                                        onChange={handleInputChange(setTaskName)}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={highPriority}
                                                onChange={(e) => setHighPriority(e.target.checked)}
                                                name="High Priority"
                                            />
                                        }
                                        label="High Priority"
                                        sx={{ ml: 2 }}
                                    />
                                </Box>

                                {Names.map((item) => (
                                    <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                                        <Typography variant='h6' sx={{ width: '25%' }}>{item.name}</Typography>
                                        <TextField
                                            label={item.label}
                                            variant="standard"
                                            fullWidth
                                            value={item.value}
                                            onChange={handleInputChange(item.setter)}
                                        />
                                    </Box>
                                ))}

                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                                    <Typography variant='h6' sx={{ width: '25%' }}>Deadline</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                        <TextField
                                            label="Start Date"
                                            type="date"
                                            InputLabelProps={{ shrink: true }}
                                            variant="standard"
                                            sx={{ width: '45%' }}
                                            value={startDate}
                                            onChange={handleInputChange(setStartDate)}
                                        />
                                        <TextField
                                            label="End Date"
                                            type="date"
                                            InputLabelProps={{ shrink: true }}
                                            variant="standard"
                                            sx={{ width: '45%' }}
                                            value={endDate}
                                            onChange={handleInputChange(setEndDate)}
                                        />
                                    </Box>
                                </Box>

                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '10px' }}>
                                    <Button variant="contained" onClick={handleSubmit} sx={{ bgcolor: '#004E69', color: 'white', width: '100px' }}>Submit</Button>
                                    <Button variant="contained" onClick={props.handleClose} sx={{ bgcolor: '#004E69', color: 'white', marginLeft: '50px' }}>
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
