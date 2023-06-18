import { Logo } from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/*infomation*/}
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p className="info-paragraph">
            The job tracking application aims to address the challenge of
            efficiently managing and tracking job applications throughout the
            hiring process. It provides a centralized platform for users to
            customize their job preferences, track application progress, and
            receive notifications for interviews and deadlines.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="imageoffront" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
