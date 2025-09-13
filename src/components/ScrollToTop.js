// For route change scrolling
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Export a reusable function for footer clicks
export function scrollToTopPage() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}