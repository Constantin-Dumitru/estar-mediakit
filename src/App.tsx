import React from 'react';
import './App.css';
import { Grid, Stack, Typography } from '@mui/material';
import GridPattern from './../src/shared/images/grid-pattern.png'
import Title from './components/Title';
import DownloadButton from './components/DownloadButton';

function App() {
  return (
    <Grid
      container
      sx={{
        width: '100vw',
        height: '100dvh',
        background: `linear-gradient(241deg, #0F2A71 -10.17%, #00173F 87.1%)`,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 0'
      }}
    >
      <Stack
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          background: `url(${GridPattern})`,
          opacity: '0.15',
        }}
      />
      <Grid
        item
        container
        xs={10}
        sm={6}
        md={4}
        lg={4}
        xl={3}
        zIndex={2}
        sx={{
          height: '100%',
          // background: 'red'
          alignItems: 'center',
          flexDirection: 'column',
          gap: '32px'
        }}
      >
        <Title />
        <Stack gap={"16px"} width={"100%"}>
          <DownloadButton name="ESTAR" href="https://estar.games/mediakit/ESTAR.zip"/>
          <DownloadButton name="EQUISTAR" href="https://estar.games/mediakit/EQUISTAR.zip"/>
          <DownloadButton name="XCASTLE" href="https://estar.games/mediakit/XCASTLE.zip"/>
          <DownloadButton name="ANGRY PENGUINS" href="https://estar.games/mediakit/ANGRYPENGUINS.zip"/>
          <DownloadButton name="ESTAR TOKEN" href="https://estar.games/mediakit/TOKEN.zip"/>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default App;
