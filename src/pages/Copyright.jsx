import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Copyright() {

  return (

    <div className="legal-page">

      <Navbar />

      <section className="legal-section">

        <h1>Copyright Policy</h1>

        <span className="legal-updated">
          Last updated: July 2026
        </span>

        <p>
          This Copyright Policy explains how the content on the
          TogetherForHelp website — including text, photographs,
          videos, our logo, and design elements — may and may not be
          used.
        </p>

        <h2>Ownership</h2>

        <p>
          Unless otherwise noted, all content on this website,
          including our name, logo, campaign photographs, and written
          material, is the property of TogetherForHelp. Photographs
          featuring the communities, volunteers, and events we work
          with are used with consent, to honestly represent the
          impact of our work.
        </p>

        <h2>What You Can Do</h2>

        <ul>
          <li>Share our posts, photos, and stories on social media to spread awareness about our work</li>
          <li>Quote or reference our content for educational, journalistic, or non-commercial purposes, with credit to TogetherForHelp</li>
          <li>Link to our website and social media pages freely</li>
        </ul>

        <h2>What You Cannot Do</h2>

        <ul>
          <li>Use our name, logo, or photographs to imply endorsement of a product, service, or cause without our written permission</li>
          <li>Reproduce or sell our content for commercial gain</li>
          <li>Edit or alter our photographs or logo in a way that misrepresents our work or the people in them</li>
          <li>Use images of the individuals or communities we work with outside the context of TogetherForHelp's mission</li>
        </ul>

        <h2>Third-Party Content</h2>

        <p>
          Where we use icons, fonts, or media from third-party
          sources, those remain the property of their respective
          owners and are used under their applicable licenses.
        </p>

        <h2>Reporting a Concern</h2>

        <p>
          If you believe any content on this website infringes your
          copyright, or if you are featured in one of our photographs
          and would like it removed, please contact us at{" "}
          <a href="mailto:gopalkumarsingh2004@gmail.com">
            gopalkumarsingh2004@gmail.com
          </a>{" "}
          with details, and we will review and respond promptly.
        </p>

        <h2>Changes to This Policy</h2>

        <p>
          We may update this Copyright Policy from time to time. Any
          changes will be posted on this page with an updated "Last
          updated" date.
        </p>

      </section>

      <Footer />

    </div>

  )
}

export default Copyright
