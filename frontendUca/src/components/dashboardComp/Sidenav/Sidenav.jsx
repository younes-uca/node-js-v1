import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useNavigate} from "react-router";
import {useAppStore} from "../../../AppStore";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmailIcon from '@mui/icons-material/Email';

import {accountService} from "../../../services/AccountService";


const drawerWidth = 240;

const Sidenav = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    backgroundColor:'#2f2f2f',
    color:'white'
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
    backgroundColor: '#2f2f2f',
    color: 'white',
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...Sidenav(theme),
            '& .MuiDrawer-paper': Sidenav(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const theme = useTheme();
    const navigate = useNavigate();
    const open = useAppStore((state) => state.dopen);

    // Gestion du bouton de déconnexion
    const logout = () => {
        accountService.logout()
        navigate('/authDash/loginDashboard')
    }


    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List>
                    <ListItem disablePadding sx={{display: 'block'}} onClick={()=>{navigate("/admin/dashboard")} }>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <DashboardIcon style={{color:'white'}}/>
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" sx={{opacity: open ? 1 : 0}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{display: 'block'}} onClick={()=>{navigate("/admin/users")} }>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <GroupIcon style={{color:'white'}}/>
                            </ListItemIcon>
                            <ListItemText primary="Users" sx={{opacity: open ? 1 : 0}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{display: 'block'}} onClick={()=>{navigate("/admin/adherent")} }>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <GroupIcon style={{color:'white'}}/>
                            </ListItemIcon>
                            <ListItemText primary="Adherents" sx={{opacity: open ? 1 : 0}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{display: 'block'}} onClick={()=>{navigate("/admin/reservations")} }>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <CardTravelIcon style={{color:'white'}}/>
                            </ListItemIcon>
                            <ListItemText primary="Reservations" sx={{opacity: open ? 1 : 0}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{display: 'block'}} onClick={()=>{navigate("/admin/disponibiliteChambre")} }>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <CalendarMonthIcon style={{color:'white'}}/>
                            </ListItemIcon>
                            <ListItemText primary="Logement" sx={{opacity: open ? 1 : 0}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{display: 'block'}} onClick={()=>{navigate("/admin/actualite")} }>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <NewspaperIcon style={{color:'white'}}/>
                            </ListItemIcon>
                            <ListItemText primary="Actualité" sx={{opacity: open ? 1 : 0}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{display: 'block'}} onClick={()=>{navigate("/admin/contact")} }>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <EmailIcon style={{color:'white'}}/>
                            </ListItemIcon>
                            <ListItemText primary="Contact" sx={{opacity: open ? 1 : 0}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{display: 'block'}} onClick={logout}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <LogoutIcon style={{color:'white'}}/>
                            </ListItemIcon>
                            <ListItemText primary="Déconnexion" sx={{opacity: open ? 1 : 0}}/>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider/>
            </Drawer>
        </Box>
    );
}
