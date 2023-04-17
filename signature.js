import CryptoJS from "crypto-js"

const apiKey = process.env.API_KEY_PAYU
const merchantId = process.env.NEXT_PUBLIC_MERCHANT_ID

const sing = (data) => {
    const signature = CryptoJS.MD5(`${apiKey}~${merchantId}~${data.reference}~${data.amount}~COP`)
    return signature
}

export default sing