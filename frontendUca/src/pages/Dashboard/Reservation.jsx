import React from 'react'
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidenav from "../../components/dashboardComp/Sidenav/Sidenav";
import TopNav from "../../components/dashboardComp/TopNav/TopNav";
import ReservationList from "../../components/dashboardComp/Reservations/ReservationList";

const theme = createTheme();
const Reservation = () => {
    return (
        <>
            <div className="bgcolordash text-center">
            <TopNav/>
            <Box height={50}/>
            <Box sx={{display:"flex"}}>
                <Sidenav/>
                <Box component="main" sx={{flexGrow: 1, p: 3}}>
                    <ThemeProvider theme={theme}>
                        <ReservationList/>
                    </ThemeProvider>
                </Box>
            </Box>
            </div>
        </>
    )
}

export default Reservation;
