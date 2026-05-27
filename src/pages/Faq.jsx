import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useState } from "react";

import { motion, AnimatePresence }
from "framer-motion";

function Faq() {

  /* ACTIVE FAQ */
  const [activeIndex, setActiveIndex]
  = useState(null);

  /* FAQ DATA */
  const faqs = [

    {
      question:
      "What is TogetherForHelp?",

      answer:
      "TogetherForHelp is a community-driven NGO focused on education, food drives, emergency support, and humanitarian initiatives."
    },

    {
      question:
      "How can I become a volunteer?",

      answer:
      "You can join us through the Volunteer page and participate in community drives and outreach programs."
    },

    {
      question:
      "How can I donate?",

      answer:
      "You can donate using our UPI QR code, bank transfer, or directly contact our team."
    },

    {
      question:
      "Do you organize food drives?",

      answer:
      "Yes. We regularly conduct food distribution drives in underserved communities."
    },

    {
      question:
      "Can students join TogetherForHelp?",

      answer:
      "Absolutely. Students can volunteer, help organize drives, and support awareness campaigns."
    },

    {
      question:
      "Where is TogetherForHelp located?",

      answer:
      "Our operations are currently based in Delhi, India."
    }

  ];

  return (

    <div className="faq-page">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="faq-hero">

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

          Frequently Asked Questions

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

          Everything you may want to know
          about TogetherForHelp.

        </motion.p>

      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">

        <div className="faq-container">

          {faqs.map((faq, index) => (

            <motion.div

              key={index}

              className="faq-item"

              initial={{
                opacity:0,
                y:50
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.6,
                delay:index * 0.1
              }}

              viewport={{
                once:true
              }}

            >

              {/* QUESTION */}
              <button

                className="faq-question"

                onClick={() =>
                  setActiveIndex(
                    activeIndex === index
                    ? null
                    : index
                  )
                }

              >

                <span>

                  {faq.question}

                </span>

                <span className="faq-icon">

                  {
                    activeIndex === index
                    ? "−"
                    : "+"
                  }

                </span>

              </button>

              {/* ANSWER */}
              <AnimatePresence>

                {activeIndex === index && (

                  <motion.div

                    className="faq-answer"

                    initial={{
                      height:0,
                      opacity:0
                    }}

                    animate={{
                      height:"auto",
                      opacity:1
                    }}

                    exit={{
                      height:0,
                      opacity:0
                    }}

                    transition={{
                      duration:0.4
                    }}

                  >

                    <p>

                      {faq.answer}

                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>

  )
}

export default Faq