import UserContext from "./utils/UserContext";
import { useContext } from "react";
// Footer component for footer section

const Footer = () => {
  const { user } = useContext(UserContext);
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>{user.email}</p>
      Created By
      <i className="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/chetannada/" target="_blank">
        Anurag Rawat
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Food<span>Fire</span>
      </strong>
    </div>
  );
};

export default Footer;
