import { FaPython, FaJava, FaHtml5, FaDatabase, FaCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: "Curso de Python",
      description: "Repositório com exercícios completos do Curso de Python do Gustavo Guanabara, abordando conceitos fundamentais até avançados.",
      icon: FaPython,
      technologies: ["Python", "Algoritmos", "POO"],
      liveLink: "https://github.com/vickyAqui/Curso-de-Python",
      githubLink: "https://github.com/vickyAqui/Curso-de-Python",
      color: "purple"
    },
    {
      title: "Egiton Prime",
      description: "Projeto web desenvolvido com foco em design responsivo e boas práticas de CSS moderno.",
      icon: FaCode,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://github.com/vickyAqui/Egiton-Prime",
      githubLink: "https://github.com/vickyAqui/Egiton-Prime",
      color: "pink"
    },
    {
      title: "Festa Junina ETEC 2024",
      description: "Site desenvolvido para a Festa Junina da ETEC Cidade Tiradentes, com layout temático e interativo.",
      icon: FaHtml5,
      technologies: ["HTML", "CSS", "Design"],
      liveLink: "https://github.com/vickyAqui/Festa-Junina-Etec-2024",
      githubLink: "https://github.com/vickyAqui/Festa-Junina-Etec-2024",
      color: "purple"
    },
    {
      title: "TPA - Técnicas de Programação",
      description: "Exercícios e projetos desenvolvidos em Java aplicando conceitos de POO e boas práticas de programação.",
      icon: FaJava,
      technologies: ["Java", "POO", "Algoritmos"],
      liveLink: "https://github.com/vickyAqui/TPA",
      githubLink: "https://github.com/vickyAqui/TPA",
      color: "pink"
    },
    {
      title: "Banco de Dados",
      description: "Projetos e exercícios focados em modelagem, consultas SQL e gestão de bancos de dados relacionais.",
      icon: FaDatabase,
      technologies: ["SQL", "MySQL", "PostgreSQL"],
      liveLink: "https://github.com/vickyAqui/Banco-de-Dados",
      githubLink: "https://github.com/vickyAqui/Banco-de-Dados",
      color: "purple"
    },
    {
      title: "Mais Projetos",
      description: "Confira todos os meus 25+ repositórios no GitHub com diversos projetos de estudo e desenvolvimento.",
      icon: FaGithub,
      technologies: ["Python", "Java", "Web"],
      liveLink: "https://github.com/vickyAqui?tab=repositories",
      githubLink: "https://github.com/vickyAqui?tab=repositories",
      color: "pink"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meus Projetos
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi. Cada um representa um desafio único e aprendizados valiosos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-100"
            >
              {/* Ícone do projeto */}
              <div className="h-48 flex items-center justify-center bg-purple-50">
                <div className="p-6 rounded-full bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="text-6xl text-purple-600" />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-200"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Ver Projeto
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
                    title="Ver no GitHub"
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
