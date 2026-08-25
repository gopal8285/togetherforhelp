import { motion } from "framer-motion";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

/**
 * JournalGallery — a horizontally scrollable stack of "journal pages",
 * each showing a photo with a handwritten-style caption underneath,
 * fanned like an open scrapbook/journal.
 */
function JournalGallery({ items }) {

  const trackRef = useRef(null);

  /* Desktop mouse wheels only scroll vertically by default, so without
     this a laptop user has no way to move this horizontal track back
     and forth (trackpad swipe works, a plain mouse wheel doesn't). This
     converts vertical wheel movement into horizontal scroll whenever
     the cursor is over the track. */
  const handleWheel = (e) => {

    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) {
      return;
    }

    const track = trackRef.current;

    if (!track) {
      return;
    }

    const maxScroll = track.scrollWidth - track.clientWidth;

    if (maxScroll <= 0) {
      return;
    }

    e.preventDefault();
    track.scrollLeft += e.deltaY;

  };

  const scrollByCard = (direction) => {

    const track = trackRef.current;

    if (!track) {
      return;
    }

    const card = track.querySelector(".journal-page");
    const step = card ? card.getBoundingClientRect().width + 10 : 260;

    track.scrollBy({
      left: direction * step,
      behavior: "smooth"
    });

  };

  return (

    <div className="journal-gallery-wrap">

      <button
        type="button"
        className="journal-arrow journal-arrow-left"
        onClick={() => scrollByCard(-1)}
        aria-label="Scroll left"
      >
        <FaChevronLeft />
      </button>

      <div
        className="journal-track"
        ref={trackRef}
        onWheel={handleWheel}
      >

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

      <button
        type="button"
        className="journal-arrow journal-arrow-right"
        onClick={() => scrollByCard(1)}
        aria-label="Scroll right"
      >
        <FaChevronRight />
      </button>

    </div>

  );

}

export default JournalGallery;
