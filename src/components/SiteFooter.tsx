
import { Link } from "react-router-dom";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-content">

        {/* Company copyright */}
        <p>
          © {currentYear} Turay Digital LTD.
          All rights reserved.
        </p>

        {/* Footer navigation */}
        <nav
          className="site-footer-navigation"
          aria-label="Footer navigation"
        >
          <Link to="/privacy">
            Privacy Policy
          </Link>

          <Link to="/terms">
            Terms of Service
          </Link>

          <Link to="/contact">
            Contact
          </Link>
        </nav>

      </div>
    </footer>
  );
}
