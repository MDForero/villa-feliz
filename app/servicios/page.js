import BannerLogo from '@/components/BannerLogo'
import CardServices from '@/components/CardServices'

import decoracion from "../../public/decoración.jpg"
import cena from "../../public/cena.jpg"
import paseo from "../../public/paseo.jpg"
import equitacion from "../../public/equitacion.jpg"
import Head from 'next/head'

const services = [
    {
        title: "Decoración para ocasiones especiales",
        descripcion: "Somos los cómplices perfectos para sorprender a tu ser querido mediante una hermosa decoración, según sea la temática(romántica, cumpleaños, aniversario, etc).",
        img: decoracion,
        bg: 'decoracion'
    },
    {
        title: "Cena Especial",
        descripcion: "Dentro de ese pedacito de paraíso que reserves, también podrás disfrutar de exquisitos platos a la carta de excelente calidad, preparados por expertos de la gastronomía, quienes son nuestros aliados para que tu experiencia sea completamente inolvidable.La cena la eliges según las opciones que se encuentran dentro del menú de restaurante.Si lo prefieres también es posible salir y disfrutar del sector para disfrutar de la cena directamente en las instalaciones de nuestro establecimiento aliado; ubicado a 690 metros, y 06 minutos de distancia.",
        img: cena,
        bg: 'cena'
    },
    {
        title: "Paseo en bici",
        descripcion: "Por encontrarnos ubicados en un sector estratégico con bellos paisajes, y demás lugares interesantes, te brindamos la oportunidad de disfrutar del aire libre, y recorrer algunos accidentes geográficos propios de nuestro piedemonte llanero, en bicicletas todo terreno.",
        img: paseo,
        bg: 'paseo'
    },
    {
        title: "Cabalgata",
        descripcion: "Te ofrecemos la mejor experiencia de cabalgata con caballos de criadero dóciles y muy buenos compañeros para salir a disfrutar de la naturaleza dentro de espacios previamente adecuados para esta actividad, a pocos kilómetros de nuestras instalaciones.  Lo mejor es que los caballos han sido educados y entrenados de forma racional, erradicando por completo el maltrato animal; durante este recorrido cuentas con personal idóneo para guiar tu cabalgata. ",
        img: equitacion,
        bg: 'equitacion'
    }
]
export const metadata = {
    title: "Servicios",
    description: "Somos los cómplices perfectos para sorprender a tu ser querido mediante una hermosa decoración, según sea la temática(romántica, cumpleaños, aniversario, etc).", 
    keywords: "decoración, cena, paseo, cabalgata, servicios, llano, villavicencio, meta, colombia, hotel, alojamiento, hospedaje, habitaciones, reservas, reservaciones, reservar, reservar habitación, reservar habitaciones, reservar hotel, reservar alojamiento, reservar hospedaje, reservar habitación villavicencio, reservar habitaciones villavicencio, reservar hotel villavicencio, reservar alojamiento villavicencio, reservar hospedaje villavicencio, reservar habitación meta, reservar habitaciones meta, reservar hotel meta, reservar alojamiento meta, reservar hospedaje meta, reservar habitación colombia, reservar habitaciones colombia, reservar hotel colombia, reservar alojamiento colombia, reservar hospedaje colombia",
}


const servicios = () => {
    return (
        <div>
            <BannerLogo bg={'bgServices'} />
            <section className='max-w-screen-2xl'>
                <div className='max-w-screen-2xl mx-auto flex flex-col'>
                    {services.map((item, index) => <article className={" relative " } key={index}>
                            <div className={item.bg + ' absolute top-0 bottom-0 left-0 right-0 blur-sm'}></div>
                            <div className='bg-black/40 blur-none lg:py-44 xsm:p-6 w-full '>
                                <CardServices item={item} />
                            </div>
                        </article>)}
                </div>
            </section>
        </div>
    )
}

export default servicios