import { Autocomplete, Box, Button, FormControl, FormGroup, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const NewTeam = (props ) => {
  const [teamLead, setTeamLead] = useState([{ id: 1, label: 'Enter Assignee Name' }]);
  const [addMembers, setAddMembers] = useState([{ id: 1, label: 'Enter Team Members' }]);



  const members = [
    { title: 'Kishore'},
    { title: 'Sri Dharun' },
    { title: 'Kavin' },
    { title: 'Sri Sabarish' },
    { title: 'Deva Prakash'},
   
  ];

  const handleTeamLeadChange = (value, index) => {
    const updatedTeamLead = [...teamLead];
    updatedTeamLead[index].name = value ? value.title : '';
    setTeamLead(updatedTeamLead);
  };

  const handleAddMembersChange = (value, index) => {
    const updatedAddMembers = [...addMembers];
    updatedAddMembers[index].name = value ? value.title : '';
    setAddMembers(updatedAddMembers);
  };

  const handleTeamLeadClick = () => {
    setTeamLead((prev) => [
      ...prev,
      { id: prev.length + 1, name: '', label: 'Enter Assignee Name' }
    ]);
  };

  const handleAddMembersClick = () => {
    setAddMembers((prev) => [
      ...prev,
      { id: prev.length + 1, name: '', label: 'Enter Team Members' }
    ]);
  };


  const selectedMembers = [
    ...teamLead.map(item => item.name),
    ...addMembers.map(item => item.name)
  ];

  // Filter options based on selected values
  const filteredOptions = members.filter(
    (mem) => !selectedMembers.includes(mem.title)
  );

  const handleSubmit = () => {
    console.log('Team Leads:', teamLead.map((lead) => lead.name));
    console.log('Team Members:', addMembers.map((member) => member.name));
    // Close the modal or perform other actions if necessary
    props.handleClose();
  };
 

  return (
    <Grid container justifyContent="center">
      <Grid item lg={12}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start',mt:10 }}>
          <Box sx={{ height: 'auto', width: '70%', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h4" gutterBottom>New Team</Typography>
            <FormControl component="fieldset" sx={{ mb: 3 }}>
              <FormGroup>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <TextField id="task-name" label="Enter Task Name" variant="standard" sx={{ width: '500px' }} />
                </Box>

                {teamLead.map((item, index) => (
                  <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', justifyContent:index===0 ?'space-between' : 'flex-end', mb: 1, width: '100%' }}>
                  {index === 0 ?( <Typography variant="h6" sx={{ width: '25%' }}> Team Lead</Typography>) :""}
                    <Autocomplete
                      options={filteredOptions}
                      getOptionLabel={(option) => option.title}
                      value={members.find(film => film.title === item.name) || null}
                      onChange={(event, newValue) => handleTeamLeadChange(newValue, index)}
                      renderInput={(params) => (
                        <TextField {...params} label="Add Team Lead" variant="standard" fullWidth />
                      )}
                      sx={{ width: (index === teamLead.length - 1)?'65%' : '75%' }}
                    />
                    {(index === teamLead.length - 1) ? (
                      <Button variant="contained" onClick={handleTeamLeadClick} sx={{ bgcolor: '#004E69', color: 'white', width: '100px', borderRadius: '90%' }}>Add</Button>
                    ) : null}
                  </Box>
                ))}

                {addMembers.map((item, index) => (
                  <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', justifyContent:index===0 ?'space-between' : 'flex-end', mb: 1, width: '100%' }}>
                   {index === 0 ?( <Typography variant="h6" sx={{ width: '25%' }}>Team Members</Typography>) :""}
                    <Autocomplete
                      options={filteredOptions}
                      getOptionLabel={(option) => option.title}
                      value={members.find(mem => mem.title === item.name) || null}
                      onChange={(event, newValue) => handleAddMembersChange(newValue, index)}
                      renderInput={(params) => (
                        <TextField {...params} label="Add Team Members" variant="standard" fullWidth />
                      )}
                      sx={{ width: (index === addMembers.length - 1)?'65%' : '75%' }}
                    />
                    {(index === addMembers.length - 1) ? (
                      <Button variant="contained" onClick={handleAddMembersClick} sx={{ bgcolor: '#004E69', color: 'white', width: '100px', borderRadius: '90%' }}>Add</Button>
                    ) : null}
                  </Box>
                ))}

                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '10px' }}>
                
                  <Button variant="contained" onClick={props.handleClose} sx={{ bgcolor: '#004E69', color: 'white', }}>
                Cancel
              </Button>
              <Button variant="contained" onClick={handleSubmit} sx={{ bgcolor: '#004E69', color: 'white', width: '100px',marginLeft: '50px'  }}>Submit</Button>
                </Box>
              </FormGroup>
            </FormControl>

           
          </Box>
        </Box>



        
        
      </Grid>
    </Grid>
  );
};

export default NewTeam;