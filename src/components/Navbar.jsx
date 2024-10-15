import logo from "../assets/ss_logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex items-center">
        <img className="mx-1 w-30" src={logo} alt="logo" />
      </div>

      {/* Social Media Icons (Visible on all screen sizes) */}
      <div className="flex items-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/subhangi-sati-9856a6221/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="cursor-pointer" />
        </a>
        <a href="https://github.com/SubhangiSati" target="_blank" rel="noopener noreferrer">
          <FaGithub className="cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
