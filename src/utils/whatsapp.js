/**
 * WhatsApp utility for opening chat with pre-filled message
 */

// WhatsApp phone number
const WHATSAPP_PHONE = '601137893980';

// Pre-filled message template
const DEFAULT_MESSAGE =
  'Hey :) Interested to know more about the Smile Pre-assessment.. \n\nname: \nlocation: KL or KK ';

/**
 * Opens WhatsApp chat with the specified phone number and pre-filled message
 * @param {string} customMessage - Optional custom message to override the default
 */
export const openWhatsAppChat = (customMessage = DEFAULT_MESSAGE) => {
  const encodedMessage = encodeURIComponent(customMessage);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodedMessage}`;

  // Open in a new tab
  window.open(whatsappUrl, '_blank');
};

export default openWhatsAppChat;
