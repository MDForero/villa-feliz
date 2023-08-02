import Image from "next/image"
import imgDefault from "../public/camaIglu.jpeg"

const CardServices = ({ item }) => {
    return (
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image className="object-cover rounded-lg h-80 md:w-48 md:rounded-lg" src={item.img || imgDefault} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">{item.descripcion}</p>
            </div>
        </div>
    )
}

export default CardServices