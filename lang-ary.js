/* ===== LingoNest — lang-ary.js : Moroccan Arabic (Darija) content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('ary', {
  ver: '1.15.0',
  curSym: "DH",
  country: {"he": "מרוקו", "en": "Morocco", "ru": "Марокко", "es": "Marruecos", "ar": "المغرب"},
  emergency: [
    ["🚓", {"he": "משטרה (בערים)", "en": "Police (cities)", "ru": "Полиция (в городах)", "es": "Policía (ciudades)", "ar": "الشرطة (المدن)"}, "19"],
    ["🚑", {"he": "אמבולנס וכבאות", "en": "Ambulance & fire", "ru": "Скорая и пожарные", "es": "Ambulancia y bomberos", "ar": "الإسعاف والإطفاء"}, "15"],
    ["👮", {"he": "ז׳נדרמריה (מחוץ לערים)", "en": "Gendarmerie (outside cities)", "ru": "Жандармерия (вне городов)", "es": "Gendarmería (fuera de ciudades)", "ar": "الدرك الملكي (خارج المدن)"}, "177"],
    ["🆘", {"he": "חירום מהנייד", "en": "Mobile emergency", "ru": "Экстренный с мобильного", "es": "Emergencias desde el móvil", "ar": "الطوارئ من الهاتف المحمول"}, "112"]
  ],
  tips: [
    {"t": {"he": "דארִיג׳ה מול ערבית ספרותית", "en": "Darija vs. Standard Arabic"}, "b": {"he": "ברחוב במרוקו מדברים דארִיג׳ה — ערבית עם הרבה מילים מברברית, צרפתית וספרדית. ערבית ספרותית מבינים (מהטלוויזיה ומבית הספר), אבל עונים לך בדארִיג׳ה. גם צרפתית נפוצה מאוד בערים ובתיירות.", "en": "On Moroccan streets people speak Darija — Arabic mixed with Berber, French and Spanish. Standard Arabic is understood, but they'll answer in Darija. French is very common in cities and tourism."}, "ex": [["بغيت / أريد", "bghit / urid", "בע׳ית / אוריד", "אני רוצה (דארִיג׳ה / ספרותית)", "I want (Darija / Standard)"]]},
    {"t": {"he": "שלילה: ما ... ش", "en": "Negation: ma ... ch"}, "b": {"he": "כמו בעברית של פעם ובצרפתית — השלילה עוטפת את הפועל: ما فهمتش (מא פהמתש) = לא הבנתי. ماشي (מאשי) = לא (לפני שם או תואר).", "en": "Negation wraps the verb: ma fhemtch = I didn't understand. machi = not (before a noun or adjective)."}, "ex": [["ما فهمتش", "ma fhemtch", "מא פהמתש", "לא הבנתי", "I didn't understand"], ["ماشي غالي", "machi ghali", "מאשי ע׳אלי", "לא יקר", "Not expensive"]]},
    {"t": {"he": "מחירים: דירהם, ריאל ומיקוח", "en": "Prices: dirham, ryal and bargaining"}, "b": {"he": "המטבע הוא דירהם (درهم). מלכודת: בשווקים הרבה סופרים ב\"ריאל\" — דירהם אחד = 20 ריאל! אם אומרים לך \"מית ריאל\" זה 5 דירהם. בסוק מתמקחים — המחיר הראשון הוא התחלה, וזה חלק מהכיף.", "en": "The currency is the dirham. Trap: in markets many count in \"ryal\" — 1 dirham = 20 ryal! \"100 ryal\" is 5 dirhams. In the souk you bargain — the first price is just the start."}, "ex": [["بشحال هادي؟", "bch7al hadi", "בשחאל האדי", "כמה זה עולה?", "How much is this?"], ["غالي بزاف!", "ghali bzaf", "ע׳אלי בזאף", "יקר מדי!", "Too expensive!"]]},
    {"t": {"he": "חמש מילים שפותחות כל דלת", "en": "Five words that open every door"}, "b": {"he": "واخا (ואח׳א) = בסדר/אוקיי. بزاف (בזאף) = הרבה/מאוד. صافي (סאפי) = זהו, מספיק, נגמר. زوين (זווין) = יפה. عافاك (עאפאכ) = בבקשה. עם החמש האלה תסתדר כמעט בכל שיחה קצרה.", "en": "wakha = OK, bzaf = a lot/very, safi = that's it/enough, zwin = beautiful, 3afak = please. With these five you'll get through most short chats."}, "ex": [["واخا", "wakha", "ואח׳א", "בסדר", "OK"], ["صافي", "safi", "סאפי", "זהו, מספיק", "That's it"]]},
    {"t": {"he": "ממשיכים ממילים מוכרות", "en": "Words you may already know"}, "b": {"he": "לישראלים רבים דארִיג׳ה נשמעת מוכרת מהבית: בזאף, זווין, שוכרן, חאנות, לחם, סוק, מזיאן. הרבה מילים מרוקאיות נכנסו לסלנג העברי — ומורשת יהודי מרוקו שמרה על עוד הרבה.", "en": "Many Israelis know Darija words from home: bzaf, zwin, souq, mzyan. Plenty entered Hebrew slang, and Moroccan-Jewish heritage kept many more."}, "ex": [["مزيان", "mzyan", "מזיאן", "טוב", "Good"]]},
    {"t": {"he": "ברכות וכבוד", "en": "Greetings and respect"}, "b": {"he": "السلام عليكم היא ברכה נפוצה, ועונים وعليكم السلام. אחרי תודה או עזרה אומרים الله يخليك (אללה יח׳ליכ, \"שאלוהים ישמור אותך\"). מתחילים שיחה בשאלות על השלום והמשפחה לפני שעוברים לעניין.", "en": "as-salamu alaykum is a common greeting; reply wa alaykum salam. After thanks or help: llah ykhellik (\"God keep you\"). Ask about health and family before getting to business."}, "ex": [["الله يخليك", "llah ykhellik", "אללה יח׳ליכ", "תודה (שאלוהים ישמור אותך)", "Thanks (God keep you)"], ["لاباس عليك؟", "labas 3lik", "לאבאס עליכ", "מה שלומך?", "How are you?"]]}
  ],
  note: {"he": "דארִיג׳ה נכתבת באותיות ערביות, עם שתי אותיות מיוחדות למרוקו: ڭ (ג) ו-ڤ (ו/V). הרבה מרוקאים כותבים אותה גם באותיות לטיניות עם מספרים — 3 = ע, 7 = ח, 9 = ק — כמו בעמודת התעתיק באפליקציה.", "en": "Darija is written in Arabic letters plus two Moroccan ones: ڭ (g) and ڤ (v). Many Moroccans also write it in Latin letters with numbers — 3 = ʿayn, 7 = ḥa, 9 = qaf — as in the app's transliteration.", "ru": "Дариджа пишется арабскими буквами плюс две марокканские: ڭ (г) и ڤ (в). Многие пишут её и латиницей с цифрами — 3 = ع, 7 = ح, 9 = ق — как в транслитерации приложения.", "es": "El dariya se escribe con letras árabes y dos marroquíes: ڭ (g) y ڤ (v). Muchos lo escriben también en latín con números — 3 = ع, 7 = ح, 9 = ق — como en la transliteración de la app.", "ar": "تُكتب الدارجة بالحروف العربية مع حرفين مغربيين: ڭ و ڤ. ويكتبها كثيرون أيضا بحروف لاتينية مع أرقام — 3 = ع، 7 = ح، 9 = ق — كما في النطق اللاتيني في التطبيق."},
  alpha: [
    ["ا", "ألف", "א", "alif"],
    ["ب", "باء", "ב", "ba"],
    ["ت", "تاء", "ת", "ta"],
    ["ث", "ثاء", "ת (במרוקו כמו ת)", "tha"],
    ["ج", "جيم", "ג׳", "jim"],
    ["ح", "حاء", "ח", "ḥa (7)"],
    ["خ", "خاء", "ח׳ (כ גרונית)", "kha"],
    ["د", "دال", "ד", "dal"],
    ["ذ", "ذال", "ד (במרוקו כמו ד)", "dhal"],
    ["ر", "راء", "ר מתגלגלת", "ra"],
    ["ز", "زاي", "ז", "zay"],
    ["س", "سين", "ס", "sin"],
    ["ش", "شين", "ש", "shin"],
    ["ص", "صاد", "צ׳ (ס נחרצת)", "ṣad"],
    ["ض", "ضاد", "ד נחרצת", "ḍad"],
    ["ط", "طاء", "ט", "ṭa"],
    ["ظ", "ظاء", "ד׳ נחרצת", "ẓa"],
    ["ع", "عين", "ע גרונית", "ʿayn (3)"],
    ["غ", "غين", "ע׳ (ר צרפתית)", "ghayn"],
    ["ف", "فاء", "פ", "fa"],
    ["ق", "قاف", "ק גרונית", "qaf (9)"],
    ["ك", "كاف", "כ / ק", "kaf"],
    ["ل", "لام", "ל", "lam"],
    ["م", "ميم", "מ", "mim"],
    ["ن", "نون", "נ", "nun"],
    ["ه", "هاء", "ה", "ha"],
    ["و", "واو", "ו", "waw"],
    ["ي", "ياء", "י", "ya"],
    ["ڭ", "ڭاف", "ג (אות מרוקאית)", "gaf (g)"],
    ["ڤ", "ڤاء", "ו / V (מילים לועזיות)", "va (v)"]
  ],
  /* speaker = female: [regex source, flags, replacement] */
  gender: [],
  words: `hello|السلام|salam|סלאם
bye|بسلامة|bslama|בסלאמה
morning|صباح الخير|sbah lkhir|צבאח לח׳יר
thanks|شكرا|choukran|שוכרן
please|عافاك|3afak|עאפאכ
sorry|سمح ليا|sme7 liya|סמח ליא
yes|إيه|iyeh|אייה
no|لا|la|לא
howareyou|لاباس؟|labas?|לאבאס
good|مزيان|mzyan|מזיאן
ok|واخا|wakha|ואח׳א
n1|واحد|wa7ed|ואחד
n2|جوج|jouj|ג׳וג׳
n3|تلاتة|tlata|תלאתה
n4|ربعة|rb3a|רבעה
n5|خمسة|khamsa|ח׳מסה
n6|ستة|stta|סתה
n7|سبعة|sb3a|סבעה
n8|تمنية|tmnya|תמניה
n9|تسعود|ts3oud|תסעוד
n10|عشرة|3achra|עשרה
n0|زيرو|zero|זירו
n20|عشرين|3echrin|עשרין
n50|خمسين|khamsin|ח׳מסין
n100|مية|mya|מייה
n1000|ألف|alf|אלף
n11|حضاش|7dach|חדאש
n12|طناش|tnach|טנאש
n13|تلطاش|tlettach|תלטאש
n14|ربعطاش|rb3tach|רבעטאש
n15|خمسطاش|khmstach|ח׳מסטאש
n16|سطاش|settach|סטאש
n17|سبعطاش|sb3tach|סבעטאש
n18|تمنطاش|tmntach|תמנטאש
n19|تسعطاش|ts3tach|תסעטאש
n30|تلاتين|tlatin|תלאתין
n40|ربعين|rb3in|רבעין
n60|ستين|sttin|סתין
n70|سبعين|sb3in|סבעין
n80|تمانين|tmanin|תמאנין
n90|تسعين|ts3in|תסעין
n200|ميتين|myatayn|מייתין
n500|خمس مية|khms mya|ח׳מס מייה
n10000|عشر آلاف|3chr alaf|עשר אלאף
water|الما|lma|למא
toilet|الطواليط|twalit|טוואליט
where|فين؟|fin|פין
howmuch|شحال؟|ch7al|שחאל
this|هادا|hada|האדא
friend|صاحبي|sa7bi|צאחבי
food|الماكلة|lmakla|למאכלה
bread|الخبز|lkhobz|לח׳ובז
coffee|القهوة|lqahwa|לקהווה
tea|أتاي|atay|אתאי
chicken|الدجاج|djaj|דג׳אג׳
fish|الحوت|l7out|לחות
rice|الروز|rrouz|רוז
beer|البيرة|lbira|לבירה
bill|الحساب|l7sab|לחסאב
tasty|بنين|bnin|בנין
egg|البيض|lbid|לביד
fruit|الفاكية|lfakya|לפאכיה
veg|الخضرة|lkhodra|לח׳ודרה
meat|اللحم|l7em|לחם
milk|الحليب|l7lib|לחליב
spicy|حار|7arr|חאר
restaurant|الريسطورون|restoran|רסטורון
ice|الثلج|ttalj|תלג׳
taxi|الطاكسي|taxi|טאקסי
bus|الطوبيس|tobis|טוביס
train|التران|tran|טראן
airport|المطار|lmatar|למטאר
hotel|الأوطيل|lotel|לוטיל
left|على ليسر|3la liser|עלא ליסר
right|على ليمن|3la limen|עלא לימן
straight|نيشان|nichan|נישאן
stop|وقف|wqef|וקף
ticket|البيي|lbiyi|לביי
money|الفلوس|lflous|לפלוס
expensive|غالي|ghali|ע׳אלי
cheap|رخيص|rkhis|רח׳יץ
market|السوق|ssouq|סוק
pharmacy|الفارماسي|lfarmasi|לפרמסי
open|محلول|m7loul|מחלול
closed|مسدود|msdoud|מסדוד
help|عتقوني!|3teqni|עתקני
police|البوليس|lbolis|לבוליס
doctor|الطبيب|tbib|טביב
hospital|السبيطار|sbitar|ספיטאר
today|اليوم|lyoum|ליום
tomorrow|غدا|ghedda|ע׳דא
yesterday|البارح|lbare7|לבארח
now|دابا|daba|דאבא
t_morning|الصباح|sbah|צבאח
t_evening|العشية|l3chiya|לעשייה
t_night|الليل|llil|ליל
t_week|السيمانة|simana|סימאנה
t_month|الشهر|chher|שהר
t_year|العام|l3am|לעאם
t_hour|الساعة|sa3a|סאעה
t_minute|دقيقة|dqiqa|דקיקה
p_toilet|فين كاينة الطواليط؟|fin kayna twalit|פין כאינה טוואליט
p_cost|بشحال هادا؟|bch7al hada|בשחאל האדא
p_nounder|ما فهمتش|ma fhemtch|מא פהמתש
p_english|كتهضر النڭليزية؟|kathder nglizia|כתהדר נגליזייה
p_slow|هضر بشوية عافاك|hder bchwiya 3afak|הדר בשוויה עאפאכ
p_bill|الحساب عافاك|l7sab 3afak|לחסאב עאפאכ
p_want|بغيت هادي|bghit hadi|בע׳ית האדי
p_expensive|غالي بزاف|ghali bzaf|ע׳אלי בזאף
p_discount|نقص شوية؟|nqes chwiya|נקץ שוויה
p_address|ديني لهاد العنوان عافاك|dini lhad l3onwan 3afak|דיני להאד לעונואן עאפאכ
p_hotel|فين كاين الأوطيل؟|fin kayn lotel|פין כאין לוטיל
p_doctor|خصني طبيب|khassni tbib|ח׳צני טביב
p_police|عيط للبوليس!|3iyet lbolis|עייט לבוליס
p_israel|أنا من إسرائيل|ana men israil|אנא מן אסראאיל
p_name|سميتي ...|smiti|סמיתי
p_nice|متشرفين|mtcharfin|מתשרפין
p_water|الما عافاك|lma 3afak|למא עאפאכ
p_help|تقدر تعاوني؟|tqder t3awenni|תקדר תעאווני
p_what|شنو هادا؟|chnou hada|שנו האדא
p_nospicy|بلا حار عافاك|bla 7arr 3afak|בלא חאר עאפאכ
room|البيت|lbit|לבית
key|الساروت|sarout|סארות
bed|الناموسية|namousiya|נאמוסייה
shower|الدوش|douch|דוש
towel|الفوطة|fouta|פוטה
passport|الباسبور|lpaspor|לפאספור
mon|الإثنين|letnin|לתנין
tue|الثلاث|tlat|תלאת
wed|الربع|larb3|לארבע
thu|الخميس|lkhmis|לח׳מיס
fri|الجمعة|jjem3a|ג׳מעה
sat|السبت|ssebt|סבת
sun|الحد|l7ed|לחד
red|حمر|7mer|חמר
blue|زرق|zreq|זרק
green|خضر|khder|ח׳דר
yellow|صفر|sfer|צפר
black|كحل|k7el|כחל
white|بيض|byed|בייד
man|راجل|rajel|ראג׳ל
woman|مرا|mra|מרא
child|درّي|derri|דרי
family|العايلة|l3ayla|לעאילה
i|أنا|ana|אנא
you|نتا|nta|נתא
head|الراس|rras|ראס
stomach|الكرش|lkerch|לכרש
hand|اليد|lyedd|ליד
pain|الوجع|lwje3|לוג׳ע
medicine|الدوا|ddwa|דווא
sick|مريض|mrid|מריד
big|كبير|kbir|כביר
small|صغير|sghir|צע׳יר
hot|سخون|skhoun|סח׳ון
cold|بارد|bared|בארד
bad|خايب|khayb|ח׳איב
beautiful|زوين|zwin|זווין
new|جديد|jdid|ג׳דיד
old|قديم|qdim|קדים
fast|دغيا|dghya|דע׳יא
slow|بشوية|bchwiya|בשוויה
near|قريب|qrib|קריב
far_a|بعيد|b3id|בעיד
clean|نقي|nqi|נקי
dirty|موسخ|mwessekh|מווסח׳
tired|عيان|3yyan|עייאן
hungry|جيعان|ji3an|ג׳יעאן
thirsty|عطشان|3atchan|עטשאן
happy|فرحان|fer7an|פרחאן
sad|حزين|7zin|חזין
easy|ساهل|sahel|סאהל
difficult|صعيب|s3ib|צעיב
many|بزاف|bzaf|בזאף
eat|ياكل|yakol|יאכל
drink|يشرب|ychreb|ישרב
go|يمشي|ymchi|ימשי
buy|يشري|ychri|ישרי
speak|يهضر|yhder|יהדר
sleep|ينعس|yn3es|ינעס
understand|يفهم|yfhem|יפהם
come|يجي|yji|יג׳י
want|يبغي|ybghi|יבע׳י
need|يحتاج|y7taj|יחתאג׳
know|يعرف|y3ref|יערף
see|يشوف|ychouf|ישוף
hear|يسمع|ysme3|יסמע
give|يعطي|y3ti|יעטי
take|ياخد|yakhod|יאח׳ד
pay|يخلص|ykhelles|יח׳לץ
wait|يتسنى|ytsenna|יתסנא
walk|يتمشى|ytmecha|יתמשא
read|يقرا|yqra|יקרא
write|يكتب|ykteb|יכתב
love|يحب|y7ebb|יחב
work|يخدم|ykhdem|יח׳דם
swim|يعوم|y3oum|יעום
c_table|طبلة لجوج عافاك|tabla l jouj 3afak|טבלה לג׳וג׳ עאפאכ
c_menu|عطيني المونيو عافاك|3tini lmenu 3afak|עטיני למניו עאפאכ
c_noice|بلا تلج عافاك|bla talj 3afak|בלא תלג׳ עאפאכ
c_nomeat|ما كناكلش اللحم|ma kanakolch l7em|מא כנאכולש ללחם
c_allergy|عندي الحساسية من الڭرڭاع|3ndi l7assasiya men lgerga3|ענדי לחססייה מן לגרגאע
c_delicious|بنين بزاف!|bnin bzaf|בנין בזאף
c_reserv|عندي حجز|3ndi 7ajz|ענדי חג׳ז
c_wifi|شنو هو الكود ديال الويفي؟|chnou howa lcode dyal wifi|שנו הווא לקוד דיאל ויפי
c_checkout|فوقاش خاصني نخرج من البيت؟|fo9ach khassni nkhrej mn lbit|פוקאש ח׳אצני נח׳רג׳ מן לבית
c_howget|كيفاش نمشي لتما؟|kifach nmchi ltemma|כיפאש נמשי לתמא
c_stophere|وقف هنا عافاك|wqef hna 3afak|וקף הנא עאפאכ
c_far|واش بعيد؟|wach b3id|ואש בעיד
c_card|واش نقدر نخلص بالكارط؟|wach nqder nkhelles bl karte|ואש נקדר נח׳לץ בלקארט
c_looking|غير كنشوف، شكرا|ghir kanchouf, choukran|ע׳יר כנשוף, שוכרן
c_yourname|شنو سميتك؟|chnou smitek|שנו סמיתכ
c_wherefrom|منين نتا؟|mnin nta|מנין נתא
c_seeyou|نتشافو من بعد|ntchafo mn b3d|נתשאפו מן בעד
c_cheers|بالصحة!|bsse77a|בסחה
c_lost|تلفت|tleft|תלפת
c_passport|ضاع ليا الباسبور|da3 liya lpaspor|דאע ליא לפאספור
c_hurts|كيضرني هنا|kaydorni hna|כידורני הנא
c_time|شحال فالساعة؟|ch7al fessa3a|שחאל פסאעה
c_again|عاود عافاك|3awed 3afak|עאוד עאפאכ
c_write|تقدر تكتبها ليا؟|tqder tktebha liya|תקדר תכתבהא ליא
dog|الكلب|lkelb|לכלב
cat|القط|lqett|לקט
bird|الطير|tter|טיר
horse|العود|l3oud|לעוד
cow|البقرة|lbegra|לבגרה
pig|الحلوف|l7allouf|לחלוף
elephant|الفيل|lfil|לפיל
monkey|القرد|lqerd|לקרד
snake|الحنش|l7nech|לחנש
mosquito|الشنيولة|chniwla|שניולה
lion|السبع|sbe3|סבע
duck|البطة|lbatta|לבטה
apple|التفاح|teffa7|תפאח
banana|البنان|lbanan|לבנאן
orange|الليمون|llimoun|לימון
mango|المانڭا|manga|מאנגה
pineapple|الأناناس|ananas|אנאנאס
watermelon|الدلاح|dlle7|דלאח
coconut|الكوكو|coco|קוקו
grapes|العنب|l3neb|לענב
lemon|الحامض|l7amed|לחאמד
strawberry|الفريز|frez|פריז
papaya|البابايا|papaya|פפאיה
tomato|مطيشة|mticha|מטישה
potato|البطاطا|btata|בטאטא
onion|البصلة|lbsla|לבסלה
garlic|الثوم|ttoum|תום
cucumber|الخيار|lkhyar|לח׳יאר
carrot|خيزو|khizou|ח׳יזו
chili|الفلفلة الحارة|lfelfla l7arra|לפלפלה לחארה
corn|الدرة|dra|דרה
mushroom|الفڭاع|lfegga3|לפגאע
lettuce|الخس|lkhess|לח׳ס
eggplant|الدنجال|ddenjal|דנג׳אל
soup|الحريرة|l7rira|לחרירה
salad|الشلاظة|chlada|שלאדה
noodles|الشعرية|ch3riya|שעריה
cheese|الفرماج|lfromaj|לפרומאג׳
butter|الزبدة|zzebda|זבדה
salt|الملحة|lmel7a|למלחה
sugar|السكر|sskkar|סוכר
cake|الڭاطو|lgato|לגאטו
icecream|الڭلاص|lglace|לגלאס
juice|العصير|l3asir|לעציר
wine|الشراب|chrab|שראב
breakfast|الفطور|lftour|לפטור
lunch|الغدا|lghda|לע׳דא
dinner|العشا|l3cha|לעשא
fork|الفرشيطة|forchita|פורשיטה
spoon|المعلقة|lm3elqa|למעלקה
knife|الموس|lmous|למוס
glass|الكاس|lkas|לכאס
plate|الطبسيل|tebsil|טבסיל
bank|البانكا|lbanka|לבנקה
atm|الڭيشي|lguichet|לגישה
beach|البحر|lb7er|לבחר
museum|المتحف|lmat7af|למתחף
temple|المعبد|lma3bad|למעבד
street|الزنقة|zenqa|זנקה
city|المدينة|lmdina|למדינה
shop|الحانوت|l7anout|לחאנות
supermarket|السوبير مارشي|supermarché|סופר מרשה
park|الجردة|jerda|ג׳רדה
station|المحطة|lm7atta|למחטה
embassy|السفارة|ssifara|ספארה
phone|التيليفون|tilifoun|תיליפון
charger|الشارجور|chargeur|שרג׳ור
bag|الصاك|ssak|סאק
shoes|الصباط|sbbat|סבאט
clothes|الحوايج|l7wayej|לחוואיג׳
hat|الطاڭية|tagiya|טאגייה
glasses|النظاظر|nndader|נדאדר
map|الخريطة|lkharita|לח׳ריטה
sunscreen|كريم الشمس|krim chems|כרים שמס
umbrella|المظل|lmdell|למדל
sf_order|بغيت نطلب|bghit ntleb|בע׳ית נטלב
sf_recommend|شنو تنصحني؟|chnou tnse7ni|שנו תנצחני
sf_bottle|قرعة ديال الما عافاك|qer3a dyal lma 3afak|קרעה דיאל למא עאפאכ
sf_isspicy|واش هادا حار؟|wach hada 7arr|ואש האדא חאר
sf_onemore|واحد آخر عافاك|wa7ed akhor 3afak|ואחד אח׳ור עאפאכ
sf_nosugar|بلا سكر عافاك|bla sskkar 3afak|בלא סוכר עאפאכ
sf_takeaway|واش نقدر نديه معايا؟|wach nqder ndih m3aya|ואש נקדר נדיה מעאיא
ss_smaller|واش عندك قد صغير؟|wach 3ndek qedd sghir|ואש ענדכ קד צע׳יר
ss_try|واش نقدر نجربو؟|wach nqder njerrbo|ואש נקדר נג׳רבו
ss_two|غادي نشري جوج|ghadi nchri jouj|ע׳אדי נשרי ג׳וג׳
ss_change|واش عندك الصرف؟|wach 3ndek sserf|ואש ענדכ סרף
ss_last|شنو آخر ثمن؟|chnou akhir taman|שנו אח׳יר תמן
ss_bag|عطيني ميكا عافاك|3tini mika 3afak|עטיני מיכה עאפאכ
sm_busstop|فين كاين لاريت ديال الطوبيس؟|fin kayn larret dyal tobis|פין כאין לארט דיאל טוביס
sm_trainleave|فوقاش كيخرج التران؟|fo9ach kaykhrej tran|פוקאש כיח׳רג׳ טראן
sm_oneticket|واحد البيي عافاك|wa7ed lbiyi 3afak|ואחד לביי עאפאכ
sm_howlong|شحال ديال الوقت؟|ch7al dyal lweqt|שחאל דיאל לוקת
sm_meter|شعل الكونتور عافاك|ch3el lcompteur 3afak|שעל לקונטור עאפאכ
sm_slowdrive|سوق بشوية عافاك|souq bchwiya 3afak|סוק בשוויה עאפאכ
sm_airport|بغيت نمشي للمطار|bghit nmchi lmatar|בע׳ית נמשי למטאר
sh_leavebag|واش نقدر نخلي الصاك هنا؟|wach nqder nkhelli ssak hna|ואש נקדר נח׳לי סאק הנא
sh_ac|الكليماتيزور ما خدامش|lclimatiseur ma khddamch|לקלימטיזור מא ח׳דאמש
sh_breakfast|واش الفطور داخل؟|wach lftour dakhel|ואש לפטור דאח׳ל
sh_towel|خصني فوطة أخرى|khassni fouta okhra|ח׳צני פוטה אוח׳רה
sh_taxi|تقدر تعيط ليا على طاكسي؟|tqder t3iyet liya 3la taxi|תקדר תעייט ליא עלא טאקסי
sh_late|واش نقدر نخرج معطل شوية؟|wach nqder nkhrej m3tel chwiya|ואש נקדר נח׳רג׳ מעטל שוויה
so_learning|كنتعلم الدارجة|kant3llem ddarija|כנתעלם דארג׳ה
so_thankshelp|شكرا بزاف على المعاونة|choukran bzaf 3la lm3awna|שוכרן בזאף עלא למעאונה
so_photo|تقدر تصورنا؟|tqder tsawwerna|תקדר תסאוורנא
so_like|عجبني هاد البلاصة|3jebni had lblasa|עג׳בני האד לבלאסה
so_vacation|أنا هنا فالعطلة|ana hna fl3otla|אנא הנא פלעוטלה
so_howsay|كيفاش كتقولو هادي؟|kifach katgoulou hadi|כיפאש כתגולו האדי
so_noproblem|ماشي مشكل|machi mochkil|מאשי משכיל
so_beautiful|زوين بزاف!|zwin bzaf|זווין בזאף
sp_unwell|ما مرتاحش|ma mrta7ch|מא מרתאחש
sp_nearhosp|فين أقرب سبيطار؟|fin aqrab sbitar|פין אקרב ספיטאר
sp_fever|فيا السخانة|fiya sskhana|פיא סח׳אנה
sp_helpme|عاوني عافاك|3awenni 3afak|עאווני עאפאכ
sp_stolen|شفرو ليا الصاك|chefrou liya ssak|שפרו ליא סאק
sp_embassy|خصني السفارة الإسرائيلية|khassni ssifara l-israiliya|ח׳צני ספארה לאסראאיליה
dt1|فين غادي؟|fin ghadi|פין ע׳אדי
dt2|لهاد الأوطيل عافاك.|lhad lotel 3afak|להאד לוטיל עאפאכ
dt3|واخا، طلع.|wakha, tle3|ואח׳א, טלע
dt4|بشحال؟|bch7al|בשחאל
dt5|ميتين درهم.|myatayn derham|מייתין דרהם
dt6|شعل الكونتور عافاك.|ch3el lcompteur 3afak|שעל לקונטור עאפאכ
dt7|ماشي مشكل.|machi mochkil|מאשי משכיל
dt8|وقف هنا، شكرا.|wqef hna, choukran|וקף הנא, שוכרן
dm1|بشحال هادي؟|bch7al hadi|בשחאל האדי
dm2|تلت مية.|tlt mya|תלת מייה
dm3|غالي بزاف! ميتين؟|ghali bzaf! myatayn|ע׳אלי בזאף! מייתין
dm4|ميتين وخمسين، آخر ثمن.|myatayn u khamsin, akhir taman|מייתין וח׳מסין, אח׳יר תמן
dm5|واخا، غادي نديها.|wakha, ghadi ndiha|ואח׳א, ע׳אדי נדיהא
dm6|شكرا بزاف!|choukran bzaf|שוכרן בזאף
dr1|شحال ديال الناس؟|ch7al dyal nnas|שחאל דיאל נאס
dr2|جوج عافاك.|jouj 3afak|ג׳וג׳ עאפאכ
dr3|شنو بغيتي تاكل؟|chnou bghiti takol|שנו בע׳יתי תאכל
dr4|روز مقلي بالدجاج، بلا حار.|rrouz m9li bdjaj, bla 7arr|רוז מקלי בדג׳אג׳, בלא חאר
dr5|وشنو تشرب؟|w chnou tchreb|ושנו תשרב
dr6|غير الما عافاك.|ghir lma 3afak|ע׳יר למא עאפאכ
dr7|الحساب عافاك.|l7sab 3afak|לחסאב עאפאכ
dh1|السلام، عندي حجز.|salam, 3ndi 7ajz|סלאם, ענדי חג׳ז
dh2|على سمية شكون؟|3la smiyt chkoun|עלא סמיית שכון
dh3|على سمية ...|3la smiyt|עלא סמיית
dh4|الباسبور ديالك عافاك.|lpaspor dyalek 3afak|לפאספור דיאלכ עאפאכ
dh5|البيت ديالك رقم تلت مية وخمسة.|lbit dyalek raqm tlt mya u khamsa|לבית דיאלכ רקם תלת מייה וח׳מסה
dh6|فوقاش الفطور؟|fo9ach lftour|פוקאש לפטור
dh7|من السبعة للعشرة.|mn sseb3a l l3achra|מן סבעה ללעשרה
dd1|سمح ليا، فين كاينة المحطة؟|sme7 liya, fin kayna lm7atta|סמח ליא, פין כאינה למחטה
dd2|نيشان، ومن بعد على ليسر.|nichan, u mn b3d 3la liser|נישאן, ומן בעד עלא ליסר
dd3|واش بعيدة من هنا؟|wach b3ida mn hna|ואש בעידה מן הנא
dd4|لا، خمس دقايق على رجليك.|la, khms dqayeq 3la rjlik|לא, ח׳מס דקאיק עלא רג׳ליכ
dd5|الله يخليك!|llah ykhellik|אללה יח׳ליכ
w_weather|الجو|jjew|ג׳ו
w_sun|الشمس|chems|שמס
w_rain|الشتا|chta|שתא
w_wind|الريح|rri7|ריח
w_cloud|السحاب|ss7ab|סחאב
w_snow|التلج|ttelj|תלג׳
w_storm|العاصفة|l3asifa|לעאספה
w_humid|فيه الرطوبة|fih rrtouba|פיה רטובה
j_teacher|الأستاد|l2ostad|לאוסתאד
j_driver|الشيفور|chifour|שיפור
j_waiter|الڭارسون|garson|גרסון
j_cook|الطباخ|tebbakh|טבאח׳
j_student|الطالب|talib|טאלב
j_engineer|المهندس|lmohandis|למוהנדיס
j_nurse|الفرملية|fermliya|פרמלייה
j_seller|البياع|biya3|בייאע
j_guide|الڭيد|guide|גיד
j_pharmacist|الفارماسيان|farmasyan|פרמסיאן
e_angry|معصب|m3esseb|מעסב
e_scared|خايف|khayef|ח׳איף
e_bored|مقلق|mqelleq|מקלק
e_worried|مهموم|mhmoum|מהמום
e_surprised|مندهش|mndhech|מנדהש
e_calm|هادي|hadi|האדי
e_excited|فرحان بزاف|fer7an bzaf|פרחאן בזאף
e_love|مغرم|mghram|מע׳רם
dir_north|الشمال|chamal|שמאל
dir_south|الجنوب|janoub|ג׳נוב
dir_east|الشرق|charq|שרק
dir_west|الغرب|gharb|ע׳רב
dir_corner|الكوان|lkwan|לקואן
dir_light|الضو الحمر|dow l7mer|דו לחמר
dir_behind|اللور|llour|לור
dir_front|القدام|lqeddam|לקדאם
dir_next|حدا|7da|חדא
dir_back|رجع اللور|rje3 llour|רג׳ע לור
dir_up|الفوق|lfouq|לפוק
dir_down|التحت|lta7t|לתחת`
});

/* ---- numbers & prices (0–999,999) in Darija → tokens [text, roman, hebrew]. Prices in dirham (درهم) ---- */
NW.ary = (() => {
  const U = [null, ['واحد', 'wa7ed', 'ואחד'], ['جوج', 'jouj', 'ג׳וג׳'], ['تلاتة', 'tlata', 'תלאתה'], ['ربعة', 'rb3a', 'רבעה'], ['خمسة', 'khamsa', 'ח׳מסה'], ['ستة', 'stta', 'סתה'], ['سبعة', 'sb3a', 'סבעה'], ['تمنية', 'tmnya', 'תמניה'], ['تسعود', 'ts3oud', 'תסעוד'], ['عشرة', '3achra', 'עשרה']];
  const TEEN = [null, ['حضاش', '7dach', 'חדאש'], ['طناش', 'tnach', 'טנאש'], ['تلطاش', 'tlettach', 'תלטאש'], ['ربعطاش', 'rb3tach', 'רבעטאש'], ['خمسطاش', 'khmstach', 'ח׳מסטאש'], ['سطاش', 'settach', 'סטאש'], ['سبعطاش', 'sb3tach', 'סבעטאש'], ['تمنطاش', 'tmntach', 'תמנטאש'], ['تسعطاش', 'ts3tach', 'תסעטאש']];
  const TEN = [null, null, ['عشرين', '3echrin', 'עשרין'], ['تلاتين', 'tlatin', 'תלאתין'], ['ربعين', 'rb3in', 'רבעין'], ['خمسين', 'khamsin', 'ח׳מסין'], ['ستين', 'sttin', 'סתין'], ['سبعين', 'sb3in', 'סבעין'], ['تمانين', 'tmanin', 'תמאנין'], ['تسعين', 'ts3in', 'תסעין']];
  const SHORT = [null, null, null, ['تلت', 'tlt', 'תלת'], ['ربع', 'rb3', 'רבע'], ['خمس', 'khms', 'ח׳מס'], ['ست', 'stt', 'סת'], ['سبع', 'sb3', 'סבע'], ['تمن', 'tmn', 'תמן'], ['تسع', 'ts3', 'תסע'], ['عشر', '3chr', 'עשר']];
  const AND = ['و', 'u-', 'ו', true];
  const w = a => tk(a[0], a[1], a[2]);
  function u100(n, out) {
    if (n <= 10) { if (n) out.push(w(U[n])); return; }
    if (n < 20) { out.push(w(TEEN[n - 10])); return; }
    const u = n % 10;
    if (u) out.push(w(U[u]), AND);
    out.push(w(TEN[Math.floor(n / 10)]));
  }
  function u1000(n, out) {
    const h = Math.floor(n / 100), r = n % 100;
    if (h === 1) out.push(tk('مية', 'mya', 'מייה'));
    else if (h === 2) out.push(tk('ميتين', 'myatayn', 'מייתין'));
    else if (h) out.push(w(SHORT[h]), tk('مية', 'mya', 'מייה'));
    if (h && r) out.push(AND);
    u100(r, out);
  }
  function words(n) {
    if (n === 0) return [tk('زيرو', 'zero', 'זירו')];
    const out = [], th = Math.floor(n / 1000), r = n % 1000;
    if (th === 1) out.push(tk('ألف', 'alf', 'אלף'));
    else if (th === 2) out.push(tk('ألفين', 'alfin', 'אלפין'));
    else if (th >= 3 && th <= 10) out.push(w(SHORT[th]), tk('آلاف', 'alaf', 'אלאף'));
    else if (th > 10) { u1000(th, out); out.push(tk('ألف', 'alf', 'אלף')); }
    if (th && r) out.push(AND);
    u1000(r, out);
    return out;
  }
  return (n, cur) => {
    if (!cur) return words(n);
    if (n === 1) return [tk('درهم', 'derham', 'דרהם'), tk('واحد', 'wa7ed', 'ואחד')];
    if (n === 2) return [tk('جوج', 'jouj', 'ג׳וג׳'), tk('دراهم', 'drahem', 'דראהם')];
    return words(n).concat([n >= 3 && n <= 10 ? tk('دراهم', 'drahem', 'דראהם') : tk('درهم', 'derham', 'דרהם')]);
  };
})();
NUM.ary = { tokens: (n, cur) => NW.ary(n, cur) };
