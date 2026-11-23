
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import PrivacyPage from "../pages/PrivacyPage";
import TermsPage from "../pages/TermsPage";

import SiteLayout from "../layouts/SiteLayout";

function PlaceholderPage({
  title,
}: {
  title: string;
}) {
  return (
    <main className="site-main">
      <section className="hero">
        <h1>{title}</h1>
        <p>More information coming soon.</p>
      </section>
    </main>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
            <Route index element={<HomePage />} />

            <Route
                path="services"
                element={<ServicesPage />}
                />

            <Route
                path="about"
                element={<AboutPage />}
            />

            <Route
                path="contact"
                element={<ContactPage />}
            />

            {/* Privacy Policy */}
            <Route
              path="privacy"
              element={<PrivacyPage />}
            />

            <Route
              path="terms"
              element={<TermsPage />}
            />

            <Route
                path="*"
                element={<PlaceholderPage title="Page Not Found" />}
            />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
