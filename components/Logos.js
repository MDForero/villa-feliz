import sena from "../public/logo-sena.png"
import monterrey from "../public/logo-alcaldia.png"
import colombia from "../public/logo-republica.png"
import emprender from "../public/logo-fondo.png"
import Image from "next/image"


const Logos = () => {
    return (
        <div className='flex max-w-[800px] mx-auto flex-wrap h-fit justify-evenly mt-[50px]'>
            <Image src={sena} height={100} alt="logo del sena" />
            <Image src={emprender} height={100} alt="logo fondo emprender" />
            <Image src={monterrey} height={100} alt="logo alcaldía de Monterrey" />
            <Image src={colombia} height={100} alt="logo de la republica de Colombia" />
        </div>
    )
}

export default Logos