import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} className="h-20 mx-2" alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2x1">
        <a href="https://www.linkedin.com/in/kathan-thakkar-861401235/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/kathan07" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/kathan_t07" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
