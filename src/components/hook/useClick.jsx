import { useEffect, useRef } from "react";

const useClick = () => {
  const commonOneRef = useRef(null);
  const commonTwoRef = useRef(null);

  const handelClick = () => {
    const commonStyle = commonOneRef.current.style;
    if (commonStyle.display === "block") {
      commonStyle.display = "none";
    } else {
      commonStyle.display = "block";
    }
  };
  //   Out Side Click Code Start
  const handelClickOutSite = (event) => {
    if (
      (commonOneRef.current.style.display =
        "block" &&
        !commonTwoRef.current.contains(event.target) &&
        !commonOneRef.current.contains(event.target)) 
    ) {
      commonOneRef.current.style.display = "none";
    }
  };
  //   Out Side Click Code End

  useEffect(() => {
    window.addEventListener("click", (event) => {
      handelClickOutSite(event);
    });
    return () => {
      window.removeEventListener("click"),
        (event) => {
          handelClickOutSite(event);
        };
    };
  }, []);

  return {
    handelClick,
    commonOneRef,
    commonTwoRef,
  };
};

export default useClick;
