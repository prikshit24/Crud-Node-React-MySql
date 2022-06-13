import React, { useState } from 'react'
import { Button, TextField, Typography, Box } from '@mui/material';

export const ContentFactorScoring = ({ cfSave, contentFactorState }) => {

  const [state, setState] = useState({
    name: '', best: 0, average: 0, good: 0, bad: 0, worse: 0, tableName:'contentFactorScore'
  })

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  const showData = () => {
    if((state.name !== '') && (!contentFactorState.map((data) => data.name).includes(state.name))){
    cfSave((item) => [...item,state])
    }
  }

  return (
    <Box my={2}>
      <Typography variant='h6'>Content Factor Scoring</Typography>
      
      <Box mt={2} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='body1' mb={1}>Insert New</Typography>
        <TextField variant='outlined' size='small' name='name' sx={{ width: '170px' }} label='Name' onChange={handleChange} />
        <TextField variant='outlined' size='small' name='best' sx={{ width: '170px' }} label='Best Score' onChange={handleChange} />
        <TextField variant='outlined' size='small' name='good' sx={{ width: '170px' }} label='Good Score' onChange={handleChange} />
        <TextField variant='outlined' size='small' name='average' sx={{ width: '170px' }} label='Average Score' onChange={handleChange} />
        <TextField variant='outlined' size='small' name='bad' sx={{ width: '170px' }} label='Bad Score' onChange={handleChange} />
        <TextField variant='outlined' size='small' name='worse' sx={{ width: '170px' }} label='Worse Score' onChange={handleChange} />
        <Button variant='contained' size='medium' sx={{ width: '170px' }} onClick={() => { showData() }}>Insert</Button>
      </Box>

    </Box>
  )
}
