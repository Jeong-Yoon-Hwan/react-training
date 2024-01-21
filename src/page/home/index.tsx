import styles from "./index.module.css";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className={styles.root}>
      <ul>
        <li>
          <Link to="/animation">애니메이션</Link>
        </li>
      </ul>
    </div>
  );
};
