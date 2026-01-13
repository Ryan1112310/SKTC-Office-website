import { ProductData, TabbedProduct, EpcCustomProduct, PropCustomProduct } from '../types';
import { Language } from '../contexts/LanguageContext';

// Shared Images to reduce redundancy
const IMAGES = {
    tensionCtrl: {
        t7: { src: 'https://duk.tw/F728vd.png', title: 'TL-60SKTi-Plus<br>7.0吋' },
        t4: { src: 'https://duk.tw/ZOPpXj.png', title: 'TL-60SKTi<br>4.3吋' },
        tb: { src: 'https://duk.tw/biyaCX.jpg', title: 'TL-60SKT-B<br>&nbsp;' },
        calc: { src: 'https://duk.tw/7icc8l.jpg', title: 'TC-50SKT' },
    },
    detect: {
        lc60: { src: 'https://duk.tw/CkSkVF.jpg' },
        lc60n: { src: 'https://duk.tw/HpCgfM.jpg' },
        lc300: { src: 'https://duk.tw/IO9Muq.jpg' },
        lc1000: { src: 'https://duk.tw/p1b5sa.jpg' },
        lc60lx: { src: 'https://duk.tw/LUlWyV.jpg' },
        lcr50: { src: 'https://duk.tw/h0utza.jpg' },
        lcr50bp: { src: 'https://duk.tw/e79e89.jpg' }
    },
    epc: {
        mid: ['https://duk.tw/VMmE8p.jpg', 'https://duk.tw/DzCB3H.jpg', 'https://duk.tw/JYY76h.jpg', 'https://duk.tw/iRGfq9.jpg'],
        bot: ['https://duk.tw/uFheSX.jpg', 'https://duk.tw/V3f7n8.jpg', 'https://duk.tw/SpfF4Z.jpg', 'https://duk.tw/ra0uPw.jpg']
    },
    ind: {
        dim: { src: 'https://duk.tw/mJO0l7.jpg', title: 'Dimension / 尺寸圖' },
        main: 'https://duk.tw/lwZ4tM.jpg',
        usage: ['https://duk.tw/Xud3wy.jpg', 'https://duk.tw/cixpvP.jpg']
    },
    brake: {
        m1: 'https://duk.tw/F87G5d.jpg',
        m2: 'https://duk.tw/1sXlUU.jpg',
        m3: 'https://duk.tw/K1LCA3.jpg'
    },
    amp: 'https://duk.tw/sRcucf.jpg',
    circuit: [
        'https://duk.tw/qHv0Og.jpg', 'https://duk.tw/bYuqEl.jpg', 'https://duk.tw/rm8QnL.jpg',
        'https://duk.tw/JpN9rK.jpg', 'https://duk.tw/NZcrZF.jpg', 'https://duk.tw/Q0Nxv3.jpg',
        'https://duk.tw/8qz5bc.jpg'
    ],
    trans: 'https://duk.tw/mL3S69.jpg',
    transDim: 'https://duk.tw/7iUISh.jpg',
    speed: 'https://duk.tw/PSBG6k.png',
    speedDim: 'https://duk.tw/GZMeUf.jpg',
    led: 'https://duk.tw/YDkuKE.jpg',
    prop: {
        main: 'https://duk.tw/PNNIBC.jpg',
        bot: 'https://duk.tw/tZIXVv.jpg'
    }
};

const PRODUCTS_ZH: Record<string, ProductData> = {
    'tension-ctrl': {
        name: '張力控制器',
        tag: 'Tension Controller',
        icon: 'settings-2',
        desc: '自動張力控制系統，適用於各種卷材加工。',
        layout: 'tabbed',
        tabs: [
            {
                id: 'auto',
                label: '自動張力',
                content: {
                    intro: `自動型張力控制器可自動控制長呎吋材料的放卷、中間輔助軸、收卷時的材料張力為一個衡定的值。可輸出 0~24V的控制電壓去驅動磁粉煞車、磁粉離合器，或對伺服馬達、變頻器發出0~5或0~10V扭矩指令電壓。可應用於印刷設備、紡織機械、造紙機械、塑料押出/淋膜設備 、卷對卷設備 Roll to Roll (R2R)\n\n能測量卷料的實際張力，並根據設定的目標張力及實測張力經張力傳感器反饋進行PID自動調節， 獲得恆張力或錐度張力控制,全自動張力控制器具有極高的張力控制精度，適用於對張力控制精度要求較高的場合使用。`,
                    features: [
                        '簡易的歸零和配重調整',
                        '卓越的響應度與穩定性',
                        '能與多種規格的張力檢知器連接',
                        '擁有兩軸切換自動紙接合控制',
                        '具備多種傳輸介面'
                    ],
                    images: [IMAGES.tensionCtrl.t7, IMAGES.tensionCtrl.t4, IMAGES.tensionCtrl.tb],
                    specsTitle: '產品規格說明',
                    specsHtml: `
                        <table class="w-full text-center text-sm border-collapse">
                            <thead class="bg-slate-50 text-slate-600">
                                <tr>
                                    <th class="p-3 border border-slate-200 text-center">型號</th>
                                    <th class="p-3 border border-slate-200 text-center">TL-60SKTi-Plus TL-60SKTi</th>
                                    <th class="p-3 border border-slate-200 text-center">TL-60SKT-B</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100">
                                <tr><td class="p-3 border border-slate-200 font-medium">通訊介面</td><td class="p-3 border border-slate-200">LAN</td><td class="p-3 border border-slate-200">Modbus RTU RS-485</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">輸入電源</td><td class="p-3 border border-slate-200">AC 100 ~ 240V 3.1A ， 50/60Hz</td><td class="p-3 border border-slate-200">AC 100 ~ 240V 2A ， 50/60Hz</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">額定張力</td><td colspan="2" class="p-3 border border-slate-200">1 ~ 18000N (0.1Kg ~ 1800Kg)</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">輸入解析度</td><td colspan="2" class="p-3 border border-slate-200">11 Bit</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">輸出解析度</td><td colspan="2" class="p-3 border border-slate-200">12 Bit</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">荷重元電壓</td><td colspan="2" class="p-3 border border-slate-200">±5V</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">信號輸入範圍</td><td colspan="2" class="p-3 border border-slate-200">0 ~ 5 V/V</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">ADC 取樣速率</td><td colspan="2" class="p-3 border border-slate-200">>200Hz</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">輸出控制</td><td colspan="2" class="p-3 border border-slate-200">DC 0~5V / 0~10V<br>DC 0~±5V / 0~±10V<br>磁粉放大器信號 DC 0~24V (4A)<br>電空轉換器信號 DC 4~20mA</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">接點輸出</td><td colspan="2" class="p-3 border border-slate-200">120VAC 8A, 250VAC 10A, 30VDC 10A</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">檢知器規格</td><td colspan="2" class="p-3 border border-slate-200">LC / LCR / LCS</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">類比輸入</td><td colspan="2" class="p-3 border border-slate-200">速度設定、卷軸預備力<br>張力遞減值設定、卷徑信號<br>新軸輸出百分比</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">作業溫度</td><td colspan="2" class="p-3 border border-slate-200">0 ~ 50°C</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">操作介面語言</td><td colspan="2" class="p-3 border border-slate-200">中文 / 英文</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">重量</td><td colspan="2" class="p-3 border border-slate-200">約 3.7 Kg</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">面板開孔尺吋</td><td colspan="2" class="p-3 border border-slate-200">232㎜ x 150㎜</td></tr>
                            </tbody>
                        </table>
                    `,
                    dimImages: [{ src: 'https://duk.tw/vKVuLw.jpg', title: 'TL-60SKTi-Plus' }, { src: 'https://duk.tw/bV9ooO.jpg', title: 'TL-60SKTi' }, { src: 'https://duk.tw/V0i5lk.jpg', title: 'TL-60SKT-B', isThird: true }]
                }
            },
            {
                id: 'calc',
                label: '演算張力',
                content: {
                    intro: `演算型張力控制器是透過檢測捲框之迴轉數方式，累計厚度檢測方式進行卷徑演算控制，此方式需先對控制裝置設定初始直徑和材料厚度，依據卷軸每轉一圈在初始直徑基礎上減去（放卷）或加上（收卷）材料厚度，以計算目前卷徑值，應卷徑之增加或減少而變化其出力電壓，此為開迴路式半自動張力控制裝置。`,
                    features: [
                        '簡易的調整及操作可進行張力控制',
                        '可對應各種情況的高性能模式',
                        '擁有兩種演算模式',
                        '具備ModeBus RS-485傳輸介面'
                    ],
                    images: [IMAGES.tensionCtrl.calc],
                    specsTitle: '產品規格說明',
                    specsHtml: `
                        <table class="w-full text-center text-sm border-collapse">
                            <tbody class="divide-y divide-slate-100">
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">顯示範圍</td><td class="p-3 border border-slate-200">0.1 ~ 100.0%</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">卷徑及厚度</td><td class="p-3 border border-slate-200">1 ~ 9999μm</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">演算模式</td><td class="p-3 border border-slate-200">線性 / 五段非線性設定</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">控制信號輸出</td><td class="p-3 border border-slate-200">DC 0~5V / 0~10V</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">磁粉放大器信號</td><td class="p-3 border border-slate-200">DC 0~24V (4A)</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">電空轉換器信號</td><td class="p-3 border border-slate-200">DC 4~20mA</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">卷徑測定方式</td><td class="p-3 border border-slate-200">近接開關 / 計米輪 / 超音波傳感器 / 類比電壓 (0~5Vdc 0~10Vdc)</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">信號響應</td><td class="p-3 border border-slate-200">0.1 mS / 10 KHz</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">類比輸出</td><td class="p-3 border border-slate-200">+5, +10V, 4 ~ 20mA, 0 ~ 24V</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">通訊介面</td><td class="p-3 border border-slate-200">Modbus RTU RS-485</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">輸入電源</td><td class="p-3 border border-slate-200">AC 100~240V 2A ， 50/60Hz</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">作業溫度</td><td class="p-3 border border-slate-200">0 ~ 50°C</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">操作介面語言</td><td class="p-3 border border-slate-200">中文 / 英文</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">重量</td><td class="p-3 border border-slate-200">約 3.7 Kg</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">面板開孔尺吋</td><td class="p-3 border border-slate-200">232㎜ x 150㎜</td></tr>
                            </tbody>
                        </table>
                    `,
                    dimImages: [{ src: 'https://duk.tw/ZU0VP5.jpg', title: 'TC-50SKT' }]
                }
            }
        ]
    },
    'tension-detect': {
        name: '張力檢知器系列',
        tag: 'Tension Detector Series',
        icon: 'activity',
        layout: 'three-rows',
        desc: '高剛性、高靈敏度的張力檢測元件。',
        models: [
            { name: 'LC-60KG-B<br><span class="text-xs font-normal text-slate-500">12kg / 20kg / 35kg / 60kg / 100kg</span>', image: IMAGES.detect.lc60.src },
            { name: 'LC-60KG-B-N25<br><span class="text-xs font-normal text-slate-500">12kg / 20kg / 35kg / 60kg / 100kg</span>', image: IMAGES.detect.lc60n.src },
            { name: 'LC-300KG-B<br><span class="text-xs font-normal text-slate-500">300KG / 500KG</span>', image: IMAGES.detect.lc300.src },
            { name: 'LC-1000KG-B', image: IMAGES.detect.lc1000.src },
            { name: 'LC-60KG-B-LX<br><span class="text-xs font-normal text-slate-500">12kg / 20kg / 35kg / 60kg / 100kg</span>', image: IMAGES.detect.lc60lx.src },
            { name: 'LCR-50KG-B<br><span class="text-xs font-normal text-slate-500">3kg / 12kg / 25kg / 50kg</span>', image: IMAGES.detect.lcr50.src },
            { name: 'LCR-50KG-B-BP40<br><span class="text-xs font-normal text-slate-500">3kg / 12kg / 25kg / 50kg</span>', image: IMAGES.detect.lcr50bp.src }
        ],
        specsTitle: '產品規格說明',
        specs: { 
            '重複性': '0.02%',
            '輸入阻抗': '> 5MΩ',
            '輸出阻抗': '2.3KΩ',
            '補償溫度範圍': '-10°C ~ +50°C',
            '工作溫度範圍': '-20°C ~ +60°C',
            '溫度靈敏度漂移': '0.0015% FS / °C',
            '溫度零點漂移': '0.0026% FS / °C',
            '安全過載': '150%',
            '電纜長度': '5M',
            '電纜連接': '紅 ( +5V )、白 ( 信號 1 )、綠 ( 信號 2 )、黑 ( 0V )'
        }
    },
    'epc-system': {
        name: 'EPC糾邊系統',
        tag: 'EPC System',
        icon: 'layout',
        layout: 'epc-custom',
        desc: '提供高精度的材料邊緣或中心位置自動校正。',
        intro: `DRS系列 材料導正系統 - 糾偏中間導引裝置 (Center Position Control)，並使用檢知器偵測卷物邊緣或中心位置或印刷線，讓卷物能穩定且整齊正確的保持在位置上，亦稱為「糾偏對中」裝置。\n\n廣泛應用於紡織、印刷、塑膠模、包裝材料、紙製品製造業，能提升品質、降低損耗並減少人力，是產業自動化不可缺少的產品。`,
        middleRow: [
            { image: IMAGES.epc.mid[0], label: '材料導正系統 (糾偏裝置)<br>Web Guiding Systems' },
            { image: IMAGES.epc.mid[1], label: '材料導正系統 (糾偏裝置)<br>Web Guiding Systems<br>(加裝紙接台)' },
            { image: IMAGES.epc.mid[2], label: '材料導正系統 (糾偏裝置)<br>Web Guiding Systems<br>(控制器分離型)' },
            { image: IMAGES.epc.mid[3], label: '搖擺式導正器 (糾偏裝置)<br>Pivoting Guider<br>(控制器分離型)' }
        ],
        bottomRow: [
            { image: IMAGES.epc.bot[0], label: '線條 / 邊緣追蹤電眼<br>Digital Control Sensor<br>工作方式 : 光電式' },
            { image: IMAGES.epc.bot[1], label: '邊緣追蹤電眼<br>Ultrasonic-edge Sensor<br>工作方式 : 超音波' },
            { image: IMAGES.epc.bot[2], label: '紅外線電眼<br>Infrared-ray edge Sensor<br>工作方式 : 紅外線' },
            { image: IMAGES.epc.bot[3], label: '電動缸<br>Actuator' }
        ]
    },
    'ind-ctrl': {
        name: '工業用控制器',
        tag: 'Industrial Controller',
        icon: 'cpu',
        layout: 'industrial-split',
        desc: '多功能數位化中央控制核心，專為連續性材料開發。',
        details: 'DM-96SKT 位置檢出控制器是專門為布料、塑料等連續性材料而專門開發的控制器商品。',
        features: [
            '專為布料、塑料等連續性材料設計',
            '可依驅動器選擇輸出不同類比電壓訊號(DC+5V/+10V/±5V/±10V)',
            '解決機械間微小空隙的控制難題由控制器進行張力的補償、修正來達到線上材料張力的恆定'
        ],
        dimensionImage: IMAGES.ind.dim,
        image: IMAGES.ind.main,
        imageLabel: 'DM-96SKT',
        specs: {
            '顯示範圍': '0.1 ~ 100.0 Kg / Nt-m',
            '輸入解析度': '11 BIT',
            '輸出解析度': '12 BIT',
            '荷重元電壓': '±12V / 5V (線性電阻)',
            '信號輸入範圍': '5 / 10 / 4~20mA',
            'ADC 取樣速率': '> 200Hz',
            '類比輸出': '+5, +10V, ±10V, ±5V, 4 ~ 20mA',
            '通訊介面': 'Modbus RTU RS-485',
            '輸入電源': 'AC 100 ~ 240V 2A ， 50/60Hz',
            '作業溫度': '0 ~ 50°C',
            '操作介面語言': '中文 / 英文'
        },
        usageImages: IMAGES.ind.usage
    },
    'powder-brake': {
        name: '磁粉煞車控制器',
        tag: 'Powder Brake Controller',
        icon: 'zap',
        layout: 'three-rows',
        desc: '精確控制磁粉離合器/煞車器之輸出轉矩。',
        intro: '透過定電流控制技術，確保煞車轉矩在各種轉速下皆能保持線性平滑。',
        models: [
            { name: 'TB-40SKT', image: IMAGES.brake.m1 },
            { name: 'TB-41SKT', image: IMAGES.brake.m2 },
            { name: 'TB-42SKT', image: IMAGES.brake.m3 }
        ],
        specsTitle: '產品規格說明',
        specs: {
            '輸入電源': 'AC 110V / 240V',
            '訊號輸入電壓': 'DC 0 ~ 10V',
            '訊號輸出電壓': 'DC 0 ~ 24V  4A / 6A / 8A',
            '異常輸出接點': 'DC 30V / 2A\nAC 250V / 0.25A',
            '工作溫度': '0 ~ 50°C'
        }
    },
    'signal-amp': {
        name: '張力檢知訊號放大器',
        tag: 'Signal Amplifier',
        icon: 'radio',
        image: IMAGES.amp,
        imageLabel: 'LC-AMP 01A SKT',
        desc: '將張力訊號精準轉換為工業標準輸出。',
        details: 'LC-AMP 01A SKT 型張力信號放大器與LC、LCR系列張力檢知器搭配使用，根據紙張、電線、各種薄膜等的放卷、收卷、中間輔助軸所產生的張力相應電壓值輸出至紀綠器、外設張力表、可編程控制器等設備的裝置。',
        features: [
            '可外接張力顯示表',
            '每側的張力可分別做歸零與配重準位矯正',
            '每側的張力與總張力可分別切換顯示張力數據',
            '依設備需求，可接受本公司全系列張力檢知器商品信號',
            '依設備流程需求，可設定張力檢測為上拉模式或下壓摸式',
            '將功能控制在最小限度內，實現產品小型化，可安裝在機械間的微小空隙',
            '通過輸出信號，可實現遠距離張力數據顯示，同時可使用可程式控制器與顯示表集中顯示與控制個工序張力數據'
        ],
        specs: { 
            '輸入電源': 'AC100~240V 5A ， 50/60Hz',
            '額定張力': '1至10000N (0.1kg~1000kg)',
            '適用檢知器系列': 'LC / LCR / LCR-A / N25',
            '控制輸出信號': '單邊0~5V / 雙邊0~10V',
            '檢知器電源': '5 VDC',
            '輸入信號模式': 'PULL拉模式 / PRESS壓模式',
            '張力信號切換': '左側、右側、總張力',
            '張力信號調整': '左、右兩側分別歸零、配重調整',
            '安裝方式': '支架固定',
            '環境溫度': '0 ~ 50℃',
            '環境濕度': '35 ~ 85% RH',
            '重量': '約 0.5kg'
        }
    },
    'circuit-design': {
        name: '電子電路設計',
        tag: 'Electronic Circuit Design',
        icon: 'microchip',
        isMultiModel: true,
        desc: '致力於自動控制系統的完美化，提供專業電路設計服務。',
        details: '紹凱動能致力於自動控制系統的完美化，如何能夠讓各種機械的動作能夠更為流暢，訊號的傳輸能夠更為精確，發生故障的機會降到最低。為此，我們在電子電路的設計上著實下了一番苦心，除了提供優良系統元件之外，也提高了我們研發產品的精準度。\n\n以下我們列出工業電子上經常使用的電路板供參考，我們也承接有特殊用途的電路板設計的工作，歡迎您和我們聯絡。',
        models: [
            { modelName: '4P RELAY板', image: IMAGES.circuit[0] },
            { modelName: '8P RELAY板', image: IMAGES.circuit[1] },
            { modelName: '40P I/O 板', image: IMAGES.circuit[2] },
            { modelName: '50P I/O 板', image: IMAGES.circuit[3] },
            { modelName: 'SSR 固態繼電器板', image: IMAGES.circuit[4] },
            { modelName: '正反向板', image: IMAGES.circuit[5] },
            { modelName: '蘭紗控制板', image: IMAGES.circuit[6] }
        ]
    },
    'trans-display': {
        name: '透光率顯示器',
        tag: 'Light Trans. Display',
        icon: 'eye',
        layout: 'centered',
        image: IMAGES.trans,
        imageLabel: 'ET07SKT',
        desc: '即時監測透明或半透明材料之厚度與透光度。',
        details: '應用於光學膜、塑膠膜生產線，提供量化的數據監控。',
        specs: { 
            '波長': '570 / 940 奈米 (5700 / 9400Ǻ)',
            '準確度': '±2%',
            '重複性': '1%',
            '測量範圍': '0 ~ 100% 光傳輸',
            '溫度範圍': '0°F ~ 100°F',
            '濕度範圍': '0 ~ 100% 非凝結',
            '樣品厚度': '0 ~ 0.25 英寸',
            '樣品尺寸': '2 x 2 最小英寸',
            '雜射光影響': '不透過雜射光影響',
            '輸入電源': '9V鹼性電池一顆'
        },
        customBottomHtml: `<div class="mt-16 text-center max-w-3xl mx-auto"><h4 class="text-lg font-bold text-slate-900 mb-6 border-b pb-4 inline-block px-8">尺寸圖</h4><div class="flex justify-center"><div class="bg-white border border-slate-200 rounded-lg p-4 shadow-sm inline-block"><img src="${IMAGES.transDim}" alt="尺寸圖" class="max-w-full h-auto object-contain"></div></div></div>`
    },
    'speed-display': {
        name: '速度顯示器',
        tag: 'Speed Display',
        icon: 'gauge',
        layout: 'centered',
        image: IMAGES.speed,
        imageLabel: 'SPM-233BR',
        desc: '大螢幕高亮度轉速/線速即時顯像。',
        details: '採用高品質數位顯示管，確保在強光環境下依然清晰。',
        specs: { 
            '顯示範圍': '0 ~ 999',
            '顯示數值': '外部脈波信號 / 通訊介面',
            '信號刻度': '1, 0.1, 0.01, 0.001 M/Pulse',
            '通訊介面': 'Modbus RS-485',
            '輸入電源': 'AC 100 ~ 240V  1A  50/60Hz',
            '作業溫度': '0 ~ 50°C'
        },
        customBottomHtml: `<div class="mt-16 text-center max-w-3xl mx-auto"><h4 class="text-lg font-bold text-slate-900 mb-6 border-b pb-4 inline-block px-8">尺寸圖</h4><div class="flex justify-center"><div class="bg-white border border-slate-200 rounded-lg p-4 shadow-sm inline-block"><img src="${IMAGES.speedDim}" alt="尺寸圖" class="max-w-full h-auto object-contain"></div></div></div>`
    },
    'led-banner': {
        name: 'LED字幕跑馬燈',
        tag: 'LED Banner',
        icon: 'monitor',
        image: IMAGES.led,
        imageLabel: 'MD-A05BC',
        desc: '工業訊息公告與生產指標即時看板。',
        details: '支援多種通訊協議，可直接顯示來自伺服器或 PLC 的訊息，實現工業流程的可視化管理。',
        features: [
            '可同時顯示二行英文與數字',
            '可顯示日期、時間',
            '可顯示中英文、符號、數字、圖形',
            '停電時可保留資料內容',
            '鐵烤漆，外型美觀，易安裝'
        ],
        specs: { 
            '輸入電源': '85~264 VAC',
            '燈體直徑': '5 mm',
            '點間距': '2.62 mm',
            '顯示顏色': '紅、橙、綠',
            '燈體亮度': '室內一般亮度',
            '模組點數': '80*16 dot',
            '每字尺寸': '中文 107*99 ㎜、英文,數字 46*61 ㎜',
            '靜態字數': '5中文10英文10數字',
            '工作環境': '0~50 ℃',
            'LED顯示面積(w*h)': '600*120 ㎜',
            '外框尺寸(w*h*d)': '619*146*70 ㎜',
            '通訊格式': 'RS-485、RS-485 to USB\n(可應用於電腦,人機,PLC,含RS-485的專用機)'
        }
    },
    'prop-power-unit': {
        name: '比例式電子/油壓動力機',
        tag: 'Proportional Power Unit',
        icon: 'zap',
        layout: 'prop-custom',
        desc: '高精度比例式動力輸出系統，適用於精確壓力與流量控制需求。',
        intro: '本動力機結合比例式電子控制與高效油壓系統，提供極高穩定性與±0.1㎜的定位精度。',
        image: IMAGES.prop.main,
        imageLabel: 'HE0515C',
        specs: {
            '馬達電壓': '3Φ 220/380 VAC for motor',
            '馬達電力': '370W (1/2 HP)',
            '控制器電壓': '220/240 VAC for controller(350w)',
            '比例閥電壓電流規格': '0.68A , 24VDC',
            '4口3位方向閥電壓電流': '1.20A , 24VDC',
            '油壓容量': '10L',
            '油壓工作壓力': '15BAR (15 kg)',
            '油壓流量(可調)': '0 to 5 L / min',
            '循環油規格': 'ISO VG 32 , H-LP 32',
            '最高許可環境溫度': '60℃',
            '工作溫度許可': '70℃',
            '油壓缸最大出力(比例式)': 'D=40㎜(150Kg) / D=50.8㎜(250Kg) / D=63.5㎜(420kg) / D=82.5㎜(700Kg)',
            '油壓缸最高速度(比例式)': 'D=40㎜(66㎜/s) / D=50.8㎜(40㎜/s) / D=63.5㎜(26㎜/s) / D=82.5㎜(15㎜/s)',
            '定位精度(比例式)': '±0.1㎜',
            '重量(含油)': '45 Kg',
            '外型尺寸': '471(500) ㎜ * 290 ㎜ * 445 ㎜'
        },
        bottomContent: {
            header: '對於需求高推力及準確的電眼定位設備均可採用HE0515比例式-電子/油壓動力機',
            subHeader: `應用於：收/放料平台導正系統，中段擺導正系統。\n適用產業：紙業、紡織業、印刷業、塑膠膜業、包裝材料業、橡膠業、薄金屬加工業..`,
            columns: [
                {
                    title: '中段擺輪導正系統',
                    desc: '放料平台與材料加工站的距離較長時，可在加工站前採用中段擺輪導正系統，經由HE0515比例式-電子/油壓動力機穩定的控制，依照電眼感測指示，左/右精確調整加工材料邊緣移動的整齊性，更可確保加工品質的精確度。'
                },
                {
                    title: '放料平台導正系統',
                    desc: '當加工材料邊緣不整齊時，可經由此HE0515比例式-電子/油壓動力機控制整座放料平台，依照電眼感測的指示，左右精確調整加工材料放料邊緣。'
                },
                {
                    title: '收料平台導正系統',
                    desc: '為了確保收料軸收料時材料邊緣平整性，收料平台導正系統經由HE0515比例式-電子/油壓動力機與感測電眼精確控制，將可提高精確的卷取品質。'
                }
            ],
            bottomImage: IMAGES.prop.bot
        }
    }
};

const PRODUCTS_EN: Record<string, ProductData> = {
    'tension-ctrl': {
        ...(PRODUCTS_ZH['tension-ctrl'] as TabbedProduct),
        name: 'Tension Controller',
        desc: 'Automatic tension control system for various roll material processing.',
        tabs: [
            {
                id: 'auto',
                label: 'Auto Tension',
                content: {
                    ...(PRODUCTS_ZH['tension-ctrl'] as TabbedProduct).tabs[0].content,
                    intro: 'The automatic tension controller maintains constant material tension during unwinding, intermediate auxiliary shaft processing, and winding to a constant value. It can output 0~24V control voltage to drive magnetic powder brakes/clutches, or send 0~5V/0~10V torque command voltage to servo motors/inverters. Applications: Printing equipment, Textile machinery, Paper machinery, Plastic extrusion/coating equipment, Roll to Roll (R2R) equipment.\n\nIt measures the actual tension of the roll material and performs PID automatic adjustment based on the set target tension and feedback from the tension sensor to achieve constant or tapered tension control. The fully automatic tension controller features extremely high control precision, suitable for applications with strict tension accuracy requirements.',
                    features: [
                        'Easy zero and weight adjustment',
                        'Excellent response and stability',
                        'Connectable to various tension detectors',
                        'Dual-axis switching automatic splice control',
                        'Multiple communication interfaces'
                    ],
                    specsTitle: 'Specifications',
                    specsHtml: `
                        <table class="w-full text-center text-sm border-collapse">
                            <thead class="bg-slate-50 text-slate-600">
                                <tr>
                                    <th class="p-3 border border-slate-200 text-center">Model</th>
                                    <th class="p-3 border border-slate-200 text-center">TL-60SKTi-Plus TL-60SKTi</th>
                                    <th class="p-3 border border-slate-200 text-center">TL-60SKT-B</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100">
                                <tr><td class="p-3 border border-slate-200 font-medium">Interface</td><td class="p-3 border border-slate-200">LAN</td><td class="p-3 border border-slate-200">Modbus RTU RS-485</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">Power Input</td><td class="p-3 border border-slate-200">AC 100 ~ 240V 3.1A, 50/60Hz</td><td class="p-3 border border-slate-200">AC 100 ~ 240V 2A, 50/60Hz</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">Rated Tension</td><td colspan="2" class="p-3 border border-slate-200">1 ~ 18000N (0.1Kg ~ 1800Kg)</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">Input Res.</td><td colspan="2" class="p-3 border border-slate-200">11 Bit</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">Output Res.</td><td colspan="2" class="p-3 border border-slate-200">12 Bit</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">Load Cell V</td><td colspan="2" class="p-3 border border-slate-200">±5V</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">Signal Input</td><td colspan="2" class="p-3 border border-slate-200">0 ~ 5 V/V</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">ADC Rate</td><td colspan="2" class="p-3 border border-slate-200">>200Hz</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">Control Output</td><td colspan="2" class="p-3 border border-slate-200">DC 0~5V / 0~10V<br>DC 0~±5V / 0~±10V<br>Mag. Amp Signal DC 0~24V (4A)<br>E/P Converter Signal DC 4~20mA</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">Contact Output</td><td colspan="2" class="p-3 border border-slate-200">120VAC 8A, 250VAC 10A, 30VDC 10A</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">Detector Spec</td><td colspan="2" class="p-3 border border-slate-200">LC / LCR / LCS</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">Analog Input</td><td colspan="2" class="p-3 border border-slate-200">Speed Setting, Reel Prep Force<br>Taper Setting, Diameter Signal<br>New Axis Output %</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">Op. Temp</td><td colspan="2" class="p-3 border border-slate-200">0 ~ 50°C</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">Language</td><td colspan="2" class="p-3 border border-slate-200">Chinese / English</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">Weight</td><td colspan="2" class="p-3 border border-slate-200">Approx. 3.7 Kg</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">Panel Cutout</td><td colspan="2" class="p-3 border border-slate-200">232㎜ x 150㎜</td></tr>
                            </tbody>
                        </table>
                    `,
                }
            },
            {
                id: 'calc',
                label: 'Calc Tension',
                content: {
                    ...(PRODUCTS_ZH['tension-ctrl'] as TabbedProduct).tabs[1].content,
                    intro: 'Calculated tension controller estimates roll diameter by detecting rotation counts or cumulative thickness. This method requires setting initial diameter and material thickness. It calculates current diameter by adding (winding) or subtracting (unwinding) thickness for every rotation, adjusting output voltage accordingly. This is an open-loop semi-automatic tension control device.',
                    features: ['Simple adjustment and operation', 'High performance mode for various situations', 'Two calculation modes', 'ModBus RS-485 interface'],
                    specsTitle: 'Specifications',
                    specsHtml: `
                        <table class="w-full text-center text-sm border-collapse">
                            <tbody class="divide-y divide-slate-100">
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">Display Range</td><td class="p-3 border border-slate-200">0.1 ~ 100.0%</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">Dia/Thickness</td><td class="p-3 border border-slate-200">1 ~ 9999μm</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">Calc Mode</td><td class="p-3 border border-slate-200">Linear / 5-point Non-linear</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">Control Output</td><td class="p-3 border border-slate-200">DC 0~5V / 0~10V</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">Mag. Amp Signal</td><td class="p-3 border border-slate-200">DC 0~24V (4A)</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">E/P Signal</td><td class="p-3 border border-slate-200">DC 4~20mA</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">Measure Method</td><td class="p-3 border border-slate-200">Prox Switch / Counter Wheel / Ultrasonic / Analog (0~5V/10V)</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">Response</td><td class="p-3 border border-slate-200">0.1 mS / 10 KHz</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">Analog Output</td><td class="p-3 border border-slate-200">+5, +10V, 4 ~ 20mA, 0 ~ 24V</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">Interface</td><td class="p-3 border border-slate-200">Modbus RTU RS-485</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">Power Input</td><td class="p-3 border border-slate-200">AC 100~240V 2A, 50/60Hz</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">Op. Temp</td><td class="p-3 border border-slate-200">0 ~ 50°C</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">Language</td><td class="p-3 border border-slate-200">Chinese / English</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">Weight</td><td class="p-3 border border-slate-200">Approx. 3.7 Kg</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">Panel Cutout</td><td class="p-3 border border-slate-200">232㎜ x 150㎜</td></tr>
                            </tbody>
                        </table>
                    `,
                }
            }
        ]
    },
    'tension-detect': {
        ...PRODUCTS_ZH['tension-detect'],
        name: 'Tension Detectors',
        desc: 'High rigidity, high sensitivity tension detection components.',
        specsTitle: 'Specifications',
        specs: { 
            'Repeatability': '0.02%', 
            'Input Impedance': '> 5MΩ', 
            'Output Impedance': '2.3KΩ', 
            'Comp. Temp': '-10°C ~ +50°C',
            'Work Temp': '-20°C ~ +60°C',
            'Temp Sens Drift': '0.0015% FS / °C',
            'Temp Zero Drift': '0.0026% FS / °C',
            'Safe Overload': '150%',
            'Cable Length': '5M',
            'Wiring': 'Red (+5V), White (Sig 1), Green (Sig 2), Black (0V)'
        }
    },
    'epc-system': {
        ...(PRODUCTS_ZH['epc-system'] as EpcCustomProduct),
        name: 'EPC System',
        desc: 'High precision web guiding system for edge or center position.',
        intro: 'DRS Series Web Guiding System - Center Position Control. Uses sensors to detect roll edge or center position or printed lines to maintain stable and correct alignment. Also known as "Edge/Center Guiding" device.\n\nWidely used in textile, printing, plastic film, packaging materials, and paper manufacturing industries. It improves quality, reduces loss, and saves manpower, making it an indispensable product for industrial automation.',
        middleRow: [
            { image: IMAGES.epc.mid[0], label: 'Web Guiding System' },
            { image: IMAGES.epc.mid[1], label: 'Web Guiding System (w/ Splice Table)' },
            { image: IMAGES.epc.mid[2], label: 'Web Guiding System (Separate Controller)' },
            { image: IMAGES.epc.mid[3], label: 'Pivoting Guider' }
        ],
        bottomRow: [
            { image: IMAGES.epc.bot[0], label: 'Digital Control Sensor (Photoelectric)' },
            { image: IMAGES.epc.bot[1], label: 'Ultrasonic Edge Sensor' },
            { image: IMAGES.epc.bot[2], label: 'Infrared Edge Sensor' },
            { image: IMAGES.epc.bot[3], label: 'Actuator' }
        ]
    },
    'ind-ctrl': {
        ...PRODUCTS_ZH['ind-ctrl'],
        name: 'Industrial Controller',
        desc: 'Multi-functional digital control core.',
        details: 'DM-96SKT Position Detection Controller is designed for continuous materials like fabrics and plastics.',
        features: [
            'Designed for continuous materials like fabrics and plastics', 
            'Selectable analog output voltage (DC+5V/+10V/±5V/±10V)',
            'Solves micro-gap control issues by compensating tension to maintain constant line tension'
        ],
        specs: { 
            'Display Range': '0.1 ~ 100.0 Kg / Nt-m',
            'Input Res.': '11 BIT',
            'Output Res.': '12 BIT',
            'Load Cell V': '±12V / 5V (Linear)',
            'Signal Input': '5 / 10 / 4~20mA',
            'ADC Rate': '> 200Hz',
            'Analog Output': '+5, +10V, ±10V, ±5V, 4 ~ 20mA',
            'Interface': 'Modbus RTU RS-485',
            'Power Input': 'AC 100 ~ 240V 2A, 50/60Hz',
            'Op. Temp': '0 ~ 50°C',
            'Language': 'Chinese / English'
        }
    },
    'powder-brake': {
        ...PRODUCTS_ZH['powder-brake'],
        name: 'Powder Brake Controller',
        desc: 'Precise torque control for magnetic powder clutches/brakes.',
        intro: 'Uses constant current control technology to ensure linear and smooth braking torque at various speeds.',
        specsTitle: 'Specifications',
        specs: { 
            'Power Input': 'AC 110V / 240V', 
            'Signal Input': 'DC 0 ~ 10V',
            'Signal Output': 'DC 0 ~ 24V  4A / 6A / 8A',
            'Error Output': 'DC 30V / 2A\nAC 250V / 0.25A',
            'Work Temp': '0 ~ 50°C'
        }
    },
    'signal-amp': {
        ...PRODUCTS_ZH['signal-amp'],
        name: 'Signal Amplifier',
        desc: 'Converts tension signals to industrial standard outputs.',
        details: 'LC-AMP 01A SKT Signal Amplifier works with LC/LCR series tension detectors. It outputs voltage values corresponding to tension generated during unwinding, winding, or intermediate processing of paper, wire, films, etc., to recorders, external tension meters, or PLCs.',
        features: [
            'Connects to external tension display', 
            'Independent zero and weight calibration per side',
            'Switch display for Left, Right, or Total tension',
            'Accepts signals from full range of SKTC tension detectors',
            'Configurable for Pull or Press detection mode',
            'Compact design for small spaces',
            'Enables remote tension display and centralized control via PLC'
        ],
        specs: { 
            'Power Input': 'AC100~240V 5A, 50/60Hz', 
            'Rated Tension': '1 to 10000N (0.1kg~1000kg)',
            'Detectors': 'LC / LCR / LCR-A / N25',
            'Output Signal': 'Single 0~5V / Dual 0~10V',
            'Sensor Power': '5 VDC',
            'Input Mode': 'PULL / PRESS',
            'Signal Switch': 'Left, Right, Total',
            'Adjustment': 'Left/Right Zero & Weight',
            'Mounting': 'Bracket',
            'Env. Temp': '0 ~ 50℃',
            'Env. Humidity': '35 ~ 85% RH',
            'Weight': 'Approx. 0.5kg'
        }
    },
    'circuit-design': {
        ...PRODUCTS_ZH['circuit-design'],
        name: 'Electronic Circuit Design',
        desc: 'Professional circuit design services for automation systems.',
        details: 'SKTC is dedicated to perfecting automation control systems, ensuring smooth mechanical motion, precise signal transmission, and minimal failure rates. We have invested heavily in electronic circuit design to provide excellent system components and improve product precision.\n\nBelow are common industrial electronic boards we offer. We also accept custom circuit design requests.',
        models: [
            { modelName: '4P Relay Board', image: IMAGES.circuit[0] },
            { modelName: '8P Relay Board', image: IMAGES.circuit[1] },
            { modelName: '40P I/O Board', image: IMAGES.circuit[2] },
            { modelName: '50P I/O Board', image: IMAGES.circuit[3] },
            { modelName: 'SSR Board', image: IMAGES.circuit[4] },
            { modelName: 'Fwd/Rev Board', image: IMAGES.circuit[5] },
            { modelName: 'Yarn Control Board', image: IMAGES.circuit[6] }
        ]
    },
    'trans-display': {
        ...PRODUCTS_ZH['trans-display'],
        name: 'Light Trans. Display',
        desc: 'Real-time monitoring of thickness and transparency.',
        details: 'Used in optical film and plastic film production lines to provide quantified data monitoring.',
        specs: { 
            'Wavelength': '570 / 940 nm', 
            'Accuracy': '±2%',
            'Repeatability': '1%',
            'Range': '0 ~ 100% Transmission',
            'Temp Range': '0°F ~ 100°F',
            'Humidity': '0 ~ 100% Non-condensing',
            'Sample Thick': '0 ~ 0.25 inch',
            'Sample Size': '2 x 2 inch min',
            'Stray Light': 'Unaffected',
            'Power': '9V Alkaline Battery'
        }
    },
    'speed-display': {
        ...PRODUCTS_ZH['speed-display'],
        name: 'Speed Display',
        desc: 'Large screen high-brightness speed display.',
        details: 'Uses high-quality digital tubes to ensure clarity even in strong light environments.',
        specs: { 
            'Range': '0 ~ 999', 
            'Values': 'Ext. Pulse / Comm Interface',
            'Scale': '1, 0.1, 0.01, 0.001 M/Pulse',
            'Interface': 'Modbus RS-485',
            'Power': 'AC 100 ~ 240V 1A 50/60Hz',
            'Op. Temp': '0 ~ 50°C'
        }
    },
    'led-banner': {
        ...PRODUCTS_ZH['led-banner'],
        name: 'LED Banner',
        desc: 'Real-time industrial signage.',
        details: 'Supports multiple communication protocols, directly displays messages from server or PLC for visual management.',
        features: [
            'Display two lines of English and Numbers', 
            'Display Date and Time',
            'Display Eng, Symbol, Num, Graphics',
            'Retains data during power loss',
            'Iron paint, aesthetic, easy install'
        ],
        specs: { 
            'Power Input': '85~264 VAC', 
            'LED Diameter': '5 mm',
            'Pitch': '2.62 mm',
            'Colors': 'Red, Orange, Green',
            'Brightness': 'Indoor Standard',
            'Module Dots': '80*16 dot',
            'Char Size': 'CN 107*99mm, EN/Num 46*61mm',
            'Static Cars': '5 CN, 10 EN, 10 Num',
            'Env.': '0~50 ℃',
            'Area (w*h)': '600*120 mm',
            'Size (w*h*d)': '619*146*70 mm',
            'Interface': 'RS-485, RS-485 to USB (PC/HMI/PLC)'
        }
    },
    'prop-power-unit': {
        ...(PRODUCTS_ZH['prop-power-unit'] as PropCustomProduct),
        name: 'Proportional Power Unit',
        desc: 'High precision proportional power output system.',
        intro: 'Combines proportional electronic control with efficient hydraulic systems, providing high stability and ±0.1mm positioning accuracy.',
        specs: { 
            'Motor Power': '370W (1/2 HP)', 
            'Motor Voltage': '3Φ 220/380 VAC',
            'Ctrl Voltage': '220/240 VAC (350W)',
            'Prop Valve': '0.68A, 24VDC',
            'Dir Valve': '1.20A, 24VDC',
            'Oil Cap': '10L',
            'Pressure': '15BAR (15 kg)',
            'Flow (Adj)': '0 to 5 L / min',
            'Oil Type': 'ISO VG 32, H-LP 32',
            'Max Env Temp': '60℃',
            'Max Work Temp': '70℃',
            'Cyl Force': 'D=40mm(150Kg) ... D=82.5mm(700Kg)',
            'Cyl Speed': 'D=40mm(66mm/s) ... D=82.5mm(15mm/s)',
            'Pos Accuracy': '±0.1㎜',
            'Weight': '45 Kg (w/ oil)',
            'Dimensions': '471(500) * 290 * 445 mm'
        },
        bottomContent: {
            header: 'High thrust and accurate positioning',
            subHeader: 'Applications: Unwinding/Winding guide systems, Intermediate guide systems.\nIndustries: Paper, Textile, Printing, Plastic Film, Packaging, Rubber, Thin Metal...',
            columns: [
                { title: 'Intermediate Guide', desc: 'Ensures processing quality accuracy by precisely adjusting material edge alignment.' },
                { title: 'Unwind Guide', desc: 'Precise edge adjustment for unaligned material edges.' },
                { title: 'Rewind Guide', desc: 'Improves winding quality by ensuring neat edge alignment.' }
            ],
            bottomImage: IMAGES.prop.bot
        }
    }
};

const PRODUCTS_JA: Record<string, ProductData> = {
    'tension-ctrl': {
        ...(PRODUCTS_ZH['tension-ctrl'] as TabbedProduct),
        name: '張力制御装置',
        desc: '各種ロール材加工用の自動張力制御システム。',
        tabs: [
            {
                id: 'auto',
                label: '自動張力',
                content: {
                    ...(PRODUCTS_ZH['tension-ctrl'] as TabbedProduct).tabs[0].content,
                    intro: '自動張力制御装置は、長尺材料の繰り出し、中間補助軸、巻き取り時の張力を一定値に自動制御します。0〜24Vの制御電圧を出力してパウダーブレーキ/クラッチを駆動するか、0〜5V/0〜10Vのトルク指令電圧をサーボモーター/インバーターに出力します。用途：印刷機器、繊維機械、製紙機械、プラスチック押出/ラミネート設備、Roll to Roll（R2R）設備。\n\nロール材の実際の張力を測定し、設定された目標張力とフィードバックに基づいてPID自動調整を行い、定張力またはテーパー張力制御を実現します。全自動張力制御装置は極めて高い制御精度を持ち、厳格な張力精度が要求される用途に適しています。',
                    features: [
                        '簡単なゼロ点および重量調整',
                        '優れた応答性と安定性',
                        '各種張力検出器と接続可能',
                        '2軸切り替え自動紙継ぎ制御',
                        '多種通信インターフェース'
                    ],
                    specsTitle: '仕様',
                    specsHtml: `
                        <table class="w-full text-center text-sm border-collapse">
                            <thead class="bg-slate-50 text-slate-600">
                                <tr>
                                    <th class="p-3 border border-slate-200 text-center">型番</th>
                                    <th class="p-3 border border-slate-200 text-center">TL-60SKTi-Plus TL-60SKTi</th>
                                    <th class="p-3 border border-slate-200 text-center">TL-60SKT-B</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100">
                                <tr><td class="p-3 border border-slate-200 font-medium">通信</td><td class="p-3 border border-slate-200">LAN</td><td class="p-3 border border-slate-200">Modbus RTU RS-485</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">入力電源</td><td class="p-3 border border-slate-200">AC 100 ~ 240V 3.1A, 50/60Hz</td><td class="p-3 border border-slate-200">AC 100 ~ 240V 2A, 50/60Hz</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">定格張力</td><td colspan="2" class="p-3 border border-slate-200">1 ~ 18000N (0.1Kg ~ 1800Kg)</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">入力分解能</td><td colspan="2" class="p-3 border border-slate-200">11 Bit</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">出力分解能</td><td colspan="2" class="p-3 border border-slate-200">12 Bit</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">ロードセル電圧</td><td colspan="2" class="p-3 border border-slate-200">±5V</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">信号入力範囲</td><td colspan="2" class="p-3 border border-slate-200">0 ~ 5 V/V</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">ADCレート</td><td colspan="2" class="p-3 border border-slate-200">>200Hz</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">制御出力</td><td colspan="2" class="p-3 border border-slate-200">DC 0~5V / 0~10V<br>DC 0~±5V / 0~±10V<br>パウダーAmp信号 DC 0~24V (4A)<br>電空変換信号 DC 4~20mA</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">接点出力</td><td colspan="2" class="p-3 border border-slate-200">120VAC 8A, 250VAC 10A, 30VDC 10A</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">検出器規格</td><td colspan="2" class="p-3 border border-slate-200">LC / LCR / LCS</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">アナログ入力</td><td colspan="2" class="p-3 border border-slate-200">速度設定、リール予備力<br>テーパー設定、径信号<br>新軸出力 %</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">動作温度</td><td colspan="2" class="p-3 border border-slate-200">0 ~ 50°C</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">言語</td><td colspan="2" class="p-3 border border-slate-200">中国語 / 英語</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">重量</td><td colspan="2" class="p-3 border border-slate-200">約 3.7 Kg</td></tr>
                                <tr><td class="p-3 border border-slate-200 font-medium">パネルカット</td><td colspan="2" class="p-3 border border-slate-200">232㎜ x 150㎜</td></tr>
                            </tbody>
                        </table>
                    `,
                }
            },
            {
                id: 'calc',
                label: '演算張力',
                content: {
                    ...(PRODUCTS_ZH['tension-ctrl'] as TabbedProduct).tabs[1].content,
                    intro: '演算型張力制御装置は、回転数または累積厚みを検出してロール径を推定します。初期直径と材料厚みを設定し、回転ごとに厚みを加算（巻き取り）または減算（繰り出し）して現在の径を計算し、出力電圧を調整します。これはオープンループ式の半自動張力制御装置です。',
                    features: ['簡単な調整と操作', '各種状況に対応する高性能モード', '2つの演算モード', 'ModBus RS-485 通信'],
                    specsTitle: '仕様',
                    specsHtml: `
                        <table class="w-full text-center text-sm border-collapse">
                            <tbody class="divide-y divide-slate-100">
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">表示範囲</td><td class="p-3 border border-slate-200">0.1 ~ 100.0%</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">径および厚み</td><td class="p-3 border border-slate-200">1 ~ 9999μm</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">演算モード</td><td class="p-3 border border-slate-200">リニア / 5点非線形</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">制御出力</td><td class="p-3 border border-slate-200">DC 0~5V / 0~10V</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">パウダーAmp信号</td><td class="p-3 border border-slate-200">DC 0~24V (4A)</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">電空変換信号</td><td class="p-3 border border-slate-200">DC 4~20mA</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">測定方式</td><td class="p-3 border border-slate-200">近接スイッチ / カウンター / 超音波 / アナログ (0~5V/10V)</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">応答</td><td class="p-3 border border-slate-200">0.1 mS / 10 KHz</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">アナログ出力</td><td class="p-3 border border-slate-200">+5, +10V, 4 ~ 20mA, 0 ~ 24V</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">通信</td><td class="p-3 border border-slate-200">Modbus RTU RS-485</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">入力電源</td><td class="p-3 border border-slate-200">AC 100~240V 2A, 50/60Hz</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">動作温度</td><td class="p-3 border border-slate-200">0 ~ 50°C</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">言語</td><td class="p-3 border border-slate-200">中国語 / 英語</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">重量</td><td class="p-3 border border-slate-200">約 3.7 Kg</td></tr>
                                <tr><td class="p-3 border border-slate-200 bg-slate-50 w-1/3 font-medium">パネルカット</td><td class="p-3 border border-slate-200">232㎜ x 150㎜</td></tr>
                            </tbody>
                        </table>
                    `,
                }
            }
        ]
    },
    'tension-detect': {
        ...PRODUCTS_ZH['tension-detect'],
        name: '張力検出器シリーズ',
        desc: '高剛性・高感度の張力検出コンポーネント。',
        specsTitle: '仕様',
        specs: { 
            '再現性': '0.02%', 
            '入力インピーダンス': '> 5MΩ', 
            '出力インピーダンス': '2.3KΩ', 
            '補償温度範囲': '-10°C ~ +50°C',
            '動作温度範囲': '-20°C ~ +60°C',
            '感度温度ドリフト': '0.0015% FS / °C',
            'ゼロ点温度ドリフト': '0.0026% FS / °C',
            '安全過負荷': '150%',
            'ケーブル長': '5M',
            '配線': '赤 (+5V), 白 (信号1), 緑 (信号2), 黒 (0V)'
        }
    },
    'epc-system': {
        ...(PRODUCTS_ZH['epc-system'] as EpcCustomProduct),
        name: 'EPCシステム',
        desc: 'エッジまたは中心位置の高精度自動補正。',
        intro: 'DRSシリーズ ウェブガイディングシステム - 中心位置制御装置（CPC）。センサーを使用してロールのエッジ、中心位置、または印刷ラインを検出し、安定した正しい位置合わせを維持します。「蛇行修正」装置とも呼ばれます。\n\n繊維、印刷、プラスチックフィルム、包装材料、製紙産業で広く使用されています。品質向上、ロス削減、省人化を実現し、産業オートメーションに不可欠な製品です。',
        middleRow: [
            { image: IMAGES.epc.mid[0], label: 'ウェブガイドシステム' },
            { image: IMAGES.epc.mid[1], label: 'ウェブガイドシステム (スプライステーブル付)' },
            { image: IMAGES.epc.mid[2], label: 'ウェブガイドシステム (コントローラー分離型)' },
            { image: IMAGES.epc.mid[3], label: 'ピボットガイダー' }
        ],
        bottomRow: [
            { image: IMAGES.epc.bot[0], label: 'デジタル制御センサー (光電式)' },
            { image: IMAGES.epc.bot[1], label: '超音波エッジセンサー' },
            { image: IMAGES.epc.bot[2], label: '赤外線センサー' },
            { image: IMAGES.epc.bot[3], label: 'アクチュエーター' }
        ]
    },
    'ind-ctrl': {
        ...PRODUCTS_ZH['ind-ctrl'],
        name: '産業用コントローラー',
        desc: '多機能デジタル制御コア。',
        details: 'DM-96SKT 位置検出コントローラーは、布やプラスチックなどの連続材料専用に開発されました。',
        features: [
            '布やプラスチックなどの連続材料用に設計', 
            '選択可能なアナログ出力電圧 (DC+5V/+10V/±5V/±10V)',
            '張力を補償してライン張力を一定に保つことで、微小ギャップ制御の問題を解決'
        ],
        specs: { 
            '表示範囲': '0.1 ~ 100.0 Kg / Nt-m',
            '入力分解能': '11 BIT',
            '出力分解能': '12 BIT',
            'ロードセル電圧': '±12V / 5V (リニア)',
            '信号入力': '5 / 10 / 4~20mA',
            'ADCレート': '> 200Hz',
            'アナログ出力': '+5, +10V, ±10V, ±5V, 4 ~ 20mA',
            '通信': 'Modbus RTU RS-485',
            '入力電源': 'AC 100 ~ 240V 2A, 50/60Hz',
            '動作温度': '0 ~ 50°C',
            '言語': '中国語 / 英語'
        }
    },
    'powder-brake': {
        ...PRODUCTS_ZH['powder-brake'],
        name: 'パウダーブレーキ制御',
        desc: '磁性粉体クラッチ/ブレーキの正確なトルク制御。',
        intro: '定電流制御技術を使用し、様々な速度で線形かつスムーズなブレーキトルクを確保します。',
        specsTitle: '仕様',
        specs: { 
            '入力電源': 'AC 110V / 240V', 
            '信号入力': 'DC 0 ~ 10V',
            '信号出力': 'DC 0 ~ 24V  4A / 6A / 8A',
            'エラー出力': 'DC 30V / 2A\nAC 250V / 0.25A',
            '動作温度': '0 ~ 50°C'
        }
    },
    'signal-amp': {
        ...PRODUCTS_ZH['signal-amp'],
        name: '信号増幅器',
        desc: '張力信号を産業標準出力に変換します。',
        details: 'LC-AMP 01A SKT型信号増幅器は、LC/LCRシリーズ張力検出器と組み合わせて使用します。紙、電線、各種フィルムなどの繰り出し、巻き取り、中間処理中に発生する張力に対応する電圧値を、記録計、外部張力計、PLCなどに出力します。',
        features: [
            '外部張力表示器に接続可能', 
            '左右独立のゼロ点および重量校正',
            '左、右、または総張力の表示切り替え',
            'SKTC全シリーズの張力検出器に対応',
            'プル（引張）またはプレス（圧縮）モード設定可能',
            '小型設計で狭いスペースにも設置可能',
            '遠隔張力表示およびPLCによる集中制御を実現'
        ],
        specs: { 
            '入力電源': 'AC100~240V 5A, 50/60Hz', 
            '定格張力': '1 ~ 10000N (0.1kg~1000kg)',
            '適合検出器': 'LC / LCR / LCR-A / N25',
            '出力信号': 'シングル 0~5V / デュアル 0~10V',
            'センサー電源': '5 VDC',
            '入力モード': 'PULL / PRESS',
            '信号切替': '左, 右, 合計',
            '調整': '左右ゼロ点・重量',
            '取付': 'ブラケット',
            '環境温度': '0 ~ 50℃',
            '環境湿度': '35 ~ 85% RH',
            '重量': '約 0.5kg'
        }
    },
    'circuit-design': {
        ...PRODUCTS_ZH['circuit-design'],
        name: '電子回路設計',
        desc: '自動化システム向けの専門的な回路設計サービス。',
        details: 'SKTCは自動制御システムの完成度を高め、スムーズな機械動作、正確な信号伝送、故障率の最小化に尽力しています。優れたシステムコンポーネントの提供だけでなく、製品精度向上のため電子回路設計にも注力しています。\n\n以下は一般的な産業用電子基板です。特殊用途の回路設計も承りますので、お問い合わせください。',
        models: [
            { modelName: '4P リレー基板', image: IMAGES.circuit[0] },
            { modelName: '8P リレー基板', image: IMAGES.circuit[1] },
            { modelName: '40P I/O 基板', image: IMAGES.circuit[2] },
            { modelName: '50P I/O 基板', image: IMAGES.circuit[3] },
            { modelName: 'SSR 基板', image: IMAGES.circuit[4] },
            { modelName: '正逆転基板', image: IMAGES.circuit[5] },
            { modelName: 'ヤーン制御基板', image: IMAGES.circuit[6] }
        ]
    },
    'trans-display': {
        ...PRODUCTS_ZH['trans-display'],
        name: '透過率表示器',
        desc: '厚みと透明度のリアルタイム監視。',
        details: '光学フィルムやプラスチックフィルムの生産ラインで使用され、定量化されたデータモニタリングを提供します。',
        specs: { 
            '波長': '570 / 940 nm', 
            '精度': '±2%',
            '再現性': '1%',
            '範囲': '0 ~ 100% 透過',
            '温度範囲': '0°F ~ 100°F',
            '湿度': '0 ~ 100% 結露なきこと',
            'サンプル厚': '0 ~ 0.25 inch',
            'サンプルサイズ': '2 x 2 inch min',
            '迷光': '影響なし',
            '電源': '9V アルカリ電池'
        }
    },
    'speed-display': {
        ...PRODUCTS_ZH['speed-display'],
        name: '速度表示器',
        desc: '大画面高輝度速度表示。',
        details: '高品質のデジタル管を使用し、強い光環境下でも鮮明な表示を確保します。',
        specs: { 
            '範囲': '0 ~ 999', 
            '表示値': '外部パルス / 通信',
            'スケール': '1, 0.1, 0.01, 0.001 M/Pulse',
            '通信': 'Modbus RS-485',
            '入力電源': 'AC 100 ~ 240V 1A 50/60Hz',
            '動作温度': '0 ~ 50°C'
        }
    },
    'led-banner': {
        ...PRODUCTS_ZH['led-banner'],
        name: 'LED バナー',
        desc: 'リアルタイム産業用看板。',
        details: '多種通信プロトコルをサポートし、サーバーやPLCからのメッセージを直接表示して、産業プロセスの可視化管理を実現します。',
        features: [
            '英数字の2行表示', 
            '日時表示',
            '英字、記号、数字、グラフィック表示',
            '停電時のデータ保持',
            '鉄塗装、美観、設置容易'
        ],
        specs: { 
            '入力電源': '85~264 VAC', 
            'LED径': '5 mm',
            'ピッチ': '2.62 mm',
            '表示色': '赤、橙、緑',
            '輝度': '屋内標準',
            'モジュールドット': '80*16 dot',
            '文字サイズ': '中 107*99mm, 英数 46*61mm',
            '静止文字数': '中5, 英10, 数10',
            '環境': '0~50 ℃',
            '表示エリア': '600*120 mm',
            '外形寸法': '619*146*70 mm',
            '通信': 'RS-485, RS-485 to USB'
        }
    },
    'prop-power-unit': {
        ...(PRODUCTS_ZH['prop-power-unit'] as PropCustomProduct),
        name: '比例式パワーユニット',
        desc: '高精度比例動力出力システム。',
        intro: '比例電子制御と効率的な油圧システムを組み合わせ、高い安定性と±0.1mmの位置決め精度を提供します。',
        specs: { 
            'モーター電力': '370W (1/2 HP)', 
            'モーター電圧': '3Φ 220/380 VAC',
            '制御電圧': '220/240 VAC (350W)',
            '比例弁': '0.68A, 24VDC',
            '方向弁': '1.20A, 24VDC',
            '油量': '10L',
            '圧力': '15BAR (15 kg)',
            '流量 (調整可)': '0 to 5 L / min',
            '油種': 'ISO VG 32, H-LP 32',
            '最高環境温度': '60℃',
            '最高動作温度': '70℃',
            'シリンダ推力': 'D=40mm(150Kg) ... D=82.5mm(700Kg)',
            'シリンダ速度': 'D=40mm(66mm/s) ... D=82.5mm(15mm/s)',
            '位置決め精度': '±0.1㎜',
            '重量': '45 Kg (油含む)',
            '寸法': '471(500) * 290 * 445 mm'
        },
        bottomContent: {
            header: '高推力と正確な位置決めが必要な場合に最適なHE0515',
            subHeader: '用途：繰り出し/巻き取りガイドシステム、中間ガイドシステム。\n適用産業：製紙、繊維、印刷、プラスチックフィルム、包装材料、ゴム、薄金属加工...',
            columns: [
                { title: '中間ガイド', desc: '加工材料のエッジ位置を正確に調整し、加工品質の精度を確保します。' },
                { title: '繰り出しガイド', desc: '不揃いな材料エッジに対して正確な調整を行います。' },
                { title: '巻き取りガイド', desc: '巻き取り時のエッジを整え、巻き取り品質を向上させます。' }
            ],
            bottomImage: IMAGES.prop.bot
        }
    }
};

export const getProducts = (lang: Language): Record<string, ProductData> => {
    switch (lang) {
        case 'en': return PRODUCTS_EN;
        case 'ja': return PRODUCTS_JA;
        default: return PRODUCTS_ZH;
    }
};