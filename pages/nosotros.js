import BannerLogo from "@/components/BannerLogo"
import Layout from "@/components/Layout"
import Nosotros from "@/components/Nosotros"
import { Description } from "@mui/icons-material"
import utils from "../styles/utils.module.css"
import Head from "next/head"

const data = [
    {
        title:"¿QUIÉNES SOMOS?",
        description:"Somos ese perfecto aliado que ofrece una gran experiencia, no solo de un simple alojamiento sino de armonía, salud, paz, y tranquilidad, logrando una perfecta armonía entre la comodidad y el lujo de la naturaleza.",
        bg:utils.bgquienes,
    },
    {
        title:"MISIÓN:",
        description:"Brindar alternativas de confort y calidad a nuestros huéspedes en cuanto a espacios naturales, comodidad, privacidad, atención; contribuyendo a la construcción y desarrollo del turismo sostenible, pensando no solamente en utilidades económicas sino en la real satisfacción de nuestros visitantes.",
        bg:utils.bgmision,
    },
    {
        title:"VISIÓN:",
        description:"Lograr posicionamiento como la principal alternativa de alojamiento rural en la región Orinoquía, sobresaliendo por nuestro desempeño como Turismo sostenible.",
        bg:utils.bgvision,
    },
]

const nosotros = () => {
    return (
        <Layout>
            <Head>
                <title>Nosotros</title>
            </Head>
            <BannerLogo bg={utils.nosotros} />
            <section className="max-w-screen m-auto">
            {data.map((item, index)=> <Nosotros key={index} item={item}/>)}
            </section>
        </Layout>
    )
}

export default nosotros