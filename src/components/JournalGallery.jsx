import { motion } from "framer-motion";

/**
 * JournalGallery — a horizontally scrollable stack of "journal pages",
 * each showing a photo with a handwritten-style caption underneath,
 * fanned like an open scrapbook/journal.
 */
function JournalGallery({ items }) {

  return (

    <div className="journal-track">

      {items.map((item, index) => (

        <motion.div

          className="journal-page"
          key={index}

          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: (index % 8) * 0.07 }}
          viewport={{ once: true }}

        >

          <div className="journal-photo">

            <img
              src={item.img}
              alt={item.alt}
              loading="lazy"
            />

          </div>

          <p className="journal-caption">
            {item.caption}
          </p>

        </motion.div>

      ))}

    </div>

  );

}

export default JournalGallery;
