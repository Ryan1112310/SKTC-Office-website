import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-lg border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center space-x-3 cursor-pointer" 
          onClick={() => { navigate('/'); window.scrollTo(0, 0); }}
        >
          <img src="https://duk.tw/bhwOPW.png" alt="SKTC Logo" className="h-10 w-auto object-contain" />
          <div className="leading-tight">
            <span className="block text-lg font-bold tracking-tight text-slate-900">紹凱動能科技股份有限公司</span>
            <span className="text-[9px] uppercase tracking-wider text-slate-400 font-medium hidden sm:block">SUNSHINE KINETICS TECHNOLOGY CO.,LTD.</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 md:space-x-8 text-sm font-medium text-slate-600">
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('about')} className="hover:text-slate-900 transition-colors">{t('nav.about')}</button>
            <button onClick={() => handleNavClick('products')} className="hover:text-slate-900 transition-colors">{t('nav.products')}</button>
            <button onClick={() => handleNavClick('custom')} className="hover:text-slate-900 transition-colors">{t('nav.custom')}</button>
          </div>
          
          <div className="flex items-center space-x-2 border-l pl-4 border-slate-200">
            <button 
                onClick={() => setLanguage('zh')} 
                className={`text-xs font-bold px-2 py-1 rounded transition-colors ${language === 'zh' ? 'bg-slate-100 text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
            >
                繁
            </button>
            <button 
                onClick={() => setLanguage('en')} 
                className={`text-xs font-bold px-2 py-1 rounded transition-colors ${language === 'en' ? 'bg-slate-100 text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
            >
                EN
            </button>
            <button 
                onClick={() => setLanguage('ja')} 
                className={`text-xs font-bold px-2 py-1 rounded transition-colors ${language === 'ja' ? 'bg-slate-100 text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
            >
                JP
            </button>
          </div>

          <button onClick={() => handleNavClick('contact')} className="hidden md:block px-5 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all">
            {t('nav.contact')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;