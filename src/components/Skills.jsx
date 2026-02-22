import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaJava, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiMysql, SiPostgresql, SiDjango, SiFlask, SiSpring, SiPytest, SiJunit5, SiVite } from 'react-icons/si';
import { HiCode, HiServer, HiCog } from 'react-icons/hi';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const skills = [
    {
      category: language === 'pt' ? 'Frontend' : 'Frontend',
      icon: HiCode,
      color: "purple",
      items: [
        { name: "React", level: 85, icon: FaReact },
        { name: "JavaScript", level: 85, icon: SiJavascript },
        { name: "HTML/CSS", level: 90, icon: FaHtml5 },
        { name: "Tailwind CSS", level: 88, icon: SiTailwindcss },
      ]
    },
    {
      category: language === 'pt' ? 'Backend' : 'Backend',
      icon: HiServer,
      color: "pink",
      items: [
        { name: "Python", level: 90, icon: FaPython },
        { name: "Java", level: 85, icon: FaJava },
        { name: "Django", level: 85, icon: SiDjango },
        { name: "Flask", level: 80, icon: SiFlask },
      ]
    },
    {
      category: language === 'pt' ? 'Banco de Dados & DevOps' : 'Database & DevOps',
      icon: HiCog,
      color: "purple",
      items: [
        { name: "PostgreSQL", level: 85, icon: SiPostgresql },
        { name: "MySQL", level: 85, icon: SiMysql },
        { name: "Git & GitHub", level: 90, icon: FaGitAlt },
        { name: "Docker", level: 75, icon: FaDocker },
      ]
    }
  ];

  const techIcons = [
    { icon: FaPython, name: 'Python', color: 'text-blue-500' },
    { icon: FaJava, name: 'Java', color: 'text-red-600' },
    { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-500' },
    { icon: FaReact, name: 'React', color: 'text-blue-400' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-500' },
    { icon: SiVite, name: 'Vite', color: 'text-purple-600' },
    { icon: SiDjango, name: 'Django', color: 'text-green-700' },
    { icon: SiFlask, name: 'Flask', color: 'text-gray-700' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-700' },
    { icon: SiMysql, name: 'MySQL', color: 'text-blue-600' },
    { icon: FaGitAlt, name: 'Git', color: 'text-orange-600' },
    { icon: FaDocker, name: 'Docker', color: 'text-blue-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.skills.title}
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skillGroup, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-2 border-purple-200 hover:border-purple-400"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 rounded-full bg-purple-100">
                  <skillGroup.icon className="text-3xl text-purple-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {skillGroup.category}
              </h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className={`w-5 h-5 ${skill.color || 'text-gray-600'}`} />
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                      </div>
                      <span className="font-semibold text-purple-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="h-2.5 rounded-full transition-all duration-1000 bg-purple-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tecnologias em badges com ícones */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {language === 'pt' ? 'Tecnologias que trabalho' : 'Technologies I work with'}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techIcons.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 border-2 border-purple-200 hover:border-purple-400 transform hover:-translate-y-1"
              >
                <tech.icon className={`w-5 h-5 ${tech.color}`} />
                <span className="text-gray-700 font-medium text-sm whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
