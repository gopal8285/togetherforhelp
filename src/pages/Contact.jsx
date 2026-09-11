import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { motion } from "framer-motion";
import useSeo from "../hooks/useSeo";

function Contact() {

  useSeo({
    title: "Contact Us",
    description: "Get in touch with TogetherForHelp NGO in Delhi — call, WhatsApp, or email us to volunteer, donate, or ask about our community programs.",
    path: "/contact"
  });

  /* CONTACT LINKS */
  const contacts = [

    {
      title: "Phone",
      value: "+91 9220744575",
      link: "tel:+919220744575"
    },

    {
      title: "WhatsApp",
      value: "Chat With Us",
      link: "https://wa.me/919220744575"
    },

    {
      title: "Email",
      value: "Togetherforhelp01@gmail.com",
      link: "mailto:Togetherforhelp01@gmail.com"
    },

    {
      title: "Instagram",
      value: "@_togetherforhelp_",
      link: "https://www.instagram.com/_togetherforhelp_?igsi=MXNreDF2Y3lvb2RjaA%3D%3D&utm_source=qr"
    },

    {
      title: "LinkedIn",
      value: "TogetherForHelp",
      link: "https://www.linkedin.com/company/togetherforhelp/"
    },

    {
      title: "Facebook",
      value: "TogetherForHelp",
      link: "https://www.facebook.com/share/1DWdRFqPWU/?mibextid=wwXIfr"
    },

    {
      title: "YouTube",
      value: "@Togetherforhelp",
      link: "https://www.youtube.com/@Togetherforhelp"
    },

    {
      title: "Address",
      value: "Delhi, India",
      link: "https://maps.google.com"
    }

  ];

  return (

    <div className="minimal-contact-page">

      {/* NAVBAR */}
      <Navbar />

      {/* CONTACT SECTION */}
      <section className="minimal-contact">

        {/* LEFT */}
        <motion.div

          className="contact-left"

          initial={{
            opacity: 0,
            y: 80
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 1
          }}

        >

          <span className="contact-small">

            CONTACT

          </span>

          <h1>

            Let's Build
            Change Together.

          </h1>

          <p>

            Whether you want to volunteer,
            collaborate,
            donate,
            or simply connect -
            we would love to hear from you.

          </p>

        </motion.div>

        {/* RIGHT */}
        <div className="contact-links">

          {contacts.map((item, index) => (

            <motion.a

              key={index}

              href={item.link}

              target="_blank"

              rel="noreferrer"

              className="contact-link-item"

              initial={{
                opacity: 0,
                x: 60
              }}

              whileInView={{
                opacity: 1,
                x: 0
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.15
              }}

              viewport={{
                once: true
              }}

            >

              <div className="contact-info">

  <span className="contact-title">

    {item.title}

  </span>

  <p>

    {item.value}

  </p>

</div>

<div className="contact-actions">

  <button

    className="copy-btn"

    onClick={(e) => {

      e.preventDefault();

      navigator.clipboard.writeText(
        item.value
      );

      alert("Copied!");
    }}

  >

    Copy

  </button>

  <span className="contact-dot"></span>

</div>

               

            </motion.a>

          ))}

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>

  )
}

export default Contact