import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StickyCtaBar from "../components/StickyCtaBar";

import { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa6";

function Donate() {

  const [copiedField, setCopiedField] = useState(null);

  const copyValue = (label, value) => {

    navigator.clipboard.writeText(value);
    setCopiedField(label);

    setTimeout(() => {
      setCopiedField((current) => (current === label ? null : current));
    }, 1800);

  };

  const paytmRow = { label: "Paytm", value: "+91 9220744575" };

  const bankRows = [
    { label: "Account Name", value: "TOGETHERFORHELP TRUST" },
    { label: "Account No.", value: "309032003941" },
    { label: "IFSC Code", value: "RATN0000190" },
    { label: "Branch", value: "Pitampura" },
    { label: "Bank", value: "RBL Bank" }
  ];

  return (

    <div className="about-page">

      {/* NAVBAR */}
      <Navbar />

      <StickyCtaBar label="Donate Now" href="#donate" />

      {/* HERO */}
      <section className="about-hero">

        <h1>Support Our Mission</h1>

        <p>
          Every contribution helps us provide
          food,
          education,
          care,
          and hope to communities in need.
        </p>

      </section>

      {/* DONATION SECTION */}
      <section id="donate">

        <div className="card donate-card">

          <p className="donate-message">

            Your support helps TogetherForHelp
            continue impactful community drives
            and humanitarian work.

          </p>

          {/* PAYMENT DETAILS */}
          <div className="payment-details">

            <span className="payment-details-tag">
              Paytm
            </span>

            <div className="payment-details-grid">

              <div className="payment-detail-row" key={paytmRow.label}>

                <div>
                  <span className="payment-detail-label">{paytmRow.label}</span>
                  <span className="payment-detail-value">{paytmRow.value}</span>
                </div>

                <button
                  type="button"
                  className="payment-copy-btn"
                  onClick={() => copyValue(paytmRow.label, paytmRow.value)}
                  aria-label={`Copy ${paytmRow.label}`}
                >
                  {copiedField === paytmRow.label ? <FaCheck /> : <FaRegCopy />}
                  {copiedField === paytmRow.label ? "Copied" : "Copy"}
                </button>

              </div>

            </div>

            <span className="payment-details-tag">
              Bank Transfer
            </span>

            <div className="payment-details-grid">

              {bankRows.map((row) => (

                <div className="payment-detail-row" key={row.label}>

                  <div>
                    <span className="payment-detail-label">{row.label}</span>
                    <span className="payment-detail-value">{row.value}</span>
                  </div>

                  <button
                    type="button"
                    className="payment-copy-btn"
                    onClick={() => copyValue(row.label, row.value)}
                    aria-label={`Copy ${row.label}`}
                  >
                    {copiedField === row.label ? <FaCheck /> : <FaRegCopy />}
                    {copiedField === row.label ? "Copied" : "Copy"}
                  </button>

                </div>

              ))}

            </div>

          </div>

          <p className="donate-note">

            Every small contribution creates
            meaningful impact.

          </p>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>

  )
}

export default Donate