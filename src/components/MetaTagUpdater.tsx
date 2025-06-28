import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MetaTagUpdater() {
  const location = useLocation();

  useEffect(() => {
    const currentUrl = window.location.origin + location.pathname;
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', currentUrl);
    document.querySelector('meta[name="twitter:url"]')?.setAttribute('content', currentUrl);
  }, [location.pathname]);

  return null; // This component doesn't render anything
}

export default MetaTagUpdater;