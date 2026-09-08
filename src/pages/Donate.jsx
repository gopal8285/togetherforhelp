import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StickyCtaBar from "../components/StickyCtaBar";

function Donate() {

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

          {/* QR CODE */}
          <div className="qr-box">

            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=together4help@upi"
              alt="Donation QR"
            />

          </div>

          {/* PAYMENT INFO */}
          <h3>
            UPI ID: together4help@upi
          </h3>

          <p className="paytm-info">
            📱 Paytm: +91 9876543210
          </p>

          {/* BANK TRANSFER DETAILS */}
          <div className="bank-details">

            <h4>Bank Transfer Details</h4>

            <div className="bank-details-grid">

              <div className="bank-detail-row">
                <span className="bank-detail-label">Account Name</span>
                <span className="bank-detail-value">TOGETHERFORHELP TRUST</span>
              </div>

              <div className="bank-detail-row">
                <span className="bank-detail-label">Account No.</span>
                <span className="bank-detail-value">309032003941</span>
              </div>

              <div className="bank-detail-row">
                <span className="bank-detail-label">IFSC Code</span>
                <span className="bank-detail-value">RATN0000190</span>
              </div>

              <div className="bank-detail-row">
                <span className="bank-detail-label">Branch</span>
                <span className="bank-detail-value">Pitampura</span>
              </div>

              <div className="bank-detail-row">
                <span className="bank-detail-label">Bank</span>
                <span className="bank-detail-value">RBL Bank</span>
              </div>

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