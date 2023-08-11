import React, {useEffect, useState} from 'react'
import Sidenav from "../../components/dashboardComp/Sidenav/Sidenav";
import TopNav from "../../components/dashboardComp/TopNav/TopNav";
import "../../Dash.css";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Card} from "@mui/material";
import CardTravelIcon from '@mui/icons-material/CardTravel';
import GroupIcon from '@mui/icons-material/Group';
import CountUp from 'react-countup';
import BarChart from "../../charts/BarChart";
import {AreaChart} from "../../charts/AreaChart";
import {getAllAdherents} from '../../services/AdherentService';
import {getAllReservations} from "../../services/ReservationService";

const Dashboard = () => {
    const [adherentCount, setAdherentCount] = useState(0);
    const [reservationCount, setReservationCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const adherents = await getAllAdherents();
                setAdherentCount(adherents.length); // Assuming adherents is an array of adherents
            } catch (error) {
                console.log(error);
            }
        };
        const fetchReservationData = async () =>{
            try{
                const reservations = await getAllReservations();
                setReservationCount(reservations.length);
            }catch(error){
                console.log(error);
            }
        }

        fetchData();
        fetchReservationData();
    }, []);
    return (
        <>
            <div className="bgcolordash">
                <TopNav/>
                <Box height={70}/>
                <Box sx={{display: "flex"}}>
                    <Sidenav />
                    <Box component="main" sx={{flexGrow: 1, p: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                    <Card sx={{minWidth: 70 + "%",height: 140}} className="gradient">
                                        <CardContent>
                                            <div className="iconstyle">
                                                <CardTravelIcon/>
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                                                <CountUp delay={2} end={reservationCount} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                                                total Reservations
                                            </Typography>
                                        </CardContent>
                                    </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card sx={{minWidth: 70% + "%",height: 140}} className="gradientlight">
                                    <CardContent>
                                        <div className="iconstyle">
                                            <GroupIcon/>
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                                            <CountUp start={0} end={adherentCount} delay={2} />
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                                            Nombre d'adherents
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Box height={10}/>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Card sx={{height: 60 + "vh"}}>
                                    <CardContent>
                                        <BarChart/>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card sx={{height: 60 + "vh"}}>
                                    <CardContent>
                                        <AreaChart/>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Dashboard;
