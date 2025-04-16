import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `Michalis Karatsioris ${title}`;
  });

  return null;
};
