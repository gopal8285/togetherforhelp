import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import teamManish from "../assets/team-manish-face.jpeg";
import teamDaksh from "../assets/team-daksh-face.jpeg";
import teamGagan from "../assets/team-gagan-face.jpeg";
import teamKrishna from "../assets/team-krishna-face.jpeg";
import teamNishant from "../assets/team-nishant-face.jpeg";
import teamDhruv from "../assets/team-dhruv-face.jpeg";
import teamPriya from "../assets/team-priya-face.jpeg";
import teamRajni from "../assets/team-rajni-face.jpeg";
import teamNeha from "../assets/team-neha-face.jpeg";
import teamShivam from "../assets/team-shivam-face.jpeg";
import teamUnnati from "../assets/team-unnati-face.jpeg";

import { motion } from "framer-motion";

function Team() {

  /* TEAM MEMBERS DATA */
  const members = [

    {
      name: "Manish Thakur",
      role: "Founder & President",
      image: teamManish
    },

    {
      name: "Daksh Gandotra",
      role: "Co-founder & CTO",
      image: teamDaksh
    },

    {
      name: "Gagan Sharma",
      role: "Trustee",
      image: teamGagan
    },

    {
      name: "Krishna",
      role: "Web Development Manager",
      image: teamKrishna
    },

    {
      name: "Nishant Jain",
      role: "Core Member",
      image: teamNishant
    },

    {
      name: "Dhruv Bharti",
      role: "Core Member",
      image: teamDhruv
    },

    {
      name: "Priya",
      role: "Core Member",
      image: teamPriya
    },

    {
      name: "Rajni",
      role: "Core Member",
      image: teamRajni
    },

    {
      name: "Unnati Jha",
      role: "Coordinator",
      image: teamUnnati
    },

    {
      name: "Neha",
      role: "Advisor",
      image: teamNeha
    },

    {
      name: "Shivam Jha",
      role: "Legal Advisor",
      image: teamShivam
    }

  ];

  return (

    <div className="about-page">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="about-hero">

        <h1>Meet Our Team</h1>

        <p>
          Passionate people working together
          to create meaningful community impact.
        </p>

      </section>

      {/* TEAM SECTION */}
      <section id="team-section">

        <div className="team-top">

          <h2>Our Core Team</h2>

        </div>

        {/* TEAM POLAROID GRID */}
        <div className="team-grid">

          {members.map((member, index) => (

            <motion.div

              className="team-member"

              key={index}

              style={{ "--i": index }}

              initial={{
                opacity: 0,
                y: 50
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.1
              }}

              viewport={{
                once: true
              }}

            >

              {/* POLAROID CARD */}
              <div className="team-img">

                <span className="team-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <img
                  src={member.image}
                  alt={member.name}
                />

              </div>

              {/* INFO */}
              <h3>{member.name}</h3>

              <p>{member.role}</p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>

  )
}

export default Team