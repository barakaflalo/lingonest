/* ===== LingoNest — lang-sw.js : Swahili content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('sw', {
  ver: '1.20.0',
  curSym: "TSh",
  country: {"he": "טנזניה, קניה ואוגנדה", "en": "Tanzania, Kenya & Uganda", "ru": "Танзания, Кения и Уганда", "es": "Tanzania, Kenia y Uganda", "ar": "تنزانيا وكينيا وأوغندا"},
  emergency: [
    ["🇹🇿", {"he": "טנזניה — חירום", "en": "Tanzania — emergency", "ru": "Танзания", "es": "Tanzania", "ar": "تنزانيا"}, "112"],
    ["🇰🇪", {"he": "קניה — חירום", "en": "Kenya — emergency", "ru": "Кения", "es": "Kenia", "ar": "كينيا"}, "999", "112"],
    ["🇺🇬", {"he": "אוגנדה — חירום", "en": "Uganda — emergency", "ru": "Уганда", "es": "Uganda", "ar": "أوغندا"}, "999", "112"]
  ],
  tips: [
    {"t": {"he": "Jambo, Habari, Mambo", "en": "Jambo, Habari, Mambo"}, "b": {"he": "Jambo היא ברכה לתיירים; מקומיים אומרים Habari? (מה החדשות?) ועונים Nzuri (טוב). בין צעירים: Mambo? — ועונים Poa! (סבבה). למבוגרים אומרים Shikamoo כסימן כבוד, והם עונים Marahaba.", "en": "Jambo is the tourist greeting; locals say Habari? (what news?) — answer Nzuri. Among young people: Mambo? — Poa! To elders say Shikamoo as respect; they reply Marahaba."}, "ex": [["Mambo? — Poa!", "", "מאמבו? — פואה", "מה קורה? — סבבה!", "What's up? — Cool!"], ["Shikamoo", "", "שיקאמו", "(ברכת כבוד למבוגר)", "(respectful greeting to an elder)"]]},
    {"t": {"he": "Hakuna matata ו-pole pole", "en": "Hakuna matata and pole pole"}, "b": {"he": "Hakuna matata = אין בעיה (כן, זה אמיתי!). Pole pole (פולה פולה) = לאט לאט — הקצב המזרח-אפריקאי, תשמע את זה גם בטיפוס לקילימנג׳רו. Pole לבד = \"צר לי\" כשמישהו נפגע או עייף.", "en": "Hakuna matata = no problem (really!). Pole pole = slowly — the East African pace; you'll hear it climbing Kilimanjaro. Pole alone = \"sorry\" when someone is hurt or tired."}, "ex": [["Pole pole", "", "פולה פולה", "לאט לאט", "Slowly"], ["Hakuna matata", "", "האקונה מטאטה", "אין בעיה", "No worries"]]},
    {"t": {"he": "מילים מערבית", "en": "Words from Arabic"}, "b": {"he": "סווהילית מלאה במילים ערביות מתקופת הסחר בחוף: salama (שלום, בריאות), kitabu (ספר), samahani (סליחה), habari (חדשות — כמו \"אחבאר\"), ימי השבוע Alhamisi (חמישי) ו-Ijumaa (שישי).", "en": "Swahili is full of Arabic loans from coastal trade: salama, kitabu (book), samahani (sorry), habari (news), Alhamisi (Thursday), Ijumaa (Friday)."}, "ex": [["Samahani", "", "סמהאני", "סליחה", "Excuse me"]]},
    {"t": {"he": "השעה הסווהילית", "en": "Swahili time"}, "b": {"he": "מלכודת חשובה: השעון הסווהילי מתחיל בזריחה (6:00)! saa moja (\"שעה אחת\") = 7:00 בבוקר, saa nne = 10:00. כשקובעים שעה — תמיד לוודא: \"saa nne asubuhi\" = 10 בבוקר.", "en": "Important trap: the Swahili clock starts at sunrise (6:00)! saa moja (\"hour one\") = 7 am, saa nne = 10 am. Always double-check times."}, "ex": [["Saa moja asubuhi", "", "סאה מוג׳ה אסובוהי", "7 בבוקר (!)", "7 am (!)"]]},
    {"t": {"he": "קידומות במקום \"ה\" ורבים", "en": "Prefixes instead of articles"}, "b": {"he": "בסווהילית אין \"ה\" הידיעה. רבים וקבוצות נוצרים בקידומת: mtoto (ילד) → watoto (ילדים), kitabu → vitabu. הפועל מקבל קידומת של מי שעושה: ni-na-taka = אני רוצה, u-na-taka = אתה רוצה.", "en": "No articles. Plurals and groups change the prefix: mtoto → watoto (children), kitabu → vitabu. Verbs take a subject prefix: ni-na-taka = I want, u-na-taka = you want."}, "ex": [["Nataka maji", "", "נטאקה מאג׳י", "אני רוצה מים", "I want water"]]},
    {"t": {"he": "אנגלית לצד סווהילית", "en": "English alongside Swahili"}, "b": {"he": "בקניה ובאוגנדה אנגלית רשמית ונפוצה; בטנזניה סווהילית שולטת גם בעיר. בכל המקרים — Asante sana ו-Karibu (ברוך הבא / בבקשה) יפתחו לך כל דלת.", "en": "In Kenya and Uganda English is official and common; in Tanzania Swahili dominates even in cities. Either way, Asante sana and Karibu (welcome / you're welcome) open every door."}, "ex": [["Karibu!", "", "קריבו", "ברוך הבא! / בבקשה", "Welcome! / You're welcome"]]}
  ],
  note: {"he": "סווהילית נכתבת באותיות לטיניות (26 הרגילות, בלי q ו-x), ונקראת בדיוק כמו שכותבים — כמעט כמו ספרדית. אין אותיות מיוחדות, ו-5 תנועות פשוטות: a, e, i, o, u. ההטעמה כמעט תמיד על ההברה לפני האחרונה: ha-BA-ri.", "en": "Swahili uses the Latin alphabet and is read exactly as written — almost like Spanish. Five simple vowels, and stress is nearly always on the second-to-last syllable: ha-BA-ri.", "ru": "Суахили пишется латиницей и читается как пишется. Пять гласных, ударение почти всегда на предпоследний слог: ha-BA-ri.", "es": "El suajili usa el alfabeto latino y se lee como se escribe. Cinco vocales; el acento casi siempre en la penúltima: ha-BA-ri.", "ar": "تُكتب السواحيلية بالحروف اللاتينية وتُقرأ كما تُكتب. خمس حركات، والنبر غالبا على المقطع قبل الأخير: ha-BA-ri."},
  alpha: [
    ["A a", "a", "אַ", "a"],
    ["B b", "ba", "ב", "b"],
    ["Ch ch", "cha", "צ׳", "ch"],
    ["D d", "da", "ד", "d"],
    ["Dh dh", "dha", "ד׳ (th כמו this)", "dh"],
    ["E e", "e", "אֶ", "e"],
    ["F f", "fa", "פ", "f"],
    ["G g", "ga", "ג", "g"],
    ["Gh gh", "gha", "ע׳ (ר גרונית)", "gh"],
    ["H h", "ha", "ה", "h"],
    ["I i", "i", "אִי", "i"],
    ["J j", "ja", "ג׳", "j"],
    ["K k", "ka", "ק", "k"],
    ["L l", "la", "ל", "l"],
    ["M m", "ma", "מ", "m"],
    ["N n", "na", "נ", "n"],
    ["Ng' ng'", "ng'a", "נג (כמו ב-sing)", "ng'"],
    ["Ny ny", "nya", "ני", "ny"],
    ["O o", "o", "אוֹ", "o"],
    ["P p", "pa", "פּ", "p"],
    ["R r", "ra", "ר", "r"],
    ["S s", "sa", "ס", "s"],
    ["Sh sh", "sha", "ש", "sh"],
    ["T t", "ta", "ט", "t"],
    ["Th th", "tha", "ת׳ (th כמו think)", "th"],
    ["U u", "u", "אוּ", "u"],
    ["V v", "va", "ו (V)", "v"],
    ["W w", "wa", "ו", "w"],
    ["Y y", "ya", "י", "y"],
    ["Z z", "za", "ז", "z"]
  ],
  voiceFallback: "heb",
  /* speaker = female: [regex source, flags, replacement] */
  gender: [],
  words: `hello|Habari / Jambo||הבארי / ג׳מבו
bye|Kwaheri||קוואהרי
morning|Habari za asubuhi||הבארי זה אסובוהי
thanks|Asante||אסנטה
please|Tafadhali||טפדאלי
sorry|Samahani||סמהאני
yes|Ndiyo||נדיו
no|Hapana||הפאנה
howareyou|Habari yako?||הבארי יאקו
good|Nzuri||נזורי
ok|Sawa||סאווה
n1|Moja||מוג׳ה
n2|Mbili||מבילי
n3|Tatu||טאטו
n4|Nne||ננה
n5|Tano||טאנו
n6|Sita||סיטה
n7|Saba||סבה
n8|Nane||נאנה
n9|Tisa||טיסה
n10|Kumi||קומי
n0|Sifuri||סיפורי
n20|Ishirini||אישיריני
n50|Hamsini||המסיני
n100|Mia moja||מיה מוג׳ה
n1000|Elfu moja||אלפו מוג׳ה
n11|Kumi na moja||קומי נה מוג׳ה
n12|Kumi na mbili||קומי נה מבילי
n13|Kumi na tatu||קומי נה טאטו
n14|Kumi na nne||קומי נה ננה
n15|Kumi na tano||קומי נה טאנו
n16|Kumi na sita||קומי נה סיטה
n17|Kumi na saba||קומי נה סבה
n18|Kumi na nane||קומי נה נאנה
n19|Kumi na tisa||קומי נה טיסה
n30|Thelathini||תלאתיני
n40|Arobaini||ארובאיני
n60|Sitini||סיטיני
n70|Sabini||סביני
n80|Themanini||תמניני
n90|Tisini||טיסיני
n200|Mia mbili||מיה מבילי
n500|Mia tano||מיה טאנו
n10000|Elfu kumi||אלפו קומי
water|Maji||מאג׳י
toilet|Choo||צ׳ו
where|Wapi?||וואפי
howmuch|Bei gani?||ביי גאני
this|Hii||היי
friend|Rafiki||רפיקי
food|Chakula||צ׳אקולה
bread|Mkate||מקאטה
coffee|Kahawa||קהאווה
tea|Chai||צ׳אי
chicken|Kuku||קוקו
fish|Samaki||סמאקי
rice|Wali||ואלי
beer|Bia||ביה
bill|Bili||בילי
tasty|Tamu||טאמו
egg|Yai||יאי
fruit|Matunda||מטונדה
veg|Mboga||מבוגה
meat|Nyama||ניאמה
milk|Maziwa||מזיווה
spicy|Pilipili / Kali||פיליפילי / קאלי
restaurant|Mgahawa||מגהאווה
ice|Barafu||בראפו
taxi|Teksi||טקסי
bus|Basi||באסי
train|Treni||טרני
airport|Uwanja wa ndege||אוואנג׳ה וה נדגה
hotel|Hoteli||הוטלי
left|Kushoto||קושוטו
right|Kulia||קוליה
straight|Moja kwa moja||מוג׳ה קווה מוג׳ה
stop|Simama||סימאמה
ticket|Tiketi||טיקטי
money|Pesa||פסה
expensive|Ghali||גאלי
cheap|Rahisi||רהיסי
market|Soko||סוקו
pharmacy|Duka la dawa||דוקה לה דאווה
open|Wazi||וואזי
closed|Imefungwa||אימפונגווה
help|Msaada!||מסאדה
police|Polisi||פוליסי
doctor|Daktari||דקטרי
hospital|Hospitali||הוספיטלי
today|Leo||לאו
tomorrow|Kesho||קשו
yesterday|Jana||ג׳אנה
now|Sasa||סאסה
t_morning|Asubuhi||אסובוהי
t_evening|Jioni||ג׳יוני
t_night|Usiku||אוסיקו
t_week|Wiki||וויקי
t_month|Mwezi||מווזי
t_year|Mwaka||מוואקה
t_hour|Saa||סאה
t_minute|Dakika||דקיקה
p_toilet|Choo kiko wapi?||צ׳ו קיקו וואפי
p_cost|Hii ni bei gani?||היי ני ביי גאני
p_nounder|Sielewi||סיאלווי
p_english|Unaongea Kiingereza?||אונאונגאה קיאינגרזה
p_slow|Tafadhali ongea polepole||טפדאלי אונגאה פולהפולה
p_bill|Naomba bili||נאומבה בילי
p_want|Nataka hii||נטאקה היי
p_expensive|Ni ghali sana||ני גאלי סאנה
p_discount|Punguza bei, tafadhali||פונגוזה ביי, טפדאלי
p_address|Nipeleke kwenye anwani hii, tafadhali||ניפלקה קוונייה אנוואני היי, טפדאלי
p_hotel|Hoteli iko wapi?||הוטלי איקו וואפי
p_doctor|Nahitaji daktari||נהיטאג׳י דקטרי
p_police|Ita polisi!||איטה פוליסי
p_israel|Mimi ni kutoka Israeli||מימי ני קוטוקה איסראלי
p_name|Jina langu ni ...||ג׳ינה לאנגו ני
p_nice|Nimefurahi kukutana nawe||נימפוראהי קוקוטאנה נאווה
p_water|Naomba maji||נאומבה מאג׳י
p_help|Unaweza kunisaidia?||אונאווזה קוניסאידיה
p_what|Hii ni nini?||היי ני ניני
p_nospicy|Bila pilipili, tafadhali||בילה פיליפילי, טפדאלי
room|Chumba||צ׳ומבה
key|Ufunguo||אופונגואו
bed|Kitanda||קיטנדה
shower|Bafu||באפו
towel|Taulo||טאולו
passport|Pasipoti||פסיפוטי
mon|Jumatatu||ג׳ומטאטו
tue|Jumanne||ג׳ומאננה
wed|Jumatano||ג׳ומטאנו
thu|Alhamisi||אלחמיסי
fri|Ijumaa||איג׳ומאה
sat|Jumamosi||ג׳וממוסי
sun|Jumapili||ג׳וממפילי
red|Nyekundu||ניקונדו
blue|Buluu||בולו
green|Kijani||קיג׳אני
yellow|Njano||נג׳אנו
black|Nyeusi||ניאוסי
white|Nyeupe||ניאופה
man|Mwanaume||מוואנאומה
woman|Mwanamke||מוואנאמקה
child|Mtoto||מטוטו
family|Familia||פמיליה
i|Mimi||מימי
you|Wewe||וווה
head|Kichwa||קיצ׳ווה
stomach|Tumbo||טומבו
hand|Mkono||מקונו
pain|Maumivu||מאומיבו
medicine|Dawa||דאווה
sick|Mgonjwa||מגונג׳ווה
big|Kubwa||קובווה
small|Ndogo||נדוגו
hot|Moto||מוטו
cold|Baridi||בארידי
bad|Mbaya||מבאיה
beautiful|Nzuri sana||נזורי סאנה
new|Mpya||מפיה
old|Ya zamani||יה זמאני
fast|Haraka||הראקה
slow|Polepole||פולהפולה
near|Karibu||קריבו
far_a|Mbali||מבאלי
clean|Safi||סאפי
dirty|Chafu||צ׳אפו
tired|Nimechoka||נימצ׳וקה
hungry|Nina njaa||נינה נג׳אה
thirsty|Nina kiu||נינה קיו
happy|Furaha||פוראהה
sad|Huzuni||הוזוני
easy|Rahisi||רהיסי
difficult|Ngumu||נגומו
many|Mengi||מנגי
eat|Kula||קולה
drink|Kunywa||קוניווה
go|Kwenda||קוונדה
buy|Kununua||קונונואה
speak|Kuongea||קואונגאה
sleep|Kulala||קולאלה
understand|Kuelewa||קואלווה
come|Kuja||קוג׳ה
want|Kutaka||קוטאקה
need|Kuhitaji||קוהיטאג׳י
know|Kujua||קוג׳ואה
see|Kuona||קואונה
hear|Kusikia||קוסיקיה
give|Kupa||קופה
take|Kuchukua||קוצ׳וקואה
pay|Kulipa||קוליפה
wait|Kusubiri||קוסוברי
walk|Kutembea||קוטמבאה
read|Kusoma||קוסומה
write|Kuandika||קואנדיקה
love|Kupenda||קופנדה
work|Kufanya kazi||קופניה קאזי
swim|Kuogelea||קואוגלאה
c_table|Meza ya watu wawili, tafadhali||מזה יה וואטו וואווילי, טפדאלי
c_menu|Naomba menyu||נאומבה מניו
c_noice|Bila barafu, tafadhali||בילה בראפו, טפדאלי
c_nomeat|Sili nyama||סילי ניאמה
c_allergy|Nina mzio wa karanga||נינה מזיו וה קראנגה
c_delicious|Ni tamu sana!||ני טאמו סאנה
c_reserv|Nina nafasi iliyohifadhiwa||נינה נפאסי אילייוהיפדהיווה
c_wifi|Nenosiri la wifi ni nini?||ננוסירי לה וויפי ני ניני
c_checkout|Muda wa kuondoka ni saa ngapi?||מודה וה קואונדוקה ני סאה נגאפי
c_howget|Nitafikaje huko?||ניטפיקאג׳ה הוקו
c_stophere|Simama hapa, tafadhali||סימאמה האפה, טפדאלי
c_far|Ni mbali?||ני מבאלי
c_card|Naweza kulipa kwa kadi?||נאווזה קוליפה קווה קאדי
c_looking|Naangalia tu, asante||נאאנגליה טו, אסנטה
c_yourname|Jina lako nani?||ג׳ינה לאקו נאני
c_wherefrom|Unatoka wapi?||אונאטוקה וואפי
c_seeyou|Tutaonana baadaye||טוטאונאנה באדאיה
c_cheers|Maisha marefu!||מאישה מרפו
c_lost|Nimepotea||נימפוטאה
c_passport|Nimepoteza pasipoti yangu||נימפוטזה פסיפוטי יאנגו
c_hurts|Inauma hapa||אינאומה האפה
c_time|Ni saa ngapi?||ני סאה נגאפי
c_again|Rudia tena, tafadhali||רודיה טנה, טפדאלי
c_write|Unaweza kuiandika?||אונאווזה קואיאנדיקה
dog|Mbwa||מבווה
cat|Paka||פאקה
bird|Ndege||נדגה
horse|Farasi||פראסי
cow|Ng'ombe||נגומבה
pig|Nguruwe||נגורווה
elephant|Tembo||טמבו
monkey|Tumbili||טומבילי
snake|Nyoka||ניוקה
mosquito|Mbu||מבו
lion|Simba||סימבה
duck|Bata||באטה
apple|Tufaha||טופאהה
banana|Ndizi||נדיזי
orange|Chungwa||צ׳ונגווה
mango|Embe||אמבה
pineapple|Nanasi||ננאסי
watermelon|Tikiti maji||טיקיטי מאג׳י
coconut|Nazi||נאזי
grapes|Zabibu||זביבו
lemon|Limau||לימאו
strawberry|Stroberi||סטרוברי
papaya|Papai||פפאי
tomato|Nyanya||ניאניה
potato|Viazi||ויאזי
onion|Kitunguu||קיטונגו
garlic|Kitunguu saumu||קיטונגו סאומו
cucumber|Tango||טאנגו
carrot|Karoti||קרוטי
chili|Pilipili||פיליפילי
corn|Mahindi||מהינדי
mushroom|Uyoga||אויוגה
lettuce|Saladi||סלאדי
eggplant|Biringanya||בירינגאניה
soup|Supu||סופו
salad|Kachumbari||קצ׳ומבארי
noodles|Tambi||טמבי
cheese|Jibini||ג׳יביני
butter|Siagi||סיאגי
salt|Chumvi||צ׳ומבי
sugar|Sukari||סוקרי
cake|Keki||קקי
icecream|Aiskrimu||אייסקרימו
juice|Juisi||ג׳ואיסי
wine|Divai||דיוואי
breakfast|Kifungua kinywa||קיפונגואה קיניווה
lunch|Chakula cha mchana||צ׳אקולה צ׳ה מצ׳אנה
dinner|Chakula cha jioni||צ׳אקולה צ׳ה ג׳יוני
fork|Uma||אומה
spoon|Kijiko||קיג׳יקו
knife|Kisu||קיסו
glass|Glasi||גלאסי
plate|Sahani||סהאני
bank|Benki||בנקי
atm|ATM||איי-טי-אם
beach|Ufukwe||אופוקווה
museum|Makumbusho||מקומבושו
temple|Hekalu||הקאלו
street|Mtaa||מטאה
city|Mji||מג׳י
shop|Duka||דוקה
supermarket|Supamaketi||סופמקטי
park|Bustani||בוסטאני
station|Kituo||קיטואו
embassy|Ubalozi||אובאלוזי
phone|Simu||סימו
charger|Chaja||צ׳אג׳ה
bag|Mkoba||מקובה
shoes|Viatu||ויאטו
clothes|Nguo||נגואו
hat|Kofia||קופיה
glasses|Miwani||מיוואני
map|Ramani||ראמאני
sunscreen|Krimu ya jua||קרימו יה ג׳ואה
umbrella|Mwavuli||מוואבולי
sf_order|Nataka kuagiza||נטאקה קואגיזה
sf_recommend|Unapendekeza nini?||אונאפנדקזה ניני
sf_bottle|Chupa moja ya maji, tafadhali||צ׳ופה מוג׳ה יה מאג׳י, טפדאלי
sf_isspicy|Hii ina pilipili?||היי אינה פיליפילי
sf_onemore|Moja zaidi, tafadhali||מוג׳ה זאידי, טפדאלי
sf_nosugar|Bila sukari, tafadhali||בילה סוקרי, טפדאלי
sf_takeaway|Nifungie niende nayo||ניפונגיה ניאנדה נאיו
ss_smaller|Una saizi ndogo zaidi?||אונה סאיזי נדוגו זאידי
ss_try|Naweza kujaribu?||נאווזה קוג׳ריבו
ss_two|Nitachukua mbili||ניטצ׳וקואה מבילי
ss_change|Una chenji?||אונה צ׳נג׳י
ss_last|Bei ya mwisho ni ngapi?||ביי יה מווישו ני נגאפי
ss_bag|Naomba mfuko||נאומבה מפוקו
sm_busstop|Kituo cha basi kiko wapi?||קיטואו צ׳ה באסי קיקו וואפי
sm_trainleave|Treni inaondoka saa ngapi?||טרני אינאונדוקה סאה נגאפי
sm_oneticket|Tiketi moja, tafadhali||טיקטי מוג׳ה, טפדאלי
sm_howlong|Inachukua muda gani?||אינצ׳וקואה מודה גאני
sm_meter|Washa mita, tafadhali||וואשה מיטה, טפדאלי
sm_slowdrive|Endesha polepole, tafadhali||אנדשה פולהפולה, טפדאלי
sm_airport|Nataka kwenda uwanja wa ndege||נטאקה קוונדה אוואנג׳ה וה נדגה
sh_leavebag|Naweza kuacha mkoba wangu hapa?||נאווזה קואצ׳ה מקובה וואנגו האפה
sh_ac|Kiyoyozi hakifanyi kazi||קיוייוזי הקיפאני קאזי
sh_breakfast|Kifungua kinywa kimo?||קיפונגואה קיניווה קימו
sh_towel|Nahitaji taulo nyingine||נהיטאג׳י טאולו ניינגינה
sh_taxi|Unaweza kuniitia teksi?||אונאווזה קוניאיטיה טקסי
sh_late|Naweza kuondoka baadaye?||נאווזה קואונדוקה באדאיה
so_learning|Najifunza Kiswahili||נג׳יפונזה קיסוואהילי
so_thankshelp|Asante sana kwa msaada wako||אסנטה סאנה קווה מסאדה וואקו
so_photo|Unaweza kutupiga picha?||אונאווזה קוטופיגה פיצ׳ה
so_like|Napenda mahali hapa||נאפנדה מהאלי האפה
so_vacation|Niko hapa likizoni||ניקו האפה ליקיזוני
so_howsay|Hii inasemwaje?||היי אינאסמוואג׳ה
so_noproblem|Hakuna matata||האקונה מטאטה
so_beautiful|Ni nzuri sana!||ני נזורי סאנה
sp_unwell|Najisikia vibaya||נג׳יסיקיה ויבאיה
sp_nearhosp|Hospitali iliyo karibu iko wapi?||הוספיטלי אילייו קריבו איקו וואפי
sp_fever|Nina homa||נינה הומה
sp_helpme|Nisaidie, tafadhali||ניסאידיה, טפדאלי
sp_stolen|Mkoba wangu umeibiwa||מקובה וואנגו אומאיביווה
sp_embassy|Nahitaji ubalozi wa Israeli||נהיטאג׳י אובאלוזי וה איסראלי
dt1|Unaenda wapi?||אונאנדה וואפי
dt2|Hoteli hii, tafadhali.||הוטלי היי, טפדאלי
dt3|Sawa, panda.||סאווה, פנדה
dt4|Ni shilingi ngapi?||ני שילינגי נגאפי
dt5|Shilingi mia mbili.||שילינגי מיה מבילי
dt6|Washa mita, tafadhali.||וואשה מיטה, טפדאלי
dt7|Hakuna shida.||האקונה שידה
dt8|Simama hapa, asante.||סימאמה האפה, אסנטה
dm1|Hii bei gani?||היי ביי גאני
dm2|Mia tatu.||מיה טאטו
dm3|Ghali sana! Mia mbili?||גאלי סאנה! מיה מבילי
dm4|Mia mbili na hamsini, bei ya mwisho.||מיה מבילי נה המסיני, ביי יה מווישו
dm5|Sawa, nitachukua.||סאווה, ניטצ׳וקואה
dm6|Asante sana, rafiki!||אסנטה סאנה, רפיקי
dr1|Mko wangapi?||מקו וואנגאפי
dr2|Wawili, tafadhali.||וואווילי, טפדאלי
dr3|Mngependa nini?||מנגפנדה ניני
dr4|Wali wa kukaanga na kuku, bila pilipili.||ואלי וה קוקאאנגה נה קוקו, בילה פיליפילי
dr5|Na kinywaji?||נה קיניוואג׳י
dr6|Maji tu, tafadhali.||מאג׳י טו, טפדאלי
dr7|Naomba bili.||נאומבה בילי
dh1|Habari, nina nafasi iliyohifadhiwa.||הבארי, נינה נפאסי אילייוהיפדהיווה
dh2|Kwa jina gani?||קווה ג׳ינה גאני
dh3|Kwa jina la ...||קווה ג׳ינה לה
dh4|Pasipoti yako, tafadhali.||פסיפוטי יאקו, טפדאלי
dh5|Chumba chako ni namba mia tatu na tano.||צ׳ומבה צ׳אקו ני נמבה מיה טאטו נה טאנו
dh6|Kifungua kinywa ni saa ngapi?||קיפונגואה קיניווה ני סאה נגאפי
dh7|Kuanzia saa moja hadi saa nne.||קואנזיה סאה מוג׳ה האדי סאה ננה
dd1|Samahani, kituo kiko wapi?||סמהאני, קיטואו קיקו וואפי
dd2|Nenda moja kwa moja, halafu kushoto.||ננדה מוג׳ה קווה מוג׳ה, הלאפו קושוטו
dd3|Ni mbali kutoka hapa?||ני מבאלי קוטוקה האפה
dd4|Hapana, dakika tano kwa miguu.||הפאנה, דקיקה טאנו קווה מיגו
dd5|Asante sana!||אסנטה סאנה
da1|Madhumuni ya safari yako ni nini?||מדומוני יה ספארי יאקו ני ניני
da2|Utakaa kwa muda gani?||אוטקאה קווה מודה גאני
da3|Wiki mbili.||וויקי מבילי
da4|Karibu!||קריבו
dp1|Unaumwa wapi?||אונאאומווה וואפי
dp2|Kunywa dawa hii mara mbili kwa siku.||קוניווה דאווה היי מארה מבילי קווה סיקו
dp4|Pole, upone haraka!||פולה, אופונה הראקה
ds1|Nataka laini ya simu yenye intaneti.||נטאקה לאיני יה סימו יינייה אינטנטי
ds2|Kwa siku ngapi?||קווה סיקו נגאפי
ds3|Kwa siku kumi.||קווה סיקו קומי
ds4|Tayari, sasa una intaneti.||טאיארי, סאסה אונה אינטנטי
dc1|Nikusaidie?||ניקוסאידיה
dc2|Una hii ya rangi ya bluu?||אונה היי יה ראנגי יה בולו
dc3|Ndiyo, saizi gani?||נדיו, סאיזי גאני
dc4|Ya kati.||יה קאטי
dc5|Sawa, chumba cha kujaribu kiko pale.||סאווה, צ׳ומבה צ׳ה קוג׳ריבו קיקו פאלה
dg1|Nataka kukata tiketi ya ziara ya kesho.||נטאקה קוקאטה טיקטי יה זיארה יה קשו
dg2|Ziara inaanza saa mbili asubuhi.||זיארה אינאנזה סאה מבילי אסובוהי
dg3|Chakula cha mchana kimo?||צ׳אקולה צ׳ה מצ׳אנה קימו
dg4|Ndiyo, na maji pia.||נדיו, נה מאג׳י פיה
dg5|Safi, watu wawili tafadhali.||סאפי, וואטו וואווילי טפדאלי
w_weather|Hali ya hewa||האלי יה הווה
w_sun|Jua||ג׳ואה
w_rain|Mvua||מבואה
w_wind|Upepo||אופפו
w_cloud|Wingu||ווינגו
w_snow|Theluji||תלוג׳י
w_storm|Dhoruba||דורובה
w_humid|Unyevu||אוניבו
j_teacher|Mwalimu||מוואלימו
j_driver|Dereva||דרבה
j_waiter|Mhudumu||מהודומו
j_cook|Mpishi||מפישי
j_student|Mwanafunzi||מוואנאפונזי
j_engineer|Mhandisi||מהנדיסי
j_nurse|Muuguzi||מואוגוזי
j_seller|Muuzaji||מואוזאג׳י
j_guide|Kiongozi wa watalii||קיאונגוזי וה וואטאלי
j_pharmacist|Mfamasia||מפמסיה
e_angry|Nina hasira||נינה הסירה
e_scared|Nina hofu||נינה הופו
e_bored|Nimechoshwa||נימצ׳ושווה
e_worried|Nina wasiwasi||נינה וואסיוואסי
e_surprised|Nimeshangaa||נימשנגאה
e_calm|Mtulivu||מטוליבו
e_excited|Nimefurahi sana||נימפוראהי סאנה
e_love|Nimependa||נימפנדה
dir_north|Kaskazini||קסקאזיני
dir_south|Kusini||קוסיני
dir_east|Mashariki||משאריקי
dir_west|Magharibi||מגאריבי
dir_corner|Kona||קונה
dir_light|Taa za barabarani||טאה זה בראבאראני
dir_behind|Nyuma||ניומה
dir_front|Mbele||מבלה
dir_next|Kando ya||קנדו יה
dir_back|Rudi nyuma||רודי ניומה
dir_up|Juu||ג׳ו
dir_down|Chini||צ׳יני`
});

/* ---- numbers & prices (0–999,999) in Swahili → tokens [text, roman, hebrew]. The currency word comes FIRST: shilingi mia mbili ---- */
NW.sw = (() => {
  const O = [['sifuri', 'סיפורי'], ['moja', 'מוג׳ה'], ['mbili', 'מבילי'], ['tatu', 'טאטו'], ['nne', 'ננה'], ['tano', 'טאנו'], ['sita', 'סיטה'], ['saba', 'סבה'], ['nane', 'נאנה'], ['tisa', 'טיסה']];
  const T = [, ['kumi', 'קומי'], ['ishirini', 'אישיריני'], ['thelathini', 'תלאתיני'], ['arobaini', 'ארובאיני'], ['hamsini', 'המסיני'], ['sitini', 'סיטיני'], ['sabini', 'סביני'], ['themanini', 'תמניני'], ['tisini', 'טיסיני']];
  const NA = ['na', 'נה'];
  function parts(n) {                              /* 1..999 → list of word-groups */
    const p = [], h = Math.floor(n / 100), t = Math.floor(n % 100 / 10), u = n % 10;
    if (h) p.push([['mia', 'מיה'], O[h]]);
    if (t) p.push([T[t]]);
    if (u) p.push([O[u]]);
    return p;
  }
  function join(groups) { const out = []; groups.forEach((g, i) => { if (i && i === groups.length - 1) out.push(NA); out.push(...g); }); return out; }
  function words(n) {
    if (n === 0) return [O[0]];
    const th = Math.floor(n / 1000), r = n % 1000, g = [];
    if (th) g.push([['elfu', 'אלפו'], ...join(parts(th))]);
    if (r) g.push(...parts(r));
    return join(g);
  }
  return (n, cur) => {
    const w = words(n), out = cur ? [['shilingi', 'שילינגי'], ...w] : w;
    return out.map(a => tk(a[0], a[0], a[1]));
  };
})();
NUM.sw = { tokens: (n, cur) => NW.sw(n, cur) };
