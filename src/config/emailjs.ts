/**
 * ==============================================================================
 * EMAILJS CONFIGURATION
 * ==============================================================================
 * 
 * To connect your working contact form to EmailJS:
 * 1. Create a free account at https://www.emailjs.com/
 * 2. Add an Email Service (e.g. Gmail) -> Copy your Service ID below
 * 3. Create an Email Template -> Copy your Template ID below
 *    Template parameters to use in EmailJS:
 *      - {{user_name}} or {{name}}
 *      - {{user_email}} or {{email}}
 *      - {{message}}
 * 4. Go to Account > API Keys -> Copy your Public Key below
 * 
 * The contact form is already fully wired to send live emails using these keys.
 * If you haven't added your keys yet, the form gracefully falls back to a 
 * mock preview with confirmation so testing is seamless!
 */

export const EMAILJS_CONFIG = {
  // Replace with your EmailJS Service ID (e.g. "service_abc123")
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_placeholder",

  // Replace with your EmailJS Template ID (e.g. "template_xyz789")
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_placeholder",

  // Replace with your EmailJS Public Key / User ID (e.g. "user_123456789")
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key_placeholder",
};
