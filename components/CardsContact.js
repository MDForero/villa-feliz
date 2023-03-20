import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CardsContact = ({ medio }) => {
    return (
        <div class="max-w-sm p-6 text-center bg-verde-oliva text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={medio.url}><FontAwesomeIcon icon={medio.icon} size="3x"/></a>
        </div>
    )
}

export default CardsContact