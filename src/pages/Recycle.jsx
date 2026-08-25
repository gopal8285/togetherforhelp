import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { motion } from "framer-motion";
import {
  FaShirt,
  FaBook,
  FaBed,
  FaGift,
  FaPencil,
  FaPuzzlePiece
} from "react-icons/fa6";

function Recycle() {

  return (

    <div className="about-page">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="about-hero">

        <h1>Give It A Second Life</h1>

        <p>
          Old clothes, books, blankets, toys, pens, or gifts —
          your unused items can still mean the world to someone else.
        </p>

      </section>

      {/* RECYCLE / DOORSTEP PICKUP — COMING SOON */}
      <section className="recycle-feature fade-in" id="recycle">

        <span className="recycle-coming-soon">
          Coming Soon
        </span>

        <span className="recycle-tag">
          Give It A Second Life
        </span>

        <h2>
          Got Old Clothes, Books Or Toys? We'll Pick Them Up.
        </h2>

        <p className="recycle-subtext">
          Clothes, books, blankets, toys, pens, gifts — anything
          lying unused at home can still mean the world to someone
          else. Soon, you'll be able to just reach out and we'll
          come pick it up from your doorstep and get it straight
          to a family that needs it.
        </p>

        <div className="recycle-items-grid">

          {[
            { icon: <FaShirt />, label: "Clothes" },
            { icon: <FaBook />, label: "Books" },
            { icon: <FaBed />, label: "Blankets" },
            { icon: <FaPuzzlePiece />, label: "Toys" },
            { icon: <FaPencil />, label: "Pens & Stationery" },
            { icon: <FaGift />, label: "Gifts" }
          ].map((item, index) => (

            <motion.div

              className="recycle-item-card"
              key={index}

              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}

            >

              <span className="recycle-item-icon">
                {item.icon}
              </span>

              <p>{item.label}</p>

            </motion.div>

          ))}

        </div>

        <button
          type="button"
          className="btn primary recycle-notify-btn"
          disabled
        >
          Doorstep Pickup — Coming Soon
        </button>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>

  )
}

export default Recycle
