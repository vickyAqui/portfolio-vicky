import { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    // Por exemplo, usando EmailJS, uma API backend, etc.
    console.log('Form data:', formData);
    alert(language === 'pt' ? 'Mensagem enviada! (Configure um serviço de email para funcionar)' : 'Message sent! (Configure an email service to work)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'pt' ? 'Informações de Contato' : 'Contact Information'}
            </h3>
            <p className="text-gray-600 mb-8">
              {language === 'pt' ? 'Estou sempre aberta a discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua visão.' : "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision."}
            </p>

            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-500 text-white group-hover:scale-110 transition-transform">
                    <HiMail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">{t.contact.email}</h4>
                  <p className="text-gray-600">galaxy.o.peixoto@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-500 text-white group-hover:scale-110 transition-transform">
                    <HiPhone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">GitHub</h4>
                  <p className="text-gray-600">github.com/vickyAqui</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-500 text-white group-hover:scale-110 transition-transform">
                    <HiLocationMarker className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">{t.contact.location}</h4>
                  <p className="text-gray-600">{language === 'pt' ? 'São Paulo, SP - Brasil' : 'São Paulo, SP - Brazil'}</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/vickyAqui" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg text-gray-700 hover:bg-purple-100 hover:text-purple-600 transition-colors shadow-sm"
                  title="GitHub"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/victoria-peixoto-de-oliveira-154970356/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg text-gray-700 hover:bg-purple-100 hover:text-purple-600 transition-colors shadow-sm"
                  title="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:galaxy.o.peixoto@gmail.com" 
                  className="p-3 bg-white rounded-lg text-gray-700 hover:bg-purple-100 hover:text-purple-600 transition-colors shadow-sm"
                  title="Email"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="bg-gray-50 rounded-2xl shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder={t.contact.form.subjectPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-200 shadow-md"
              >
                <HiPaperAirplane className="w-5 h-5" />
                {t.contact.form.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
