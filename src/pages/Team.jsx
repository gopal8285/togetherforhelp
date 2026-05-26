import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { motion } from "framer-motion";

function Team() {

  /* TEAM MEMBERS DATA */
  const members = [

    {
      name: "Aarav Sharma",
      role: "Founder",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name: "Priya Verma",
      role: "Co-Founder",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name: "Rohan Mehta",
      role: "Volunteer Lead",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name: "Ananya Singh",
      role: "Education Lead",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name: "Kabir Khan",
      role: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop"
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

          <p>
            Behind every successful initiative
            is a dedicated team driven by compassion,
            leadership, and community spirit.
          </p>

        </div>

        {/* TEAM GRID */}
        <div className="team-grid">

          {members.map((member, index) => (

            <motion.div

              className="team-member"

              key={index}

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
                delay: index * 0.15
              }}

              viewport={{
                once: true
              }}

            >

              {/* IMAGE */}
              <div className="team-img">

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