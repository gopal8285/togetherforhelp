import { useEffect } from "react";

const SITE_NAME = "TogetherForHelp";
const SITE_URL = "https://togetherforhelp.org";

// Sets a unique <title>, meta description, and canonical URL for each
// page. GitHub Pages serves one static index.html for every route (this
// is an SPA), so without this, every page would show the same generic
// title/description in Google search results. This hook updates the
// document head after the page mounts so each route is distinguishable
// to search engines and social share previews.
function useSeo({ title, description, path = "" }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    const canonicalUrl = `${SITE_URL}${path}`;

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (selector.includes("property=")) {
          el.setAttribute("property", selector.match(/property="([^"]+)"/)[1]);
        } else {
          el.setAttribute("name", selector.match(/name="([^"]+)"/)[1]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
      setMeta('meta[name="twitter:description"]', "content", description);
    }

    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);
  }, [title, description, path]);
}

export default useSeo;
