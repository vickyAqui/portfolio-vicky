import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo e texto */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-purple-400 mb-2">Victoria Peixoto</h3>
            <p className="text-gray-400 text-sm">Desenvolvedora Full Stack</p>
          </div>

          {/* Redes sociais */}
          <div className="flex gap-3">
            <a
              href="https://github.com/vickyAqui"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-gray-800 rounded-lg text-gray-300 hover:bg-purple-600 hover:text-white transition-all duration-300"
              title="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/victoria-peixoto-de-oliveira-154970356/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-gray-800 rounded-lg text-gray-300 hover:bg-purple-600 hover:text-white transition-all duration-300"
              title="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:galaxy.o.peixoto@gmail.com"
              className="p-2.5 bg-gray-800 rounded-lg text-gray-300 hover:bg-purple-600 hover:text-white transition-all duration-300"
              title="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Victoria
            </p>
            <p className="text-gray-500 text-xs mt-1 flex items-center justify-center md:justify-end gap-1">
              Feito com <FaHeart className="text-purple-400" /> React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
