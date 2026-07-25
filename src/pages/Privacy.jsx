import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Privacy() {

  return (

    <div className="legal-page">

      <Navbar />

      <section className="legal-section">

        <h1>Privacy Policy</h1>

        <span className="legal-updated">
          Last updated: July 2026
        </span>

        <p>
          TogetherForHelp ("we", "us", "our") is a community-driven
          initiative committed to protecting the privacy of everyone
          who visits our website, volunteers with us, or supports our
          work. This Privacy Policy explains what information we
          collect, why we collect it, and how we use and protect it.
        </p>

        <h2>Information We Collect</h2>

        <p>
          We only collect information that you choose to share with
          us, typically when you fill out our Volunteer form, Contact
          form, or reach out to us directly. This may include:
        </p>

        <ul>
          <li>Your name and contact details (phone number, email address)</li>
          <li>Your location or area of interest for volunteering</li>
          <li>Any message or details you share with us voluntarily</li>
          <li>Basic, non-identifying browsing data (such as pages visited) used to improve the website</li>
        </ul>

        <p>
          We do not collect sensitive financial information through
          this website. Donations made via UPI or Paytm happen directly
          through your payment app, and we never see or store your
          banking credentials.
        </p>

        <h2>How We Use Your Information</h2>

        <p>
          Any information you share with us is used only for the
          purpose you shared it for — for example, to get in touch
          about volunteering opportunities, respond to your queries,
          or keep you updated about our community drives. We do not
          sell, rent, or trade your personal information to any
          third party.
        </p>

        <h2>Data Security</h2>

        <p>
          We take reasonable steps to keep the information you share
          with us secure. Access to volunteer and contact
          submissions is limited to core team members who need it to
          coordinate our work.
        </p>

        <h2>Third-Party Links</h2>

        <p>
          Our website may contain links to third-party platforms such
          as Instagram, WhatsApp, or Google Forms. We are not
          responsible for the privacy practices of these external
          platforms, and we encourage you to review their respective
          privacy policies.
        </p>

        <h2>Your Rights</h2>

        <p>
          You can ask us at any time to tell you what information we
          hold about you, or to have it corrected or deleted. Simply
          reach out to us using the details below and we'll act on
          your request as soon as possible.
        </p>

        <h2>Changes to This Policy</h2>

        <p>
          We may update this Privacy Policy from time to time as our
          work grows. Any changes will be posted on this page with an
          updated "Last updated" date.
        </p>

        <h2>Contact Us</h2>

        <p>
          If you have any questions about this Privacy Policy or how
          your information is handled, please reach out to us at{" "}
          <a href="mailto:gopalkumarsingh2004@gmail.com">
            gopalkumarsingh2004@gmail.com
          </a>{" "}
          or through our <a href="/contact">Contact page</a>.
        </p>

      </section>

      <Footer />

    </div>

  )
}

export default Privacy
