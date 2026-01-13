import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Check, Image as ImageIcon } from 'lucide-react';
import { getProducts } from '../data/products';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  TabbedProduct, 
  ThreeRowsProduct, 
  EpcCustomProduct, 
  IndustrialSplitProduct, 
  CenteredProduct, 
  PropCustomProduct, 
  MultiModelProduct 
} from '../types';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { language, t } = useLanguage();
  const products = getProducts(language);
  const product = productId ? products[productId] : null;

  if (!product) {
    return <div className="p-20 text-center">Product not found.</div>;
  }

  return (
    <div className="pt-10 pb-24 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <Link to="/" className="flex items-center text-slate-400 hover:text-slate-900 mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> {t('detail.back')}
        </Link>
        <div className="animate-fade-in-up">
            {renderLayout(product, t)}
        </div>
      </div>
    </div>
  );
};

const renderLayout = (p: any, t: (k:string)=>string) => {
    switch (p.layout) {
        case 'tabbed': return <LayoutTabbed p={p as TabbedProduct} t={t} />;
        case 'three-rows': return <LayoutThreeRows p={p as ThreeRowsProduct} t={t} />;
        case 'epc-custom': return <LayoutEpcCustom p={p as EpcCustomProduct} t={t} />;
        case 'industrial-split': return <LayoutIndustrialSplit p={p as IndustrialSplitProduct} t={t} />;
        case 'centered': return <LayoutCentered p={p as CenteredProduct} t={t} />;
        case 'prop-custom': return <LayoutPropCustom p={p as PropCustomProduct} t={t} />;
        default: 
            if ((p as MultiModelProduct).isMultiModel) {
                return <LayoutMultiModel p={p as MultiModelProduct} t={t} />;
            }
            return <LayoutDefault p={p} t={t} />;
    }
}

// --- Layout Components ---

const LayoutTabbed: React.FC<{ p: TabbedProduct, t: (k:string)=>string }> = ({ p, t }) => {
    const [activeTab, setActiveTab] = useState(p.tabs[0].id);
    const activeContent = p.tabs.find(t => t.id === activeTab)?.content;

    return (
        <div>
            <div className="mb-8">
                <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs">{p.tag}</span>
                <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-6">{p.name}</h1>
            </div>

            <div className="flex space-x-8 border-b border-slate-200 mb-10 overflow-x-auto">
                {p.tabs.map((tab) => (
                    <button 
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)} 
                        className={`pb-4 px-2 border-b-2 text-sm transition-all whitespace-nowrap ${
                            activeTab === tab.id 
                            ? 'border-slate-900 text-slate-900 font-bold' 
                            : 'border-transparent text-slate-500 hover:text-slate-800'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {activeContent && (
                <div className="space-y-16 animate-fade-in">
                    <div className="space-y-6">
                        <h4 className="font-bold text-slate-900 text-lg">{t('detail.intro')}</h4>
                        <p className="text-slate-600 leading-loose whitespace-pre-line text-sm">{activeContent.intro}</p>
                    </div>

                    {activeContent.features && (
                        <div className="bg-slate-50 p-8 rounded-lg border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-6 flex items-center text-lg">
                                <Star className="w-5 h-5 mr-2 text-yellow-400" /> {t('detail.features')}
                            </h4>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {activeContent.features.map((f, i) => (
                                    <li key={i} className="text-sm text-slate-600 flex items-start">
                                        <Check className="w-4 h-4 mt-0.5 mr-3 text-slate-300" /> {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div>
                        <h4 className="font-bold text-slate-900 text-lg mb-8 text-center">{t('detail.appearance')}</h4>
                        <div className="flex flex-wrap justify-center gap-8">
                            {activeContent.images.map((img, i) => (
                                <div key={i} className="flex flex-col items-center w-full md:w-1/3 max-w-[250px]">
                                    <div className="w-full aspect-square flex items-center justify-center bg-white border border-slate-100 rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-all">
                                        <img src={img.src} alt={img.title} className="max-w-full max-h-full object-contain" />
                                    </div>
                                    <p className="text-center font-bold text-slate-800 text-sm leading-tight" dangerouslySetInnerHTML={{ __html: img.title || '' }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {activeContent.specsHtml && (
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg mb-6 text-center">{activeContent.specsTitle || t('detail.specs')}</h4>
                            <div className="overflow-x-auto border border-slate-200 rounded-lg" dangerouslySetInnerHTML={{ __html: activeContent.specsHtml }} />
                        </div>
                    )}

                    {activeContent.dimImages && (
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg mb-8 text-center">{t('detail.dims')}</h4>
                            <div className="flex flex-wrap justify-center gap-10">
                                {activeContent.dimImages.map((img, i) => (
                                    <div key={i} className={`flex flex-col items-center w-full ${img.isThird ? 'md:w-full max-w-[500px]' : 'md:w-[45%] max-w-[400px]'}`}>
                                        <div className="w-full bg-white border border-slate-100 rounded-lg p-2 mb-3">
                                            <img src={img.src} alt={img.title} className="w-full h-auto object-contain" />
                                        </div>
                                        <p className="text-center font-bold text-slate-800 text-sm">{img.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const LayoutThreeRows: React.FC<{ p: ThreeRowsProduct, t: (k:string)=>string }> = ({ p, t }) => (
    <div>
        <div className="mb-10 text-left max-w-4xl mx-auto">
            <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs">{p.tag}</span>
            <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-6">{p.name}</h1>
            <p className="text-lg text-slate-600 leading-relaxed">{p.intro || p.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {p.models.map((m, i) => (
                <div key={i} className="flex flex-col items-center">
                    <div className="w-full bg-white border border-slate-100 rounded-lg p-6 flex items-center justify-center mb-4 shadow-sm h-64">
                        <img src={m.image} alt={m.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 text-center w-full px-2" dangerouslySetInnerHTML={{ __html: m.name || '' }} />
                </div>
            ))}
        </div>

        <div className="max-w-3xl mx-auto">
            <h4 className="text-lg font-bold text-slate-900 mb-6 text-center border-b pb-4">{p.specsTitle || t('detail.specs')}</h4>
            <div className="border border-slate-200 rounded-lg overflow-hidden text-sm">
                <table className="w-full text-center">
                    <tbody className="divide-y divide-slate-100">
                        {p.specs && Object.entries(p.specs).map(([k, v]) => (
                            <tr key={k}>
                                <td className="p-4 bg-slate-50 text-slate-500 font-medium w-1/3 border-r border-slate-100">{k}</td>
                                <td className="p-4 text-slate-900 font-medium whitespace-pre-line">{v}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

const LayoutIndustrialSplit: React.FC<{ p: IndustrialSplitProduct, t: (k:string)=>string }> = ({ p, t }) => (
    <div>
        <div className="mb-12">
            <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs">{p.tag}</span>
            <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-6">{p.name}</h1>
            <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">{p.details}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="flex flex-col gap-8 h-full">
                {p.features && (
                    <div className="bg-slate-50 p-8 rounded-lg border border-slate-100">
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                            <Star className="w-4 h-4 mr-2 text-yellow-400" /> {t('detail.features')}
                        </h4>
                        <ul className="space-y-3">
                            {p.features.map((f, i) => (
                                <li key={i} className="text-sm text-slate-500 flex items-start">
                                    <Check className="w-3 h-3 mt-1 mr-2 text-slate-300" /> {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                
                <div className="mt-auto"> 
                    <h4 className="font-bold text-slate-900 mb-4 text-center">{t('detail.dims')}</h4>
                    <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                        <img src={p.dimensionImage.src} alt="Dimension" className="w-full h-auto object-contain" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8">
                <div className="bg-white rounded-lg flex flex-col items-center justify-center border border-slate-100 p-6">
                     <img src={p.image} alt={p.name} className="max-w-full h-auto object-contain" />
                     <p className="mt-4 font-bold text-slate-900 text-lg">{p.imageLabel}</p>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 text-center">{t('detail.specs')}</h4>
                    <div className="border border-slate-100 rounded-lg overflow-hidden text-[11px]">
                        <table className="w-full text-center">
                            <tbody>
                                {p.specs && Object.entries(p.specs).map(([label, val]) => (
                                    <tr key={label} className="border-b border-slate-50">
                                        <td className="p-3 bg-slate-50/50 text-slate-400 font-medium w-1/3">{label}</td>
                                        <td className="p-3 text-slate-900 font-medium whitespace-pre-line">{val}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div className="border-t border-slate-100 pt-10">
            <h4 className="font-bold text-slate-900 mb-6 flex items-center justify-center">
                 <ImageIcon className="w-5 h-5 mr-2 text-yellow-500" />
                 {t('detail.usage')}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                {p.usageImages.map((img, i) => (
                    <figure key={i} className="group text-center w-[70%]"> 
                        <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm bg-slate-50">
                            <img src={img} alt="Usage" className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                        </div>
                    </figure>
                ))}
            </div>
        </div>
    </div>
);

const LayoutCentered: React.FC<{ p: CenteredProduct, t: (k:string)=>string }> = ({ p, t }) => (
    <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-left">
            <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs">{p.tag}</span>
            <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-6">{p.name}</h1>
            <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line mb-8 max-w-2xl">{p.details || p.desc}</p>
        </div>
        
        <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg flex flex-col items-center justify-center border border-slate-100 p-6 shadow-sm max-w-md w-full">
                    <img src={p.image} alt={p.name} className="max-w-full h-auto object-contain" />
                    {p.imageLabel && <p className="mt-4 font-bold text-slate-900 text-lg text-center w-full block">{p.imageLabel}</p>}
            </div>
        </div>

        <div className="max-w-3xl mx-auto">
            <h4 className="text-lg font-bold text-slate-900 mb-6 border-b pb-4 text-center">{t('detail.specs')}</h4>
            <div className="border border-slate-200 rounded-lg overflow-hidden text-sm">
                <table className="w-full text-center">
                    <tbody className="divide-y divide-slate-100">
                        {p.specs && Object.entries(p.specs).map(([label, val]) => (
                            <tr key={label}>
                                <td className="p-3 bg-slate-50 text-slate-500 font-medium w-1/2 border-r border-slate-100">{label}</td>
                                <td className="p-3 text-slate-900 font-medium whitespace-pre-line">{val}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        
        {p.customBottomHtml && (
             <div className="mt-16" dangerouslySetInnerHTML={{ __html: p.customBottomHtml }} />
        )}
    </div>
);

const LayoutEpcCustom: React.FC<{ p: EpcCustomProduct, t: (k:string)=>string }> = ({ p }) => (
    <div>
        <div className="mb-12 text-left max-w-5xl mx-auto">
            <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs">{p.tag}</span>
            <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-6">{p.name}</h1>
            <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">{p.intro}</p>
        </div>

        <div className="mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {p.middleRow.map((item, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="w-full bg-white border border-slate-100 rounded-lg p-4 flex items-center justify-center mb-4 shadow-sm aspect-square">
                            <img src={item.image} alt="" className="max-w-full max-h-full object-contain" />
                        </div>
                        <p className="w-full text-center px-2 font-bold text-slate-800 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.label }} />
                    </div>
                ))}
            </div>
        </div>

        <div className="border-t border-slate-100 pt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {p.bottomRow.map((item, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="w-full bg-white border border-slate-100 rounded-lg p-4 flex items-center justify-center mb-4 shadow-sm aspect-square">
                            <img src={item.image} alt="" className="max-w-full max-h-full object-contain" />
                        </div>
                        <p className="w-full text-center px-2 font-bold text-slate-800 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.label }} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const LayoutMultiModel: React.FC<{ p: MultiModelProduct, t: (k:string)=>string }> = ({ p, t }) => (
    <div>
        <div className="mb-12">
            <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs">{p.tag}</span>
            <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-6">{p.name}</h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 whitespace-pre-line">{p.details || p.desc}</p>
            {p.features && (
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 mb-12">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                        <Star className="w-4 h-4 mr-2 text-yellow-400" /> {t('detail.features')}
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                        {p.features.map((f, i) => (
                             <li key={i} className="text-sm text-slate-500 flex items-start">
                                <Check className="w-3 h-3 mt-1 mr-2 text-slate-300" /> {f}
                             </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {p.models.map((m, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-lg p-4 flex flex-col items-center shadow-sm w-full">
                    <div className="w-full aspect-square flex items-center justify-center mb-4 bg-slate-50 rounded">
                        <img src={m.image} alt={m.modelName} className="max-w-full max-h-full object-contain" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 text-center">{m.modelName || m.name}</h3>
                </div>
            ))}
        </div>

        {p.specsTitle && p.specs && (
            <div className="mt-16 max-w-4xl mx-auto">
                <h4 className="text-lg font-bold text-slate-900 mb-6 text-center border-b pb-4">{p.specsTitle || t('detail.specs')}</h4>
                <div className="border border-slate-200 rounded-lg overflow-hidden text-sm">
                    <table className="w-full text-center">
                        <tbody className="divide-y divide-slate-100">
                            {Object.entries(p.specs).map(([k, v]) => (
                                <tr key={k}>
                                    <td className="p-4 bg-slate-50 text-slate-500 font-medium w-1/3 border-r border-slate-100">{k}</td>
                                    <td className="p-4 text-slate-900 font-medium whitespace-pre-line">{v}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )}
    </div>
);

const LayoutPropCustom: React.FC<{ p: PropCustomProduct, t: (k:string)=>string }> = ({ p, t }) => (
    <div>
        <div className="mb-12 text-left max-w-5xl mx-auto">
            <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs">{p.tag}</span>
            <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-6">{p.name}</h1>
            <p className="text-lg text-slate-600 leading-relaxed">{p.intro}</p>
        </div>

        <div className="flex flex-col items-center mb-20 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg flex flex-col items-center justify-center border border-slate-100 p-8 mb-10 shadow-sm w-full max-w-2xl">
                    <img src={p.image} alt={p.name} className="max-w-full h-auto object-contain mb-4" />
                    <p className="font-bold text-slate-900 text-xl">{p.imageLabel}</p>
            </div>

            <div className="w-full">
                <h4 className="text-lg font-bold text-slate-900 mb-4 text-center border-b pb-4">{t('detail.specs')}</h4>
                <div className="border border-slate-200 rounded-lg overflow-hidden text-sm">
                    <table className="w-full text-center">
                        <tbody className="divide-y divide-slate-100">
                            {p.specs && Object.entries(p.specs).map(([label, val]) => (
                                <tr key={label}>
                                    <td className="p-3 bg-slate-50 text-slate-500 font-medium w-1/3 border-r border-slate-100">{label}</td>
                                    <td className="p-3 text-slate-900 font-medium whitespace-pre-line">{val}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className="border-t border-slate-100 pt-16 max-w-6xl mx-auto">
            <div className="mb-12 text-center">
                <p className="text-blue-600 font-bold text-xl mb-6">{p.bottomContent.header}</p>
                <p className="text-slate-600 leading-loose whitespace-pre-line">{p.bottomContent.subHeader}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                {p.bottomContent.columns.map((col, i) => (
                    <div key={i}>
                        <div className="text-center w-full">
                            <h5 className="text-blue-600 font-bold text-lg mb-4 border-b-2 border-blue-100 pb-2 inline-block">{col.title}</h5>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed text-center">{col.desc}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <img src={p.bottomContent.bottomImage} alt="應用範例" className="w-1/2 h-auto rounded-lg shadow-sm border border-slate-100" />
            </div>
        </div>
    </div>
);

const LayoutDefault: React.FC<{ p: any, t: (k:string)=>string }> = ({ p, t }) => (
    <div className="grid md:grid-cols-2 gap-16 items-stretch">
        <div className="space-y-8 flex flex-col h-full">
            <div>
                <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs">{p.tag}</span>
                <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-6">{p.name}</h1>
                <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line mb-4">{p.details || p.desc}</p>
            </div>
            {p.features && (
                <div className="bg-slate-50 p-8 rounded-lg border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                         <Star className="w-4 h-4 mr-2 text-yellow-400" /> {t('detail.features')}
                    </h4>
                    <ul className="space-y-3">
                        {p.features.map((f: string, i: number) => (
                            <li key={i} className="text-sm text-slate-500 flex items-start">
                                <Check className="w-3 h-3 mt-1 mr-2 text-slate-300" /> {f}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            
            {/* Some default layouts might have a dimension image if structure allows, but mostly covered by other layouts */}
        </div>
        
        <div className="space-y-8 flex flex-col">
            <div className="bg-white rounded-lg flex flex-col items-center justify-center border border-slate-100 p-6">
                    <img src={p.image} alt={p.name} className="max-w-full h-auto object-contain" />
                    {p.imageLabel && <p className="mt-4 font-bold text-slate-900 text-lg">{p.imageLabel}</p>}
            </div>
            
            <div>
                {p.specs && (
                <>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 text-center">{t('detail.specs')}</h4>
                    <div className="border border-slate-100 rounded-lg overflow-hidden text-[11px]">
                        <table className="w-full text-center">
                            <tbody>
                                {Object.entries(p.specs).map(([label, val]) => (
                                    <tr key={label} className="border-b border-slate-50">
                                        <td className="p-3 bg-slate-50/50 text-slate-400 font-medium w-1/3">{label}</td>
                                        <td className="p-3 text-slate-900 font-medium whitespace-pre-line">{val as string}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
                )}
            </div>
        </div>
    </div>
);

export default ProductDetail;