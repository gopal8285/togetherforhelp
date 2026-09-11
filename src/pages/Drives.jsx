import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaTriangleExclamation,
  FaInstagram,
  FaSnowflake,
  FaBookOpen,
  FaHeart,
  FaPencil,
  FaGlassWater,
  FaEye,
  FaDog,
  FaTree
} from "react-icons/fa6";
import { useDonateModal } from "../context/useDonateModal";
import useSeo from "../hooks/useSeo";

import initiativeBlindStick from "../assets/initiative-blind-stick.jpeg";
import initiativeDogFeeder from "../assets/initiative-dog-feeder.jpeg";
import initiativeProjectUdhan from "../assets/initiative-project-udhan.jpeg";
import initiativeKitOfHope from "../assets/initiative-kit-of-hope.jpeg";
import initiativeChabeelSewa from "../assets/initiative-chabeel-sewa.jpeg";
import initiativeEducation from "../assets/initiative-education.jpeg";
import initiativeTreePlantation from "../assets/initiative-tree-plantation.jpeg";
import initiativeWinterBlanketDrive from "../assets/initiative-winter-blanket-drive.jpeg";

const drives = [
  {
    img: initiativeWinterBlanketDrive,
    icon: <FaSnowflake />,
    title: "Winter Blanket Distribution",
    text: "Distributing blankets to families and elders sleeping through harsh Delhi winters without proper warmth."
  },
  {
    img: initiativeEducation,
    icon: <FaBookOpen />,
    title: "Education Support For Children",
    text: "Free weekly classes for children who don't have access to formal schooling."
  },
  {
    img: initiativeProjectUdhan,
    icon: <FaHeart />,
    title: "Project Udhan",
    text: "Breaking the silence around menstruation by distributing sanitary pads and building dignity."
  },
  {
    img: initiativeKitOfHope,
    icon: <FaPencil />,
    title: "Kit Of Hope",
    text: "Notebooks, pencils, drawing books and stationery kits handed directly to children in need."
  },
  {
    img: initiativeChabeelSewa,
    icon: <FaGlassWater />,
    title: "Chabeel Sewa",
    text: "Setting up water and refreshment stalls in peak summer for those in need of relief from the heat."
  },
  {
    img: initiativeBlindStick,
    icon: <FaEye />,
    title: "Sticks For The Blind",
    text: "Distributing mobility sticks that give visually impaired individuals more independence and safety."
  },
  {
    img: initiativeDogFeeder,
    icon: <FaDog />,
    title: "Community Animal Care",
    text: "Installing dog feeders and water pots around our neighbourhoods."
  },
  {
    img: initiativeTreePlantation,
    icon: <FaTree />,
    title: "Tree Plantation Drive",
    text: "Planting saplings with volunteers and children for a greener tomorrow."
  }
];

function Drives() {

  useSeo({
    title: "Our Drives & Campaigns",
    description: "Explore TogetherForHelp's ongoing and past drives — from Bihar Flood Relief to blanket, food, and education campaigns. Volunteer or donate to support an active drive.",
    path: "/drives"
  });

  const { openDonateModal } = useDonateModal();
  const [revealedCards, setRevealedCards] = useState({});

  const toggleReveal = (index) => {
    setRevealedCards((current) => ({
      ...current,
      [index]: !current[index]
    }));
  };

  return (

    <div className="about-page">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="about-hero">

        <h1>Our Drives</h1>

        <p>
          Every drive below is real, ongoing, and only possible
          because people like you show up for it.
        </p>

      </section>

      {/* URGENT CAMPAIGN CARD */}
      <section className="drives-section">

        <div className="drives-grid">

          <motion.div
            className="drive-listing-card drive-listing-urgent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <div className="drive-listing-urgent-badge">
              <FaTriangleExclamation /> Urgent
            </div>

            <div className="drive-listing-body">

              <h3>Bihar Flood Relief</h3>

              <p>
                Helping families affected by the floods in Bihar with
                essentials and emergency relief. Follow our Instagram
                for live updates from the ground.
              </p>

              <div className="drive-listing-actions">

                <a
                  href="https://www.instagram.com/_togetherforhelp_"
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  <FaInstagram /> View Updates
                </a>

                <button
                  type="button"
                  onClick={openDonateModal}
                  className="btn secondary"
                >
                  Donate
                </button>

              </div>

            </div>

          </motion.div>

          {/* ALL DRIVES */}
          {drives.map((drive, index) => (

            <motion.div
              className="drive-listing-card"
              key={drive.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: Math.min(index * 0.06, 0.3) }}
              viewport={{ once: true, amount: 0.3 }}
            >

              <button
                type="button"
                className={
                  revealedCards[index]
                    ? "drive-media revealed"
                    : "drive-media"
                }
                data-color={index % 5}
                onClick={() => toggleReveal(index)}
                aria-label={`Show photo for ${drive.title}`}
              >

                <span className="drive-media-color">
                  <span className="drive-media-icon">{drive.icon}</span>
                  <span className="drive-media-topic">{drive.title}</span>
                </span>

                <img
                  src={drive.img}
                  alt={drive.title}
                  loading="lazy"
                  className="drive-media-photo"
                />

              </button>

              <div className="drive-listing-body">

                <h3>{drive.title}</h3>

                <p>{drive.text}</p>

                <div className="drive-listing-actions">

                  <Link to="/volunteer" className="btn primary">
                    Volunteer
                  </Link>

                  <button
                    type="button"
                    onClick={openDonateModal}
                    className="btn secondary"
                  >
                    Donate
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>

  )
}

export default Drives
