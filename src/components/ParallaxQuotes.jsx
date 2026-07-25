import { motion } from "framer-motion";

/*
  Fixed-background "quote" section.
  Note: this project doesn't have Tailwind or AOS installed, so this
  component uses the site's existing stack instead — plain CSS
  (src/styles/style.css, class names below) + framer-motion, which is
  already a dependency used everywhere else on the site. Everything
  still does exactly what was asked: fixed parallax image, white
  overlay, scroll-triggered fade/slide-in text, fully responsive.
*/

const quotes = [
  "Education changes everything.",
  "Helping today, building a better tomorrow.",
  "Every child deserves a chance to learn.",
  "Your support gives hope, opportunity & a brighter future."
];

function ParallaxQuotes({ image }) {

  return (

    <section
      className="parallax-quotes"
      style={{ backgroundImage: `url(${image})` }}
    >

      <div className="parallax-quotes-overlay" />

      <div className="parallax-quotes-content">

        {quotes.map((quote, index) => (

          <motion.p

            className="parallax-quote-line"
            key={index}

            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}

          >
            {quote}
          </motion.p>

        ))}

      </div>

    </section>

  );

}

export default ParallaxQuotes;
