import { useState } from "react";
import { DonateModalContext } from "./donateModalContextObject";

/*
 * Shared "open the QR donate popup" state, so the floating Donate
 * button and the navbar's Donate link (which live in different
 * component trees) can both trigger the same modal instead of
 * navigating away to the full Donate page.
 */
export function DonateModalProvider({ children }) {

  const [isOpen, setIsOpen] = useState(false);

  const openDonateModal = () => setIsOpen(true);
  const closeDonateModal = () => setIsOpen(false);

  return (
    <DonateModalContext.Provider
      value={{ isOpen, openDonateModal, closeDonateModal }}
    >
      {children}
    </DonateModalContext.Provider>
  );

}
