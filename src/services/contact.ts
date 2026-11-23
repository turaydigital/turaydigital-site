
/*
 * --------------------------------------------
 * Turay Digital Website
 * Contact Form API Service
 * --------------------------------------------
 *
 * Handles public contact form submissions.
 *
 * This service will connect to the
 * Turay Digital backend API.
 */

export interface ContactFormRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}

/*
 * --------------------------------------------
 * API Configuration
 * --------------------------------------------
 */

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://test-api.turaydigital.com";

/*
 * --------------------------------------------
 * Submit Contact Form
 * --------------------------------------------
 */

export const submitContactForm = async (
  data: ContactFormRequest
): Promise<ContactFormResponse> => {
  const response = await fetch(
    `${API_BASE_URL}/public/contact`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    }
  );

  const result: ContactFormResponse =
    await response.json();

  if (!response.ok || !result.success) {
    throw new Error(
      result.message ||
        "Unable to send your message."
    );
  }

  return result;
};
