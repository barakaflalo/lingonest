/* ===== LingoNest — lang-hi.js : Hindi content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('hi', {
  ver: '1.15.0',
  curSym: "₹",
  country: {"he": "הודו", "en": "India", "ru": "Индия", "es": "India", "ar": "الهند"},
  emergency: [
    ["🆘", {"he": "חירום (כל השירותים)", "en": "Emergency (all services)", "ru": "Экстренный (все службы)", "es": "Emergencias (todo)", "ar": "الطوارئ (كل الخدمات)"}, "112"],
    ["🚓", {"he": "משטרה", "en": "Police", "ru": "Полиция", "es": "Policía", "ar": "الشرطة"}, "100"],
    ["🚑", {"he": "אמבולנס", "en": "Ambulance", "ru": "Скорая", "es": "Ambulancia", "ar": "الإسعاف"}, "108", "102"],
    ["👮", {"he": "קו תיירים (אנגלית)", "en": "Tourist helpline (English)", "ru": "Линия для туристов", "es": "Línea turística", "ar": "خط السياح"}, "1363"]
  ],
  tips: [
    {"t": {"he": "नमस्ते — עם ידיים", "en": "नमस्ते — with your hands"}, "b": {"he": "נמסטה אומרים עם כפות ידיים צמודות מול החזה וקידה קלה. זה שלום, להתראות וגם תודה על הכבוד. כלפי מבוגרים — נמסטה ג׳י.", "en": "Say namaste with palms together at the chest and a slight bow. It's hello, goodbye and respect in one. For elders — namaste ji."}, "ex": [["नमस्ते जी", "namaste ji", "נמסטה ג׳י", "שלום (בכבוד)", "Hello (respectfully)"]]},
    {"t": {"he": "आप מול तुम — והסיומת जी", "en": "आप vs. तुम — and the suffix जी"}, "b": {"he": "आप (אאפ) הוא \"אתה\" המנומס — לכל זר. תוספת जी (ג׳י) אחרי שם או מילה מוסיפה כבוד: हाँ जी (כן, בכבוד), शर्मा जी. זה נשמע חם ומנומס.", "en": "आप (aap) is the polite \"you\" for any stranger. Adding जी (ji) adds respect: हाँ जी (yes, respectfully), Sharma ji."}, "ex": [["हाँ जी", "haan ji", "האן ג׳י", "כן (בכבוד)", "Yes (respectfully)"]]},
    {"t": {"he": "הפועל בסוף, ומילות יחס אחרי", "en": "Verb last, postpositions after"}, "b": {"he": "בהינדי אומרים \"אני תה שותה\". ומילות היחס באות אחרי המילה: होटल में = במלון (\"מלון ב\"), दिल्ली से = מדלהי.", "en": "Hindi says \"I tea drink\". Prepositions come after: होटल में = in the hotel (\"hotel in\"), दिल्ली से = from Delhi."}, "ex": [["मैं चाय पीता हूँ", "main chaay peeta hoon", "מיין צ׳אי פיטה הון", "אני שותה תה", "I drink tea"]]},
    {"t": {"he": "זכר ונקבה גם בפועל", "en": "Gender in verbs too"}, "b": {"he": "בהינדי הפועל משתנה לפי מי שמדבר: גבר אומר मैं जाता हूँ (אני הולך), אישה — मैं जाती हूँ. בהגדרות אפשר לבחור לשון נקבה, והמשפטים יתעדכנו. שים לב גם: कल (קל) = גם אתמול וגם מחר — מבינים מההקשר!", "en": "Verbs follow the speaker's gender: a man says मैं जाता हूँ, a woman मैं जाती हूँ. Pick your form in Settings. Also: कल (kal) means both yesterday and tomorrow — context decides!"}, "ex": [["कल", "kal", "קל", "אתמול / מחר", "yesterday / tomorrow"]]},
    {"t": {"he": "הינגליש — ערבוב זה בסדר", "en": "Hinglish — mixing is fine"}, "b": {"he": "בהודו מערבבים אנגלית והינדי כל הזמן: \"टिकट कितने का है?\" (כמה הכרטיס?). אנגלית מדוברת בערים ובתיירות, אבל כמה מילים בהינדי פותחות לבבות ומורידות מחירים.", "en": "Indians mix English and Hindi all the time. English works in cities and tourism, but a few Hindi words open hearts — and lower prices."}, "ex": [["बहुत अच्छा!", "bahut achchha!", "בהות אצ׳ה", "מצוין!", "Very good!"]]},
    {"t": {"he": "מיקוח והנהון", "en": "Bargaining and the head wobble"}, "b": {"he": "בשווקים וברִיקְשוֹת מתמקחים — המחיר הראשון גבוה. ההנהון ההודי (נדנוד הראש מצד לצד) יכול להיות כן, בסדר, או \"הבנתי\" — לא לא! לפני נסיעה בריקשה סגור מחיר מראש.", "en": "Bargain in markets and rickshaws — the first price is high. The Indian head wobble can mean yes, OK or \"I understand\" — not no! Agree the rickshaw fare before you ride."}, "ex": [["कितना लगेगा?", "kitna lagega?", "קיתנה לגגה", "כמה זה יעלה?", "How much will it cost?"]]}
  ],
  note: {"he": "הינדי נכתבת בכתב דֶוָנָאגָרִי — האותיות \"תלויות\" על קו עליון. לכל עיצור יש תנועה מובנית a (क = קַ). תנועה אחרת נכתבת כסימן קטן סביב העיצור (कि = קִי, को = קוֹ). יש הבדל בין עיצור רגיל לנשוף (क / ख) ובין לשון על השיניים למקופלת (त / ट).", "en": "Hindi is written in Devanagari — letters hang from a top line. Each consonant carries a built-in a (क = ka); other vowels are small marks around it (कि = ki, को = ko). Plain vs. aspirated (क / ख) and dental vs. retroflex (त / ट) matter.", "ru": "Хинди пишется деванагари — буквы «висят» на верхней черте. Каждая согласная содержит «а» (क = ка), другие гласные — значки вокруг неё (कि = ки).", "es": "El hindi se escribe en devanagari: las letras cuelgan de una línea superior. Cada consonante lleva una a (क = ka); las demás vocales son signos alrededor (कि = ki).", "ar": "تُكتب الهندية بخط ديفاناغاري — الحروف معلّقة على خط علوي. لكل ساكن حركة a مدمجة (क = كا)، والحركات الأخرى علامات حوله (कि = كي)."},
  vowelNote: {"he": "בשורה העליונה — התנועות כשהן עומדות לבד (בתחילת מילה). למטה — איך אותה תנועה נצמדת לעיצור क. שים לב: ि נכתבת לפני העיצור אבל נהגית אחריו!", "en": "Top: vowels on their own (word-initial). Below: the same vowels attached to क. Note ि is written before the consonant but pronounced after it!", "ru": "Сверху — самостоятельные гласные, ниже — те же гласные при согласной क. ि пишется перед согласной, но читается после!", "es": "Arriba: vocales solas. Abajo: las mismas unidas a क. ¡ि se escribe antes de la consonante pero se pronuncia después!", "ar": "في الأعلى: الحركات منفردة، وفي الأسفل: نفسها ملتصقة بـ क. انتبه: ि تُكتب قبل الساكن وتُلفظ بعده!"},
  alpha: [
    ["क", "क", "קַ", "ka"],
    ["ख", "ख", "ק נשופה", "kha"],
    ["ग", "ग", "ג", "ga"],
    ["घ", "घ", "ג נשופה", "gha"],
    ["ङ", "ङ", "נג", "nga"],
    ["च", "च", "צ׳", "cha"],
    ["छ", "छ", "צ׳ נשופה", "chha"],
    ["ज", "ज", "ג׳", "ja"],
    ["झ", "झ", "ג׳ נשופה", "jha"],
    ["ञ", "ञ", "ני", "nya"],
    ["ट", "ट", "ט (לשון מקופלת)", "ṭa"],
    ["ठ", "ठ", "ט נשופה (מקופלת)", "ṭha"],
    ["ड", "ड", "ד (לשון מקופלת)", "ḍa"],
    ["ढ", "ढ", "ד נשופה (מקופלת)", "ḍha"],
    ["ण", "ण", "נ (מקופלת)", "ṇa"],
    ["त", "त", "ת (לשון על השיניים)", "ta"],
    ["थ", "थ", "ת נשופה", "tha"],
    ["द", "द", "ד (שיניים)", "da"],
    ["ध", "ध", "ד נשופה", "dha"],
    ["न", "न", "נ", "na"],
    ["प", "प", "פּ", "pa"],
    ["फ", "फ", "פ נשופה / פ", "pha"],
    ["ब", "ब", "ב", "ba"],
    ["भ", "भ", "ב נשופה", "bha"],
    ["म", "म", "מ", "ma"],
    ["य", "य", "י", "ya"],
    ["र", "र", "ר", "ra"],
    ["ल", "ल", "ל", "la"],
    ["व", "व", "ו", "va"],
    ["श", "श", "ש", "sha"],
    ["ष", "ष", "ש (מקופלת)", "ṣa"],
    ["स", "स", "ס", "sa"],
    ["ह", "ह", "ה", "ha"]
  ],
  vowels: [
    ["अ", "अ", "אַ קצרה", "a"],
    ["आ", "आ", "אָא ארוכה", "aa"],
    ["इ", "इ", "אִ קצרה", "i"],
    ["ई", "ई", "אִי ארוכה", "ee"],
    ["उ", "उ", "אֻ קצרה", "u"],
    ["ऊ", "ऊ", "אוּ ארוכה", "oo"],
    ["ऋ", "ऋ", "רִי", "ri"],
    ["ए", "ए", "אֵה", "e"],
    ["ऐ", "ऐ", "אֶ פתוחה", "ai"],
    ["ओ", "ओ", "אוֹ", "o"],
    ["औ", "औ", "אוֹ פתוחה", "au"],
    ["अं", "अं", "אַן (אנפוף)", "an"],
    ["का", "का", "קָא — ा אחרי העיצור", "kaa"],
    ["कि", "कि", "קִי — ि לפני העיצור!", "ki"],
    ["की", "की", "קִיי — ी אחרי", "kee"],
    ["कु", "कु", "קֻ — ु מתחת", "ku"],
    ["कू", "कू", "קוּ — ू מתחת", "koo"],
    ["के", "के", "קֵה — े מעל", "ke"],
    ["कै", "कै", "קֶ — ै מעל", "kai"],
    ["को", "को", "קוֹ — ो אחרי", "ko"],
    ["कौ", "कौ", "קוֹ פתוח — ौ אחרי", "kau"]
  ],
  /* speaker = female: [regex source, flags, replacement] */
  gender: [["खाता", "g", "खाती"], ["khaata", "g", "khaati"], ["חאטה", "g", "חאטי"], ["गया हूँ", "g", "गई हूँ"], ["gaya hoon", "g", "gayi hoon"], ["גאיה הון", "g", "גאיי הון"], ["रहा हूँ", "g", "रही हूँ"], ["raha hoon", "g", "rahi hoon"], ["רהה הון", "g", "רהי הון"]],
  words: `hello|नमस्ते|namaste|נמסטה
bye|फिर मिलेंगे|phir milenge|פיר מילנגה
morning|सुप्रभात|suprabhaat|סופרבהאת
thanks|धन्यवाद|dhanyavaad|דניאוואד
please|कृपया|kripaya|קריפיה
sorry|माफ़ कीजिए|maaf keejiye|מאף קיג׳יה
yes|हाँ|haan|האן
no|नहीं|nahin|נהין
howareyou|आप कैसे हैं?|aap kaise hain?|אאפ קיסה הין
good|अच्छा|achchha|אצ׳ה
ok|ठीक है|theek hai|טיק הה
n1|एक|ek|אק
n2|दो|do|דו
n3|तीन|teen|טין
n4|चार|chaar|צ׳אר
n5|पाँच|paanch|פאנץ׳
n6|छह|chhah|צ׳ה
n7|सात|saat|סאת
n8|आठ|aath|אאט
n9|नौ|nau|נאו
n10|दस|das|דס
n0|शून्य|shoonya|שוניה
n20|बीस|bees|ביס
n50|पचास|pachaas|פצ׳אס
n100|सौ|sau|סאו
n1000|हज़ार|hazaar|הזאר
n11|ग्यारह|gyaarah|גיארה
n12|बारह|baarah|בארה
n13|तेरह|terah|טרה
n14|चौदह|chaudah|צ׳אודה
n15|पंद्रह|pandrah|פנדרה
n16|सोलह|solah|סולה
n17|सत्रह|satrah|סתרה
n18|अठारह|athaarah|אטארה
n19|उन्नीस|unnees|אוניס
n30|तीस|tees|טיס
n40|चालीस|chaalees|צ׳אליס
n60|साठ|saath|סאט
n70|सत्तर|sattar|סתר
n80|अस्सी|assi|אסי
n90|नब्बे|nabbe|נבה
n200|दो सौ|do sau|דו סאו
n500|पाँच सौ|paanch sau|פאנץ׳ סאו
n10000|दस हज़ार|das hazaar|דס הזאר
water|पानी|paani|פאני
toilet|टॉयलेट|toilet|טוילט
where|कहाँ?|kahaan?|קהאן
howmuch|कितना?|kitna?|קיתנה
this|यह|yah|יה
friend|दोस्त|dost|דוסט
food|भोजन|bhojan|בוג׳ן
bread|रोटी|roti|רוטי
coffee|कॉफ़ी|kofi|קופי
tea|चाय|chaay|צ׳אי
chicken|चिकन|chikan|צ׳יקן
fish|मछली|machhli|מצ׳לי
rice|चावल|chaaval|צ׳אוול
beer|बीयर|biyar|ביר
bill|बिल|bil|ביל
tasty|स्वादिष्ट|svaadisht|סוואדישט
egg|अंडा|anda|אנדה
fruit|फल|phal|פל
veg|सब्ज़ियाँ|sabziyaan|סבזיאן
meat|मांस|maans|מאנס
milk|दूध|doodh|דוד
spicy|तीखा|teekha|טיחה
restaurant|रेस्टोरेंट|restorent|רסטורנט
ice|बर्फ़|barf|ברף
taxi|टैक्सी|taiksi|טקסי
bus|बस|bas|בס
train|ट्रेन|tren|טרן
airport|हवाई अड्डा|havaai adda|הוואי אדה
hotel|होटल|hotal|הוטל
left|बाएँ|baayen|באיין
right|दाएँ|daayen|דאיין
straight|सीधा|seedha|סידה
stop|रुकिए|rukiye|רוקיה
ticket|टिकट|tikat|טיקט
money|पैसे|paise|פייסה
expensive|महँगा|mehnga|מהנגה
cheap|सस्ता|sasta|סאסטה
market|बाज़ार|baazaar|באזאר
pharmacy|दवा की दुकान|dava ki dukaan|דווה קי דוקאן
open|खुला|khula|חולה
closed|बंद|band|בנד
help|बचाओ!|bachaao!|בצ׳או
police|पुलिस|pulis|פוליס
doctor|डॉक्टर|doktar|דוקטר
hospital|अस्पताल|aspataal|אספתאל
today|आज|aaj|אאג׳
tomorrow|कल (आने वाला)|kal (aane vaala)|קל (אאנה וואלה)
yesterday|कल (बीता हुआ)|kal (beeta hua)|קל (ביטה הואה)
now|अभी|abhi|אבהי
t_morning|सुबह|subah|סובה
t_evening|शाम|shaam|שאם
t_night|रात|raat|ראת
t_week|हफ़्ता|hafta|הפתה
t_month|महीना|maheena|מהינה
t_year|साल|saal|סאל
t_hour|घंटा|ghanta|גנטה
t_minute|मिनट|minat|מינט
p_toilet|टॉयलेट कहाँ है?|toilet kahaan hai?|טוילט קהאן הה
p_cost|यह कितने का है?|yah kitne ka hai?|יה קיתנה קה הה
p_nounder|मुझे समझ नहीं आया|mujhe samajh nahin aaya|מוג׳ה סמג׳ נהין אאיה
p_english|क्या आप अंग्रेज़ी बोलते हैं?|kya aap angrezi bolte hain?|קיה אאפ אנגרזי בולטה הין
p_slow|कृपया धीरे बोलिए|kripaya dheere boliye|קריפיה דירה בוליה
p_bill|बिल दीजिए|bil deejiye|ביל דיג׳יה
p_want|मुझे यह चाहिए|mujhe yah chaahiye|מוג׳ה יה צ׳אהיה
p_expensive|यह बहुत महँगा है|yah bahut mehnga hai|יה בהות מהנגה הה
p_discount|कुछ कम कीजिए|kuchh kam keejiye|קוצ׳ קם קיג׳יה
p_address|मुझे इस पते पर ले चलिए|mujhe is pate par le chaliye|מוג׳ה איס פתה פר לה צ׳ליה
p_hotel|होटल कहाँ है?|hotal kahaan hai?|הוטל קהאן הה
p_doctor|मुझे डॉक्टर चाहिए|mujhe doktar chaahiye|מוג׳ה דוקטר צ׳אהיה
p_police|पुलिस को बुलाइए!|pulis ko bulaaiye!|פוליס קו בולאיה
p_israel|मैं इज़राइल से हूँ|main Izraail se hoon|מיין איזראאיל סה הון
p_name|मेरा नाम ... है|mera naam ... hai|מרה נאם ... הה
p_nice|आपसे मिलकर ख़ुशी हुई|aapse milkar khushi hui|אאפסה מילקר חושי הויי
p_water|पानी दीजिए|paani deejiye|פאני דיג׳יה
p_help|क्या आप मेरी मदद कर सकते हैं?|kya aap meri madad kar sakte hain?|קיה אאפ מרי מדד קר סקטה הין
p_what|यह क्या है?|yah kya hai?|יה קיה הה
p_nospicy|तीखा नहीं, कृपया|teekha nahin, kripaya|טיחה נהין, קריפיה
room|कमरा|kamra|קמרה
key|चाबी|chaabi|צ׳אבי
bed|बिस्तर|bistar|ביסטר
shower|शॉवर|shaavar|שאוור
towel|तौलिया|tauliya|טאוליה
passport|पासपोर्ट|paasport|פאספורט
mon|सोमवार|somvaar|סומוואר
tue|मंगलवार|mangalvaar|מנגלוואר
wed|बुधवार|budhvaar|בודוואר
thu|गुरुवार|guruvaar|גורוואר
fri|शुक्रवार|shukravaar|שוקרוואר
sat|शनिवार|shanivaar|שניוואר
sun|रविवार|ravivaar|רביוואר
red|लाल|laal|לאל
blue|नीला|neela|נילה
green|हरा|hara|הרה
yellow|पीला|peela|פילה
black|काला|kaala|קאלה
white|सफ़ेद|safed|ספד
man|आदमी|aadmi|אדמי
woman|औरत|aurat|אורת
child|बच्चा|bachcha|בצ׳ה
family|परिवार|parivaar|פריוואר
i|मैं|main|מיין
you|आप|aap|אאפ
head|सिर|sir|סיר
stomach|पेट|pet|פט
hand|हाथ|haath|האת
pain|दर्द|dard|דרד
medicine|दवा|dava|דווה
sick|बीमार|beemaar|בימאר
big|बड़ा|bada|בדה
small|छोटा|chhota|צ׳וטה
hot|गरम|garam|גרם
cold|ठंडा|thanda|טנדה
bad|बुरा|bura|בורה
beautiful|सुंदर|sundar|סונדר
new|नया|naya|נאיה
old|पुराना|puraana|פוראנה
fast|तेज़|tez|טז
slow|धीमा|dheema|דימה
near|पास|paas|פאס
far_a|दूर|door|דור
clean|साफ़|saaf|סאף
dirty|गंदा|ganda|גנדה
tired|थका हुआ|thaka hua|טקה הואה
hungry|भूखा|bhookha|בוחה
thirsty|प्यासा|pyaasa|פיאסה
happy|खुश|khush|חוש
sad|उदास|udaas|אודאס
easy|आसान|aasaan|אאסאן
difficult|मुश्किल|mushkil|מושקיל
many|बहुत|bahut|בהות
eat|खाना|khaana|חאנה
drink|पीना|peena|פינה
go|जाना|jaana|ג׳אנה
buy|ख़रीदना|khareedna|חרידנה
speak|बोलना|bolna|בולנה
sleep|सोना|sona|סונה
understand|समझना|samajhna|סמג׳נה
come|आना|aana|אאנה
want|चाहना|chaahna|צ׳אהנה
need|ज़रूरत होना|zaroorat hona|זרורת הונה
know|जानना|jaanna|ג׳אננה
see|देखना|dekhna|דחנה
hear|सुनना|sunna|סוננה
give|देना|dena|דנה
take|लेना|lena|לנה
pay|पैसे देना|paise dena|פייסה דנה
wait|इंतज़ार करना|intazaar karna|אינתזאר קרנה
walk|पैदल चलना|paidal chalna|פידל צ׳לנה
read|पढ़ना|padhna|פדנה
write|लिखना|likhna|ליחנה
love|प्यार करना|pyaar karna|פיאר קרנה
work|काम करना|kaam karna|קאם קרנה
swim|तैरना|tairna|טירנה
c_table|दो लोगों के लिए टेबल, कृपया|do logon ke liye tebal, kripaya|דו לוגון קה ליה טבל, קריפיה
c_menu|मेन्यू दीजिए|menyoo deejiye|מניו דיג׳יה
c_noice|बर्फ़ के बिना, कृपया|barf ke bina, kripaya|ברף קה בינה, קריפיה
c_nomeat|मैं मांस नहीं खाता|main maans nahin khaata|מיין מאנס נהין חאטה
c_allergy|मुझे मेवों से एलर्जी है|mujhe mevon se elarji hai|מוג׳ה מבון סה אלרג׳י הה
c_delicious|बहुत स्वादिष्ट!|bahut svaadisht!|בהות סוואדישט
c_reserv|मेरी बुकिंग है|meri booking hai|מרי בוקינג הה
c_wifi|वाई-फ़ाई का पासवर्ड क्या है?|vaai-faai ka paasvard kya hai?|וואי-פאי קה פאסוורד קיה הה
c_checkout|चेक-आउट कितने बजे है?|chek-aaut kitne baje hai?|צ׳ק-אאוט קיתנה בג׳ה הה
c_howget|वहाँ कैसे जाएँ?|vahaan kaise jaayen?|והאן קיסה ג׳איין
c_stophere|यहाँ रोकिए|yahaan rokiye|יהאן רוקיה
c_far|क्या यह दूर है?|kya yah door hai?|קיה יה דור הה
c_card|क्या कार्ड चलेगा?|kya kaard chalega?|קיה קארד צ׳לגה
c_looking|बस देख रहे हैं, धन्यवाद|bas dekh rahe hain, dhanyavaad|בס דח רהה הין, דניאוואד
c_yourname|आपका नाम क्या है?|aapka naam kya hai?|אאפקה נאם קיה הה
c_wherefrom|आप कहाँ से हैं?|aap kahaan se hain?|אאפ קהאן סה הין
c_seeyou|बाद में मिलते हैं|baad mein milte hain|באד מיין מילטה הין
c_cheers|चीयर्स!|chiyars!|צ׳ירס
c_lost|मैं रास्ता भूल गया हूँ|main raasta bhool gaya hoon|מיין ראסטה בול גאיה הון
c_passport|मेरा पासपोर्ट खो गया|mera paasport kho gaya|מרה פאספורט חו גאיה
c_hurts|यहाँ दर्द हो रहा है|yahaan dard ho raha hai|יהאן דרד הו רהה הה
c_time|कितने बजे हैं?|kitne baje hain?|קיתנה בג׳ה הין
c_again|फिर से बोलिए, कृपया|phir se boliye, kripaya|פיר סה בוליה, קריפיה
c_write|क्या आप इसे लिख सकते हैं?|kya aap ise likh sakte hain?|קיה אאפ איסה ליח סקטה הין
dog|कुत्ता|kutta|קוטה
cat|बिल्ली|billi|בילי
bird|पक्षी|pakshi|פקשי
horse|घोड़ा|ghoda|גודה
cow|गाय|gaay|גאי
pig|सूअर|suar|סואר
elephant|हाथी|haathi|האתי
monkey|बंदर|bandar|בנדר
snake|साँप|saanp|סאנפ
mosquito|मच्छर|machchhar|מצ׳ר
lion|शेर|sher|שר
duck|बत्तख|battakh|בטח
apple|सेब|seb|סב
banana|केला|kela|קלה
orange|संतरा|santara|סנטרה
mango|आम|aam|אאם
pineapple|अनानास|anaanaas|אנאנאס
watermelon|तरबूज़|tarbooz|טרבוז
coconut|नारियल|naariyal|נאריאל
grapes|अंगूर|angoor|אנגור
lemon|नींबू|neemboo|נימבו
strawberry|स्ट्रॉबेरी|strauberi|סטרוברי
papaya|पपीता|papeeta|פפיטה
tomato|टमाटर|tamaatar|טמאטר
potato|आलू|aaloo|אאלו
onion|प्याज़|pyaaz|פיאז
garlic|लहसुन|lahsun|להסון
cucumber|खीरा|kheera|חירה
carrot|गाजर|gaajar|גאג׳ר
chili|मिर्च|mirch|מירצ׳
corn|मक्का|makka|מקה
mushroom|मशरूम|mashroom|משרום
lettuce|सलाद पत्ता|salaad patta|סלאד פטה
eggplant|बैंगन|baingan|בינגן
soup|सूप|soop|סופ
salad|सलाद|salaad|סלאד
noodles|नूडल्स|noodals|נודלס
cheese|पनीर|paneer|פניר
butter|मक्खन|makkhan|מקחן
salt|नमक|namak|נמק
sugar|चीनी|cheeni|צ׳יני
cake|केक|kek|קק
icecream|आइसक्रीम|aaiskreem|אייסקרים
juice|जूस|joos|ג׳וס
wine|वाइन|vaain|וואין
breakfast|नाश्ता|naashta|נאשטה
lunch|दोपहर का खाना|dopahar ka khaana|דופהר קה חאנה
dinner|रात का खाना|raat ka khaana|ראת קה חאנה
fork|काँटा|kaanta|קאנטה
spoon|चम्मच|chammach|צ׳מצ׳
knife|चाकू|chaakoo|צ׳אקו
glass|गिलास|gilaas|גילאס
plate|प्लेट|plet|פלט
bank|बैंक|baink|בנק
atm|एटीएम|etiem|איי-טי-אם
beach|समुद्र तट|samudra tat|סמודר טט
museum|संग्रहालय|sangrahaalay|סנגרהאליי
temple|मंदिर|mandir|מנדיר
street|सड़क|sadak|סדק
city|शहर|shahar|שהר
shop|दुकान|dukaan|דוקאן
supermarket|सुपरमार्केट|suparmaarket|סופרמרקט
park|पार्क|paark|פארק
station|स्टेशन|steshan|סטשן
embassy|दूतावास|dootaavaas|דוטאוואס
phone|फ़ोन|fon|פון
charger|चार्जर|chaarjar|צ׳ארג׳ר
bag|बैग|baig|בג
shoes|जूते|joote|ג׳וטה
clothes|कपड़े|kapde|קפדה
hat|टोपी|topi|טופי
glasses|चश्मा|chashma|צ׳שמה
map|नक्शा|naksha|נקשה
sunscreen|सनस्क्रीन|sanskreen|סנסקרין
umbrella|छाता|chhaata|צ׳אתה
sf_order|मुझे ऑर्डर करना है|mujhe order karna hai|מוג׳ה אורדר קרנה הה
sf_recommend|आप क्या सुझाएँगे?|aap kya sujhaayenge?|אאפ קיה סוג׳איינגה
sf_bottle|एक बोतल पानी, कृपया|ek botal paani, kripaya|אק בוטל פאני, קריפיה
sf_isspicy|क्या यह तीखा है?|kya yah teekha hai?|קיה יה טיחה הה
sf_onemore|एक और, कृपया|ek aur, kripaya|אק אור, קריפיה
sf_nosugar|बिना चीनी, कृपया|bina cheeni, kripaya|בינה צ׳יני, קריפיה
sf_takeaway|पैक कर दीजिए|paik kar deejiye|פק קר דיג׳יה
ss_smaller|क्या छोटा साइज़ है?|kya chhota saaiz hai?|קיה צ׳וטה סאייז הה
ss_try|ट्राई कर सकते हैं?|traai kar sakte hain?|טראי קר סקטה הין
ss_two|दो दीजिए|do deejiye|דו דיג׳יה
ss_change|छुट्टे हैं?|chhutte hain?|צ׳וטה הין
ss_last|आख़िरी दाम क्या है?|aakhiri daam kya hai?|אאחירי דאם קיה הה
ss_bag|थैली मिलेगी?|thaili milegi?|טילי מילגי
sm_busstop|बस स्टॉप कहाँ है?|bas stop kahaan hai?|בס סטופ קהאן הה
sm_trainleave|ट्रेन कितने बजे चलेगी?|tren kitne baje chalegi?|טרן קיתנה בג׳ה צ׳לגי
sm_oneticket|एक टिकट, कृपया|ek tikat, kripaya|אק טיקט, קריפיה
sm_howlong|कितना समय लगेगा?|kitna samay lagega?|קיתנה סמיי לגגה
sm_meter|मीटर चालू कीजिए|meetar chaaloo keejiye|מיטר צ׳אלו קיג׳יה
sm_slowdrive|धीरे चलाइए, कृपया|dheere chalaaiye, kripaya|דירה צ׳לאיה, קריפיה
sm_airport|मुझे हवाई अड्डे जाना है|mujhe havaai adde jaana hai|מוג׳ה הוואי אדה ג׳אנה הה
sh_leavebag|क्या बैग यहाँ छोड़ सकते हैं?|kya baig yahaan chhod sakte hain?|קיה בג יהאן צ׳וד סקטה הין
sh_ac|एसी काम नहीं कर रहा|esi kaam nahin kar raha|אסי קאם נהין קר רהה
sh_breakfast|क्या नाश्ता शामिल है?|kya naashta shaamil hai?|קיה נאשטה שאמיל הה
sh_towel|मुझे एक और तौलिया चाहिए|mujhe ek aur tauliya chaahiye|מוג׳ה אק אור טאוליה צ׳אהיה
sh_taxi|क्या आप टैक्सी बुला सकते हैं?|kya aap taiksi bula sakte hain?|קיה אאפ טקסי בולה סקטה הין
sh_late|क्या देर से चेक-आउट हो सकता है?|kya der se chek-aaut ho sakta hai?|קיה דר סה צ׳ק-אאוט הו סקתה הה
so_learning|मैं हिंदी सीख रहा हूँ|main hindi seekh raha hoon|מיין הינדי סיח רהה הון
so_thankshelp|मदद के लिए बहुत धन्यवाद|madad ke liye bahut dhanyavaad|מדד קה ליה בהות דניאוואד
so_photo|क्या आप हमारी फ़ोटो खींच सकते हैं?|kya aap hamaari foto kheench sakte hain?|קיה אאפ המארי פוטו חינצ׳ סקטה הין
so_like|मुझे यह जगह पसंद है|mujhe yah jagah pasand hai|מוג׳ה יה ג׳גה פסנד הה
so_vacation|मैं यहाँ छुट्टी पर हूँ|main yahaan chhutti par hoon|מיין יהאן צ׳וטי פר הון
so_howsay|इसे क्या कहते हैं?|ise kya kahte hain?|איסה קיה קהטה הין
so_noproblem|कोई बात नहीं|koi baat nahin|קוי באת נהין
so_beautiful|बहुत सुंदर है!|bahut sundar hai!|בהות סונדר הה
sp_unwell|मेरी तबीयत ठीक नहीं है|meri tabiyat theek nahin hai|מרי טביית טיק נהין הה
sp_nearhosp|सबसे पास का अस्पताल कहाँ है?|sabse paas ka aspataal kahaan hai?|סבסה פאס קה אספתאל קהאן הה
sp_fever|मुझे बुख़ार है|mujhe bukhaar hai|מוג׳ה בוחאר הה
sp_helpme|मेरी मदद कीजिए|meri madad keejiye|מרי מדד קיג׳יה
sp_stolen|मेरा बैग चोरी हो गया|mera baig chori ho gaya|מרה בג צ׳ורי הו גאיה
sp_embassy|मुझे इज़राइली दूतावास जाना है|mujhe Izraaili dootaavaas jaana hai|מוג׳ה איזראאילי דוטאוואס ג׳אנה הה
dt1|कहाँ जाना है?|kahaan jaana hai?|קהאן ג׳אנה הה
dt2|इस होटल, कृपया।|is hotal, kripaya.|איס הוטל, קריפיה
dt3|ठीक है, बैठिए।|theek hai, baithiye.|טיק הה, בייטיה
dt4|कितना होगा?|kitna hoga?|קיתנה הוגה
dt5|दो सौ रुपये।|do sau rupaye.|דו סאו רופיה
dt6|मीटर चालू कीजिए।|meetar chaaloo keejiye.|מיטר צ׳אלו קיג׳יה
dt7|कोई बात नहीं।|koi baat nahin.|קוי באת נהין
dt8|यहाँ रोकिए, धन्यवाद।|yahaan rokiye, dhanyavaad.|יהאן רוקיה, דניאוואד
dm1|इसका दाम क्या है?|iska daam kya hai?|איסקה דאם קיה הה
dm2|तीन सौ।|teen sau.|טין סאו
dm3|बहुत महँगा! दो सौ?|bahut mehnga! do sau?|בהות מהנגה! דו סאו
dm4|ढाई सौ, आख़िरी दाम।|dhaai sau, aakhiri daam.|דאאי סאו, אאחירי דאם
dm5|ठीक है, दे दीजिए।|theek hai, de deejiye.|טיק הה, דה דיג׳יה
dm6|बहुत धन्यवाद!|bahut dhanyavaad!|בהות דניאוואד
dr1|कितने लोग?|kitne log?|קיתנה לוג
dr2|दो लोग।|do log.|דו לוג
dr3|क्या लेंगे?|kya lenge?|קיה לנגה
dr4|चिकन फ़्राइड राइस, तीखा नहीं।|chikan fraaid raais, teekha nahin.|צ׳יקן פראייד ראייס, טיחה נהין
dr5|और पीने के लिए?|aur peene ke liye?|אור פינה קה ליה
dr6|सिर्फ़ पानी, कृपया।|sirf paani, kripaya.|סירף פאני, קריפיה
dr7|बिल ले आइए, कृपया।|bil le aaiye, kripaya.|ביל לה אאיה, קריפיה
dh1|नमस्ते, मेरी बुकिंग है।|namaste, meri booking hai.|נמסטה, מרי בוקינג הה
dh2|किस नाम से?|kis naam se?|קיס נאם סה
dh3|... के नाम से।|... ke naam se.|... קה נאם סה
dh4|पासपोर्ट दिखाइए, कृपया।|paasport dikhaaiye, kripaya.|פאספורט דיחאיה, קריפיה
dh5|आपका कमरा तीन सौ पाँच है।|aapka kamra teen sau paanch hai.|אאפקה קמרה טין סאו פאנץ׳ הה
dh6|नाश्ता कितने बजे है?|naashta kitne baje hai?|נאשטה קיתנה בג׳ה הה
dh7|सात से दस बजे तक।|saat se das baje tak.|סאת סה דס בג׳ה טק
dd1|माफ़ कीजिए, स्टेशन कहाँ है?|maaf keejiye, steshan kahaan hai?|מאף קיג׳יה, סטשן קהאן הה
dd2|सीधे जाइए, फिर बाएँ।|seedhe jaaiye, phir baayen.|סידה ג׳איה, פיר באיין
dd3|क्या यहाँ से दूर है?|kya yahaan se door hai?|קיה יהאן סה דור הה
dd4|नहीं, पैदल पाँच मिनट।|nahin, paidal paanch minat.|נהין, פידל פאנץ׳ מינט
dd5|बहुत शुक्रिया!|bahut shukriya!|בהות שוקריה
w_weather|मौसम|mausam|מאוסם
w_sun|सूरज|sooraj|סורג׳
w_rain|बारिश|baarish|באריש
w_wind|हवा|hava|הווה
w_cloud|बादल|baadal|באדל
w_snow|बर्फ़बारी|barfbaari|ברפבארי
w_storm|तूफ़ान|toofaan|טופאן
w_humid|उमस|umas|אומס
j_teacher|शिक्षक|shikshak|שיקשק
j_driver|ड्राइवर|draaivar|דראייבר
j_waiter|वेटर|vetar|וטר
j_cook|रसोइया|rasoiya|רסויה
j_student|छात्र|chhaatr|צ׳אטר
j_engineer|इंजीनियर|injeeniyar|אינג׳יניר
j_nurse|नर्स|nars|נרס
j_seller|दुकानदार|dukaandaar|דוקאנדאר
j_guide|गाइड|gaaid|גאייד
j_pharmacist|फ़ार्मासिस्ट|faarmaasist|פרמסיסט
e_angry|गुस्सा|gussa|גוסה
e_scared|डरा हुआ|dara hua|דרה הואה
e_bored|ऊबा हुआ|ooba hua|אובה הואה
e_worried|चिंतित|chintit|צ׳ינטיט
e_surprised|हैरान|hairaan|הירן
e_calm|शांत|shaant|שאנט
e_excited|उत्साहित|utsaahit|אוטסאהיט
e_love|प्यार में|pyaar mein|פיאר מיין
dir_north|उत्तर|uttar|אוטר
dir_south|दक्षिण|dakshin|דקשין
dir_east|पूर्व|poorv|פורב
dir_west|पश्चिम|pashchim|פשצ׳ים
dir_corner|कोना|kona|קונה
dir_light|ट्रैफ़िक लाइट|traifik laait|טרפיק לאייט
dir_behind|पीछे|peechhe|פיצ׳ה
dir_front|आगे|aage|אאגה
dir_next|बगल में|bagal mein|בגל מיין
dir_back|वापस|vaapas|וואפס
dir_up|ऊपर|oopar|אופר
dir_down|नीचे|neeche|ניצ׳ה`
});

/* ---- numbers & prices (0–999,999) in Hindi → tokens [text, roman, hebrew]. 1–99 are individual words; Indian grouping: हज़ार (1,000), लाख (100,000) ---- */
NW.hi = (() => {
  const D = ["एक", "दो", "तीन", "चार", "पाँच", "छह", "सात", "आठ", "नौ", "दस", "ग्यारह", "बारह", "तेरह", "चौदह", "पंद्रह", "सोलह", "सत्रह", "अठारह", "उन्नीस", "बीस", "इक्कीस", "बाईस", "तेईस", "चौबीस", "पच्चीस", "छब्बीस", "सत्ताईस", "अट्ठाईस", "उनतीस", "तीस", "इकतीस", "बत्तीस", "तैंतीस", "चौंतीस", "पैंतीस", "छत्तीस", "सैंतीस", "अड़तीस", "उनतालीस", "चालीस", "इकतालीस", "बयालीस", "तैंतालीस", "चवालीस", "पैंतालीस", "छियालीस", "सैंतालीस", "अड़तालीस", "उनचास", "पचास", "इक्यावन", "बावन", "तिरपन", "चौवन", "पचपन", "छप्पन", "सत्तावन", "अट्ठावन", "उनसठ", "साठ", "इकसठ", "बासठ", "तिरसठ", "चौंसठ", "पैंसठ", "छियासठ", "सड़सठ", "अड़सठ", "उनहत्तर", "सत्तर", "इकहत्तर", "बहत्तर", "तिहत्तर", "चौहत्तर", "पचहत्तर", "छिहत्तर", "सतहत्तर", "अठहत्तर", "उन्यासी", "अस्सी", "इक्यासी", "बयासी", "तिरासी", "चौरासी", "पचासी", "छियासी", "सत्तासी", "अट्ठासी", "नवासी", "नब्बे", "इक्यानवे", "बानवे", "तिरानवे", "चौरानवे", "पचानवे", "छियानवे", "सत्तानवे", "अट्ठानवे", "निन्यानवे"];
  const R = ["ek", "do", "teen", "chaar", "paanch", "chhah", "saat", "aath", "nau", "das", "gyaarah", "baarah", "terah", "chaudah", "pandrah", "solah", "satrah", "athaarah", "unnees", "bees", "ikkees", "baaees", "teis", "chaubees", "pachchees", "chhabbees", "sattaaees", "atthaaees", "untees", "tees", "ikattees", "battees", "taintees", "chauntees", "paintees", "chhattees", "saintees", "adtees", "untaalees", "chaalees", "iktaalees", "bayaalees", "taintaalees", "chavaalees", "paintaalees", "chhiyaalees", "saintaalees", "adtaalees", "unchaas", "pachaas", "ikyaavan", "baavan", "tirpan", "chauvan", "pachpan", "chhappan", "sattaavan", "atthaavan", "unsath", "saath", "iksath", "baasath", "tirsath", "chaunsath", "painsath", "chhiyaasath", "sadsath", "adsath", "unhattar", "sattar", "ikhattar", "bahattar", "tihattar", "chauhattar", "pachhattar", "chhihattar", "sathattar", "athhattar", "unyaasi", "assi", "ikyaasi", "bayaasi", "tiraasi", "chauraasi", "pachaasi", "chhiyaasi", "sattaasi", "atthaasi", "navaasi", "nabbe", "ikyaanave", "baanave", "tiraanave", "chauraanave", "pachaanave", "chhiyaanave", "sattaanave", "atthaanave", "ninyaanave"];
  const H = ["אק", "דו", "טין", "צ׳אר", "פאנץ׳", "צ׳ה", "סאט", "אט", "נאו", "דס", "גיארה", "בארה", "טרה", "צ׳אודה", "פנדרה", "סולה", "סטרה", "אטארה", "אוניס", "ביס", "איקיס", "באיס", "טיס", "צ׳אוביס", "פצ׳יס", "צ׳ביס", "סטאיס", "אטאיס", "אונטיס", "טיס", "איקטיס", "בטיס", "טינטיס", "צ׳אונטיס", "פינטיס", "צ׳טיס", "סינטיס", "אדטיס", "אונטאליס", "צ׳אליס", "איקטאליס", "ביאליס", "טינטאליס", "צ׳ואליס", "פינטאליס", "צ׳ייאליס", "סינטאליס", "אדטאליס", "אונצ׳אס", "פצ׳אס", "איקיאוון", "באוון", "טירפן", "צ׳אוון", "פצ׳פן", "צ׳פן", "סטאוון", "אטאוון", "אונסט", "סאט", "איקסט", "באסט", "טירסט", "צ׳אונסט", "פינסט", "צ׳ייאסט", "סדסט", "אדסט", "אונהטר", "סטר", "איקהטר", "בהטר", "טיהטר", "צ׳אוהטר", "פצ׳טר", "צ׳יהטר", "סתהטר", "אטהטר", "אוניאסי", "אסי", "איקיאסי", "ביאסי", "טיראסי", "צ׳אוראסי", "פצ׳אסי", "צ׳ייאסי", "סטאסי", "אטאסי", "נואסי", "נבה", "איקיאנוה", "באנוה", "טיראנוה", "צ׳אוראנוה", "פצ׳אנוה", "צ׳ייאנוה", "סטאנוה", "אטאנוה", "ניניאנוה"];
  const w = n => [D[n - 1], R[n - 1], H[n - 1]];
  const SAU = ['सौ', 'sau', 'סאו'], HAZ = ['हज़ार', 'hazaar', 'הזאר'], LAKH = ['लाख', 'laakh', 'לאח'];
  return (n, cur) => {
    const out = [];
    if (n === 0) out.push(['शून्य', 'shoonya', 'שוניה']);
    else {
      const lakh = Math.floor(n / 100000), th = Math.floor(n % 100000 / 1000), h = Math.floor(n % 1000 / 100), r = n % 100;
      if (lakh) out.push(w(lakh), LAKH);
      if (th) out.push(w(th), HAZ);
      if (h) out.push(w(h), SAU);
      if (r) out.push(w(r));
    }
    if (cur) out.push(n === 1 ? ['रुपया', 'rupaya', 'רופיה'] : ['रुपये', 'rupaye', 'רופאיה']);
    return out.map(a => tk(a[0], a[1], a[2]));
  };
})();
NUM.hi = { tokens: (n, cur) => NW.hi(n, cur) };
