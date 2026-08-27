import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

/**
 * JournalGallery — a 3D coverflow-style carousel. The active card sits
 * flat and centered, the rest recede into depth on either side (scaled
 * down, rotated, faded), and clicking a side card or the arrows brings
 * it to the front.
 */
function JournalGallery({ items }) {

  const [activeIndex, setActiveIndex] = useState(0);

  const prevCard = () => {

    setActiveIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );

  };

  const nextCard = () => {

    setActiveIndex((prev) =>
      prev === items.length - 1 ? 0 : prev + 1
    );

  };

  return (

    <div className="journal-gallery-wrap">

      <button
        type="button"
        className="journal-arrow journal-arrow-left"
        onClick={prevCard}
        aria-label="Previous"
      >
        <FaChevronLeft />
      </button>

      <motion.div

        className="journal-track"

        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}

        onDragEnd={(e, info) => {

          if (info.offset.x < -60) {
            nextCard();
          } else if (info.offset.x > 60) {
            prevCard();
          }

        }}

      >

        {items.map((item, index) => {

          let offset = index - activeIndex;

          if (offset > items.length / 2) {
            offset -= items.length;
          }

          if (offset < -items.length / 2) {
            offset += items.length;
          }

          const isVisible = Math.abs(offset) <= 2;

          return (

            <motion.div

              className="journal-page"
              key={index}

              initial={false}

              animate={{
                x: `${offset * 62}%`,
                scale: offset === 0 ? 1 : 1 - Math.abs(offset) * 0.14,
                rotateY: offset * -22,
                opacity: isVisible ? 1 - Math.abs(offset) * 0.3 : 0
              }}

              transition={{
                type: "spring",
                stiffness: 260,
                damping: 26,
                mass: 0.9
              }}

              style={{
                zIndex: 10 - Math.abs(offset),
                pointerEvents: isVisible ? "auto" : "none"
              }}

              onClick={() => setActiveIndex(index)}

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

          );

        })}

      </motion.div>

      <button
        type="button"
        className="journal-arrow journal-arrow-right"
        onClick={nextCard}
        aria-label="Next"
      >
        <FaChevronRight />
      </button>

    </div>

  );

}

export default JournalGallery;
