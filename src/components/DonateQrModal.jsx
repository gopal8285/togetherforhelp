import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark, FaRegCopy, FaCheck } from "react-icons/fa6";
import { useDonateModal } from "../context/useDonateModal";
import { UPI_ID, DONATE_QR_IMAGE } from "../utils/donateInfo";

function DonateQrModal() {

  const { isOpen, closeDonateModal } = useDonateModal();
  const [copied, setCopied] = useState(false);

  const copyUpiId = () => {

    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);

    setTimeout(() => setCopied(false), 1800);

  };

  return (

    <AnimatePresence>

      {isOpen && (

        <div
          className="bday-modal-overlay"
          onClick={closeDonateModal}
        >

          <motion.div

            className="bday-modal donate-qr-modal"
            onClick={(e) => e.stopPropagation()}

            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3 }}

          >

            <button
              type="button"
              className="bday-modal-close"
              onClick={closeDonateModal}
              aria-label="Close"
            >
              <FaXmark />
            </button>

            <span className="bday-modal-tag">
              Scan &amp; Pay
            </span>

            <h3>
              Support Our Mission
            </h3>

            <p className="bday-modal-subtext">
              Scan this QR with any UPI app (GPay, PhonePe, Paytm) to
              donate directly.
            </p>

            <div className="donate-qr-box">
              <img
                src={DONATE_QR_IMAGE}
                alt="Scan to donate via UPI"
                width={280}
                height={280}
              />
            </div>

            <div className="donate-qr-upi-row">

              <div>
                <span className="donate-qr-upi-label">UPI ID</span>
                <span className="donate-qr-upi-value">{UPI_ID}</span>
              </div>

              <button
                type="button"
                className="payment-copy-btn"
                onClick={copyUpiId}
                aria-label="Copy UPI ID"
              >
                {copied ? <FaCheck /> : <FaRegCopy />}
                {copied ? "Copied" : "Copy"}
              </button>

            </div>

            <Link
              to="/donate"
              className="donate-qr-more-link"
              onClick={closeDonateModal}
            >
              See bank transfer &amp; other ways to donate
            </Link>

          </motion.div>

        </div>

      )}

    </AnimatePresence>

  );

}

export default DonateQrModal;
