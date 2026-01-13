import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleNavClick = (sectionId: string) => {
    if (window.location.hash !== '#/') {
       navigate('/');
       setTimeout(() => {
           const el = document.getElementById(sectionId);
           if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
       }, 100);
    } else {
        const el = document.getElementById(sectionId);
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-50 py-16 border-t border-slate-100 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div 
              className="flex items-center space-x-3 mb-6 cursor-pointer" 
              onClick={() => { navigate('/'); window.scrollTo(0,0); }}
            >
              <img src="https://duk.tw/bhwOPW.png" alt="SKTC Logo" className="h-10 w-auto object-contain" />
              <div className="leading-tight">
                <span className="block text-sm font-bold tracking-tight text-slate-900">紹凱動能科技股份有限公司</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              SKTC<br />
              {t('footer.desc')}
            </p>
          </div>
          <div>
            <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-slate-900">{t('footer.nav')}</h5>
            <ul className="text-sm text-slate-500 space-y-3">
              <li><button onClick={() => handleNavClick('about')} className="hover:text-yellow-600 transition-colors">{t('nav.about')}</button></li>
              <li><button onClick={() => handleNavClick('products')} className="hover:text-yellow-600 transition-colors">{t('nav.products')}</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="hover:text-yellow-600 transition-colors">{t('nav.contact')}</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-slate-900">{t('footer.office')}</h5>
            <div className="text-sm text-slate-500 space-y-2">
              <p>TEL：+886-4-23550290</p>
              <p>FAX：+886-4-23502872</p>
              <p>ADD：407 台中市工業區十路11號2樓</p>
              <p>EMAIL：sktc.sdintw@msa.hinet.net</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 text-center md:text-left text-[10px] text-slate-400 uppercase tracking-widest">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;