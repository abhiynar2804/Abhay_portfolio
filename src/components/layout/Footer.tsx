import logo from "../../assets/logo.png";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
        flex flex-col gap-[30px]
        px-[40px] py-[25px]

        max-[768px]:px-[30px] max-[768px]:py-[20px]

        max-[480px]:px-[15px]
        max-[480px]:py-[15px]
        max-[480px]:gap-[20px]
      "
    >
      {/* Footer Top */}
      <div
        className="
          flex items-center justify-between
          flex-wrap gap-[30px]

          max-[480px]:flex-col
          max-[480px]:items-center
          max-[480px]:gap-[20px]
        "
      >
        {/* Logo */}
        <div
          className="
            flex flex-col gap-5

            max-[480px]:items-center
          "
        >
          <img
            src={logo}
            alt="Abhay Narkhede"
            className="
              w-[200px] h-[90px] object-contain

              max-[768px]:w-[150px]
              max-[768px]:h-[68px]

              max-[480px]:w-[120px]
              max-[480px]:h-[54px]
            "
          />
        </div>

        {/* Social Links */}
        <div
          className="
            flex items-center gap-[25px]

            max-[768px]:gap-[15px]
            max-[480px]:gap-[12px]
          "
        >
          {/* GitHub */}
          <a
            href="https://github.com/abhiynar2804"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center
              w-[45px] h-[45px]
              rounded-full
              bg-[linear-gradient(264deg,#DF8908_-5.09%,#B415FF_106.28%)]
              text-white
              no-underline
              transition-all duration-300
              hover:scale-120
              hover:shadow-[0_0_15px_rgba(223,137,8,0.6)]

              max-[480px]:w-[40px]
              max-[480px]:h-[40px]
            "
          >
            <FaGithub size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/abhay-narkhede-016376282/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center
              w-[45px] h-[45px]
              rounded-full
              bg-[linear-gradient(264deg,#DF8908_-5.09%,#B415FF_106.28%)]
              text-white
              no-underline
              transition-all duration-300
              hover:scale-120
              hover:shadow-[0_0_15px_rgba(223,137,8,0.6)]

              max-[480px]:w-[40px]
              max-[480px]:h-[40px]
            "
          >
            <FaLinkedin size={24} />
          </a>

          {/* Twitter / X */}
          <a
            href="https://x.com/abhiynar2804"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center
              w-[45px] h-[45px]
              rounded-full
              bg-[linear-gradient(264deg,#DF8908_-5.09%,#B415FF_106.28%)]
              text-white
              no-underline
              transition-all duration-300
              hover:scale-120
              hover:shadow-[0_0_15px_rgba(223,137,8,0.6)]

              max-[480px]:w-[40px]
              max-[480px]:h-[40px]
            "
          >
            <FaTwitter size={24} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/_abhay_narkhede_"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center
              w-[45px] h-[45px]
              rounded-full
              bg-[linear-gradient(264deg,#DF8908_-5.09%,#B415FF_106.28%)]
              text-white
              no-underline
              transition-all duration-300
              hover:scale-120
              hover:shadow-[0_0_15px_rgba(223,137,8,0.6)]

              max-[480px]:w-[40px]
              max-[480px]:h-[40px]
            "
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full border-0 border-t border-gray-500/40" />

      {/* Footer Bottom */}
      <div
        className="
          flex justify-between
          flex-wrap gap-5
          text-[18px]

          max-[480px]:flex-col
          max-[480px]:items-center
          max-[480px]:text-[14px]
        "
      >
        {/* Copyright */}
        <p className="m-0">
          © 2025 Abhay Narkhede. All right reserved.
        </p>

        {/* Bottom Links */}
        <div
          className="
            flex gap-[50px]
            mb-[50px]

            max-[480px]:gap-[30px]
            max-[480px]:mb-[30px]
          "
        >
          <p className="m-0 cursor-pointer">Term of Services</p>
          <p className="m-0 cursor-pointer">Privacy Policy</p>
          <p className="m-0 cursor-pointer">Connect with me</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;