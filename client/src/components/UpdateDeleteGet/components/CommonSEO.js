import React, { useState } from 'react';
import { Button, TextField, Typography, Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

export const CommonSEO = (props) => {
  const { tableName, showTable, tableData, commonSEOSave } = props

  const [state, setState] = useState({
    name: '',
    present: '',
    good: '',
    bad: '',
    notPresent: ''
  })

  const [changedData, setChangedData] = useState([])

  const handleSelectTableRowName = (e) => {
    setState({ ...state, name: e.target.value })
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  const changes = () => {
    if ((!changedData.map((data) => data.name).includes(state.name)) && (state.name !== '')) {
      setChangedData((item) => [...item, state])
    }
  }

  const deleteChanges = (index) => {
    setChangedData(changedData.filter((item, i) => i !== index))
  }

  const addData = () => {
    commonSEOSave(changedData)
  }

  const deleteRow = (name) => {
    axios.delete(`http://localhost:8000/api/delete?tableName=${tableName}&name=${name}`)
  }

  return (
    <>
      {(tableName === 'commonSEOScore' && showTable === true) && (
        <Box sx={{ display: 'flex', border: '0.5px solid #b8b8b8' }}>
          <Box p={1} pl={2} pr={2} width={'40%'} sx={{ borderRight: '0.5px solid black' }}>
            <Typography variant='body1'>Name</Typography>
          </Box>
          <Box p={1} pl={2} pr={2} width={'10%'} sx={{ borderRight: '0.5px solid black' }}>
            <Typography variant='body1'>Present</Typography>
          </Box>
          <Box p={1} pl={2} pr={2} width={'10%'} sx={{ borderRight: '0.5px solid black' }}>
            <Typography variant='body1'>Good</Typography>
          </Box>
          <Box p={1} pl={2} pr={2} width={'10%'} sx={{ borderRight: '0.5px solid black' }}>
            <Typography variant='body1'>Bad</Typography>
          </Box>
          <Box p={1} pl={2} pr={2} width={'10%'} sx={{ borderRight: '0.5px solid white' }}>
            <Typography variant='body1'>Not Present</Typography>
          </Box>
          <Box p={1} pl={2} pr={2} width={'20%'}></Box>
        </Box>
      )}
      {
        tableData.map((data, i) => {
          if (tableName === 'commonSEOScore' && showTable === true) {
            console.log(data.name)
            return (
              <Box key={i} sx={{ display: 'flex', border: '0.5px solid #b8b8b8' }}>
                <Box p={1} pl={2} pr={2} width={'40%'} sx={{ borderRight: '0.5px solid black' }}>
                  <Typography variant='body1'>{data.name}</Typography>
                </Box>
                <Box p={1} pl={2} pr={2} width={'10%'} sx={{ borderRight: '0.5px solid black' }}>
                  <Typography variant='body1'>{data.present}</Typography>
                </Box>
                <Box p={1} pl={2} pr={2} width={'10%'} sx={{ borderRight: '0.5px solid black' }}>
                  <Typography variant='body1'>{data.good}</Typography>
                </Box>
                <Box p={1} pl={2} pr={2} width={'10%'} sx={{ borderRight: '0.5px solid black' }}>
                  <Typography variant='body1'>{data.bad}</Typography>
                </Box>
                <Box p={1} pl={2} pr={2} width={'10%'} sx={{ borderRight: '0.5px solid black' }}>
                  <Typography variant='body1'>{data.notPresent}</Typography>
                </Box>
                <Box p={1} pl={2} pr={2} width={'20%'} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <DeleteIcon onClick={() => { deleteRow(data.name) }} />
                </Box>
              </Box>
            )
          }
          return false;
        })
      }
      <Box mt={4} sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }} width={'20%'}>
          <FormControl sx={{ width: '235px' }}>
            <InputLabel id="demo-simple-select-label">Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.name}
              label="uniqueName"
              onChange={handleSelectTableRowName}
            >
              {tableData.map((data) => {
                return (
                  <MenuItem value={data.name}>{data.name}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <TextField variant='outlined' size='medium' name='present' sx={{ width: '235px' }} label='Present' onChange={handleChange} />
          <TextField variant='outlined' size='medium' name='good' sx={{ width: '235px' }} label='good' onChange={handleChange} />
          <TextField variant='outlined' size='medium' name='bad' sx={{ width: '235px' }} label='bad' onChange={handleChange} />
          <TextField variant='outlined' size='medium' name='notPresent' sx={{ width: '235px' }} label='Not Present' onChange={handleChange} />
          <Button variant='contained' size='large' sx={{ width: '235px' }} onClick={changes}>Change</Button>
          <Button variant='contained' size='large' sx={{ width: '235px' }} onClick={addData}>Add Data</Button>
        </Box>

        <Box width={'80%'}>
          {(tableName === 'commonSEOScore' && showTable === true) && (
            <Box sx={{ display: 'flex', border: '0.5px solid #b8b8b8' }}>
              <Box p={1} pl={2} pr={2} width={'20%'} sx={{ borderRight: '0.5px solid black' }}>
                <Typography variant='body1'>Name</Typography>
              </Box>
              <Box p={1} pl={2} pr={2} width={'20%'} sx={{ borderRight: '0.5px solid black' }}>
                <Typography variant='body1'>Present</Typography>
              </Box>
              <Box p={1} pl={2} pr={2} width={'20%'} sx={{ borderRight: '0.5px solid black' }}>
                <Typography variant='body1'>Good</Typography>
              </Box>
              <Box p={1} pl={2} pr={2} width={'20%'} sx={{ borderRight: '0.5px solid black' }}>
                <Typography variant='body1'>Bad</Typography>
              </Box>
              <Box p={1} pl={2} pr={2} width={'20%'} >
                <Typography variant='body1'>Not Present</Typography>
              </Box>
            </Box>
          )}
          {
            changedData.map((data, i) => {
              if (tableName === 'commonSEOScore' && showTable === true) {
                return (
                  <Box key={i} sx={{ display: 'flex', border: '0.5px solid #b8b8b8' }}>
                    <Box p={1} pl={2} pr={2} width={'20%'} sx={{ borderRight: '0.5px solid black' }}>
                      <Typography variant='body1'>{data.name}</Typography>
                    </Box>
                    <Box p={1} pl={2} pr={2} width={'20%'} sx={{ borderRight: '0.5px solid black', display: 'flex' }}>
                      <Typography variant='body1'>{data.present}</Typography>
                    </Box>
                    <Box p={1} pl={2} pr={2} width={'20%'} sx={{ borderRight: '0.5px solid black', display: 'flex' }}>
                      <Typography variant='body1'>{data.good}</Typography>
                    </Box>
                    <Box p={1} pl={2} pr={2} width={'20%'} sx={{ borderRight: '0.5px solid black', display: 'flex' }}>
                      <Typography variant='body1'>{data.bad}</Typography>
                    </Box>
                    <Box p={1} pl={2} pr={2} width={'20%'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant='body1'>{data.notPresent}</Typography>
                      <DeleteIcon onClick={() => { deleteChanges(i) }} />
                    </Box>
                  </Box>
                )
              }
              return false;
            })
          }
        </Box>

      </Box>
    </>
  )
}
