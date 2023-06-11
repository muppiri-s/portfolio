import React from 'react';
import '../styles/skills.css';

import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import BugReportIcon from '@mui/icons-material/BugReport';

import Radial from './radial';

const Skills = () => (
    <div className='parallax-bg2'>
        <h1 className='skills-heading'>What I can do.</h1>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={6} sm={3}>
                <Box borderRadius={4} p={2}>
                    <Card>
                        <CardContent>
                            <CodeIcon />
                            <Typography variant="h5" component="div">
                                Developer
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box borderRadius={4} p={2}>
                    <Card>
                        <CardContent>
                            <BugReportIcon />
                            <Typography variant="h5" component="div">
                                Debugger
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
        </Grid>
        <Radial />
    </div>
);

export default Skills;
