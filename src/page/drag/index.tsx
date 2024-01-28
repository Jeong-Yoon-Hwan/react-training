import styles from "./index.module.css";
import { useRef, useState } from "react";

export const DragPage = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const [containerToggle, setContainerToggle] = useState<boolean>(false);

  const moveContainer = () => {
    console.log("ok");

    if (container.current && containerToggle) {
      container.current.style.scale = "1.5";
      container.current.style.transition = "1s";
      setContainerToggle(!containerToggle);
    } else if (container.current && !containerToggle) {
      container.current.style.scale = "1";
      container.current.style.transition = "1s";
      setContainerToggle(!containerToggle);
    }
  };

  return (
    <div className={styles.root}>
      <div
        ref={container}
        onClick={moveContainer}
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      ></div>
    </div>
  );
};
