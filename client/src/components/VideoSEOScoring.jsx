import React, { useState } from 'react'
import { Button, TextField, Typography, Box } from '@mui/material';

export const VideoSEOScoring = ({ vSave, videoSEOState }) => {

  const [state, setState] = useState({
    name: '', present: 0, notPresent: 0, good: 0, average: 0, bad: 0, tableName:'videoSEOScore'
  })

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  const showData = () => {
    if((state.name !== '') && (!videoSEOState.map((data) => data.name).includes(state.name))){
    vSave((item) => [...item,state])
    }
  }

  return (
    <Box my={2}>
      <Typography variant='h6'>Video SEO Scoring</Typography>

      <Box mt={2} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='body1' mb={1}>Insert New</Typography>
        <TextField variant='outlined' size='small' name='name' sx={{ width: '170px' }} label='Name' onChange={handleChange} />
        <TextField variant='outlined' size='small' name='present' sx={{ width: '170px' }} label='Present Score' onChange={handleChange} />
        <TextField variant='outlined' size='small' name='notPresent' sx={{ width: '170px' }} label='NotPresent Score' onChange={handleChange} />
        <TextField variant='outlined' size='small' name='good' sx={{ width: '170px' }} label='Good Score' onChange={handleChange} />
        <TextField variant='outlined' size='small' name='average' sx={{ width: '170px' }} label='Average Score' onChange={handleChange} />
        <TextField variant='outlined' size='small' name='bad' sx={{ width: '170px' }} label='Bad Score' onChange={handleChange} />
        <Button variant='contained' size='medium' sx={{ width: '170px' }} onClick={() => {  showData() }}>Insert</Button>
      </Box>

    </Box>
  )
}
