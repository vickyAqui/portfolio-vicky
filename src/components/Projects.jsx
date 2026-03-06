import { FaJava, FaHtml5, FaCode, FaGithub, FaExternalLinkAlt, FaNodeJs } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = language === 'pt' ? [
    {
      title: "Este Portfólio",
      description: "Portfólio pessoal responsivo e moderno com suporte bilíngue (PT/EN). Desenvolvido com React, Tailwind CSS e Vite, apresentando animações fluidas, design system profissional e interface intuitiva.",
      icon: FaCode,
      technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
      liveLink: "https://github.com/vickyAqui/portfolio-vicky",
      githubLink: "https://github.com/vickyAqui/portfolio-vicky",
      color: "purple"
    },
    {
      title: "Lista de Contatos",
      description: "Aplicação web para gerenciamento de contatos com foco em manipulação de estado, interface clara e experiência de uso objetiva.",
      icon: FaCode,
      technologies: ["JavaScript", "HTML", "CSS", "Frontend"],
      liveLink: "https://github.com/vickyAqui/Lista-de-Contatos",
      githubLink: "https://github.com/vickyAqui/Lista-de-Contatos",
      color: "blue"
    },
    {
      title: "Projeto Node",
      description: "Projeto backend em Node.js com foco em fundamentos de servidor, organização de rotas e estrutura de aplicação para APIs.",
      icon: FaNodeJs,
      technologies: ["Node.js", "JavaScript", "Backend", "API"],
      liveLink: "https://github.com/vickyAqui/Projeto-Node",
      githubLink: "https://github.com/vickyAqui/Projeto-Node",
      color: "green"
    },
    {
      title: "Exercícios Node",
      description: "Coleção de exercícios práticos em Node.js para reforço de lógica, módulos, entrada/saída e práticas essenciais de backend.",
      icon: FaNodeJs,
      technologies: ["Node.js", "JavaScript", "CLI", "Estudos"],
      liveLink: "https://github.com/vickyAqui/exercicios-node",
      githubLink: "https://github.com/vickyAqui/exercicios-node",
      color: "purple"
    },
    {
      title: "JVMM - Jogo da Vida Marinha",
      description: "Projeto acadêmico de desenvolvimento de sistemas: jogo em Java e JavaFX com simulação de ecossistema, POO e interface gráfica.",
      icon: FaJava,
      technologies: ["Java", "JavaFX", "POO", "Game Dev"],
      liveLink: "https://github.com/vickyAqui/JVMM",
      githubLink: "https://github.com/vickyAqui/JVMM",
      color: "red"
    },
    {
      title: "Loja Musical",
      description: "Aplicação web de e-commerce para instrumentos musicais com JavaScript puro, organização de catálogo e layout responsivo.",
      icon: FaHtml5,
      technologies: ["JavaScript", "HTML", "CSS", "DOM"],
      liveLink: "https://github.com/vickyAqui/loja-musical",
      githubLink: "https://github.com/vickyAqui/loja-musical",
      color: "orange"
    }
  ] : [
    {
      title: "This Portfolio",
      description: "Responsive, modern personal portfolio with bilingual support (PT/EN). Built with React, Tailwind CSS and Vite, featuring smooth animations, professional design system and intuitive interface.",
      icon: FaCode,
      technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
      liveLink: "https://github.com/vickyAqui/portfolio-vicky",
      githubLink: "https://github.com/vickyAqui/portfolio-vicky",
      color: "purple"
    },
    {
      title: "Contact List",
      description: "Web application for contact management focused on state handling, clean interface and straightforward user experience.",
      icon: FaCode,
      technologies: ["JavaScript", "HTML", "CSS", "Frontend"],
      liveLink: "https://github.com/vickyAqui/Lista-de-Contatos",
      githubLink: "https://github.com/vickyAqui/Lista-de-Contatos",
      color: "blue"
    },
    {
      title: "Node Project",
      description: "Backend project in Node.js focused on server fundamentals, route organization and application structure for APIs.",
      icon: FaNodeJs,
      technologies: ["Node.js", "JavaScript", "Backend", "API"],
      liveLink: "https://github.com/vickyAqui/Projeto-Node",
      githubLink: "https://github.com/vickyAqui/Projeto-Node",
      color: "green"
    },
    {
      title: "Node Exercises",
      description: "Practical Node.js exercise collection to strengthen logic, modules, input/output and core backend practices.",
      icon: FaNodeJs,
      technologies: ["Node.js", "JavaScript", "CLI", "Study"],
      liveLink: "https://github.com/vickyAqui/exercicios-node",
      githubLink: "https://github.com/vickyAqui/exercicios-node",
      color: "purple"
    },
    {
      title: "JVMM - Marine Life Game",
      description: "Academic systems development project: game in Java and JavaFX with ecosystem simulation, OOP and graphical interface.",
      icon: FaJava,
      technologies: ["Java", "JavaFX", "OOP", "Game Dev"],
      liveLink: "https://github.com/vickyAqui/JVMM",
      githubLink: "https://github.com/vickyAqui/JVMM",
      color: "red"
    },
    {
      title: "Musical Store",
      description: "E-commerce web app for musical instruments using vanilla JavaScript, with catalog organization and responsive layout.",
      icon: FaHtml5,
      technologies: ["JavaScript", "HTML", "CSS", "DOM"],
      liveLink: "https://github.com/vickyAqui/loja-musical",
      githubLink: "https://github.com/vickyAqui/loja-musical",
      color: "orange"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.projects.title}
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-purple-100 hover:border-purple-400"
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Ícone do projeto */}
              <div className="h-40 flex items-center justify-center bg-gradient-to-br from-purple-50 to-gray-50 relative z-10">
                <div className="p-6 rounded-full bg-white shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 border-2 border-purple-200">
                  <project.icon className="text-5xl text-purple-600" />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6 relative z-20">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 font-medium text-sm group/btn"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    {language === 'pt' ? 'Ver' : 'View'}
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 flex items-center justify-center font-medium text-sm"
                    title={language === 'pt' ? 'Ver no GitHub' : 'View on GitHub'}
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
