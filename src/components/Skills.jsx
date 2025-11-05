import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaJava, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiMysql, SiPostgresql, SiDjango, SiFlask, SiSpring, SiPytest, SiJunit5 } from 'react-icons/si';
import { HiCode, HiServer, HiCog } from 'react-icons/hi';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const skills = [
    {
      category: language === 'pt' ? 'Linguagens' : 'Languages',
      icon: HiCode,
      color: "purple",
      items: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
      ]
    },
    {
      category: language === 'pt' ? 'Frameworks & Backend' : 'Frameworks & Backend',
      icon: HiServer,
      color: "pink",
      items: [
        { name: "Django", level: 85 },
        { name: "Flask", level: 80 },
        { name: "Spring Boot", level: 75 },
        { name: "Node.js", level: 70 },
      ]
    },
    {
      category: language === 'pt' ? 'Bancos & Ferramentas' : 'Database & Tools',
      icon: HiCog,
      color: "purple",
      items: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 70 },
      ]
    }
  ];

  const techIcons = [
    { icon: FaPython, name: 'Python', color: 'text-blue-500' },
    { icon: FaJava, name: 'Java', color: 'text-red-600' },
    { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-500' },
    { icon: SiDjango, name: 'Django', color: 'text-green-700' },
    { icon: SiFlask, name: 'Flask', color: 'text-gray-700' },
    { icon: SiSpring, name: 'Spring Boot', color: 'text-green-600' },
    { icon: SiMysql, name: 'MySQL', color: 'text-blue-600' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-700' },
    { icon: FaGitAlt, name: 'Git', color: 'text-orange-600' },
    { icon: FaHtml5, name: 'HTML5', color: 'text-orange-500' },
    { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-500' },
    { icon: FaDocker, name: 'Docker', color: 'text-blue-500' },
    { icon: SiPytest, name: 'Pytest', color: 'text-yellow-600' },
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
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
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
            Tecnologias que trabalho
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techIcons.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 border-2 border-purple-200 hover:border-purple-400 transform hover:-translate-y-1"
              >
                <tech.icon className={`text-2xl ${tech.color}`} />
                <span className="font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
