'use client'

import { useState } from "react";


const Booking = () => {
    const date = new Date
    const [cost, setCost] = useState(0)
    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");
    const [minOut, setMinOut] = useState("")
    const [stayDays, setStayDays] = useState([]);

    let occupancy
    let room

    const handleCheckinChange = (event) => {
        const selectedDate = event.target.value;
        setCheckin(selectedDate);
        const nextDay = new Date(selectedDate);
        nextDay.setDate(nextDay.getDate() + 1);
        setMinOut(selectedDate ? nextDay.toISOString().slice(0, 10) : "");
    };

    const handleCheckoutChange = (event) => {
        const selectedDate = event.target.value;
        setCheckout(selectedDate);
        const dateList = getDateList(checkin, selectedDate);
        setStayDays(dateList);
    };

    const getDateList = (startDate, endDate) => {
        const dateList = [];
        let currentDate = new Date(startDate);
        currentDate.setDate(currentDate.getDate() + 1)
        const options = { weekday: 'long' };
        while (currentDate <= new Date(endDate)) {
            dateList.push(currentDate.toLocaleDateString('es-ES', options));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        costBooking(dateList)
    };

    const costBooking = (listDays) => {
        const week = ["lunes", "martes", "miércoles", "jueves"]
        let cost = 0
        for (let index = 0; index < listDays.length; index++) {
            week.includes(listDays[index]) ? cost += 220000 : cost += 250000
        }
        setCost(cost)
    }
    const clickBooking = (e) => {
        e.preventDefault()
        const mensaje = `Hola%20me%20gustaria%20reservar%20un%20galmping%3A%0ACheck-in%3A%20${checkin}%0ACheck-Out%3A%20${checkout}%0AHuespedes%3A%20${occupancy.value}%0AHabitacion%3A%20${room.value}`
        const enviar = document.getElementById("enviar")
        enviar.setAttribute("href", `https://api.whatsapp.com/send?phone=573219539256&text=${mensaje}`)
        enviar.click()
    }

    return (
        <div className="w-full absolute -bottom-32  lg:bottom-0 py-2">
            <form className="max-w-5xl mx-auto bg-gray-100/80 p-3" method="get" action="/checkout">
                <div className="flex lg:flex-row flex-col gap-5 items-center justify-center">
                    <div className="flex flex-row gap-2">
                        <div className="relative z-0 w-full p-3 rounded-2xl border-2 border-blueSea group">
                            <input
                                type="date"
                                name="checkIn"
                                id="checkIn"
                                min={date.toISOString().slice(0, date.toISOString().indexOf("T"))}
                                onChange={handleCheckinChange}
                                value={checkin}
                                className="block  w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />

                        </div>
                        <div className="relative z-0 w-full p-3 rounded-2xl border-2 border-blueSea group">

                            <input
                                type="date"
                                name="checkOut"
                                id="checkOut"
                                min={minOut}
                                value={checkout}
                                onChange={handleCheckoutChange}
                                className="block   w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required />

                        </div>
                    </div>
                    <div className="flex gap-2 flex-row">
                        <div className="relative z-0 text-center flex gap-4 border-2 border-blueSea p-3 rounded-2xl w-full group">
                            <h4>Adultos</h4>
                            <div className="flex justify-center">
                                <div className="">
                                    <select name="occupancy" ref={node => occupancy = node} defaultValue={'2'} data-te-select-init className="text-md">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-0 w-full flex gap-4 border-2 border-blueSea p-3 rounded-2xl text-center">
                            <h4>Distribución</h4>
                            <div className="flex justify-center">
                                <div className="">
                                    <select name="room" ref={node => room = node} required defaultValue={'Pasaje'} >
                                        <option value="Ajila">Ajila</option>
                                        <option value="Pasaje">Pasaje</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={(e) => clickBooking(e)} className="w-fit  bg-blueSea p-2 font-black text-2xl text-white">Reservar</button>
                </div>

            </form>
            <a id="enviar" className="hidden" onClick={(e) => clickBooking} href="#"> reservar</a>
        </div>
    )
}


export default Booking