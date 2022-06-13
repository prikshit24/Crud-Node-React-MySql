import React, { useEffect, useState } from 'react';
import { Button, Typography, Box, Paper } from '@mui/material';
import { NetworkingScoring } from './components/NetworkingScoring';
import { CommonSEOScoring } from './components/CommonSEOScoring';
import { DomainAgeScoring } from './components/DomainAgeScoring';
import { KeywordFactorScoring } from './components/KeywordFactorScoring';
import { VideoSEOScoring } from './components/VideoSEOScoring';
import { ImageSEOScoring } from './components/ImageSEOScoring';
import { SchemaTypeDescription } from './Schema/SchemaTypeDescription';
import { Update } from './components/UpdateDeleteGet/Update';
import axios from 'axios';
import { ContentFactorScoring } from './components/ContentFactorScoring';
import { OverviewScoring } from './components/OverviewScoring';

function App() {

  const [networkingState, setNetworkingState] = useState([])
  const nSave = (e) => {
    setNetworkingState(e)
  }

  const [commonSEOState, setCommonSEOState] = useState([])
  const cSave = (e) => {
    setCommonSEOState(e)
  }

  const [domainAgeState, setDomainAgeState] = useState([])
  const dSave = (e) => {
    setDomainAgeState(e)
  }

  const [keywordFactorState, setKeywordFactorState] = useState([])
  const kSave = (e) => {
    setKeywordFactorState(e)
  }

  const [videoSEOState, setVideoSEOState] = useState([])
  const vSave = (e) => {
    setVideoSEOState(e)
  }

  const [imageSEOState, setImageSEOState] = useState([])
  const iSave = (e) => {
    setImageSEOState(e)
  }

  const [contentFactorState, setContentFactorState] = useState([])
  const cfSave = (e) => {
    setContentFactorState(e)
  }

  const [overviewState, setOverviewState] = useState([])
  const oSave = (e) => {
    setOverviewState(e)
  }

  const [tablename, setTablename] = useState('')
  const table = (e) => {
    setTablename(e)
  }

  const [tableData, setTableData] = useState([])

  let dataVar = [{ tableName: 'networkingScore', data: networkingState }, { tableName: 'commonSEOScore', data: commonSEOState },
  { tableName: 'DomainAgeScore', data: domainAgeState }, { tableName: 'KeywordFactorScore', data: keywordFactorState },
  { tableName: 'videoSEOScore', data: videoSEOState }, { tableName: 'ImageSEOScore', data: imageSEOState },
  { tableName: 'contentFactorScore', data: contentFactorState }, { tableName: 'overviewScore', data: overviewState }]

  const submitData = () => { axios.post(`http://localhost:8000/api/insert?array=${JSON.stringify(dataVar)}`) }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/get?tableName=${tablename}`).then((response) => {
      setTableData(response.data)
    })
  }, [tablename])

  return (
    <div>
      <Box mt={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h4'>CRUD APP for SEO-APP Scoring</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box my={4} width='35vw' sx={{ display: 'flex', paddingLeft: '30px', flexDirection: 'column' }}>
          <OverviewScoring oSave={oSave} overviewState={overviewState} />
          <NetworkingScoring nSave={nSave} networkingState={networkingState} />
          <CommonSEOScoring cSave={cSave} commonSEOState={commonSEOState} />
          <DomainAgeScoring dSave={dSave} domainAgeState={domainAgeState} />
          <KeywordFactorScoring kSave={kSave} keywordFactorState={keywordFactorState} />
          <VideoSEOScoring vSave={vSave} videoSEOState={videoSEOState} />
          <ImageSEOScoring iSave={iSave} imageSEOState={imageSEOState} />
          <ContentFactorScoring cfSave={cfSave} contentFactorState={contentFactorState} />
        </Box>
        <Box my={4} width='35vw' p={1}>
          <Box my={1}>
            <Paper sx={{ padding: '20px', minHeight: '50vh', backgroundColor: '#eeeeeebd' }}>
              <Typography variant='body1'>{'['}</Typography>
              {
                <Box pl={2} my={1}>

                  <Typography variant='body1'>
                    Table Name: overviewScore
                  </Typography>
                  {
                    overviewState.map((data, i) => {
                      return (
                        <>
                          <Typography variant='body1' key={i}>{'{'}</Typography>
                          <Box pl={2}>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>name:</Typography>
                              {data.name}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>score:</Typography>
                              {data.score}
                            </Typography>

                          </Box>
                          <Typography variant='body1'>{'}'}</Typography>
                        </>
                      )
                    })
                  }

                </Box>
              }
              {
                <Box pl={2} my={1}>

                  <Typography variant='body1'>
                    Table Name: networkingScore
                  </Typography>
                  {
                    networkingState.map((data, i) => {
                      return (
                        <>
                          <Typography variant='body1' key={i}>{'{'}</Typography>
                          <Box pl={2}>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>name:</Typography>
                              {data.name}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>present:</Typography>
                              {data.present}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>notPresent:</Typography>
                              {data.notPresent}
                            </Typography>

                          </Box>
                          <Typography variant='body1'>{'}'}</Typography>
                        </>
                      )
                    })
                  }

                </Box>
              }
              {

                <Box pl={2} my={1}>

                  <Typography variant='body1'>
                    Table Name: commonSEOScore
                  </Typography>
                  {
                    commonSEOState.map((data, i) => {
                      return (
                        <>
                          <Typography variant='body1' key={i}>{'{'}</Typography>
                          <Box pl={2}>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>name:</Typography>
                              {data.name}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>present:</Typography>
                              {data.present}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>good:</Typography>
                              {data.good}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>bad:</Typography>
                              {data.bad}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>notPresent:</Typography>
                              {data.notPresent}
                            </Typography>

                          </Box>
                          <Typography variant='body1'>{'}'}</Typography>
                        </>
                      )
                    })
                  }

                </Box>

              }
              {
                <Box pl={2} my={1}>

                  <Typography variant='body1'>
                    Table Name: DomainAgeScore
                  </Typography>
                  {
                    domainAgeState.map((data, i) => {
                      return (
                        <>
                          <Typography variant='body1' key={i}>{'{'}</Typography>
                          <Box pl={2}>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>name:</Typography>
                              {data.name}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>best:</Typography>
                              {data.best}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>good:</Typography>
                              {data.good}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>average:</Typography>
                              {data.average}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>bad:</Typography>
                              {data.bad}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>worse:</Typography>
                              {data.worse}
                            </Typography>

                          </Box>
                          <Typography variant='body1'>{'}'}</Typography>
                        </>
                      )
                    })
                  }

                </Box>
              }
              {
                <Box pl={2} my={1}>

                  <Typography variant='body1'>
                    Table Name: KeywordFactorScore
                  </Typography>

                  {
                    keywordFactorState.map((data, i) => {
                      return (
                        <>
                          <Typography variant='body1' key={i}>{'{'}</Typography>
                          <Box pl={2}>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>name:</Typography>
                              {data.name}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>present:</Typography>
                              {data.present}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>good:</Typography>
                              {data.good}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>average:</Typography>
                              {data.average}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>bad:</Typography>
                              {data.bad}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>notPresent:</Typography>
                              {data.notPresent}
                            </Typography>

                          </Box>
                          <Typography variant='body1'>{'}'}</Typography>
                        </>
                      )
                    })
                  }

                </Box>
              }
              {
                <Box pl={2} my={1}>

                  <Typography variant='body1'>
                    Table Name: videoSEOScore
                  </Typography>

                  {
                    videoSEOState.map((data, i) => {
                      return (
                        <>
                          <Typography variant='body1' key={i}>{'{'}</Typography>
                          <Box pl={2}>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>name:</Typography>
                              {data.name}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>present:</Typography>
                              {data.present}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>good:</Typography>
                              {data.good}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>average:</Typography>
                              {data.average}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>bad:</Typography>
                              {data.bad}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>notPresent:</Typography>
                              {data.notPresent}
                            </Typography>

                          </Box>
                          <Typography variant='body1'>{'}'}</Typography>
                        </>
                      )
                    })
                  }

                </Box>
              }
              {
                <Box pl={2} my={1}>

                  <Typography variant='body1'>
                    Table Name: ImageSEOScore
                  </Typography>

                  {
                    imageSEOState.map((data, i) => {
                      return (
                        <>
                          <Typography variant='body1' key={i}>{'{'}</Typography>
                          <Box pl={2}>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>name:</Typography>
                              {data.name}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>best:</Typography>
                              {data.best}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>good:</Typography>
                              {data.good}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>average:</Typography>
                              {data.average}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>bad:</Typography>
                              {data.bad}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>worse:</Typography>
                              {data.worse}
                            </Typography>

                          </Box>
                          <Typography variant='body1'>{'}'}</Typography>
                        </>
                      )
                    })
                  }

                </Box>
              }
              {
                <Box pl={2} my={1}>

                  <Typography variant='body1'>
                    Table Name: contentFactorScore
                  </Typography>

                  {
                    contentFactorState.map((data, i) => {
                      return (
                        <>
                          <Typography variant='body1' key={i}>{'{'}</Typography>
                          <Box pl={2}>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>name:</Typography>
                              {data.name}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>best:</Typography>
                              {data.best}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>good:</Typography>
                              {data.good}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>average:</Typography>
                              {data.average}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>bad:</Typography>
                              {data.bad}
                            </Typography>

                            <Typography variant='body1'>
                              <Typography variant='bod1'>worse:</Typography>
                              {data.worse}
                            </Typography>

                          </Box>
                          <Typography variant='body1'>{'}'}</Typography>
                        </>
                      )
                    })
                  }

                </Box>
              }
              <Typography variant='body1'>{']'}</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant='contained' size='small' onClick={submitData}>Submit</Button>
              </Box>
            </Paper>
          </Box>
        </Box>
        <Box my={4} p={1} width={'20vw'}>
          <SchemaTypeDescription />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant='h4'>Update And Delete Data</Typography>
        <Update table={table} tableData={tableData} />
      </Box>
    </div>
  );
}

export default App;
