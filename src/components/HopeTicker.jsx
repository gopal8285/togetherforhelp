/**
 * HopeTicker — a bold, continuously auto-scrolling marquee line,
 * sitting between the hero and the rest of the page.
 */
function HopeTicker() {

  const phrases = [
    "SPREADING HOPE, ONE ACT AT A TIME",
    "EVERY DRIVE CHANGES A LIFE",
    "TOGETHER, WE CREATE CHANGE",
    "LET'S BE A SAARTHI IN SOMEONE'S LIFE",
    "SMALL ACTS. REAL IMPACT."
  ];

  const track = [...phrases, ...phrases];

  return (

    <div className="hope-ticker">

      <div className="hope-ticker-track">

        {[...track, ...track].map((phrase, index) => (

          <span className="hope-ticker-item" key={index}>
            {phrase}
            <span className="hope-ticker-dot">•</span>
          </span>

        ))}

      </div>

    </div>

  );

}

export default HopeTicker;
