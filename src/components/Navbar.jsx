import { useState } from 'react';
import { HiHome, HiUser, HiLightningBolt, HiBriefcase, HiMail, HiMenu, HiX, HiTranslate } from 'react-icons/hi';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const navItems = [
    { name: t.nav.home, href: '#home', icon: HiHome },
    { name: t.nav.about, href: '#about', icon: HiUser },
    { name: t.nav.skills, href: '#skills', icon: HiLightningBolt },
    { name: t.nav.projects, href: '#projects', icon: HiBriefcase },
    { name: t.nav.contact, href: '#contact', icon: HiMail },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-purple-600 hover:text-purple-700 transition-colors">
              Victoria
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </a>
              ))}
              
              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-all duration-200 font-medium"
                title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
              >
                <HiTranslate className="w-5 h-5" />
                <span className="uppercase font-bold">{language === 'pt' ? 'EN' : 'PT'}</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Language Toggle Mobile */}
            <button
              onClick={toggleLanguage}
              className="p-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-all"
              title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            >
              <span className="text-sm font-bold uppercase">{language === 'pt' ? 'EN' : 'PT'}</span>
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg border-t border-purple-100">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
