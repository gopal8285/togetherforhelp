import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeFaq
from "../components/HomeFaq";


import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaSeedling,
  FaHandshake,
  FaClipboardList,
  FaBolt,
  FaHeart
} from "react-icons/fa6";

import spreadKindnessImg from "../assets/spread-kindness.jpeg";
import giveUnusedItemsImg from "../assets/give-unused-items.jpeg";
import celebrateBdayImg from "../assets/celebrate-bday.jpeg";
import waysToHelpTeamImg from "../assets/ways-to-help-team.jpeg";
import shareOurWorkImg from "../assets/share-our-work.jpeg";

import initiativeBlindStick from "../assets/initiative-blind-stick.jpeg";
import initiativeDogFeeder from "../assets/initiative-dog-feeder.jpeg";
import initiativeProjectUdhan from "../assets/initiative-project-udhan.jpeg";
import initiativeKitOfHope from "../assets/initiative-kit-of-hope.jpeg";
import initiativeChabeelSewa from "../assets/initiative-chabeel-sewa.jpeg";
import initiativeEducation from "../assets/initiative-education.jpeg";


function Home() {

  const [showInitiatives, setShowInitiatives] = useState(false);

  const goToInitiatives = () => {

    setShowInitiatives(true);

  };

  useEffect(() => {

    if (showInitiatives) {

      const section = document.getElementById("initiatives");

      if (section) {

        section.scrollIntoView({
          behavior: "smooth",
        });

      }

    }

  }, [showInitiatives]);

  return (

    <>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="hero" id="home">

        <motion.div

          className="hero-content"

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

          <h1>
            Together We Can Change Lives
          </h1>

          <p>
            Helping communities through food drives,
            education, health camps and hope.
          </p>

          {/* HERO BUTTONS */}
          <div className="hero-buttons">

            <Link
              to="/volunteer"
              className="btn primary"
            >
              Join Volunteer
            </Link>

            <button
              className="btn secondary"
              onClick={() =>
                document
                  .getElementById('impact')
                  .scrollIntoView({
                    behavior: 'smooth'
                  })
              }
            >
              View Our Work
            </button>

            <Link
              to="/donate"
              className="btn secondary"
            >
              Donate Now
            </Link>

          </div>

        </motion.div>

      </section>

      {/* ABOUT */}
      <section
        className="about-new"
        id="about"
      >

        <div className="about-layout">

          {/* LEFT */}
          <div className="about-left">

            <img
              src={waysToHelpTeamImg}
              alt="TogetherForHelp volunteer team at a community drive"
              loading="lazy"
            />

            <img
              src={initiativeEducation}
              alt="Education support for underprivileged children"
              loading="lazy"
            />

          </div>

          {/* RIGHT */}
          <div className="about-right">

            <span className="about-small">
              About Together4Help
            </span>

            <h2>
              Together, We Create Change
            </h2>

            <p>
              Together4Help is a community-driven initiative
              bringing hope, support, and real change
              to underserved communities.
            </p>

            <p>
              From blanket distribution in winter
              to food drives,
              teaching children every Sunday,
              and standing with families during emergencies —
              we believe kindness creates impact.
            </p>

            <button
              className="btn primary"
              onClick={goToInitiatives}
            >
              Read More
            </button>

          </div>

        </div>

      </section>

      {/* RECENT DRIVES */}
      <section
        id="recent-drives"
        className="recent-drives"
      >

        <h2>
          Our Recent Community Drives
        </h2>

        <div className="drive-grid">

          {/* CARD 1 */}
          <div className="drive-card">

            <img
              src={celebrateBdayImg}
              alt="Celebrating a birthday with community elders"
              loading="lazy"
            />

            <h3>
              Celebrate Your B'day With Them
            </h3>

            <p>
              Sharing joy and creating memories that
              truly matter with our community elders.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="drive-card">

            <img
              src={giveUnusedItemsImg}
              alt="Child receiving a donated toy"
              loading="lazy"
            />

            <h3>
              Give Unused Items
            </h3>

            <p>
              Old books, clothes, toys, and stationery
              create new opportunities for someone else.
            </p>

          </div>

        </div>

      </section>

      {/* IMPACT */}
      <section
        className="impact-stats-section"
        id="impact"
      >

        <motion.span

          className="impact-stats-tag"

          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}

        >
          By The Numbers
        </motion.span>

        <motion.h2

          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}

        >
          Our Impact
        </motion.h2>

        <div className="stats">

          {[
            { end: 250, label: "Lives Supported" },
            { end: 20, label: "Community Drives" },
            { end: 500, label: "Meals Distributed" },
            { end: 20, label: "Active Volunteers" }
          ].map((stat, index) => (

            <motion.div

              className="stat-box"
              key={index}

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}

            >

              <h3>{stat.end}+</h3>

              <p>{stat.label}</p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* OUR INITIATIVES */}
      {showInitiatives && (
      <section className="initiatives-section" id="initiatives">

        <motion.span

          className="initiatives-tag"

          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}

        >
          Ongoing Campaigns
        </motion.span>

        <motion.h2

          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}

        >
          Our Initiatives
        </motion.h2>

        <motion.p

          className="initiatives-subtext"

          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}

        >
          Real campaigns, driven by real people —
          here's what we're working on right now.
        </motion.p>

        <div className="initiatives-grid">

          {[
            {
              img: initiativeBlindStick,
              label: "Distribution of sticks for the blind",
              alt: "Be the reason someone can walk with dignity - distribution of sticks for the blind"
            },
            {
              img: initiativeDogFeeder,
              label: "Community dog feeder & water pot drive",
              alt: "Community dog feeder and water pot installation drive"
            },
            {
              img: initiativeProjectUdhan,
              label: "Project Udhan — pad distribution",
              alt: "Project Udhan - a step towards dignity, sanitary pad distribution drive"
            },
            {
              img: initiativeKitOfHope,
              label: "Kit of Hope — school supplies",
              alt: "Kit of Hope - school supplies kit for children"
            },
            {
              img: initiativeChabeelSewa,
              label: "Chabeel Sewa — free drinks drive",
              alt: "Chabeel Sewa - free drinks distribution drive for the thirsty"
            },
            {
              img: initiativeEducation,
              label: "Education support for children",
              alt: "Education changes everything - teaching underprivileged children"
            }
          ].map((item, index) => (

            <motion.div

              className="initiative-card"
              key={index}

              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}

            >

              <div className="initiative-card-media">

                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                />

              </div>

              <div className="initiative-card-label">
                {item.label}
              </div>

            </motion.div>

          ))}

        </div>

      </section>
      )}

      {/* GALLERY */}
      <section className="fade-in">

        <h2>
          Our Events
        </h2>

        <div className="gallery">

          <div className="gallery-item">
            <img
              src={celebrateBdayImg}
              alt="Celebrating birthdays with community elders"
              loading="lazy"
            />
          </div>

          <div className="gallery-item">
            <img
              src={spreadKindnessImg}
              alt="Spreading kindness at a community event"
              loading="lazy"
            />
          </div>

          <div className="gallery-item">
            <img
              src={giveUnusedItemsImg}
              alt="Clothes and toy donation to a smiling child"
              loading="lazy"
            />
          </div>

        </div>

      </section>

      {/* JOURNEY MAP */}
      <section
        className="journey-map-section"
        id="journey-video"
      >

        <motion.h2

          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}

        >
          Our Journey in Action
        </motion.h2>

        <motion.p

          className="journey-subtext"

          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}

        >
          How a small act of kindness turns into real, lasting impact.
        </motion.p>

        <div className="journey-map">

          {[
            {
              icon: <FaSeedling />,
              title: "Someone Needs Help",
              text: "It usually starts with one message — a cold night on the street, a family that hasn't eaten, a kid who dropped out because there was no money for books."
            },
            {
              icon: <FaHandshake />,
              title: "We Talk to Them",
              text: "Before we do anything, we go meet the person. No assumptions — we ask what they actually need, because that's rarely what we'd guess from the outside."
            },
            {
              icon: <FaClipboardList />,
              title: "The Team Gets Moving",
              text: "A few calls, a WhatsApp group, some volunteers who say yes. Within days we've figured out who's bringing what and when we're showing up."
            },
            {
              icon: <FaBolt />,
              title: "We Show Up",
              text: "This is the part that matters — blankets in hand, meals served hot, a class actually taught. No middlemen, we hand it over ourselves."
            },
            {
              icon: <FaHeart />,
              title: "It Doesn't End There",
              text: "More often than not, the people we've helped come back — not for help, but to help the next family in line. That's the part we're proudest of."
            }
          ].map((step, index) => (

            <motion.div

              className="journey-step"
              key={index}

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}

            >

              <span className="journey-step-mood">
                {step.icon}
              </span>

              <div className="journey-step-card">

                <h3>{step.title}</h3>

                <p>{step.text}</p>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* VOLUNTEER */}
      <section
        className="fade-in volunteer-new"
        id="volunteer"
      >

        <div className="volunteer-layout">

          {/* LEFT */}
          <div className="volunteer-left">

            <span className="volunteer-tag">
              Join Our Volunteer Family
            </span>

            <h2>
              Become A Volunteer
            </h2>

            <p>
              Your effort can bring hope
              to someone who needs it most.
            </p>

            <img
              src={waysToHelpTeamImg}
              alt="TogetherForHelp volunteer team standing together"
              loading="lazy"
            />

          </div>

          {/* FORM */}
          <div className="volunteer-form-box">

            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfDUMMYFORM/viewform?embedded=true"
              width="100%"
              height="850"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Volunteer Form"
            ></iframe>

          </div>

        </div>

      </section>

      {/* SUPPORT SECTION */}
<section
  className="support-section"
  id="donate"
>

  {/* TOP TEXT */}
  <motion.div

    className="support-top"

    initial={{
      opacity:0,
      y:60
    }}

    whileInView={{
      opacity:1,
      y:0
    }}

    transition={{
      duration:1
    }}

    viewport={{
      once:true
    }}

  >

    <span>

      SUPPORT OUR MISSION

    </span>

    <h2>

      One Small Act
      Of Kindness
      Can Change
      A Life.

    </h2>

    <p>

      Your support helps provide meals,
      education,
      blankets,
      emergency relief,
      and hope to families
      who need it most.

    </p>

  </motion.div>

  {/* FAQ STYLE */}
  <div className="support-faq">

    {/* ITEM 1 */}
    <motion.div

      className="support-item"

      initial={{
        opacity:0,
        y:40
      }}

      whileInView={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:0.6
      }}

      viewport={{
        once:true
      }}

    >

      <h3>

        Where Does Your Donation Go?

      </h3>

      <p>

        Your contributions support
        food drives,
        education programs,
        winter blanket distributions,
        and emergency community support.

      </p>

    </motion.div>

    {/* ITEM 2 */}
    <motion.div

      className="support-item"

      initial={{
        opacity:0,
        y:40
      }}

      whileInView={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:0.6,
        delay:0.15
      }}

      viewport={{
        once:true
      }}

    >

      <h3>

        How Can You Support?

      </h3>

      <p>

        You can contribute through donations,
        volunteering,
        spreading awareness,
        or collaborating with our initiatives.

      </p>

    </motion.div>

    {/* ITEM 3 */}
    <motion.div

      className="support-item"

      initial={{
        opacity:0,
        y:40
      }}

      whileInView={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:0.6,
        delay:0.3
      }}

      viewport={{
        once:true
      }}

    >

      <h3>

        Donation Details

      </h3>

      <p>

        UPI ID:
        together4help@upi

        <br /><br />

        Paytm:
        +91 9876543210

      </p>

    </motion.div>

  </div>

</section>

     
     

       
           
          
<HomeFaq />

      {/* SHARE OUR WORK */}
      <section className="share-work fade-in" id="share-work">

        <div className="share-work-layout">

          <img
            src={shareOurWorkImg}
            alt="Follow @_togetherforhelp_ on Instagram"
            className="share-work-img"
            loading="lazy"
          />

          <div className="share-work-content">

            <span className="share-work-tag">
              Follow Our Journey
            </span>

            <h2>
              Share Our Work
            </h2>

            <p>
              Like, comment, save, and share our posts
              with your network. Most importantly,
              don't forget to follow
              <strong> @_togetherforhelp_ </strong>
              on Instagram.
            </p>

            <a
              href="https://instagram.com/_togetherforhelp_"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              Follow on Instagram
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </>

  )
}

export default Home