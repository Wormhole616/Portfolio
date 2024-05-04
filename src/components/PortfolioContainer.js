// Imports
import React from "react";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

import Portfolio from "./Pages/Portfolio/Portfolio";

// Function that renders selected page state & exports
export default function PortfolioContainer({ currentPage, setCurrentPage }) {
  if (currentPage === "About") {
    return <About />;
  }
  if (currentPage === "Contact") {
    return <Contact />;
  }
  return <Portfolio />;
}
// Export