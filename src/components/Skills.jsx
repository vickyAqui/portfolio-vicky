import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaJava, FaNpm } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiVite, SiExpress, SiPug } from 'react-icons/si';
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
        { name: "React", level: 86, icon: FaReact },
        { name: "JavaScript", level: 90, icon: SiJavascript },
        { name: "HTML/CSS", level: 90, icon: FaHtml5 },
        { name: "Tailwind CSS", level: 85, icon: SiTailwindcss },
      ]
    },
    {
      category: language === 'pt' ? 'Backend' : 'Backend',
      icon: HiServer,
      color: "pink",
      items: [
        { name: "Node.js", level: 82, icon: FaNodeJs },
        { name: "Express", level: 78, icon: SiExpress },
        { name: "Java", level: 80, icon: FaJava },
        { name: "APIs REST", level: 78, icon: HiServer },
      ]
    },
    {
      category: language === 'pt' ? 'Banco de Dados & DevOps' : 'Database & DevOps',
      icon: HiCog,
      color: "purple",
      items: [
        { name: "Vite", level: 86, icon: SiVite },
        { name: "npm", level: 84, icon: FaNpm },
        { name: "Git & GitHub", level: 90, icon: FaGitAlt },
        { name: "Pug", level: 70, icon: SiPug },
      ]
    }
  ];

  const techIcons = [
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-600' },
    { icon: FaJava, name: 'Java', color: 'text-red-600' },
    { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-500' },
    { icon: FaReact, name: 'React', color: 'text-blue-400' },
    { icon: FaHtml5, name: 'HTML5', color: 'text-orange-600' },
    { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-600' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-500' },
    { icon: SiVite, name: 'Vite', color: 'text-purple-600' },
    { icon: SiExpress, name: 'Express', color: 'text-gray-700' },
    { icon: SiPug, name: 'Pug', color: 'text-pink-600' },
    { icon: FaGitAlt, name: 'Git', color: 'text-orange-600' },
    { icon: FaNpm, name: 'npm', color: 'text-red-600' },
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
