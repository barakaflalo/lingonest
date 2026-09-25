/* ===== LingoNest — lang-it.js : Italian content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('it', {
  ver: '1.11.0',
  curSym: "€",
  country: {"he": "איטליה", "en": "Italy", "ru": "Италия", "es": "Italia", "ar": "إيطاليا"},
  emergency: [
    ["🆘", {"he": "חירום אירופי", "en": "European emergency", "ru": "Единый европейский номер", "es": "Emergencias europeas", "ar": "الطوارئ الأوروبية"}, "112"],
    ["🚑", {"he": "אמבולנס", "en": "Ambulance", "ru": "Скорая", "es": "Ambulancia", "ar": "الإسعاف"}, "118"],
    ["🚓", {"he": "משטרה", "en": "Police", "ru": "Полиция", "es": "Policía", "ar": "الشرطة"}, "113"],
    ["🚒", {"he": "כבאות", "en": "Fire", "ru": "Пожарные", "es": "Bomberos", "ar": "الإطفاء"}, "115"]
  ],
  tips: [
    {"t": {"he": "Buongiorno, Buonasera, Ciao", "en": "Buongiorno, Buonasera, Ciao"}, "b": {"he": "Buongiorno עד הצהריים, Buonasera מאחר הצהריים והלאה. Ciao הוא גם שלום וגם להתראות, אבל רק עם חברים וצעירים. בחנות או במסעדה עדיף Buongiorno / Buonasera.", "en": "Buongiorno until early afternoon, Buonasera after. Ciao means hi and bye, but only with friends. In shops and restaurants use Buongiorno / Buonasera."}, "ex": [["Buonasera!", "", "בואונסרה", "ערב טוב!", "Good evening!"], ["Ciao, a dopo!", "", "צ׳או, א דופו", "ביי, נתראה!", "Bye, see you!"]]},
    {"t": {"he": "Lei מול tu", "en": "Lei vs. tu"}, "b": {"he": "Lei (ליי, \"היא\") היא הפנייה המנומסת לכל זר — גם לגבר. לכן אומרים Come sta? (איך הוא/היא מרגיש) ולא Come stai?. tu רק לחברים ולצעירים.", "en": "Lei (literally \"she\") is the polite \"you\" for any stranger — men too. So you say Come sta? not Come stai?. tu only for friends and young people."}, "ex": [["Come sta?", "", "קומה סטה", "מה שלומך? (מנומס)", "How are you? (polite)"], ["Come stai?", "", "קומה סטאי", "מה שלומך? (לחבר)", "How are you? (friend)"]]},
    {"t": {"he": "עיצורים כפולים — חשוב!", "en": "Double consonants matter!"}, "b": {"he": "באיטלקית מחזיקים עיצור כפול רגע ארוך יותר, וזה משנה משמעות: pena (עונש) / penna (עט), sete (צמא) / sette (שבע). נסה להגיד pizza עם \"צ\" ארוכה.", "en": "Hold double consonants longer — it changes meaning: pena (penalty) / penna (pen), sete (thirst) / sette (seven)."}, "ex": [["Sette", "", "סֶט-טה", "שבע", "Seven"], ["Sete", "", "סטה", "צמא", "Thirst"]]},
    {"t": {"he": "תרבות הקפה", "en": "Coffee culture"}, "b": {"he": "un caffè = אספרסו. קפוצ׳ינו שותים רק בבוקר — אחרי ארוחת צהריים זה נחשב מוזר. בברים רבים משלמים קודם בקופה (la cassa) ורק אז מזמינים בדלפק עם הקבלה. לשתות בעמידה בבר זול יותר מלשבת.", "en": "un caffè = espresso. Cappuccino is a morning drink only. In many bars you pay at la cassa first, then order at the counter. Standing at the bar is cheaper than sitting."}, "ex": [["Un caffè, per favore", "", "און קפה, פר פבורה", "אספרסו, בבקשה", "An espresso, please"]]},
    {"t": {"he": "זכר ונקבה, יחיד ורבים", "en": "Gender and plural"}, "b": {"he": "בדרך כלל -o זכר ו--a נקבה. ברבים: -o הופך ל--i, ו--a ל--e: il ragazzo → i ragazzi, la pizza → le pizze.", "en": "Usually -o masculine, -a feminine. Plural: -o → -i, -a → -e: il ragazzo → i ragazzi, la pizza → le pizze."}, "ex": [["Due pizze, per favore", "", "דואה פיצה, פר פבורה", "שתי פיצות, בבקשה", "Two pizzas, please"]]},
    {"t": {"he": "Vorrei — המילה הכי שימושית", "en": "Vorrei — the most useful word"}, "b": {"he": "Vorrei (וורי) = הייתי רוצה. מנומס ומתאים לכל מקום: מסעדה, חנות, כרטיסים. פשוט מוסיפים מה רוצים + per favore.", "en": "Vorrei = I'd like. Polite and works everywhere: restaurant, shop, tickets. Add what you want + per favore."}, "ex": [["Vorrei un gelato", "", "וורי און ג׳לטו", "הייתי רוצה גלידה", "I'd like an ice cream"]]}
  ],
  note: {"he": "באיטלקית 21 אותיות (J, K, W, X, Y מופיעות רק במילים לועזיות), וקוראים כמעט בדיוק כמו שכותבים. מה שחשוב זה הצירופים — ch, gn, gli, sc — ולהם מקטע משלהם למטה.", "en": "Italian uses 21 letters (J, K, W, X, Y only in foreign words) and is read almost exactly as written. The key is the combinations — ch, gn, gli, sc — covered below.", "ru": "В итальянском 21 буква (J, K, W, X, Y — только в иностранных словах), и читается он почти как пишется. Главное — сочетания ch, gn, gli, sc (ниже).", "es": "El italiano usa 21 letras (J, K, W, X, Y solo en palabras extranjeras) y se lee casi como se escribe. La clave son las combinaciones ch, gn, gli, sc (abajo).", "ar": "في الإيطالية 21 حرفا (J وK وW وX وY في الكلمات الأجنبية فقط) وتُقرأ تقريبا كما تُكتب. السر في التركيبات ch وgn وgli وsc (في الأسفل)."},
  vowelNote: {"he": "C ו-G משנות צליל לפני e/i: ci = צ׳י, gi = ג׳י. כדי לשמור על צליל קשה מוסיפים h: chi = קי, ghi = גי. אותיות כפולות (tt, ll, zz) מחזיקים רגע ארוך יותר — וזה משנה משמעות: pena (עונש) מול penna (עט).", "en": "C and G soften before e/i: ci = chee, gi = jee. Add h to keep them hard: chi = kee, ghi = ghee. Double letters are held longer — and change meaning: pena (penalty) vs penna (pen).", "ru": "C и G смягчаются перед e/i: ci = «чи», gi = «джи». С h остаются твёрдыми: chi = «ки», ghi = «ги». Двойные согласные тянут дольше — это меняет смысл: pena / penna.", "es": "C y G se suavizan ante e/i: ci = \"chi\", gi = \"yi\". Con h se mantienen duras: chi = \"ki\", ghi = \"gui\". Las dobles se alargan y cambian el sentido: pena / penna.", "ar": "يلين C وG قبل e/i: ci = تشي، gi = جي. ومع h يبقيان قاسيين: chi = كي، ghi = غي. الحروف المضاعفة تُمد أكثر وتغيّر المعنى: pena / penna."},
  alpha: [
    ["A a", "A", "אַ", "a"],
    ["B b", "B", "ב", "bi"],
    ["C c", "C", "ק / צ׳ (לפני e, i)", "ci"],
    ["D d", "D", "ד", "di"],
    ["E e", "E", "אֶ", "e"],
    ["F f", "F", "פ", "effe"],
    ["G g", "G", "ג / ג׳ (לפני e, i)", "gi"],
    ["H h", "H", "שקטה", "acca (silent)"],
    ["I i", "I", "אִי", "i"],
    ["L l", "L", "ל", "elle"],
    ["M m", "M", "מ", "emme"],
    ["N n", "N", "נ", "enne"],
    ["O o", "O", "אוֹ", "o"],
    ["P p", "P", "פּ", "pi"],
    ["Q q", "Q", "ק (תמיד qu = קוו)", "cu"],
    ["R r", "R", "ר מתגלגלת", "erre"],
    ["S s", "S", "ס / ז", "esse"],
    ["T t", "T", "ט", "ti"],
    ["U u", "U", "אוּ", "u"],
    ["V v", "V", "ו (V)", "vu"],
    ["Z z", "Z", "צ / דז", "zeta"],
    ["J j", "J", "י (לועזית)", "i lunga"],
    ["K k", "K", "ק (לועזית)", "cappa"],
    ["W w", "W", "ו (לועזית)", "doppia vu"],
    ["X x", "X", "קס (לועזית)", "ics"],
    ["Y y", "Y", "י (לועזית)", "ipsilon"]
  ],
  vowels: [
    ["ch", "chiave", "ק (chiave = קיאבה)", "ch"],
    ["gh", "spaghetti", "ג (spaghetti = ספגטי)", "gh"],
    ["ci / ce", "ciao", "צ׳ (ciao = צ׳או)", "ci / ce"],
    ["gi / ge", "gelato", "ג׳ (gelato = ג׳לטו)", "gi / ge"],
    ["gn", "gnocchi", "ני (gnocchi = ניוקי)", "gn"],
    ["gli", "famiglia", "לי (famiglia = פמיליה)", "gli"],
    ["sc + e/i", "pesce", "ש (pesce = פשה)", "sc"],
    ["tt / ll / zz", "pizza", "עיצור כפול — מחזיקים (pizza = פיצה)", "doubles"],
    ["z", "zucchero", "צ / דז (zucchero = צוקרו)", "z"]
  ],
  /* speaker = female: [regex source, flags, replacement] */
  gender: [["israeliano", "g", "israeliana"], ["איזראליאנו", "g", "איזראליאנה"], ["Mi sono perso", "g", "Mi sono persa"], ["מי סונו פרסו", "g", "מי סונו פרסה"], ["allergico", "g", "allergica"], ["אלרג׳יקו", "g", "אלרג׳יקה"]],
  words: `hello|Ciao / Buongiorno||צ׳או / בואונג׳ורנו
bye|Arrivederci||אריבדרצ׳י
morning|Buongiorno||בואונג׳ורנו
thanks|Grazie||גרציה
please|Per favore||פר פבורה
sorry|Scusi||סקוזי
yes|Sì||סי
no|No||נו
howareyou|Come sta?||קומה סטה
good|Bene||בנה
ok|Va bene||וה בנה
n1|Uno||אונו
n2|Due||דואה
n3|Tre||טרה
n4|Quattro||קוואטרו
n5|Cinque||צ׳ינקווה
n6|Sei||סיי
n7|Sette||סטה
n8|Otto||אוטו
n9|Nove||נובה
n10|Dieci||דיאצ׳י
n0|Zero||דזרו
n20|Venti||ונטי
n50|Cinquanta||צ׳ינקוואנטה
n100|Cento||צ׳נטו
n1000|Mille||מילה
n11|Undici||אונדיצ׳י
n12|Dodici||דודיצ׳י
n13|Tredici||טרדיצ׳י
n14|Quattordici||קוואטורדיצ׳י
n15|Quindici||קווינדיצ׳י
n16|Sedici||סדיצ׳י
n17|Diciassette||דיצ׳אסטה
n18|Diciotto||דיצ׳וטו
n19|Diciannove||דיצ׳אנובה
n30|Trenta||טרנטה
n40|Quaranta||קווארנטה
n60|Sessanta||ססנטה
n70|Settanta||סטנטה
n80|Ottanta||אוטנטה
n90|Novanta||נובנטה
n200|Duecento||דואה-צ׳נטו
n500|Cinquecento||צ׳ינקווה-צ׳נטו
n10000|Diecimila||דיאצ׳י-מילה
water|Acqua||אקווה
toilet|Il bagno||איל באניו
where|Dove?||דובה
howmuch|Quanto?||קוואנטו
this|Questo||קוסטו
friend|Amico||אמיקו
food|Il cibo||איל צ׳יבו
bread|Il pane||איל פאנה
coffee|Il caffè||איל קפה
tea|Il tè||איל טה
chicken|Il pollo||איל פולו
fish|Il pesce||איל פשה
rice|Il riso||איל ריזו
beer|La birra||לה בירה
bill|Il conto||איל קונטו
tasty|Buonissimo||בואוניסימו
egg|L'uovo||לואובו
fruit|La frutta||לה פרוטה
veg|La verdura||לה ורדורה
meat|La carne||לה קרנה
milk|Il latte||איל לטה
spicy|Piccante||פיקנטה
restaurant|Il ristorante||איל ריסטורנטה
ice|Il ghiaccio||איל גיאצ׳ו
taxi|Il taxi||איל טקסי
bus|L'autobus||לאוטובוס
train|Il treno||איל טרנו
airport|L'aeroporto||לאארופורטו
hotel|L'albergo||לאלברגו
left|A sinistra||א סיניסטרה
right|A destra||א דסטרה
straight|Dritto||דריטו
stop|Si fermi||סי פרמי
ticket|Il biglietto||איל ביליאטו
money|I soldi||אי סולדי
expensive|Caro||קארו
cheap|Economico||אקונומיקו
market|Il mercato||איל מרקטו
pharmacy|La farmacia||לה פרמצ׳יה
open|Aperto||אפרטו
closed|Chiuso||קיוזו
help|Aiuto!||איוטו
police|La polizia||לה פוליציה
doctor|Il medico||איל מדיקו
hospital|L'ospedale||לוספדלה
today|Oggi||אוג׳י
tomorrow|Domani||דומאני
yesterday|Ieri||יארי
now|Adesso||אדסו
t_morning|La mattina||לה מטינה
t_evening|La sera||לה סרה
t_night|La notte||לה נוטה
t_week|La settimana||לה סטימנה
t_month|Il mese||איל מזה
t_year|L'anno||לאנו
t_hour|L'ora||לורה
t_minute|Il minuto||איל מינוטו
p_toilet|Dov'è il bagno?||דובה איל באניו
p_cost|Quanto costa?||קוואנטו קוסטה
p_nounder|Non capisco||נון קפיסקו
p_english|Parla inglese?||פרלה אינגלזה
p_slow|Parli piano, per favore||פרלי פיאנו, פר פבורה
p_bill|Il conto, per favore||איל קונטו, פר פבורה
p_want|Vorrei questo||וורי קוסטו
p_expensive|È troppo caro||א טרופו קארו
p_discount|Mi fa uno sconto?||מי פה אונו סקונטו
p_address|Mi porti a questo indirizzo, per favore||מי פורטי א קוסטו אינדיריצו, פר פבורה
p_hotel|Dov'è l'albergo?||דובה לאלברגו
p_doctor|Ho bisogno di un medico||או ביזוניו די און מדיקו
p_police|Chiami la polizia!||קיאמי לה פוליציה
p_israel|Sono israeliano||סונו איזראליאנו
p_name|Mi chiamo ...||מי קיאמו
p_nice|Piacere||פיאצ׳רה
p_water|Acqua, per favore||אקווה, פר פבורה
p_help|Mi può aiutare?||מי פואו איוטרה
p_what|Che cos'è?||קה קוזה
p_nospicy|Non piccante, per favore||נון פיקנטה, פר פבורה
room|La camera||לה קמרה
key|La chiave||לה קיאבה
bed|Il letto||איל לטו
shower|La doccia||לה דוצ׳ה
towel|L'asciugamano||לאשוגמנו
passport|Il passaporto||איל פסאפורטו
mon|Lunedì||לונדי
tue|Martedì||מרטדי
wed|Mercoledì||מרקולדי
thu|Giovedì||ג׳ובדי
fri|Venerdì||ונרדי
sat|Sabato||סבטו
sun|Domenica||דומניקה
red|Rosso||רוסו
blue|Blu||בלו
green|Verde||ורדה
yellow|Giallo||ג׳אלו
black|Nero||נרו
white|Bianco||ביאנקו
man|Uomo||אואומו
woman|Donna||דונה
child|Bambino||במבינו
family|Famiglia||פמיליה
i|Io||איו
you|Lei||ליי
head|La testa||לה טסטה
stomach|La pancia||לה פנצ׳ה
hand|La mano||לה מנו
pain|Il dolore||איל דולורה
medicine|La medicina||לה מדיצ׳ינה
sick|Malato||מלטו
big|Grande||גרנדה
small|Piccolo||פיקולו
hot|Caldo||קלדו
cold|Freddo||פרדו
bad|Cattivo||קטיבו
beautiful|Bello||בלו
new|Nuovo||נואובו
old|Vecchio||וקיו
fast|Veloce||ולוצ׳ה
slow|Lento||לנטו
near|Vicino||ויצ׳ינו
far_a|Lontano||לונטנו
clean|Pulito||פוליטו
dirty|Sporco||ספורקו
tired|Stanco||סטנקו
hungry|Ho fame||או פמה
thirsty|Ho sete||או סטה
happy|Felice||פליצ׳ה
sad|Triste||טריסטה
easy|Facile||פצ׳ילה
difficult|Difficile||דיפיצ׳ילה
many|Molto||מולטו
eat|Mangiare||מנג׳ארה
drink|Bere||ברה
go|Andare||אנדרה
buy|Comprare||קומפרה
speak|Parlare||פרלרה
sleep|Dormire||דורמירה
understand|Capire||קפירה
come|Venire||ונירה
want|Volere||וולרה
need|Avere bisogno||אברה ביזוניו
know|Sapere||ספרה
see|Vedere||ודרה
hear|Sentire||סנטירה
give|Dare||דרה
take|Prendere||פרנדרה
pay|Pagare||פגרה
wait|Aspettare||אספטרה
walk|Camminare||קמינרה
read|Leggere||לג׳רה
write|Scrivere||סקריברה
love|Amare||אמרה
work|Lavorare||לבורה
swim|Nuotare||נואוטרה
c_table|Un tavolo per due, per favore||און טבולו פר דואה, פר פבורה
c_menu|Il menù, per favore||איל מנו, פר פבורה
c_noice|Senza ghiaccio, per favore||סנצה גיאצ׳ו, פר פבורה
c_nomeat|Non mangio carne||נון מנג׳ו קרנה
c_allergy|Sono allergico alla frutta secca||סונו אלרג׳יקו אלה פרוטה סקה
c_delicious|Buonissimo!||בואוניסימו
c_reserv|Ho una prenotazione||או אונה פרנוטציונה
c_wifi|Qual è la password del wifi?||קוואלה לה פסוורד דל ויפי
c_checkout|A che ora devo lasciare la camera?||א קה אורה דבו לשרה לה קמרה
c_howget|Come ci arrivo?||קומה צ׳י אריבו
c_stophere|Si fermi qui, per favore||סי פרמי קווי, פר פבורה
c_far|È lontano?||א לונטנו
c_card|Posso pagare con la carta?||פוסו פגרה קון לה קרטה
c_looking|Sto solo guardando, grazie||סטו סולו גווארדנדו, גרציה
c_yourname|Come si chiama?||קומה סי קיאמה
c_wherefrom|Di dov'è?||די דובה
c_seeyou|A dopo||א דופו
c_cheers|Salute! / Cin cin!||סלוטה / צ׳ין צ׳ין
c_lost|Mi sono perso||מי סונו פרסו
c_passport|Ho perso il passaporto||או פרסו איל פסאפורטו
c_hurts|Mi fa male qui||מי פה מלה קווי
c_time|Che ore sono?||קה אורה סונו
c_again|Può ripetere, per favore?||פואו ריפטרה, פר פבורה
c_write|Me lo può scrivere?||מה לו פואו סקריברה
dog|Il cane||איל קנה
cat|Il gatto||איל גטו
bird|L'uccello||לוצ׳לו
horse|Il cavallo||איל קבלו
cow|La mucca||לה מוקה
pig|Il maiale||איל מאיאלה
elephant|L'elefante||לאלפנטה
monkey|La scimmia||לה שימיה
snake|Il serpente||איל סרפנטה
mosquito|La zanzara||לה דזנדזרה
lion|Il leone||איל לאונה
duck|L'anatra||לאנטרה
apple|La mela||לה מלה
banana|La banana||לה בננה
orange|L'arancia||לארנצ׳ה
mango|Il mango||איל מנגו
pineapple|L'ananas||לאננס
watermelon|L'anguria||לאנגוריה
coconut|Il cocco||איל קוקו
grapes|L'uva||לובה
lemon|Il limone||איל לימונה
strawberry|La fragola||לה פרגולה
papaya|La papaia||לה פפאיה
tomato|Il pomodoro||איל פומודורו
potato|La patata||לה פטטה
onion|La cipolla||לה צ׳יפולה
garlic|L'aglio||לאליו
cucumber|Il cetriolo||איל צ׳טריולו
carrot|La carota||לה קרוטה
chili|Il peperoncino||איל פפרונצ׳ינו
corn|Il mais||איל מאיס
mushroom|Il fungo||איל פונגו
lettuce|La lattuga||לה לטוגה
eggplant|La melanzana||לה מלנצנה
soup|La zuppa||לה צופה
salad|L'insalata||לינסלטה
noodles|Gli spaghetti||לי ספגטי
cheese|Il formaggio||איל פורמג׳ו
butter|Il burro||איל בורו
salt|Il sale||איל סלה
sugar|Lo zucchero||לו צוקרו
cake|La torta||לה טורטה
icecream|Il gelato||איל ג׳לטו
juice|Il succo||איל סוקו
wine|Il vino||איל וינו
breakfast|La colazione||לה קולציונה
lunch|Il pranzo||איל פרנצו
dinner|La cena||לה צ׳נה
fork|La forchetta||לה פורקטה
spoon|Il cucchiaio||איל קוקיאיו
knife|Il coltello||איל קולטלו
glass|Il bicchiere||איל ביקיארה
plate|Il piatto||איל פיאטו
bank|La banca||לה בנקה
atm|Il bancomat||איל בנקומט
beach|La spiaggia||לה ספיאג׳ה
museum|Il museo||איל מוזאו
temple|Il tempio||איל טמפיו
street|La strada||לה סטרדה
city|La città||לה צ׳יטה
shop|Il negozio||איל נגוציו
supermarket|Il supermercato||איל סופרמרקטו
park|Il parco||איל פרקו
station|La stazione||לה סטציונה
embassy|L'ambasciata||לאמבשטה
phone|Il telefono||איל טלפונו
charger|Il caricabatterie||איל קריקבטריה
bag|La borsa||לה בורסה
shoes|Le scarpe||לה סקרפה
clothes|I vestiti||אי וסטיטי
hat|Il cappello||איל קפלו
glasses|Gli occhiali||לי אוקיאלי
map|La mappa||לה מפה
sunscreen|La crema solare||לה קרמה סולרה
umbrella|L'ombrello||לומברלו
sf_order|Vorrei ordinare||וורי אורדינרה
sf_recommend|Cosa mi consiglia?||קוזה מי קונסיליה
sf_bottle|Una bottiglia d'acqua, per favore||אונה בוטיליה דאקווה, פר פבורה
sf_isspicy|È piccante?||א פיקנטה
sf_onemore|Un altro, per favore||און אלטרו, פר פבורה
sf_nosugar|Senza zucchero, per favore||סנצה צוקרו, פר פבורה
sf_takeaway|Posso portarlo via?||פוסו פורטרלו ויה
ss_smaller|Ha una taglia più piccola?||א אונה טליה פיו פיקולה
ss_try|Posso provarlo?||פוסו פרוברלו
ss_two|Ne prendo due||נה פרנדו דואה
ss_change|Ha da cambiare?||א דה קמביארה
ss_last|Qual è il prezzo finale?||קוואלה איל פרצו פינלה
ss_bag|Posso avere una busta?||פוסו אברה אונה בוסטה
sm_busstop|Dov'è la fermata dell'autobus?||דובה לה פרמטה דלאוטובוס
sm_trainleave|A che ora parte il treno?||א קה אורה פרטה איל טרנו
sm_oneticket|Un biglietto, per favore||און ביליאטו, פר פבורה
sm_howlong|Quanto ci vuole?||קוואנטו צ׳י וואולה
sm_meter|Accenda il tassametro, per favore||אצ׳נדה איל טסמטרו, פר פבורה
sm_slowdrive|Vada più piano, per favore||ודה פיו פיאנו, פר פבורה
sm_airport|Vorrei andare all'aeroporto||וורי אנדרה אלאארופורטו
sh_leavebag|Posso lasciare qui la borsa?||פוסו לשרה קווי לה בורסה
sh_ac|L'aria condizionata non funziona||לאריה קונדיציונטה נון פונציונה
sh_breakfast|La colazione è inclusa?||לה קולציונה א אינקלוזה
sh_towel|Mi serve un altro asciugamano||מי סרבה און אלטרו אשוגמנו
sh_taxi|Mi può chiamare un taxi?||מי פואו קיאמרה און טקסי
sh_late|Posso lasciare la camera più tardi?||פוסו לשרה לה קמרה פיו טרדי
so_learning|Sto imparando l'italiano||סטו אימפרנדו ליטליאנו
so_thankshelp|Grazie mille per l'aiuto||גרציה מילה פר לאיוטו
so_photo|Ci può fare una foto?||צ׳י פואו פרה אונה פוטו
so_like|Mi piace questo posto||מי פיאצ׳ה קוסטו פוסטו
so_vacation|Sono qui in vacanza||סונו קווי אין וקנצה
so_howsay|Come si dice?||קומה סי דיצ׳ה
so_noproblem|Nessun problema||נסון פרובלמה
so_beautiful|È bellissimo!||א בליסימו
sp_unwell|Non mi sento bene||נון מי סנטו בנה
sp_nearhosp|Dov'è l'ospedale più vicino?||דובה לוספדלה פיו ויצ׳ינו
sp_fever|Ho la febbre||או לה פברה
sp_helpme|Mi aiuti, per favore||מי איוטי, פר פבורה
sp_stolen|Mi hanno rubato la borsa||מי אנו רובטו לה בורסה
sp_embassy|Ho bisogno dell'ambasciata israeliana||או ביזוניו דלאמבשטה איזראליאנה
dt1|Dove andiamo?||דובה אנדיאמו
dt2|A questo albergo, per favore.||א קוסטו אלברגו, פר פבורה
dt3|Va bene, salga.||וה בנה, סלגה
dt4|Quanto costa?||קוואנטו קוסטה
dt5|Duecento euro.||דואה-צ׳נטו אאורו
dt6|Accenda il tassametro, per favore.||אצ׳נדה איל טסמטרו, פר פבורה
dt7|Nessun problema.||נסון פרובלמה
dt8|Si fermi qui, grazie.||סי פרמי קווי, גרציה
dm1|Quanto costa questo?||קוואנטו קוסטה קוסטו
dm2|Trecento.||טרה-צ׳נטו
dm3|Troppo caro! Duecento?||טרופו קארו! דואה-צ׳נטו
dm4|Duecentocinquanta, ultimo prezzo.||דואה-צ׳נטו-צ׳ינקוואנטה, אולטימו פרצו
dm5|Va bene, lo prendo.||וה בנה, לו פרנדו
dm6|Grazie mille!||גרציה מילה
dr1|Quanti siete?||קוואנטי סיאטה
dr2|Due, per favore.||דואה, פר פבורה
dr3|Cosa prende?||קוזה פרנדה
dr4|Riso saltato con pollo, non piccante.||ריזו סלטטו קון פולו, נון פיקנטה
dr5|E da bere?||א דה ברה
dr6|Solo acqua, per favore.||סולו אקווה, פר פבורה
dr7|Il conto, per favore.||איל קונטו, פר פבורה
dh1|Buongiorno, ho una prenotazione.||בואונג׳ורנו, או אונה פרנוטציונה
dh2|A che nome?||א קה נומה
dh3|A nome di ...||א נומה די
dh4|Il passaporto, per favore.||איל פסאפורטו, פר פבורה
dh5|La sua camera è la trecentocinque.||לה סואה קמרה א לה טרה-צ׳נטו-צ׳ינקווה
dh6|A che ora è la colazione?||א קה אורה א לה קולציונה
dh7|Dalle sette alle dieci.||דלה סטה אלה דיאצ׳י
dd1|Scusi, dov'è la stazione?||סקוזי, דובה לה סטציונה
dd2|Sempre dritto, poi a sinistra.||סמפרה דריטו, פוי א סיניסטרה
dd3|È lontano da qui?||א לונטנו דה קווי
dd4|No, cinque minuti a piedi.||נו, צ׳ינקווה מינוטי א פיאדי
dd5|Grazie tante!||גרציה טנטה
w_weather|Il tempo||איל טמפו
w_sun|Il sole||איל סולה
w_rain|La pioggia||לה פיוג׳ה
w_wind|Il vento||איל ונטו
w_cloud|La nuvola||לה נובולה
w_snow|La neve||לה נבה
w_storm|Il temporale||איל טמפורלה
w_humid|Umido||אומידו
j_teacher|L'insegnante||לינסניאנטה
j_driver|L'autista||לאוטיסטה
j_waiter|Il cameriere||איל קמריארה
j_cook|Il cuoco||איל קואוקו
j_student|Lo studente||לו סטודנטה
j_engineer|L'ingegnere||לינג׳ניארה
j_nurse|L'infermiera||לינפרמיארה
j_seller|Il venditore||איל ונדיטורה
j_guide|La guida turistica||לה גווידה טוריסטיקה
j_pharmacist|Il farmacista||איל פרמצ׳יסטה
e_angry|Arrabbiato||ארביאטו
e_scared|Spaventato||ספוונטטו
e_bored|Annoiato||אנויאטו
e_worried|Preoccupato||פראוקופטו
e_surprised|Sorpreso||סורפרזו
e_calm|Calmo||קלמו
e_excited|Entusiasta||אנטוזיאסטה
e_love|Innamorato||אינמורטו
dir_north|Il nord||איל נורד
dir_south|Il sud||איל סוד
dir_east|L'est||לסט
dir_west|L'ovest||לובסט
dir_corner|L'angolo||לאנגולו
dir_light|Il semaforo||איל סמפורו
dir_behind|Dietro||דיאטרו
dir_front|Davanti||דבנטי
dir_next|Accanto a||אקנטו א
dir_back|Indietro||אינדיאטרו
dir_up|Su||סו
dir_down|Giù||ג׳ו`
});

/* ---- numbers & prices (0–999,999) → tokens [text, roman, hebrew]. Italian writes numbers as one word; the Hebrew uses hyphens between parts ---- */
NW.it = (() => {
  const O = [['zero', 'דזרו'], ['uno', 'אונו'], ['due', 'דואה'], ['tre', 'טרה'], ['quattro', 'קוואטרו'], ['cinque', 'צ׳ינקווה'], ['sei', 'סיי'], ['sette', 'סטה'], ['otto', 'אוטו'], ['nove', 'נובה'],
    ['dieci', 'דיאצ׳י'], ['undici', 'אונדיצ׳י'], ['dodici', 'דודיצ׳י'], ['tredici', 'טרדיצ׳י'], ['quattordici', 'קוואטורדיצ׳י'], ['quindici', 'קווינדיצ׳י'], ['sedici', 'סדיצ׳י'], ['diciassette', 'דיצ׳אסטה'], ['diciotto', 'דיצ׳וטו'], ['diciannove', 'דיצ׳אנובה']];
  const T = [, , ['venti', 'ונטי'], ['trenta', 'טרנטה'], ['quaranta', 'קווארנטה'], ['cinquanta', 'צ׳ינקוואנטה'], ['sessanta', 'ססנטה'], ['settanta', 'סטנטה'], ['ottanta', 'אוטנטה'], ['novanta', 'נובנטה']];
  function u100(n) {
    if (n < 20) return O[n];
    const t = T[Math.floor(n / 10)], u = n % 10;
    if (!u) return t;
    let tt = t[0], th = t[1];
    if (u === 1 || u === 8) { tt = tt.slice(0, -1); th = th.slice(0, -1); }       /* ventuno, ventotto */
    const ut = u === 3 ? 'tré' : O[u][0];
    return [tt + ut, th + '-' + O[u][1]];
  }
  function u1000(n) {
    const h = Math.floor(n / 100), r = n % 100;
    let t = '', hb = '';
    if (h) { t = (h === 1 ? '' : O[h][0]) + 'cento'; hb = (h === 1 ? '' : O[h][1] + '-') + 'צ׳נטו'; }
    if (r) {
      const x = u100(r);
      if (h && (r === 8 || (r >= 80 && r < 90))) { t = t.slice(0, -1); }             /* centotto, centottanta */
      t += x[0]; hb += (hb ? '-' : '') + x[1];
    }
    return [t, hb];
  }
  return (n, cur) => {
    let toks;
    if (n === 0) toks = [tk('zero', 'zero', 'דזרו')];
    else {
      toks = [];
      const th = Math.floor(n / 1000), r = n % 1000;
      if (th === 1) toks.push(tk('mille', 'mille', 'מילה'));
      else if (th) { const x = u1000(th); toks.push(tk(x[0] + 'mila', x[0] + 'mila', x[1] + '-מילה')); }
      if (r) { const x = u1000(r); toks.push(tk(x[0], x[0], x[1])); }
      if (th && r) { toks = [tk(toks[0][0] + toks[1][0], toks[0][1] + toks[1][1], toks[0][2] + '-' + toks[1][2])]; }
    }
    if (cur && n === 1) toks = [tk('un', 'un', 'און')];
    if (cur) toks.push(tk('euro', 'euro', 'אאורו'));
    return toks;
  };
})();
NUM.it = { tokens: (n, cur) => NW.it(n, cur) };
