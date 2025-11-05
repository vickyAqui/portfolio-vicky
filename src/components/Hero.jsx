import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Foto de perfil */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-400 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://avatars.githubusercontent.com/u/162511522?v=4" 
                  alt="Victoria Peixoto"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Texto principal */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-purple-600 font-semibold mb-2 text-lg">
              Olá! 👋
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Eu sou <span className="text-purple-600">Victoria</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
              Desenvolvedora de Software
            </p>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Estudante de desenvolvimento de sistemas na ETEC Cidade Tiradentes. Apaixonada por criar soluções digitais com Python, Java, Django, Flask e Spring Boot.
            </p>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-xl font-medium"
              >
                <HiSparkles className="w-5 h-5" />
                Ver Projetos
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-300 shadow-sm font-medium"
              >
                <FaEnvelope className="w-5 h-5" />
                Entre em Contato
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="https://github.com/vickyAqui" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white rounded-lg text-gray-700 hover:bg-purple-100 hover:text-purple-600 transition-all duration-300 shadow-sm"
                title="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/victoria-peixoto-de-oliveira-154970356/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white rounded-lg text-gray-700 hover:bg-purple-100 hover:text-purple-600 transition-all duration-300 shadow-sm"
                title="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:galaxy.o.peixoto@gmail.com" 
                className="p-3 bg-white rounded-lg text-gray-700 hover:bg-purple-100 hover:text-purple-600 transition-all duration-300 shadow-sm"
                title="Email"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
