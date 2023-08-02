import Image from "next/image"
import ajila from "../../public/IMG-8815.jpg"
import pasaje from "../../public/IMG-8867.jpg"
import Acomodaciones from "@/components/Acomodaciones"
import Head from "next/head"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import Logos from "@/components/Logos"
import BannerLogo from "@/components/BannerLogo"
import Booking from "@/components/Booking"


export const acomodaciones = [
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

export const metadata = {
    title: "glamping",
    description: "Somos ese perfecto aliado que ofrece una gran experiencia, no solo de un simple alojamiento sino de armonía, salud, paz, y tranquilidad, logrando una perfecta armonía entre la comodidad y el lujo de la naturaleza.",
    keywords: ["Nosotros", "Quienes somos", "Mision", "Vision", "Alojamiento", "Turismo", "Sostenible", "Orinoquia", "Llanos", "Colombia", "Hoteles en Monterrey Casanare", "Hoteles en Monterrey", "Casanare", "Hoteles"," Monterrey", "Casanare", "Hoteles en Monterrey", "Hoteles"]
}

const Glamping = () => {
    

    return (
        <div>
            
            <BannerLogo bg={'bgGlamping'} />
            <section className="max-w-7xl mx-auto">
                <div className="mt-10">
                    <h5 className="text-center text-2xl font-black text-verde-hunt">Un encuentro armonioso con la naturaleza:</h5>
                    <h2 className="text-center text-6xl font-black text-verde-oliva"> Glampings sostenibles entre árboles nativos</h2>
                    <p className="text-gray-600 max-w-[700px] text-xl text-center mx-auto my-2">Nuestros  glampings cuentan con diseños amigables con la naturaleza, en un entorno verde, ubicados junto a los árboles nativos.  Están construidos en maderas reforestadas y vidrio para disfrutar permanentemente del paisaje.</p>
                </div>
                <div className="flex flex-wrap justify-evenly">
                    {acomodaciones.map((item, index) => <Acomodaciones item={item} key={index} />)}
                </div>
            </section>
            <section className={"max-w-screen-7xl " + 'bgCheckout'}>
                <div className="bg-black/60 py-4 my-8 ">
                    <div className="flex flex-wrap justify-evenly items-center ">
                        <div className="w-[400px] text-white">
                            <h3 className="text-center text-2xl font-bold">Ajila</h3>
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
                            <Booking/>
                        </div>
                    </div>
                </div>
            </section>
            <Logos />
        </div>
    )
}

export default Glamping