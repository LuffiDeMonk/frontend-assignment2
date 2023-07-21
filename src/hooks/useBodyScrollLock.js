import { useEffect } from "react";

const useBodyScrollLock = () => {
  const [toggle, setToggle] = useState(false);
  const bodyStyles = document.body.style;

  useEffect(() => {
    if (toggle === true) {
      bodyStyles.overflowY = "hidden";
    }
  }, []);
};
