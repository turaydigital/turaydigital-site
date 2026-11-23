
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main id="home" className="site-main">

      {/* -----------------------------------------
          Homepage Hero
      ----------------------------------------- */}
      <section className="hero">
        <div className="hero-container">

          {/* Main introduction */}
          <div className="hero-content">

            <span className="hero-eyebrow">
              WELCOME TO TURAY DIGITAL
            </span>

            <h1>
              Technology that moves
              <span> your business forward.</span>
            </h1>

            <p className="hero-description">
              We develop modern digital solutions
              that help businesses simplify operations,
              connect their systems, and build for
              the future.
            </p>

            {/* Primary actions */}
            <div className="hero-actions">

              <Link
                to="/services"
                className="hero-button-primary"
              >
                Explore Our Services
              </Link>

              <Link
                to="/about"
                className="hero-button-secondary"
              >
                Learn About Us
              </Link>

            </div>

            {/* Core capabilities */}
            <div className="hero-highlights">

              <span>Software Development</span>

              <span>Business Solutions</span>

              <span>Digital Integrations</span>

            </div>

          </div>

          {/* Visual feature */}
          <div
            className="hero-visual"
            aria-hidden="true"
          >
            <div className="hero-visual-glow" />

            <div className="hero-visual-card">

              <div className="hero-visual-header">
                <div className="hero-visual-icon">
                  TD
                </div>

                <div>
                  <strong>Turay Digital</strong>
                  <span>Connected Business Solutions</span>
                </div>
              </div>

              <div className="hero-visual-divider" />

              <div className="hero-visual-features">

                <div className="hero-visual-feature">
                  <span className="hero-feature-dot" />
                  Business Management
                </div>

                <div className="hero-visual-feature">
                  <span className="hero-feature-dot" />
                  Commerce Solutions
                </div>

                <div className="hero-visual-feature">
                  <span className="hero-feature-dot" />
                  System Integrations
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
