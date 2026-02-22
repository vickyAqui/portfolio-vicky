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
      description: "Portfólio pessoal responsivo e moderno com suporte bilíngue (PT/EN). Desenvolvido com React, Tailwind CSS e Vite, apresentando animações fluidas, design system profissional e interface intuitiva.",
      icon: FaCode,
      technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
      liveLink: "https://github.com/vickyAqui/portfolio-vicky",
      githubLink: "https://github.com/vickyAqui/portfolio-vicky",
      color: "purple"
    },
    {
      title: "JVMM - Jogo da Vida Marinha",
      description: "Projeto acadêmico de desenvolvimento de sistemas. Jogo interativo implementado com Java e JavaFX, explorando conceitos de POO, design patterns e interface gráfica com simulação de ecossistema.",
      icon: FaJava,
      technologies: ["Java", "JavaFX", "POO", "Game Dev"],
      liveLink: "https://github.com/vickyAqui/JVMM",
      githubLink: "https://github.com/vickyAqui/JVMM",
      color: "red"
    },
    {
      title: "Loja Musical",
      description: "Aplicação web de e-commerce para loja de instrumentos musicais. Desenvolvido com JavaScript puro, implementa carrinho de compras, filtros de produtos e responsividade completa.",
      icon: FaCode,
      technologies: ["JavaScript", "HTML5", "CSS3", "DOM"],
      liveLink: "https://github.com/vickyAqui/loja-musical",
      githubLink: "https://github.com/vickyAqui/loja-musical",
      color: "blue"
    },
    {
      title: "PharmaNews",
      description: "Portal de notícias sobre farmácia e saúde. Website estático desenvolvido com HTML e CSS, com design responsivo, grid layout moderno e navegação intuitiva para conteúdo informativo.",
      icon: FaHtml5,
      technologies: ["HTML5", "CSS3", "Design Responsivo", "Web"],
      liveLink: "https://github.com/vickyAqui/PharmaNews",
      githubLink: "https://github.com/vickyAqui/PharmaNews",
      color: "green"
    },
    {
      title: "Currículo Digital",
      description: "Portfólio único em CSS com design criativo. Projeto de estudo focado em experiência visual, uso avançado de CSS Grid e Flexbox, com apresentação profissional e interativa.",
      icon: FaCode,
      technologies: ["CSS3", "HTML5", "Design", "Portfólio"],
      liveLink: "https://github.com/vickyAqui/Curriculo",
      githubLink: "https://github.com/vickyAqui/Curriculo",
      color: "orange"
    },
    {
      title: "Todos os Meus Repositórios",
      description: "Explore meu perfil do GitHub com vários projetos de estudo, exercícios de programação, e experimentos com diferentes tecnologias. Confira meu histórico de aprendizado e contribuições.",
      icon: FaGithub,
      technologies: ["Java", "JavaScript", "HTML/CSS", "Diversos"],
      liveLink: "https://github.com/vickyAqui",
      githubLink: "https://github.com/vickyAqui",
      color: "gray"
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
      title: "JVMM - Marine Life Game",
      description: "Academic systems development project. Interactive game implemented with Java and JavaFX, exploring OOP concepts, design patterns and graphical interfaces with ecosystem simulation.",
      icon: FaJava,
      technologies: ["Java", "JavaFX", "OOP", "Game Dev"],
      liveLink: "https://github.com/vickyAqui/JVMM",
      githubLink: "https://github.com/vickyAqui/JVMM",
      color: "red"
    },
    {
      title: "Musical Store",
      description: "E-commerce web application for a musical instruments store. Developed with vanilla JavaScript, implements shopping cart, product filters and complete responsive design.",
      icon: FaCode,
      technologies: ["JavaScript", "HTML5", "CSS3", "DOM"],
      liveLink: "https://github.com/vickyAqui/loja-musical",
      githubLink: "https://github.com/vickyAqui/loja-musical",
      color: "blue"
    },
    {
      title: "PharmaNews",
      description: "News portal about pharmacy and health. Static website developed with HTML and CSS, featuring responsive design, modern grid layout and intuitive navigation for informative content.",
      icon: FaHtml5,
      technologies: ["HTML5", "CSS3", "Responsive Design", "Web"],
      liveLink: "https://github.com/vickyAqui/PharmaNews",
      githubLink: "https://github.com/vickyAqui/PharmaNews",
      color: "green"
    },
    {
      title: "Digital Curriculum",
      description: "Unique CSS-based portfolio with creative design. Study project focused on visual experience, advanced use of CSS Grid and Flexbox, with professional and interactive presentation.",
      icon: FaCode,
      technologies: ["CSS3", "HTML5", "Design", "Portfolio"],
      liveLink: "https://github.com/vickyAqui/Curriculo",
      githubLink: "https://github.com/vickyAqui/Curriculo",
      color: "orange"
    },
    {
      title: "All My Repositories",
      description: "Explore my GitHub profile with various study projects, programming exercises, and experiments with different technologies. Check my learning history and contributions.",
      icon: FaGithub,
      technologies: ["Java", "JavaScript", "HTML/CSS", "Diverse"],
      liveLink: "https://github.com/vickyAqui",
      githubLink: "https://github.com/vickyAqui",
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
