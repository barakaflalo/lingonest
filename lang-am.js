/* ===== LingoNest — lang-am.js : Amharic content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('am', {
  ver: '1.17.1',
  curSym: "Br",
  country: {"he": "אתיופיה", "en": "Ethiopia", "ru": "Эфиопия", "es": "Etiopía", "ar": "إثيوبيا"},
  emergency: [
    ["🚓", {"he": "משטרה", "en": "Police", "ru": "Полиция", "es": "Policía", "ar": "الشرطة"}, "991"],
    ["🚑", {"he": "אמבולנס (הצלב האדום)", "en": "Ambulance (Red Cross)", "ru": "Скорая (Красный Крест)", "es": "Ambulancia (Cruz Roja)", "ar": "الإسعاف (الصليب الأحمر)"}, "907"],
    ["🚒", {"he": "כבאות", "en": "Fire", "ru": "Пожарные", "es": "Bomberos", "ar": "الإطفاء"}, "939"]
  ],
  tips: [
    {"t": {"he": "קרובה לעברית", "en": "A cousin of Hebrew"}, "b": {"he": "אמהרית היא שפה שמית — משפחה אחת עם עברית וערבית. תזהה מילים: ሰላም (סלאם, שלום), ቤት (בית), ሰባት (סבאת, שבע), ምድር (מידיר, אדמה). גם הכתב געז התפתח מאותו מקור כמו האלף-בית העברי.", "en": "Amharic is Semitic — the same family as Hebrew and Arabic. Spot familiar words: ሰላም (selam, peace), ቤት (bet, house), ሰባት (sebat, seven). Even Ge'ez script comes from the same ancient source as Hebrew letters."}, "ex": [["ቤት", "bet", "בית", "בית", "House"], ["ሰባት", "sebat", "סבאת", "שבע", "Seven"]]},
    {"t": {"he": "השעה האתיופית", "en": "Ethiopian time"}, "b": {"he": "מלכודת חשובה: השעון האתיופי מתחיל בזריחה! \"שעה אחת\" (ከአንድ ሰዓት) = 7:00 בבוקר. לכן בדיאלוג \"ארוחת בוקר משעה 1 עד 4\" זה 7:00–10:00. כשקובעים — תמיד לשאול \"בשעון אירופי או אתיופי?\"", "en": "Important trap: the Ethiopian clock starts at sunrise! \"1 o'clock\" = 7 am. So in the dialogue \"breakfast from 1 to 4\" means 7–10 am. Always ask: Ethiopian or European time?"}, "ex": [["አንድ ሰዓት", "and se'at", "אנד סעאט", "שעה 1 (= 7:00)", "1 o'clock (= 7 am)"]]},
    {"t": {"he": "לוח שנה משלה", "en": "A calendar of its own"}, "b": {"he": "לאתיופיה לוח שנה משלה: 13 חודשים, והשנה מאחרת בכ-7–8 שנים אחרי הלוח הגרגוריאני. ראש השנה (እንቁጣጣሽ) חל ב-11 בספטמבר.", "en": "Ethiopia has its own calendar: 13 months, about 7–8 years behind the Gregorian one. New Year (Enkutatash) falls on 11 September."}, "ex": [["መልካም አዲስ ዓመት!", "melkam addis amet!", "מלקאם אדיס אמט", "שנה טובה!", "Happy New Year!"]]},
    {"t": {"he": "פנייה מנומסת", "en": "Polite address"}, "b": {"he": "באמהרית \"אתה\" משתנה: אנטה (לגבר), אנצ׳י (לאישה), ו-እርስዎ (אירסוו) — מנומס לכל אחד. האפליקציה משתמשת בצורה המנומסת: እባክዎ (אבקוו, בבקשה), ነዎት (נווט).", "en": "\"You\" varies: antä (man), anči (woman), and polite እርስዎ (ərswo) for anyone. The app uses the polite forms: እባክዎ (please), ነዎት."}, "ex": [["እንዴት ነዎት?", "endet newot?", "אנדט נווט", "מה שלומך? (מנומס)", "How are you? (polite)"]]},
    {"t": {"he": "טקס הקפה", "en": "The coffee ceremony"}, "b": {"he": "אתיופיה היא מולדת הקפה (ቡና — בונה). טקס הקפה לוקח זמן: קולים, טוחנים ומגישים 3 סבבים. אם מזמינים אותך — זה כבוד. לפני אוכל משותף אוכלים מאינג׳רה אחת ביד ימין בלבד.", "en": "Ethiopia is the birthplace of coffee (buna). The coffee ceremony takes time — roasting, grinding, three rounds. Being invited is an honour. Shared meals are eaten from one injera, right hand only."}, "ex": [["ቡና", "buna", "בונה", "קפה", "Coffee"]]},
    {"t": {"he": "ברכה עם כתף", "en": "Greeting with the shoulder"}, "b": {"he": "בין גברים מכירים לוחצים יד ונוגעים כתף בכתף. מבוגרים מברכים בנשיקות על הלחיים (שלוש ויותר!). ሰላም (סלאם) מתאים לכל מצב, ו-አመሰግናለሁ (אמסגינאלהו) = תודה.", "en": "Male friends shake hands and bump shoulders; relatives kiss cheeks (three or more!). ሰላም fits any situation, and አመሰግናለሁ = thank you."}, "ex": [["አመሰግናለሁ", "ameseginalehu", "אמסגינאלהו", "תודה", "Thank you"]]}
  ],
  note: {"he": "אמהרית נכתבת בכתב הגעז (פִידֶל) — אחד הכתבים העתיקים בעולם, קרוב משפחה רחוק של העברית. כל סימן הוא הברה: עיצור + תנועה. יש 33 עיצורי בסיס, ולכל אחד 7 צורות לפי התנועה. כאן — צורת הבסיס של כל עיצור (עם תנועה \"אֶ\").", "en": "Amharic is written in Ge'ez (fidel) — one of the world's oldest scripts, a distant cousin of Hebrew. Each sign is a syllable: consonant + vowel. 33 base consonants, each with 7 vowel forms. Here: the base form of each (with the vowel \"ä\").", "ru": "Амхарский пишется письмом геэз (фидель): каждый знак — слог. 33 базовых согласных, у каждой 7 форм по гласной.", "es": "El amhárico se escribe en ge'ez (fidel): cada signo es una sílaba. 33 consonantes base, cada una con 7 formas vocálicas.", "ar": "تُكتب الأمهرية بخط الجعز (فيدل): كل رمز مقطع. 33 ساكنا أساسيا، لكل منها 7 أشكال حسب الحركة."},
  vowelNote: {"he": "כל עיצור משנה את צורתו לפי התנועה: קו קטן בצד = u, קו למטה = i, רגל ארוכה = a, טבעת = e, צורה מקוצרת = בלי תנועה, ועוד. הנה ל (ለ) ו-ב (በ) בכל 7 הצורות — אותו עיקרון בכל האותיות.", "en": "Each consonant changes shape by vowel: a side stroke = u, a foot = i, a longer leg = a, a ring = e, a short form = no vowel… Here are ለ (l) and በ (b) in all 7 forms — the same pattern for every letter.", "ru": "Каждая согласная меняет форму по гласной. Вот ለ (л) и በ (б) во всех 7 формах.", "es": "Cada consonante cambia de forma según la vocal. Aquí ለ (l) y በ (b) en sus 7 formas.", "ar": "كل ساكن يغيّر شكله حسب الحركة. إليك ለ (ل) وበ (ب) بأشكالها السبعة."},
  alpha: [
    ["ሀ", "ሀ", "הֶ", "hä"],
    ["ለ", "ለ", "לֶ", "lä"],
    ["ሐ", "ሐ", "חֶ (במקור, היום ה)", "ḥä"],
    ["መ", "መ", "מֶ", "mä"],
    ["ሠ", "ሠ", "סֶ", "śä"],
    ["ረ", "ረ", "רֶ", "rä"],
    ["ሰ", "ሰ", "סֶ", "sä"],
    ["ሸ", "ሸ", "שֶ", "šä"],
    ["ቀ", "ቀ", "קֶ (פליטה)", "q'ä"],
    ["በ", "በ", "בֶּ", "bä"],
    ["ተ", "ተ", "טֶ", "tä"],
    ["ቸ", "ቸ", "צ׳ֶ", "čä"],
    ["ኀ", "ኀ", "חֶ / הֶ", "ḫä"],
    ["ነ", "ነ", "נֶ", "nä"],
    ["ኘ", "ኘ", "נְיֶ", "ñä"],
    ["አ", "አ", "אֶ", "ʾä"],
    ["ከ", "ከ", "כֶּ", "kä"],
    ["ኸ", "ኸ", "חֶ", "xä"],
    ["ወ", "ወ", "וֶ", "wä"],
    ["ዐ", "ዐ", "אֶ", "ʿä"],
    ["ዘ", "ዘ", "זֶ", "zä"],
    ["ዠ", "ዠ", "ז׳ֶ", "žä"],
    ["የ", "የ", "יֶ", "yä"],
    ["ደ", "ደ", "דֶ", "dä"],
    ["ጀ", "ጀ", "ג׳ֶ", "ǧä"],
    ["ገ", "ገ", "גֶ", "gä"],
    ["ጠ", "ጠ", "טֶ (פליטה)", "t'ä"],
    ["ጨ", "ጨ", "צ׳ֶ (פליטה)", "č'ä"],
    ["ጰ", "ጰ", "פֶּ (פליטה)", "p'ä"],
    ["ጸ", "ጸ", "צֶ (פליטה)", "ts'ä"],
    ["ፀ", "ፀ", "צֶ (פליטה)", "ṣ'ä"],
    ["ፈ", "ፈ", "פֶ", "fä"],
    ["ፐ", "ፐ", "פֶּ", "pä"]
  ],
  vowels: [
    ["ለ", "ለ", "לֶ", "lä"],
    ["ሉ", "ሉ", "לוּ", "lu"],
    ["ሊ", "ሊ", "לִי", "li"],
    ["ላ", "ላ", "לָא", "la"],
    ["ሌ", "ሌ", "לֵה", "le"],
    ["ል", "ል", "לְ (בלי תנועה)", "lə"],
    ["ሎ", "ሎ", "לוֹ", "lo"],
    ["በ", "በ", "בֶּ", "bä"],
    ["ቡ", "ቡ", "בּוּ", "bu"],
    ["ቢ", "ቢ", "בִּי", "bi"],
    ["ባ", "ባ", "בָּא", "ba"],
    ["ቤ", "ቤ", "בֵּה", "be"],
    ["ብ", "ብ", "בְּ (בלי תנועה)", "bə"],
    ["ቦ", "ቦ", "בּוֹ", "bo"]
  ],
  vowelsTitle: {"he": "7 הצורות (תנועות)", "en": "The 7 forms (vowels)", "ru": "7 форм (гласные)", "es": "Las 7 formas (vocales)", "ar": "الأشكال السبعة (الحركات)"},
  voiceFallback: "heb",
  /* speaker = female: [regex source, flags, replacement] */
  gender: [],
  words: `hello|ሰላም|selam|סלאם
bye|ቻው / ደህና ሁኑ|chaw / dehna hunu|צ׳או / דהנה הונו
morning|እንደምን አደሩ|endemin aderu|אנדמין אדרו
thanks|አመሰግናለሁ|ameseginalehu|אמסגינאלהו
please|እባክዎ|ebakwo|אבקוו
sorry|ይቅርታ|yiqirta|ייקירטה
yes|አዎ|awo|אווו
no|አይ|ay|אי
howareyou|እንዴት ነዎት?|endet newot?|אנדט נווט
good|ጥሩ|t'iru|טירו
ok|እሺ|eshi|אשי
n1|አንድ|and|אנד
n2|ሁለት|hulet|הולת
n3|ሶስት|sost|סוסט
n4|አራት|arat|ארט
n5|አምስት|amist|אמיסט
n6|ስድስት|sidist|סידיסט
n7|ሰባት|sebat|סבאת
n8|ስምንት|simint|סימינט
n9|ዘጠኝ|zet'eny|זטני
n10|አስር|asir|אסיר
n0|ዜሮ|zero|זרו
n20|ሃያ|haya|הייה
n50|ሃምሳ|hamsa|המסה
n100|መቶ|meto|מטו
n1000|ሺህ|shih|שיה
n11|አስራ አንድ|asra and|אסרה אנד
n12|አስራ ሁለት|asra hulet|אסרה הולת
n13|አስራ ሶስት|asra sost|אסרה סוסט
n14|አስራ አራት|asra arat|אסרה ארט
n15|አስራ አምስት|asra amist|אסרה אמיסט
n16|አስራ ስድስት|asra sidist|אסרה סידיסט
n17|አስራ ሰባት|asra sebat|אסרה סבאת
n18|አስራ ስምንት|asra simint|אסרה סימינט
n19|አስራ ዘጠኝ|asra zet'eny|אסרה זטני
n30|ሰላሳ|selasa|סלאסה
n40|አርባ|arba|ארבה
n60|ስልሳ|silsa|סילסה
n70|ሰባ|seba|סבה
n80|ሰማንያ|semanya|סמניה
n90|ዘጠና|zet'ena|זטנה
n200|ሁለት መቶ|hulet meto|הולת מטו
n500|አምስት መቶ|amist meto|אמיסט מטו
n10000|አስር ሺህ|asir shih|אסיר שיה
water|ውሃ|wuha|ווהה
toilet|ሽንት ቤት|shint bet|שינט בית
where|የት?|yet?|ית
howmuch|ስንት ነው?|sint new?|סינט נו
this|ይህ|yih|ייה
friend|ጓደኛ|gwadenya|גוואדניה
food|ምግብ|migib|מיגיב
bread|ዳቦ|dabo|דבו
coffee|ቡና|buna|בונה
tea|ሻይ|shay|שאי
chicken|ዶሮ|doro|דורו
fish|ዓሳ|asa|אסה
rice|ሩዝ|ruz|רוז
beer|ቢራ|bira|בירה
bill|ሂሳብ|hisab|היסאב
tasty|ጣፋጭ|t'afach|טאפאצ׳
egg|እንቁላል|enqulal|אנקולאל
fruit|ፍራፍሬ|firafire|פירפירה
veg|አትክልት|atkilt|אטקילט
meat|ስጋ|siga|סיגה
milk|ወተት|wetet|ווטט
spicy|ቅመም ያለው|qimem yalew|קימם יאלו
restaurant|ምግብ ቤት|migib bet|מיגיב בית
ice|በረዶ|beredo|ברדו
taxi|ታክሲ|taksi|טקסי
bus|አውቶቡስ|awtobus|אוטובוס
train|ባቡር|babur|באבור
airport|አውሮፕላን ማረፊያ|awroplan marefiya|אורופלאן מרפיה
hotel|ሆቴል|hotel|הוטל
left|ግራ|gra|גרה
right|ቀኝ|qeny|קני
straight|ቀጥ ብሎ|qet' bilo|קט בילו
stop|ቁም|qum|קום
ticket|ትኬት|tiket|טיקט
money|ገንዘብ|genzeb|גנזב
expensive|ውድ|wud|ווד
cheap|ርካሽ|rikash|ריקאש
market|ገበያ|gebeya|גבייה
pharmacy|መድኃኒት ቤት|medhanit bet|מדהאניט בית
open|ክፍት|kift|קיפט
closed|ዝግ|zig|זיג
help|እርዱኝ!|irdugn!|אירדוני
police|ፖሊስ|polis|פוליס
doctor|ሐኪም|hakim|חכים
hospital|ሆስፒታል|hospital|הוספיטל
today|ዛሬ|zare|זרה
tomorrow|ነገ|nege|נגה
yesterday|ትናንት|tinant|טינאנט
now|አሁን|ahun|אהון
t_morning|ጠዋት|t'ewat|טוואט
t_evening|ምሽት|mishit|מישית
t_night|ሌሊት|lelit|ללית
t_week|ሳምንት|samint|סמינט
t_month|ወር|wer|וור
t_year|ዓመት|amet|אמט
t_hour|ሰዓት|se'at|סעאט
t_minute|ደቂቃ|deqiqa|דקיקה
p_toilet|ሽንት ቤት የት ነው?|shint bet yet new?|שינט בית ית נו
p_cost|ይህ ስንት ነው?|yih sint new?|ייה סינט נו
p_nounder|አልገባኝም|algebanyim|אלגבאנים
p_english|እንግሊዝኛ ይናገራሉ?|englizinya yinageralu?|אנגליזניה יינגרלו
p_slow|እባክዎ ቀስ ብለው ይናገሩ|ebakwo qes bilew yinageru|אבקוו קס בילו יינגרו
p_bill|ሂሳብ እባክዎ|hisab ebakwo|היסאב אבקוו
p_want|ይህን እፈልጋለሁ|yihin efeligalehu|ייהין אפליגאלהו
p_expensive|በጣም ውድ ነው|bet'am wud new|בטאם ווד נו
p_discount|ትንሽ ይቀንሱ|tinish yiqensu|טיניש ייקנסו
p_address|እባክዎ ወደዚህ አድራሻ ይውሰዱኝ|ebakwo wedezih adrasha yiwesedugn|אבקוו ודזיה אדרשה ייוסדוני
p_hotel|ሆቴሉ የት ነው?|hotelu yet new?|הוטלו ית נו
p_doctor|ሐኪም ያስፈልገኛል|hakim yasfeligenyal|חכים יאספליגניאל
p_police|ፖሊስ ጥሩ!|polis t'iru!|פוליס טירו
p_israel|ከእስራኤል ነኝ|ke'isra'el nenyi|קאיסראל נני
p_name|ስሜ ... ነው|sime ... new|סימה ... נו
p_nice|ስለተዋወቅን ደስ ብሎኛል|siletewaweqin des bilonyal|סילטוואוקין דס בילוניאל
p_water|ውሃ እባክዎ|wuha ebakwo|ווהה אבקוו
p_help|ሊረዱኝ ይችላሉ?|liredugn yichilalu?|לירדוני ייצ׳ילאלו
p_what|ይህ ምንድን ነው?|yih mindin new?|ייה מינדין נו
p_nospicy|ቅመም አይጨምሩ እባክዎ|qimem ayich'emiru ebakwo|קימם אייצ׳מירו אבקוו
room|ክፍል|kifil|קיפיל
key|ቁልፍ|qulf|קולף
bed|አልጋ|alga|אלגה
shower|ሻወር|shawer|שאוור
towel|ፎጣ|fot'a|פוטה
passport|ፓስፖርት|pasport|פספורט
mon|ሰኞ|segno|סנו
tue|ማክሰኞ|makseno|מקסנו
wed|ረቡዕ|rebu'|רבוע
thu|ሐሙስ|hamus|חמוס
fri|ዓርብ|arb|ארב
sat|ቅዳሜ|qidame|קידמה
sun|እሁድ|ehud|אהוד
red|ቀይ|qey|קיי
blue|ሰማያዊ|semayawi|סמאיאווי
green|አረንጓዴ|arengwade|ארנגוואדה
yellow|ቢጫ|bich'a|ביצ׳ה
black|ጥቁር|t'iqur|טיקור
white|ነጭ|nech'|נץ׳
man|ወንድ|wend|וונד
woman|ሴት|set|סט
child|ልጅ|lij|ליג׳
family|ቤተሰብ|beteseb|ביתסב
i|እኔ|ene|אנה
you|እርስዎ|irswo|אירסוו
head|ራስ|ras|ראס
stomach|ሆድ|hod|הוד
hand|እጅ|ij|איג׳
pain|ህመም|himem|הימם
medicine|መድኃኒት|medhanit|מדהאניט
sick|ታሟል|tamwal|טמוואל
big|ትልቅ|tilliq|טיליק
small|ትንሽ|tinish|טיניש
hot|ሞቃት|moqat|מוקאט
cold|ቀዝቃዛ|qezqaza|קזקזה
bad|መጥፎ|met'fo|מטפו
beautiful|ቆንጆ|qonjo|קונג׳ו
new|አዲስ|addis|אדיס
old|አሮጌ|aroge|ארוגה
fast|ፈጣን|fet'an|פטאן
slow|ቀስ ያለ|qes yale|קס יאלה
near|ቅርብ|qirb|קירב
far_a|ሩቅ|ruq|רוק
clean|ንጹህ|nitsuh|ניצוה
dirty|ቆሻሻ|qoshasha|קושאשה
tired|ደክሞኛል|dekmonyal|דקמוניאל
hungry|ርቦኛል|rebonyal|רבוניאל
thirsty|ጠምቶኛል|t'emtonyal|טמטוניאל
happy|ደስተኛ|destenya|דסטניה
sad|አዝኛለሁ|azinyalehu|אזניאלהו
easy|ቀላል|qelal|קלאל
difficult|ከባድ|kebad|כבד
many|ብዙ|bizu|ביזו
eat|መብላት|meblat|מבלאט
drink|መጠጣት|met'et'at|מטטאט
go|መሄድ|mehed|מהד
buy|መግዛት|megzat|מגזאט
speak|መናገር|menager|מנגר
sleep|መተኛት|metenyat|מטניאט
understand|መረዳት|meredat|מרדאט
come|መምጣት|memt'at|ממטאט
want|መፈለግ|mefeleg|מפלג
need|ማስፈለግ|masfeleg|מאספלג
know|ማወቅ|mawek|מאווק
see|ማየት|mayet|מאיט
hear|መስማት|mesmat|מסמאט
give|መስጠት|mest'et|מסטט
take|መውሰድ|mewsed|מוסד
pay|መክፈል|mekfel|מקפל
wait|መጠበቅ|met'ebeq|מטבק
walk|መራመድ|meramed|מרמד
read|ማንበብ|manbeb|מנבב
write|መጻፍ|metsaf|מצאף
love|መውደድ|mewded|מודד
work|መሥራት|meserat|מסראט
swim|መዋኘት|mewagnet|מוואנט
c_table|ለሁለት ሰው ጠረጴዛ እባክዎ|lehulet sew t'erep'eza ebakwo|להולת סו טרפזה אבקוו
c_menu|ሜኑ እባክዎ|menu ebakwo|מנו אבקוו
c_noice|ያለ በረዶ እባክዎ|yale beredo ebakwo|יאלה ברדו אבקוו
c_nomeat|ስጋ አልበላም|siga albelam|סיגה אלבלאם
c_allergy|ለለውዝ አለርጂ አለብኝ|lelewz alerji alebign|ללוז אלרג׳י אלביני
c_delicious|በጣም ጣፋጭ ነው!|bet'am t'afach new!|בטאם טאפאצ׳ נו
c_reserv|ቦታ አስይዣለሁ|bota asyizhalehu|בוטה אסייז׳אלהו
c_wifi|የዋይፋይ የይለፍ ቃል ምንድን ነው?|yewayfay yeyilef qal mindin new?|יוואיפאי ייילף קאל מינדין נו
c_checkout|መቼ መውጣት አለብኝ?|meche mewt'at alebign?|מצ׳ה מוטאט אלביני
c_howget|እዚያ እንዴት እሄዳለሁ?|iziya indet ihedalehu?|איזיה אינדט איהדאלהו
c_stophere|እዚህ ያቁሙ እባክዎ|izih yaqumu ebakwo|איזיה יאקומו אבקוו
c_far|ሩቅ ነው?|ruq new?|רוק נו
c_card|በካርድ መክፈል እችላለሁ?|bekard mekfel ichilalehu?|בקארד מקפל איצ׳ילאלהו
c_looking|እያየሁ ብቻ ነው፣ አመሰግናለሁ|iyayehu bicha new, ameseginalehu|אייאיהו ביצ׳ה נו, אמסגינאלהו
c_yourname|ስምዎ ማን ነው?|simwo man new?|סימוו מאן נו
c_wherefrom|ከየት ነዎት?|keyet newot?|קיית נווט
c_seeyou|በኋላ እንገናኛለን|behwala ingenanyalen|בהוואלה אינגנאניאלן
c_cheers|ለጤናችን!|let'enachin!|לטנאצ׳ין
c_lost|ጠፍቻለሁ|t'efichalehu|טפיצ׳אלהו
c_passport|ፓስፖርቴ ጠፋብኝ|pasporte t'efabign|פספורטה טפאביני
c_hurts|እዚህ ያመኛል|izih yamenyal|איזיה יאמניאל
c_time|ስንት ሰዓት ነው?|sint se'at new?|סינט סעאט נו
c_again|እባክዎ ይድገሙት|ebakwo yidgemut|אבקוו יידגמות
c_write|ሊጽፉልኝ ይችላሉ?|litsifuligni yichilalu?|ליציפוליני ייצ׳ילאלו
dog|ውሻ|wusha|וושה
cat|ድመት|dimet|דימט
bird|ወፍ|wef|ווף
horse|ፈረስ|feres|פרס
cow|ላም|lam|לאם
pig|አሳማ|asama|אסמה
elephant|ዝሆን|zihon|זיהון
monkey|ዝንጀሮ|zinjero|זינג׳רו
snake|እባብ|ebab|אבאב
mosquito|ትንኝ|tinign|טיניני
lion|አንበሳ|anbesa|אנבסה
duck|ዳክዬ|dakiye|דקייה
apple|ፖም|pom|פום
banana|ሙዝ|muz|מוז
orange|ብርቱካን|birtukan|בירטוקאן
mango|ማንጎ|mango|מנגו
pineapple|አናናስ|ananas|אננס
watermelon|ሐብሐብ|habhab|חבחב
coconut|ኮኮናት|kokonat|קוקונט
grapes|ወይን|weyin|וויין
lemon|ሎሚ|lomi|לומי
strawberry|እንጆሪ|enjori|אנג׳ורי
papaya|ፓፓያ|papaya|פפאיה
tomato|ቲማቲም|timatim|טימטים
potato|ድንች|dinich|דיניץ׳
onion|ሽንኩርት|shinkurt|שינקורט
garlic|ነጭ ሽንኩርት|nech' shinkurt|נץ׳ שינקורט
cucumber|ኪያር|kiyar|קיאר
carrot|ካሮት|karot|קרוט
chili|ቃሪያ|qariya|קריה
corn|በቆሎ|beqolo|בקולו
mushroom|እንጉዳይ|enguday|אנגודאי
lettuce|ሰላጣ|selat'a|סלטה
eggplant|ኤግፕላንት|egplant|אגפלנט
soup|ሾርባ|shorba|שורבה
salad|ሰላጣ (ምግብ)|selat'a|סלטה (מיגיב)
noodles|ፓስታ|pasta|פסטה
cheese|አይብ|ayib|אייב
butter|ቅቤ|qibe|קיבה
salt|ጨው|ch'ew|צ׳או
sugar|ስኳር|skwar|סקוואר
cake|ኬክ|kek|קק
icecream|አይስክሬም|ayskrim|אייסקרים
juice|ጭማቂ|ch'imaqi|צ׳ימקי
wine|ወይን ጠጅ|weyin t'ej|וויין טג׳
breakfast|ቁርስ|qurs|קורס
lunch|ምሳ|misa|מיסה
dinner|እራት|irat|אירט
fork|ሹካ|shuka|שוקה
spoon|ማንኪያ|mankiya|מנקיה
knife|ቢላዋ|bilawa|בילאווה
glass|ብርጭቆ|birch'iqo|בירצ׳יקו
plate|ሳህን|sahin|סהין
bank|ባንክ|bank|בנק
atm|ኤቲኤም|ATM|איי-טי-אם
beach|የባህር ዳርቻ|yebahir darcha|יבהיר דרצ׳ה
museum|ሙዚየም|muziyem|מוזיים
temple|ቤተ ክርስቲያን|bete kristiyan|ביתה קריסטיאן
street|መንገድ|menged|מנגד
city|ከተማ|ketema|כתמה
shop|ሱቅ|suq|סוק
supermarket|ሱፐርማርኬት|supermarket|סופרמרקט
park|መናፈሻ|menafesha|מנאפשה
station|ጣቢያ|t'abiya|טביה
embassy|ኤምባሲ|embasi|אמבסי
phone|ስልክ|silk|סילק
charger|ቻርጀር|charjer|צ׳רג׳ר
bag|ቦርሳ|borsa|בורסה
shoes|ጫማ|ch'ama|צ׳אמה
clothes|ልብስ|libs|ליבס
hat|ኮፍያ|kofiya|קופיה
glasses|መነጽር|menetsir|מנציר
map|ካርታ|karta|קרטה
sunscreen|የፀሐይ መከላከያ ክሬም|yetsehay mekelakeya krem|יצהאי מקלקייה קרם
umbrella|ጃንጥላ|jant'ila|ג׳נטילה
sf_order|ማዘዝ እፈልጋለሁ|mazez efeligalehu|מזז אפליגאלהו
sf_recommend|ምን ይመክራሉ?|min yimekiralu?|מין יימכרלו
sf_bottle|አንድ ጠርሙስ ውሃ እባክዎ|and t'ermus wuha ebakwo|אנד טרמוס ווהה אבקוו
sf_isspicy|ይሄ ቅመም አለው?|yihe qimem alew?|ייהה קימם אלו
sf_onemore|አንድ ተጨማሪ እባክዎ|and tech'emari ebakwo|אנד טצ׳מרי אבקוו
sf_nosugar|ያለ ስኳር እባክዎ|yale skwar ebakwo|יאלה סקוואר אבקוו
sf_takeaway|ለመውሰድ ይጠቅልሉልኝ|lemewsed yit'eqlilulign|למוסד ייטקלילוליני
ss_smaller|ትንሽ መጠን አለ?|tinish met'en ale?|טיניש מטן אלה
ss_try|መሞከር እችላለሁ?|memoker ichilalehu?|ממוכר איצ׳ילאלהו
ss_two|ሁለት እወስዳለሁ|hulet iwesdalehu|הולת איוסדאלהו
ss_change|ዝርዝር አለዎት?|zirzir alewot?|זירזיר אלווט
ss_last|የመጨረሻ ዋጋ ስንት ነው?|yemech'eresha waga sint new?|ימצ׳רשה וואגה סינט נו
ss_bag|ፌስታል ይሰጡኛል?|festal yiset'unyal?|פסטאל ייסטוניאל
sm_busstop|የአውቶቡስ ማቆሚያ የት ነው?|ye'awtobus maqomiya yet new?|יאוטובוס מקומיה ית נו
sm_trainleave|ባቡሩ መቼ ይነሳል?|baburu meche yinesal?|באבורו מצ׳ה ייניסאל
sm_oneticket|አንድ ትኬት እባክዎ|and tiket ebakwo|אנד טיקט אבקוו
sm_howlong|ምን ያህል ጊዜ ይወስዳል?|min yahil gize yiwesdal?|מין יאהיל גיזה ייוסדאל
sm_meter|ሜትሩን ያብሩ እባክዎ|metrun yabru ebakwo|מטרון יאברו אבקוו
sm_slowdrive|እባክዎ ቀስ ብለው ይንዱ|ebakwo qes bilew yindu|אבקוו קס בילו יינדו
sm_airport|ወደ አውሮፕላን ማረፊያ መሄድ እፈልጋለሁ|wede awroplan marefiya mehed efeligalehu|ודה אורופלאן מרפיה מהד אפליגאלהו
sh_leavebag|ቦርሳዬን እዚህ ልተው?|borsayen izih litew?|בורסאין איזיה ליטו
sh_ac|አየር ማቀዝቀዣው አይሰራም|ayer maqezqezhaw ayiseram|אייר מקזקז׳או אייסראם
sh_breakfast|ቁርስ ይጨምራል?|qurs yich'emiral?|קורס ייצ׳מיראל
sh_towel|ሌላ ፎጣ ያስፈልገኛል|lela fot'a yasfeligenyal|ללה פוטה יאספליגניאל
sh_taxi|ታክሲ ሊጠሩልኝ ይችላሉ?|taksi lit'erulign yichilalu?|טקסי ליטרוליני ייצ׳ילאלו
sh_late|ዘግይቼ መውጣት እችላለሁ?|zegyiche mewt'at ichilalehu?|זגייצ׳ה מוטאט איצ׳ילאלהו
so_learning|አማርኛ እየተማርኩ ነው|amarinya iyetemarku new|אמרניה אייטמרקו נו
so_thankshelp|ስለረዱኝ በጣም አመሰግናለሁ|sileredugn bet'am ameseginalehu|סילרדוני בטאם אמסגינאלהו
so_photo|ፎቶ ሊያነሱን ይችላሉ?|foto liyanesun yichilalu?|פוטו ליאנסון ייצ׳ילאלו
so_like|ይህን ቦታ ወድጄዋለሁ|yihin bota wedijewalehu|ייהין בוטה ודיג׳וואלהו
so_vacation|ለእረፍት ነው የመጣሁት|le'ireft new yemet'ahut|לאירפט נו ימטאהות
so_howsay|ይህን እንዴት ይሉታል?|yihin indet yilutal?|ייהין אינדט יילוטאל
so_noproblem|ችግር የለም|chigir yelem|צ׳יגיר ילם
so_beautiful|በጣም ቆንጆ ነው!|bet'am qonjo new!|בטאם קונג׳ו נו
sp_unwell|ጤና አይሰማኝም|t'ena ayisemanyim|טנה אייסמאנים
sp_nearhosp|በቅርብ ያለው ሆስፒታል የት ነው?|beqirb yalew hospital yet new?|בקירב יאלו הוספיטל ית נו
sp_fever|ትኩሳት አለብኝ|tikusat alebign|טיקוסאט אלביני
sp_helpme|እባክዎ እርዱኝ|ebakwo irdugn|אבקוו אירדוני
sp_stolen|ቦርሳዬ ተሰረቀ|borsaye teserreqe|בורסאיה טסרקה
sp_embassy|የእስራኤል ኤምባሲ ያስፈልገኛል|ye'isra'el embasi yasfeligenyal|יאיסראל אמבסי יאספליגניאל
dt1|ወዴት ነው?|wedet new?|ודט נו
dt2|ወደዚህ ሆቴል እባክዎ።|wedezih hotel ebakwo.|ודזיה הוטל אבקוו
dt3|እሺ፣ ይግቡ።|eshi, yigbu.|אשי, ייגבו
dt4|ስንት ነው የሚያስከፍሉት?|sint new yemiyaskefilut?|סינט נו ימיאסקפילות
dt5|ሁለት መቶ ብር።|hulet meto birr.|הולת מטו ביר
dt6|ሜትሩን ያብሩ እባክዎ።|metrun yabru ebakwo.|מטרון יאברו אבקוו
dt7|ችግር የለም።|chigir yelem.|צ׳יגיר ילם
dt8|እዚህ ያቁሙ፣ አመሰግናለሁ።|izih yaqumu, ameseginalehu.|איזיה יאקומו, אמסגינאלהו
dm1|ይሄ ዋጋው ስንት ነው?|yihe wagaw sint new?|ייהה וואגאו סינט נו
dm2|ሶስት መቶ።|sost meto.|סוסט מטו
dm3|በጣም ውድ ነው! ሁለት መቶ?|bet'am wud new! hulet meto?|בטאם ווד נו! הולת מטו
dm4|ሁለት መቶ ሃምሳ፣ የመጨረሻ ዋጋ።|hulet meto hamsa, yemech'eresha waga.|הולת מטו המסה, ימצ׳רשה וואגה
dm5|እሺ፣ እወስደዋለሁ።|eshi, iwesdewalehu.|אשי, איוסדוואלהו
dm6|በጣም አመሰግናለሁ!|bet'am ameseginalehu!|בטאם אמסגינאלהו
dr1|ስንት ሰው ናችሁ?|sint sew nachihu?|סינט סו נאצ׳יהו
dr2|ሁለት ሰው እባክዎ።|hulet sew ebakwo.|הולת סו אבקוו
dr3|ምን ይፈልጋሉ?|min yifeligalu?|מין ייפליגאלו
dr4|በዶሮ የተጠበሰ ሩዝ፣ ያለ ቅመም።|bedoro yetet'ebese ruz, yale qimem.|בדורו ייטטבסה רוז, יאלה קימם
dr5|ምን ይጠጣሉ?|min yit'et'alu?|מין ייטטאלו
dr6|ውሃ ብቻ እባክዎ።|wuha bicha ebakwo.|ווהה ביצ׳ה אבקוו
dr7|ሂሳብ እባክዎ።|hisab ebakwo.|היסאב אבקוו
dh1|ሰላም፣ ቦታ አስይዣለሁ።|selam, bota asyizhalehu.|סלאם, בוטה אסייז׳אלהו
dh2|በማን ስም?|beman sim?|במאן סים
dh3|በ... ስም።|be... sim.|ב... סים
dh4|ፓስፖርትዎን እባክዎ።|pasportwon ebakwo.|פספורטוון אבקוו
dh5|ክፍልዎ ሶስት መቶ አምስት ነው።|kifilwo sost meto amist new.|קיפילוו סוסט מטו אמיסט נו
dh6|ቁርስ በስንት ሰዓት ነው?|qurs besint se'at new?|קורס בסינט סעאט נו
dh7|ከአንድ እስከ አራት ሰዓት።|ke'and iske arat se'at.|קאנד איסקה ארט סעאט
dd1|ይቅርታ፣ ጣቢያው የት ነው?|yiqirta, t'abiyaw yet new?|ייקירטה, טביאו ית נו
dd2|ቀጥ ብለው ይሂዱ፣ ከዚያ ወደ ግራ።|qet' bilew yihidu, keziya wede gra.|קט בילו ייהידו, קזיה ודה גרה
dd3|ከዚህ ሩቅ ነው?|kezih ruq new?|קזיה רוק נו
dd4|አይ፣ በእግር አምስት ደቂቃ።|ay, be'igir amist deqiqa.|אי, באיגיר אמיסט דקיקה
dd5|በጣም አመሰግናለሁ!|bet'am ameseginalehu!|בטאם אמסגינאלהו
w_weather|የአየር ሁኔታ|ye'ayer huneta|יאייר הונטה
w_sun|ፀሐይ|tsehay|צהאי
w_rain|ዝናብ|zinab|זינאב
w_wind|ነፋስ|nefas|נפאס
w_cloud|ደመና|demena|דמנה
w_snow|በረዶ (ከሰማይ)|beredo|ברדו
w_storm|አውሎ ነፋስ|awlo nefas|אולו נפאס
w_humid|እርጥብ|irt'ib|אירטיב
j_teacher|መምህር|memhir|ממהיר
j_driver|ሹፌር|shufer|שופר
j_waiter|አስተናጋጅ|astenagaj|אסטנגאג׳
j_cook|ምግብ አብሳይ|migib absay|מיגיב אבסאי
j_student|ተማሪ|temari|טמרי
j_engineer|መሐንዲስ|mehandis|מהנדיס
j_nurse|ነርስ|ners|נרס
j_seller|ሻጭ|shach'|שאץ׳
j_guide|አስጎብኚ|asgobnyi|אסגובני
j_pharmacist|ፋርማሲስት|farmasist|פרמסיסט
e_angry|ተናድጃለሁ|tenadijalehu|טנאדיג׳אלהו
e_scared|ፈርቻለሁ|ferchalehu|פרצ׳אלהו
e_bored|ሰልችቶኛል|selchitonyal|סלצ׳יטוניאל
e_worried|ተጨንቄያለሁ|tech'enqiyalehu|טצ׳נקיאלהו
e_surprised|ገርሞኛል|germonyal|גרמוניאל
e_calm|ረጋ ያለ|rega yale|רגה יאלה
e_excited|በጣም ተደስቻለሁ|bet'am tedeschalehu|בטאם טדסצ׳אלהו
e_love|ፍቅር ይዞኛል|fiqir yizonyal|פיקיר ייזוניאל
dir_north|ሰሜን|semen|סמן
dir_south|ደቡብ|debub|דבוב
dir_east|ምሥራቅ|misraq|מיסראק
dir_west|ምዕራብ|mi'irab|מיעיראב
dir_corner|ጥግ|t'ig|טיג
dir_light|የትራፊክ መብራት|yetrafik mebrat|יטרפיק מבראט
dir_behind|ከኋላ|kehwala|קהוואלה
dir_front|ፊት ለፊት|fit lefit|פית לפית
dir_next|አጠገብ|at'egeb|אטגב
dir_back|ወደ ኋላ|wede hwala|ודה הוואלה
dir_up|ላይ|lay|לאי
dir_down|ታች|tach|טאץ׳`
});

/* ---- numbers & prices (0–999,999) in Amharic → tokens [ge'ez, roman, hebrew]. Prices in birr (ብር) ---- */
NW.am = (() => {
  const O = [['ዜሮ', 'zero', 'זרו'], ['አንድ', 'and', 'אנד'], ['ሁለት', 'hulet', 'הולת'], ['ሶስት', 'sost', 'סוסט'], ['አራት', 'arat', 'ארט'], ['አምስት', 'amist', 'אמיסט'], ['ስድስት', 'sidist', 'סידיסט'], ['ሰባት', 'sebat', 'סבאת'], ['ስምንት', 'simint', 'סימינט'], ['ዘጠኝ', 'zet\'eny', 'זטני']];
  const T = [, ['አስር', 'asir', 'אסיר'], ['ሃያ', 'haya', 'הייה'], ['ሰላሳ', 'selasa', 'סלאסה'], ['አርባ', 'arba', 'ארבה'], ['ሃምሳ', 'hamsa', 'המסה'], ['ስልሳ', 'silsa', 'סילסה'], ['ሰባ', 'seba', 'סבה'], ['ሰማንያ', 'semanya', 'סמניה'], ['ዘጠና', 'zet\'ena', 'זטנה']];
  const ASRA = ['አስራ', 'asra', 'אסרה'], METO = ['መቶ', 'meto', 'מטו'], SHIH = ['ሺህ', 'shih', 'שיה'];
  function u1000(n, out) {
    const h = Math.floor(n / 100), t = Math.floor(n % 100 / 10), u = n % 10;
    if (h) { if (h > 1) out.push(O[h]); out.push(METO); }
    if (t === 1 && u) out.push(ASRA, O[u]);
    else { if (t) out.push(T[t]); if (u) out.push(O[u]); }
  }
  return (n, cur) => {
    const out = [];
    if (n === 0) out.push(O[0]);
    else {
      const th = Math.floor(n / 1000), r = n % 1000;
      if (th) { u1000(th, out); out.push(SHIH); }
      u1000(r, out);
    }
    if (cur) out.push(['ብር', 'birr', 'ביר']);
    return out.map(a => tk(a[0], a[1], a[2]));
  };
})();
NUM.am = { tokens: (n, cur) => NW.am(n, cur) };
