
import {
  useState,
  type SubmitEvent
} from "react";

import {
  submitContactForm
} from "../services/contact";

export default function ContactPage() {
  // --------------------------------------------------
  // Contact form fields
  // --------------------------------------------------

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // --------------------------------------------------
  // Submission state
  // --------------------------------------------------

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [successMessage, setSuccessMessage] =
    useState("");

  const [errorMessage, setErrorMessage] =
    useState("");

  // --------------------------------------------------
  // Submit contact form
  // --------------------------------------------------

  const handleSubmit = async (
    event: SubmitEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // Prevent duplicate submissions.
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const result = await submitContactForm({
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim()
      });

      // Display the API success message.
      setSuccessMessage(result.message);

      // Clear the form after successful submission.
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message."
      );

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="site-main">
      <section className="contact-section">
        <div className="contact-intro">
          <h1>Contact Turay Digital</h1>

          <p>
            Have a question about our services,
            applications, or business solutions?
          </p>

          <p>
            Send us a message using the form below.
          </p>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="contact-form-group">
            <label htmlFor="contact-name">
              Full Name
            </label>

            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              maxLength={150}
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="contact-email">
              Email Address
            </label>

            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              maxLength={254}
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="contact-subject">
              Subject
            </label>

            <input
              id="contact-subject"
              type="text"
              value={subject}
              onChange={(event) =>
                setSubject(event.target.value)
              }
              maxLength={200}
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="contact-message">
              Message
            </label>

            <textarea
              id="contact-message"
              rows={6}
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              maxLength={5000}
              required
            />
          </div>

          {/* Success notification */}
          {successMessage && (
            <p
              className="contact-success-message"
              role="status"
            >
              {successMessage}
            </p>
          )}

          {/* Error notification */}
          {errorMessage && (
            <p
              className="contact-error-message"
              role="alert"
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            className="contact-submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Sending Message..."
              : "Send Message"}
          </button>
        </form>
      </section>
    </main>
  );
}
