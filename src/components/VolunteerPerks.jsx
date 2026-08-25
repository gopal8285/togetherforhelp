import { motion } from "framer-motion";
import {
  FaHandHoldingHeart,
  FaFaceSmileBeam,
  FaHeart,
  FaUserGroup,
  FaSeedling,
  FaStar
} from "react-icons/fa6";

import initiativeAnimalFeeding from "../assets/initiative-animal-feeding.jpeg";
import eventBlessingElder from "../assets/event-blessing-elder.jpeg";
import eventFamilyFoodDistribution from "../assets/event-family-food-distribution.jpeg";

const perks = [
  {
    icon: <FaHandHoldingHeart />,
    title: "Help People In Need",
    text: "Be the reason someone gets a meal, a blanket, or a chance they didn't have yesterday.",
    photo: eventFamilyFoodDistribution
  },
  {
    icon: <FaFaceSmileBeam />,
    title: "Spread Smiles & Happiness",
    text: "There's nothing quite like the smile on a kid's face when someone simply shows up."
  },
  {
    icon: <FaHeart />,
    title: "Make A Real Difference",
    text: "Your time isn't just 'volunteering' — it's a real, visible change in someone's day.",
    photo: eventBlessingElder
  },
  {
    icon: <FaUserGroup />,
    title: "Build New Friendships",
    text: "Meet people who care the way you do — some of our best friendships started on a drive."
  },
  {
    icon: <FaSeedling />,
    title: "Grow Along The Way",
    text: "Every drive teaches you something — patience, empathy, and a little more about the world.",
    photo: initiativeAnimalFeeding
  },
  {
    icon: <FaStar />,
    title: "Feel Proud Of Your Time",
    text: "Go home knowing your evening actually meant something to someone else."
  }
];

/**
 * VolunteerPerks — grid of reasons/benefits to join as a volunteer.
 */
function VolunteerPerks() {

  return (

    <div className="perks-grid">

      {perks.map((perk, index) => {

        const col = index % 3;
        const row = Math.floor(index / 3);

        return (

          <motion.div

            className="perk-card"
            key={index}
            data-index={String(index + 1).padStart(2, "0")}

            initial={{
              opacity: 0,
              y: 40,
              x: col === 0 ? -40 : col === 2 ? 40 : 0
            }}

            whileInView={{ opacity: 1, y: 0, x: 0 }}

            transition={{
              duration: 0.6,
              delay: row * 0.25 + col * 0.15,
              ease: "easeOut"
            }}

            viewport={{ once: true, amount: 0.3 }}

          >

            {perk.photo && index === 0 && (

              <>
                <img
                  className="perk-card-bg-photo"
                  src={perk.photo}
                  alt=""
                  loading="lazy"
                />
                <div className="perk-card-bg-overlay" />
              </>

            )}

            {perk.photo && index !== 0 && (

              <img
                className="perk-photo-thumb"
                src={perk.photo}
                alt=""
                loading="lazy"
              />

            )}

            <span className="perk-icon">
              {perk.icon}
            </span>

            <h3>{perk.title}</h3>

            <p>{perk.text}</p>

          </motion.div>

        );

      })}

    </div>

  );

}

export default VolunteerPerks;
