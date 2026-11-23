
import { NavLink } from "react-router-dom";

import turayDigitalLogo from "../assets/turay-digital-logo.png";

export default function SiteHeader() {
  const hubUrl = "https://app.turaydigital.com";

  // Temporary local logo.
  // Later this can be replaced with a database/API logo URL.
  const logoUrl = turayDigitalLogo;

  return (
    <header className="site-header">

      {/* Company branding */}
      <NavLink
        to="/"
        className="site-logo"
        aria-label="Turay Digital - Home"
      >
        <img
          src={logoUrl}
          alt="Turay Digital"
          className="site-logo-image"
        />
      </NavLink>

      {/* Main navigation */}
      <nav
        className="site-navigation"
        aria-label="Main navigation"
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>

        {/* Turay Digital Hub */}
        <a
          href={hubUrl}
          className="site-hub-button"
          aria-label="Open Turay Digital Hub"
        >
          Hub
        </a>
      </nav>

    </header>
  );
}
