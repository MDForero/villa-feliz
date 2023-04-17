import Layout from "@/components/Layout"
import Image from "next/image"
import bg from "../styles/utils.module.css"
import ajila from "../public/IMG-8815.jpg"
import pasaje from "../public/IMG-8867.jpg"
import Acomodaciones from "@/components/Acomodaciones"
import Head from "next/head"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import Logos from "@/components/Logos"
import { useState } from "react"
import BannerLogo from "@/components/BannerLogo"


const acomodaciones = [
    {
        img: ajila,
        title: "Ajila",
        description: "Pasaje es un ritmo musical del folclor llanero, con melodía serena, sus letras románticas, homenajeando al amor, a la tierra, o a la cultura. Sus versos o estrofas son como poemas luego convertidas en bellas canciones.",
        features: ["Cama doble", "Mueble auxiliar.", "Baño privado.", "Torre de ventilador a control.", "Televisor inteligente", "Biblioteca", "Juegos de mesa.", "Vela aromática."],
        value: 350000,
    },
    {
        img: pasaje,
        title: "Pasaje",
        description: "Ajila es un término muy conocido en la cultura llanera, inclusivo es protagonista en los cantos de trabajo de llano, los cuales en diciembre de 2017 fueron declarados por la UNESCO como Patrimonio Cultural Inmaterial de la Humanidad.",
        features: ["Cama doble", "Mueble auxiliar.", "Baño privado.", "Torre de ventilador a control.", "Televisor inteligente", "Biblioteca", "Juegos de mesa.", "Vela aromática."],
        value: 350000,
    }
]

const glamping = () => {
    const date = new Date
    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");
    const [minOut, setMinOut]=useState("")
    const [stayDays, setStayDays] = useState([]);

    const handleCheckinChange = (event) => {
        const selectedDate = event.target.value;
        setCheckin(selectedDate);
        const nextDay = new Date(selectedDate);
        nextDay.setDate(nextDay.getDate() + 1);
        setMinOut(nextDay.toISOString().slice(0, 10));
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
        const week =  ["lunes", "martes","miércoles","jueves"]
        let cost = 0
        for (let index = 0; index < listDays.length - 1; index++) {
            week.includes(listDays[index]) ? cost += 220000 : cost += 250000
        }
        console.log(cost)
    }

    return (
        <Layout>
            <Head>
                <title>Glampings de villa feliz</title>
            </Head>
            <BannerLogo bg={bg.bgGlamping} />
            <section className="max-w-7xl mx-auto">
                <div className="mt-10">
                    <h5 className="text-center text-1xl font-black text-verde-hunt">Hola Mundo</h5>
                    <h2 className="text-center text-5xl font-black text-verde-oliva">Hola Mundo</h2>
                    <p className="text-gray-600 max-w-[700px] text-center mx-auto my-2">Nuestros  glampings cuentan con diseños amigables con la naturaleza, en un entorno verde, ubicados junto a los árboles nativos.  Están construidos en maderas reforestadas y vidrio para disfrutar permanentemente del paisaje.</p>
                </div>
                <div className="flex flex-wrap justify-evenly">
                    {acomodaciones.map((item, index) => <Acomodaciones item={item} key={index} />)}
                </div>
            </section>
            <section className={"max-w-screen-7xl " + bg.bgCheckout}>
                <div className="bg-black/60 py-4 my-8 ">
                    <div className="flex flex-wrap justify-evenly items-center ">
                        <div className="w-[400px] text-white">
                            <h3 className="text-center text-2xl font-bold">Lorem ipsum</h3>
                            <p className="text-justify">Nuestros  glampings cuentan con diseños amigables con la naturaleza, en un entorno verde, ubicados junto a los árboles nativos.  Están construidos en maderas reforestadas y vidrio para disfrutar permanentemente del paisaje.</p>
                            <div className="flex mx-4 py-2 ">
                                <FontAwesomeIcon className="text-white bg-verde-oliva rounded-full" icon={faPhone} size="3x" />
                                <div className="mx-2">
                                    <a className="font-black text-xl" href="tel:+573219539256"> +57 321 9539 256 </a>
                                    <p className="font-bold">Para mayor información</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-[90%] w-[400px] border-2 bg-slate-100/80 p-4 text-center text-xl ">
                            <h4>Glamping</h4>
                            <h1>Formulario de reserva glampings</h1>
                            <form className="" method="get" action="/checkout">
                                <div className="grid md:grid-cols-2 md:gap-6 mt-4">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <h4>Check-in</h4>
                                        <input type="date" name="checkIn" id="checkIn" min={date.toISOString().slice(0, date.toISOString().indexOf("T"))} onChange={handleCheckinChange} value={checkin} className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="checkIn" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <h4>Check-out</h4>
                                        <input type="date" name="checkOut" id="checkOut" min={minOut} value={checkout} onChange={handleCheckoutChange} className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="checkOut" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6 mt-4">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <h4>Adultos</h4>
                                        <div className="flex justify-center">
                                            <div className="mb-3 xl:w-96">
                                                <select data-te-select-init className="text-md">
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
                                <button className="w-full bg-verde-oliva p-2 font-black text-2xl text-white">Reservar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Logos />
        </Layout>
    )
}

export default glamping