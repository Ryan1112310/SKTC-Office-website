import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Check, MapPin, Phone, Printer, Mail } from 'lucide-react';
import * as Icons from 'lucide-react';
import Reveal from '../components/Reveal';
import { getProducts } from '../data/products';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  
  // Fetch localized products
  const products = getProducts(language);

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <div className="page-content active">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20 bg-mesh">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-[10px] font-bold tracking-widest uppercase mb-6 rounded-sm">
              {t('hero.badge')}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-8">
              {t('hero.title.1')}<br /><span className="text-slate-400 italic font-light">{t('hero.title.2')}</span>{t('hero.title.3')}
            </h1>
            <p className="text-lg text-slate-500 max-w-md leading-relaxed mb-10">
              {t('hero.desc')}
            </p>
            <div className="flex space-x-4">
              <button onClick={scrollToProducts} className="px-8 py-4 bg-yellow-400 text-slate-900 font-bold rounded-sm hover:bg-yellow-500 transition-all flex items-center group">
                {t('hero.cta')}
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </Reveal>
          <Reveal delay={200} className="hidden md:block">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
              alt="Automation Line" className="w-full h-[500px] object-cover rounded-lg shadow-2xl border-4 border-white" />
          </Reveal>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-32 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <Reveal>
                <h2 className="text-3xl font-bold mb-10 zen-line">{t('about.title')}</h2>
                <div className="bg-slate-50 p-10 border-l-4 border-yellow-400 rounded-r-lg shadow-sm">
                  <p className="text-slate-700 leading-loose mb-6 text-lg whitespace-pre-line">
                    {t('about.content.1')}
                  </p>
                  <p className="text-slate-700 leading-loose text-lg whitespace-pre-line">
                    {t('about.content.2')}
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-5 flex justify-center items-center">
              <Reveal delay={200}>
                <div className="rounded-lg overflow-hidden shadow-xl border-4 border-white max-w-[80%] mx-auto">
                  <img src="https://duk.tw/VMDJ0z.jpg" alt="Company Building" className="w-full h-auto object-cover" />
                </div>
              </Reveal>
            </div>
          </div>

          {/* 企業願景 */}
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5">
              <Reveal>
                <h2 className="text-3xl font-bold mb-12 zen-line">{t('vision.title')}</h2>
                <div className="space-y-12">
                  <div className="flex items-start space-x-6">
                    <span className="text-4xl font-light text-slate-200 italic">01</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">{t('vision.1.title')}</h4>
                      <p className="text-sm text-slate-500">{t('vision.1.desc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <span className="text-4xl font-light text-slate-200 italic">02</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">{t('vision.2.title')}</h4>
                      <p className="text-sm text-slate-500">{t('vision.2.desc')}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal delay={200}>
                <div className="bg-slate-50 p-12 rounded-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">{t('vision.main.title')}</h3>
                  <p className="text-slate-600 leading-loose text-base font-medium">
                    {t('vision.main.desc')}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">{t('products.title')}</h2>
              <p className="text-slate-400 text-sm tracking-widest uppercase">{t('products.subtitle')}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(products).map(([key, p], index) => {
              // Dynamic Icon
              const IconComponent = (Icons as any)[p.icon
                .split('-')
                .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                .join('')] || Icons.Box; 
                
              let DisplayIcon = Icons.Box;
              if (p.icon === 'settings-2') DisplayIcon = Icons.Settings2;
              else if (p.icon === 'activity') DisplayIcon = Icons.Activity;
              else if (p.icon === 'layout') DisplayIcon = Icons.Layout;
              else if (p.icon === 'cpu') DisplayIcon = Icons.Cpu;
              else if (p.icon === 'zap') DisplayIcon = Icons.Zap;
              else if (p.icon === 'radio') DisplayIcon = Icons.Radio;
              else if (p.icon === 'microchip') DisplayIcon = Icons.Microchip;
              else if (p.icon === 'eye') DisplayIcon = Icons.Eye;
              else if (p.icon === 'gauge') DisplayIcon = Icons.Gauge;
              else if (p.icon === 'monitor') DisplayIcon = Icons.Monitor;

              return (
                <Reveal key={key} delay={index * 100}>
                  <div 
                    onClick={() => navigate(`/product/${key}`)}
                    className="product-card bg-white p-8 border border-slate-100 flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 hover:border-yellow-400"
                  >
                    <div className="mb-6 text-slate-300">
                      <DisplayIcon className="w-10 h-10" />
                    </div>
                    <span className="text-[10px] text-slate-400 tracking-widest uppercase mb-1">{p.tag}</span>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">{p.name}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{p.desc}</p>
                    <div className="mt-6 text-yellow-500 text-xs font-bold uppercase tracking-tighter flex items-center group-hover:text-yellow-600">
                      {t('products.learn_more')} <ChevronRight className="ml-1 w-3 h-3" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom */}
      <section id="custom" className="py-32 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <h2 className="text-3xl font-bold mb-8 zen-line">{t('custom.title')}</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                {t('custom.desc')}
              </p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center space-x-3 text-slate-300">
                  <Check className="text-yellow-400 w-4 h-4" />
                  <span>{t('custom.item.1')}</span>
                </li>
                <li className="flex items-center space-x-3 text-slate-300">
                  <Check className="text-yellow-400 w-4 h-4" />
                  <span>{t('custom.item.2')}</span>
                </li>
              </ul>
            </Reveal>
            <Reveal delay={200}>
              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
                <h4 className="font-bold text-yellow-400 mb-4 italic">{t('custom.hotline')}</h4>
                <p className="text-2xl font-bold text-white mb-2">+886-4-23550290</p>
                <p className="text-slate-500 text-xs">台中市工業區十路11號2樓</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <Reveal>
              <h2 className="text-3xl font-bold mb-10">{t('contact.title')}</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-yellow-500 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Address</p>
                    <p className="text-slate-800">407 台中市工業區十路11號2樓</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-yellow-500 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Phone</p>
                    <p className="text-slate-800">+886 - 4 - 23550290</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Printer className="w-6 h-6 text-yellow-500 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Fax</p>
                    <p className="text-slate-800">+886 - 4 - 23502872</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-yellow-500 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Email</p>
                    <p className="text-slate-800">sktc.sdintw@msa.hinet.net</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-8">
                  <input type="text" placeholder={t('contact.name')} className="input-underline py-3 w-full" />
                  <input type="text" placeholder={t('contact.company')} className="input-underline py-3 w-full" />
                </div>
                <input type="email" placeholder={t('contact.email')} className="input-underline w-full py-3" />
                <textarea rows={4} placeholder={t('contact.content')} className="input-underline w-full py-3 resize-none"></textarea>
                <button className="w-full py-4 bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all rounded-sm">{t('contact.btn')}</button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;