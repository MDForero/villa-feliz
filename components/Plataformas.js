"use client"
import React from 'react'
import { useState } from 'react'
import booking from '../public/bookingcom-1.svg'
import { faAirbnb, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'


export const Plataformas = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center">
                <h4 className="text-2xl font-black">Reserva en:</h4>
                <div className="flex justify-center gap-8">
                    <a href='https://www.booking.com/hotel/co/villa-feliz-glamping-monterrey.es.html?label=gen173nr-1BCAsoMkIedmlsbGEtZmVsaXotZ2xhbXBpbmctbW9udGVycmV5SDNYBGgyiAEBmAEKuAEYyAEM2AEB6AEBiAIBqAIEuAKGuZ6nBsACAdICJDZhZjFkODQ2LTVkZTQtNDVkYy05ZTJhLTRiOWU2NDhjMzNiYdgCBeACAQ&sid=71e7aa97cda36df174da1716d656e03c&dist=0&group_adults=2&group_children=0&keep_landing=1&no_rooms=1&sb_price_type=total&type=total&#tab-main' target="_blank" rel="noreferrer">
                        <Image src={booking}  alt='logo bookings' className="w-14 h-14" />
                    </a>
                
                    <a href='https://api.whatsapp.com/send?phone=573219539256&text=Hola!%20Quiero%20reservar%20en%20Villa%20Feliz%20Glamping' target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp}  className="text-6xl text-green-500" />
                    </a>
                </div>
            </div>
        </div>
    )
}

