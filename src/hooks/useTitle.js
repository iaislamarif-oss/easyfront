import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Easy Healthcare`;
  }, [title]);
};

export default useTitle;
