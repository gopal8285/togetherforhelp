import { useContext } from "react";
import { DonateModalContext } from "./donateModalContextObject";

export function useDonateModal() {

  const context = useContext(DonateModalContext);

  if (!context) {
    throw new Error("useDonateModal must be used inside a DonateModalProvider");
  }

  return context;

}
