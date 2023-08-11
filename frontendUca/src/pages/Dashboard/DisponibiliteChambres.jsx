import React from 'react'
import Box from "@mui/material/Box";
import Sidenav from "../../components/dashboardComp/Sidenav/Sidenav";
import TopNav from "../../components/dashboardComp/TopNav/TopNav";
import ReservationCalendar from "../../components/dashboardComp/ReservationCalendar/ReservationCalendar";


const DisponibiliteChambres = () => {
    return (
        <>
            <TopNav/>
            <Box height={50}/>
            <Box sx={{display:"flex"}}>
                <Sidenav/>
                <Box component="main" sx={{flexGrow: 1, p: 3}}>
                    <ReservationCalendar/>
                </Box>
            </Box>
        </>
    )
}

export default DisponibiliteChambres;
