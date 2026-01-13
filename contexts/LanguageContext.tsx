import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'zh' | 'en' | 'ja';

const dictionary: Record<Language, Record<string, string>> = {
  zh: {
    'nav.about': '關於紹凱',
    'nav.products': '核心技術',
    'nav.custom': '系統客製',
    'nav.contact': '聯絡我們',
    'hero.badge': 'Precision Control Expertise',
    'hero.title.1': '精準控制',
    'hero.title.2': '引領工業',
    'hero.title.3': '動能',
    'hero.desc': '紹凱動能科技深耕自動化領域，提供最精確的張力與糾邊控制解決方案。',
    'hero.cta': '查看產品線',
    'about.title': '公司簡介',
    'about.content.1': '紹凱動能科技股份有限公司成立於民國90年10月1日。成立初期，公司業務以配合機械廠，擔任機械自動控制系統施工為主。',
    'about.content.2': '因應公司業務的擴展，我們於92年5月份，正式遷入台中工業區，並佔有一席之地。經過多年來的努力與成長，如今已成為一體質優良的中小企業。',
    'vision.title': '企業願景',
    'vision.1.title': '領先技術',
    'vision.1.desc': '不斷優化控制器演算法，滿足日益嚴苛的生產需求。',
    'vision.2.title': '在地服務',
    'vision.2.desc': '位於台中工業區，提供全台最即時的技術支援與維修。',
    'vision.main.title': '紹凱動能科技股份有限公司 (SKTC) 是專業從事工業自動化控制系統研發與製造的領先企業。',
    'vision.main.desc': '我們專精於各種捲筒材料（如紙張、薄膜、紡織品、碳纖維）在加工過程中的張力穩定與邊緣對齊控制。憑藉多年的現場經驗與深厚的工程底蘊，以及紮實的本職學能及不斷創新學習的精神，紹凱動能科技不僅成為了國內外眾多機械廠指定的長期合作夥伴，也期盼能為台灣的經濟發展盡綿薄之力。',
    'products.title': '核心技術產品',
    'products.subtitle': 'Select a product for details',
    'products.learn_more': '了解更多',
    'custom.title': '系統客製化方案',
    'custom.desc': '針對特殊材料 or 老舊產線升級，我們提供完整的數位化改造服務，從設計到安裝一氣糾成。',
    'custom.item.1': '專人現場實地勘查與動能測試',
    'custom.item.2': '多機連鎖控制系統規劃',
    'custom.hotline': '技術諮詢熱線',
    'contact.title': '聯繫紹凱科技',
    'contact.btn': '發送諮詢需求',
    'contact.name': '姓名',
    'contact.company': '公司',
    'contact.email': '您的信箱',
    'contact.content': '諮詢內容...',
    'footer.desc': '精密工業控制解決方案專家。',
    'footer.nav': '網站導覽',
    'footer.office': '辦公資訊',
    'footer.rights': '© 2024 SUNSHINE KINETICS TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.',
    'detail.back': '返回首頁',
    'detail.intro': '產品介紹',
    'detail.features': '產品特色',
    'detail.appearance': '產品外觀',
    'detail.specs': '產品規格說明',
    'detail.dims': '尺寸圖',
    'detail.usage': '變位控制器使用圖示如下'
  },
  en: {
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.custom': 'Solutions',
    'nav.contact': 'Contact',
    'hero.badge': 'Precision Control Expertise',
    'hero.title.1': 'Precision Control',
    'hero.title.2': 'Driving',
    'hero.title.3': 'Industrial Kinetics',
    'hero.desc': 'SKTC specializes in automation, providing the most precise tension and web guiding control solutions.',
    'hero.cta': 'View Products',
    'about.title': 'Company Profile',
    'about.content.1': 'Sunshine Kinetics Technology Co., Ltd. was established on October 1, 2001. Initially, the company focused on constructing mechanical automatic control systems for machinery manufacturers.',
    'about.content.2': 'In May 2003, we moved to Taichung Industrial Park to expand our operations. Through years of effort, we have grown into a high-quality SME.',
    'vision.title': 'Our Vision',
    'vision.1.title': 'Leading Technology',
    'vision.1.desc': 'Continuously optimizing controller algorithms to meet increasingly stringent production demands.',
    'vision.2.title': 'Local Service',
    'vision.2.desc': 'Located in Taichung Industrial Park, providing the most immediate technical support and maintenance in Taiwan.',
    'vision.main.title': 'SKTC is a leader in R&D and manufacturing of industrial automation control systems.',
    'vision.main.desc': 'We specialize in tension stability and edge alignment control for various web materials (paper, film, textiles, carbon fiber). With years of field experience and deep engineering expertise, SKTC has become a long-term partner for many domestic and foreign machinery manufacturers.',
    'products.title': 'Core Products',
    'products.subtitle': 'Select a product for details',
    'products.learn_more': 'Learn More',
    'custom.title': 'Customized Solutions',
    'custom.desc': 'For special materials or old production line upgrades, we provide complete digital transformation services from design to installation.',
    'custom.item.1': 'On-site survey and kinetic testing',
    'custom.item.2': 'Multi-machine interlock control system planning',
    'custom.hotline': 'Technical Hotline',
    'contact.title': 'Contact SKTC',
    'contact.btn': 'Send Inquiry',
    'contact.name': 'Name',
    'contact.company': 'Company',
    'contact.email': 'Email',
    'contact.content': 'Message...',
    'footer.desc': 'Experts in precision industrial control solutions.',
    'footer.nav': 'Navigation',
    'footer.office': 'Office Info',
    'footer.rights': '© 2024 SUNSHINE KINETICS TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.',
    'detail.back': 'Back to Home',
    'detail.intro': 'Introduction',
    'detail.features': 'Features',
    'detail.appearance': 'Appearance',
    'detail.specs': 'Specifications',
    'detail.dims': 'Dimensions',
    'detail.usage': 'Usage Diagrams'
  },
  ja: {
    'nav.about': '会社概要',
    'nav.products': '製品紹介',
    'nav.custom': 'ソリューション',
    'nav.contact': 'お問い合わせ',
    'hero.badge': 'Precision Control Expertise',
    'hero.title.1': '精密制御',
    'hero.title.2': '産業の動力を',
    'hero.title.3': '牽引',
    'hero.desc': 'SKTCは自動化分野に特化し、最も精密な張力および蛇行修正制御ソリューションを提供します。',
    'hero.cta': '製品一覧',
    'about.title': '会社概要',
    'about.content.1': '紹凱動能科技股份有限公司は2001年10月1日に設立されました。当初は機械メーカー向けの自動制御システムの施工を主業務としていました。',
    'about.content.2': '業務拡大に伴い、2003年5月に台中工業団地へ移転しました。長年の努力を経て、現在では優良な中小企業へと成長しました。',
    'vision.title': '企業ビジョン',
    'vision.1.title': '先端技術',
    'vision.1.desc': '制御アルゴリズムを継続的に最適化し、厳格化する生産要件に応えます。',
    'vision.2.title': '地域密着サービス',
    'vision.2.desc': '台中工業団地に拠点を置き、台湾全土で迅速な技術サポートとメンテナンスを提供します。',
    'vision.main.title': 'SKTCは産業用自動化制御システムの研究開発と製造におけるリーディングカンパニーです。',
    'vision.main.desc': '紙、フィルム、繊維、炭素繊維などのウェブ材料加工における張力安定とエッジアライメント制御を専門としています。長年の現場経験と深い工学的知識に基づき、国内外の多くの機械メーカーの長期的なパートナーとなっています。',
    'products.title': 'コア製品',
    'products.subtitle': '詳細を選択してください',
    'products.learn_more': '詳細を見る',
    'custom.title': 'システムカスタマイズ',
    'custom.desc': '特殊材料や旧式生産ラインのアップグレードに対し、設計から設置まで完全なデジタル化サービスを提供します。',
    'custom.item.1': '専門家による現地調査と動作テスト',
    'custom.item.2': '多機連動制御システムの計画',
    'custom.hotline': '技術相談ホットライン',
    'contact.title': 'お問い合わせ',
    'contact.btn': '送信',
    'contact.name': 'お名前',
    'contact.company': '会社名',
    'contact.email': 'メールアドレス',
    'contact.content': 'お問い合わせ内容...',
    'footer.desc': '精密産業制御ソリューションのエキスパート。',
    'footer.nav': 'サイトマップ',
    'footer.office': 'オフィス情報',
    'footer.rights': '© 2024 SUNSHINE KINETICS TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.',
    'detail.back': 'ホームに戻る',
    'detail.intro': '製品紹介',
    'detail.features': '製品の特徴',
    'detail.appearance': '製品外観',
    'detail.specs': '仕様',
    'detail.dims': '寸法図',
    'detail.usage': '使用例'
  }
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string) => {
    return dictionary[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};