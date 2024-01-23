import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { AnimationPage } from "./page/animation";
import { HomePage } from "./page/home";
import { Header } from "./components/header";
import ChartPage from "./page/chart";

function App() {
  return (
    <div className={styles.root}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/animation" element={<AnimationPage />} />
          <Route path="/chart" element={<ChartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
