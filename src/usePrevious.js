import React, { useEffect } from "react";

export const usePrevious = (value) => {
  const ref = React.useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
