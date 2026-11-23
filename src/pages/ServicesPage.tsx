
import { Link } from "react-router-dom";

import "./ServicesPage.css";

const services = [
  {
    number: "01",
    title: "Software Development",
    description:
      "We design and develop modern applications and digital platforms tailored to business needs.",
    features: [
      "Web Applications",
      "Mobile Applications",
      "Custom Software Solutions",
    ],
  },
  {
    number: "02",
    title: "Business Management Solutions",
    description:
      "We build connected tools that help businesses organise operations, manage resources, and simplify everyday workflows.",
    features: [
      "Business Operations",
      "Workspace Management",
      "Workforce & Resource Tools",
    ],
  },
  {
    number: "03",
    title: "E-commerce Solutions",
    description:
      "We develop digital commerce solutions that help businesses manage online stores, products, and connected sales channels.",
    features: [
      "Online Store Integrations",
      "Product Management",
      "Commerce Workflows",
    ],
  },
  {
    number: "04",
    title: "System Integrations",
    description:
      "We connect digital platforms and services to help businesses reduce manual processes and improve how information flows.",
    features: [
      "API Integrations",
      "Connected Services",
      "Workflow Automation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="site-main services-page">

      {/* Services introduction */}
      <section className="services-intro">
        <div className="services-container">

          <span className="services-eyebrow">
            WHAT WE DO
          </span>

          <h1>
            Digital solutions built
            <span> for modern businesses.</span>
          </h1>

          <p>
            At Turay Digital LTD, we develop software,
            connected business solutions, and digital
            services designed to help organisations
            work more efficiently and grow with
            technology.
          </p>

          <Link
            to="/contact"
            className="services-primary-button"
          >
            Discuss Your Project
          </Link>

        </div>
      </section>

      {/* Service categories */}
      <section
        className="services-section"
        aria-labelledby="services-heading"
      >
        <div className="services-container">

          <div className="services-section-heading">
            <span className="services-eyebrow">
              OUR EXPERTISE
            </span>

            <h2 id="services-heading">
              What we can help you build
            </h2>

            <p>
              From custom applications to connected
              commerce and business systems, our
              solutions are designed around practical
              business needs.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article
                className="service-card"
                key={service.number}
              >
                <span className="service-number">
                  {service.number}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="service-card-link"
                >
                  Enquire about this service
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Hub introduction */}
      <section className="services-hub">
        <div className="services-container">
          <div className="services-hub-content">

            <div>
              <span className="services-eyebrow">
                TURAY DIGITAL HUB
              </span>

              <h2>
                Your business.
                <br />
                Everything connected.
              </h2>

              <p>
                Explore Turay Digital Hub, our
                evolving platform for accessing
                business tools, managing workspaces,
                and connecting digital services.
              </p>
            </div>

            <a
              href="https://app.turaydigital.com"
              className="services-hub-button"
            >
              Explore Turay Digital Hub
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}
