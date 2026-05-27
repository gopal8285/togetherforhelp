import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

import { motion }
from "framer-motion";

function Sitemap() {

  const pages = [

    {
      title:"Home",
      path:"/"
    },

    {
      title:"About",
      path:"/about"
    },

    {
      title:"Volunteer",
      path:"/volunteer"
    },

    {
      title:"Gallery",
      path:"/gallery"
    },

    {
      title:"Team",
      path:"/team"
    },

    {
      title:"Donate",
      path:"/donate"
    },

    {
      title:"Contact",
      path:"/contact"
    },

    {
      title:"FAQs",
      path:"/faq"
    },

    {
      title:"Terms of Use",
      path:"/terms"
    },

    {
      title:"Privacy Policy",
      path:"/privacy"
    },

    {
      title:"Copyright Policy",
      path:"/copyright"
    }

  ];

  return (

    <div className="sitemap-page">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="sitemap-hero">

        <motion.h1

          initial={{
            opacity:0,
            y:60
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:1
          }}

        >

          Sitemap

        </motion.h1>

        <motion.p

          initial={{
            opacity:0,
            y:60
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:1,
            delay:0.2
          }}

        >

          Explore all pages available
          on TogetherForHelp.

        </motion.p>

      </section>

      {/* LINKS */}
      <section className="sitemap-section">

        <div className="sitemap-links">

          {pages.map((page, index) => (

            <motion.div

              key={index}

              initial={{
                opacity:0,
                x:40
              }}

              whileInView={{
                opacity:1,
                x:0
              }}

              transition={{
                duration:0.5,
                delay:index * 0.08
              }}

              viewport={{
                once:true
              }}

            >

              <Link

                to={page.path}

                className="sitemap-link"

              >

                <span>

                  {page.title}

                </span>

                <span>

                  →

                </span>

              </Link>

            </motion.div>

          ))}

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>

  )
}

export default Sitemap