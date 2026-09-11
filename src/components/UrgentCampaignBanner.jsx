import { useState } from "react";
import { FaTriangleExclamation, FaXmark, FaInstagram } from "react-icons/fa6";

/**
 * UrgentCampaignBanner — a thin, dismissible alert strip for a
 * time-sensitive relief campaign (e.g. flood relief). Sits under the
 * navbar on the Home page only, links out to Instagram for updates.
 * To retire a campaign, just change the text/link props below, or
 * stop rendering this component on Home.jsx once the drive is over.
 */
function UrgentCampaignBanner() {

  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  return (

    <div className="urgent-campaign-banner">

      <a
        href="https://www.instagram.com/_togetherforhelp_"
        target="_blank"
        rel="noreferrer"
        className="urgent-campaign-link"
      >

        <FaTriangleExclamation className="urgent-campaign-icon" />

        <span>
          <strong>Bihar Flood Relief.</strong> Helping families affected
          by the floods. See our Instagram for updates.
        </span>

        <span className="urgent-campaign-cta">
          <FaInstagram /> View Updates
        </span>

      </a>

      <button
        type="button"
        className="urgent-campaign-close"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
      >
        <FaXmark />
      </button>

    </div>

  );

}

export default UrgentCampaignBanner;
