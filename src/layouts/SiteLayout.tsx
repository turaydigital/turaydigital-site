
import { Outlet } from "react-router-dom";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function SiteLayout() {
  return (
    <div className="site-container">
      {/* Shared website header */}
      <SiteHeader />

      {/* Page-specific content */}
      <Outlet />

      {/* Shared website footer */}
      <SiteFooter />
    </div>
  );
}
