import BannerLogo from "@/components/BannerLogo"

import Nosotros from "@/components/Nosotros"
import { Description } from "@mui/icons-material"
import Head from "next/head"

const data = [
    {
        title:"MISIÓN:",
        description:"Brindar alternativas de confort y calidad a nuestros huéspedes en cuanto a espacios naturales, comodidad, privacidad, atención; contribuyendo a la construcción y desarrollo del turismo sostenible, pensando no solamente en utilidades económicas sino en la real satisfacción de nuestros visitantes.",
        img:'/mision.jpg'
    },
    {
        title:"VISIÓN:",
        description:"Lograr posicionamiento como la principal alternativa de alojamiento rural en la región Orinoquía, sobresaliendo por nuestro desempeño como Turismo sostenible.",
        img:'/vision.jpg'
    },
]

export const metadata = {
    title: "Nosotros",
    description: "Somos ese perfecto aliado que ofrece una gran experiencia, no solo de un simple alojamiento sino de armonía, salud, paz, y tranquilidad, logrando una perfecta armonía entre la comodidad y el lujo de la naturaleza.",
    keywords: "Nosotros, Quienes somos, Mision, Vision, Alojamiento, Turismo, Sostenible, Orinoquia, Llanos, Colombia",
}

const nosotros = () => {
    return (
        <div className="
        mb-20">
            <BannerLogo bg={'nosotros'} />

            <section className="max-w-screen m-auto">
                <div className="flex flex-col max-w-6xl mx-auto mt-20 items-center justify-center">
                    <h1 className="text-4xl font-bold py-8 text-center text-gray-800">Nosotros</h1>
                    <p className="text-center max-w-5xl text-gray-600">Somos ese perfecto aliado que ofrece una gran experiencia, no solo de un simple alojamiento sino de armonía, salud, paz, y tranquilidad, logrando una perfecta armonía entre la comodidad y el lujo de la naturaleza.</p>
                </div>
            </section>
            
            <section className="max-w-screen m-auto">
            {data.map((item, index)=> <Nosotros key={index} item={item}/>)}
            </section>
        </div>
    )
}

export default nosotros