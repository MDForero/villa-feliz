import Image from "next/image"
import imgDefault from "../public/camaIglu.jpeg"

const CardServices = ({ item }) => {
    return (
        <div className="flex flex-col items-center justify-center mx-auto rounded-lg shadow md:flex-row md:max-w-2xl p-8 bg-gray-950/70 gap-12">
            <div className="flex flex-col  text-justify p-4 w-full leading-normal">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">{item.title}</h5>
                <p className="mb-3 font-normal text-white text-justify">{item.descripcion}</p>
            </div>
        </div>
    )
}

export default CardServices