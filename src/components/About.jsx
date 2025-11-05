import { HiLocationMarker, HiBriefcase, HiAcademicCap } from 'react-icons/hi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desenvolvedora apaixonada por tecnologia e inovação
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Sou estudante de desenvolvimento de sistemas na ETEC Cidade Tiradentes, apaixonada por criar soluções digitais inovadoras. Tenho experiência com Python, Java, Django, Flask e Spring Boot, sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-purple-50 transition-all duration-300 shadow-sm">
                <HiLocationMarker className="text-purple-600 text-2xl flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Localização</p>
                  <p className="text-gray-700 font-medium">São Paulo, SP</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-purple-50 transition-all duration-300 shadow-sm">
                <HiBriefcase className="text-purple-600 text-2xl flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="text-gray-700 font-medium">Disponível</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-purple-50 transition-all duration-300 shadow-sm">
                <HiAcademicCap className="text-purple-600 text-2xl flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Educação</p>
                  <p className="text-gray-700 font-medium">ETEC</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mt-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '20+', label: 'Projetos' },
                { value: '5+', label: 'Tecnologias' },
                { value: '112+', label: 'Contribuições' },
                { value: '3+', label: 'Certificados' }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-200"
                >
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
