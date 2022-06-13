import React, { useState } from 'react'
import { Button, Typography, Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import axios from 'axios';
import { Networking } from './components/Networking';
import { CommonSEO } from './components/CommonSEO';
import { DomainAge } from './components/DomainAge';
import { KeywordFactor } from './components/KeywordFactor';
import { VideoSEO } from './components/VideoSEO';
import { ImageSEO } from './components/ImageSEO';
import { ContentFactorSEO } from './components/ContentFactor';
import { OverviewSEO } from './components/OverviewSEO';

export const Update = ({ table, tableData }) => {

    const [tableName, setTableName] = useState('')
    const [showTable, setShowTable] = useState(false)

    const [networkingState, setNetworkingState] = useState([])
    const networkingSave = (e) => {
        setNetworkingState(e)
    }

    const [commonSEOState, setCommonSEOState] = useState([])
    const commonSEOSave = (e) => {
        setCommonSEOState(e)
    }

    const [domainAgeState, setDomainAgeState] = useState([])
    const DomainAgeSave = (e) => {
        setDomainAgeState(e)
    }

    const [imageSEOState, setImageSEOState] = useState([])
    const ImageSEOSave = (e) => {
        setImageSEOState(e)
    }

    const [keywordFactorState, setKeywordFactorState] = useState([])
    const KeywordFactorSave = (e) => {
        setKeywordFactorState(e)
    }

    const [videoSEOState, setVideoSEOState] = useState([])
    const VideoSEOSave = (e) => {
        setVideoSEOState(e)
    }

    const [contentFactorSEOState, setContentFactorSEOState] = useState([])
    const ContentFactorSave = (e) => {
        setContentFactorSEOState(e)
    }

    const [overviewSEOState, setOverviewSEOState] = useState([])
    const OverviewSave = (e) => {
        setOverviewSEOState(e)
    }

    let arrData = [{ tableName: 'networkingScore', data: networkingState }, { tableName: 'commonSEOScore', data: commonSEOState },
    { tableName: 'DomainAgeScore', data: domainAgeState }, { tableName: 'KeywordFactorScore', data: keywordFactorState },
    { tableName: 'videoSEOScore', data: videoSEOState }, { tableName: 'ImageSEOScore', data: imageSEOState },
    { tableName: 'contentFactorScore', data: contentFactorSEOState }, { tableName: 'overviewScore', data: overviewSEOState }]

    const update = () => { axios.put(`http://localhost:8000/api/update?array=${JSON.stringify(arrData)}`) }

    const handleSelectTableName = (e) => {
        setTableName(e.target.value);
        setShowTable(false)
    };

    const showData = () => {
        table(tableName)
        setShowTable(true)
    }

    return (
        <Box width={'90%'} mb={10}>
            <Box>
                <Box my={2} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <Typography variant='h6' mb={2}>Select Table</Typography>
                    <FormControl sx={{ width: '235px' }}>
                        <InputLabel id="demo-simple-select-label">Table Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={tableName}
                            label="uniqueName"
                            onChange={handleSelectTableName}
                        >
                            <MenuItem value={'overviewScore'}>overviewScore</MenuItem>
                            <MenuItem value={'networkingScore'}>networkingScore</MenuItem>
                            <MenuItem value={'commonSEOScore'}>commonSEOScore</MenuItem>
                            <MenuItem value={'DomainAgeScore'}>DomainAgeScore</MenuItem>
                            <MenuItem value={'KeywordFactorScore'}>KeywordFactorScore</MenuItem>
                            <MenuItem value={'videoSEOScore'}>videoSEOScore</MenuItem>
                            <MenuItem value={'ImageSEOScore'}>ImageSEOScore</MenuItem>
                            <MenuItem value={'contentFactorScore'}>contentFactorScore</MenuItem>
                        </Select>
                    </FormControl>
                    <Box mx={2}>
                        <Button variant='contained' size='medium' onClick={showData}>show</Button>
                        <Button variant='contained' size='medium' onClick={update}>Update</Button>
                    </Box>
                </Box>

                {
                    (tableName === 'overviewScore' && showTable === true) && (
                        <OverviewSEO tableName={tableName} showTable={showTable} tableData={tableData} OverviewSave={OverviewSave} />
                    )
                }

                {
                    (tableName === 'networkingScore' && showTable === true) && (
                        <Networking tableName={tableName} showTable={showTable} tableData={tableData} networkingSave={networkingSave} />
                    )
                }

                {
                    (tableName === 'commonSEOScore' && showTable === true) && (
                        <CommonSEO tableName={tableName} showTable={showTable} tableData={tableData} commonSEOSave={commonSEOSave} />
                    )
                }

                {
                    (tableName === 'DomainAgeScore' && showTable === true) && (
                        <DomainAge tableName={tableName} showTable={showTable} tableData={tableData} DomainAgeSave={DomainAgeSave} />
                    )
                }

                {
                    (tableName === 'KeywordFactorScore' && showTable === true) && (
                        <KeywordFactor tableName={tableName} showTable={showTable} tableData={tableData} KeywordFactorSave={KeywordFactorSave} />
                    )
                }

                {
                    (tableName === 'videoSEOScore' && showTable === true) && (
                        <VideoSEO tableName={tableName} showTable={showTable} tableData={tableData} VideoSEOSave={VideoSEOSave} />
                    )
                }

                {
                    (tableName === 'ImageSEOScore' && showTable === true) && (
                        <ImageSEO tableName={tableName} showTable={showTable} tableData={tableData} ImageSEOSave={ImageSEOSave} />
                    )
                }

                {
                    (tableName === 'contentFactorScore' && showTable === true) && (
                        <ContentFactorSEO tableName={tableName} showTable={showTable} tableData={tableData} ContentFactorSave={ContentFactorSave} />
                    )
                }
            </Box>

        </Box>
    )
}
