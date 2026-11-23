
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* Company introduction */}
      <section className="about-hero">
        <div className="about-container">
          <span className="about-eyebrow">
            ABOUT TURAY DIGITAL
          </span>

          <h1>
            Building technology for a
            <span> more connected future.</span>
          </h1>

          <p>
            Turay Digital LTD is a technology company
            developing digital solutions that help
            businesses simplify operations, connect
            services, and work more efficiently.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="about-section">
        <div className="about-container about-intro">
          <div>
            <span className="about-eyebrow">
              WHO WE ARE
            </span>

            <h2>
              Technology designed around
              real business needs.
            </h2>
          </div>

          <div className="about-copy">
            <p>
              At Turay Digital, we believe technology
              should make everyday work easier,
              not more complicated.
            </p>

            <p>
              We are building a growing collection
              of digital applications and services
              that support business management,
              digital commerce, integrations,
              and connected workflows.
            </p>

            <p>
              Our approach focuses on creating
              practical, reliable, and scalable
              solutions that can evolve alongside
              the businesses using them.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="about-values">
        <div className="about-container">
          <div className="about-values-heading">
            <span className="about-eyebrow">
              OUR DIRECTION
            </span>

            <h2>
              Driven by purpose.
              Built for the future.
            </h2>
          </div>

          <div className="about-values-grid">
            <article className="about-value-card">
              <div className="about-value-icon">
                01
              </div>

              <h3>Our Mission</h3>

              <p>
                To develop accessible and practical
                digital solutions that simplify
                business operations, improve
                productivity, and help organisations
                work more effectively.
              </p>
            </article>

            <article className="about-value-card">
              <div className="about-value-icon">
                02
              </div>

              <h3>Our Vision</h3>

              <p>
                To create a connected digital
                environment where businesses can
                manage their services, operations,
                and technology with greater
                confidence and flexibility.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Turay Digital Hub */}
      <section className="about-hub">
        <div className="about-container about-hub-inner">
          <div>
            <span className="about-eyebrow">
              TURAY DIGITAL HUB
            </span>

            <h2>
              Your business.
              <br />
              Everything connected.
            </h2>

            <p>
              Turay Digital Hub brings together
              business tools, workspace management,
              and connected digital services in
              one convenient place.
            </p>
          </div>

          <a
            href="https://app.turaydigital.com"
            className="about-hub-button"
          >
            Explore Turay Digital Hub
          </a>
        </div>
      </section>

    </main>
  );
}
