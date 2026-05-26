import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Gallery() {

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
      <section>

        <div className="gallery">

          <div
            className="gallery-item"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542810634-71277d95dcbb')"
            }}
          >
            <div className="overlay">
              Food Distribution Drive
            </div>
          </div>

          <div
            className="gallery-item"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c')"
            }}
          >
            <div className="overlay">
              Education Support
            </div>
          </div>

          <div
            className="gallery-item"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1497486751825-1233686d5d80')"
            }}
          >
            <div className="overlay">
              Community Smiles
            </div>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>

  )
}

export default Gallery