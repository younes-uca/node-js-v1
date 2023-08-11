import React from 'react'
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidenav from "../../components/dashboardComp/Sidenav/Sidenav";
import TopNav from "../../components/dashboardComp/TopNav/TopNav";
import {ActualiteDash} from "../../components/dashboardComp/ActualiteDash/ActualiteDash";
import {ContactDashboard} from "../../components/dashboardComp/ContactDashboard/ContactDashboard";

const theme = createTheme();


export const ContactDash = () => {
    return (
        <>
            <div className="bgcolordash text-center">
                <TopNav/>
                <Box height={80}/>
                <Box sx={{display:"flex"}}>
                    <Sidenav/>
                    <Box component="main" sx={{flexGrow: 1, p: 3}}>
                        <ThemeProvider theme={theme}>
                            <ContactDashboard/>
                        </ThemeProvider>
                    </Box>
                </Box>
            </div>
        </>
    )
}
