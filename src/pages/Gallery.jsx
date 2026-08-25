import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JournalGallery from "../components/JournalGallery";

import celebrateBdayImg from "../assets/celebrate-bday.jpeg";
import spreadKindnessImg from "../assets/spread-kindness.jpeg";
import giveUnusedItemsImg from "../assets/give-unused-items.jpeg";
import volunteerYourTimeImg from "../assets/volunteer-your-time.jpeg";
import awardRecognitionImg from "../assets/award-recognition.jpeg";
import initiativeBlindStick from "../assets/initiative-blind-stick.jpeg";
import initiativeDogFeeder from "../assets/initiative-dog-feeder.jpeg";
import initiativeProjectUdhan from "../assets/initiative-project-udhan.jpeg";
import initiativeKitOfHope from "../assets/initiative-kit-of-hope.jpeg";
import initiativeChabeelSewa from "../assets/initiative-chabeel-sewa.jpeg";
import initiativeEducation from "../assets/initiative-education.jpeg";
import shareOurWorkImg from "../assets/share-our-work.jpeg";
import aboutChildCandid from "../assets/about-child-candid.jpeg";
import eventSchoolSupport from "../assets/event-school-support.jpeg";
import eventSupermanKid from "../assets/event-superman-kid.jpeg";
import initiativeTreePlantation from "../assets/initiative-tree-plantation.jpeg";
import eventStreetKidsVisit from "../assets/event-street-kids-visit.jpeg";
import initiativeAnimalFeeding from "../assets/initiative-animal-feeding.jpeg";
import eventBlessingElder from "../assets/event-blessing-elder.jpeg";
import initiativeWinterBlanketDrive from "../assets/initiative-winter-blanket-drive.jpeg";
import eventFamilyFoodDistribution from "../assets/event-family-food-distribution.jpeg";
import eventMealDistributionBranded from "../assets/event-meal-distribution-branded.jpeg";
import eventTeachingSupport from "../assets/event-teaching-support.jpeg";

function MarqueeItem({ img, alt, label }) {

  return (

    <div className="gallery-marquee-item">

      <img
        src={img}
        alt={alt}
        loading="lazy"
      />

      <div className="gallery-marquee-caption">
        {label}
      </div>

    </div>

  );

}

function Gallery() {

  const items = [

    {
      img: celebrateBdayImg,
      label: "Celebrating birthdays with our elders",
      alt: "Celebrating birthdays with community elders"
    },
    {
      img: giveUnusedItemsImg,
      label: "Give unused items drive",
      alt: "Give unused items drive - child with donated toy"
    },
    {
      img: spreadKindnessImg,
      label: "Spread kindness campaign",
      alt: "Spread kindness campaign at a community event"
    },
    {
      img: volunteerYourTimeImg,
      label: "Volunteers on the ground",
      alt: "Volunteer spending time supporting a community member"
    },
    {
      img: initiativeBlindStick,
      label: "Sticks distribution for the blind",
      alt: "Distribution of sticks for the blind"
    },
    {
      img: initiativeDogFeeder,
      label: "Community dog feeder & water pot drive",
      alt: "Community dog feeder and water pot installation drive"
    },
    {
      img: eventSchoolSupport,
      label: "A small support, a big step towards their future",
      alt: "School kit donation supporting a child's education"
    },
    {
      img: initiativeProjectUdhan,
      label: "Project Udhan — pad distribution",
      alt: "Project Udhan sanitary pad distribution drive"
    },
    {
      img: initiativeKitOfHope,
      label: "Kit of Hope — school supplies",
      alt: "Kit of Hope school supplies kit for children"
    },
    {
      img: initiativeChabeelSewa,
      label: "Chabeel Sewa — free drinks drive",
      alt: "Chabeel Sewa free drinks distribution drive"
    },
    {
      img: initiativeEducation,
      label: "Education support for children",
      alt: "Teaching underprivileged children"
    },
    {
      img: aboutChildCandid,
      label: "A child from the community we work with",
      alt: "A child from the community we work with"
    },
    {
      img: eventSupermanKid,
      label: "A joyful moment with a child from our community",
      alt: "A joyful moment with a child from our community"
    },
    {
      img: shareOurWorkImg,
      label: "Follow our journey on Instagram",
      alt: "Share our work - follow _togetherforhelp_ on Instagram"
    },
    {
      img: awardRecognitionImg,
      label: "Honored by Hansraj College WDC",
      alt: "TogetherForHelp honored by Women's Development Cell, Hansraj College"
    },
    {
      img: initiativeTreePlantation,
      label: "Planting saplings for a greener tomorrow",
      alt: "Volunteers and children planting a tree sapling together"
    },
    {
      img: eventStreetKidsVisit,
      label: "Spending an afternoon with the kids on the street",
      alt: "Volunteer spending time with children living on the street"
    },
    {
      img: initiativeAnimalFeeding,
      label: "Feeding the strays and calves in our neighbourhood",
      alt: "Volunteer feeding calves with fresh greens"
    },
    {
      img: eventBlessingElder,
      label: "A quiet moment of gratitude",
      alt: "An elder folding her hands in gratitude during a drive"
    },
    {
      img: initiativeWinterBlanketDrive,
      label: "Winter blanket drive — warmth for the cold nights",
      alt: "Winter blanket distribution drive for people sleeping on the streets"
    },
    {
      img: eventFamilyFoodDistribution,
      label: "Delivering food and essentials straight to families",
      alt: "Volunteers distributing food and essentials to a family"
    },
    {
      img: eventMealDistributionBranded,
      label: "A warm meal, served with care",
      alt: "A child receiving a hot meal packed by TogetherForHelp"
    },
    {
      img: eventTeachingSupport,
      label: "One-on-one learning support for our students",
      alt: "Volunteer helping a child with her writing practice"
    }

  ];

  const rowOne = items.filter((_, i) => i % 2 === 0);
  const rowTwo = items.filter((_, i) => i % 2 === 1);

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

      {/* JOURNAL STYLE GALLERY */}
      <section className="journal-section">

        <span className="journal-tag">
          From Our Diary
        </span>

        <h2>
          Every Page Tells A Story
        </h2>

        <p className="journal-subtext">
          Flip through the drives, one photo and one note at a time.
        </p>

        <JournalGallery
          items={items.map((item) => ({
            img: item.img,
            alt: item.alt,
            caption: item.label
          }))}
        />

      </section>

      {/* AUTO-SCROLLING MARQUEE GALLERY — kept as-is */}
      <section className="gallery-marquee-section">

        <span className="gallery-marquee-tag">
          Our Work
        </span>

        <h2>
          Moments Worth Sharing
        </h2>

        <p className="gallery-marquee-subtext">
          The drives, the campaigns, and the people behind them.
        </p>

        <div className="gallery-marquee-row">

          <div className="gallery-marquee-track gallery-marquee-track-left">

            {[...rowOne, ...rowOne].map((item, index) => (

              <MarqueeItem
                key={index}
                img={item.img}
                alt={item.alt}
                label={item.label}
              />

            ))}

          </div>

        </div>

        <div className="gallery-marquee-row">

          <div className="gallery-marquee-track gallery-marquee-track-right">

            {[...rowTwo, ...rowTwo].map((item, index) => (

              <MarqueeItem
                key={index}
                img={item.img}
                alt={item.alt}
                label={item.label}
              />

            ))}

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>

  )
}

export default Gallery
