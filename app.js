// STUDENT Periodic Table Web App
// Version: 1.0.0
// Author: Doman Soni

const APP_VERSION = "v1.0.0";
const AUTHOR = "Doman Soni";

const CATEGORIES = {
  ALKALI_METAL: { en: "Alkali Metal", hi: "क्षार धातु", color: "#EF4444", bg: "rgba(239, 68, 68, 0.15)" },
  ALKALINE_EARTH: { en: "Alkaline Earth Metal", hi: "क्षारीय मृदा धातु", color: "#F97316", bg: "rgba(249, 115, 22, 0.15)" },
  TRANSITION_METAL: { en: "Transition Metal", hi: "संक्रमण धातु", color: "#3B82F6", bg: "rgba(59, 130, 246, 0.15)" },
  POST_TRANSITION: { en: "Post-transition Metal", hi: "उत्तर-संक्रमण धातु", color: "#10B981", bg: "rgba(16, 185, 129, 0.15)" },
  METALLOID: { en: "Metalloid", hi: "उपधातु", color: "#14B8A6", bg: "rgba(20, 184, 166, 0.15)" },
  REACTIVE_NONMETAL: { en: "Reactive Nonmetal", hi: "सक्रिय अधातु", color: "#8B5CF6", bg: "rgba(139, 92, 246, 0.15)" },
  HALOGEN: { en: "Halogen", hi: "हैलोजन", color: "#EC4899", bg: "rgba(236, 72, 153, 0.15)" },
  NOBLE_GAS: { en: "Noble Gas", hi: "अक्रिय गैस", color: "#6366F1", bg: "rgba(99, 102, 241, 0.15)" },
  LANTHANIDE: { en: "Lanthanide", hi: "लैन्थेनाइड", color: "#D97706", bg: "rgba(217, 119, 6, 0.15)" },
  ACTINIDE: { en: "Actinide", hi: "ऐक्टिनाइड", color: "#BE123C", bg: "rgba(190, 18, 60, 0.15)" }
};

// All 118 verified elements with standard properties
const ELEMENTS = [
  { n: 1, s: "H", en: "Hydrogen", hi: "हाइड्रोजन", m: "1.008", g: 1, p: 1, b: "s", c: "REACTIVE_NONMETAL", ec: "1s¹", ph: "Gas", mp: "13.99 K (-259.16 °C)", bp: "20.271 K (-252.879 °C)", d: "0.08988 g/L", eneg: "2.20", ox: "+1, -1", yr: "1766", disc: "Henry Cavendish", u_en: "Rocket fuel, ammonia fertilizer, clean hydrogen fuel cells.", u_hi: "रॉकेट ईंधन, अमोनिया उर्वरक, और स्वच्छ हाइड्रोजन ईंधन सेल।", sum_en: "Most abundant chemical element in the universe; fuel of stars.", sum_hi: "ब्रह्मांड में सबसे प्रचुर तत्व; सूर्य और तारों का प्राथमिक ईंधन।", r: 1, col: 1 },
  { n: 2, s: "He", en: "Helium", hi: "हीलियम", m: "4.0026", g: 18, p: 1, b: "s", c: "NOBLE_GAS", ec: "1s²", ph: "Gas", mp: "0.95 K (-272.2 °C, at 2.5 MPa)", bp: "4.222 K (-268.928 °C)", d: "0.1786 g/L", eneg: "—", ox: "0", yr: "1868", disc: "Pierre Janssen, Norman Lockyer", u_en: "Cooling MRI superconducting magnets, deep-sea diving breathing mixtures, weather balloons.", u_hi: "अस्पताल के MRI सुपरकंडक्टिंग मैग्नेट को ठंडा रखना, मौसम के गुब्बारे।", sum_en: "Second lightest and second most abundant element; non-reactive noble gas.", sum_hi: "ब्रह्मांड में दूसरा सबसे प्रचुर तत्व; कभी नहीं जलने वाली अक्रिय गैस।", r: 1, col: 18 },
  { n: 3, s: "Li", en: "Lithium", hi: "लिथियम", m: "6.94", g: 1, p: 2, b: "s", c: "ALKALI_METAL", ec: "[He] 2s¹", ph: "Solid", mp: "453.65 K (180.50 °C)", bp: "1603 K (1330 °C)", d: "0.534 g/cm³", eneg: "0.98", ox: "+1", yr: "1817", disc: "Johan August Arfwedson", u_en: "Rechargeable smartphone/EV lithium-ion batteries, bipolar disorder medicine.", u_hi: "मोबाइल और इलेक्ट्रिक वाहनों की लिथियम-आयन बैटरी, मूड स्टेबलाइजर दवा।", sum_en: "Lightest metal and least dense solid element; floats easily on water.", sum_hi: "सबसे हल्की धातु जो पानी पर तैरती है; आधुनिक ऊर्जा क्रांति की रीढ़।", r: 2, col: 1 },
  { n: 4, s: "Be", en: "Beryllium", hi: "बेरिलियम", m: "9.0122", g: 2, p: 2, b: "s", c: "ALKALINE_EARTH", ec: "[He] 2s²", ph: "Solid", mp: "1560 K (1287 °C)", bp: "2742 K (2469 °C)", d: "1.85 g/cm³", eneg: "1.57", ox: "+2", yr: "1798", disc: "Louis-Nicolas Vauquelin", u_en: "James Webb Space Telescope gold-coated hexagonal mirrors, aerospace alloys, X-ray windows.", u_hi: "जेम्स वेब स्पेस टेलीस्कोप के मुख्य दर्पण, एयरोस्पेस मिश्र धातु।", sum_en: "Lightweight, rigid metal transparent to X-rays; essential in space optics.", sum_hi: "एक्स-रे के लिए पारदर्शी और अत्यधिक कठोर धातु; अंतरिक्ष दूरबीनों में प्रयुक्त।", r: 2, col: 2 },
  { n: 5, s: "B", en: "Boron", hi: "बोरॉन", m: "10.81", g: 13, p: 2, b: "p", c: "METALLOID", ec: "[He] 2s² 2p¹", ph: "Solid", mp: "2349 K (2076 °C)", bp: "4200 K (3927 °C)", d: "2.34 g/cm³", eneg: "2.04", ox: "+3", yr: "1808", disc: "Joseph Louis Gay-Lussac, Louis Jacques Thénard", u_en: "Heat-resistant borosilicate lab glassware (Pyrex), fiberglass insulation, agricultural plant nutrient.", u_hi: "तापरोधी बोरोसिलिकेट कांच (पायरेक्स), फाइबरग्लास, और पौधों के लिए सूक्ष्म पोषक तत्व।", sum_en: "Semiconductor metalloid forming extremely hard ceramic compounds.", sum_hi: "ऊष्मा-प्रतिरोधी कांच और मजबूत फाइबरग्लास बनाने वाला कठोर उपधातु।", r: 2, col: 13 },
  { n: 6, s: "C", en: "Carbon", hi: "कार्बन", m: "12.011", g: 14, p: 2, b: "p", c: "REACTIVE_NONMETAL", ec: "[He] 2s² 2p²", ph: "Solid", mp: "Sublimes at ~3915 K (3642 °C)", bp: "Sublimes", d: "2.267 g/cm³ (graphite), 3.515 g/cm³ (diamond)", eneg: "2.55", ox: "-4, +2, +4", yr: "Ancient", disc: "Known since antiquity", u_en: "Basis of all organic life, steel manufacturing, carbon fiber aerospace composites, diamond jewelry.", u_hi: "समस्त जैविक जीवन का आधार, स्टील निर्माण, कार्बन फाइबर और हीरे के आभूषण।", sum_en: "Chemical cornerstone of life, forming millions of complex organic compounds.", sum_hi: "जीवन का रासायनिक आधार; हीरे और ग्रेफाइट के रूप में प्रकृति में विद्यमान।", r: 2, col: 14 },
  { n: 7, s: "N", en: "Nitrogen", hi: "नाइट्रोजन", m: "14.007", g: 15, p: 2, b: "p", c: "REACTIVE_NONMETAL", ec: "[He] 2s² 2p³", ph: "Gas", mp: "63.15 K (-210.00 °C)", bp: "77.36 K (-195.79 °C)", d: "1.2506 g/L", eneg: "3.04", ox: "-3, +3, +5", yr: "1772", disc: "Daniel Rutherford", u_en: "Agricultural fertilizer synthesis (Haber-Bosch), liquid nitrogen cryogenic freezing, food packaging flush.", u_hi: "कृषि यूरिया व खाद, क्रायोजेनिक प्रशीतन (लिक्विड नाइट्रोजन), चिप्स पैकेट संरक्षण।", sum_en: "Colorless gas making up approximately 78% of Earth's atmosphere.", sum_hi: "वायुमंडल का 78% भाग बनाने वाली अक्रिय गैस; पौधों के विकास के लिए अनिवार्य।", r: 2, col: 15 },
  { n: 8, s: "O", en: "Oxygen", hi: "ऑक्सीजन", m: "15.999", g: 16, p: 2, b: "p", c: "REACTIVE_NONMETAL", ec: "[He] 2s² 2p⁴", ph: "Gas", mp: "54.36 K (-218.79 °C)", bp: "90.20 K (-182.95 °C)", d: "1.429 g/L", eneg: "3.44", ox: "-2", yr: "1774", disc: "Joseph Priestley, Carl Wilhelm Scheele", u_en: "Cellular respiration for animal life, hospital medical oxygen cylinders, steel making blast furnaces.", u_hi: "प्राणवायु (श्वसन), अस्पतालों में मेडिकल ऑक्सीजन सिलेंडर, स्टील शोधन।", sum_en: "Essential for cellular respiration and combustion; 21% of atmosphere and 46% of Earth's crust.", sum_hi: "समस्त प्राणियों के लिए जीवनदायी प्राणवायु; पृथ्वी की पपड़ी में सर्वाधिक मात्रा में उपस्थित।", r: 2, col: 16 },
  { n: 9, s: "F", en: "Fluorine", hi: "फ्लोरीन", m: "18.998", g: 17, p: 2, b: "p", c: "HALOGEN", ec: "[He] 2s² 2p⁵", ph: "Gas", mp: "53.48 K (-219.67 °C)", bp: "85.03 K (-188.11 °C)", d: "1.696 g/L", eneg: "3.98", ox: "-1", yr: "1886", disc: "Henri Moissan", u_en: "Toothpaste cavity protection (sodium fluoride), non-stick Teflon cookware (PTFE), refrigerants.", u_hi: "टूथपेस्ट में कैविटी सुरक्षा (फ्लोराइड), नॉन-स्टिक टेफ्लॉन बर्तन (PTFE)।", sum_en: "Most chemically electronegative and reactive of all chemical elements.", sum_hi: "आवर्त सारणी का सबसे अधिक विद्युत-ऋणात्मक और आक्रामक रूप से सक्रिय तत्व।", r: 2, col: 17 },
  { n: 10, s: "Ne", en: "Neon", hi: "नियॉन", m: "20.180", g: 18, p: 2, b: "p", c: "NOBLE_GAS", ec: "[He] 2s² 2p⁶", ph: "Gas", mp: "24.56 K (-248.59 °C)", bp: "27.07 K (-246.08 °C)", d: "0.9002 g/L", eneg: "—", ox: "0", yr: "1898", disc: "William Ramsay, Morris Travers", u_en: "Bright orange-red neon advertising billboard signs, high-voltage indicators, cryogenics.", u_hi: "चमकदार लाल-नारंगी नियॉन विज्ञापन बोर्ड, उच्च वोल्टेज संकेतक।", sum_en: "Colorless noble gas that glows reddish-orange in high-voltage electric discharge.", sum_hi: "विद्युत धारा प्रवाहित करने पर लाल-नारंगी तीव्र प्रकाश देने वाली अक्रिय गैस।", r: 2, col: 18 }
];

// Generate elements 11 to 118 dynamically if not fully listed, with authentic IUPAC scientific data!
// We ensure ALL 118 are properly populated:
const ELEMENT_NAMES = [
  ["Na","Sodium","सोडियम","22.990",1,3,"s","ALKALI_METAL","[Ne] 3s¹","Solid","370.87 K","1156 K","0.97 g/cm³","0.93","+1","1807","Humphry Davy","Table salt (NaCl), street lighting, neural impulses.","नमक (NaCl), सड़क की पीली लाइटें, तंत्रिका तंत्र।","Soft alkali metal reacting violently with water.",3,1],
  ["Mg","Magnesium","मैग्नीशियम","24.305",2,3,"s","ALKALINE_EARTH","[Ne] 3s²","Solid","923 K","1363 K","1.738 g/cm³","1.31","+2","1755","Joseph Black","Chlorophyll core, lightweight laptop alloys, fireworks.","क्लोरोफिल का केंद्र, लैपटॉप की मजबूत बॉडी, आतिशबाजी।","Essential mineral in plants and human biology.",3,2],
  ["Al","Aluminium","एल्युमिनियम","26.982",13,3,"p","POST_TRANSITION","[Ne] 3s² 3p¹","Solid","933.47 K","2743 K","2.70 g/cm³","1.61","+3","1825","Hans Christian Ørsted","Airplane fuselages, soda cans, foil, power cables.","हवाई जहाज का ढांचा, शीतल पेय केन, पन्नी, बिजली के तार।","Abundant lightweight metal resistant to corrosion.",3,13],
  ["Si","Silicon","सिलिकॉन","28.085",14,3,"p","METALLOID","[Ne] 3s² 3p²","Solid","1687 K","3538 K","2.33 g/cm³","1.90","+4, -4","1824","Jöns Jacob Berzelius","Computer microchips, solar panels, silicones, glass.","कंप्यूटर माइक्रोचिप, सोलर पैनल, कांच और सिलिकॉन रबर।","Semiconductor foundation of the entire digital age.",3,14],
  ["P","Phosphorus","फास्फोरस","30.974",15,3,"p","REACTIVE_NONMETAL","[Ne] 3s² 3p³","Solid","317.3 K","553.6 K","1.823 g/cm³","2.19","+5, -3","1669","Hennig Brand","DNA/RNA backbone, cell ATP energy, matchsticks, fertilizers.","डीएनए/आरएनए संरचना, एटीपी ऊर्जा, माचिस, एनपीके उर्वरक।","Essential life element discovered originally in urine.",3,15],
  ["S","Sulfur","सल्फर (गंधक)","32.06",16,3,"p","REACTIVE_NONMETAL","[Ne] 3s² 3p⁴","Solid","388.36 K","717.8 K","2.07 g/cm³","2.58","+6, -2","Ancient","Known since antiquity","Sulfuric acid, car tire vulcanization, skin medicines.","सल्फ्यूरिक एसिड, रबर टायर वल्केनाइजेशन, एंटी-फंगल दवाएं।","Yellow nonmetal essential for protein synthesis.",3,16],
  ["Cl","Chlorine","क्लोरीन","35.45",17,3,"p","HALOGEN","[Ne] 3s² 3p⁵","Gas","171.6 K","239.11 K","3.2 g/L","3.16","-1, +1","1774","Carl Wilhelm Scheele","Drinking water purification, PVC pipes, bleaches.","पीने के पानी का शुद्धिकरण, पीवीसी पाइप, ब्लीच।","Yellow-green halogen gas with strong disinfectant power.",3,17],
  ["Ar","Argon","आर्गन","39.95",18,3,"p","NOBLE_GAS","[Ne] 3s² 3p⁶","Gas","83.8 K","87.3 K","1.784 g/L","—","0","1894","Lord Rayleigh, William Ramsay","Incandescent lightbulbs, inert arc welding shield gas.","बिजली के बल्बों में अक्रिय गैस, वेल्डिंग सुरक्षा आवरण।","Most abundant noble gas in Earth's air (~0.93%).",3,18],
  ["K","Potassium","पोटैशियम","39.098",1,4,"s","ALKALI_METAL","[Ar] 4s¹","Solid","336.7 K","1032 K","0.862 g/cm³","0.82","+1","1807","Humphry Davy","Agricultural fertilizer, nerve conduction, muscle contraction.","कृषि पोटाश खाद, हृदय धड़कन व तंत्रिका संकेत संचरण।","Vital electrolyte for human cardiovascular health.",4,1],
  ["Ca","Calcium","कैल्शियम","40.078",2,4,"s","ALKALINE_EARTH","[Ar] 4s²","Solid","1115 K","1757 K","1.55 g/cm³","1.00","+2","1808","Humphry Davy","Human bones and teeth, cement, lime, cheese making.","हड्डियों व दांतों की मजबूती, सीमेंट, चूना, पनीर निर्माण।","Fifth most abundant element in the Earth's crust.",4,2],
  ["Sc","Scandium","स्कैंडियम","44.956",3,4,"d","TRANSITION_METAL","[Ar] 3d¹ 4s²","Solid","1814 K","3109 K","2.985 g/cm³","1.36","+3","1879","Lars Fredrik Nilson","Aerospace aluminum alloys, stadium halide floodlights.","हवाई जहाज मिश्र धातु, क्रिकेट स्टेडियम की सफेद रोशनी।","Light transition metal named after Scandinavia.",4,3],
  ["Ti","Titanium","टाइटेनियम","47.867",4,4,"d","TRANSITION_METAL","[Ar] 3d² 4s²","Solid","1941 K","3560 K","4.506 g/cm³","1.54","+4","1791","William Gregor","Surgical hip implants, fighter aircraft, white paint (TiO₂).","सर्जिकल हड्डी प्रत्यारोपण, लड़ाकू विमान, सफेद पेंट (TiO₂)।","Strong as steel but 45% lighter; highly biocompatible.",4,4],
  ["V","Vanadium","वैनेडियम","50.942",5,4,"d","TRANSITION_METAL","[Ar] 3d³ 4s²","Solid","2183 K","3680 K","6.11 g/cm³","1.63","+5, +4","1801","Andrés Manuel del Río","Shock-resistant tool steel, grid-scale flow batteries.","मजबूत औजार स्टील, बड़े पैमाने की फ्लो बैटरियां।","Named after Vanadis, Norse goddess of beauty.",4,5],
  ["Cr","Chromium","क्रोमियम","51.996",6,4,"d","TRANSITION_METAL","[Ar] 3d⁵ 4s¹","Solid","2180 K","2944 K","7.19 g/cm³","1.66","+3, +6","1797","Louis-Nicolas Vauquelin","Stainless steel (18% Cr), mirror chrome electroplating.","स्टेनलेस स्टील (जंग-रोधी), चमकदार क्रोम प्लेटिंग।","Produces ruby red and emerald green gemstone colors.",4,6],
  ["Mn","Manganese","मैंगनीज","54.938",7,4,"d","TRANSITION_METAL","[Ar] 3d⁵ 4s²","Solid","1519 K","2334 K","7.21 g/cm³","1.55","+2, +4, +7","1774","Johan Gottlieb Gahn","Steel deoxidation, beverage can alloys, battery cathodes.","स्टेनलेस स्टील निर्माण, पेय केन, क्षारीय बैटरी।","Essential enzyme cofactor in all photosynthetic plants.",4,7],
  ["Fe","Iron","आयरन (लोहा)","55.845",8,4,"d","TRANSITION_METAL","[Ar] 3d⁶ 4s²","Solid","1811 K","3134 K","7.874 g/cm³","1.83","+2, +3","Ancient","Known since antiquity","Structural steel, bridges, skyscrapers, blood hemoglobin.","इमारतें, पुल, रेलवे ट्रैक, रक्त में हीमोग्लोबिन।","Most used metal by mass; Earth's magnetic core.",4,8],
  ["Co","Cobalt","कोबाल्ट","58.933",9,4,"d","TRANSITION_METAL","[Ar] 3d⁷ 4s²","Solid","1768 K","3200 K","8.90 g/cm³","1.88","+2, +3","1735","Georg Brandt","EV lithium-ion battery cathodes, jet engine superalloys, Vit B12.","इलेक्ट्रिक वाहन बैटरी, जेट इंजन, विटामिन B12।","Magnetic metal that creates deep brilliant cobalt blue.",4,9],
  ["Ni","Nickel","निकेल","58.693",10,4,"d","TRANSITION_METAL","[Ar] 3d⁸ 4s²","Solid","1728 K","3003 K","8.908 g/cm³","1.91","+2","1751","Axel Fredrik Cronstedt","Stainless steel, coins, rechargeable batteries, guitar strings.","स्टेनलेस स्टील, सिक्के, रिचार्जेबल बैटरी, गिटार के तार।","Corrosion-resistant metal found in Earth's molten core.",4,10],
  ["Cu","Copper","कॉपर (तांबा)","63.546",11,4,"d","TRANSITION_METAL","[Ar] 3d¹⁰ 4s¹","Solid","1357.77 K","2835 K","8.96 g/cm³","1.90","+1, +2","Ancient","Known since antiquity","Electrical home wiring, electric motors, water pipes, bronze.","बिजली की वायरिंग, इलेक्ट्रिक मोटर, पानी के पाइप, कांस्य।","Superb electrical conductor used since 8000 BC.",4,11],
  ["Zn","Zinc","जिंक (जस्ता)","65.38",12,4,"d","TRANSITION_METAL","[Ar] 3d¹⁰ 4s²","Solid","692.68 K","1180 K","7.14 g/cm³","1.65","+2","Ancient","Known in India (~1200 AD)","Galvanizing iron against rust, brass alloys, immune health.","लोहे को जंग से बचाने हेतु गैल्वनाइजेशन, पीतल, रोग प्रतिरोधक।","Essential trace mineral for human immune function.",4,12],
  ["Ga","Gallium","गैलियम","69.723",13,4,"p","POST_TRANSITION","[Ar] 3d¹⁰ 4s² 4p¹","Solid","302.91 K (29.76 °C)","2673 K","5.91 g/cm³","1.81","+3","1875","Paul-Émile Lecoq","Blue LEDs, smartphone RF power amplifiers, GaN fast chargers.","नीली एलईडी, स्मार्टफोन आरएफ चिप्स, GaN फास्ट चार्जर।","Melts in the palm of your hand at body temperature.",4,13],
  ["Ge","Germanium","जर्मेनियम","72.630",14,4,"p","METALLOID","[Ar] 3d¹⁰ 4s² 4p²","Solid","1211.4 K","3106 K","5.323 g/cm³","2.01","+4, +2","1886","Clemens Winkler","Fiber optic telecommunications, military night vision infrared lenses.","ऑप्टिकल फाइबर इंटरनेट, नाइट विजन इन्फ्रारेड लेंस।","Mendeleev's predicted 'ekasilicon'; optical marvel.",4,14],
  ["As","Arsenic","आर्सेनिक","74.922",15,4,"p","METALLOID","[Ar] 3d¹⁰ 4s² 4p³","Solid","1090 K (sublimes)","Sublimes","5.776 g/cm³","2.18","+3, +5","Ancient","Albertus Magnus (~1250)","GaAs semiconductor lasers, leukemia cancer medicine (Trisenox).","लेजर सेमीकंडक्टर, ल्यूकेमिया ब्लड कैंसर की दवा।","Famous toxic metalloid with valuable high-tech niches.",4,15],
  ["Se","Selenium","सेलेनियम","78.971",16,4,"p","REACTIVE_NONMETAL","[Ar] 3d¹⁰ 4s² 4p⁴","Solid","494 K","958 K","4.81 g/cm³","2.55","+4, -2","1817","Jöns Jacob Berzelius","Anti-dandruff shampoo, photocopiers, ruby red glass.","एंटी-डैंड्रफ शैम्पू, फोटोकॉपी ड्रम, लाल कांच।","Photoconductive element that conducts electricity when lit.",4,16],
  ["Br","Bromine","ब्रोमीन","79.904",17,4,"p","HALOGEN","[Ar] 3d¹⁰ 4s² 4p⁵","Liquid","265.8 K (-7.2 °C)","332.0 K (58.8 °C)","3.1028 g/cm³","2.96","-1, +1","1826","Antoine Jérôme Balard","Flame retardants, pharmaceutical drug synthesis, water treatment.","अग्नि-रोधी सामग्री, दवा निर्माण, जल शोधन।","Only nonmetallic element that is liquid at room temperature.",4,17],
  ["Kr","Krypton","क्रिप्टॉन","83.798",18,4,"p","NOBLE_GAS","[Ar] 3d¹⁰ 4s² 4p⁶","Gas","115.79 K","119.93 K","3.749 g/L","3.00","0, +2","1898","William Ramsay, Morris Travers","Airport runway high-speed strobe lights, insulated double glass.","हवाई अड्डे के रनवे की तेज रोशनी, इंसुलेटेड खिड़कियां।","Noble gas that produces brilliant whitish-green light.",4,18],
  ["Rb","Rubidium","रुबिडियम","85.468",1,5,"s","ALKALI_METAL","[Kr] 5s¹","Solid","312.46 K","961 K","1.532 g/cm³","0.82","+1","1861","Robert Bunsen, Gustav Kirchhoff","Ultra-precise atomic clocks for GPS satellite navigation.","जीपीएस उपग्रहों के लिए अति-सटीक परमाणु घड़ियां।","Soft silvery alkali metal that combusts spontaneously in air.",5,1],
  ["Sr","Strontium","स्ट्रॉन्शियम","87.62",2,5,"s","ALKALINE_EARTH","[Kr] 5s²","Solid","1050 K","1655 K","2.64 g/cm³","0.95","+2","1790","Adair Crawford","Vibrant crimson red fireworks, optical lattice atomic clocks.","आतिशबाजी में गहरा लाल रंग, उन्नत ऑप्टिकल घड़ियां।","Produces the intense crimson red color in celebration flares.",5,2],
  ["Y","Yttrium","इट्रियम","88.906",3,5,"d","TRANSITION_METAL","[Kr] 4d¹ 5s²","Solid","1799 K","3609 K","4.472 g/cm³","1.22","+3","1794","Johan Gadolin","Nd:YAG surgical lasers, red CRT phosphors, LEDs.","सर्जिकल लेजर, एलईडी टीवी के लाल रंग घटक।","Named after Swedish village Ytterby, source of 4 elements.",5,3],
  ["Zr","Zirconium","ज़िरकोनियम","91.224",4,5,"d","TRANSITION_METAL","[Kr] 4d² 5s²","Solid","2128 K","4682 K","6.52 g/cm³","1.33","+4","1789","Martin Heinrich Klaproth","Nuclear reactor fuel cladding, cubic zirconia faux diamond jewelry.","परमाणु रिएक्टर ईंधन आवरण, कृत्रिम हीरे (क्यूबिक ज़िरकोनिया)।","Extremely resistant to corrosion and high-energy neutrons.",5,4],
  ["Nb","Niobium","नाइओबियम","92.906",5,5,"d","TRANSITION_METAL","[Kr] 4d⁴ 5s¹","Solid","2750 K","5017 K","8.57 g/cm³","1.60","+5","1801","Charles Hatchett","MRI and particle accelerator superconducting magnets, jet nozzles.","एमआरआई सुपरकंडक्टिंग चुंबक, रॉकेट नोजल।","Maintains superconductivity at cryogenic liquid helium temps.",5,5],
  ["Mo","Molybdenum","मोलिब्डेनम","95.95",6,5,"d","TRANSITION_METAL","[Kr] 4d⁵ 5s¹","Solid","2896 K","4912 K","10.28 g/cm³","2.16","+6","1778","Carl Wilhelm Scheele","High-temperature armor steel, hospital Mo-99 medical isotopes.","तोप और कवच स्टील, कैंसर निदान हेतु मेडिकल आइसोटोप।","Withstands extreme heat without softening or expanding.",5,6],
  ["Tc","Technetium","टेक्नेटियम","[97]",7,5,"d","TRANSITION_METAL","[Kr] 4d⁵ 5s²","Solid","2430 K","4538 K","11 g/cm³","1.90","+7, +4","1937","Emilio Segrè, Carlo Perrier","Tc-99m nuclear medicine diagnostic body imaging scans.","अस्पतालों में 80% मेडिकल इमेजिंग स्कैन (Tc-99m)।","First artificially produced chemical element; radioactive.",5,7],
  ["Ru","Ruthenium","रूथेनियम","101.07",8,5,"d","TRANSITION_METAL","[Kr] 4d⁷ 5s¹","Solid","2607 K","4423 K","12.45 g/cm³","2.20","+3, +4","1844","Karl Ernst Claus","Hard disk drive magnetic heads, solar cell dye sensitizers.","कंप्यूटर हार्ड डिस्क ड्राइव रीड हेड, सोलर सेल।","Rare platinum group metal that hardens platinum alloys.",5,8],
  ["Rh","Rhodium","रोडियम","102.91",9,5,"d","TRANSITION_METAL","[Kr] 4d⁸ 5s¹","Solid","2237 K","3968 K","12.41 g/cm³","2.28","+3","1803","William Hyde Wollaston","Car catalytic converters reducing toxic nitrogen oxide exhaust.","गाड़ियों के साइलेंसर में प्रदूषण रोधी उत्प्रेरक।","Extremely rare, precious metal; vital for clean air.",5,9],
  ["Pd","Palladium","पैलेडियम","106.42",10,5,"d","TRANSITION_METAL","[Kr] 4d¹⁰","Solid","1828.05 K","3236 K","12.023 g/cm³","2.20","+2, +4","1803","William Hyde Wollaston","Automotive emissions cleaning, hydrogen fuel purification, jewelry.","ऑटोमोबाइल प्रदूषण नियंत्रण, हाइड्रोजन शुद्धिकरण, आभूषण।","Can absorb 900 times its own volume of hydrogen gas.",5,10],
  ["Ag","Silver","सिल्वर (चांदी)","107.87",11,5,"d","TRANSITION_METAL","[Kr] 4d¹⁰ 5s¹","Solid","1234.93 K","2435 K","10.49 g/cm³","1.93","+1","Ancient","Known since antiquity","Best electrical conductor, solar cell conductive paste, jewelry.","सर्वश्रेष्ठ विद्युत चालक, सोलर सेल पेस्ट, चांदी के आभूषण।","Highest electrical and thermal conductivity of all metals.",5,11],
  ["Cd","Cadmium","कैडमियम","112.41",12,5,"d","TRANSITION_METAL","[Kr] 4d¹⁰ 5s²","Solid","594.22 K","1040 K","8.65 g/cm³","1.69","+2","1817","Karl Samuel Leberecht Hermann","Ni-Cd rechargeable batteries, bright cadmium yellow/red paints.","रिचार्जेबल निकल-कैडमियम बैटरी, तेल चित्रकला रंग।","Soft toxic metal used extensively in corrosion protection.",5,12],
  ["In","Indium","इंडियम","114.82",13,5,"p","POST_TRANSITION","[Kr] 4d¹⁰ 5s² 5p¹","Solid","429.75 K (156.60 °C)","2345 K","7.31 g/cm³","1.78","+3","1863","Ferdinand Reich, Theodor Richter","Indium Tin Oxide (ITO) touchscreens on all modern smartphones.","सभी स्मार्टफोन की टचस्क्रीन (Indium Tin Oxide)।","Enables transparent conductive touch sensors on phones.",5,13],
  ["Sn","Tin","टिन (रांगा)","118.71",14,5,"p","POST_TRANSITION","[Kr] 4d¹⁰ 5s² 5p²","Solid","505.08 K","2875 K","7.31 g/cm³","1.96","+2, +4","Ancient","Known since antiquity","Solder for microchip circuit boards, tin plating food preservation cans.","इलेक्ट्रॉनिक सर्किट सोल्डरिंग तार, खाद्य संरक्षण के डिब्बे।","Key constituent of bronze alloy that shaped civilization.",5,14],
  ["Sb","Antimony","एंटीमनी","121.76",15,5,"p","METALLOID","[Kr] 4d¹⁰ 5s² 5p³","Solid","903.78 K","1908 K","6.697 g/cm³","2.05","+3, +5","Ancient","Known since antiquity","Lead-acid battery grid hardener, flame retardants, historic kohl.","कार बैटरी प्लेट, अग्नि-रोधी कपड़े, ऐतिहासिक सुरमा।","Lustrous gray metalloid expanding uniquely on freezing.",5,15],
  ["Te","Tellurium","टेल्यूरियम","127.60",16,5,"p","METALLOID","[Kr] 4d¹⁰ 5s² 5p⁴","Solid","722.66 K","1261 K","6.24 g/cm³","2.10","+4, -2","1782","Franz-Joseph Müller von Reichenstein","High-efficiency CdTe solar energy panels, phase-change memory.","सीडीटीई सोलर पैनल, चरण-परिवर्तन कंप्यूटर मेमोरी।","Named after Tellus, Roman goddess of the Earth.",5,16],
  ["I","Iodine","आयोडीन","126.90",17,5,"p","HALOGEN","[Kr] 4d¹⁰ 5s² 5p⁵","Solid","386.85 K","457.4 K","4.933 g/cm³","2.66","-1, +1","1811","Bernard Courtois","Iodized table salt preventing thyroid goitre, surgical Betadine.","थायरॉयड घेंघा रोग रोधी आयोडाइज्ड नमक, बीटाडीन एंटीसेप्टिक।","Purple subliming solid essential for healthy thyroid metabolism.",5,17],
  ["Xe","Xenon","ज़ीनॉन","131.29",18,5,"p","NOBLE_GAS","[Kr] 4d¹⁰ 5s² 5p⁶","Gas","161.4 K","165.05 K","5.894 g/L","2.60","0, +2","1898","William Ramsay, Morris Travers","Deep space satellite ion propulsion engines, IMAX film projectors.","अंतरिक्ष उपग्रह आयन प्रोपल्शन थ्रस्टर, आईमैक्स सिनेमा प्रोजेक्टर।","Heavy noble gas powering spacecraft across the solar system.",5,18],
  ["Cs","Caesium","सीज़ियम","132.91",1,6,"s","ALKALI_METAL","[Xe] 6s¹","Solid","301.7 K (28.5 °C)","944 K","1.93 g/cm³","0.79","+1","1860","Robert Bunsen, Gustav Kirchhoff","International SI standard definition of the second (atomic clocks).","अंतरराष्ट्रीय समय मानक (1 सेकंड की आधिकारिक वैज्ञानिक परिभाषा)।","9,192,631,770 transitions define the universal second.",6,1],
  ["Ba","Barium","बेरियम","137.33",2,6,"s","ALKALINE_EARTH","[Xe] 6s²","Solid","1000 K","2170 K","3.51 g/cm³","0.89","+2","1808","Humphry Davy","Hospital digestive tract X-ray contrast swallow, green fireworks.","पेट के एक्स-रे के लिए बेरियम मील, आतिशबाजी में हरा रंग।","Opaque to medical X-rays, outlining the stomach and intestines.",6,2],
  // Lanthanides 57 to 71 placed at row 9, cols 4..18
  ["La","Lanthanum","लैन्थेनम","138.91",3,6,"f","LANTHANIDE","[Xe] 5d¹ 6s²","Solid","1193 K","3737 K","6.162 g/cm³","1.10","+3","1839","Carl Gustaf Mosander","Camera optics, carbon arc studio cinema lighting, hybrid batteries.","कैमरा लेंस, हाइब्रिड कार बैटरी।","First element of the lanthanide series.",9,4],
  ["Ce","Cerium","सीरियम","140.12",3,6,"f","LANTHANIDE","[Xe] 4f¹ 5d¹ 6s²","Solid","1068 K","3716 K","6.77 g/cm³","1.12","+3, +4","1803","Martin Heinrich Klaproth, Jöns Jacob Berzelius","Cigarette lighter flints (mischmetal), automotive catalytic converters.","लाइटर की चिंगारी पत्थर, कार उत्प्रेरक।","Most abundant rare earth element in Earth's crust.",9,5],
  ["Pr","Praseodymium","प्रासियोडिमियम","140.91",3,6,"f","LANTHANIDE","[Xe] 4f³ 6s²","Solid","1208 K","3793 K","6.77 g/cm³","1.13","+3","1885","Carl Auer von Welsbach","Didymium welder goggles, high-strength permanent magnets.","वेल्डिंग सुरक्षा चश्मा, शक्तिशाली चुंबक।","Produces distinctive yellow-green glass colors.",9,6],
  ["Nd","Neodymium","नियॉडिमियम","144.24",3,6,"f","LANTHANIDE","[Xe] 4f⁴ 6s²","Solid","1297 K","3347 K","7.01 g/cm³","1.14","+3","1885","Carl Auer von Welsbach","World's strongest permanent magnets (NdFeB) in wind turbines & EVs.","विंड टर्बाइन और ईवी की दुनिया के सबसे शक्तिशाली चुंबक।","Indispensable for electric vehicle motors and green energy.",9,7],
  ["Pm","Promethium","प्रोमेथियम","[145]",3,6,"f","LANTHANIDE","[Xe] 4f⁵ 6s²","Solid","1315 K","3273 K","7.26 g/cm³","1.13","+3","1945","Jacob A. Marinsky, Lawrence E. Glendenin","Nuclear-powered cardiac pacemaker batteries, luminous paint.","परमाणु संचालित पेसमेकर बैटरी, चमकने वाले संकेत।","Only radioactive lanthanide metal; named after Prometheus.",9,8],
  ["Sm","Samarium","समारियम","150.36",3,6,"f","LANTHANIDE","[Xe] 4f⁶ 6s²","Solid","1345 K","2067 K","7.52 g/cm³","1.17","+3","1879","Paul-Émile Lecoq de Boisbaudran","High-temp Samarium-Cobalt magnets in fighter jet radar and missiles.","लड़ाकू विमान मिसाइलों के उच्च-तापमान चुंबक।","Maintains magnetic strength at scorching temperatures.",9,9],
  ["Eu","Europium","यूरोपियम","151.96",3,6,"f","LANTHANIDE","[Xe] 4f⁷ 6s²","Solid","1099 K","1802 K","5.244 g/cm³","1.20","+3, +2","1901","Eugène-Anatole Demarçay","Anti-counterfeiting red fluorescent ink on Euro banknotes.","यूरो करेंसी नोटों पर जालसाजी रोधी लाल चमकने वाली स्याही।","Phosphor that glows brilliant red under UV light.",9,10],
  ["Gd","Gadolinium","गैडोलीनियम","157.25",3,6,"f","LANTHANIDE","[Xe] 4f⁷ 5d¹ 6s²","Solid","1585 K","3546 K","7.90 g/cm³","1.20","+3","1880","Jean Charles Galissard de Marignac","Intravenous MRI contrast injections highlighting brain tumors.","मस्तिष्क ट्यूमर की जांच हेतु एमआरआई कॉन्ट्रास्ट इंजेक्शन।","Has highest thermal neutron capture cross section.",9,11],
  ["Tb","Terbium","टर्बियम","158.93",3,6,"f","LANTHANIDE","[Xe] 4f⁹ 6s²","Solid","1629 K","3503 K","8.23 g/cm³","1.20","+3","1843","Carl Gustaf Mosander","Green phosphors in flat TV screens, Terfenol-D sonar transducers.","एलईडी टीवी का हरा फॉस्फोरस, नौसेना सोनार ट्रांसड्यूसर।","Key activator of the green phosphor in color displays.",9,12],
  ["Dy","Dysprosium","डिस्प्रोसियम","162.50",3,6,"f","LANTHANIDE","[Xe] 4f¹⁰ 6s²","Solid","1680 K","2840 K","8.54 g/cm³","1.22","+3","1886","Paul-Émile Lecoq de Boisbaudran","Thermal stabilizer additive for EV drivetrain traction magnets.","ईवी मोटर चुंबक को अधिक गर्म होने से बचाने वाला तत्व।","Name derived from Greek 'dysprositos' meaning hard to obtain.",9,13],
  ["Ho","Holmium","होल्मियम","164.93",3,6,"f","LANTHANIDE","[Xe] 4f¹¹ 6s²","Solid","1734 K","2993 K","8.79 g/cm³","1.23","+3","1878","Jacques-Louis Soret, Marc Delafontaine","Holmium-YAG medical lasers for non-invasive kidney stone crushing.","गुर्दे की पथरी तोड़ने वाले होल्मियम लेजर (Kidney Stone Laser)।","Has the highest magnetic permeability of any element.",9,14],
  ["Er","Erbium","एर्बियम","167.26",3,6,"f","LANTHANIDE","[Xe] 4f¹² 6s²","Solid","1802 K","3141 K","9.066 g/cm³","1.24","+3","1843","Carl Gustaf Mosander","Erbium-Doped Fiber Amplifiers (EDFA) powering the global internet.","इंटरनेट ऑप्टिकल फाइबर सिग्नल एम्पलीफायर (EDFA)।","Amplifies light signals carrying worldwide internet traffic.",9,15],
  ["Tm","Thulium","थुलियम","168.93",3,6,"f","LANTHANIDE","[Xe] 4f¹³ 6s²","Solid","1818 K","2223 K","9.32 g/cm³","1.25","+3","1879","Per Teodor Cleve","Portable battlefield medical X-ray machines, surgical lasers.","पोर्टेबल युद्धक्षेत्र एक्स-रे मशीनें, सर्जरी लेजर।","Second rarest lanthanide; named after mythical northern Thule.",9,16],
  ["Yb","Ytterbium","इटेरबियम","173.05",3,6,"f","LANTHANIDE","[Xe] 4f¹⁴ 6s²","Solid","1097 K","1469 K","6.90 g/cm³","1.10","+3","1878","Jean Charles Galissard de Marignac","Atomic clocks ticking 518 trillion times a second, fiber laser cutters.","अल्ट्रा-सटीक परमाणु घड़ियां, औद्योगिक लेजर कटर।","One of the most precise atomic frequency time standards.",9,17],
  ["Lu","Lutetium","लूटेटियम","174.97",3,6,"d","LANTHANIDE","[Xe] 4f¹⁴ 5d¹ 6s²","Solid","1925 K","3675 K","9.841 g/cm³","1.27","+3","1907","Georges Urbain, Carl Auer von Welsbach","Lutetium-177 cancer targeted therapy for neuroendocrine tumors.","ल्यूटेशियम-177 कैंसर लक्षित रेडियोथेरेपी।","Hardest, densest, and final lanthanide; named after Paris.",9,18],
  // Row 6 continuation (Hf 72 to Rn 86)
  ["Hf","Hafnium","हैफ्नियम","178.49",4,6,"d","TRANSITION_METAL","[Xe] 4f¹⁴ 5d² 6s²","Solid","2506 K","4876 K","13.31 g/cm³","1.30","+4","1923","Dirk Coster, George de Hevesy","Nuclear submarine reactor control rods, computer microprocessors.","परमाणु पनडुब्बी नियंत्रण छड़ें, कंप्यूटर प्रोसेसर।","Superb neutron absorber; named after Latin Copenhagen.",6,4],
  ["Ta","Tantalum","टैंटलम","180.95",5,6,"d","TRANSITION_METAL","[Xe] 4f¹⁴ 5d³ 6s²","Solid","3290 K","5731 K","16.69 g/cm³","1.50","+5","1802","Anders Gustaf Ekeberg","Ultra-compact tantalum capacitors inside all modern smartphones.","स्मार्टफोन के छोटे कैपेसिटर, सर्जिकल प्रत्यारोपण।","Immune to chemical attack; vital for miniature electronics.",6,5],
  ["W","Tungsten","टंगस्टन","183.84",6,6,"d","TRANSITION_METAL","[Xe] 4f¹⁴ 5d⁴ 6s²","Solid","3695 K (3422 °C)","6203 K (5930 °C)","19.25 g/cm³","2.36","+6","1781","Carl Wilhelm Scheele","Incandescent bulb filaments, rocket engine nozzles, armor drill bits.","बल्ब फिलामेंट, रॉकेट नोजल, ड्रिल बिट्स।","Highest melting point of all elements on the periodic table.",6,6],
  ["Re","Rhenium","रेनियम","186.21",7,6,"d","TRANSITION_METAL","[Xe] 4f¹⁴ 5d⁵ 6s²","Solid","3459 K","5869 K","21.02 g/cm³","1.90","+7","1925","Walter Noddack, Ida Tacke-Noddack","Commercial Boeing & Airbus jet engine turbine blades.","जेट विमानों के इंजन टरबाइन ब्लेड।","One of the rarest metals; withstands brutal thermal stresses.",6,7],
  ["Os","Osmium","ओस्मियम","190.23",8,6,"d","TRANSITION_METAL","[Xe] 4f¹⁴ 5d⁶ 6s²","Solid","3306 K","5285 K","22.59 g/cm³","2.20","+4","1803","Smithson Tennant","Fountain pen nib tips, electrical switch contacts, forensic stains.","फाउंटेन पेन की निब, विद्युत स्विच संपर्कों की नोक।","Densest naturally occurring element on Earth.",6,8],
  ["Ir","Iridium","इरिडियम","192.22",9,6,"d","TRANSITION_METAL","[Xe] 4f¹⁴ 5d⁷ 6s²","Solid","2719 K","4701 K","22.56 g/cm³","2.20","+4","1803","Smithson Tennant","Aviation spark plugs, crucibles, asteroid impact clay layer (K-Pg boundary).","विमान स्पार्क प्लग, डायनासोर विलुप्ति क्षुद्रग्रह परत।","Most corrosion-resistant metal known; evidence of asteroid impact.",6,9],
  ["Pt","Platinum","प्लैटिनम","195.08",10,6,"d","TRANSITION_METAL","[Xe] 4f¹⁴ 5d⁹ 6s¹","Solid","2041.4 K","4098 K","21.45 g/cm³","2.28","+2, +4","1735","Antonio de Ulloa","Car catalytic converters, cisplatin cancer chemotherapy, fine jewelry.","गाड़ी प्रदूषण उत्प्रेरक, कैंसर की दवा (सिस्प्लैटिन), आभूषण।","Precious metal that acts as life-saving anti-cancer agent.",6,10],
  ["Au","Gold","गोल्ड (सोना)","196.97",11,6,"d","TRANSITION_METAL","[Xe] 4f¹⁴ 5d¹⁰ 6s¹","Solid","1337.33 K (1064.18 °C)","3129 K","19.30 g/cm³","2.54","+1, +3","Ancient","Known since antiquity","Jewelry, bullion wealth reserve, corrosion-free computer connectors.","आभूषण, अंतरराष्ट्रीय स्वर्ण भंडार, कंप्यूटर चिप कनेक्टर।","Most malleable and ductile metal known; never tarnishes.",6,11],
  ["Hg","Mercury","मरकरी (पारा)","200.59",12,6,"d","TRANSITION_METAL","[Xe] 4f¹⁴ 5d¹⁰ 6s²","Liquid","234.32 K (-38.83 °C)","629.88 K (356.73 °C)","13.534 g/cm³","2.00","+1, +2","Ancient","Known since antiquity","Medical fever thermometers, barometers, fluorescent lighting.","थर्मामीटर (तापमापी), बैरोमीटर, फ्लोरोसेंट लाइट।","Only metallic element that is liquid at standard room temperature.",6,12],
  ["Tl","Thallium","थैलियम","204.38",13,6,"p","POST_TRANSITION","[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹","Solid","577 K","1746 K","11.85 g/cm³","1.62","+1, +3","1861","William Crookes","Cardiac stress test scans (Tl-201), infrared lenses.","हृदय तनाव परीक्षण इमेजिंग (Tl-201 स्कैन) और इन्फ्रारेड लेंस।","Soft gray metal with distinct green spectral emission line.",6,13],
  ["Pb","Lead","लेड (सीसा)","207.2",14,6,"p","POST_TRANSITION","[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²","Solid","600.61 K","2022 K","11.34 g/cm³","2.33","+2, +4","Ancient","Known since antiquity","Car starter batteries, medical X-ray radiation shielding aprons.","गाड़ियों की 12V लेड-एसिड बैटरी, एक्स-रे विकिरण सुरक्षा।","Dense, heavy metal used for radiation absorption.",6,14],
  ["Bi","Bismuth","बिस्मथ","208.98",15,6,"p","POST_TRANSITION","[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³","Solid","544.7 K","1837 K","9.78 g/cm³","2.02","+3","1753","Claude François Geoffroy","Stomach medicine (Pepto-Bismol), fire sprinkler safety plugs.","पेट दर्द की दवा (पेप्टो-बिस्मॉल), अग्निशामक स्प्रिंकलर।","Forms spectacular iridescent hopper crystals; remarkably non-toxic.",6,15],
  ["Po","Polonium","पोलोनियम","[209]",16,6,"p","POST_TRANSITION","[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴","Solid","527 K","1235 K","9.196 g/cm³","2.00","+4","1898","Marie and Pierre Curie","Anti-static brushes, satellite thermoelectric heat sources.","एंटी-स्टैटिक ब्रश और उपग्रहों के लिए ताप स्रोत।","Radioactive metal named after Marie Curie's native Poland.",6,16],
  ["At","Astatine","एस्टैटिन","[210]",17,6,"p","HALOGEN","[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵","Solid","575 K","610 K","6.35 g/cm³","2.20","-1, +1","1940","Dale R. Corson, Kenneth MacKenzie","Targeted alpha cancer therapy (At-211 experimental oncology).","कैंसर कोशिकाओं को नष्ट करने के लिए अल्फा थेरेपी।","Rarest naturally occurring element (under 1 gram on Earth).",6,17],
  ["Rn","Radon","रेडॉन","[222]",18,6,"p","NOBLE_GAS","[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶","Gas","202 K","211.5 K","9.73 g/L","2.20","0","1900","Friedrich Ernst Dorn","Historical radiotherapy, tracking radioactive soil emissions.","रेडिएशन चिकित्सा इतिहास, भूकंप पूर्व चेतावनी अध्ययन।","Dense radioactive noble gas naturally produced by decaying uranium.",6,18],
  ["Fr","Francium","फ्रांसियम","[223]",1,7,"s","ALKALI_METAL","[Rn] 7s¹","Solid","300 K","950 K","1.87 g/cm³","0.70","+1","1939","Marguerite Perey","Atomic laser trap experiments probing weak nuclear forces.","परमाणु भौतिकी अनुसंधान और लेजर ट्रैप प्रयोगों में।","Second-rarest natural element; named after France.",7,1],
  ["Ra","Radium","रेडियम","[226]",2,7,"s","ALKALINE_EARTH","[Rn] 7s²","Solid","973 K","2010 K","5.5 g/cm³","0.90","+2","1898","Marie and Pierre Curie","Targeted cancer bone radiotherapy (Ra-223), historic glow dials.","हड्डियों के कैंसर का इलाज (रेडियम-223) और ऐतिहासिक चमकने वाली घड़ियां।","Luminous radioactive alkaline earth metal discovered by the Curies.",7,2],
  // Actinides 89 to 103 placed at row 10, cols 4..18
  ["Ac","Actinium","एक्टिनियम","[227]",3,7,"f","ACTINIDE","[Rn] 6d¹ 7s²","Solid","1323 K","3471 K","10.07 g/cm³","1.10","+3","1899","André-Louis Debierne","Targeted alpha therapy for metastatic oncology.","कैंसर के खिलाफ लक्षित अल्फा थेरेपी (Targeted Alpha Therapy) में।","Namesake of the actinide series; glows faintly blue.",10,4],
  ["Th","Thorium","थोरियम","232.04",3,7,"f","ACTINIDE","[Rn] 6d² 7s²","Solid","2028 K","5061 K","11.72 g/cm³","1.30","+4","1828","Jöns Jacob Berzelius","Next-gen thorium clean molten salt reactors; India's nuclear plan.","भारत के त्रि-स्तरीय परमाणु ऊर्जा कार्यक्रम का मुख्य ईंधन।","Abundant clean nuclear energy potential; named after Thor.",10,5],
  ["Pa","Protactinium","प्रोटेक्टिनियम","231.04",3,7,"f","ACTINIDE","[Rn] 5f² 6d¹ 7s²","Solid","1841 K","4300 K","15.37 g/cm³","1.50","+5","1913","Kasimir Fajans, Oswald Göhring","Radioactive dating of deep ocean floor sediments.","समुद्र तल की गाद की आयु निर्धारण (रेडियोमेट्रिक डेटिंग)।","Rare dense actinide produced in uranium decay.",10,6],
  ["U","Uranium","यूरेनियम","238.03",3,7,"f","ACTINIDE","[Rn] 5f³ 6d¹ 7s²","Solid","1405.3 K","4404 K","19.1 g/cm³","1.38","+6","1789","Martin Heinrich Klaproth","Commercial nuclear power stations, naval submarine propulsion.","परमाणु बिजली घरों में स्वच्छ बिजली उत्पादन और नौसेना पनडुब्बी।","Heaviest primordial element; primary nuclear fission fuel.",10,7],
  ["Np","Neptunium","नेप्च्यूनियम","[237]",3,7,"f","ACTINIDE","[Rn] 5f⁴ 6d¹ 7s²","Solid","917 K","4273 K","20.45 g/cm³","1.36","+5","1940","Edwin McMillan, Philip Abelson","Precursor for making Pu-238 space batteries.","नासा के अंतरिक्ष यानों के लिए प्लूटोनियम-238 बनाने में।","First synthetic transuranium element; named after Neptune.",10,8],
  ["Pu","Plutonium","प्लूटोनियम","[244]",3,7,"f","ACTINIDE","[Rn] 5f⁶ 7s²","Solid","912.5 K","3501 K","19.816 g/cm³","1.28","+4","1940","Glenn T. Seaborg et al.","Radioisotope Thermoelectric Generators (RTG) on Mars rovers.","मंगल ग्रह पर नासा के रोवर और वॉयेजर यान की परमाणु बैटरियां।","Powers deep-space exploration probes far beyond sunlight.",10,9],
  ["Am","Americium","अमेरिकियम","[243]",3,7,"f","ACTINIDE","[Rn] 5f⁷ 7s²","Solid","1449 K","2880 K","12 g/cm³","1.30","+3","1944","Glenn T. Seaborg et al.","Household smoke detectors (Am-241 saves millions of lives).","घरों में लगने वाले स्मोक डिटेक्टर (धुआं अलार्म) में जीवन रक्षक।","Synthetic actinide present in millions of household alarms.",10,10],
  ["Cm","Curium","क्यूरियम","[247]",3,7,"f","ACTINIDE","[Rn] 5f⁷ 6d¹ 7s²","Solid","1613 K","3383 K","13.51 g/cm³","1.30","+3","1944","Glenn T. Seaborg et al.","Alpha Particle X-ray Spectrometers (APXS) on Mars rovers.","मंगल ग्रह की चट्टानों के रासायनिक विश्लेषण के लिए स्पेक्ट्रोमीटर।","Named in honor of Marie and Pierre Curie.",10,11],
  ["Bk","Berkelium","बर्केलियम","[247]",3,7,"f","ACTINIDE","[Rn] 5f⁹ 7s²","Solid","1259 K","2900 K","14.78 g/cm³","1.30","+3","1949","Lawrence Berkeley National Lab","Target material to synthesize Tennessine (element 117).","टेनेसीन जैसे और भारी तत्वों को बनाने में लक्ष्य सामग्री।","Named after the university city of Berkeley, California.",10,12],
  ["Cf","Californium","कैलिफ़ोर्नियम","[251]",3,7,"f","ACTINIDE","[Rn] 5f¹⁰ 7s²","Solid","1173 K","1743 K","15.1 g/cm³","1.30","+3","1950","Lawrence Berkeley National Lab","Neutron sources for airport luggage scanners, starting reactors.","हवाई अड्डों पर विस्फोटक स्कैनर और परमाणु रिएक्टर चालू करने में।","Incredible neutron emitter; micrograms produce millions/sec.",10,13],
  ["Es","Einsteinium","आइंस्टीनियम","[252]",3,7,"f","ACTINIDE","[Rn] 5f¹¹ 7s²","Solid","1133 K","1269 K","8.84 g/cm³","1.30","+3","1952","Albert Ghiorso et al.","Fundamental transuranic chemistry and bonding tests.","नाभिकीय भौतिकी और भारी तत्वों की रासायनिक प्रकृति के शोध में।","Discovered in the fallout debris of the first hydrogen bomb.",10,14],
  ["Fm","Fermium","फ़र्मियम","[257]",3,7,"f","ACTINIDE","[Rn] 5f¹² 7s²","Solid","1800 K","—","—","1.30","+3","1952","Albert Ghiorso et al.","Heaviest element formed by successive neutron capture.","नाभिकीय रिएक्टरों में न्यूट्रॉन अवशोषण से बना सबसे भारी तत्व।","Named in tribute to nuclear architect Enrico Fermi.",10,15],
  ["Md","Mendelevium","मेंडेलीवियम","[258]",3,7,"f","ACTINIDE","[Rn] 5f¹³ 7s²","Solid","1100 K","—","—","1.30","+3","1955","Albert Ghiorso et al.","Synthesised atom-by-atom to verify periodic trends.","कण त्वरक में एक-एक परमाणु बनाकर नियमों का परीक्षण।","Named in honor of Dmitri Mendeleev, table creator.",10,16],
  ["No","Nobelium","नोबेलियम","[259]",3,7,"f","ACTINIDE","[Rn] 5f¹⁴ 7s²","Solid","1100 K","—","—","1.30","+2","1966","Flerov Lab (Dubna, USSR)","Relativistic quantum physics experiments on superheavy atoms.","भारी आयन नाभिकीय अभिक्रियाओं के वैज्ञानिक अध्ययन में।","Named after Alfred Nobel, benefactor of Nobel Prizes.",10,17],
  ["Lr","Lawrencium","लॉरेंसियम","[266]",3,7,"d","ACTINIDE","[Rn] 5f¹⁴ 7s² 7p¹","Solid","1900 K","—","—","1.30","+3","1961","Albert Ghiorso et al.","Final actinide element, particle accelerator research.","ऐक्टिनाइड श्रृंखला का अंतिम तत्व; कण त्वरक में संश्लेषित।","Named after Ernest Lawrence, inventor of the cyclotron.",10,18],
  // Row 7 continuation (104 to 118)
  ["Rf","Rutherfordium","रदरफ़ोर्डियम","[267]",4,7,"d","TRANSITION_METAL","[Rn] 5f¹⁴ 6d² 7s²","Solid","2400 K","5800 K","23.2 g/cm³","—","+4","1969","JINR (Dubna) / UC Berkeley","Relativistic quantum chemistry of superheavy atoms.","अति-भारी तत्वों के आपेक्षिकीय क्वांटम रसायन अनुसंधान में।","Named after Ernest Rutherford, nuclear physics pioneer.",7,4],
  ["Db","Dubnium","डबनियम","[268]",5,7,"d","TRANSITION_METAL","[Rn] 5f¹⁴ 6d³ 7s²","Solid","—","—","29.3 g/cm³","—","+5","1970","Dubna / UC Berkeley","Group 5 superheavy chemical valence investigations.","समूह 5 के रासायनिक गुणों के वैज्ञानिक अनुसंधान में।","Named after Russian nuclear research center in Dubna.",7,5],
  ["Sg","Seaborgium","सीबोर्गियम","[269]",6,7,"d","TRANSITION_METAL","[Rn] 5f¹⁴ 6d⁴ 7s²","Solid","—","—","35.0 g/cm³","—","+6","1974","Lawrence Berkeley Lab","Superheavy oxychloride gas-phase chemistry research.","सुपरहैवी तत्वों के वाष्प-अवस्था रासायनिक यौगिकों के अध्ययन में।","First element named after a living scientist, Glenn Seaborg.",7,6],
  ["Bh","Bohrium","बोरियम","[270]",7,7,"d","TRANSITION_METAL","[Rn] 5f¹⁴ 6d⁵ 7s²","Solid","—","—","37.1 g/cm³","—","+7","1981","GSI Helmholtz (Germany)","Group 7 periodic trends research in superheavy atoms.","सुपरहैवी तत्वों में आवर्त सारणी की निरंतरता के परीक्षण में।","Named after Niels Bohr, quantum atomic model architect.",7,7],
  ["Hs","Hassium","हैसियम","[277]",8,7,"d","TRANSITION_METAL","[Rn] 5f¹⁴ 6d⁶ 7s²","Solid","—","—","41 g/cm³","—","+8","1984","GSI Helmholtz (Germany)","Volatile tetroxide chemistry comparison with osmium.","ओस्मियम के साथ रासायनिक समानता जांचने वाले प्रयोगों में।","Named after Hesse (Hassia), German state where discovered.",7,8],
  ["Mt","Meitnerium","माइटनेरियम","[278]",9,7,"d","TRANSITION_METAL","[Rn] 5f¹⁴ 6d⁷ 7s²","Solid","—","—","37.4 g/cm³","—","+3","1982","GSI Helmholtz (Germany)","Superheavy radioactive decay and fission testing.","सुपरहैवी नाभिकीय विखंडन और क्षय श्रृंखला अनुसंधानों में।","Named after Lise Meitner, discoverer of nuclear fission.",7,9],
  ["Ds","Darmstadtium","डार्मस्टैडियम","[281]",10,7,"d","TRANSITION_METAL","[Rn] 5f¹⁴ 6d⁸ 7s²","Solid","—","—","34.8 g/cm³","—","+4","1994","GSI Helmholtz (Germany)","Relativistic electron contraction research.","नाभिकीय भौतिकी में उच्च ऊर्जा आयन टकराव अध्ययनों में।","Named after German scientific city of Darmstadt.",7,10],
  ["Rg","Roentgenium","रॉन्टगेनियम","[282]",11,7,"d","TRANSITION_METAL","[Rn] 5f¹⁴ 6d⁹ 7s²","Solid","—","—","28.7 g/cm³","—","+3","1994","GSI Helmholtz (Germany)","Testing relativistic coin metal properties.","सोना, चांदी और कॉपर समूह में सुपरहैवी गुणों के परीक्षण में।","Named after Wilhelm Röntgen, discoverer of medical X-rays.",7,11],
  ["Cn","Copernicium","कॉपरनिसियम","[285]",12,7,"d","TRANSITION_METAL","[Rn] 5f¹⁴ 6d¹⁰ 7s²","Liquid","283 K","340 K","14.0 g/cm³","—","+2","1996","GSI Helmholtz (Germany)","Studies of volatile noble-metal behaviors.","वाष्पशील भारी धातुओं के आपेक्षिकीय गुणों के अध्ययन में।","Named after astronomer Nicolaus Copernicus.",7,12],
  ["Nh","Nihonium","निहोनियम","[286]",13,7,"p","POST_TRANSITION","[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹","Solid","700 K","1400 K","16 g/cm³","—","+1","2004","RIKEN (Japan)","First element discovered in an Asian country.","एशिया में खोजा गया पहला रासायनिक तत्व; नाभिकीय अनुसंधान।","Named after 'Nihon', the Japanese name for Japan.",7,13],
  ["Fl","Flerovium","फ्लेरोवियम","[289]",14,7,"p","POST_TRANSITION","[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²","Solid","340 K","420 K","14 g/cm³","—","+2","1998","JINR (Dubna, Russia)","Probing theoretical 'Island of Stability' for heavy nuclei.","सुपरहैवी नाभिकों के 'स्थिरता के द्वीप' (Island of Stability) में।","Named after Russian physicist Georgy Flyorov.",7,14],
  ["Mc","Moscovium","मॉस्कोवियम","[290]",15,7,"p","POST_TRANSITION","[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³","Solid","670 K","1400 K","13.5 g/cm³","—","+1","2003","JINR (Russia) / LLNL (USA)","Superheavy element synthesis and decay testing.","सुपरहैवी तत्वों के संश्लेषण और रेडियोधर्मी क्षय अनुसंधान में।","Named in honor of Moscow Oblast where Dubna is located.",7,15],
  ["Lv","Livermorium","लिवरमोरियम","[293]",16,7,"p","POST_TRANSITION","[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴","Solid","709 K","1085 K","12.9 g/cm³","—","+2","2000","JINR (Russia) / LLNL (USA)","Testing extreme nuclear fission boundaries.","नाभिकीय भौतिकी में परमाणु विखंडन की चरम सीमाओं का अध्ययन।","Named after Lawrence Livermore National Laboratory (USA).",7,16],
  ["Ts","Tennessine","टेनेसीन","[294]",17,7,"p","HALOGEN","[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵","Solid","723 K","883 K","7.2 g/cm³","—","+1","2010","JINR / Oak Ridge / Vanderbilt","Second-heaviest element synthesised; halogen relativistic trends.","प्रयोगशाला में बनाया गया दूसरा सबसे भारी ज्ञात रासायनिक तत्व।","Named after US state of Tennessee (Oak Ridge Lab).",7,17],
  ["Og","Oganesson","ऑगानेसन","[294]",18,7,"p","NOBLE_GAS","[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶","Gas","325 K","450 K","5.0 g/L","—","0","2002","JINR (Russia) / LLNL (USA)","Final and heaviest element of the periodic table.","आवर्त सारणी का 118वां और अंतिम सबसे भारी तत्व।","Named after nuclear physicist Yuri Oganessian.",7,18]
];

// Append elements 11..118
ELEMENT_NAMES.forEach((item, index) => {
  const atomicNum = index + 11;
  ELEMENTS.push({
    n: atomicNum,
    s: item[0],
    en: item[1],
    hi: item[2],
    m: item[3],
    g: item[4],
    p: item[5],
    b: item[6],
    c: item[7],
    ec: item[8],
    ph: item[9],
    mp: item[10],
    bp: item[11],
    d: item[12],
    eneg: item[13],
    ox: item[14],
    yr: item[15],
    disc: item[16],
    u_en: item[17],
    u_hi: item[18],
    sum_en: item[19],
    sum_hi: item[20],
    r: item[21],
    col: item[22]
  });
});

// App State
let currentLang = "en"; // "en" or "hi"
let currentTheme = "dark"; // "dark" or "light"
let currentFilter = "ALL";
let currentSearch = "";
let currentView = "table"; // "table", "search", "categories", "quiz"
let selectedElement = null;

// Quiz State
let quizMode = "number"; // "number", "symbol", "name"
let quizScore = 0;
let quizStreak = 0;
let quizQuestionIdx = 0;
let currentQuestion = null;
let quizSubmitted = false;

// DOM Helpers
function $(id) { return document.getElementById(id); }

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  setupLanguage();
  renderPeriodicTable();
  setupEventListeners();
  renderElementOfTheDay();
  updateLabels();
});

function setupTheme() {
  const saved = localStorage.getItem("spt_theme") || "dark";
  currentTheme = saved;
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon();
}

function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("spt_theme", currentTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = $("themeToggleBtn");
  if (btn) btn.innerHTML = currentTheme === "dark" ? "☀️" : "🌙";
}

function setupLanguage() {
  const saved = localStorage.getItem("spt_lang") || "en";
  currentLang = saved;
  updateLangToggle();
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "hi" : "en";
  localStorage.setItem("spt_lang", currentLang);
  updateLangToggle();
  updateLabels();
  renderPeriodicTable();
  if (currentView === "search") renderSearchResults();
  if (currentView === "categories") renderCategoriesList();
  if (currentView === "quiz") generateQuizQuestion();
  renderElementOfTheDay();
}

function updateLangToggle() {
  const btn = $("langToggleBtn");
  if (btn) btn.textContent = currentLang === "en" ? "हिन्दी" : "English";
}

function updateLabels() {
  const t = {
    en: {
      title: "STUDENT Periodic Table",
      subtitle: "Explore All 118 Elements • IUPAC Verified",
      tabTable: "Periodic Table",
      tabSearch: "Search",
      tabCategories: "Categories",
      tabQuiz: "Quiz",
      filterAll: "All Categories",
      searchPlaceholder: "Search by Name, Symbol, or Number (e.g. Gold / Au / 79)",
      credit: "Made by Doman Soni",
      version: APP_VERSION,
      legendTitle: "Color Legend",
      eotd: "Element of the Day",
      randomBtn: "Random Element",
      score: "Score",
      streak: "Streak",
      question: "Question",
      nextQ: "Next Question",
      playAgain: "Play Again",
      verifiedData: "Verified scientific data according to IUPAC & NIST standards."
    },
    hi: {
      title: "STUDENT Periodic Table",
      subtitle: "सभी 118 तत्वों का अन्वेषण करें • IUPAC प्रमाणित",
      tabTable: "आवर्त सारणी",
      tabSearch: "तत्व खोजें",
      tabCategories: "श्रेणियां",
      tabQuiz: "क्विज",
      filterAll: "सभी श्रेणियां",
      searchPlaceholder: "नाम, प्रतीक या संख्या से खोजें (उदा: Gold / Au / 79)",
      credit: "Made by Doman Soni",
      version: APP_VERSION,
      legendTitle: "रंग संकेत (Legend)",
      eotd: "आज का तत्व",
      randomBtn: "यादृच्छिक तत्व",
      score: "स्कोर",
      streak: "लगातार सही",
      question: "प्रश्न",
      nextQ: "अगला प्रश्न",
      playAgain: "पुनः खेलें",
      verifiedData: "IUPAC और NIST मानकों के अनुसार 100% प्रामाणिक डेटा।"
    }
  }[currentLang];

  $("appTitle").textContent = t.title;
  $("appSubtitle").textContent = t.subtitle;
  $("tabTableBtn").textContent = t.tabTable;
  $("tabSearchBtn").textContent = t.tabSearch;
  $("tabCategoriesBtn").textContent = t.tabCategories;
  $("tabQuizBtn").textContent = t.tabQuiz;
  $("footerCredit").textContent = t.credit;
  $("footerVersion").textContent = t.version;
  $("searchInput").placeholder = t.searchPlaceholder;
}

// Render Periodic Table Grid
function renderPeriodicTable() {
  const grid = $("periodicTableGrid");
  if (!grid) return;
  grid.innerHTML = "";

  // 18 Column Headers
  for (let c = 1; c <= 18; c++) {
    const colHeader = document.createElement("div");
    colHeader.className = "col-header";
    colHeader.style.gridColumn = c + 1;
    colHeader.style.gridRow = 1;
    colHeader.textContent = c;
    grid.appendChild(colHeader);
  }

  // 7 Period Row Headers
  for (let r = 1; r <= 7; r++) {
    const rowHeader = document.createElement("div");
    rowHeader.className = "row-header";
    rowHeader.style.gridColumn = 1;
    rowHeader.style.gridRow = r + 1;
    rowHeader.textContent = r;
    grid.appendChild(rowHeader);
  }

  // Placeholders for Lanthanides & Actinides on main rows
  const lanthPH = document.createElement("div");
  lanthPH.className = "element-tile placeholder-tile";
  lanthPH.style.gridColumn = 4;
  lanthPH.style.gridRow = 7;
  lanthPH.innerHTML = `<span class="range">57-71</span><span class="p-name">${currentLang === "hi" ? "लैन्थेनाइड्स" : "Lanthanides"}</span>`;
  lanthPH.onclick = () => filterCategory("LANTHANIDE");
  grid.appendChild(lanthPH);

  const actPH = document.createElement("div");
  actPH.className = "element-tile placeholder-tile";
  actPH.style.gridColumn = 4;
  actPH.style.gridRow = 8;
  actPH.innerHTML = `<span class="range">89-103</span><span class="p-name">${currentLang === "hi" ? "ऐक्टिनाइड्स" : "Actinides"}</span>`;
  actPH.onclick = () => filterCategory("ACTINIDE");
  grid.appendChild(actPH);

  // Series Banner for Lanthanides (Row 9 in grid coords: row 10)
  const lanthBanner = document.createElement("div");
  lanthBanner.className = "series-banner";
  lanthBanner.style.gridColumn = "1 / span 4";
  lanthBanner.style.gridRow = 10;
  lanthBanner.textContent = currentLang === "hi" ? "* लैन्थेनाइड्स (57-71)" : "* Lanthanides (57-71)";
  grid.appendChild(lanthBanner);

  // Series Banner for Actinides (Row 10 in grid coords: row 11)
  const actBanner = document.createElement("div");
  actBanner.className = "series-banner";
  actBanner.style.gridColumn = "1 / span 4";
  actBanner.style.gridRow = 11;
  actBanner.textContent = currentLang === "hi" ? "** ऐक्टिनाइड्स (89-103)" : "** Actinides (89-103)";
  grid.appendChild(actBanner);

  // Render all 118 element tiles
  ELEMENTS.forEach(el => {
    const tile = document.createElement("div");
    tile.className = `element-tile ${el.c}`;
    tile.id = `tile-${el.n}`;

    let gridRow = el.r + 1;
    let gridCol = el.col + 1;

    tile.style.gridColumn = gridCol;
    tile.style.gridRow = gridRow;

    const cat = CATEGORIES[el.c] || { color: "#3B82F6", bg: "rgba(59,130,246,0.15)" };
    tile.style.borderColor = cat.color;
    tile.style.background = cat.bg;

    const name = currentLang === "hi" ? el.hi : el.en;

    tile.innerHTML = `
      <div class="tile-header">
        <span class="atomic-num">${el.n}</span>
      </div>
      <div class="tile-symbol">${el.s}</div>
      <div class="tile-name" title="${name}">${name}</div>
      <div class="tile-mass">${el.m}</div>
    `;

    // Apply Dimming if filter active
    if (currentFilter !== "ALL" && el.c !== currentFilter) {
      tile.classList.add("dimmed");
    }

    tile.onclick = () => openElementModal(el);
    grid.appendChild(tile);
  });

  renderCategoryChips();
}

function renderCategoryChips() {
  const container = $("categoryChipsContainer");
  if (!container) return;
  container.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.className = `chip ${currentFilter === "ALL" ? "active" : ""}`;
  allBtn.textContent = currentLang === "hi" ? "सभी श्रेणियां" : "All Categories";
  allBtn.onclick = () => filterCategory("ALL");
  container.appendChild(allBtn);

  Object.keys(CATEGORIES).forEach(catKey => {
    const cat = CATEGORIES[catKey];
    const chip = document.createElement("button");
    chip.className = `chip ${currentFilter === catKey ? "active" : ""}`;
    chip.innerHTML = `<span class="chip-dot" style="background:${cat.color}"></span>${currentLang === "hi" ? cat.hi : cat.en}`;
    chip.onclick = () => filterCategory(catKey);
    container.appendChild(chip);
  });
}

function filterCategory(catKey) {
  currentFilter = currentFilter === catKey ? "ALL" : catKey;
  renderCategoryChips();
  // Update tile opacity
  ELEMENTS.forEach(el => {
    const tile = $(`tile-${el.n}`);
    if (tile) {
      if (currentFilter === "ALL" || el.c === currentFilter) {
        tile.classList.remove("dimmed");
      } else {
        tile.classList.add("dimmed");
      }
    }
  });
}

// Element Modal Dialog
function openElementModal(el) {
  selectedElement = el;
  const modal = $("elementModal");
  if (!modal) return;

  const cat = CATEGORIES[el.c];
  const catName = currentLang === "hi" ? cat.hi : cat.en;
  const name = currentLang === "hi" ? el.hi : el.en;
  const subName = currentLang === "hi" ? el.en : el.hi;

  $("modalCategoryBadge").textContent = catName;
  $("modalCategoryBadge").style.background = cat.color;

  $("modalHero").style.borderColor = cat.color;
  $("modalHero").style.background = cat.bg;

  $("modalAtomicNum").textContent = `#${el.n}`;
  $("modalAtomicNum").style.color = cat.color;
  $("modalMass").textContent = `${el.m} u`;
  $("modalSymbol").textContent = el.s;
  $("modalSymbol").style.color = cat.color;
  $("modalName").textContent = `${name} (${subName})`;

  $("modalBadges").innerHTML = `
    <span class="badge">Period: ${el.p}</span>
    <span class="badge">Group: ${el.g > 0 ? el.g : "—"}</span>
    <span class="badge">Block: ${el.b}</span>
    <span class="badge">Phase: ${el.ph}</span>
  `;

  const props = [
    [currentLang === "hi" ? "इलेक्ट्रॉनिक विन्यास" : "Electron Config", el.ec, true],
    [currentLang === "hi" ? "ऑक्सीकरण अवस्थाएं" : "Oxidation States", el.ox, false],
    [currentLang === "hi" ? "विद्युत-ऋणात्मकता" : "Electronegativity", el.eneg, false],
    [currentLang === "hi" ? "घनत्व" : "Density", el.d, false],
    [currentLang === "hi" ? "गलनांक" : "Melting Point", el.mp, false],
    [currentLang === "hi" ? "क्वथनांक" : "Boiling Point", el.bp, false],
    [currentLang === "hi" ? "खोज का वर्ष" : "Discovered", el.yr, false],
    [currentLang === "hi" ? "खोजकर्ता" : "Discoverer", el.disc, false]
  ];

  let propsHtml = "";
  props.forEach(([label, val, isMono]) => {
    propsHtml += `
      <div class="prop-row">
        <span class="prop-label">${label}</span>
        <span class="prop-value ${isMono ? "mono" : ""}">${val}</span>
      </div>
    `;
  });
  $("modalProperties").innerHTML = propsHtml;

  $("modalUsesTitle").textContent = currentLang === "hi" ? "सामान्य उपयोग (Practical Uses)" : "Practical Uses";
  $("modalUsesText").textContent = currentLang === "hi" ? el.u_hi : el.u_en;

  $("modalSummaryTitle").textContent = currentLang === "hi" ? "संक्षिप्त वैज्ञानिक जानकारी" : "Scientific Overview";
  $("modalSummaryText").textContent = currentLang === "hi" ? el.sum_hi : el.sum_en;

  $("modalCounter").textContent = `${el.n} / 118`;

  modal.classList.add("open");
}

function closeModal() {
  const modal = $("elementModal");
  if (modal) modal.classList.remove("open");
}

function prevElement() {
  if (!selectedElement) return;
  const prevN = selectedElement.n > 1 ? selectedElement.n - 1 : 118;
  const nextEl = ELEMENTS.find(e => e.n === prevN);
  if (nextEl) openElementModal(nextEl);
}

function nextElement() {
  if (!selectedElement) return;
  const nextN = selectedElement.n < 118 ? selectedElement.n + 1 : 1;
  const nextEl = ELEMENTS.find(e => e.n === nextN);
  if (nextEl) openElementModal(nextEl);
}

// Search Feature
function renderSearchResults() {
  const container = $("searchResultsList");
  if (!container) return;
  container.innerHTML = "";

  const q = currentSearch.trim().toLowerCase();
  const numQ = parseInt(q);

  const results = ELEMENTS.filter(el => {
    if (!q) return true;
    if (!isNaN(numQ)) return el.n === numQ;
    return (
      el.s.toLowerCase().includes(q) ||
      el.en.toLowerCase().includes(q) ||
      el.hi.toLowerCase().includes(q)
    );
  });

  $("searchResultsCount").textContent = `${results.length} ${currentLang === "hi" ? "तत्व मिले" : "elements found"}`;

  if (results.length === 0) {
    container.innerHTML = `<div class="no-results">${currentLang === "hi" ? "कोई तत्व नहीं मिला" : "No matching elements found."}</div>`;
    return;
  }

  results.forEach(el => {
    const cat = CATEGORIES[el.c];
    const card = document.createElement("div");
    card.className = "search-card";
    card.style.borderColor = cat.color;

    const name = currentLang === "hi" ? el.hi : el.en;
    const sub = currentLang === "hi" ? el.en : el.hi;
    const catTitle = currentLang === "hi" ? cat.hi : cat.en;

    card.innerHTML = `
      <div class="search-symbol-box" style="background:${cat.bg}; border-color:${cat.color};">
        <span class="s-num">${el.n}</span>
        <span class="s-sym">${el.s}</span>
      </div>
      <div class="search-info">
        <div class="search-title">${name} <span class="search-sub">(${sub})</span></div>
        <div class="search-cat" style="color:${cat.color}">${catTitle}</div>
        <div class="search-meta">Period ${el.p} • Group ${el.g > 0 ? el.g : "—"} • Mass: ${el.m} u</div>
      </div>
    `;

    card.onclick = () => openElementModal(el);
    container.appendChild(card);
  });
}

// Categories Explorer View
function renderCategoriesList() {
  const container = $("categoriesContainer");
  if (!container) return;
  container.innerHTML = "";

  Object.keys(CATEGORIES).forEach(catKey => {
    const cat = CATEGORIES[catKey];
    const elementsInCat = ELEMENTS.filter(e => e.c === catKey);
    const catTitle = currentLang === "hi" ? cat.hi : cat.en;

    const catCard = document.createElement("div");
    catCard.className = "cat-card";
    catCard.style.borderColor = cat.color;

    let elementsPills = "";
    elementsInCat.forEach(el => {
      elementsPills += `
        <div class="cat-elem-pill" onclick="openElementModal(ELEMENTS[${el.n - 1}])">
          <span class="p-num">#${el.n}</span>
          <span class="p-sym">${el.s}</span>
          <span class="p-name">${currentLang === "hi" ? el.hi : el.en}</span>
        </div>
      `;
    });

    catCard.innerHTML = `
      <div class="cat-card-header">
        <div class="cat-card-title">
          <span class="cat-indicator" style="background:${cat.color}"></span>
          <h3>${catTitle}</h3>
        </div>
        <span class="cat-count-badge" style="background:${cat.bg}; color:${cat.color};">${elementsInCat.length} ${currentLang === "hi" ? "तत्व" : "elements"}</span>
      </div>
      <div class="cat-elements-grid">${elementsPills}</div>
    `;

    container.appendChild(catCard);
  });
}

// Educational Quiz
function switchQuizMode(mode) {
  quizMode = mode;
  quizScore = 0;
  quizStreak = 0;
  quizQuestionIdx = 0;
  $("btnQuizNum").classList.toggle("active", mode === "number");
  $("btnQuizSym").classList.toggle("active", mode === "symbol");
  $("btnQuizName").classList.toggle("active", mode === "name");
  generateQuizQuestion();
}

function generateQuizQuestion() {
  quizSubmitted = false;
  $("quizFeedback").classList.remove("visible");
  $("quizNextBtn").style.display = "none";

  const total = 10;
  if (quizQuestionIdx >= total) {
    showQuizFinished();
    return;
  }

  const target = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
  const others = ELEMENTS.filter(e => e.n !== target.n).sort(() => 0.5 - Math.random()).slice(0, 3);
  const name = currentLang === "hi" ? target.hi : target.en;

  let qText = "";
  let correctOpt = "";
  let wrongOpts = [];
  let explanation = "";

  if (quizMode === "number") {
    qText = currentLang === "hi"
      ? `तत्व '${name}' (${target.s}) का परमाणु क्रमांक (Atomic Number) क्या है?`
      : `What is the Atomic Number of '${name}' (${target.s})?`;
    correctOpt = `${target.n}`;
    wrongOpts = others.map(o => `${o.n}`);
    explanation = currentLang === "hi"
      ? `${target.hi} (#${target.n}) आवर्त ${target.p}, समूह ${target.g > 0 ? target.g : "—"} का सदस्य है।`
      : `${target.en} (#${target.n}) is in Period ${target.p}, Group ${target.g > 0 ? target.g : "—"}.`;
  } else if (quizMode === "symbol") {
    qText = currentLang === "hi"
      ? `तत्व '${name}' (#${target.n}) का रासायनिक प्रतीक क्या है?`
      : `What is the chemical symbol for '${name}' (#${target.n})?`;
    correctOpt = target.s;
    wrongOpts = others.map(o => o.s);
    explanation = currentLang === "hi"
      ? `${target.hi} का प्रतीक '${target.s}' है। परमाणु भार: ${target.m} u.`
      : `The symbol for ${target.en} is '${target.s}'. Atomic mass: ${target.m} u.`;
  } else {
    qText = currentLang === "hi"
      ? `प्रतीक '${target.s}' (परमाणु क्रमांक #${target.n}) किस तत्व का है?`
      : `Which element has symbol '${target.s}' and atomic number #${target.n}?`;
    correctOpt = currentLang === "hi" ? target.hi : target.en;
    wrongOpts = others.map(o => currentLang === "hi" ? o.hi : o.en);
    explanation = currentLang === "hi"
      ? `'${target.s}' का अर्थ ${target.hi} (${target.en}) है।`
      : `'${target.s}' corresponds to ${target.en} (Atomic weight: ${target.m} u).`;
  }

  const allOpts = [...wrongOpts, correctOpt].sort(() => 0.5 - Math.random());
  currentQuestion = {
    target,
    qText,
    correctOpt,
    allOpts,
    explanation
  };

  $("quizActiveCard").style.display = "block";
  $("quizFinishedCard").style.display = "none";

  $("quizCounter").textContent = `${currentLang === "hi" ? "प्रश्न" : "Question"} ${quizQuestionIdx + 1} / ${total}`;
  $("quizQuestionText").textContent = qText;
  $("quizScoreText").textContent = `${currentLang === "hi" ? "स्कोर" : "Score"}: ${quizScore} / ${total}`;
  $("quizStreakText").textContent = `Streak: ${quizStreak} 🔥`;
  $("quizProgressBar").style.width = `${((quizQuestionIdx + 1) / total) * 100}%`;

  const optionsContainer = $("quizOptions");
  optionsContainer.innerHTML = "";

  allOpts.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt-btn";
    btn.textContent = opt;
    btn.onclick = () => submitQuizAnswer(opt, btn);
    optionsContainer.appendChild(btn);
  });
}

function submitQuizAnswer(chosen, btnEl) {
  if (quizSubmitted) return;
  quizSubmitted = true;

  const isCorrect = chosen === currentQuestion.correctOpt;
  if (isCorrect) {
    quizScore++;
    quizStreak++;
    btnEl.classList.add("correct");
  } else {
    quizStreak = 0;
    btnEl.classList.add("wrong");
    // highlight correct one
    const allBtns = document.querySelectorAll(".quiz-opt-btn");
    allBtns.forEach(b => {
      if (b.textContent === currentQuestion.correctOpt) {
        b.classList.add("correct");
      }
    });
  }

  const total = 10;
  $("quizScoreText").textContent = `${currentLang === "hi" ? "स्कोर" : "Score"}: ${quizScore} / ${total}`;
  $("quizStreakText").textContent = `Streak: ${quizStreak} 🔥`;

  $("quizFeedbackText").textContent = isCorrect
    ? (currentLang === "hi" ? "🎉 बिल्कुल सही उत्तर!" : "🎉 Correct! Well done!")
    : (currentLang === "hi" ? "❌ गलत उत्तर!" : "❌ Incorrect!");
  $("quizFeedbackText").style.color = isCorrect ? "#10B981" : "#EF4444";
  $("quizExplanation").textContent = currentQuestion.explanation;

  $("quizFeedback").classList.add("visible");
  $("quizNextBtn").style.display = "inline-block";
}

function nextQuizQuestion() {
  quizQuestionIdx++;
  generateQuizQuestion();
}

function showQuizFinished() {
  $("quizActiveCard").style.display = "none";
  $("quizFinishedCard").style.display = "block";
  $("quizFinalScore").textContent = `${currentLang === "hi" ? "आपका अंतिम स्कोर" : "Your Final Score"}: ${quizScore} / 10`;
}

function restartQuiz() {
  quizScore = 0;
  quizStreak = 0;
  quizQuestionIdx = 0;
  generateQuizQuestion();
}

// Element of the day
function renderElementOfTheDay() {
  const d = new Date();
  const dayIndex = (d.getFullYear() * 37 + d.getDate() * 13 + d.getMonth()) % 118;
  const el = ELEMENTS[dayIndex];

  const cat = CATEGORIES[el.c];
  $("eotdCard").style.borderColor = cat.color;
  $("eotdCard").style.background = cat.bg;

  $("eotdBadge").textContent = `#${el.n}`;
  $("eotdBadge").style.background = cat.color;

  $("eotdSymbol").textContent = el.s;
  $("eotdSymbol").style.color = cat.color;

  $("eotdName").textContent = currentLang === "hi" ? el.hi : el.en;
  $("eotdCat").textContent = currentLang === "hi" ? cat.hi : cat.en;
  $("eotdCat").style.color = cat.color;

  $("eotdCard").onclick = () => openElementModal(el);
}

// Random Element trigger
function triggerRandomElement() {
  const rnd = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
  openElementModal(rnd);
}

// Navigation Views
function switchView(view) {
  currentView = view;
  $("viewTable").style.display = view === "table" ? "block" : "none";
  $("viewSearch").style.display = view === "search" ? "block" : "none";
  $("viewCategories").style.display = view === "categories" ? "block" : "none";
  $("viewQuiz").style.display = view === "quiz" ? "block" : "none";

  $("tabTableBtn").classList.toggle("active", view === "table");
  $("tabSearchBtn").classList.toggle("active", view === "search");
  $("tabCategoriesBtn").classList.toggle("active", view === "categories");
  $("tabQuizBtn").classList.toggle("active", view === "quiz");

  if (view === "search") renderSearchResults();
  if (view === "categories") renderCategoriesList();
  if (view === "quiz") switchQuizMode("number");
}

function setupEventListeners() {
  $("langToggleBtn").onclick = toggleLanguage;
  $("themeToggleBtn").onclick = toggleTheme;

  $("tabTableBtn").onclick = () => switchView("table");
  $("tabSearchBtn").onclick = () => switchView("search");
  $("tabCategoriesBtn").onclick = () => switchView("categories");
  $("tabQuizBtn").onclick = () => switchView("quiz");

  $("btnRandomElement").onclick = triggerRandomElement;

  $("searchInput").addEventListener("input", (e) => {
    currentSearch = e.target.value;
    renderSearchResults();
  });

  $("modalCloseBtn").onclick = closeModal;
  $("modalPrevBtn").onclick = prevElement;
  $("modalNextBtn").onclick = nextElement;

  $("btnQuizNum").onclick = () => switchQuizMode("number");
  $("btnQuizSym").onclick = () => switchQuizMode("symbol");
  $("btnQuizName").onclick = () => switchQuizMode("name");

  $("quizNextBtn").onclick = nextQuizQuestion;
  $("quizRestartBtn").onclick = restartQuiz;

  // Close modal on escape or background click
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  $("elementModal").onclick = (e) => {
    if (e.target.id === "elementModal") closeModal();
  };
}
