import { useContext } from "react";
import { VolunteerModalContext } from "./volunteerModalContextObject";

export function useVolunteerModal() {

  const context = useContext(VolunteerModalContext);

  if (!context) {
    throw new Error("useVolunteerModal must be used inside a VolunteerModalProvider");
  }

  return context;

}
