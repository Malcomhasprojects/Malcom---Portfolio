import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-r from-gray-900 to-black border-t border-gray-800">
      <div className="footer-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              <span className="text-blue-400">Malcom</span> Chiaji
            </h3>
            <p className="text-gray-400 text-sm">
              Software Developer & Mobile App Specialist
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Nairobi, Kenya
            </p>
          </div>

          {/* Center Section - Social Links */}
          <div className="socials flex justify-center gap-6">
            {socialImgs.map((socialImg, index) => (
              <a
                key={index}
                href={socialImg.link}
                target="_blank"
                rel="noopener noreferrer"
                className="icon group w-12 h-12 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <img 
                  src={socialImg.imgPath} 
                  alt={socialImg.name} 
                  className="w-6 h-6 filter brightness-0 invert group-hover:filter-none transition-all duration-300"
                />
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-2">
              Available for new opportunities
            </p>
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Malcom Chiaji. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              Built with ❤️ using React & Three.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
