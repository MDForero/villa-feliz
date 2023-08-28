"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CardsContact = ({ medio }) => {
    const { url, icon, text } = medio
    return (
        <a className="w-32 h-32 p-6 flex flex-col   bg-blueSea text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" href={url}>
            <FontAwesomeIcon icon={icon} className="w-12 h-12 m-auto"  />
            <p className="overflow-hidden overflow-ellipsis">{text}</p>
        </a>
    )
}

export default CardsContact