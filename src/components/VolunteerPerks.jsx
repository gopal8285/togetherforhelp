import { motion } from "framer-motion";
import {
  FaHandHoldingHeart,
  FaFaceSmileBeam,
  FaHeart,
  FaUserGroup,
  FaSeedling,
  FaStar
} from "react-icons/fa6";

const perks = [
  {
    icon: <FaHandHoldingHeart />,
    title: "Help People In Need",
    text: "Be the reason someone gets a meal, a blanket, or a chance they didn't have yesterday."
  },
  {
    icon: <FaFaceSmileBeam />,
    title: "Spread Smiles & Happiness",
    text: "There's nothing quite like the smile on a kid's face when someone simply shows up."
  },
  {
    icon: <FaHeart />,
    title: "Make A Real Difference",
    text: "Your time isn't just 'volunteering' — it's a real, visible change in someone's day."
  },
  {
    icon: <FaUserGroup />,
    title: "Build New Friendships",
    text: "Meet people who care the way you do — some of our best friendships started on a drive."
  },
  {
    icon: <FaSeedling />,
    title: "Grow Along The Way",
    text: "Every drive teaches you something — patience, empathy, and a little more about the world."
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

      {perks.map((perk, index) => (

        <motion.div

          className="perk-card"
          key={index}

          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          viewport={{ once: true }}

        >

          <span className="perk-icon">
            {perk.icon}
          </span>

          <h3>{perk.title}</h3>

          <p>{perk.text}</p>

        </motion.div>

      ))}

    </div>

  );

}

export default VolunteerPerks;
