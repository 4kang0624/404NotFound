import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useBeforeLeave = onBefore => {
  const navigate = useNavigate();
  const handle = useCallback(
    event => {
      const { clientY } = event;
      if (clientY <= 0) {
        if (onBefore()) {
          navigate(-1);
        }
      }
    },
    [onBefore, navigate]
  );

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, [handle]);

  if (typeof onBefore !== "function") {
    return;
  }
};

export default useBeforeLeave;
