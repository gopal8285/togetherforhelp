import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { motion } from "framer-motion";

import celebrateBdayImg from "../assets/celebrate-bday.jpeg";
import spreadKindnessImg from "../assets/spread-kindness.jpeg";
import giveUnusedItemsImg from "../assets/give-unused-items.jpeg";
import volunteerYourTimeImg from "../assets/volunteer-your-time.jpeg";
import waysToHelpTeamImg from "../assets/ways-to-help-team.jpeg";
import awardRecognitionImg from "../assets/award-recognition.jpeg";
import initiativeBlindStick from "../assets/initiative-blind-stick.jpeg";
import initiativeDogFeeder from "../assets/initiative-dog-feeder.jpeg";
import initiativeProjectUdhan from "../assets/initiative-project-udhan.jpeg";
import initiativeKitOfHope from "../assets/initiative-kit-of-hope.jpeg";
import initiativeChabeelSewa from "../assets/initiative-chabeel-sewa.jpeg";
import initiativeEducation from "../assets/initiative-education.jpeg";

function Gallery() {

  const items = [

    {
      img: celebrateBdayImg,
      label: "Celebrating birthdays with our elders",
      alt: "Celebrating birthdays with community elders"
    },
    {
      img: giveUnusedItemsImg,
      label: "Give unused items drive",
      alt: "Give unused items drive - child with donated toy"
    },
    {
      img: spreadKindnessImg,
      label: "Spread kindness campaign",
      alt: "Spread kindness campaign at a community event"
    },
    {
      img: volunteerYourTimeImg,
      label: "Volunteers on the ground",
      alt: "Volunteer spending time supporting a community member"
    },
    {
      img: initiativeBlindStick,
      label: "Sticks distribution for the blind",
      alt: "Distribution of sticks for the blind"
    },
    {
      img: initiativeDogFeeder,
      label: "Community dog feeder & water pot drive",
      alt: "Community dog feeder and water pot installation drive"
    },
    {
      img: waysToHelpTeamImg,
      label: "Our team, serving together",
      alt: "TogetherForHelp team serving together"
    },
    {
      img: initiativeProjectUdhan,
      label: "Project Udhan — pad distribution",
      alt: "Project Udhan sanitary pad distribution drive"
    },
    {
      img: initiativeKitOfHope,
      label: "Kit of Hope — school supplies",
      alt: "Kit of Hope school supplies kit for children"
    },
    {
      img: initiativeChabeelSewa,
      label: "Chabeel Sewa — free drinks drive",
      alt: "Chabeel Sewa free drinks distribution drive"
    },
    {
      img: initiativeEducation,
      label: "Education support for children",
      alt: "Teaching underprivileged children"
    },
    {
      img: awardRecognitionImg,
      label: "Honored by Hansraj College WDC",
      alt: "TogetherForHelp honored by Women's Development Cell, Hansraj College"
    }

  ];

  return (

    <div className="about-page">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="about-hero">

        <h1>Our Gallery</h1>

        <p>
          Moments of kindness,
          support,
          and community impact.
        </p>

      </section>

      {/* GALLERY SECTION */}
      <section className="gallery-masonry-section">

        <div className="gallery-masonry">

          {items.map((item, index) => (

            <motion.div

              className="gallery-masonry-item"
              key={index}

              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 6) * 0.08 }}
              viewport={{ once: true }}

            >

              <img
                src={item.img}
                alt={item.alt}
                loading="lazy"
              />

              <div className="gallery-masonry-caption">
                {item.label}
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

export default Gallery
