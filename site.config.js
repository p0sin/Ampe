/**
 * Configuración del sitio (variables públicas).
 * Este archivo se commitea al repo; no uses GitHub/Cloudflare env para estas variables.
 *
 * Todas las claves se exponen como import.meta.env.PUBLIC_* en el proyecto.
 */
export default {
  /** URL canónica del sitio (ej: https://www.clinica.com) */
  PUBLIC_SITE_URL: 'https://ejemplo.com',

  /** Email de contacto (aviso de privacidad, etc.) */
  PUBLIC_CONTACT_EMAIL: 'hola@ejemplo.com',

  /** ID de Google Tag Manager (ej: GTM-XXXXXXX). Dejar vacío para desactivar. */
  PUBLIC_GTM: '',

  /** Número de aviso COFEPRIS (pie de página) */
  PUBLIC_COFEPRIS: '000000000',

  /** Enlace de WhatsApp (ej: https://wa.me/521234567890) */
  PUBLIC_WA_LINK: 'https://wa.me/521234567890',

  /** Teléfono público (ej: +331234567890) */
  PUBLIC_PHONE: '+331234567890',

  /** Nombre del responsable del aviso de privacidad */
  PUBLIC_PRIVACY_NAME: 'Ejemplo S.A. de C.V.',

  /** Domicilio del responsable del aviso de privacidad */
  PUBLIC_PRIVACY_ADDRESS: 'Calle Ejemplo 123, Col. Centro, CDMX',
};
