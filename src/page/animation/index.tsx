import { useState } from "react";
import styles from "./index.module.css";

export const AnimationPage = () => {
  const [toggle, setToggle] = useState(false);

  const toggleVisibility = () => {
    setToggle(!toggle);
    console.log(!toggle);
  };
  return (
    <div className={styles.root}>
      <button onClick={toggleVisibility}>토글</button>
      {toggle ? (
        <div key="true" className={`${styles["true"]} ${styles["fade-in"]}`}></div>
      ) : (
        <div key="false" className={`${styles["false"]} ${styles["fade-in"]}`}></div>
      )}
    </div>
  );
};
