import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

export const SchemaTypeDescription = () => {
    return (
        <Box mt={1}>
            <Paper sx={{ padding: '20px', minHeight: '50vh', backgroundColor: '#eeeeeedb' }}>

                <Typography variant='body1' mb={1} sx={{fontWeight:'bold'}}>Schema</Typography>

                <Box sx={{ display: 'flex' }}>
                    <Typography variant='body2' color='#b966b1' mr={1}>Name:</Typography>
                    <Typography variant='body2'>string</Typography>
                </Box>

                <Box sx={{ display: 'flex' }}>
                    <Typography variant='body2' color='#b966b1' mr={1}>Score:</Typography>
                    <Typography variant='body2'>number</Typography>
                </Box>

                <Box sx={{ display: 'flex' }}>
                    <Typography variant='body2' color='#b966b1' mr={1}>Present:</Typography>
                    <Typography variant='body2'>number</Typography>
                </Box>

                <Box sx={{ display: 'flex' }}>
                    <Typography variant='body2' color='#b966b1' mr={1}>Best:</Typography>
                    <Typography variant='body2'>number</Typography>
                </Box>

                <Box sx={{ display: 'flex' }}>
                    <Typography variant='body2' color='#b966b1' mr={1}>Good:</Typography>
                    <Typography variant='body2'>number</Typography>
                </Box>

                <Box sx={{ display: 'flex' }}>
                    <Typography variant='body2' color='#b966b1' mr={1}>Average:</Typography>
                    <Typography variant='body2'>number</Typography>
                </Box>

                <Box sx={{ display: 'flex' }}>
                    <Typography variant='body2' color='#b966b1' mr={1}>Bad:</Typography>
                    <Typography variant='body2'>number</Typography>
                </Box>

                <Box sx={{ display: 'flex' }}>
                    <Typography variant='body2' color='#b966b1' mr={1}>Worse:</Typography>
                    <Typography variant='body2'>number</Typography>
                </Box>

                <Box sx={{ display: 'flex' }}>
                    <Typography variant='body2' color='#b966b1' mr={1}>Not Present:</Typography>
                    <Typography variant='body2'>number</Typography>
                </Box>
            </Paper>
        </Box>
    )
}
