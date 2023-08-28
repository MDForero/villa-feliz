import sena from "../public/logo-sena.png"
import monterrey from "../public/logo-alcaldia.png"
import colombia from "../public/logo-republica.png"
import emprender from "../public/logo-fondo.png"
import Image from "next/image"


const Logos = () => {
    return (
        <div className='md:grid md:grid-cols-5 grid-cols-3 flex flex-wrap max-w-[800px] w-full gap-2 items-center  mx-auto  h-[100px] justify-evenly pt-12 mb-[50px]'>
            <Image src={sena} height={0} alt="logo del sena" className="md:order-1 h-full object-cover w-fit md:h-32"/>
            <Image src={monterrey} height={0} alt="logo alcaldía de Monterrey"className="md:order-3 h-full object-cover w-fit md:h-32" />
            <Image src={colombia} height={0} alt="logo de la republica de Colombia" className="md:order-4 h-full object-cover w-fit md:h-32"/>
            <Image src={emprender} height={0} alt="logo fondo emprender" className="md:order-2 md:col-span-2 col-span-3 h-full object-cover w-fit md:h-32"/>
        </div>
    )
}

export default Logos