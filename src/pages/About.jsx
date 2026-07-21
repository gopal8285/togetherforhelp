import '../styles/style.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import awardRecognitionImg from "../assets/award-recognition.jpeg";

import { motion } from "framer-motion";

function About() {

  const activities = [

    {
      title: "Winter Blanket Drives",
      text: "Distributing blankets to families and elders sleeping through harsh Delhi winters without proper warmth."
    },
    {
      title: "Food Distribution",
      text: "Serving warm, home-style meals to families and individuals facing hardship, on the streets and in slum communities."
    },
    {
      title: "Sunday Learning Circles",
      text: "Free weekly classes for children who don't have access to formal schooling — because every child deserves a chance to learn."
    },
    {
      title: "Kit of Hope",
      text: "Notebooks, pencils, drawing books and stationery kits handed directly to children, so a lack of supplies never has to stop them."
    },
    {
      title: "Project Udhan",
      text: "Breaking the silence around menstruation by distributing sanitary pads and building dignity, one conversation at a time."
    },
    {
      title: "Chabeel Sewa",
      text: "Setting up water and refreshment stalls in peak summer, because quenching someone's thirst is one of the simplest acts of seva."
    },
    {
      title: "Sticks for the Blind",
      text: "Distributing mobility sticks that give visually impaired individuals a little more independence and safety on the streets."
    },
    {
      title: "Community Animal Care",
      text: "Installing dog feeders and water pots around our neighbourhoods, because kindness doesn't stop at humans."
    },
    {
      title: "Celebrating With Our Elders",
      text: "Marking birthdays and small occasions with the elderly we support — because everyone deserves to be celebrated."
    }

  ];

  return (

    <div>

      <Navbar />

      <div className="about-page">

        {/* HERO SECTION */}
        <section className="about-hero">

          <h1>About TogetherForHelp</h1>

          <p>
            A community-driven initiative helping
            underprivileged communities through
            food drives, education support,
            emergency relief, and kindness.
          </p>

        </section>

        {/* OUR STORY */}
        <section className="about-story">

          <motion.div

            className="story-text-block"

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}

          >

            <span className="about-story-tag">
              Our Story
            </span>

            <h2>
              We Didn't Start With A Plan.
              We Started With A Person.
            </h2>

            <p>
              TogetherForHelp began the way most real things do — not
              with a business plan or a big launch, but with a group
              of friends who couldn't walk past someone in need
              without stopping. A blanket handed to a man sleeping on
              a cold pavement. A plate of food shared after a long
              day. No banner, no camera, just an instinct to help.
            </p>

            <p>
              We kept going back. What started as a few of us
              pooling in our own pocket money for small acts of
              kindness slowly became something we couldn't imagine
              our lives without. One drive turned into a monthly
              habit, then a weekly one. Friends brought more friends.
              Strangers started asking how they could join in. That's
              when we realised this wasn't a phase — it was the
              beginning of something we wanted to build properly.
            </p>

            <p>
              Today, TogetherForHelp is a registered trust under the
              Indian Trusts Act, 1882, run by a small, hands-on team
              instead of a distant office. Every person on our team
              still shows up to the drives themselves — packing food,
              distributing blankets, sitting on the floor teaching
              children on Sunday mornings. We believe that's the only
              way to stay honest about the work we do.
            </p>

            <blockquote className="about-quote">
              "Every Person Deserves A Saarthi."
              <span>
                — the belief that's guided every drive we've run
              </span>
            </blockquote>

            <p>
              Our thinking has never been complicated: if you can
              help, help. Not someday, not once we have more
              resources — now, with whatever we have. That belief has
              taken us from a single blanket drive to a dozen ongoing
              initiatives — feeding families, teaching children,
              supporting the elderly, standing with women through
              Project Udhan, helping the visually impaired move more
              freely, and even making sure the strays in our
              neighbourhood don't go hungry or thirsty. None of it
              was planned in advance. Each initiative was born from
              simply noticing a need and refusing to look away.
            </p>

            <p>
              We're still a small team. We're still learning as we
              grow. But every drive, every rupee donated, and every
              volunteer who shows up tells us the same thing — that
              when people come together with the simple intention of
              helping, real change follows. That's what
              "Let's be together to serve together" means to us, and
              it's the only plan we've ever really needed.
            </p>

          </motion.div>

        </section>

        {/* WHAT WE DO */}
        <section className="about-story activities-section">

          <div className="activities-header">

            <span className="about-story-tag">
              What We Do
            </span>

            <h2>
              Small Acts, Repeated Often
            </h2>

          </div>

          <div className="activities-grid">

            {activities.map((activity, index) => (

              <motion.div

                className="activity-card"
                key={index}

                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
                viewport={{ once: true }}

              >

                <span className="activity-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{activity.title}</h3>

                <p>{activity.text}</p>

              </motion.div>

            ))}

          </div>

        </section>

        {/* MISSION CARDS */}
        <section className="about-story">

          <div className="mission-grid">

            <div className="mission-card">

              <h3>Our Mission</h3>

              <p>
                To support underserved communities
                through compassion and action.
              </p>

            </div>

            <div className="mission-card">

              <h3>Our Vision</h3>

              <p>
                A world where kindness and humanity
                uplift every life.
              </p>

            </div>

            <div className="mission-card">

              <h3>Community First</h3>

              <p>
                We believe change starts
                when communities stand together.
              </p>

            </div>

          </div>

        </section>

        {/* RECOGNITION */}
        <section className="about-story">

          <div className="recognition-layout">

            <img
              src={awardRecognitionImg}
              alt="TogetherForHelp honored by Women's Development Cell, Hansraj College"
              className="recognition-img"
              loading="lazy"
            />

            <div className="recognition-content">

              <span className="about-story-tag">
                Recognition
              </span>

              <h2>
                Our Work, Acknowledged
              </h2>

              <p>
                The Women's Development Cell, Hansraj College
                honored TogetherForHelp for its valuable
                partnership, active contribution, and dedicated
                efforts towards creating a positive impact
                in society.
              </p>

            </div>

          </div>

        </section>

      </div>

      <Footer />

    </div>

  )
}

export default About
