import { useState } from "react";
import { VolunteerModalContext } from "./volunteerModalContextObject";

/*
 * Shared "open the volunteer sign-up popup" state, mirroring
 * DonateModalContext — lets any "Volunteer" button anywhere on the
 * site (hero, Drives page cards, the Volunteer page's own CTA) open
 * the same in-site form instead of navigating to an external Google
 * Form.
 */
export function VolunteerModalProvider({ children }) {

  const [isOpen, setIsOpen] = useState(false);

  const openVolunteerModal = () => setIsOpen(true);
  const closeVolunteerModal = () => setIsOpen(false);

  return (
    <VolunteerModalContext.Provider
      value={{ isOpen, openVolunteerModal, closeVolunteerModal }}
    >
      {children}
    </VolunteerModalContext.Provider>
  );

}
