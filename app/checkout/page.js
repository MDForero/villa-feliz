import { useParams  } from 'next/navigation'
import React from 'react-dom'
import CryptoJS from 'crypto-js'



export default function CheckOut () {
    const router = useParams()
    let reference
    const { checkIn, checkOut, description, amount, personas } = router.query 
    const merchantId = "991199"
    const ApiKey = "cxQMd0M0f3U79ra2dP9fA0dslc"

    const referenceCode = () => {
        const fechaActual = new Date().toISOString().replace(/[-:.]/g, "").replace("T", "");
        const productoSinEspacios = description ? description.replace(/ /g, "_").toUpperCase() : "default";
        reference = fechaActual + "_" + productoSinEspacios;
    }
    referenceCode()
    const sing = () => CryptoJS.MD5(ApiKey+"~"+merchantId+"~"+reference+"~"+amount+"COP")
    


    return (
        <div>
            <form method="post" action="https://checkout.payulatam.com/ppp-web-gateway-payu/">
                <input name="responseUrl" type="hidden" value="http://www.test.com/response" readOnly />
                <input name="confirmationUrl" type="hidden" value="http://www.test.com/confirmation" readOnly />
                <input type='number' value={merchantId} hidden name='merchantId' readOnly />
                <input type='number' value={999721} hidden name='accountId' readOnly />
                <input type='number' value={0} hidden name='test' readOnly />
                <input type='text' value={sing()} hidden name="signature" readOnly />
                <div className="space-y-12 m-auto max-w-6xl">

                    <div className="flex justify-evenly flex-wrap mt-6" >
                        <section className="border-2 border-gray-900/10 p-2 mb-2 rounded-xl" >
                            <div className="relative py-2">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Información de facturación</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
                                <div className='relative py-2'>
                                    <input
                                        type="text"
                                        value={reference}
                                        readOnly
                                        name='referenceCode'
                                        id='referenceCode'
                                        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" "
                                    />
                                    <label htmlFor="referenceCode" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                        Referencia de reserva
                                    </label>

                                </div>
                            </div>

                            <div className='flex justify-between w-80'>
                                <div className="relative py-2">
                                    <input
                                        type="date"
                                        value={checkIn}
                                        readOnly
                                        name='checkIn'
                                        id='checkIn'
                                        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" "
                                    />
                                    <label htmlFor="checkIn" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                        Check-In
                                    </label>
                                </div>
                                <div className="relative py-2">
                                    <input
                                        type="date"
                                        value={checkOut}
                                        readOnly
                                        name='checkOut'
                                        id='checkOut'
                                        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" "
                                    />
                                    <label htmlFor="checkOut" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                        Check-Out
                                    </label>
                                </div>
                            </div>
                            <div className="relative py-2">
                                <input
                                    readOnly
                                    type="text"
                                    value={"check-in: " + checkIn + " check-out: " + checkOut}
                                    name='description'
                                    id='description'
                                    hidden
                                />
                            </div>
                            <div className="relative py-2">
                                <input
                                    type="text"
                                    readOnly
                                    value={"Ecolodge: " + description}
                                    name='text1'
                                    id='description'
                                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" "
                                />
                                <label htmlFor="description" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                    Suite
                                </label>
                            </div>
                            <div className="relative py-2">
                                <input
                                    type="text"
                                    readOnly
                                    value={"Para " + personas}
                                    name='text2'
                                    id='description'
                                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" "
                                />
                                <label htmlFor="description" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                    Huespedes
                                </label>
                            </div>
                            <div className='flex justify-between w-80'>

                                <div className="relative py-2">
                                    <input id="currency"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        name='currency'
                                        value="COP"
                                        readOnly
                                    />
                                    <label htmlFor="currency" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                        Moneda
                                    </label>
                                </div>
                            </div>

                            <div className='flex w-80'>
                                <div className="relative py-2">
                                    <input
                                        type="number"
                                        value={0}
                                        name='tax'
                                        id='tax'
                                        readOnly
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                    />
                                    <label htmlFor="tax" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                        Impuesto
                                    </label>
                                </div>
                                <div className="relative py-2">
                                    <input
                                        type="number"
                                        value={0}
                                        name='taxReturnBase'
                                        id='taxReturnBase'
                                        readOnly
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                    />
                                    <label htmlFor="taxReturnBase" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                        Valor base
                                    </label>
                                </div>
                            </div>
                            <div className="relative py-2">
                                <input
                                    type="number"
                                    name='amount'
                                    id='amount'
                                    readOnly
                                    value={amount}
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                />
                                <label htmlFor="amount" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                    Valor
                                </label>
                            </div>

                            {/* Motrar Firma */}

                        </section>

                        <section className="border-2 border-gray-900/50 p-2 mb-2 h-fit rounded-xl" >

                            <h2 className="text-base font-semibold leading-7 text-gray-900">Información de facturación</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
                            <div className="relative py-2">
                                <input
                                    type="text"
                                    name='buyerEmail'
                                    id='buyerEmail'
                                    placeholder=' '
                                    required
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                />
                                <label htmlFor="buyerEmail" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                    Email
                                </label>
                            </div>
                            <div className="relative py-2">
                                <input
                                    type="text"
                                    name='telephone'
                                    id='telephone'
                                    placeholder=' '
                                    required
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                <label htmlFor="telephone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                    Teléfono
                                </label>
                            </div>
                            <div className="relative py-2">
                                <input
                                    required
                                    type="text"
                                    name='buyerFullName'
                                    id='buyerFullName'
                                    placeholder=' '
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                />
                                <label htmlFor="buyerFullName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                    Nombre completo
                                </label>
                            </div>
                        </section>

                        <section className="border-2 border-gray-900/10 p-2 mb-2 h-fit  rounded-xl" >
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Información de facturación</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                            <div className="relative py-2">
                                <input type="text" name='payerEmail'
                                    id="payerEmail"
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                />
                                <label htmlFor="payerEmail" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                    Email
                                </label>
                            </div>

                            <div className="relative py-2">

                                <input
                                    required
                                    type="text"
                                    name='payerFullName'
                                    id="payerFullName"
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                />
                                <label htmlFor="payerFullName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                    Nombre completo
                                </label>
                            </div>

                            <div className="relative py-2">
                                <input
                                    required
                                    type="text"
                                    name='payerDocument'
                                    id="payerDocument"
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                />
                                <label htmlFor="payerDocument" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                    Documento
                                </label>
                            </div>
                            <div className="relative py-2">

                                <input
                                    required
                                    type="text"
                                    name='payerDocumentType'
                                    id="payerDocumentType"
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                />
                                <label htmlFor="payerDocumentType" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                    Tipo de documento
                                </label>
                            </div>
                            <button type='submit' className='text-center w-4/5 mx-auto block bg-red/10 my-2 border-2 rounded-lg focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg text-xl font-bold px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Ir a pagar</button>
                        </section>

                    </div>
                </div>
            </form>
        </div>
    )
}

