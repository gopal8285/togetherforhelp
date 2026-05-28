import { useState } from "react";

import { motion, AnimatePresence }
from "framer-motion";

import { Link }
from "react-router-dom";

function HomeFaq() {

  const [activeIndex,
  setActiveIndex]
  = useState(null);

  /* FAQ DATA */

  const faqs = [

    {
      question:
      "How can I become a volunteer?",

      answer:
      "You can join our volunteer programs through the volunteer page and participate in community drives."
    },

    {
      question:
      "How can I donate?",

      answer:
      "You can donate using our UPI QR code or directly contact our NGO team."
    },

    {
      question:
      "Do students join TogetherForHelp?",

      answer:
      "Yes. Students actively participate in teaching drives and awareness campaigns."
    }

  ];

  return (

    <section className="home-faq">

      {/* TOP */}
      <div className="home-faq-top">

        <span>
          FAQS
        </span>

        <h2>
          Frequently Asked Questions
        </h2>

      </div>

      {/* FAQ LIST */}
      <div className="home-faq-container">

        {faqs.map((faq, index) => (

          <motion.div

            key={index}

            className="home-faq-item"

            initial={{
              opacity:0,
              y:40
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.5,
              delay:index * 0.1
            }}

            viewport={{
              once:true
            }}

          >

            {/* QUESTION */}
            <button

              className="home-faq-question"

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

              <span>

                {
                  activeIndex === index
                  ? "−"
                  : "+"
                }

              </span>

            </button>

            {/* ANSWER */}
            <AnimatePresence>

              {

                activeIndex === index && (

                  <motion.div

                    className="home-faq-answer"

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

                )

              }

            </AnimatePresence>

          </motion.div>

        ))}

      </div>

      {/* BUTTON */}
      <div className="faq-button-wrap">

        <Link
          to="/faq"
          className="faq-page-btn"
        >

          View All FAQs →

        </Link>

      </div>

    </section>

  )
}

export default HomeFaq