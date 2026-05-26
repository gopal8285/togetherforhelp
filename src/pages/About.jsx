import '../styles/style.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {

  return (

    <div>

      <Navbar />

      <div className="about-page">

        {/* HERO SECTION */}
        <section className="about-hero">

          <h1>About TogetherForHelp</h1>

          <p>
            TogetherForHelp is a community-driven NGO
            helping underprivileged communities through
            food drives, education support,
            emergency relief, and kindness.
          </p>

        </section>

        {/* STORY SECTION */}
        <section className="about-story">

          <div className="about-story-layout">

            {/* LEFT IMAGES */}
            <div className="about-story-left">

              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop"
                alt="Helping children"
              />

              <img
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop"
                alt="Food drive"
              />

            </div>

            {/* RIGHT CONTENT */}
            <div className="about-story-right">

              <span className="about-story-tag">
                Our Journey
              </span>

              <h2>
                Together, We Create Real Change
              </h2>

              <p>
                We started TogetherForHelp with a simple belief —
                every person deserves support, dignity, and hope.
              </p>

              <p>
                From winter blanket drives to food distribution
                and education support for children,
                our volunteers work tirelessly
                to bring smiles into communities.
              </p>

            </div>

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

      </div>

      <Footer />

    </div>

    

  )
}

export default About