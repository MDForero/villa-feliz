import BannerLogo from "@/components/BannerLogo"
import CardsContact from "@/components/CardsContact"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons"
import Head from "next/head"

const cards = [
    {
        icon: faWhatsapp,
        url: "https://wa.me/+573219539256",
        text: "No dudes en ponerte en contacto"
    },
    {
        icon: faEnvelope,
        url: "mailto:villafelizeco@gmail.com",
        text: "No dudes en ponerte en contacto"
    },
    {
        icon: faPhone,
        url: "tel:+573219539256",
        text: "No dudes en ponerte en contacto"
    }
]

export const metadata = {
    title: "Contacto",
    
}

const Contacto = () => {
    return (
        <div>
            <BannerLogo bg={'bgContacto'} />
            <div className="max-w-5xl border-gray-300 border-4 mx-auto mt-[20px] p-[20px]">
                <h1 className="text-center text-4xl font-black mt-[30px] mb-[30px]">Formulario de contacto</h1>
                <div className="max-w-4xl border-gray-300 border-3 mx-auto">
                    <form>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombres</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellidos</label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero de teléfono</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dirección</label>
                            </div>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
            <div>
                <h3 className="text-5xl font-black text-center mt-[50px] mb-[30px]">Medios de contacto</h3>
                <div className=" flex flex-wrap justify-evenly max-w-5xl mx-auto mt-[30px] py-[20px]">
                    {cards.map((item, index) => <CardsContact medio={item} key={index} />)}
                </div>
            </div>
            <div className="max-w-5xl mx-auto mt-[30px] py-[20px]" >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5226.324187174831!2d-72.89185292582725!3d4.852634396558707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad345fa6b57c9%3A0x13d5e425b506efaa!2sVilla%20Feliz%20Ecolodge!5e0!3m2!1ses-419!2sco!4v1679241871653!5m2!1ses-419!2sco" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contacto