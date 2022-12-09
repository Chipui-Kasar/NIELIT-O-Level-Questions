import "./Home.css";
import { Link } from "react-router-dom";
import bg from './images/background.jpg'
function Home() {
  return (
    <div className="Home" style={{ backgroundImage: `url(${bg})` }}>
      <h1 className="header" >NIELIT 'O' LEVEL REVISED SYLLABUS (2020) QUESTIONS & ANSWERS</h1>
      <Link to="/questions" className="browse">
        Browse Previous Year Questions
      </Link>

    </div>
  );
}

export default Home;
