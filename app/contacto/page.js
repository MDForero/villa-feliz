import BannerLogo from "@/components/BannerLogo"
import CardsContact from "@/components/CardsContact"
import Form from "@/components/Form"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons"
import Head from "next/head"

const cards = [
    {
        icon: faWhatsapp,
        url: "https://wa.me/+573219539256",
        text: "3219539256"
    },
    {
        icon: faEnvelope,
        url: "mailto:villafelizeco@gmail.com",
        text: "villafelizeco@gmail.com"
    },
    {
        icon: faPhone,
        url: "tel:+573219539256",
        text: "3219359256"
    }
]

export const metadata = {
    title: "Contacto",

}

const Contacto = () => {
    let nombre
    let apellido
    let telefono
    let direccion


    return (
        <div>
            <BannerLogo bg={'bgContacto'} />\
            <div className="flex md:flex-row flex-col justify-evenly  border-gray-300 border-4 mx-auto mt-[20px] p-[20px]">

                <div className="max-w-3xl w-full ">
                    <h1 className="text-center text-2xl md:text-4xl font-black mt-[30px] mb-[30px]">Formulario de contacto</h1>
                   <Form/>
                    <div>
                        <h3 className="text-2xl md:text-4xl font-black text-center mt-[50px] mb-[30px]">Medios de contacto</h3>
                        <div className=" flex flex-wrap justify-evenly max-w-5xl mx-auto mt-[30px] py-[20px]">
                            {cards.map((item, index) => <CardsContact medio={item} key={index} />)}
                        </div>
                    </div>
                </div>
                <div className="max-w-5xl w-full h-[400px] md:h-[600px] md:w-2/5 max-h-[650px]  mx-auto mt-[30px] py-[20px]" >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5226.324187174831!2d-72.89185292582725!3d4.852634396558707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad345fa6b57c9%3A0x13d5e425b506efaa!2sVilla%20Feliz%20Ecolodge!5e0!3m2!1ses-419!2sco!4v1679241871653!5m2!1ses-419!2sco" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contacto