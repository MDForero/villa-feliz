import { useState } from 'react'

const Firma = ({ amount, reference, currency, merchantId }) => {
    const [firma, setFirma] = useState("")

    async function generarFirma(amount, currency, referenceCode, merchantId) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount, currency, referenceCode, merchantId })
        };
        const response = await fetch('http://localhost:8000/generate-md5', requestOptions);
        const data = await response.json();
        return data.hash;
    }
    generarFirma(amount, currency, reference, merchantId)
        .then((firma) => {
            // Aquí puedes utilizar la firma generada para completar el proceso de pago
            setFirma(firma)
        })
        .catch((error) => {
            console.error(error);
        });

    return (
        <input value={firma} readOnly hidden name='signature' />
    )
}

export default Firma