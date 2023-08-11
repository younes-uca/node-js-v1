import React from 'react'
import Box from "@mui/material/Box";
import Sidenav from "../../components/dashboardComp/Sidenav/Sidenav";
import TopNav from "../../components/dashboardComp/TopNav/TopNav";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UserList from "../../components/dashboardComp/Users/UserList";


const theme = createTheme();
const Users = () => {
    return (
        <>
            <div className="bgcolordash text-center">
            <TopNav/>
            <Box height={50}/>
            <Box sx={{display:"flex"}}>
                <Sidenav/>
                <Box component="main" sx={{flexGrow: 1, p: 3}}>
                    <ThemeProvider theme={theme}>
                        <UserList />
                    </ThemeProvider>
                </Box>
            </Box>
            </div>
        </>
    )
}

export default Users;
