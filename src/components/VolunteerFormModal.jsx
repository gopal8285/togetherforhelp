import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import { useVolunteerModal } from "../context/useVolunteerModal";

const initialForm = {
  name: "",
  phone: "",
  city: "",
  message: ""
};

function VolunteerFormModal() {

  const { isOpen, closeVolunteerModal } = useVolunteerModal();
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const text =
      `Hi! I'd like to volunteer with TogetherForHelp.%0A%0A` +
      `Name: ${form.name}%0A` +
      `Phone: ${form.phone}%0A` +
      `City: ${form.city}%0A` +
      `Message: ${form.message}`;

    window.open(
      `https://wa.me/919220744575?text=${text}`,
      "_blank",
      "noreferrer"
    );

    closeVolunteerModal();
    setForm(initialForm);

  };

  return (

    <AnimatePresence>

      {isOpen && (

        <div
          className="bday-modal-overlay"
          onClick={closeVolunteerModal}
        >

          <motion.div

            className="bday-modal"
            onClick={(e) => e.stopPropagation()}

            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3 }}

          >

            <button
              type="button"
              className="bday-modal-close"
              onClick={closeVolunteerModal}
              aria-label="Close form"
            >
              <FaXmark />
            </button>

            <span className="bday-modal-tag">
              Join Our Volunteer Family
            </span>

            <h3>
              Become A Volunteer
            </h3>

            <p className="bday-modal-subtext">
              Share a few details and we'll reach out on WhatsApp to
              get you started.
            </p>

            <form
              className="bday-modal-form"
              onSubmit={handleSubmit}
            >

              <label htmlFor="volunteer-name">Your Name</label>
              <input
                id="volunteer-name"
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Riya Sharma"
              />

              <label htmlFor="volunteer-phone">Phone Number</label>
              <input
                id="volunteer-phone"
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="e.g. 98765 43210"
              />

              <label htmlFor="volunteer-city">City</label>
              <input
                id="volunteer-city"
                type="text"
                name="city"
                required
                value={form.city}
                onChange={handleChange}
                placeholder="e.g. Delhi"
              />

              <label htmlFor="volunteer-message">
                How Would You Like To Help? (Optional)
              </label>
              <textarea
                id="volunteer-message"
                name="message"
                rows="3"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us anything you'd like us to know"
              />

              <button
                type="submit"
                className="btn primary bday-modal-submit"
              >
                Send On WhatsApp
              </button>

            </form>

          </motion.div>

        </div>

      )}

    </AnimatePresence>

  );

}

export default VolunteerFormModal;
