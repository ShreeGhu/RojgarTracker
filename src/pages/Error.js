import { Link } from "react-router-dom";
import errorImg from "../assets/images/errorImg.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={errorImg} alt="Page not Found" />
        <h3>Ohh!! Page Not Found</h3>
        <Link to="/all-jobs">Back Home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
