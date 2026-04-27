import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    const siteTitle = "Easy Healthcare Diagnostic & Consultation Center Online Platform";
    if (title === "Home" || !title) {
      document.title = siteTitle;
    } else {
      document.title = `${title} - ${siteTitle}`;
    }
  }, [title]);
};

export default useTitle;

