import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JournalGallery from "../components/JournalGallery";
import VolunteerPerks from "../components/VolunteerPerks";
import ParallaxQuotes from "../components/ParallaxQuotes";
import HomeFaq
from "../components/HomeFaq";


import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

import aboutChildCandid from "../assets/about-child-candid.jpeg";
import eventSchoolSupport from "../assets/event-school-support.jpeg";
import eventSupermanKid from "../assets/event-superman-kid.jpeg";


const initiativesData = [
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
];

function Home() {

  const [showInitiatives, setShowInitiatives] = useState(false);
  const [activeInitiative, setActiveInitiative] = useState(0);

  const goToInitiatives = () => {

    setShowInitiatives(true);

  };

  const prevInitiative = () => {

    setActiveInitiative((prev) =>
      prev === 0 ? initiativesData.length - 1 : prev - 1
    );

  };

  const nextInitiative = () => {

    setActiveInitiative((prev) =>
      prev === initiativesData.length - 1 ? 0 : prev + 1
    );

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
            Let's Be A <span className="hero-accent">Saarthi</span> In
            Someone's Life
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
              src={initiativeEducation}
              alt="Volunteer teaching children — education changes everything"
              loading="lazy"
            />

          </div>

          {/* RIGHT — text over image */}
          <div className="about-right">

            <img
              src={aboutChildCandid}
              alt="A child from the community we work with"
              className="about-right-bg"
              loading="lazy"
            />

            <div className="about-right-overlay" />

            <div className="about-right-content">

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

        </div>

      </section>

      {/* PARALLAX QUOTES */}
      <ParallaxQuotes image={initiativeEducation} />

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

        <div className="initiatives-carousel">

          <button
            type="button"
            className="initiatives-arrow initiatives-arrow-left"
            onClick={prevInitiative}
            aria-label="Previous initiative"
          >
            ‹
          </button>

          <div className="initiatives-carousel-track">

            {initiativesData.map((item, index) => {

              let offset = index - activeInitiative;

              if (offset > initiativesData.length / 2) {
                offset -= initiativesData.length;
              }

              if (offset < -initiativesData.length / 2) {
                offset += initiativesData.length;
              }

              const isVisible = Math.abs(offset) <= 2;

              return (

                <motion.div

                  className="initiatives-carousel-card"
                  key={index}

                  initial={false}

                  animate={{
                    x: `${offset * 68}%`,
                    y: offset === 0 ? 0 : Math.abs(offset) * 14,
                    scale: offset === 0 ? 1 : 1 - Math.abs(offset) * 0.16,
                    rotate: offset * -7,
                    opacity: isVisible ? 1 - Math.abs(offset) * 0.3 : 0
                  }}

                  whileHover={
                    offset === 0
                      ? { scale: 1.04, y: -10 }
                      : {}
                  }

                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 24,
                    mass: 0.9
                  }}

                  style={{
                    zIndex: 10 - Math.abs(offset),
                    pointerEvents: offset === 0 ? "auto" : "none"
                  }}

                  onClick={() => setActiveInitiative(index)}

                >

                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                  />

                  {offset === 0 && (

                    <div className="initiatives-carousel-caption">
                      {item.label}
                    </div>

                  )}

                </motion.div>

              );

            })}

          </div>

          <button
            type="button"
            className="initiatives-arrow initiatives-arrow-right"
            onClick={nextInitiative}
            aria-label="Next initiative"
          >
            ›
          </button>

        </div>

        {/* DOTS */}
        <div className="initiatives-dots">

          {initiativesData.map((_, index) => (

            <button
              type="button"
              key={index}
              className={
                "initiatives-dot" +
                (index === activeInitiative ? " active" : "")
              }
              onClick={() => setActiveInitiative(index)}
              aria-label={`Go to initiative ${index + 1}`}
            />

          ))}

        </div>

      </section>
      )}

      {/* OUR EVENTS — JOURNAL STYLE */}
      <section className="journal-section fade-in" id="impact">

        <span className="journal-tag">
          From Our Diary
        </span>

        <h2>
          Our Events
        </h2>

        <p className="journal-subtext">
          A page from every drive — in our own words.
        </p>

        <JournalGallery
          items={[
            {
              img: eventSchoolSupport,
              alt: "School kit donation supporting a child's education",
              caption: "A small support, a big step towards their future."
            },
            {
              img: celebrateBdayImg,
              alt: "Celebrating birthdays with community elders",
              caption: "Celebrated birthdays with our elders — joy has no age."
            },
            {
              img: spreadKindnessImg,
              alt: "Spreading kindness at a community event",
              caption: "Spreading kindness, one small act at a time."
            },
            {
              img: giveUnusedItemsImg,
              alt: "Clothes and toy donation to a smiling child",
              caption: "Old toys, new smiles — nothing goes to waste here."
            },
            {
              img: eventSupermanKid,
              alt: "A joyful moment with a child from our community",
              caption: "Every kid's a superhero when someone believes in them."
            }
          ]}
        />

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

            <div className="volunteer-form-fallback">

              <h3>
                Ready To Join Us?
              </h3>

              <p>
                Our online volunteer form is being set up.
                In the meantime, reach out directly and
                we'll get you started right away.
              </p>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="btn primary"
              >
                Message Us On WhatsApp
              </a>

              <a
                href="mailto:hello@togetherforhelp.org"
                className="volunteer-form-email"
              >
                hello@togetherforhelp.org
              </a>

            </div>

          </div>

        </div>

        {/* WHY VOLUNTEER — PERKS */}
        <div className="perks-wrap">

          <span className="perks-tag">
            Why Volunteer With Us
          </span>

          <h3 className="perks-heading">
            More Than Just Giving Back
          </h3>

          <VolunteerPerks />

        </div>

      </section>

      {/* SUPPORT SECTION */}
<section
  className="support-section"
  id="donate"
>

  <div className="support-section-bg" />
  <div className="support-section-overlay" />

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