const messageWhatsApp = "Hola, Deseo solicitar cotización sobre los cursos que ofrecen."
const messageEncoded = encodeURIComponent(messageWhatsApp)

export const CONTACT_NUMBER = "943 542 437"
export const WHATSAPP_NUMBER = "51943542437"
export const WHATSAPP_MESSAGE_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${messageEncoded}`