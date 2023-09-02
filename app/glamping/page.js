import Image from "next/image"
import ajila from "../../public/IMG-8815.jpg"
import pasaje from "../../public/IMG-8867.jpg"
import Acomodaciones from "@/components/Acomodaciones"
import Head from "next/head"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import BannerLogo from "@/components/BannerLogo"
import  { Plataformas } from "@/components/Plataformas"


export const acomodaciones = [
    {
        img: ajila,
        title: "Ajila",
        description: "Ajila es un término muy conocido en la cultura llanera, inclusivo es protagonista en los cantos de trabajo de llano, los cuales en diciembre de 2017 fueron declarados por la UNESCO como Patrimonio Cultural Inmaterial de la Humanidad.",
        features: ["Cama doble", "Mueble auxiliar.", "Baño privado.", "Torre de ventilador a control.", "Televisor inteligente", "Biblioteca", "Juegos de mesa.", "Vela aromática."],
        value: 350000,
    },
    {
        img: pasaje,
        title: "Pasaje",
        description: "Pasaje es un ritmo musical del folclor llanero, con melodía serena, sus letras románticas, homenajeando al amor, a la tierra, o a la cultura. Sus versos o estrofas son como poemas luego convertidas en bellas canciones.",
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
                    <h5 className="text-center text-xl md:text-3xl font-black text-green-600">Un encuentro armonioso con la naturaleza:</h5>
                    <h2 className="text-center text-3xl md:text-6xl font-black text-blueSea"> Glampings sostenibles entre árboles nativos</h2>
                    <p className="text-gray-600 max-w-[700px] text-xl text-center mx-auto my-2">Nuestros  glampings cuentan con diseños amigables con la naturaleza, en un entorno verde, ubicados junto a los árboles nativos.  Están construidos en maderas reforestadas y vidrio para disfrutar permanentemente del paisaje.</p>
                </div>
                <div className="flex flex-wrap justify-evenly">
                    {acomodaciones.map((item, index) => <Acomodaciones item={item} key={index} />)}
                </div>
            </section>
            <section className={"max-w-screen-7xl " + 'bgCheckout'}>
                <div className="bg-black/60 py-20 my-8 ">
                        <div className="max-w-5xl flex flex-wrap gap-8 px-2 mx-auto justify-evenly items-center text-white">
                            <p className="text-justify md:w-3/5 text-xl">Nuestros  glampings cuentan con diseños amigables con la naturaleza, en un entorno verde, ubicados junto a los árboles nativos.  Están construidos en maderas reforestadas y vidrio para disfrutar permanentemente del paisaje.</p>
                            <section className="flex flex-col gap-4">
                            <a className="flex flex-row items-center  font-black text-xl" href="tel:+573219539256">
                                <FontAwesomeIcon className="text-white rounded-full h-10 w-10" icon={faPhone}  />
                                <div className="mx-2">
                                   <div>  +57 321 9539 256 </div>
                                    <p className="font-bold">Para mayor información</p>
                                </div>
                            </a>
                            <Plataformas/>
                            </section>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Glamping