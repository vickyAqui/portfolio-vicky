import { FaPython, FaJava, FaHtml5, FaDatabase, FaCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = language === 'pt' ? [
    {
      title: "Este Portfólio",
      description: "Portfólio pessoal responsivo e moderno com suporte bilíngue (PT/EN). Desenvolvido com React, Tailwind CSS e Vite, apresentando animações fluidas e design minimalista.",
      icon: FaCode,
      technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
      liveLink: "https://github.com/vickyAqui/portfolio",
      githubLink: "https://github.com/vickyAqui/portfolio",
      color: "purple"
    },
    {
      title: "Curso Python - Gustavo Guanabara",
      description: "Repositório completo com 100+ exercícios resolvidos do curso de Python do Gustavo Guanabara. Abrange conceitos de lógica de programação, POO, manipulação de arquivos e estruturas de dados.",
      icon: FaPython,
      technologies: ["Python", "POO", "Algoritmos"],
      liveLink: "https://github.com/vickyAqui/Curso-de-Python",
      githubLink: "https://github.com/vickyAqui/Curso-de-Python",
      color: "blue"
    },
    {
      title: "Egiton Prime",
      description: "Site corporativo responsivo desenvolvido com HTML5, CSS3 moderno e JavaScript puro. Implementação de grid responsivo, animações CSS3 e boas práticas de acessibilidade web.",
      icon: FaHtml5,
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsivo"],
      liveLink: "https://github.com/vickyAqui/Egiton-Prime",
      githubLink: "https://github.com/vickyAqui/Egiton-Prime",
      color: "orange"
    },
    {
      title: "TPA - Técnicas de Programação",
      description: "Coleção de algoritmos e estruturas de dados implementadas em Java. Inclui exercícios de programação orientada a objetos, padrões de design e otimização de performance.",
      icon: FaJava,
      technologies: ["Java", "POO", "Algoritmos", "Estruturas de Dados"],
      liveLink: "https://github.com/vickyAqui/TPA",
      githubLink: "https://github.com/vickyAqui/TPA",
      color: "red"
    },
    {
      title: "Festa Junina ETEC 2024",
      description: "Website temático para evento escolar com layout festivo e interativo. Utiliza HTML semântico, CSS animations e design responsivo, atingindo 95+ de performance no PageSpeed.",
      icon: FaDatabase,
      technologies: ["HTML", "CSS", "Design UI", "Responsivo"],
      liveLink: "https://github.com/vickyAqui/Festa-Junina-Etec-2024",
      githubLink: "https://github.com/vickyAqui/Festa-Junina-Etec-2024",
      color: "pink"
    },
    {
      title: "Projetos no GitHub",
      description: "25+ repositórios públicos com diversos projetos de estudo e desenvolvimento. Inclui projetos finais de cursos, exercícios de conceitos, e pequenos utilitários educacionais.",
      icon: FaGithub,
      technologies: ["Python", "Java", "Web", "SQL"],
      liveLink: "https://github.com/vickyAqui?tab=repositories",
      githubLink: "https://github.com/vickyAqui?tab=repositories",
      color: "gray"
    }
  ] : [
    {
      title: "This Portfolio",
      description: "Responsive, modern personal portfolio with bilingual support (PT/EN). Built with React, Tailwind CSS and Vite, featuring smooth animations and minimalist design.",
      icon: FaCode,
      technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
      liveLink: "https://github.com/vickyAqui/portfolio",
      githubLink: "https://github.com/vickyAqui/portfolio",
      color: "purple"
    },
    {
      title: "Python Course - Gustavo Guanabara",
      description: "Complete repository with 100+ solved exercises from Gustavo Guanabara's Python course. Covers logic programming, OOP, file handling and data structures.",
      icon: FaPython,
      technologies: ["Python", "OOP", "Algorithms"],
      liveLink: "https://github.com/vickyAqui/Curso-de-Python",
      githubLink: "https://github.com/vickyAqui/Curso-de-Python",
      color: "blue"
    },
    {
      title: "Egiton Prime",
      description: "Responsive corporate website developed with HTML5, modern CSS3 and vanilla JavaScript. Implementation of responsive grid, CSS3 animations and web accessibility best practices.",
      icon: FaHtml5,
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      liveLink: "https://github.com/vickyAqui/Egiton-Prime",
      githubLink: "https://github.com/vickyAqui/Egiton-Prime",
      color: "orange"
    },
    {
      title: "Programming Techniques - TPA",
      description: "Collection of algorithms and data structures implemented in Java. Includes object-oriented programming exercises, design patterns and performance optimization.",
      icon: FaJava,
      technologies: ["Java", "OOP", "Algorithms", "Data Structures"],
      liveLink: "https://github.com/vickyAqui/TPA",
      githubLink: "https://github.com/vickyAqui/TPA",
      color: "red"
    },
    {
      title: "ETEC June Festival 2024",
      description: "Thematic website for a school event with festive and interactive layout. Uses semantic HTML, CSS animations and responsive design, achieving 95+ PageSpeed performance.",
      icon: FaDatabase,
      technologies: ["HTML", "CSS", "UI Design", "Responsive"],
      liveLink: "https://github.com/vickyAqui/Festa-Junina-Etec-2024",
      githubLink: "https://github.com/vickyAqui/Festa-Junina-Etec-2024",
      color: "pink"
    },
    {
      title: "GitHub Repositories",
      description: "25+ public repositories with diverse study and development projects. Includes course final projects, concept exercises, and small educational utilities.",
      icon: FaGithub,
      technologies: ["Python", "Java", "Web", "SQL"],
      liveLink: "https://github.com/vickyAqui?tab=repositories",
      githubLink: "https://github.com/vickyAqui?tab=repositories",
      color: "gray"
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
