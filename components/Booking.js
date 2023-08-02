"use client"
import React from 'react'
import { useState } from 'react'

const Booking = () => {
    const date = new Date
    const [cost, setCost] = useState(0)
    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");
    const [minOut, setMinOut] = useState("")
    const [stayDays, setStayDays] = useState([]);

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
    return (
        <form className="" method="get" action="/checkout">
            <div className="grid md:grid-cols-2 md:gap-6 mt-4">
                <div className="relative z-0 w-full mb-6 group">
                    <h4>Check-in</h4>
                    <input
                        type="date"
                        name="checkIn"
                        id="checkIn"
                        min={date.toISOString().slice(0, date.toISOString().indexOf("T"))}
                        onChange={handleCheckinChange}
                        value={checkin}
                        className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="checkIn" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <h4>Check-out</h4>
                    <input type="date" name="checkOut" id="checkOut" min={minOut} value={checkout} onChange={handleCheckoutChange} className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="checkOut" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6 mt-4">
                <div className="relative z-0 w-full mb-6 group">
                    <h4>Adultos</h4>
                    <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                            <select name="personas" data-te-select-init className="text-md">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="relative z-0 w-full mb-6 js text-center">
                    <h4>Distribución</h4>
                    <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                            <select data-te-select-init name="description">
                                <option value="Ajila">Ajila</option>
                                <option value="Pasaje">Pasaje</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {cost ?

                <input
                    value={cost}
                    name="amount"
                    id="amount"
                    className="block m-auto py-2.5 px-0 w-fit text-center text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                /> :
                null
            }
            <button className="w-full bg-verde-oliva p-2 font-black text-2xl text-white">Reservar</button>
        </form>
    )
}

export default Booking