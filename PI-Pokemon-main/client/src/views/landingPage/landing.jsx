import "./landing.styles.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-background"></div>

      <h1 className="landing-title">Welcome to the Pokemon APP!!</h1>
      <Link to="/home" className="landing-button">
        Go to Home
      </Link>
    </div>
  );
}

export default Landing;