import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { AnimationPage } from "./page/animation";
import { HomePage } from "./page/home";
import { Header } from "./components/header";

function App() {
  return (
    <div className={styles.root}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/animation" element={<AnimationPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
