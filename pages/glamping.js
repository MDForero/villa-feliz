import BannerLogo from "@/components/BannerLogo"
import Layout from "@/components/Layout"
import Image from "next/image"
import bg from "../styles/utils.module.css"
import ajila from "../public/IMG-8815.jpg"
import pasaje from "../public/IMG-8867.jpg"
import Acomodaciones from "@/components/Acomodaciones"

const acomodaciones = [
    {
        img:ajila,
        title:"Ajila",
        description:"Pasaje es un ritmo musical del folclor llanero, con melodía serena, sus letras románticas, homenajeando al amor, a la tierra, o a la cultura. Sus versos o estrofas son como poemas luego convertidas en bellas canciones.",
        features:["Cama doble", "Mueble auxiliar.", "Baño privado.", "Torre de ventilador a control.", "Televisor inteligente", "Biblioteca", "Juegos de mesa.", "Vela aromática."],
        value:350000,
    },
    {
        img:pasaje,
        title:"Pasaje",
        description:"Ajila es un término muy conocido en la cultura llanera, inclusivo es protagonista en los cantos de trabajo de llano, los cuales en diciembre de 2017 fueron declarados por la UNESCO como Patrimonio Cultural Inmaterial de la Humanidad.",
        features:["Cama doble", "Mueble auxiliar.", "Baño privado.", "Torre de ventilador a control.", "Televisor inteligente", "Biblioteca", "Juegos de mesa.", "Vela aromática."],
        value:350000,
    }
]

const glamping = () => {
    return (
        <Layout>
            <BannerLogo bg={bg.bgGlamping} />
            <section className="max-w-7xl mx-auto">
                <div className="mt-10">
                    <h5 className="text-center text-1xl font-black text-verde-hunt">Hola Mundo</h5>
                    <h2 className="text-center text-5xl font-black text-verde-oliva">Hola Mundo</h2>
                    <p className="text-gray-600 max-w-[700px] text-center mx-auto my-2">Nuestros  glampings cuentan con diseños amigables con la naturaleza, en un entorno verde, ubicados junto a los árboles nativos.  Están construidos en maderas reforestadas y vidrio para disfrutar permanentemente del paisaje.</p>
                </div>
                <div className="flex flex-wrap justify-evenly">
                    {acomodaciones.map(item => <Acomodaciones item={item}/>)}
                </div>
            </section>
        </Layout>
    )
}

export default glamping