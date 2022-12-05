import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <h1>NIELIT O-LEVEL QUESTIONS & ANSWERS</h1>
      <Link to="/questions" className="browse">
        Browse Previous Year Questions
      </Link>
      <div className="footer">Designed & Developed by Themyo Khudai</div>
    </div>
  );
}

export default Home;
