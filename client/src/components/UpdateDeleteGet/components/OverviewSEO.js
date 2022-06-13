import React, { useState } from 'react';
import { Button, TextField, Typography, Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

export const OverviewSEO = (props) => {
    const { tableName, showTable, tableData, OverviewSave } = props

    const [state, setState] = useState({
        name: '',
        present: '',
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
        OverviewSave(changedData)
    }

    const deleteRow = (name) => {
        axios.delete(`http://localhost:8000/api/delete?tableName=${tableName}&name=${name}`)
    }

    return (
        <>
            {(tableName === 'overviewScore' && showTable === true) && (
                <Box sx={{ display: 'flex', border: '0.5px solid #b8b8b8' }}>
                    <Box p={1} pl={2} pr={2} width={'40%'} sx={{ borderRight: '0.5px solid black' }}>
                        <Typography variant='body1'>Name</Typography>
                    </Box>
                    <Box p={1} pl={2} pr={2} width={'30%'} sx={{ borderRight: '0.5px solid white' }}>
                        <Typography variant='body1'>Score</Typography>
                    </Box>                    
                    <Box width={'30%'} p={1} pl={2} pr={2}></Box>
                </Box>
            )}
            {
                tableData.map((data, i) => {
                    if (tableName === 'overviewScore' && showTable === true) {
                        return (
                            <Box key={i} sx={{ display: 'flex', border: '0.5px solid #b8b8b8' }}>
                                <Box p={1} pl={2} pr={2} width={'40%'} sx={{ borderRight: '0.5px solid black' }}>
                                    <Typography variant='body1'>{data.name}</Typography>
                                </Box>
                                <Box p={1} pl={2} pr={2} width={'30%'} sx={{ borderRight: '0.5px solid black', display: 'flex', gap: 1 }}>
                                    <Typography variant='body1'>{data.score}</Typography>
                                </Box>                                
                                <Box p={1} pl={2} pr={2} width={'30%'} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
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
                    <TextField variant='outlined' size='medium' name='score' sx={{ width: '235px' }} label='Score' onChange={handleChange} />
                    <Button variant='contained' size='large' sx={{ width: '235px' }} onClick={changes}>Change</Button>
                    <Button variant='contained' size='large' sx={{ width: '235px' }} onClick={addData}>Add Data</Button>
                </Box>
                <Box width={'80%'}>
                    {(tableName === 'overviewScore' && showTable === true) && (
                        <Box sx={{ display: 'flex', border: '0.5px solid #b8b8b8' }}>
                            <Box p={1} pl={2} pr={2} width={'50%'} sx={{ borderRight: '0.5px solid black' }}>
                                <Typography variant='body1'>Name</Typography>
                            </Box>
                            <Box p={1} pl={2} pr={2} width={'50%'} >
                                <Typography variant='body1'>Score</Typography>
                            </Box>                            
                        </Box>
                    )}
                    {
                        changedData.map((data, i) => {
                            if (tableName === 'overviewScore' && showTable === true) {
                                return (
                                    <Box key={i} sx={{ display: 'flex', border: '0.5px solid #b8b8b8' }}>
                                        <Box p={1} pl={2} pr={2} width={'50%'} sx={{ borderRight: '0.5px solid black' }}>
                                            <Typography variant='body1'>{data.name}</Typography>
                                        </Box>
                                        <Box p={1} pl={2} pr={2} width={'50%'} sx={{display: 'flex', justifyContent:'space-between' }}>
                                            <Typography variant='body1'>{data.score}</Typography>
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
