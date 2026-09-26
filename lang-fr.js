/* ===== LingoNest — lang-fr.js : French content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('fr', {
  ver: '1.17.0',
  curSym: "€",
  country: {"he": "צרפת ומדינות דוברות צרפתית", "en": "France & French-speaking countries", "ru": "Франция и франкоязычные страны", "es": "Francia y países francófonos", "ar": "فرنسا والدول الناطقة بالفرنسية"},
  emergency: [
    ["🆘", {"he": "חירום אירופי (עובד מכל טלפון)", "en": "European emergency (any phone)", "ru": "Единый европейский номер", "es": "Emergencias europeas", "ar": "الطوارئ الأوروبية"}, "112"],
    ["🚑", {"he": "אמבולנס (SAMU)", "en": "Ambulance (SAMU)", "ru": "Скорая (SAMU)", "es": "Ambulancia (SAMU)", "ar": "الإسعاف (SAMU)"}, "15"],
    ["🚓", {"he": "משטרה", "en": "Police", "ru": "Полиция", "es": "Policía", "ar": "الشرطة"}, "17"],
    ["🚒", {"he": "כבאות", "en": "Fire", "ru": "Пожарные", "es": "Bomberos", "ar": "الإطفاء"}, "18"]
  ],
  tips: [
    {"t": {"he": "Bonjour לפני הכול", "en": "Bonjour before everything"}, "b": {"he": "בצרפת נכנסים לחנות, לאוטובוס או לבית קפה ואומרים Bonjour לפני כל שאלה. לגשת ישר לעניין בלי ברכה נחשב גס. בערב אומרים Bonsoir.", "en": "In France you say Bonjour when entering a shop, bus or café — before any question. Skipping it is considered rude. In the evening: Bonsoir."}, "ex": [["Bonjour, un café s'il vous plaît", "", "בונז׳ור, און קפה סיל וו פלה", "שלום, קפה אחד בבקשה", "Hello, a coffee please"], ["Bonsoir", "", "בונסואר", "ערב טוב", "Good evening"]]},
    {"t": {"he": "אותיות שקטות וקישור (liaison)", "en": "Silent letters and liaison"}, "b": {"he": "אותיות בסוף מילה בדרך כלל לא נהגות: petit = פטי, trop = טרו. אבל כשהמילה הבאה מתחילה בתנועה — מחברים: vous avez = וו זאווה, deux euros = דה זרו.", "en": "Final letters are usually silent: petit = \"peti\". But before a vowel they link: vous avez = \"vou zavé\", deux euros = \"deu zeuro\"."}, "ex": [["Vous avez", "", "וו זאווה", "יש לכם", "You have"], ["Deux euros", "", "דה זרו", "שני יורו", "Two euros"]]},
    {"t": {"he": "vous מול tu", "en": "vous vs. tu"}, "b": {"he": "vous (וו) היא הפנייה המנומסת — לזרים, למלצרים, לפקידים ולמבוגרים. tu (טו) רק לחברים, לילדים ולבני משפחה. בספק — vous.", "en": "vous is the polite \"you\" — strangers, waiters, officials, older people. tu only for friends, kids and family. When in doubt — vous."}, "ex": [["Vous parlez anglais ?", "", "וו פרלה אונגלה", "אתה מדבר אנגלית? (מנומס)", "Do you speak English? (polite)"]]},
    {"t": {"he": "le / la — זכר ונקבה", "en": "le / la — masculine and feminine"}, "b": {"he": "לכל שם עצם יש מין, ולא תמיד הגיוני (la table = השולחן בנקבה). לפני תנועה שניהם הופכים ל-l': l'hôtel. ברבים: les.", "en": "Every noun has a gender, not always logical (la table is feminine). Before a vowel both become l': l'hôtel. Plural: les."}, "ex": [["Le train / la gare", "", "לה טרן / לה גאר", "הרכבת / התחנה", "The train / the station"]]},
    {"t": {"he": "שלילה: ne ... pas", "en": "Negation: ne ... pas"}, "b": {"he": "השלילה עוטפת את הפועל: je ne comprends pas. בדיבור יומיומי הצרפתים משמיטים את ה-ne ואומרים רק pas: je comprends pas.", "en": "Negation wraps the verb: je ne comprends pas. In everyday speech the ne is dropped: je comprends pas."}, "ex": [["Je ne comprends pas", "", "ז׳ה נה קומפרון פא", "אני לא מבין", "I don't understand"], ["C'est pas cher", "", "סה פא שר", "זה לא יקר", "It's not expensive"]]},
    {"t": {"he": "70, 80, 90 — החשבון הצרפתי", "en": "70, 80, 90 — French maths"}, "b": {"he": "70 = soixante-dix (שישים ועשר), 80 = quatre-vingts (ארבע פעמים עשרים), 90 = quatre-vingt-dix (ארבע פעמים עשרים ועשר). נשמע מסובך — אבל מסך \"מחירים ומספרים\" עושה את זה בשבילך. בבלגיה ובשווייץ אומרים septante ו-nonante.", "en": "70 = sixty-ten, 80 = four-twenties, 90 = four-twenties-ten. The Prices screen does it for you. In Belgium and Switzerland: septante, nonante."}, "ex": [["Soixante-dix", "", "סואסונט-דיס", "70", "70"], ["Quatre-vingt-dix", "", "קאטר-וון-דיס", "90", "90"]]}
  ],
  note: {"he": "בצרפתית 26 אותיות, כמו באנגלית, אבל הרבה אותיות בסוף מילה לא נהגות (Paris = פארי). הסוד של צרפתית הוא הצירופים — ou, oi, an, on — ויש להם מקטע משלהם למטה.", "en": "French has the same 26 letters as English, but many final letters are silent (Paris = \"pari\"). The secret is the letter combinations — ou, oi, an, on — covered below.", "ru": "Во французском те же 26 букв, что и в английском, но многие конечные буквы не читаются (Paris = «пари»). Главное — буквосочетания (ou, oi, an, on), они ниже.", "es": "El francés tiene las mismas 26 letras que el inglés, pero muchas letras finales no se pronuncian (Paris = \"parí\"). La clave son las combinaciones (ou, oi, an, on), abajo.", "ar": "في الفرنسية نفس الحروف الـ26 كما في الإنجليزية، لكن كثيرا من الحروف الأخيرة لا تُنطق (Paris = باري). السر في تركيبات الحروف (ou, oi, an, on) في الأسفل."},
  vowelNote: {"he": "בצרפתית כמה אותיות יחד יוצרות צליל אחד. an/on/in הם צלילי \"אף\" (אנפוף) — אומרים אותם כשהאוויר יוצא קצת מהאף, בלי להגות את ה-n עד הסוף.", "en": "In French several letters make one sound. an/on/in are nasal — let air out through the nose without fully saying the n.", "ru": "Несколько букв дают один звук. an/on/in — носовые: воздух частично выходит через нос, n до конца не произносится.", "es": "Varias letras forman un solo sonido. an/on/in son nasales: deja salir aire por la nariz sin pronunciar del todo la n.", "ar": "عدة حروف تصنع صوتا واحدا. an/on/in أصوات أنفية: يخرج الهواء من الأنف دون نطق الـn كاملة."},
  alpha: [
    ["A a", "A", "אַ", "a"],
    ["B b", "B", "ב", "bé"],
    ["C c", "C", "ק / ס", "cé"],
    ["D d", "D", "ד", "dé"],
    ["E e", "E", "אֶ (שקטה בסוף מילה)", "e"],
    ["F f", "F", "פ", "effe"],
    ["G g", "G", "ג / ז׳", "gé"],
    ["H h", "H", "שקטה", "ache (silent)"],
    ["I i", "I", "אִי", "i"],
    ["J j", "J", "ז׳", "ji"],
    ["K k", "K", "ק", "ka"],
    ["L l", "L", "ל", "elle"],
    ["M m", "M", "מ", "emme"],
    ["N n", "N", "נ", "enne"],
    ["O o", "O", "אוֹ", "o"],
    ["P p", "P", "פּ", "pé"],
    ["Q q", "Q", "ק", "ku"],
    ["R r", "R", "ר גרונית", "erre"],
    ["S s", "S", "ס / ז", "esse"],
    ["T t", "T", "ט", "té"],
    ["U u", "U", "אִי בשפתיים מעוגלות (ü)", "u"],
    ["V v", "V", "ו (V)", "vé"],
    ["W w", "W", "ו / וו", "double vé"],
    ["X x", "X", "קס", "ixe"],
    ["Y y", "Y", "אִי / י", "i grec"],
    ["Z z", "Z", "ז", "zède"]
  ],
  vowels: [
    ["é", "é", "אֶה סגורה", "é"],
    ["è / ê", "è", "אֶ פתוחה", "è / ê"],
    ["ou", "ou", "אוּ", "ou"],
    ["oi", "moi", "וָא (moi = מואה)", "oi"],
    ["au / eau", "eau", "אוֹ", "au / eau"],
    ["ai", "lait", "אֶ", "ai"],
    ["eu", "deux", "אֶ מעוגלת (deux = דה)", "eu"],
    ["an / en", "an", "אָן באף (enfant = אונפון)", "an / en"],
    ["on", "bon", "אוֹן באף (bon = בון)", "on"],
    ["in / ain", "vin", "אֶן באף (vin = וון)", "in / ain"],
    ["ch", "chat", "ש (chat = שה)", "ch"],
    ["gn", "montagne", "ני (montagne = מונטני)", "gn"],
    ["ç", "ça", "ס (ça = סה)", "ç"],
    ["ill", "fille", "יי (fille = פיי)", "ill"]
  ],
  /* speaker = female: [regex source, flags, replacement] */
  gender: [["suis perdu(?!e)", "g", "suis perdue"], ["^Enchanté$", "", "Enchantée"]],
  words: `hello|Bonjour||בונז׳ור
bye|Au revoir||או רבואר
morning|Bonjour !||בונז׳ור
thanks|Merci||מרסי
please|S'il vous plaît||סיל וו פלה
sorry|Pardon||פרדון
yes|Oui||וי
no|Non||נון
howareyou|Comment allez-vous ?||קומון טלה וו
good|Bien||ביין
ok|D'accord||דקור
n1|Un||און
n2|Deux||דה
n3|Trois||טרואה
n4|Quatre||קאטר
n5|Cinq||סנק
n6|Six||סיס
n7|Sept||סט
n8|Huit||ויט
n9|Neuf||נף
n10|Dix||דיס
n0|Zéro||זרו
n20|Vingt||וון
n50|Cinquante||סנקונט
n100|Cent||סון
n1000|Mille||מיל
n11|Onze||אונז
n12|Douze||דוז
n13|Treize||טרז
n14|Quatorze||קטורז
n15|Quinze||קנז
n16|Seize||סז
n17|Dix-sept||דיס-סט
n18|Dix-huit||דיז-ויט
n19|Dix-neuf||דיז-נף
n30|Trente||טרונט
n40|Quarante||קרונט
n60|Soixante||סואסונט
n70|Soixante-dix||סואסונט-דיס
n80|Quatre-vingts||קאטר-וון
n90|Quatre-vingt-dix||קאטר-וון-דיס
n200|Deux cents||דה סון
n500|Cinq cents||סנק סון
n10000|Dix mille||די מיל
water|De l'eau||דה לו
toilet|Les toilettes||לה טואלט
where|Où ?||או
howmuch|Combien ?||קומביין
this|Ceci||ססי
friend|Ami||אמי
food|La nourriture||לה נוריטור
bread|Le pain||לה פן
coffee|Le café||לה קפה
tea|Le thé||לה טה
chicken|Le poulet||לה פולה
fish|Le poisson||לה פואסון
rice|Le riz||לה רי
beer|La bière||לה ביר
bill|L'addition||לדיסיון
tasty|Délicieux||דליסיה
egg|L'œuf||לף
fruit|Les fruits||לה פרוי
veg|Les légumes||לה לגום
meat|La viande||לה ויונד
milk|Le lait||לה לה
spicy|Épicé||אפיסה
restaurant|Le restaurant||לה רסטורון
ice|Les glaçons||לה גלסון
taxi|Le taxi||לה טקסי
bus|Le bus||לה בוס
train|Le train||לה טרן
airport|L'aéroport||לארופור
hotel|L'hôtel||לוטל
left|À gauche||א גוש
right|À droite||א דרואט
straight|Tout droit||טו דרואה
stop|Arrêtez||ארטה
ticket|Le billet||לה בייה
money|L'argent||לרז׳ון
expensive|Cher||שר
cheap|Pas cher||פא שר
market|Le marché||לה מרשה
pharmacy|La pharmacie||לה פרמסי
open|Ouvert||אוור
closed|Fermé||פרמה
help|Au secours !||או סקור
police|La police||לה פוליס
doctor|Le médecin||לה מדסן
hospital|L'hôpital||לופיטל
today|Aujourd'hui||אוז׳ורדוי
tomorrow|Demain||דמן
yesterday|Hier||יר
now|Maintenant||מנטנון
t_morning|Le matin||לה מטן
t_evening|Le soir||לה סואר
t_night|La nuit||לה נוי
t_week|La semaine||לה סמן
t_month|Le mois||לה מואה
t_year|L'année||לאנה
t_hour|L'heure||לר
t_minute|La minute||לה מינוט
p_toilet|Où sont les toilettes ?||או סון לה טואלט
p_cost|Combien ça coûte ?||קומביין סה קוט
p_nounder|Je ne comprends pas||ז׳ה נה קומפרון פא
p_english|Vous parlez anglais ?||וו פרלה אונגלה
p_slow|Parlez lentement, s'il vous plaît||פרלה לונטמון, סיל וו פלה
p_bill|L'addition, s'il vous plaît||לדיסיון, סיל וו פלה
p_want|Je veux celui-ci||ז׳ה וה סלוי-סי
p_expensive|C'est trop cher||סה טרו שר
p_discount|Vous pouvez faire un prix ?||וו פוּוה פר און פרי
p_address|Emmenez-moi à cette adresse, s'il vous plaît||אמנה-מואה א סט אדרס, סיל וו פלה
p_hotel|Où est l'hôtel ?||או א לוטל
p_doctor|J'ai besoin d'un médecin||ז׳ה בזואן דן מדסן
p_police|Appelez la police !||אפלה לה פוליס
p_israel|Je viens d'Israël||ז׳ה ויין דיזראל
p_name|Je m'appelle ...||ז׳ה מאפל
p_nice|Enchanté||אונשונטה
p_water|De l'eau, s'il vous plaît||דה לו, סיל וו פלה
p_help|Vous pouvez m'aider ?||וו פוּוה מדה
p_what|Qu'est-ce que c'est ?||קס קה סה
p_nospicy|Pas épicé, s'il vous plaît||פא אפיסה, סיל וו פלה
room|La chambre||לה שומבר
key|La clé||לה קלה
bed|Le lit||לה לי
shower|La douche||לה דוש
towel|La serviette||לה סרוייט
passport|Le passeport||לה פספור
mon|Lundi||לנדי
tue|Mardi||מרדי
wed|Mercredi||מרקרדי
thu|Jeudi||ז׳די
fri|Vendredi||וונדרדי
sat|Samedi||סמדי
sun|Dimanche||דימונש
red|Rouge||רוז׳
blue|Bleu||בלה
green|Vert||ור
yellow|Jaune||ז׳ון
black|Noir||נואר
white|Blanc||בלון
man|Homme||אום
woman|Femme||פאם
child|Enfant||אונפון
family|Famille||פמיי
i|Je / moi||ז׳ה / מואה
you|Vous||וו
head|La tête||לה טט
stomach|Le ventre||לה וונטר
hand|La main||לה מן
pain|La douleur||לה דולר
medicine|Le médicament||לה מדיקמון
sick|Malade||מלאד
big|Grand||גרון
small|Petit||פטי
hot|Chaud||שו
cold|Froid||פרואה
bad|Mauvais||מווה
beautiful|Beau||בו
new|Nouveau||נובו
old|Vieux||וייה
fast|Rapide||רפיד
slow|Lent||לון
near|Près||פרה
far_a|Loin||לואן
clean|Propre||פרופר
dirty|Sale||סאל
tired|Fatigué||פטיגה
hungry|J'ai faim||ז׳ה פן
thirsty|J'ai soif||ז׳ה סואף
happy|Content||קונטון
sad|Triste||טריסט
easy|Facile||פסיל
difficult|Difficile||דיפיסיל
many|Beaucoup||בוקו
eat|Manger||מונז׳ה
drink|Boire||בואר
go|Aller||אלה
buy|Acheter||אשטה
speak|Parler||פרלה
sleep|Dormir||דורמיר
understand|Comprendre||קומפרונדר
come|Venir||וניר
want|Vouloir||וולואר
need|Avoir besoin||אבואר בזואן
know|Savoir||סבואר
see|Voir||וואר
hear|Entendre||אונטונדר
give|Donner||דונה
take|Prendre||פרונדר
pay|Payer||פייה
wait|Attendre||אטונדר
walk|Marcher||מרשה
read|Lire||ליר
write|Écrire||אקריר
love|Aimer||אמה
work|Travailler||טרוויה
swim|Nager||נאז׳ה
c_table|Une table pour deux, s'il vous plaît||און טאבל פור דה, סיל וו פלה
c_menu|La carte, s'il vous plaît||לה קרט, סיל וו פלה
c_noice|Sans glaçons, s'il vous plaît||סון גלסון, סיל וו פלה
c_nomeat|Je ne mange pas de viande||ז׳ה נה מונז׳ פא דה ויונד
c_allergy|Je suis allergique aux noix||ז׳ה סוי אלרז׳יק או נואה
c_delicious|C'est délicieux !||סה דליסיה
c_reserv|J'ai une réservation||ז׳ה און רזרווסיון
c_wifi|Quel est le mot de passe du wifi ?||קל א לה מו דה פס דו ויפי
c_checkout|À quelle heure faut-il libérer la chambre ?||א קל ר פו-טיל ליברה לה שומבר
c_howget|Comment y aller ?||קומון טי אלה
c_stophere|Arrêtez-vous ici, s'il vous plaît||ארטה-וו איסי, סיל וו פלה
c_far|C'est loin ?||סה לואן
c_card|Je peux payer par carte ?||ז׳ה פה פייה פר קרט
c_looking|Je regarde seulement, merci||ז׳ה רגרד סלמון, מרסי
c_yourname|Comment vous appelez-vous ?||קומון וו זאפלה וו
c_wherefrom|Vous venez d'où ?||וו ונה דו
c_seeyou|À plus tard||א פלו טר
c_cheers|Santé !||סונטה
c_lost|Je suis perdu||ז׳ה סוי פרדו
c_passport|J'ai perdu mon passeport||ז׳ה פרדו מון פספור
c_hurts|J'ai mal ici||ז׳ה מאל איסי
c_time|Quelle heure est-il ?||קל ר א-טיל
c_again|Vous pouvez répéter, s'il vous plaît ?||וו פוּוה רפטה, סיל וו פלה
c_write|Vous pouvez l'écrire ?||וו פוּוה לקריר
dog|Le chien||לה שיין
cat|Le chat||לה שה
bird|L'oiseau||לואזו
horse|Le cheval||לה שוואל
cow|La vache||לה ואש
pig|Le cochon||לה קושון
elephant|L'éléphant||לאלפון
monkey|Le singe||לה סנז׳
snake|Le serpent||לה סרפון
mosquito|Le moustique||לה מוסטיק
lion|Le lion||לה ליון
duck|Le canard||לה קנאר
apple|La pomme||לה פום
banana|La banane||לה בנאן
orange|L'orange||לורונז׳
mango|La mangue||לה מונג
pineapple|L'ananas||לאננאס
watermelon|La pastèque||לה פסטק
coconut|La noix de coco||לה נואה דה קוקו
grapes|Le raisin||לה רזן
lemon|Le citron||לה סיטרון
strawberry|La fraise||לה פרז
papaya|La papaye||לה פפאי
tomato|La tomate||לה טומט
potato|La pomme de terre||לה פום דה טר
onion|L'oignon||לוניון
garlic|L'ail||לאי
cucumber|Le concombre||לה קונקומבר
carrot|La carotte||לה קרוט
chili|Le piment||לה פימון
corn|Le maïs||לה מאיס
mushroom|Le champignon||לה שומפיניון
lettuce|La laitue||לה לטו
eggplant|L'aubergine||לוברז׳ין
soup|La soupe||לה סופ
salad|La salade||לה סלאד
noodles|Les nouilles||לה נויי
cheese|Le fromage||לה פרומאז׳
butter|Le beurre||לה בר
salt|Le sel||לה סל
sugar|Le sucre||לה סוקר
cake|Le gâteau||לה גאטו
icecream|La glace||לה גלאס
juice|Le jus||לה ז׳ו
wine|Le vin||לה וון
breakfast|Le petit-déjeuner||לה פטי-דז׳נה
lunch|Le déjeuner||לה דז׳נה
dinner|Le dîner||לה דינה
fork|La fourchette||לה פורשט
spoon|La cuillère||לה קוייר
knife|Le couteau||לה קוטו
glass|Le verre||לה ור
plate|L'assiette||לאסייט
bank|La banque||לה בונק
atm|Le distributeur||לה דיסטריביטר
beach|La plage||לה פלאז׳
museum|Le musée||לה מוזה
temple|Le temple||לה טונפל
street|La rue||לה רו
city|La ville||לה ויל
shop|Le magasin||לה מגזן
supermarket|Le supermarché||לה סופרמרשה
park|Le parc||לה פרק
station|La gare||לה גאר
embassy|L'ambassade||לומבסאד
phone|Le téléphone||לה טלפון
charger|Le chargeur||לה שרז׳ר
bag|Le sac||לה סאק
shoes|Les chaussures||לה שוסור
clothes|Les vêtements||לה וטמון
hat|Le chapeau||לה שפו
glasses|Les lunettes||לה לונט
map|Le plan||לה פלון
sunscreen|La crème solaire||לה קרם סולר
umbrella|Le parapluie||לה פרפלוי
sf_order|Je voudrais commander||ז׳ה וודרה קומונדה
sf_recommend|Qu'est-ce que vous me conseillez ?||קס קה וו מה קונסיה
sf_bottle|Une bouteille d'eau, s'il vous plaît||און בוטיי דו, סיל וו פלה
sf_isspicy|C'est épicé ?||סה אפיסה
sf_onemore|Encore un, s'il vous plaît||אונקור און, סיל וו פלה
sf_nosugar|Sans sucre, s'il vous plaît||סון סוקר, סיל וו פלה
sf_takeaway|C'est possible à emporter ?||סה פוסיבל א אונפורטה
ss_smaller|Vous avez une taille plus petite ?||וו זאווה און טאי פלו פטיט
ss_try|Je peux l'essayer ?||ז׳ה פה לסייה
ss_two|J'en prends deux||ז׳ון פרון דה
ss_change|Vous avez de la monnaie ?||וו זאווה דה לה מונה
ss_last|C'est quoi le dernier prix ?||סה קואה לה דרנייה פרי
ss_bag|Je peux avoir un sac ?||ז׳ה פה אבואר און סאק
sm_busstop|Où est l'arrêt de bus ?||או א לארה דה בוס
sm_trainleave|Le train part à quelle heure ?||לה טרן פאר א קל ר
sm_oneticket|Un billet, s'il vous plaît||און בייה, סיל וו פלה
sm_howlong|Ça prend combien de temps ?||סה פרון קומביין דה טון
sm_meter|Mettez le compteur, s'il vous plaît||מטה לה קונטר, סיל וו פלה
sm_slowdrive|Roulez plus lentement, s'il vous plaît||רולה פלו לונטמון, סיל וו פלה
sm_airport|Je voudrais aller à l'aéroport||ז׳ה וודרה אלה א לארופור
sh_leavebag|Je peux laisser mon sac ici ?||ז׳ה פה לסה מון סאק איסי
sh_ac|La climatisation ne marche pas||לה קלימטיזסיון נה מרש פא
sh_breakfast|Le petit-déjeuner est compris ?||לה פטי-דז׳נה א קומפרי
sh_towel|J'ai besoin d'une autre serviette||ז׳ה בזואן דון אוטר סרוייט
sh_taxi|Vous pouvez m'appeler un taxi ?||וו פוּוה מאפלה און טקסי
sh_late|Je peux partir plus tard ?||ז׳ה פה פרטיר פלו טר
so_learning|J'apprends le français||ז׳אפרון לה פרונסה
so_thankshelp|Merci beaucoup pour votre aide||מרסי בוקו פור ווטר אד
so_photo|Vous pouvez nous prendre en photo ?||וו פוּוה נו פרונדר און פוטו
so_like|J'aime bien cet endroit||ז׳ם ביין סט אונדרואה
so_vacation|Je suis ici en vacances||ז׳ה סוי איסי און וקונס
so_howsay|Comment on dit ça ?||קומון און די סה
so_noproblem|Pas de problème||פא דה פרובלם
so_beautiful|C'est très beau !||סה טרה בו
sp_unwell|Je ne me sens pas bien||ז׳ה נה מה סון פא ביין
sp_nearhosp|Où est l'hôpital le plus proche ?||או א לופיטל לה פלו פרוש
sp_fever|J'ai de la fièvre||ז׳ה דה לה פייבר
sp_helpme|Aidez-moi, s'il vous plaît||אדה-מואה, סיל וו פלה
sp_stolen|On m'a volé mon sac||און מה וולה מון סאק
sp_embassy|J'ai besoin de l'ambassade d'Israël||ז׳ה בזואן דה לומבסאד דיזראל
dt1|Où allez-vous ?||או אלה-וו
dt2|À cet hôtel, s'il vous plaît.||א סט וטל, סיל וו פלה
dt3|D'accord, montez.||דקור, מונטה
dt4|C'est combien ?||סה קומביין
dt5|Deux cents euros.||דה סון זרו
dt6|Mettez le compteur, s'il vous plaît.||מטה לה קונטר, סיל וו פלה
dt7|Pas de problème.||פא דה פרובלם
dt8|Arrêtez-vous ici, merci.||ארטה-וו איסי, מרסי
dm1|C'est combien, ça ?||סה קומביין, סה
dm2|Trois cents.||טרואה סון
dm3|C'est trop cher ! Deux cents ?||סה טרו שר! דה סון
dm4|Deux cent cinquante, dernier prix.||דה סון סנקונט, דרנייה פרי
dm5|D'accord, je le prends.||דקור, ז׳ה לה פרון
dm6|Merci beaucoup !||מרסי בוקו
dr1|Vous êtes combien ?||וו זט קומביין
dr2|Deux, s'il vous plaît.||דה, סיל וו פלה
dr3|Qu'est-ce que vous prenez ?||קס קה וו פרנה
dr4|Du riz sauté au poulet, pas épicé.||דו רי סוטה או פולה, פא אפיסה
dr5|Et comme boisson ?||א קום בואסון
dr6|Juste de l'eau, s'il vous plaît.||ז׳וסט דה לו, סיל וו פלה
dr7|L'addition, s'il vous plaît.||לדיסיון, סיל וו פלה
dh1|Bonjour, j'ai une réservation.||בונז׳ור, ז׳ה און רזרווסיון
dh2|À quel nom ?||א קל נון
dh3|Au nom de ...||או נון דה
dh4|Votre passeport, s'il vous plaît.||ווטר פספור, סיל וו פלה
dh5|Votre chambre, c'est la trois cent cinq.||ווטר שומבר, סה לה טרואה סון סנק
dh6|Le petit-déjeuner est à quelle heure ?||לה פטי-דז׳נה א טה קל ר
dh7|De sept heures à dix heures.||דה סט ר א דיז ר
dd1|Excusez-moi, où est la gare ?||אקסקוזה-מואה, או א לה גאר
dd2|Tout droit, puis à gauche.||טו דרואה, פוי א גוש
dd3|C'est loin d'ici ?||סה לואן דיסי
dd4|Non, cinq minutes à pied.||נון, סנק מינוט א פייה
dd5|Merci mille fois !||מרסי מיל פואה
w_weather|La météo||לה מטאו
w_sun|Le soleil||לה סולי
w_rain|La pluie||לה פלוי
w_wind|Le vent||לה וון
w_cloud|Le nuage||לה נואז׳
w_snow|La neige||לה נז׳
w_storm|L'orage||לוראז׳
w_humid|Humide||אומיד
j_teacher|Professeur||פרופסר
j_driver|Chauffeur||שופר
j_waiter|Serveur||סרור
j_cook|Cuisinier||קוויזינייה
j_student|Étudiant||אטודיון
j_engineer|Ingénieur||אנז׳נייר
j_nurse|Infirmière||אנפירמייר
j_seller|Vendeur||וונדר
j_guide|Guide||גיד
j_pharmacist|Pharmacien||פרמסיין
e_angry|En colère||און קולר
e_scared|Effrayé||אפרייה
e_bored|Je m'ennuie||ז׳ה מונוי
e_worried|Inquiet||אנקייה
e_surprised|Surpris||סורפרי
e_calm|Calme||קלם
e_excited|Enthousiaste||אונטוזיאסט
e_love|Amoureux||אמורה
dir_north|Le nord||לה נור
dir_south|Le sud||לה סוד
dir_east|L'est||לסט
dir_west|L'ouest||לואסט
dir_corner|Le coin||לה קואן
dir_light|Le feu rouge||לה פה רוז׳
dir_behind|Derrière||דרייר
dir_front|Devant||דבון
dir_next|À côté de||א קוטה דה
dir_back|En arrière||און נאריר
dir_up|En haut||און או
dir_down|En bas||און בא`
});

/* ---- numbers & prices (0–999,999) → tokens [text, roman, hebrew] ---- */
NW.fr = (() => {
  const H = { 'zéro': 'זרו', un: 'און', une: 'און', deux: 'דה', trois: 'טרואה', quatre: 'קאטר', cinq: 'סנק', six: 'סיס', sept: 'סט', huit: 'ויט', neuf: 'נף', dix: 'דיס',
    onze: 'אונז', douze: 'דוז', treize: 'טרז', quatorze: 'קטורז', quinze: 'קנז', seize: 'סז', vingt: 'וון', vingts: 'וון', trente: 'טרונט', quarante: 'קרונט', cinquante: 'סנקונט',
    soixante: 'סואסונט', cent: 'סון', cents: 'סון', mille: 'מיל', et: 'אה', euro: 'אֶרו', euros: 'אֶרו' };
  const o = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
  const t = [, , 'vingt', 'trente', 'quarante', 'cinquante', 'soixante'];
  function u100(n, final) {
    if (n < 20) return o[n];
    if (n < 70) { const d = t[Math.floor(n / 10)], u = n % 10; return u === 0 ? d : u === 1 ? d + ' et un' : d + '-' + o[u]; }
    if (n < 80) return n === 71 ? 'soixante et onze' : 'soixante-' + o[n - 60];
    if (n === 80) return final ? 'quatre-vingts' : 'quatre-vingt';
    return 'quatre-vingt-' + o[n - 80];
  }
  function u1000(n, final) {
    const h = Math.floor(n / 100), r = n % 100; let s = '';
    if (h) s = (h === 1 ? 'cent' : o[h] + ' cent' + (r === 0 && final ? 's' : ''));
    if (r) s += (s ? ' ' : '') + u100(r, final);
    return s;
  }
  function words(n) {
    if (n === 0) return 'zéro';
    const th = Math.floor(n / 1000), r = n % 1000; let s = '';
    if (th) s = (th === 1 ? 'mille' : u1000(th, false) + ' mille');
    if (r) s += (s ? ' ' : '') + u1000(r, true);
    return s;
  }
  const heb = s => s.split(/([ -])/).map(w => (w === ' ' || w === '-') ? w : (H[w] || w)).join('').replace('וון אה און', 'וונטה און');
  return (n, cur) => {
    const w = words(n), toks = [tk(w, w, heb(w))];
    if (cur) toks.push(n === 1 || n === 0 ? tk('euro', 'euro', 'אֶרו') : tk('euros', 'euros', 'אֶרו'));
    return toks;
  };
})();
NUM.fr = { tokens: (n, cur) => NW.fr(n, cur) };
