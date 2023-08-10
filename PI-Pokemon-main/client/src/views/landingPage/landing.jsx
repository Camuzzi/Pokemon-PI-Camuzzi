import "./landing.styles.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div >
      <h1>Landing</h1>
      <Link to="/home">
        <p>HOME</p>
      </Link>
    </div>
  );
}

export default Landing;