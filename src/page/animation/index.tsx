import { useRef, useState } from "react";
import styles from "./index.module.css";

export const AnimationPage = () => {
  const [toggle, setToggle] = useState(false);

  const toggleVisibility = () => {
    setToggle(!toggle);
    console.log(!toggle);
  };

  const [scaleToggle, setScaleToggle] = useState(false);
  const handleScaleToggle = () => {
    setScaleToggle(!scaleToggle);
  };

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
      <div>
        <button onClick={toggleVisibility}>토글</button>
        {toggle ? (
          <div key="true" className={`${styles["true"]} ${styles["fade-in"]}`}></div>
        ) : (
          <div key="false" className={`${styles["false"]} ${styles["fade-in"]}`}></div>
        )}
      </div>
      <div>
        <div className={scaleToggle ? styles.scale : styles.scaleup} onClick={handleScaleToggle}></div>
      </div>

      <div className={styles.sizeupAnimation}>
        <div
          ref={container}
          onClick={moveContainer}
          style={{ width: "100px", height: "100px", backgroundColor: "red" }}
        ></div>
      </div>
    </div>
  );
};
