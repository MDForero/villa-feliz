"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CardsContact = ({ medio }) => {
    const { url, icon, text } = medio
    return (
        <a className="max-w-sm p-6 flex flex-col   bg-verde-oliva text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" href={url}>
            <FontAwesomeIcon icon={icon} className="w-16 h-16 m-auto"  />
            <p>{text}</p>
        </a>
    )
}

export default CardsContact