import React, {FC} from 'react'
import { Stack, Typography } from '@mui/material'
import { EstarGamesLogo } from '../shared/icons'

const Title: FC = () => (
    <Stack
        sx={{
            // '>*': {
            //     fontSize: '64px',
            //     textAlign: 'center',
            //     background: `linear-gradient(180deg, #FFF 0%, #999 100%)`,
            //     backgroundClip: 'text',
            //     WebkitBackgroundClip: 'text',
            //     WebkitTextFillColor: 'transparent',
            //     fontWeight: 600,
            // },
            flexDirection: 'row',
            height: 'max-content',
            alignItems: 'center',
            gap: '16px'
        }}
        // spacing={-3}
    >
        <EstarGamesLogo
            sx={{
                height: '32px',
                width: 'auto',
                fill: 'white',
            }}
        />
        <Stack
            sx={{
                height: '48px',
                background: '#F4C501',
                width: '2px',
                borderRadius: '2px'
            }}
        />
        <Typography
            sx={{
                fontSize: '32px',
                textAlign: 'center',
                // color: '#fff',
                background: `linear-gradient(180deg, #FFF 40%, #999 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800,
            }}
        >
            MEDIAKIT
        </Typography>
    </Stack>
)

export default Title