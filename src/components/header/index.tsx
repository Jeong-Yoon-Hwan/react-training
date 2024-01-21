import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

export const Header = () => {
  const navigate = useNavigate();
  const handleMoveHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.root} onClick={handleMoveHome}>
      <h1>React Projects</h1>
    </div>
  );
};
