/* ===== LingoNest — lang-ro.js : Romanian content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('ro', {
  ver: '1.9.0',
  curSym: "lei",
  country: {"he": "רומניה ומולדובה", "en": "Romania & Moldova", "ru": "Румыния и Молдова", "es": "Rumanía y Moldavia", "ar": "رومانيا ومولدوفا"},
  emergency: [
    ["🆘", {"he": "חירום (משטרה, אמבולנס, כבאות)", "en": "Emergency (police, ambulance, fire)", "ru": "Экстренный (полиция, скорая, пожарные)", "es": "Emergencias (policía, ambulancia, bomberos)", "ar": "الطوارئ (الشرطة، الإسعاف، الإطفاء)"}, "112"]
  ],
  tips: [
    {"t": {"he": "שפה לטינית — מילים מוכרות", "en": "A Latin language — familiar words"}, "b": {"he": "רומנית היא \"אחות\" של איטלקית, ספרדית וצרפתית, עם הרבה מילים סלאביות. אם אתה מכיר אחת מהן תזהה הרבה: pâine (לחם, כמו pane), apă (מים, כמו acqua), frumos (יפה).", "en": "Romanian is a sister of Italian, Spanish and French, with Slavic loans. Knowing one helps: pâine (bread, like pane), apă (water, like acqua)."}, "ex": [["Pâine", "", "פינה", "לחם", "Bread"], ["Apă", "", "אפה", "מים", "Water"]]},
    {"t": {"he": "ה\"ה\" הידיעה בסוף המילה", "en": "\"The\" goes at the end"}, "b": {"he": "ברומנית \"ה-\" נדבקת לסוף המילה: hotel → hotelul (המלון), casă → casa (הבית), gară → gara (התחנה). לכן תראה מילים עם -ul ו--a בסוף.", "en": "Romanian attaches \"the\" to the end: hotel → hotelul, casă → casa, gară → gara."}, "ex": [["Hotelul", "", "הוטלול", "המלון", "The hotel"], ["Unde e gara?", "", "אונדה יה גארה", "איפה התחנה?", "Where is the station?"]]},
    {"t": {"he": "Vă rog ו-dumneavoastră", "en": "Vă rog and dumneavoastră"}, "b": {"he": "vă rog (וה רוג) = בבקשה, בפנייה מנומסת. dumneavoastră היא \"אתה\" המנומס לזרים ולמבוגרים; tu לחברים. הפועל מסתיים ב--ți בפנייה מנומסת: Vorbiți engleza?", "en": "vă rog = please (polite). dumneavoastră is the polite \"you\"; tu for friends. Polite verbs end in -ți: Vorbiți engleza?"}, "ex": [["Vorbiți engleza?", "", "וורביץ אנגלזה", "אתה מדבר אנגלית? (מנומס)", "Do you speak English? (polite)"]]},
    {"t": {"he": "מספרים: \"de\" אחרי 20", "en": "Numbers: \"de\" after 20"}, "b": {"he": "ממספר 20 והלאה מוסיפים de לפני שם העצם: cinci lei (5 לאי) אבל douăzeci de lei (20 לאי). גם אחרי 100, 200... מסך \"מחירים ומספרים\" עושה את זה נכון בשבילך.", "en": "From 20 on you add de before the noun: cinci lei but douăzeci de lei. Also after 100, 200… The Prices screen gets it right for you."}, "ex": [["Cinci lei", "", "צ׳ינץ׳ ליי", "5 לאי", "5 lei"], ["Douăzeci de lei", "", "דואזצ׳ץ דה ליי", "20 לאי", "20 lei"]]},
    {"t": {"he": "Ă, Â, Î — הצלילים המיוחדים", "en": "Ă, Â, Î — the special sounds"}, "b": {"he": "ă היא תנועה קצרה ועמומה, כמו השווא הנע בעברית. â ו-î זהות — צליל \"אִי\" עמוק מהגרון, כמו ы ברוסית. Ș = ש, Ț = צ.", "en": "ă is a short neutral vowel, like a schwa. â and î are the same deep \"i\" sound, like Russian ы. Ș = sh, Ț = ts."}, "ex": [["Mâine", "", "מינה", "מחר", "Tomorrow"], ["Mulțumesc", "", "מולצומסק", "תודה", "Thank you"]]},
    {"t": {"he": "Noroc! ו-Poftă bună!", "en": "Noroc! and Poftă bună!"}, "b": {"he": "בהרמת כוסית אומרים Noroc! (נורוק — \"מזל\"), ולפני ארוחה Poftă bună! (פופטה בונה — בתיאבון). רומנים מאוד מכניסי אורחים — להגיד את זה בשפה שלהם מחמם לבבות.", "en": "For a toast: Noroc! (\"luck\"); before a meal: Poftă bună! Romanians are very hospitable — saying it in Romanian warms hearts."}, "ex": [["Noroc!", "", "נורוק", "לחיים!", "Cheers!"], ["Poftă bună!", "", "פופטה בונה", "בתיאבון!", "Enjoy your meal!"]]}
  ],
  note: {"he": "ברומנית 31 אותיות: 26 הלטיניות ועוד 5 מיוחדות — Ă, Â, Î, Ș, Ț. רומנית היא שפה לטינית כמו איטלקית וספרדית, ותזהה בה הרבה מילים. היא נקראת כמעט בדיוק כמו שנכתבת.", "en": "Romanian has 31 letters: the 26 Latin ones plus Ă, Â, Î, Ș, Ț. It's a Latin language like Italian and Spanish, so many words look familiar, and it's read almost as written.", "ru": "В румынском 31 буква: 26 латинских и Ă, Â, Î, Ș, Ț. Это романский язык, как итальянский и испанский, и читается почти как пишется.", "es": "El rumano tiene 31 letras: las 26 latinas más Ă, Â, Î, Ș, Ț. Es una lengua romance como el italiano y el español, y se lee casi como se escribe.", "ar": "في الرومانية 31 حرفا: الـ26 اللاتينية وĂ وÂ وÎ وȘ وȚ. إنها لغة لاتينية مثل الإيطالية والإسبانية وتُقرأ تقريبا كما تُكتب."},
  vowelNote: {"he": "C ו-G לפני e/i נשמעות צ׳ ו-ג׳ (cinci = צ׳ינץ׳). כדי לשמור על צליל קשה מוסיפים h: chiar = קיאר, ghid = גיד. i בסוף מילה כמעט לא נשמע — רק מרכך את העיצור (lei = ליי, bani = באן׳).", "en": "C and G before e/i sound ch and j (cinci = \"cheench\"). Add h to keep them hard: chiar, ghid. A final i is barely heard — it just softens the consonant.", "ru": "C и G перед e/i звучат «ч» и «дж» (cinci = «чинч»). С h — твёрдо: chiar, ghid. Конечное i почти не слышно, оно смягчает согласную.", "es": "C y G ante e/i suenan \"ch\" y \"y\" (cinci = \"chinch\"). Con h, duras: chiar, ghid. La i final casi no se oye, solo suaviza la consonante.", "ar": "يُلفظ C وG قبل e/i تش وج (cinci = تشينتش). ومع h قاسيان: chiar وghid. الـi في آخر الكلمة بالكاد تُسمع، تليّن الحرف فقط."},
  alpha: [
    ["A a", "A", "אַ", "a"],
    ["Ă ă", "Ă", "אְ (תנועה קצרה, כמו שווא)", "ă"],
    ["Â â", "Â", "אִי עמוקה (כמו ы ברוסית)", "â"],
    ["B b", "B", "ב", "be"],
    ["C c", "C", "ק / צ׳ (לפני e, i)", "ce"],
    ["D d", "D", "ד", "de"],
    ["E e", "E", "אֶ", "e"],
    ["F f", "F", "פ", "ef"],
    ["G g", "G", "ג / ג׳ (לפני e, i)", "ge"],
    ["H h", "H", "ה", "haș"],
    ["I i", "I", "אִי", "i"],
    ["Î î", "Î", "אִי עמוקה (כמו â)", "î"],
    ["J j", "J", "ז׳", "je"],
    ["K k", "K", "ק", "ca"],
    ["L l", "L", "ל", "el"],
    ["M m", "M", "מ", "em"],
    ["N n", "N", "נ", "en"],
    ["O o", "O", "אוֹ", "o"],
    ["P p", "P", "פּ", "pe"],
    ["Q q", "Q", "ק", "chiu"],
    ["R r", "R", "ר מתגלגלת", "er"],
    ["S s", "S", "ס", "es"],
    ["Ș ș", "Ș", "ש", "șe"],
    ["T t", "T", "ט", "te"],
    ["Ț ț", "Ț", "צ", "țe"],
    ["U u", "U", "אוּ", "u"],
    ["V v", "V", "ו (V)", "ve"],
    ["W w", "W", "ו", "dublu ve"],
    ["X x", "X", "קס", "ics"],
    ["Y y", "Y", "י", "i grec"],
    ["Z z", "Z", "ז", "zet"]
  ],
  vowels: [
    ["ce / ci", "cinci", "צ׳ (cinci = צ׳ינץ׳)", "ce / ci"],
    ["che / chi", "chiar", "ק (chiar = קיאר)", "che / chi"],
    ["ge / gi", "ger", "ג׳ (ger = ג׳ר)", "ge / gi"],
    ["ghe / ghi", "ghid", "ג (ghid = גיד)", "ghe / ghi"],
    ["ea", "seara", "יַא (seara = סיארה)", "ea"],
    ["oa", "foarte", "ואַ (foarte = פוארטה)", "oa"],
    ["-i בסוף", "lei", "כמעט שקט, מרכך (lei = ליי)", "final -i"]
  ],
  /* speaker = female: [regex source, flags, replacement] */
  gender: [["Încântat", "g", "Încântată"], ["אינקנטאט", "g", "אינקנטאטה"], ["alergic", "g", "alergică"], ["אלרג׳יק ", "g", "אלרג׳יקה "]],
  words: `hello|Bună ziua||בונה זיוא
bye|La revedere||לה רבדרה
morning|Bună dimineața||בונה דימיניאצה
thanks|Mulțumesc||מולצומסק
please|Vă rog||וה רוג
sorry|Scuzați||סקוזאץ
yes|Da||דה
no|Nu||נו
howareyou|Ce mai faceți?||צ׳ה מאי פאצ׳ץ
good|Bine||בינה
ok|Bine / OK||בינה / אוקיי
n1|Unu||אונו
n2|Doi||דוי
n3|Trei||טריי
n4|Patru||פאטרו
n5|Cinci||צ׳ינץ׳
n6|Șase||שאסה
n7|Șapte||שאפטה
n8|Opt||אופט
n9|Nouă||נואה
n10|Zece||זצ׳ה
n0|Zero||זרו
n20|Douăzeci||דואזצ׳ץ
n50|Cincizeci||צ׳ינץ׳זצ׳ץ
n100|O sută||או סוטה
n1000|O mie||או מיה
n11|Unsprezece||אונספרזצ׳ה
n12|Doisprezece||דויספרזצ׳ה
n13|Treisprezece||טרייספרזצ׳ה
n14|Paisprezece||פאיספרזצ׳ה
n15|Cincisprezece||צ׳ינץ׳ספרזצ׳ה
n16|Șaisprezece||שאיספרזצ׳ה
n17|Șaptesprezece||שאפטספרזצ׳ה
n18|Optsprezece||אופטספרזצ׳ה
n19|Nouăsprezece||נואספרזצ׳ה
n30|Treizeci||טרייזצ׳ץ
n40|Patruzeci||פאטרוזצ׳ץ
n60|Șaizeci||שאיזצ׳ץ
n70|Șaptezeci||שאפטזצ׳ץ
n80|Optzeci||אופטזצ׳ץ
n90|Nouăzeci||נואזצ׳ץ
n200|Două sute||דואה סוטה
n500|Cinci sute||צ׳ינץ׳ סוטה
n10000|Zece mii||זצ׳ה מיי
water|Apă||אפה
toilet|Toaleta||טואלטה
where|Unde?||אונדה
howmuch|Cât?||קט
this|Asta||אסטה
friend|Prieten||פריאטן
food|Mâncare||מנקרה
bread|Pâine||פינה
coffee|Cafea||קפיאה
tea|Ceai||צ׳אי
chicken|Pui||פוי
fish|Pește||פשטה
rice|Orez||אורז
beer|Bere||ברה
bill|Nota||נוטה
tasty|Delicios||דליצ׳יוס
egg|Ou||או
fruit|Fructe||פרוקטה
veg|Legume||לגומה
meat|Carne||קרנה
milk|Lapte||לאפטה
spicy|Picant||פיקנט
restaurant|Restaurant||רסטאורנט
ice|Gheață||גיאצה
taxi|Taxi||טקסי
bus|Autobuz||אאוטובוז
train|Tren||טרן
airport|Aeroport||אארופורט
hotel|Hotel||הוטל
left|La stânga||לה סטנגה
right|La dreapta||לה דריאפטה
straight|Drept înainte||דרפט אינאינטה
stop|Opriți||אופריץ
ticket|Bilet||בילט
money|Bani||באני
expensive|Scump||סקומפ
cheap|Ieftin||יפטין
market|Piața||פיאצה
pharmacy|Farmacia||פרמצ׳יה
open|Deschis||דסקיס
closed|Închis||אינקיס
help|Ajutor!||אז׳וטור
police|Poliția||פוליציה
doctor|Doctor||דוקטור
hospital|Spitalul||ספיטלול
today|Azi||אזי
tomorrow|Mâine||מינה
yesterday|Ieri||יארי
now|Acum||אקום
t_morning|Dimineața||דימיניאצה
t_evening|Seara||סיארה
t_night|Noaptea||נואפטיה
t_week|Săptămâna||ספטמנה
t_month|Luna||לונה
t_year|Anul||אנול
t_hour|Ora||אורה
t_minute|Minutul||מינוטול
p_toilet|Unde este toaleta?||אונדה יסטה טואלטה
p_cost|Cât costă?||קט קוסטה
p_nounder|Nu înțeleg||נו אינצלג
p_english|Vorbiți engleza?||וורביץ אנגלזה
p_slow|Vorbiți mai rar, vă rog||וורביץ מאי ראר, וה רוג
p_bill|Nota, vă rog||נוטה, וה רוג
p_want|Vreau asta||ורוא אסטה
p_expensive|E prea scump||יה פריאה סקומפ
p_discount|Îmi faceți o reducere?||אים פאצ׳ץ או רדוצ׳רה
p_address|Duceți-mă la adresa asta, vă rog||דוצ׳ץ-מה לה אדרסה אסטה, וה רוג
p_hotel|Unde este hotelul?||אונדה יסטה הוטלול
p_doctor|Am nevoie de un doctor||אם נבויה דה און דוקטור
p_police|Chemați poliția!||קמאץ פוליציה
p_israel|Sunt din Israel||סונט דין איזראל
p_name|Mă numesc ...||מה נומסק
p_nice|Încântat||אינקנטאט
p_water|Apă, vă rog||אפה, וה רוג
p_help|Mă puteți ajuta?||מה פוטץ אז׳וטה
p_what|Ce este asta?||צ׳ה יסטה אסטה
p_nospicy|Fără picant, vă rog||פרה פיקנט, וה רוג
room|Camera||קמרה
key|Cheia||קיה
bed|Patul||פאטול
shower|Dușul||דושול
towel|Prosopul||פרוסופול
passport|Pașaportul||פשאפורטול
mon|Luni||לוני
tue|Marți||מרץ
wed|Miercuri||מיירקורי
thu|Joi||ז׳וי
fri|Vineri||וינרי
sat|Sâmbătă||סמבטה
sun|Duminică||דומיניקה
red|Roșu||רושו
blue|Albastru||אלבסטרו
green|Verde||ורדה
yellow|Galben||גלבן
black|Negru||נגרו
white|Alb||אלב
man|Bărbat||ברבט
woman|Femeie||פמייה
child|Copil||קופיל
family|Familie||פמיליה
i|Eu||יאו
you|Dumneavoastră||דומניאבואסטרה
head|Capul||קפול
stomach|Burta||בורטה
hand|Mâna||מנה
pain|Durere||דוררה
medicine|Medicament||מדיקמנט
sick|Bolnav||בולנאב
big|Mare||מארה
small|Mic||מיק
hot|Cald||קאלד
cold|Rece||רצ׳ה
bad|Rău||רא
beautiful|Frumos||פרומוס
new|Nou||נואו
old|Vechi||וקי
fast|Repede||רפדה
slow|Încet||אינצ׳ט
near|Aproape||אפרואפה
far_a|Departe||דפרטה
clean|Curat||קורט
dirty|Murdar||מורדר
tired|Obosit||אובוסיט
hungry|Mi-e foame||מייה פואמה
thirsty|Mi-e sete||מייה סטה
happy|Fericit||פריצ׳יט
sad|Trist||טריסט
easy|Ușor||אושור
difficult|Greu||גרו
many|Mult||מולט
eat|A mânca||א מנקה
drink|A bea||א ביאה
go|A merge||א מרג׳ה
buy|A cumpăra||א קומפרה
speak|A vorbi||א וורבי
sleep|A dormi||א דורמי
understand|A înțelege||א אינצלג׳ה
come|A veni||א וני
want|A vrea||א וריאה
need|A avea nevoie||א אביאה נבויה
know|A ști||א שטי
see|A vedea||א ודיאה
hear|A auzi||א אאוזי
give|A da||א דה
take|A lua||א לואה
pay|A plăti||א פלטי
wait|A aștepta||א אשטפטה
walk|A merge pe jos||א מרג׳ה פה ז׳וס
read|A citi||א צ׳יטי
write|A scrie||א סקריה
love|A iubi||א יובי
work|A lucra||א לוקרה
swim|A înota||א אינוטה
c_table|O masă pentru doi, vă rog||או מאסה פנטרו דוי, וה רוג
c_menu|Meniul, vă rog||מניול, וה רוג
c_noice|Fără gheață, vă rog||פרה גיאצה, וה רוג
c_nomeat|Nu mănânc carne||נו מנאנק קרנה
c_allergy|Sunt alergic la nuci||סונט אלרג׳יק לה נוץ׳
c_delicious|Foarte gustos!||פוארטה גוסטוס
c_reserv|Am o rezervare||אם או רזרוארה
c_wifi|Care e parola de la wifi?||קארה יה פרולה דה לה וויפי
c_checkout|La ce oră trebuie să eliberez camera?||לה צ׳ה אורה טרבויה סה אליברז קמרה
c_howget|Cum ajung acolo?||קום אז׳ונג אקולו
c_stophere|Opriți aici, vă rog||אופריץ איצ׳ץ, וה רוג
c_far|E departe?||יה דפרטה
c_card|Pot plăti cu cardul?||פוט פלטי קו קרדול
c_looking|Doar mă uit, mulțumesc||דואר מה אויט, מולצומסק
c_yourname|Cum vă numiți?||קום וה נומיץ
c_wherefrom|De unde sunteți?||דה אונדה סונטץ
c_seeyou|Pe mai târziu||פה מאי טרזיו
c_cheers|Noroc!||נורוק
c_lost|M-am rătăcit||מאם רטצ׳יט
c_passport|Mi-am pierdut pașaportul||מיאם פיירדוט פשאפורטול
c_hurts|Mă doare aici||מה דואארה איצ׳ץ
c_time|Cât e ceasul?||קט יה צ׳אסול
c_again|Puteți repeta, vă rog?||פוטץ רפטה, וה רוג
c_write|Puteți să-l scrieți?||פוטץ סל סקריאץ
dog|Câinele||קינלה
cat|Pisica||פיסיקה
bird|Pasărea||פאסריאה
horse|Calul||קאלול
cow|Vaca||ואקה
pig|Porcul||פורקול
elephant|Elefantul||אלפנטול
monkey|Maimuța||מאימוצה
snake|Șarpele||שארפלה
mosquito|Țânțarul||צנצרול
lion|Leul||לאול
duck|Rața||ראצה
apple|Mărul||מרול
banana|Banana||בננה
orange|Portocala||פורטוקלה
mango|Mango||מנגו
pineapple|Ananasul||אננסול
watermelon|Pepenele verde||פפנלה ורדה
coconut|Nuca de cocos||נוקה דה קוקוס
grapes|Strugurii||סטרוגורי
lemon|Lămâia||למיה
strawberry|Căpșuna||קפשונה
papaya|Papaya||פפאיה
tomato|Roșia||רושיה
potato|Cartoful||קרטופול
onion|Ceapa||צ׳יאפה
garlic|Usturoiul||אוסטורויול
cucumber|Castravetele||קסטרבטלה
carrot|Morcovul||מורקובול
chili|Ardeiul iute||ארדיול יוטה
corn|Porumbul||פורומבול
mushroom|Ciuperca||צ׳ופרקה
lettuce|Salata verde||סלטה ורדה
eggplant|Vânăta||ונטה
soup|Ciorba||צ׳ורבה
salad|Salata||סלטה
noodles|Tăiețeii||טאיצי
cheese|Brânza||ברנזה
butter|Untul||אונטול
salt|Sarea||סריאה
sugar|Zahărul||זהרול
cake|Prăjitura||פרז׳יטורה
icecream|Înghețata||אינגצטה
juice|Sucul||סוקול
wine|Vinul||וינול
breakfast|Micul dejun||מיקול דז׳ון
lunch|Prânzul||פרנזול
dinner|Cina||צ׳ינה
fork|Furculița||פורקוליצה
spoon|Lingura||לינגורה
knife|Cuțitul||קוציטול
glass|Paharul||פהרול
plate|Farfuria||פרפוריה
bank|Banca||בנקה
atm|Bancomatul||בנקומטול
beach|Plaja||פלאז׳ה
museum|Muzeul||מוזאול
temple|Templul||טמפלול
street|Strada||סטרדה
city|Orașul||אורשול
shop|Magazinul||מגזינול
supermarket|Supermarketul||סופרמרקטול
park|Parcul||פרקול
station|Gara||גארה
embassy|Ambasada||אמבסדה
phone|Telefonul||טלפונול
charger|Încărcătorul||אינקרקטורול
bag|Geanta||ג׳אנטה
shoes|Pantofii||פנטופי
clothes|Hainele||האינלה
hat|Pălăria||פלריה
glasses|Ochelarii||אוקלארי
map|Harta||הרטה
sunscreen|Crema de soare||קרמה דה סואארה
umbrella|Umbrela||אומברלה
sf_order|Aș dori să comand||אש דורי סה קומנד
sf_recommend|Ce îmi recomandați?||צ׳ה אים רקומנדץ
sf_bottle|O sticlă de apă, vă rog||או סטיקלה דה אפה, וה רוג
sf_isspicy|E picant?||יה פיקנט
sf_onemore|Încă unul, vă rog||אינקה אונול, וה רוג
sf_nosugar|Fără zahăr, vă rog||פרה זהר, וה רוג
sf_takeaway|Pot să-l iau la pachet?||פוט סל יאו לה פקט
ss_smaller|Aveți o mărime mai mică?||אבץ או מרימה מאי מיקה
ss_try|Pot să-l probez?||פוט סל פרובז
ss_two|Iau două||יאו דואה
ss_change|Aveți mărunt?||אבץ מרונט
ss_last|Care e prețul final?||קארה יה פרצול פינאל
ss_bag|Pot să primesc o pungă?||פוט סה פרימסק או פונגה
sm_busstop|Unde este stația de autobuz?||אונדה יסטה סטציה דה אאוטובוז
sm_trainleave|La ce oră pleacă trenul?||לה צ׳ה אורה פליאקה טרנול
sm_oneticket|Un bilet, vă rog||און בילט, וה רוג
sm_howlong|Cât durează?||קט דוריאזה
sm_meter|Porniți aparatul de taxat, vă rog||פורניץ אפרטול דה טקסט, וה רוג
sm_slowdrive|Conduceți mai încet, vă rog||קונדוצ׳ץ מאי אינצ׳ט, וה רוג
sm_airport|Vreau să merg la aeroport||ורוא סה מרג לה אארופורט
sh_leavebag|Pot să las geanta aici?||פוט סה לאס ג׳אנטה איצ׳ץ
sh_ac|Aerul condiționat nu funcționează||אארול קונדיציונט נו פונקציוניאזה
sh_breakfast|Micul dejun este inclus?||מיקול דז׳ון יסטה אינקלוס
sh_towel|Am nevoie de încă un prosop||אם נבויה דה אינקה און פרוסופ
sh_taxi|Îmi puteți chema un taxi?||אים פוטץ קמה און טקסי
sh_late|Pot să eliberez camera mai târziu?||פוט סה אליברז קמרה מאי טרזיו
so_learning|Învăț limba română||אינוץ לימבה רומנה
so_thankshelp|Mulțumesc mult pentru ajutor||מולצומסק מולט פנטרו אז׳וטור
so_photo|Ne puteți face o poză?||נה פוטץ פאצ׳ה או פוזה
so_like|Îmi place locul ăsta||אים פלאצ׳ה לוקול אסטה
so_vacation|Sunt aici în vacanță||סונט איצ׳ץ אין וקנצה
so_howsay|Cum se spune?||קום סה ספונה
so_noproblem|Nicio problemă||ניצ׳יו פרובלמה
so_beautiful|E foarte frumos!||יה פוארטה פרומוס
sp_unwell|Nu mă simt bine||נו מה סימט בינה
sp_nearhosp|Unde e cel mai apropiat spital?||אונדה יה צ׳ל מאי אפרופיאט ספיטל
sp_fever|Am febră||אם פברה
sp_helpme|Ajutați-mă, vă rog||אז׳וטאץ-מה, וה רוג
sp_stolen|Mi-au furat geanta||מיאו פורט ג׳אנטה
sp_embassy|Am nevoie de ambasada Israelului||אם נבויה דה אמבסדה איזראלולוי
dt1|Unde mergem?||אונדה מרג׳ם
dt2|La hotelul acesta, vă rog.||לה הוטלול אצ׳סטה, וה רוג
dt3|Bine, urcați.||בינה, אורקאץ
dt4|Cât costă?||קט קוסטה
dt5|Două sute de lei.||דואה סוטה דה ליי
dt6|Porniți aparatul, vă rog.||פורניץ אפרטול, וה רוג
dt7|Nicio problemă.||ניצ׳יו פרובלמה
dt8|Opriți aici, mulțumesc.||אופריץ איצ׳ץ, מולצומסק
dm1|Cât costă asta?||קט קוסטה אסטה
dm2|Trei sute.||טריי סוטה
dm3|Prea scump! Două sute?||פריאה סקומפ! דואה סוטה
dm4|Două sute cincizeci, ultimul preț.||דואה סוטה צ׳ינץ׳זצ׳ץ, אולטימול פרץ
dm5|Bine, o iau.||בינה, או יאו
dm6|Mulțumesc frumos!||מולצומסק פרומוס
dr1|Câte persoane?||קטה פרסואנה
dr2|Două, vă rog.||דואה, וה רוג
dr3|Ce doriți să comandați?||צ׳ה דוריץ סה קומנדאץ
dr4|Orez prăjit cu pui, fără picant.||אורז פרז׳יט קו פוי, פרה פיקנט
dr5|Și de băut?||שי דה באוט
dr6|Doar apă, vă rog.||דואר אפה, וה רוג
dr7|Nota, vă rog.||נוטה, וה רוג
dh1|Bună ziua, am o rezervare.||בונה זיוא, אם או רזרוארה
dh2|Pe ce nume?||פה צ׳ה נומה
dh3|Pe numele ...||פה נומלה
dh4|Pașaportul, vă rog.||פשאפורטול, וה רוג
dh5|Camera dumneavoastră este trei sute cinci.||קמרה דומניאבואסטרה יסטה טריי סוטה צ׳ינץ׳
dh6|La ce oră e micul dejun?||לה צ׳ה אורה יה מיקול דז׳ון
dh7|De la șapte la zece.||דה לה שאפטה לה זצ׳ה
dd1|Scuzați-mă, unde e gara?||סקוזאץ-מה, אונדה יה גארה
dd2|Drept înainte, apoi la stânga.||דרפט אינאינטה, אפוי לה סטנגה
dd3|E departe de aici?||יה דפרטה דה איצ׳ץ
dd4|Nu, cinci minute pe jos.||נו, צ׳ינץ׳ מינוטה פה ז׳וס
dd5|Mulțumesc mult!||מולצומסק מולט
w_weather|Vremea||ורמיאה
w_sun|Soarele||סואארלה
w_rain|Ploaia||פלואיה
w_wind|Vântul||ונטול
w_cloud|Norul||נורול
w_snow|Zăpada||זפאדה
w_storm|Furtuna||פורטונה
w_humid|Umed||אומד
j_teacher|Profesor||פרופסור
j_driver|Șofer||שופר
j_waiter|Ospătar||אוספטאר
j_cook|Bucătar||בוקטאר
j_student|Student||סטודנט
j_engineer|Inginer||אינג׳ינר
j_nurse|Asistentă||אסיסטנטה
j_seller|Vânzător||ונזטור
j_guide|Ghid||גיד
j_pharmacist|Farmacist||פרמצ׳יסט
e_angry|Supărat||סופרט
e_scared|Speriat||ספריאט
e_bored|Plictisit||פליקטיסיט
e_worried|Îngrijorat||אינגריז׳ורט
e_surprised|Surprins||סורפרינס
e_calm|Calm||קאלם
e_excited|Entuziasmat||אנטוזיאסמט
e_love|Îndrăgostit||אינדרגוסטיט
dir_north|Nordul||נורדול
dir_south|Sudul||סודול
dir_east|Estul||יסטול
dir_west|Vestul||וסטול
dir_corner|Colțul||קולצול
dir_light|Semaforul||סמפורול
dir_behind|În spate||אין ספאטה
dir_front|În față||אין פאצה
dir_next|Lângă||לנגה
dir_back|Înapoi||אינאפוי
dir_up|Sus||סוס
dir_down|Jos||ז׳וס`
});

/* ---- numbers & prices (0–999,999) → tokens [text, roman, hebrew]. Prices in lei; "de" after numbers ending in 00 or 20–99 ---- */
NW.ro = (() => {
  const H = { zero: 'זרו', unu: 'אונו', una: 'אונה', un: 'און', o: 'או', doi: 'דוי', 'două': 'דואה', trei: 'טריי', patru: 'פאטרו', cinci: 'צ׳ינץ׳', 'șase': 'שאסה', 'șapte': 'שאפטה', opt: 'אופט', 'nouă': 'נואה', zece: 'זצ׳ה',
    unsprezece: 'אונספרזצ׳ה', doisprezece: 'דויספרזצ׳ה', 'douăsprezece': 'דואספרזצ׳ה', treisprezece: 'טרייספרזצ׳ה', paisprezece: 'פאיספרזצ׳ה', cincisprezece: 'צ׳ינץ׳ספרזצ׳ה', 'șaisprezece': 'שאיספרזצ׳ה', 'șaptesprezece': 'שאפטספרזצ׳ה', optsprezece: 'אופטספרזצ׳ה', 'nouăsprezece': 'נואספרזצ׳ה',
    'douăzeci': 'דואזצ׳ץ', treizeci: 'טרייזצ׳ץ', patruzeci: 'פאטרוזצ׳ץ', cincizeci: 'צ׳ינץ׳זצ׳ץ', 'șaizeci': 'שאיזצ׳ץ', 'șaptezeci': 'שאפטזצ׳ץ', optzeci: 'אופטזצ׳ץ', 'nouăzeci': 'נואזצ׳ץ',
    'și': 'שי', 'sută': 'סוטה', sute: 'סוטה', mie: 'מיה', mii: 'מיי', de: 'דה', leu: 'לאו', lei: 'ליי' };
  const O = ['zero', 'unu', 'doi', 'trei', 'patru', 'cinci', 'șase', 'șapte', 'opt', 'nouă', 'zece', 'unsprezece', 'doisprezece', 'treisprezece', 'paisprezece', 'cincisprezece', 'șaisprezece', 'șaptesprezece', 'optsprezece', 'nouăsprezece'];
  const T = [, , 'douăzeci', 'treizeci', 'patruzeci', 'cincizeci', 'șaizeci', 'șaptezeci', 'optzeci', 'nouăzeci'];
  const fem = w => w === 'unu' ? 'una' : w === 'doi' ? 'două' : w === 'doisprezece' ? 'douăsprezece' : w;
  const u100 = (n, f) => { if (n < 20) return f ? fem(O[n]) : O[n]; const u = n % 10; return T[Math.floor(n / 10)] + (u ? ' și ' + (f ? fem(O[u]) : O[u]) : ''); };
  function u1000(n, f) {
    const h = Math.floor(n / 100), r = n % 100, out = [];
    if (h === 1) out.push('o sută'); else if (h === 2) out.push('două sute'); else if (h) out.push(O[h] + ' sute');
    if (r) out.push(u100(r, f));
    return out.join(' ');
  }
  const needDe = n => n >= 20 && (n % 100 === 0 || n % 100 >= 20);
  function words(n) {
    if (n === 0) return 'zero';
    const th = Math.floor(n / 1000), r = n % 1000, out = [];
    if (th === 1) out.push('o mie');
    else if (th) out.push(u1000(th, true) + (needDe(th) ? ' de' : '') + ' mii');
    if (r) out.push(u1000(r, false));
    return out.join(' ');
  }
  const heb = s => s.split(' ').map(w => H[w] || w).join(' ');
  return (n, cur) => {
    let w = words(n);
    if (cur) { if (n === 1) w = 'un leu'; else w += (needDe(n) ? ' de' : '') + ' lei'; }
    return [tk(w, w, heb(w))];
  };
})();
NUM.ro = { tokens: (n, cur) => NW.ro(n, cur) };
