import { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="
        flex items-center justify-between
        w-full box-border
        px-[30px] py-[5px]
        backdrop-blur-[45px]
        relative

        max-[768px]:px-[15px]
        max-[480px]:px-[15px] max-[480px]:py-[10px]
        max-[360px]:px-[10px] max-[360px]:py-[8px]
      "
    >
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="
          w-[200px] h-[90px] shrink-0 object-contain

          max-[768px]:w-[120px] max-[768px]:h-[54px]
          max-[480px]:w-[100px] max-[480px]:h-[45px]
          max-[360px]:w-[80px] max-[360px]:h-[36px]
        "
      />

      {/* Navigation Menu */}
      <div
        className={`
          flex items-center
          bg-white/50
          rounded-full
          px-8 py-4
          gap-10
          text-lg
          font-extrabold
          font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]

          max-[768px]:fixed
          max-[768px]:top-[70px]
          max-[768px]:left-0
          max-[768px]:right-0
          max-[768px]:flex-col
          max-[768px]:gap-5
          max-[768px]:p-5
          max-[768px]:w-full
          max-[768px]:bg-[#1a1a1a]
          max-[768px]:rounded-none
          max-[768px]:z-[1000]
          max-[768px]:border-b
          max-[768px]:border-[#333]

          ${isMenuOpen ? "max-[768px]:flex" : "max-[768px]:hidden"}
        `}
      >
        {/* Home */}
        <a
          href="#home"
          onClick={handleMenuClick}
          className="
            no-underline
            text-black
            cursor-pointer
            transition-colors
            duration-300
            hover:text-[#c305f8]

            max-[768px]:w-full
            max-[768px]:py-[10px]
            max-[768px]:text-white
          "
        >
          Home
        </a>

        {/* About */}
        <a
          href="#about"
          onClick={handleMenuClick}
          className="
            no-underline
            text-black
            cursor-pointer
            transition-colors
            duration-300
            hover:text-[#c305f8]

            max-[768px]:w-full
            max-[768px]:py-[10px]
            max-[768px]:text-white
          "
        >
          About Me
        </a>

        {/* Contact */}
        <a
          href="#contact"
          onClick={handleMenuClick}
          className="
            no-underline
            text-black
            cursor-pointer
            transition-colors
            duration-300
            hover:text-[#c305f8]

            max-[768px]:w-full
            max-[768px]:py-[10px]
            max-[768px]:text-white
          "
        >
          Contact
        </a>

        {/* Mobile Connect */}
        <a
          href="#contact"
          onClick={handleMenuClick}
          className="
            hidden
            max-[768px]:block

            w-full
            text-center
            px-5 py-3
            rounded-full

            bg-[linear-gradient(267deg,#da7c25_0.36%,#b923e1_102.06%)]

            text-white
            no-underline
            cursor-pointer
            font-bold

            transition-transform
            duration-500
            hover:scale-105
          "
        >
          Connect With Me
        </a>
      </div>

      {/* Desktop Connect */}
      <a
        href="#contact"
        className="
          block
          px-8 py-4
          rounded-full

          bg-[linear-gradient(267deg,#da7c25_0.36%,#b923e1_102.06%)]

          text-white
          no-underline
          cursor-pointer
          font-bold

          transition-transform
          duration-500
          hover:scale-105

          max-[768px]:hidden
        "
      >
        Connect With Me
      </a>

      {/* Hamburger */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className="
          hidden
          max-[768px]:block

          cursor-pointer
          text-white
          bg-black
          border-none

          text-2xl
          z-[1001]
        "
      >
        {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>
    </nav>
  );
};

export default Navbar;