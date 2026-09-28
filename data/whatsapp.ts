/**
 * WhatsApp Configuration & Contact Numbers
 * 
 * Edit this file to add, remove, or update WhatsApp numbers and prefilled messages.
 * Numbers should be in international format without the '+' symbol (e.g., '2348086188318' for Nigeria).
 */

export interface WhatsAppContact {
  id: string;
  name: string;
  role: string;
  displayPhone: string;
  whatsappNumber: string; // International format without +, e.g. 2348086188318
  avatarText?: string;
  isAvailable?: boolean;
}

export interface WhatsAppConfig {
  defaultMessage: string;
  popupTitle: string;
  popupSubtitle: string;
  greetingText: string;
  contacts: WhatsAppContact[];
}

export const WHATSAPP_CONFIG: WhatsAppConfig = {
  // Default message sent to WhatsApp when a user clicks chat
  defaultMessage:
    'Hello Made Easy Homes & Properties! I am interested in your gated estates and flexible payment plans. Please provide more information.',

  // Widget Header text
  popupTitle: 'Made Easy Homes & Properties',
  popupSubtitle: 'Typically replies in under 15 minutes',

  // Welcome bubble inside the floating card
  greetingText:
    '👋 Hello! Looking to inspect an estate, verify titles, or find a flexible 12/24-month payment plan? Chat with one of our property advisors below:',

  // List of active WhatsApp lines (Editable)
  contacts: [
    {
      id: 'advisor-1',
      name: 'Property Sales & Site Visits',
      role: 'Head Office Sales Desk',
      displayPhone: '0808 618 8318',
      whatsappNumber: '2348086188318',
      avatarText: 'ME',
      isAvailable: true,
    },
    {
      id: 'advisor-2',
      name: 'Customer Inquiries & Pricing',
      role: 'Property Consultant',
      displayPhone: '0806 044 1161',
      whatsappNumber: '2348060441161',
      avatarText: 'HP',
      isAvailable: true,
    },

  ],
};
