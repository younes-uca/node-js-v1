import React, { useEffect, useRef, useState } from 'react';
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { getAllReservations } from "../../../services/ReservationService";

const ReservationCalendar = () => {
    const calendarRef = useRef(null);
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        let calendarApi = null;

        const fetchReservations = async () => {
            try {
                const response = await getAllReservations();
                setReservations(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchReservations();

        return () => {
            if (calendarApi) {
                calendarApi.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (calendarRef.current && reservations.length > 0) {
            const calendar = new Calendar(calendarRef.current, {
                plugins: [interactionPlugin, dayGridPlugin],
                initialView: 'dayGridMonth',
                selectable: true,
                events: reservations.map(reservation => ({
                    title: reservation.Logement.nom || 'Nom du logement non disponible',
                    start: reservation.dateArrive,
                    end: reservation.dateDepart,
                    color: getColorByLogementName(reservation.Logement.nom),
                    allDay: true
                }))
            });

            calendar.render();

            return () => {
                calendar.destroy();
            };
        }
    }, [reservations]);

    const getColorByLogementName = (nomLogement) => {
        switch (nomLogement) {
            case 'chambre':
                return '#b27171';
            case 'riad':
                return '#9171b2';
            case 'bungalow':
                return 'green';
            case 'studio':
                return '#71b291';
            default:
                return 'gray';
        }
    };

    return (
        <div>
            <h1>Disponibilité Logements</h1>
            <div ref={calendarRef} />
        </div>
    );
};

export default ReservationCalendar;
