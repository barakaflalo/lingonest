/* ===== LingoNest — lang-ne.js : Nepali content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('ne', {
  ver: '1.21.0',
  curSym: "रू",
  voiceFallback: "heb",
  country: {"he": "נפאל", "en": "Nepal", "ru": "Непал", "es": "Nepal", "ar": "نيبال"},
  emergency: [
    ["🚓", {"he": "משטרה", "en": "Police", "ru": "Полиция", "es": "Policía", "ar": "الشرطة"}, "100"]
,    ["🚒", {"he": "כבאים", "en": "Fire", "ru": "Пожарные", "es": "Bomberos", "ar": "الإطفاء"}, "101"]
,    ["🚑", {"he": "אמבולנס", "en": "Ambulance", "ru": "Скорая", "es": "Ambulancia", "ar": "الإسعاف"}, "102"]
,    ["👮", {"he": "משטרת תיירים", "en": "Tourist police", "ru": "Туристическая полиция", "es": "Policía turística", "ar": "شرطة السياحة"}, "1144"]
  ],
  tips: [
    {"t": {"he": "नमस्ते — עם ידיים צמודות", "en": "नमस्ते — palms together"}, "b": {"he": "בנפאל אומרים נמסטה (או נמסקר — नमस्कार, מנומס יותר) עם כפות ידיים צמודות מול החזה. זה שלום, להתראות ותודה על הכבוד. לא לוחצים ידיים לנשים אם הן לא הושיטו קודם.", "en": "Say namaste (or the more formal namaskar) with palms together at the chest. It means hello, goodbye and respect. Don't offer a handshake to women unless they do first."}, "ex": "नमस्ते"},
    {"t": {"he": "हजुर — המילה הכי מנומסת", "en": "हजुर — the politest word"}, "b": {"he": "हजुर (הג׳ור) היא \"כן\" מנומס, \"סליחה?\" כשלא שמעת, וגם פנייה של כבוד. תשובה ב-हजुर במקום हो תמיד תתקבל בחיוך.", "en": "हजुर (hajur) is a polite \"yes\", a \"pardon?\" and a respectful address. Answering hajur instead of ho always gets a smile."}, "ex": "हजुर"},
    {"t": {"he": "तपाईं מול तिमी", "en": "तपाईं vs. तिमी"}, "b": {"he": "तपाईं (טפאין) הוא \"אתה\" המנומס — לכל זר ולמבוגרים. तिमी (טימי) רק לחברים קרובים וילדים. הפעלים המנומסים נגמרים ב-नुहोस् (נוהוס): बस्नुहोस् = שב בבקשה. ופונים למבוגרים בכינויי משפחה: दाइ (אח גדול), दिदी (אחות גדולה).", "en": "तपाईं (tapain) is the polite \"you\" for strangers and elders; तिमी only for close friends and kids. Polite requests end in -नुहोस् (-nuhos). People call elders दाइ (big brother) or दिदी (big sister)."}, "ex": "बस्नुहोस्"},
    {"t": {"he": "הפועל בסוף, מילות יחס אחרי", "en": "Verb last, postpositions after"}, "b": {"he": "כמו בהינדי: \"אני נפאלית לומד\". ומילות היחס אחרי המילה: होटलमा = במלון, इजरायलबाट = מישראל. छ (צ׳ה) = יש / נמצא, छैन (צ׳אינה) = אין.", "en": "Like Hindi: \"I Nepali learn\". Postpositions come after: होटलमा = in the hotel, इजरायलबाट = from Israel. छ = there is, छैन = there isn't."}, "ex": "होटलमा"},
    {"t": {"he": "דאל בהאט — 24 שעות כוח", "en": "Dal bhat — 24-hour power"}, "b": {"he": "הארוחה הלאומית היא दाल भात (דאל באת): אורז, עדשים וירקות — ובדרך כלל מוסיפים לך עוד בחינם. אוכלים ביד ימין בלבד. אם לא רוצה חריף: पिरो नराख्नुहोस्.", "en": "The national meal is दाल भात: rice, lentils and veg — refills are usually free. Eat with your right hand only. Not spicy: पिरो नराख्नुहोस्."}, "ex": "दाल भात"},
    {"t": {"he": "מיקוח, מקדשים ולוח שנה", "en": "Bargaining, temples and calendar"}, "b": {"he": "בשווקים של תאמל ופוקרה מתמקחים בנימוס. מקיפים מקדשים וסטופות עם כיוון השעון, וחולצים נעליים. בנפאל יש לוח שנה משלה (विक्रम संवत्) — השנה שם מקדימה בכ-56 שנה! ויום המנוחה הוא שבת (शनिबार).", "en": "Bargain politely in Thamel and Pokhara markets. Walk clockwise around temples and stupas and remove shoes. Nepal uses its own calendar (Bikram Sambat), ~56 years ahead, and the day off is Saturday."}, "ex": "शनिबार"}
  ],
  note: {"he": "נפאלית נכתבת בדֶוָנָאגָרִי — אותו כתב של הינדי, והרבה מילים דומות. האותיות \"תלויות\" על קו עליון, ולכל עיצור יש תנועה מובנית a (क = קַ). תנועה אחרת נכתבת כסימן סביב העיצור (कि = קִי, को = קוֹ). יש עיצורים רגילים ונשופים (क / ख), ו-व נהגית לרוב ב או ו.", "en": "Nepali is written in Devanagari — the same script as Hindi, with many shared words. Letters hang from a top line and each consonant carries an inherent a (क = ka). Other vowels are marks around it (कि = ki, को = ko). Plain vs. aspirated consonants matter (क / ख), and व is often said b or w."},
  vowelNote: {"he": "בשורה העליונה — התנועות כשהן עומדות לבד (בתחילת מילה). למטה — איך אותה תנועה נצמדת לעיצור क. שים לב: ि נכתבת לפני העיצור אבל נהגית אחריו!", "en": "Top: vowels on their own (word-initial). Below: the same vowels attached to क. Note ि is written before the consonant but said after it!"},
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
    ["व", "व", "ו / ב", "va / ba"],
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
  gender: [["आएको हुँ", "g", "आएकी हुँ"], ["aeko hun", "g", "aeki hun"], ["אאקו הון", "g", "אאקי הון"], ["थाकेको", "g", "थाकेकी"], ["thakeko", "g", "thakeki"], ["טאקקו", "g", "טאקקי"]],
  words: `hello|नमस्ते|namaste|נמסטה
bye|फेरि भेटौँला|pheri bhetaunla|פרי בטאונלה
morning|शुभ प्रभात|shubha prabhat|שובה פרבהאת
thanks|धन्यवाद|dhanyabad|דניאבאד
please|कृपया|kripaya|קריפיה
sorry|माफ गर्नुहोस्|maaph garnuhos|מאף גרנוהוס
yes|हजुर|hajur|הג׳ור
no|होइन|hoina|הוינה
howareyou|तपाईंलाई कस्तो छ?|tapainlai kasto chha?|טפאינלאי קסטו צ׳ה
good|राम्रो|ramro|ראמרו
ok|ठिक छ|thik chha|טיק צ׳ה
n1|एक|ek|אק
n2|दुई|dui|דואי
n3|तीन|tin|טין
n4|चार|char|צ׳אר
n5|पाँच|panch|פאנץ׳
n6|छ|chha|צ׳ה
n7|सात|sat|סאת
n8|आठ|aath|אאט
n9|नौ|nau|נאו
n10|दस|das|דס
n0|शून्य|shunya|שוניה
n20|बीस|bis|ביס
n50|पचास|pachas|פצ׳אס
n100|एक सय|ek saya|אק סאיה
n1000|एक हजार|ek hajar|אק הג׳אר
n11|एघार|eghar|אגהאר
n12|बाह्र|bahra|בהרה
n13|तेह्र|tehra|טהרה
n14|चौध|chaudha|צ׳אודה
n15|पन्ध्र|pandhra|פנדרה
n16|सोह्र|sohra|סוהרה
n17|सत्र|satra|סתרה
n18|अठार|athar|אטאר
n19|उन्नाइस|unnais|אונאיס
n30|तीस|tis|טיס
n40|चालीस|chalis|צ׳אליס
n60|साठी|sathi|סאטי
n70|सत्तरी|sattari|סתרי
n80|असी|asi|אסי
n90|नब्बे|nabbe|נבה
n200|दुई सय|dui saya|דואי סאיה
n500|पाँच सय|panch saya|פאנץ׳ סאיה
n10000|दस हजार|das hajar|דס הג׳אר
water|पानी|pani|פאני
toilet|ट्वाइलेट|twailet|טואילט
where|कहाँ?|kahan?|קהאן
howmuch|कति?|kati?|קטי
this|यो|yo|יו
friend|साथी|sathi|סאטי
food|खाना|khana|חאנה
bread|रोटी|roti|רוטי
coffee|कफी|kaphi|קפי
tea|चिया|chiya|צ׳יה
chicken|कुखुराको मासु|kukhurako masu|קוחורקו מאסו
fish|माछा|machha|מאצ׳ה
rice|भात|bhat|באת
beer|बियर|biyar|ביאר
bill|बिल|bil|ביל
tasty|मिठो|mitho|מיטו
egg|अण्डा|anda|אנדה
fruit|फलफूल|phalphul|פלפול
veg|तरकारी|tarkari|טרקארי
meat|मासु|masu|מאסו
milk|दूध|dudh|דוד
spicy|पिरो|piro|פירו
restaurant|रेस्टुरेन्ट|resturent|רסטורנט
ice|बरफ|baraph|בראף
taxi|ट्याक्सी|tyaksi|טיאקסי
bus|बस|bas|בס
train|रेल|rel|רל
airport|विमानस्थल|bimanasthal|בימאנסטל
hotel|होटल|hotal|הוטל
left|देब्रे|debre|דברה
right|दाहिने|dahine|דאהינה
straight|सिधा|sidha|סידה
stop|रोक्नुहोस्|roknuhos|רוקנוהוס
ticket|टिकट|tikat|טיקט
money|पैसा|paisa|פייסה
expensive|महँगो|mahango|מהנגו
cheap|सस्तो|sasto|סאסטו
market|बजार|bajar|בג׳אר
pharmacy|औषधि पसल|aushadhi pasal|אאושדי פסל
open|खुला|khula|חולה
closed|बन्द|banda|בנדה
help|गुहार!|guhar!|גוהאר
police|प्रहरी|prahari|פרהרי
doctor|डाक्टर|daktar|דאקטר
hospital|अस्पताल|aspatal|אספטאל
today|आज|aaja|אאג׳ה
tomorrow|भोलि|bholi|בולי
yesterday|हिजो|hijo|היג׳ו
now|अहिले|ahile|אהילה
t_morning|बिहान|bihan|ביהאן
t_evening|साँझ|sanjh|סאנג׳
t_night|रात|rat|ראת
t_week|हप्ता|hapta|הפטה
t_month|महिना|mahina|מהינה
t_year|वर्ष|barsha|ברשה
t_hour|घण्टा|ghanta|גנטה
t_minute|मिनेट|minet|מינט
p_toilet|ट्वाइलेट कहाँ छ?|twailet kahan chha?|טואילט קהאן צ׳ה
p_cost|यसको कति पर्छ?|yasko kati parchha?|יסקו קטי פרצ׳ה
p_nounder|मैले बुझिनँ|maile bujhina|מאילה בוג׳ינה
p_english|तपाईं अंग्रेजी बोल्नुहुन्छ?|tapain angreji bolnuhunchha?|טפאין אנגרג׳י בולנוהונצ׳ה
p_slow|कृपया बिस्तारै बोल्नुहोस्|kripaya bistarai bolnuhos|קריפיה ביסטאראי בולנוהוס
p_bill|बिल दिनुहोस्|bil dinuhos|ביל דינוהוס
p_want|मलाई यो चाहियो|malai yo chahiyo|מלאי יו צ׳אהיו
p_expensive|यो धेरै महँगो भयो|yo dherai mahango bhayo|יו דראי מהנגו באיו
p_discount|अलि कम गर्नुहोस्|ali kam garnuhos|אלי קם גרנוהוס
p_address|मलाई यो ठेगानामा लैजानुहोस्|malai yo theganama laijanuhos|מלאי יו טגאנאמה לאיג׳אנוהוס
p_hotel|होटल कहाँ छ?|hotal kahan chha?|הוטל קהאן צ׳ה
p_doctor|मलाई डाक्टर चाहियो|malai daktar chahiyo|מלאי דאקטר צ׳אהיו
p_police|प्रहरी बोलाउनुहोस्!|prahari bolaunuhos!|פרהרי בולאונוהוס
p_israel|म इजरायलबाट आएको हुँ|ma Ijrayalbata aeko hun|מה איג׳ראיילבאטה אאקו הון
p_name|मेरो नाम ... हो|mero nam ... ho|מרו נאם ... הו
p_nice|तपाईंलाई भेटेर खुसी लाग्यो|tapainlai bhetera khusi lagyo|טפאינלאי בטרה חוסי לאגיו
p_water|पानी दिनुहोस्|pani dinuhos|פאני דינוהוס
p_help|मलाई मद्दत गर्न सक्नुहुन्छ?|malai maddat garna saknuhunchha?|מלאי מדת גרנה סקנוהונצ׳ה
p_what|यो के हो?|yo ke ho?|יו קה הו
p_nospicy|पिरो नराख्नुहोस्|piro narakhnuhos|פירו נראחנוהוס
room|कोठा|kotha|קוטה
key|साँचो|sancho|סאנצ׳ו
bed|ओछ्यान|ochhyan|אוצ׳יאן
shower|नुहाउने ठाउँ|nuhaune thaun|נוהאונה טאון
towel|तौलिया|tauliya|טאוליה
passport|राहदानी|rahadani|ראהדאני
mon|सोमबार|sombar|סומבאר
tue|मङ्गलबार|mangalbar|מנגלבאר
wed|बुधबार|budhbar|בודבאר
thu|बिहीबार|bihibar|ביהיבאר
fri|शुक्रबार|shukrabar|שוקרבאר
sat|शनिबार|shanibar|שניבאר
sun|आइतबार|aitabar|אאיטבאר
red|रातो|rato|ראטו
blue|निलो|nilo|נילו
green|हरियो|hariyo|הריו
yellow|पहेँलो|pahenlo|פהנלו
black|कालो|kalo|קאלו
white|सेतो|seto|סטו
man|पुरुष|purush|פורוש
woman|महिला|mahila|מהילה
child|बच्चा|bachcha|בצ׳ה
family|परिवार|pariwar|פריוואר
i|म|ma|מה
you|तपाईं|tapain|טפאין
head|टाउको|tauko|טאוקו
stomach|पेट|pet|פט
hand|हात|hat|האת
pain|दुखाइ|dukhai|דוחאי
medicine|औषधि|aushadhi|אאושדי
sick|बिरामी|birami|בירמי
big|ठूलो|thulo|טולו
small|सानो|sano|סאנו
hot|तातो|tato|טאטו
cold|चिसो|chiso|צ׳יסו
bad|नराम्रो|naramro|נראמרו
beautiful|सुन्दर|sundar|סונדר
new|नयाँ|nayan|נאיאן
old|पुरानो|purano|פוראנו
fast|छिटो|chhito|צ׳יטו
slow|बिस्तारै|bistarai|ביסטאראי
near|नजिक|najik|נג׳יק
far_a|टाढा|tadha|טאדה
clean|सफा|sapha|ספה
dirty|फोहोर|phohor|פוהור
tired|थाकेको|thakeko|טאקקו
hungry|भोक लाग्यो|bhok lagyo|בוק לאגיו
thirsty|तिर्खा लाग्यो|tirkha lagyo|טירחה לאגיו
happy|खुसी|khusi|חוסי
sad|दुःखी|dukhi|דוחי
easy|सजिलो|sajilo|סג׳ילו
difficult|गाह्रो|gahro|גאהרו
many|धेरै|dherai|דראי
eat|खानु|khanu|חאנו
drink|पिउनु|piunu|פיאונו
go|जानु|janu|ג׳אנו
buy|किन्नु|kinnu|קינו
speak|बोल्नु|bolnu|בולנו
sleep|सुत्नु|sutnu|סוטנו
understand|बुझ्नु|bujhnu|בוג׳נו
come|आउनु|aunu|אאונו
want|चाहनु|chahanu|צ׳אהנו
need|चाहिनु|chahinu|צ׳אהינו
know|थाहा हुनु|thaha hunu|טאהה הונו
see|हेर्नु|hernu|הרנו
hear|सुन्नु|sunnu|סונו
give|दिनु|dinu|דינו
take|लिनु|linu|לינו
pay|तिर्नु|tirnu|טירנו
wait|पर्खनु|parkhanu|פרחנו
walk|हिँड्नु|hidnu|הינדנו
read|पढ्नु|padhnu|פדנו
write|लेख्नु|lekhnu|לחנו
love|माया गर्नु|maya garnu|מאיה גרנו
work|काम गर्नु|kam garnu|קאם גרנו
swim|पौडी खेल्नु|paudi khelnu|פאודי חלנו
c_table|दुई जनाको लागि टेबल, कृपया|dui janako lagi tebal, kripaya|דואי ג׳נאקו לאגי טבל, קריפיה
c_menu|मेनु दिनुहोस्|menu dinuhos|מנו דינוהוס
c_noice|बरफ नहाल्नुहोस्|baraph nahalnuhos|בראף נהאלנוהוס
c_nomeat|म मासु खान्नँ|ma masu khanna|מה מאסו חאנה
c_allergy|मलाई बदामबाट एलर्जी छ|malai badambata elarji chha|מלאי בדאמבאטה אלרג׳י צ׳ה
c_delicious|धेरै मिठो छ!|dherai mitho chha!|דראי מיטו צ׳ה
c_reserv|मेरो बुकिङ छ|mero buking chha|מרו בוקינג צ׳ה
c_wifi|वाइफाइको पासवर्ड के हो?|waiphaiko paswarda ke ho?|ואיפאיקו פאסוורד קה הו
c_checkout|चेकआउट कति बजे हो?|chekaut kati baje ho?|צ׳קאאוט קטי בג׳ה הו
c_howget|त्यहाँ कसरी जाने?|tyahan kasari jane?|טיאהאן קסרי ג׳אנה
c_stophere|यहाँ रोक्नुहोस्|yahan roknuhos|יהאן רוקנוהוס
c_far|टाढा छ?|tadha chha?|טאדה צ׳ה
c_card|कार्डबाट तिर्न मिल्छ?|kardbata tirna milchha?|קארדבאטה טירנה מילצ׳ה
c_looking|हेर्दै मात्र छु, धन्यवाद|herdai matra chhu, dhanyabad|הרדאי מאטרה צ׳ו, דניאבאד
c_yourname|तपाईंको नाम के हो?|tapainko nam ke ho?|טפאינקו נאם קה הו
c_wherefrom|तपाईं कहाँबाट हो?|tapain kahanbata ho?|טפאין קהאנבאטה הו
c_seeyou|पछि भेटौँला|pachhi bhetaunla|פצ׳י בטאונלה
c_cheers|चियर्स!|chiyars!|צ׳יירס
c_lost|म बाटो बिराएँ|ma bato biraen|מה באטו ביראאן
c_passport|मेरो राहदानी हरायो|mero rahadani harayo|מרו ראהדאני הראיו
c_hurts|यहाँ दुख्छ|yahan dukhchha|יהאן דוחצ׳ה
c_time|कति बज्यो?|kati bajyo?|קטי בג׳יו
c_again|फेरि भन्नुहोस्|pheri bhannuhos|פרי בנוהוס
c_write|लेखिदिनुहुन्छ?|lekhidinuhunchha?|לחידינוהונצ׳ה
dog|कुकुर|kukur|קוקור
cat|बिरालो|biralo|בירלו
bird|चरा|chara|צ׳רה
horse|घोडा|ghoda|גודה
cow|गाई|gai|גאי
pig|सुँगुर|sungur|סונגור
elephant|हात्ती|hatti|האטי
monkey|बाँदर|bandar|באנדר
snake|सर्प|sarpa|סרפה
mosquito|लामखुट्टे|lamkhutte|לאמחוטה
lion|सिंह|simha|סימהה
duck|हाँस|hans|האנס
apple|स्याउ|syau|סיאו
banana|केरा|kera|קרה
orange|सुन्तला|suntala|סונטלה
mango|आँप|aanp|אאנפ
pineapple|भुइँकटहर|bhuinkatahar|בואינקטהר
watermelon|खरबुजा|kharbuja|חרבוג׳ה
coconut|नरिवल|nariwal|נריוול
grapes|अंगुर|angur|אנגור
lemon|कागती|kagati|קאגטי
strawberry|स्ट्रबेरी|strabeli|סטרברי
papaya|मेवा|mewa|מווה
tomato|गोलभेडा|golbheda|גולבדה
potato|आलु|aalu|אאלו
onion|प्याज|pyaj|פיאג׳
garlic|लसुन|lasun|לסון
cucumber|काँक्रो|kankro|קאנקרו
carrot|गाजर|gajar|גאג׳ר
chili|खुर्सानी|khursani|חורסאני
corn|मकै|makai|מקאי
mushroom|च्याउ|chyau|צ׳יאו
lettuce|जिरीको साग|jiriko sag|ג׳ירקו סאג
eggplant|भन्टा|bhanta|בנטה
soup|सुप|sup|סופ
salad|सलाद|salad|סלאד
noodles|चाउचाउ|chauchau|צ׳או צ׳או
cheese|चिज|chij|צ׳יג׳
butter|मक्खन|makkhan|מקחן
salt|नुन|nun|נון
sugar|चिनी|chini|צ׳יני
cake|केक|kek|קק
icecream|आइसक्रिम|aiskrim|אייסקרים
juice|जुस|jus|ג׳וס
wine|वाइन|wain|ואין
breakfast|बिहानको खाना|bihanko khana|ביהאנקו חאנה
lunch|दिउँसोको खाना|diunsoko khana|דיונסוקו חאנה
dinner|बेलुकाको खाना|belukako khana|בלוקאקו חאנה
fork|काँटा|kanta|קאנטה
spoon|चम्चा|chamcha|צ׳מצ׳ה
knife|चक्कु|chakku|צ׳קו
glass|गिलास|gilas|גילאס
plate|थाल|thal|טאל
bank|बैंक|baink|בנק
atm|एटीएम|etiem|איי-טי-אם
beach|समुद्र तट|samudra tat|סמודרה טט
museum|संग्रहालय|sangrahalaya|סנגרהאליה
temple|मन्दिर|mandir|מנדיר
street|सडक|sadak|סדק
city|सहर|sahar|סהר
shop|पसल|pasal|פסל
supermarket|सुपरमार्केट|suparmarket|סופרמרקט
park|पार्क|park|פארק
station|स्टेसन|stesan|סטסן
embassy|दूतावास|dutawas|דוטאוואס
phone|फोन|phon|פון
charger|चार्जर|charjar|צ׳ארג׳ר
bag|झोला|jhola|ג׳ולה
shoes|जुत्ता|jutta|ג׳וטה
clothes|लुगा|luga|לוגה
hat|टोपी|topi|טופי
glasses|चस्मा|chasma|צ׳סמה
map|नक्सा|naksa|נקסה
sunscreen|सनस्क्रिन|sanskrin|סנסקרין
umbrella|छाता|chhata|צ׳אטה
sf_order|मलाई अर्डर गर्नु छ|malai ardar garnu chha|מלאי ארדר גרנו צ׳ה
sf_recommend|तपाईं के सिफारिस गर्नुहुन्छ?|tapain ke sipharis garnuhunchha?|טפאין קה סיפריס גרנוהונצ׳ה
sf_bottle|एक बोतल पानी दिनुहोस्|ek botal pani dinuhos|אק בוטל פאני דינוהוס
sf_isspicy|यो पिरो छ?|yo piro chha?|יו פירו צ׳ה
sf_onemore|अर्को एउटा दिनुहोस्|arko euta dinuhos|ארקו אאוטה דינוהוס
sf_nosugar|चिनी नहाल्नुहोस्|chini nahalnuhos|צ׳יני נהאלנוהוס
sf_takeaway|प्याक गरिदिनुहोस्|pyak garidinuhos|פיאק גרידינוהוס
ss_smaller|सानो साइज छ?|sano saij chha?|סאנו סאייז צ׳ה
ss_try|लगाएर हेर्न मिल्छ?|lagaera herna milchha?|לגאארה הרנה מילצ׳ה
ss_two|दुईवटा दिनुहोस्|duiwata dinuhos|דואיווטה דינוהוס
ss_change|खुद्रा छ?|khudra chha?|חודרה צ׳ה
ss_last|अन्तिम मूल्य कति हो?|antim mulya kati ho?|אנטים מוליה קטי הו
ss_bag|झोला दिनुहोस्|jhola dinuhos|ג׳ולה דינוהוס
sm_busstop|बस बिसौनी कहाँ छ?|bas bisauni kahan chha?|בס ביסאוני קהאן צ׳ה
sm_trainleave|रेल कति बजे छुट्छ?|rel kati baje chhutchha?|רל קטי בג׳ה צ׳וטצ׳ה
sm_oneticket|एउटा टिकट दिनुहोस्|euta tikat dinuhos|אאוטה טיקט דינוהוס
sm_howlong|कति समय लाग्छ?|kati samaya lagchha?|קטי סמיה לאגצ׳ה
sm_meter|मिटर चलाउनुहोस्|mitar chalaunuhos|מיטר צ׳לאונוהוס
sm_slowdrive|बिस्तारै चलाउनुहोस्|bistarai chalaunuhos|ביסטאראי צ׳לאונוהוס
sm_airport|मलाई विमानस्थल जानु छ|malai bimanasthal janu chha|מלאי בימאנסטל ג׳אנו צ׳ה
sh_leavebag|झोला यहाँ छोड्न मिल्छ?|jhola yahan chhodna milchha?|ג׳ולה יהאן צ׳ודנה מילצ׳ה
sh_ac|एसी चलेको छैन|esi chaleko chhaina|אסי צ׳לקו צ׳אינה
sh_breakfast|बिहानको खाना समावेश छ?|bihanko khana samawesh chha?|ביהאנקו חאנה סמאווש צ׳ה
sh_towel|मलाई अर्को तौलिया चाहियो|malai arko tauliya chahiyo|מלאי ארקו טאוליה צ׳אהיו
sh_taxi|ट्याक्सी बोलाइदिनुहुन्छ?|tyaksi bolaidinuhunchha?|טיאקסי בולאאידינוהונצ׳ה
sh_late|ढिलो चेकआउट गर्न मिल्छ?|dhilo chekaut garna milchha?|דילו צ׳קאאוט גרנה מילצ׳ה
so_learning|म नेपाली सिक्दै छु|ma nepali sikdai chhu|מה נפאלי סיקדאי צ׳ו
so_thankshelp|मद्दतको लागि धेरै धन्यवाद|maddatko lagi dherai dhanyabad|מדתקו לאגי דראי דניאבאד
so_photo|हाम्रो फोटो खिचिदिनुहुन्छ?|hamro photo khichidinuhunchha?|האמרו פוטו חיצ׳ידינוהונצ׳ה
so_like|मलाई यो ठाउँ मन पर्यो|malai yo thaun man paryo|מלאי יו טאון מן פריו
so_vacation|म यहाँ घुम्न आएको हुँ|ma yahan ghumna aeko hun|מה יהאן גומנה אאקו הון
so_howsay|यसलाई के भनिन्छ?|yaslai ke bhaninchha?|יסלאי קה בנינצ׳ה
so_noproblem|केही छैन|kehi chhaina|קהי צ׳אינה
so_beautiful|धेरै सुन्दर छ!|dherai sundar chha!|דראי סונדר צ׳ה
sp_unwell|मलाई सन्चो छैन|malai sancho chhaina|מלאי סנצ׳ו צ׳אינה
sp_nearhosp|सबैभन्दा नजिकको अस्पताल कहाँ छ?|sabaibhanda najikko aspatal kahan chha?|סבאיבנדה נג׳יקו אספטאל קהאן צ׳ה
sp_fever|मलाई ज्वरो आएको छ|malai jwaro aeko chha|מלאי ג׳וורו אאקו צ׳ה
sp_helpme|मलाई मद्दत गर्नुहोस्|malai maddat garnuhos|מלאי מדת גרנוהוס
sp_stolen|मेरो झोला चोरी भयो|mero jhola chori bhayo|מרו ג׳ולה צ׳ורי באיו
sp_embassy|मलाई इजरायली दूतावास चाहियो|malai Ijrayali dutawas chahiyo|מלאי איג׳ראילי דוטאוואס צ׳אהיו
dt1|कहाँ जाने?|kahan jane?|קהאן ג׳אנה
dt2|यो होटलमा, कृपया।|yo hotalma, kripaya.|יו הוטלמה, קריפיה
dt3|हुन्छ, बस्नुहोस्।|hunchha, basnuhos.|הונצ׳ה, בסנוהוס
dt4|कति लाग्छ?|kati lagchha?|קטי לאגצ׳ה
dt5|दुई सय रुपैयाँ।|dui saya rupaiyan.|דואי סאיה רופאייאן
dt6|मिटर चलाउनुहोस्।|mitar chalaunuhos.|מיטר צ׳לאונוהוס
dt7|केही छैन।|kehi chhaina.|קהי צ׳אינה
dt8|यहाँ रोक्नुहोस्, धन्यवाद।|yahan roknuhos, dhanyabad.|יהאן רוקנוהוס, דניאבאד
dm1|यसको मूल्य कति हो?|yasko mulya kati ho?|יסקו מוליה קטי הו
dm2|तीन सय।|tin saya.|טין סאיה
dm3|धेरै महँगो! दुई सय?|dherai mahango! dui saya?|דראי מהנגו! דואי סאיה
dm4|दुई सय पचास, अन्तिम मूल्य।|dui saya pachas, antim mulya.|דואי סאיה פצ׳אס, אנטים מוליה
dm5|ठिक छ, दिनुहोस्।|thik chha, dinuhos.|טיק צ׳ה, דינוהוס
dm6|धेरै धन्यवाद!|dherai dhanyabad!|דראי דניאבאד
dr1|कति जना?|kati jana?|קטי ג׳נה
dr2|दुई जना।|dui jana.|דואי ג׳נה
dr3|के खानुहुन्छ?|ke khanuhunchha?|קה חאנוהונצ׳ה
dr4|कुखुराको फ्राइड राइस, पिरो नराख्नुहोस्।|kukhurako phraid rais, piro narakhnuhos.|קוחורקו פראייד ראייס, פירו נראחנוהוס
dr5|पिउन के?|piuna ke?|פיאונה קה
dr6|पानी मात्र, कृपया।|pani matra, kripaya.|פאני מאטרה, קריפיה
dr7|बिल ल्याउनुहोस्।|bil lyaunuhos.|ביל ליאונוהוס
dh1|नमस्ते, मेरो बुकिङ छ।|namaste, mero buking chha.|נמסטה, מרו בוקינג צ׳ה
dh2|कसको नाममा?|kasko namma?|קסקו נאממה
dh3|... को नाममा।|... ko namma.|... קו נאממה
dh4|राहदानी देखाउनुहोस्।|rahadani dekhaunuhos.|ראהדאני דחאונוהוס
dh5|तपाईंको कोठा तीन सय पाँच हो।|tapainko kotha tin saya panch ho.|טפאינקו קוטה טין סאיה פאנץ׳ הו
dh6|बिहानको खाना कति बजे हो?|bihanko khana kati baje ho?|ביהאנקו חאנה קטי בג׳ה הו
dh7|सात बजेदेखि दस बजेसम्म।|sat bajedekhi das bajesamma.|סאת בג׳דחי דס בג׳סמה
dd1|माफ गर्नुहोस्, स्टेसन कहाँ छ?|maaph garnuhos, stesan kahan chha?|מאף גרנוהוס, סטסן קהאן צ׳ה
dd2|सिधा जानुहोस्, अनि देब्रे।|sidha januhos, ani debre.|סידה ג׳אנוהוס, אני דברה
dd3|यहाँबाट टाढा छ?|yahanbata tadha chha?|יהאנבאטה טאדה צ׳ה
dd4|छैन, हिँडेर पाँच मिनेट।|chhaina, hindera panch minet.|צ׳אינה, הינדרה פאנץ׳ מינט
dd5|धेरै धेरै धन्यवाद!|dherai dherai dhanyabad!|דראי דראי דניאבאד
w_weather|मौसम|mausam|מאוסם
w_sun|घाम|gham|גאם
w_rain|वर्षा|barsha|ברשה
w_wind|हावा|hawa|האווה
w_cloud|बादल|badal|באדל
w_snow|हिउँ|hiun|היון
w_storm|आँधी|aandhi|אאנדי
w_humid|ओसिलो|osilo|אוסילו
j_teacher|शिक्षक|shikshak|שיקשק
j_driver|चालक|chalak|צ׳אלק
j_waiter|वेटर|wetar|וטר
j_cook|भान्से|bhanse|באנסה
j_student|विद्यार्थी|bidyarthi|בידיארטי
j_engineer|इन्जिनियर|injiniyar|אינג׳יניאר
j_nurse|नर्स|nars|נרס
j_seller|पसले|pasale|פסלה
j_guide|गाइड|gaid|גאייד
j_pharmacist|औषधि विक्रेता|aushadhi bikreta|אאושדי ביקרטה
e_angry|रिसाएको|risaeko|ריסאאקו
e_scared|डराएको|daraeko|דראאקו
e_bored|दिक्क लागेको|dikka lageko|דיקה לאגקו
e_worried|चिन्तित|chintit|צ׳ינטיט
e_surprised|छक्क परेको|chhakka pareko|צ׳קה פרקו
e_calm|शान्त|shanta|שאנטה
e_excited|उत्साहित|utsahit|אוטסאהיט
e_love|माया लागेको|maya lageko|מאיה לאגקו
dir_north|उत्तर|uttar|אוטר
dir_south|दक्षिण|dakshin|דקשין
dir_east|पूर्व|purba|פורבה
dir_west|पश्चिम|pashchim|פשצ׳ים
dir_corner|कुना|kuna|קונה
dir_light|ट्राफिक बत्ती|traphik batti|טראפיק בטי
dir_behind|पछाडि|pachhadi|פצ׳אדי
dir_front|अगाडि|agadi|אגאדי
dir_next|छेउमा|chheuma|צ׳אומה
dir_back|फर्किनुहोस्|pharkinuhos|פרקינוהוס
dir_up|माथि|mathi|מאטי
dir_down|तल|tala|טלה
da1|तपाईंको भ्रमणको उद्देश्य के हो?|tapainko bhramanko uddeshya ke ho?|טפאינקו ברמנקו אודשיה קה הו
da2|तपाईं कति दिन बस्नुहुन्छ?|tapain kati din basnuhunchha?|טפאין קטי דין בסנוהונצ׳ה
da3|दुई हप्ता।|dui hapta.|דואי הפטה
da4|स्वागत छ!|swagat chha!|סוואגט צ׳ה
dp1|कहाँ दुख्छ?|kahan dukhchha?|קהאן דוחצ׳ה
dp2|यो औषधि दिनको दुई पटक खानुहोस्।|yo aushadhi dinko dui patak khanuhos.|יו אאושדי דינקו דואי פטק חאנוהוס
dp4|छिटो निको हुनुहोस्!|chhito niko hunuhos!|צ׳יטו ניקו הונוהוס
ds1|मलाई इन्टरनेट भएको सिम कार्ड चाहियो।|malai intarnet bhaeko sim kard chahiyo.|מלאי אינטרנט באאקו סים קארד צ׳אהיו
ds2|कति दिनको लागि?|kati dinko lagi?|קטי דינקו לאגי
ds3|दस दिनको लागि।|das dinko lagi.|דס דינקו לאגי
ds4|भयो, अब तपाईंको इन्टरनेट चल्छ।|bhayo, aba tapainko intarnet chalchha.|באיו, אבה טפאינקו אינטרנט צ׳לצ׳ה
dc1|के चाहियो?|ke chahiyo?|קה צ׳אהיו
dc2|यो निलो रङमा छ?|yo nilo rangma chha?|יו נילו רנגמה צ׳ה
dc3|छ, कति साइज?|chha, kati saij?|צ׳ה, קטי סאייז
dc4|मिडियम।|midiyam.|מידיום
dc5|हुन्छ, लगाएर हेर्ने कोठा त्यहाँ छ।|hunchha, lagaera herne kotha tyahan chha.|הונצ׳ה, לגאארה הרנה קוטה טיאהאן צ׳ה
dg1|मलाई भोलिको लागि टुर बुक गर्नु छ।|malai bholiko lagi tur buk garnu chha.|מלאי בוליקו לאגי טור בוק גרנו צ׳ה
dg2|टुर बिहान आठ बजे निस्कन्छ।|tur bihan aath baje niskanchha.|טור ביהאן אאט בג׳ה ניסקנצ׳ה
dg3|दिउँसोको खाना समावेश छ?|diunsoko khana samawesh chha?|דיונסוקו חאנה סמאווש צ׳ה
dg4|छ, पानी पनि।|chha, pani pani.|צ׳ה, פאני פני
dg5|राम्रो, दुई जनाको लागि।|ramro, dui janako lagi.|ראמרו, דואי ג׳נאקו לאגי
fa_father|बुबा|buba|בובה
fa_mother|आमा|aama|אאמה
fa_parents|आमाबुबा|aamabuba|אאמהבובה
fa_son|छोरा|chhora|צ׳ורה
fa_daughter|छोरी|chhori|צ׳ורי
fa_brother|दाइ / भाइ|dai / bhai|דאי / באי
fa_sister|दिदी / बहिनी|didi / bahini|דידי / בהיני
fa_grandpa|हजुरबुबा|hajurbuba|הג׳ורבובה
fa_grandma|हजुरआमा|hajuraama|הג׳וראאמה
fa_grandson|नाति|nati|נאטי
fa_granddau|नातिनी|natini|נאטיני
fa_ggson|पनाति|panati|פנאטי
fa_ggdau|पनातिनी|panatini|פנאטיני
fa_uncle|काका / मामा|kaka / mama|קאקה / מאמה
fa_aunt|काकी / माइजु|kaki / maiju|קאקי / מאיג׳ו
fa_cousin_m|काकाको छोरा|kakako chhora|קאקאקו צ׳ורה
fa_cousin_f|काकाकी छोरी|kakaki chhori|קאקאקי צ׳ורי
fa_nephew|भतिजा|bhatija|בטיג׳ה
fa_niece|भतिजी|bhatiji|בטיג׳י
fa_husband|श्रीमान्|shriman|שרימאן
fa_wife|श्रीमती|shrimati|שרימטי
fa_baby|शिशु|shishu|שישו
fa_neighbor|छिमेकी|chhimeki|צ׳ימקי
fa_boyfriend|केटा साथी|keta sathi|קטה סאטי
fa_girlfriend|केटी साथी|keti sathi|קטי סאטי
fp_family|यो मेरो परिवार हो।|yo mero pariwar ho.|יו מרו פריוואר הו
fp_kids|तपाईंका छोराछोरी छन्?|tapainka chhorachhori chhan?|טפאינקה צ׳ורהצ׳ורי צ׳ן
fp_sibs|मेरो एक दाइ र एक दिदी छन्।|mero ek dai ra ek didi chhan.|מרו אק דאי רה אק דידי צ׳ן
fp_lives|मेरो परिवार इजरायलमा बस्छ।|mero pariwar Ijrayalma baschha.|מרו פריוואר איג׳ראיילמה בסצ׳ה
fp_photo|यो मेरा छोराछोरीको फोटो हो।|yo mera chhorachhoriko photo ho.|יו מרה צ׳ורהצ׳וריקו פוטו הו`
});
NW.ne = (() => {
  const D = ["एक", "दुई", "तीन", "चार", "पाँच", "छ", "सात", "आठ", "नौ", "दस", "एघार", "बाह्र", "तेह्र", "चौध", "पन्ध्र", "सोह्र", "सत्र", "अठार", "उन्नाइस", "बीस", "एक्काइस", "बाइस", "तेइस", "चौबीस", "पच्चीस", "छब्बीस", "सत्ताइस", "अट्ठाइस", "उनन्तीस", "तीस", "एकतीस", "बत्तीस", "तेत्तीस", "चौँतीस", "पैँतीस", "छत्तीस", "सैँतीस", "अठतीस", "उनन्चालीस", "चालीस", "एकचालीस", "बयालीस", "त्रिचालीस", "चवालीस", "पैँतालीस", "छयालीस", "सतचालीस", "अठचालीस", "उनन्पचास", "पचास", "एकाउन्न", "बाउन्न", "त्रिपन्न", "चउन्न", "पचपन्न", "छपन्न", "सन्ताउन्न", "अन्ठाउन्न", "उनन्साठी", "साठी", "एकसट्ठी", "बयसट्ठी", "त्रिसट्ठी", "चौसट्ठी", "पैँसट्ठी", "छयसट्ठी", "सतसट्ठी", "अठसट्ठी", "उनन्सत्तरी", "सत्तरी", "एकहत्तर", "बहत्तर", "त्रिहत्तर", "चौहत्तर", "पचहत्तर", "छयहत्तर", "सतहत्तर", "अठहत्तर", "उनासी", "असी", "एकासी", "बयासी", "त्रियासी", "चौरासी", "पचासी", "छयासी", "सतासी", "अठासी", "उनान्नब्बे", "नब्बे", "एकानब्बे", "बयानब्बे", "त्रियानब्बे", "चौरानब्बे", "पन्चानब्बे", "छयानब्बे", "सन्तानब्बे", "अन्ठानब्बे", "उनान्सय"];
  const R = ["ek", "dui", "tin", "char", "panch", "chha", "sat", "aath", "nau", "das", "eghar", "bahra", "tehra", "chaudha", "pandhra", "sohra", "satra", "athar", "unnais", "bis", "ekkais", "bais", "teis", "chaubis", "pachchis", "chhabbis", "sattais", "atthais", "unantis", "tis", "ektis", "battis", "tettis", "chauntis", "paintis", "chhattis", "saintis", "athtis", "unanchalis", "chalis", "ekchalis", "bayalis", "trichalis", "chawalis", "paintalis", "chhayalis", "satchalis", "athchalis", "unanpachas", "pachas", "ekaunna", "baunna", "tripanna", "chaunna", "pachpanna", "chhapanna", "santaunna", "anthaunna", "unansathi", "sathi", "eksatthi", "bayasatthi", "trisatthi", "chausatthi", "painsatthi", "chhayasatthi", "satsatthi", "athsatthi", "unansattari", "sattari", "ekhattar", "bahattar", "trihattar", "chauhattar", "pachahattar", "chhayahattar", "satahattar", "athahattar", "unasi", "asi", "ekasi", "bayasi", "triyasi", "chaurasi", "pachasi", "chhayasi", "satasi", "athasi", "unannabbe", "nabbe", "ekanabbe", "bayanabbe", "triyanabbe", "chauranabbe", "panchanabbe", "chhayanabbe", "santanabbe", "anthanabbe", "unansaya"];
  const H = ["אק", "דואי", "טין", "צ׳אר", "פאנץ׳", "צ׳ה", "סאת", "אאט", "נאו", "דס", "אגהאר", "בהרה", "טהרה", "צ׳אודה", "פנדרה", "סוהרה", "סתרה", "אטאר", "אונאיס", "ביס", "אקאיס", "באאיס", "טאיס", "צ׳אוביס", "פצ׳יס", "צ׳ביס", "סטאיס", "אטאיס", "אוננטיס", "טיס", "אקטיס", "בטיס", "טטיס", "צ׳אונטיס", "פאינטיס", "צ׳טיס", "סאינטיס", "אטטיס", "אוננצ׳ליס", "צ׳אליס", "אקצ׳ליס", "ביליס", "טריצ׳ליס", "צ׳וליס", "פאינטליס", "צ׳יליס", "סטצ׳ליס", "אטצ׳ליס", "אוננפצ׳ס", "פצ׳אס", "אקאונה", "באונה", "טריפנה", "צ׳אונה", "פצ׳פנה", "צ׳פנה", "סנטאונה", "אנטאונה", "אוננסטי", "סאטי", "אקסטי", "ביסטי", "טריסטי", "צ׳אוסטי", "פאינסטי", "צ׳יסטי", "סטסטי", "אטסטי", "אוננסטרי", "סתרי", "אחטר", "בהטר", "טריהטר", "צ׳אוהטר", "פצ׳הטר", "צ׳יהטר", "סטהטר", "אטהטר", "אונסי", "אסי", "אקסי", "ביסי", "טרייסי", "צ׳אורסי", "פצ׳סי", "צ׳יסי", "סטסי", "אטסי", "אוננבה", "נבה", "אקנבה", "בינבה", "טריינבה", "צ׳אורנבה", "פנצ׳נבה", "צ׳ינבה", "סנטנבה", "אנטנבה", "אוננסיה"];
  const w = n => [D[n - 1], R[n - 1], H[n - 1]];
  const SAY = ['सय', 'saya', 'סאיה'], HAJ = ['हजार', 'hajar', 'הג׳אר'], LAKH = ['लाख', 'lakh', 'לאח'];
  return (n, cur) => {
    const out = [];
    if (n === 0) out.push(['शून्य', 'shunya', 'שוניה']);
    else {
      const lakh = Math.floor(n / 100000), th = Math.floor(n % 100000 / 1000), h = Math.floor(n % 1000 / 100), r = n % 100;
      if (lakh) out.push(w(lakh), LAKH);
      if (th) out.push(w(th), HAJ);
      if (h) out.push(w(h), SAY);
      if (r) out.push(w(r));
    }
    if (cur) out.push(['रुपैयाँ', 'rupaiyan', 'רופאייאן']);
    return out.map(a => tk(a[0], a[1], a[2]));
  };
})();
NUM.ne = { tokens: (n, cur) => NW.ne(n, cur) };
