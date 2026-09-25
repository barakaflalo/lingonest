/* ===== LingoNest — lang-el.js : Greek content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('el', {
  ver: '1.14.0',
  curSym: "€",
  country: {"he": "יוון וקפריסין", "en": "Greece & Cyprus", "ru": "Греция и Кипр", "es": "Grecia y Chipre", "ar": "اليونان وقبرص"},
  emergency: [
    ["🆘", {"he": "חירום אירופי", "en": "European emergency", "ru": "Единый европейский номер", "es": "Emergencias europeas", "ar": "الطوارئ الأوروبية"}, "112"],
    ["🚓", {"he": "משטרה", "en": "Police", "ru": "Полиция", "es": "Policía", "ar": "الشرطة"}, "100"],
    ["🚑", {"he": "אמבולנס", "en": "Ambulance", "ru": "Скорая", "es": "Ambulancia", "ar": "الإسعاف"}, "166"],
    ["👮", {"he": "משטרת תיירים", "en": "Tourist police", "ru": "Туристическая полиция", "es": "Policía turística", "ar": "شرطة السياحة"}, "1571"]
  ],
  tips: [
    {"t": {"he": "; זה סימן שאלה!", "en": "; is a question mark!"}, "b": {"he": "ביוונית סימן השאלה נראה כמו נקודה־פסיק: Πού είναι; = איפה זה?. ונקודה מורמת (·) משמשת כמו נקודה־פסיק שלנו.", "en": "In Greek the question mark looks like a semicolon: Πού είναι; = Where is it?. A raised dot (·) works like our semicolon."}, "ex": [["Τι κάνετε;", "ti kanete?", "טי קנטה", "מה שלומך?", "How are you?"]]},
    {"t": {"he": "Ναι = כן, Όχι = לא", "en": "Ναι = yes, Όχι = no"}, "b": {"he": "מלכודת קלאסית: ναι (נה) — שנשמע כמו \"no\" — פירושו כן! όχι (אוחי) = לא. גם בגוף: הרמת הגבות או הראש מעט למעלה עם \"צק\" = לא.", "en": "Classic trap: ναι (\"ne\"), which sounds like \"no\", means YES. όχι = no. A slight upward head tilt with a click also means no."}, "ex": [["Ναι", "ne", "נה", "כן", "Yes"], ["Όχι", "ochi", "אוחי", "לא", "No"]]},
    {"t": {"he": "ההטעמה (τόνος)", "en": "The stress mark (tonos)"}, "b": {"he": "לכל מילה ביוונית עם יותר מהברה אחת יש סימן ´ מעל התנועה המוטעמת. שם שמים את הדגש, והוא יכול לשנות משמעות: πότε (מתי) מול ποτέ (אף פעם).", "en": "Every Greek word of two or more syllables has a ´ on the stressed vowel. It can change meaning: πότε (when) vs ποτέ (never)."}, "ex": [["Πότε;", "pote?", "פוטה", "מתי?", "When?"], ["Ποτέ", "pote", "פוטה (בהטעמה בסוף)", "אף פעם", "Never"]]},
    {"t": {"he": "Γεια σας מול Γεια σου", "en": "Γεια σας vs. Γεια σου"}, "b": {"he": "Γεια σας (יאסאס) = שלום מנומס או לכמה אנשים; Γεια σου (יאסו) = שלום לחבר. אותה מילה משמשת גם כלהתראות. בבוקר Καλημέρα, מאחר הצהריים Καλησπέρα, ולפני השינה Καληνύχτα.", "en": "Γεια σας = polite / plural hello; Γεια σου = hello to a friend — also used for bye. Morning: Καλημέρα; afternoon/evening: Καλησπέρα; night: Καληνύχτα."}, "ex": [["Καλησπέρα", "kalispera", "קליספרה", "ערב טוב", "Good evening"], ["Καληνύχτα", "kalinichta", "קליניחטה", "לילה טוב", "Good night"]]},
    {"t": {"he": "Παρακαλώ — המילה שעושה הכול", "en": "Παρακαλώ — the do-everything word"}, "b": {"he": "παρακαλώ (פרקלו) = בבקשה, על לא דבר, \"כן?\" בטלפון, ו\"במה אוכל לעזור?\" בחנות. ευχαριστώ (אפחריסטו) = תודה.", "en": "παρακαλώ = please, you're welcome, \"hello?\" on the phone, and \"can I help you?\" in shops. ευχαριστώ = thank you."}, "ex": [["Ευχαριστώ — Παρακαλώ", "efcharisto — parakalo", "אפחריסטו — פרקלו", "תודה — בבקשה / על לא דבר", "Thanks — you're welcome"]]},
    {"t": {"he": "מילים יווניות שכבר אתה מכיר", "en": "Greek words you already know"}, "b": {"he": "הרבה מילים בעברית באו מיוונית: אקדמיה, טלפון, תיאטרון, פילוסופיה, אוויר (אאר), סנדל, ואפילו \"אפוטרופוס\" ו\"סנהדרין\". גם באנגלית: problem, music, hotel. תזהה הרבה מהן בשלטים.", "en": "Many Hebrew and English words come from Greek: academy, telephone, theatre, philosophy, music, problem — you'll spot them on signs."}, "ex": [["Το θέατρο", "to theatro", "טו תאטרו", "התיאטרון", "The theatre"]]}
  ],
  note: {"he": "האלפבית היווני — 24 אותיות, ורבות מהן מוכרות מהמתמטיקה ומהמדע (π, Σ, Δ, α, β). שים לב לאותיות \"מטעות\": Ρ = ר, Η = אִי, Ν = נ, Β = ו (V). הסימן ´ מעל תנועה (τόνος) מראה איפה ההטעמה.", "en": "The Greek alphabet has 24 letters, many familiar from maths and science (π, Σ, Δ, α, β). Watch the \"false friends\": Ρ = r, Η = ee, Ν = n, Β = v. The ´ mark (tonos) shows the stressed syllable.", "ru": "Греческий алфавит — 24 буквы, многие знакомы по математике (π, Σ, Δ, α, β). Осторожно: Ρ = р, Η = и, Ν = н, Β = в. Знак ´ показывает ударение.", "es": "El alfabeto griego tiene 24 letras, muchas conocidas por las matemáticas (π, Σ, Δ, α, β). Cuidado: Ρ = r, Η = i, Ν = n, Β = v. El signo ´ marca el acento.", "ar": "الأبجدية اليونانية 24 حرفا، كثير منها مألوف من الرياضيات (π, Σ, Δ, α, β). انتبه: Ρ = ر، Η = إي، Ν = ن، Β = ف (V). علامة ´ تبيّن موضع النبر."},
  vowelNote: {"he": "ביוונית צירופי אותיות יוצרים צליל אחד: ου = אוּ, αι = אֶ, ει / οι = אִי. μπ = ב, ντ = ד, γκ / γγ = ג / נג. αυ / ευ = אב / אף.", "en": "Letter pairs make one sound: ου = oo, αι = e, ει / οι = ee. μπ = b, ντ = d, γκ / γγ = g / ng. αυ / ευ = av/af, ev/ef.", "ru": "Сочетания дают один звук: ου = у, αι = э, ει / οι = и. μπ = б, ντ = д, γκ / γγ = г / нг. αυ / ευ = ав/аф, эв/эф.", "es": "Las parejas de letras forman un sonido: ου = u, αι = e, ει / οι = i. μπ = b, ντ = d, γκ / γγ = g / ng. αυ / ευ = av/af, ev/ef.", "ar": "أزواج الحروف تصنع صوتا واحدا: ου = أو، αι = إي، ει / οι = إي. μπ = ب، ντ = د، γκ / γγ = غ / نغ."},
  alpha: [
    ["Α α", "άλφα", "אַ", "alfa"],
    ["Β β", "βήτα", "ו (V)", "vita"],
    ["Γ γ", "γάμμα", "ע׳ רכה / י (לפני e, i)", "gama"],
    ["Δ δ", "δέλτα", "ד׳ (th כמו this)", "delta"],
    ["Ε ε", "έψιλον", "אֶ", "epsilon"],
    ["Ζ ζ", "ζήτα", "ז", "zita"],
    ["Η η", "ήτα", "אִי", "ita"],
    ["Θ θ", "θήτα", "ת׳ (th כמו think)", "thita"],
    ["Ι ι", "γιώτα", "אִי", "giota"],
    ["Κ κ", "κάππα", "ק", "kapa"],
    ["Λ λ", "λάμδα", "ל", "lamda"],
    ["Μ μ", "μι", "מ", "mi"],
    ["Ν ν", "νι", "נ", "ni"],
    ["Ξ ξ", "ξι", "קס", "xi"],
    ["Ο ο", "όμικρον", "אוֹ", "omikron"],
    ["Π π", "πι", "פּ", "pi"],
    ["Ρ ρ", "ρο", "ר מתגלגלת", "ro"],
    ["Σ σ ς", "σίγμα", "ס (ς בסוף מילה)", "sigma"],
    ["Τ τ", "ταυ", "ט", "taf"],
    ["Υ υ", "ύψιλον", "אִי", "ipsilon"],
    ["Φ φ", "φι", "פ", "fi"],
    ["Χ χ", "χι", "ח", "chi"],
    ["Ψ ψ", "ψι", "פּס", "psi"],
    ["Ω ω", "ωμέγα", "אוֹ", "omega"]
  ],
  vowels: [
    ["ου", "ου", "אוּ (πού = פו)", "ou"],
    ["αι", "αι", "אֶ (και = קה)", "ai"],
    ["ει", "ει", "אִי (είναι = אינה)", "ei"],
    ["οι", "οι", "אִי (οικογένεια)", "oi"],
    ["αυ", "αυ", "אַב / אַף (αύριο = אבריו)", "av / af"],
    ["ευ", "ευ", "אֶב / אֶף (ευχαριστώ = אפחריסטו)", "ev / ef"],
    ["μπ", "μπ", "ב / מב (μπίρα = בירה)", "b"],
    ["ντ", "ντ", "ד / נד (ντομάτα = דומטה)", "d"],
    ["γκ / γγ", "γγ", "ג / נג (αγγούρι = אנגורי)", "g / ng"],
    ["τσ", "τσ", "צ (τσάι = צאי)", "ts"],
    ["τζ", "τζ", "דז (μελιτζάνα)", "dz"]
  ],
  /* speaker = female: [regex source, flags, replacement] */
  gender: [["αλλεργικός", "g", "αλλεργική"], ["allergikos", "g", "allergiki"], ["אלרגיקוס", "g", "אלרגיקי"]],
  words: `hello|Γεια σας|ya sas|יאסאס
bye|Αντίο|adio|אדיו
morning|Καλημέρα|kalimera|קלימרה
thanks|Ευχαριστώ|efcharisto|אפחריסטו
please|Παρακαλώ|parakalo|פרקלו
sorry|Συγγνώμη|signomi|סיגנומי
yes|Ναι|ne|נה
no|Όχι|ochi|אוחי
howareyou|Τι κάνετε;|ti kanete?|טי קנטה
good|Καλά|kala|קלה
ok|Εντάξει|entaxi|אנדקסי
n1|Ένα|ena|אנה
n2|Δύο|dio|דיו
n3|Τρία|tria|טריה
n4|Τέσσερα|tessera|טסרה
n5|Πέντε|pente|פנדה
n6|Έξι|exi|אקסי
n7|Επτά|efta|אפטה
n8|Οκτώ|ochto|אוכטו
n9|Εννιά|ennia|אניה
n10|Δέκα|deka|דקה
n0|Μηδέν|miden|מידן
n20|Είκοσι|ikosi|איקוסי
n50|Πενήντα|peninta|פנינדה
n100|Εκατό|ekato|אקטו
n1000|Χίλια|chilia|חיליה
n11|Έντεκα|enteka|אנדקה
n12|Δώδεκα|dodeka|דודקה
n13|Δεκατρία|dekatria|דקטריה
n14|Δεκατέσσερα|dekatessera|דקטסרה
n15|Δεκαπέντε|dekapente|דקפנדה
n16|Δεκαέξι|dekaexi|דקאקסי
n17|Δεκαεπτά|dekaefta|דקאפטה
n18|Δεκαοχτώ|dekaochto|דקאוכטו
n19|Δεκαεννιά|dekaennia|דקאניה
n30|Τριάντα|trianta|טריאנדה
n40|Σαράντα|saranta|סרנדה
n60|Εξήντα|exinta|אקסינדה
n70|Εβδομήντα|evdominta|אבדומינדה
n80|Ογδόντα|ogdonta|אוגדונדה
n90|Ενενήντα|eneninta|אננינדה
n200|Διακόσια|diakosia|דיאקוסיה
n500|Πεντακόσια|pentakosia|פנדקוסיה
n10000|Δέκα χιλιάδες|deka chiliades|דקה חיליאדס
water|Νερό|nero|נרו
toilet|Η τουαλέτα|i toualeta|י טואלטה
where|Πού;|pou?|פו
howmuch|Πόσο;|poso?|פוסו
this|Αυτό|afto|אפטו
friend|Φίλος|filos|פילוס
food|Το φαγητό|to fagito|טו פאיטו
bread|Το ψωμί|to psomi|טו פסומי
coffee|Ο καφές|o kafes|או קפס
tea|Το τσάι|to tsai|טו צאי
chicken|Το κοτόπουλο|to kotopoulo|טו קוטופולו
fish|Το ψάρι|to psari|טו פסרי
rice|Το ρύζι|to rizi|טו ריזי
beer|Η μπίρα|i bira|י בירה
bill|Ο λογαριασμός|o logariasmos|או לוגריאזמוס
tasty|Νόστιμο|nostimo|נוסטימו
egg|Το αυγό|to avgo|טו אבגו
fruit|Τα φρούτα|ta frouta|טה פרוטה
veg|Τα λαχανικά|ta lachanika|טה לחניקה
meat|Το κρέας|to kreas|טו קראס
milk|Το γάλα|to gala|טו גאלה
spicy|Καυτερό|kaftero|קפטרו
restaurant|Το εστιατόριο|to estiatorio|טו אסטיאטוריו
ice|Ο πάγος|o pagos|או פאגוס
taxi|Το ταξί|to taxi|טו טקסי
bus|Το λεωφορείο|to leoforio|טו לאופוריו
train|Το τρένο|to treno|טו טרנו
airport|Το αεροδρόμιο|to aerodromio|טו אארודרומיו
hotel|Το ξενοδοχείο|to xenodochio|טו קסנודוחיו
left|Αριστερά|aristera|אריסטרה
right|Δεξιά|dexia|דקסיה
straight|Ευθεία|efthia|אפתיה
stop|Σταματήστε|stamatiste|סטמטיסטה
ticket|Το εισιτήριο|to isitirio|טו איסיטיריו
money|Τα λεφτά|ta lefta|טה לפטה
expensive|Ακριβό|akrivo|אקריבו
cheap|Φτηνό|ftino|פטינו
market|Η αγορά|i agora|י אגורה
pharmacy|Το φαρμακείο|to farmakio|טו פרמקיו
open|Ανοιχτό|anichto|אניחטו
closed|Κλειστό|klisto|קליסטו
help|Βοήθεια!|voithia|בואיתיה
police|Η αστυνομία|i astinomia|י אסטינומיה
doctor|Ο γιατρός|o giatros|או יאטרוס
hospital|Το νοσοκομείο|to nosokomio|טו נוסוקומיו
today|Σήμερα|simera|סימרה
tomorrow|Αύριο|avrio|אבריו
yesterday|Χθες|chthes|חתס
now|Τώρα|tora|טורה
t_morning|Το πρωί|to proi|טו פרואי
t_evening|Το βράδυ|to vradi|טו ברדי
t_night|Η νύχτα|i nichta|י ניחטה
t_week|Η εβδομάδα|i evdomada|י אבדומדה
t_month|Ο μήνας|o minas|או מינס
t_year|Ο χρόνος|o chronos|או חרונוס
t_hour|Η ώρα|i ora|י אורה
t_minute|Το λεπτό|to lepto|טו לפטו
p_toilet|Πού είναι η τουαλέτα;|pou ine i toualeta?|פו אינה י טואלטה
p_cost|Πόσο κάνει;|poso kani?|פוסו קני
p_nounder|Δεν καταλαβαίνω|den katalaveno|דן קטלבנו
p_english|Μιλάτε αγγλικά;|milate anglika?|מילטה אנגליקה
p_slow|Μιλήστε πιο αργά, παρακαλώ|miliste pio arga, parakalo|מיליסטה פיו ארגה, פרקלו
p_bill|Τον λογαριασμό, παρακαλώ|ton logariasmo, parakalo|טון לוגריאזמו, פרקלו
p_want|Θέλω αυτό|thelo afto|תלו אפטו
p_expensive|Είναι πολύ ακριβό|ine poli akrivo|אינה פולי אקריבו
p_discount|Μπορείτε να κάνετε έκπτωση;|borite na kanete ekptosi?|בוריטה נה קנטה אקפטוסי
p_address|Πηγαίνετέ με σε αυτή τη διεύθυνση, παρακαλώ|pigenete me se afti ti diefthinsi, parakalo|פיינטה מה סה אפטי טי דיאפתינסי, פרקלו
p_hotel|Πού είναι το ξενοδοχείο;|pou ine to xenodochio?|פו אינה טו קסנודוחיו
p_doctor|Χρειάζομαι γιατρό|chriazome giatro|חריאזומה יאטרו
p_police|Καλέστε την αστυνομία!|kaleste tin astinomia!|קלסטה טין אסטינומיה
p_israel|Είμαι από το Ισραήλ|ime apo to Israil|אימה אפו טו איזראיל
p_name|Με λένε ...|me lene|מה לנה
p_nice|Χάρηκα|charika|חריקה
p_water|Νερό, παρακαλώ|nero, parakalo|נרו, פרקלו
p_help|Μπορείτε να με βοηθήσετε;|borite na me voithisete?|בוריטה נה מה בואיתיסטה
p_what|Τι είναι αυτό;|ti ine afto?|טי אינה אפטו
p_nospicy|Όχι καυτερό, παρακαλώ|ochi kaftero, parakalo|אוחי קפטרו, פרקלו
room|Το δωμάτιο|to domatio|טו דומטיו
key|Το κλειδί|to klidi|טו קלידי
bed|Το κρεβάτι|to krevati|טו קרבטי
shower|Το ντους|to ntous|טו דוס
towel|Η πετσέτα|i petseta|י פצטה
passport|Το διαβατήριο|to diavatirio|טו דיאבטיריו
mon|Δευτέρα|Deftera|דפטרה
tue|Τρίτη|Triti|טריטי
wed|Τετάρτη|Tetarti|טטרטי
thu|Πέμπτη|Pempti|פמפטי
fri|Παρασκευή|Paraskevi|פרסקבי
sat|Σάββατο|Savvato|סבטו
sun|Κυριακή|Kiriaki|קיריאקי
red|Κόκκινο|kokkino|קוקינו
blue|Μπλε|ble|בלה
green|Πράσινο|prasino|פרסינו
yellow|Κίτρινο|kitrino|קיטרינו
black|Μαύρο|mavro|מברו
white|Άσπρο|aspro|אספרו
man|Ο άντρας|o antras|או אנדרס
woman|Η γυναίκα|i gynaika|י יינקה
child|Το παιδί|to pedi|טו פדי
family|Η οικογένεια|i ikogenia|י איקויניה
i|Εγώ|ego|אגו
you|Εσείς|esis|אסיס
head|Το κεφάλι|to kefali|טו קפלי
stomach|Η κοιλιά|i kilia|י קיליה
hand|Το χέρι|to cheri|טו חרי
pain|Ο πόνος|o ponos|או פונוס
medicine|Το φάρμακο|to farmako|טו פרמקו
sick|Άρρωστος|arrostos|ארוסטוס
big|Μεγάλο|megalo|מגאלו
small|Μικρό|mikro|מיקרו
hot|Ζεστό|zesto|זסטו
cold|Κρύο|krio|קריו
bad|Κακό|kako|קקו
beautiful|Όμορφο|omorfo|אומורפו
new|Καινούργιο|kenourgio|קנורייו
old|Παλιό|palio|פליו
fast|Γρήγορα|grigora|גריגורה
slow|Αργά|arga|ארגה
near|Κοντά|konta|קונדה
far_a|Μακριά|makria|מקריה
clean|Καθαρό|katharo|קתרו
dirty|Βρώμικο|vromiko|ברומיקו
tired|Κουρασμένος|kourasmenos|קורזמנוס
hungry|Πεινάω|pinao|פינאו
thirsty|Διψάω|dipsao|דיפסאו
happy|Χαρούμενος|charoumenos|חרומנוס
sad|Λυπημένος|lipimenos|ליפימנוס
easy|Εύκολο|efkolo|אפקולו
difficult|Δύσκολο|diskolo|דיסקולו
many|Πολύ|poli|פולי
eat|Τρώω|troo|טרואו
drink|Πίνω|pino|פינו
go|Πηγαίνω|pigeno|פיינו
buy|Αγοράζω|agorazo|אגורזו
speak|Μιλάω|milao|מילאו
sleep|Κοιμάμαι|kimame|קימאמה
understand|Καταλαβαίνω|katalaveno|קטלבנו
come|Έρχομαι|erchome|ארחומה
want|Θέλω|thelo|תלו
need|Χρειάζομαι|chriazome|חריאזומה
know|Ξέρω|xero|קסרו
see|Βλέπω|vlepo|בלפו
hear|Ακούω|akouo|אקואו
give|Δίνω|dino|דינו
take|Παίρνω|perno|פרנו
pay|Πληρώνω|plirono|פלירונו
wait|Περιμένω|perimeno|פרימנו
walk|Περπατάω|perpatao|פרפטאו
read|Διαβάζω|diavazo|דיאבזו
write|Γράφω|grafo|גרפו
love|Αγαπώ|agapo|אגפו
work|Δουλεύω|doulevo|דולבו
swim|Κολυμπάω|kolimbao|קולימבאו
c_table|Ένα τραπέζι για δύο, παρακαλώ|ena trapezi gia dio, parakalo|אנה טרפזי יה דיו, פרקלו
c_menu|Τον κατάλογο, παρακαλώ|ton katalogo, parakalo|טון קטלוגו, פרקלו
c_noice|Χωρίς πάγο, παρακαλώ|choris pago, parakalo|חוריס פאגו, פרקלו
c_nomeat|Δεν τρώω κρέας|den troo kreas|דן טרואו קראס
c_allergy|Είμαι αλλεργικός στους ξηρούς καρπούς|ime allergikos stous xirous karpous|אימה אלרגיקוס סטוס קסירוס קרפוס
c_delicious|Πολύ νόστιμο!|poli nostimo!|פולי נוסטימו
c_reserv|Έχω κράτηση|echo kratisi|אחו קרטיסי
c_wifi|Ποιος είναι ο κωδικός του wifi;|pios ine o kodikos tou wifi?|פיוס אינה או קודיקוס טו וויפי
c_checkout|Τι ώρα είναι το check-out;|ti ora ine to check-out?|טי אורה אינה טו צ׳ק-אאוט
c_howget|Πώς πάω εκεί;|pos pao eki?|פוס פאו אקי
c_stophere|Σταματήστε εδώ, παρακαλώ|stamatiste edo, parakalo|סטמטיסטה אדו, פרקלו
c_far|Είναι μακριά;|ine makria?|אינה מקריה
c_card|Μπορώ να πληρώσω με κάρτα;|boro na pliroso me karta?|בורו נה פלירוסו מה קרטה
c_looking|Απλώς κοιτάω, ευχαριστώ|aplos kitao, efcharisto|אפלוס קיטאו, אפחריסטו
c_yourname|Πώς σας λένε;|pos sas lene?|פוס סאס לנה
c_wherefrom|Από πού είστε;|apo pou iste?|אפו פו איסטה
c_seeyou|Τα λέμε αργότερα|ta leme argotera|טה למה ארגוטרה
c_cheers|Γεια μας!|ya mas!|יאמאס
c_lost|Χάθηκα|chathika|חתיקה
c_passport|Έχασα το διαβατήριό μου|echasa to diavatirio mou|אחסה טו דיאבטיריו מו
c_hurts|Πονάει εδώ|ponai edo|פונאי אדו
c_time|Τι ώρα είναι;|ti ora ine?|טי אורה אינה
c_again|Μπορείτε να το επαναλάβετε;|borite na to epanalavete?|בוריטה נה טו אפנלבטה
c_write|Μπορείτε να το γράψετε;|borite na to grapsete?|בוריטה נה טו גרפסטה
dog|Ο σκύλος|o skilos|או סקילוס
cat|Η γάτα|i gata|י גאטה
bird|Το πουλί|to pouli|טו פולי
horse|Το άλογο|to alogo|טו אלוגו
cow|Η αγελάδα|i agelada|י איילדה
pig|Το γουρούνι|to gourouni|טו גורוני
elephant|Ο ελέφαντας|o elefantas|או אלפנדס
monkey|Η μαϊμού|i maimou|י מאימו
snake|Το φίδι|to fidi|טו פידי
mosquito|Το κουνούπι|to kounoupi|טו קונופי
lion|Το λιοντάρι|to liontari|טו ליונדרי
duck|Η πάπια|i papia|י פאפיה
apple|Το μήλο|to milo|טו מילו
banana|Η μπανάνα|i banana|י בננה
orange|Το πορτοκάλι|to portokali|טו פורטוקלי
mango|Το μάνγκο|to mango|טו מנגו
pineapple|Ο ανανάς|o ananas|או אננס
watermelon|Το καρπούζι|to karpouzi|טו קרפוזי
coconut|Η καρύδα|i karida|י קרידה
grapes|Τα σταφύλια|ta stafilia|טה סטפיליה
lemon|Το λεμόνι|to lemoni|טו למוני
strawberry|Η φράουλα|i fraoula|י פראולה
papaya|Η παπάγια|i papagia|י פפאיה
tomato|Η ντομάτα|i ntomata|י דומטה
potato|Η πατάτα|i patata|י פטטה
onion|Το κρεμμύδι|to kremmidi|טו קרמידי
garlic|Το σκόρδο|to skordo|טו סקורדו
cucumber|Το αγγούρι|to angouri|טו אנגורי
carrot|Το καρότο|to karoto|טו קרוטו
chili|Η καυτερή πιπεριά|i kafteri piperia|י קפטרי פיפריה
corn|Το καλαμπόκι|to kalamboki|טו קלמבוקי
mushroom|Το μανιτάρι|to manitari|טו מניטרי
lettuce|Το μαρούλι|to marouli|טו מרולי
eggplant|Η μελιτζάνα|i melitzana|י מלידזנה
soup|Η σούπα|i soupa|י סופה
salad|Η σαλάτα|i salata|י סלטה
noodles|Τα μακαρόνια|ta makaronia|טה מקרוניה
cheese|Το τυρί|to tiri|טו טירי
butter|Το βούτυρο|to voutiro|טו בוטירו
salt|Το αλάτι|to alati|טו אלטי
sugar|Η ζάχαρη|i zachari|י זחרי
cake|Το κέικ|to keik|טו קייק
icecream|Το παγωτό|to pagoto|טו פגוטו
juice|Ο χυμός|o chimos|או חימוס
wine|Το κρασί|to krasi|טו קרסי
breakfast|Το πρωινό|to proino|טו פרואינו
lunch|Το μεσημεριανό|to mesimeriano|טו מסימריאנו
dinner|Το βραδινό|to vradino|טו ברדינו
fork|Το πιρούνι|to pirouni|טו פירוני
spoon|Το κουτάλι|to koutali|טו קוטלי
knife|Το μαχαίρι|to macheri|טו מחרי
glass|Το ποτήρι|to potiri|טו פוטירי
plate|Το πιάτο|to piato|טו פיאטו
bank|Η τράπεζα|i trapeza|י טרפזה
atm|Το ΑΤΜ|to ATM|טו איי-טי-אם
beach|Η παραλία|i paralia|י פרליה
museum|Το μουσείο|to mousio|טו מוסיו
temple|Ο ναός|o naos|או נאוס
street|Ο δρόμος|o dromos|או דרומוס
city|Η πόλη|i poli|י פולי
shop|Το μαγαζί|to magazi|טו מגזי
supermarket|Το σούπερ μάρκετ|to super market|טו סופר מרקט
park|Το πάρκο|to parko|טו פרקו
station|Ο σταθμός|o stathmos|או סטתמוס
embassy|Η πρεσβεία|i presvia|י פרזביה
phone|Το κινητό|to kinito|טו קיניטו
charger|Ο φορτιστής|o fortistis|או פורטיסטיס
bag|Η τσάντα|i tsanta|י צנדה
shoes|Τα παπούτσια|ta papoutsia|טה פפוציה
clothes|Τα ρούχα|ta roucha|טה רוחה
hat|Το καπέλο|to kapelo|טו קפלו
glasses|Τα γυαλιά|ta gialia|טה יאליה
map|Ο χάρτης|o chartis|או חרטיס
sunscreen|Το αντηλιακό|to antiliako|טו אנדיליאקו
umbrella|Η ομπρέλα|i ombrela|י אומברלה
sf_order|Θα ήθελα να παραγγείλω|tha ithela na parangilo|תה איתלה נה פרנגילו
sf_recommend|Τι μου προτείνετε;|ti mou protinete?|טי מו פרוטינטה
sf_bottle|Ένα μπουκάλι νερό, παρακαλώ|ena boukali nero, parakalo|אנה בוקלי נרו, פרקלו
sf_isspicy|Είναι καυτερό;|ine kaftero?|אינה קפטרו
sf_onemore|Άλλο ένα, παρακαλώ|allo ena, parakalo|אלו אנה, פרקלו
sf_nosugar|Χωρίς ζάχαρη, παρακαλώ|choris zachari, parakalo|חוריס זחרי, פרקלו
sf_takeaway|Για πακέτο, παρακαλώ|gia paketo, parakalo|יה פקטו, פרקלו
ss_smaller|Έχετε μικρότερο νούμερο;|echete mikrotero noumero?|אחטה מיקרוטרו נומרו
ss_try|Μπορώ να το δοκιμάσω;|boro na to dokimaso?|בורו נה טו דוקימסו
ss_two|Θα πάρω δύο|tha paro dio|תה פארו דיו
ss_change|Έχετε ψιλά;|echete psila?|אחטה פסילה
ss_last|Ποια είναι η τελική τιμή;|pia ine i teliki timi?|פיה אינה י טליקי טימי
ss_bag|Μπορώ να έχω μια σακούλα;|boro na echo mia sakoula?|בורו נה אחו מיה סקולה
sm_busstop|Πού είναι η στάση του λεωφορείου;|pou ine i stasi tou leoforiou?|פו אינה י סטסי טו לאופוריו
sm_trainleave|Τι ώρα φεύγει το τρένο;|ti ora fevgi to treno?|טי אורה פבגי טו טרנו
sm_oneticket|Ένα εισιτήριο, παρακαλώ|ena isitirio, parakalo|אנה איסיטיריו, פרקלו
sm_howlong|Πόση ώρα κάνει;|posi ora kani?|פוסי אורה קני
sm_meter|Βάλτε το ταξίμετρο, παρακαλώ|valte to taximetro, parakalo|בלטה טו טקסימטרו, פרקלו
sm_slowdrive|Οδηγήστε πιο αργά, παρακαλώ|odigiste pio arga, parakalo|אודיגיסטה פיו ארגה, פרקלו
sm_airport|Θέλω να πάω στο αεροδρόμιο|thelo na pao sto aerodromio|תלו נה פאו סטו אארודרומיו
sh_leavebag|Μπορώ να αφήσω την τσάντα μου εδώ;|boro na afiso tin tsanta mou edo?|בורו נה אפיסו טין צנדה מו אדו
sh_ac|Το κλιματιστικό δεν λειτουργεί|to klimatistiko den litourgi|טו קלימטיסטיקו דן ליטורגי
sh_breakfast|Περιλαμβάνεται το πρωινό;|perilamvanete to proino?|פרילמבנטה טו פרואינו
sh_towel|Χρειάζομαι άλλη μια πετσέτα|chriazome alli mia petseta|חריאזומה אלי מיה פצטה
sh_taxi|Μπορείτε να μου καλέσετε ταξί;|borite na mou kalesete taxi?|בוריטה נה מו קלסטה טקסי
sh_late|Μπορώ να φύγω αργότερα;|boro na figo argotera?|בורו נה פיגו ארגוטרה
so_learning|Μαθαίνω ελληνικά|matheno ellinika|מתנו אליניקה
so_thankshelp|Ευχαριστώ πολύ για τη βοήθεια|efcharisto poli gia ti voithia|אפחריסטו פולי יה טי בואיתיה
so_photo|Μπορείτε να μας βγάλετε μια φωτογραφία;|borite na mas vgalete mia fotografia?|בוריטה נה מאס בגלטה מיה פוטוגרפיה
so_like|Μου αρέσει αυτό το μέρος|mou aresi afto to meros|מו ארסי אפטו טו מרוס
so_vacation|Είμαι εδώ για διακοπές|ime edo gia diakopes|אימה אדו יה דיאקופס
so_howsay|Πώς το λέτε αυτό;|pos to lete afto?|פוס טו לטה אפטו
so_noproblem|Κανένα πρόβλημα|kanena provlima|קננה פרובלימה
so_beautiful|Είναι πανέμορφο!|ine panemorfo!|אינה פנמורפו
sp_unwell|Δεν αισθάνομαι καλά|den esthanome kala|דן אסתנומה קלה
sp_nearhosp|Πού είναι το πιο κοντινό νοσοκομείο;|pou ine to pio kontino nosokomio?|פו אינה טו פיו קונדינו נוסוקומיו
sp_fever|Έχω πυρετό|echo pireto|אחו פירטו
sp_helpme|Βοηθήστε με, παρακαλώ|voithiste me, parakalo|בואיתיסטה מה, פרקלו
sp_stolen|Μου έκλεψαν την τσάντα|mou eklepsan tin tsanta|מו אקלפסן טין צנדה
sp_embassy|Χρειάζομαι την πρεσβεία του Ισραήλ|chriazome tin presvia tou Israil|חריאזומה טין פרזביה טו איזראיל
dt1|Πού πάμε;|pou pame?|פו פאמה
dt2|Σε αυτό το ξενοδοχείο, παρακαλώ.|se afto to xenodochio, parakalo.|סה אפטו טו קסנודוחיו, פרקלו
dt3|Εντάξει, ανεβείτε.|entaxi, anevite.|אנדקסי, אנביטה
dt4|Πόσο κάνει;|poso kani?|פוסו קני
dt5|Διακόσια ευρώ.|diakosia evro.|דיאקוסיה אברו
dt6|Βάλτε το ταξίμετρο, παρακαλώ.|valte to taximetro, parakalo.|בלטה טו טקסימטרו, פרקלו
dt7|Κανένα πρόβλημα.|kanena provlima.|קננה פרובלימה
dt8|Σταματήστε εδώ, ευχαριστώ.|stamatiste edo, efcharisto.|סטמטיסטה אדו, אפחריסטו
dm1|Πόσο κάνει αυτό;|poso kani afto?|פוסו קני אפטו
dm2|Τριακόσια.|triakosia.|טריאקוסיה
dm3|Πολύ ακριβό! Διακόσια;|poli akrivo! diakosia?|פולי אקריבו! דיאקוסיה
dm4|Διακόσια πενήντα, τελευταία τιμή.|diakosia peninta, teleftea timi.|דיאקוסיה פנינדה, טלפטאה טימי
dm5|Εντάξει, το παίρνω.|entaxi, to perno.|אנדקסי, טו פרנו
dm6|Ευχαριστώ πολύ!|efcharisto poli!|אפחריסטו פולי
dr1|Πόσα άτομα;|posa atoma?|פוסה אטומה
dr2|Δύο, παρακαλώ.|dio, parakalo.|דיו, פרקלו
dr3|Τι θα πάρετε;|ti tha parete?|טי תה פרטה
dr4|Τηγανητό ρύζι με κοτόπουλο, όχι καυτερό.|tiganito rizi me kotopoulo, ochi kaftero.|טיגניטו ריזי מה קוטופולו, אוחי קפטרו
dr5|Και να πιείτε;|ke na piite?|קה נה פיאיטה
dr6|Μόνο νερό, παρακαλώ.|mono nero, parakalo.|מונו נרו, פרקלו
dr7|Τον λογαριασμό, παρακαλώ.|ton logariasmo, parakalo.|טון לוגריאזמו, פרקלו
dh1|Γεια σας, έχω κράτηση.|ya sas, echo kratisi.|יאסאס, אחו קרטיסי
dh2|Σε ποιο όνομα;|se pio onoma?|סה פיו אונומה
dh3|Στο όνομα ...|sto onoma|סטו אונומה
dh4|Το διαβατήριό σας, παρακαλώ.|to diavatirio sas, parakalo.|טו דיאבטיריו סאס, פרקלו
dh5|Το δωμάτιό σας είναι το τριακόσια πέντε.|to domatio sas ine to triakosia pente.|טו דומטיו סאס אינה טו טריאקוסיה פנדה
dh6|Τι ώρα είναι το πρωινό;|ti ora ine to proino?|טי אורה אינה טו פרואינו
dh7|Από τις επτά έως τις δέκα.|apo tis efta eos tis deka.|אפו טיס אפטה אאוס טיס דקה
dd1|Συγγνώμη, πού είναι ο σταθμός;|signomi, pou ine o stathmos?|סיגנומי, פו אינה או סטתמוס
dd2|Ευθεία και μετά αριστερά.|efthia ke meta aristera.|אפתיה קה מטה אריסטרה
dd3|Είναι μακριά από εδώ;|ine makria apo edo?|אינה מקריה אפו אדו
dd4|Όχι, πέντε λεπτά με τα πόδια.|ochi, pente lepta me ta podia.|אוחי, פנדה לפטה מה טה פודיה
dd5|Ευχαριστώ πάρα πολύ!|efcharisto para poli!|אפחריסטו פרה פולי
w_weather|Ο καιρός|o keros|או קרוס
w_sun|Ο ήλιος|o ilios|או איליוס
w_rain|Η βροχή|i vrochi|י ברוחי
w_wind|Ο αέρας|o aeras|או אארס
w_cloud|Το σύννεφο|to sinnefo|טו סינפו
w_snow|Το χιόνι|to chioni|טו חיוני
w_storm|Η καταιγίδα|i kategida|י קטאייידה
w_humid|Υγρό|igro|איגרו
j_teacher|Ο δάσκαλος|o daskalos|או דסקלוס
j_driver|Ο οδηγός|o odigos|או אודיגוס
j_waiter|Ο σερβιτόρος|o servitoros|או סרביטורוס
j_cook|Ο μάγειρας|o mageiras|או מאיירס
j_student|Ο φοιτητής|o fititis|או פיטיטיס
j_engineer|Ο μηχανικός|o michanikos|או מיחניקוס
j_nurse|Η νοσοκόμα|i nosokoma|י נוסוקומה
j_seller|Ο πωλητής|o politis|או פוליטיס
j_guide|Ο ξεναγός|o xenagos|או קסנגוס
j_pharmacist|Ο φαρμακοποιός|o farmakopios|או פרמקופיוס
e_angry|Θυμωμένος|thimomenos|תימומנוס
e_scared|Φοβισμένος|fovismenos|פוביזמנוס
e_bored|Βαριέμαι|varieme|בריאמה
e_worried|Ανήσυχος|anisichos|אניסיחוס
e_surprised|Έκπληκτος|ekpliktos|אקפליקטוס
e_calm|Ήρεμος|iremos|אירמוס
e_excited|Ενθουσιασμένος|enthousiasmenos|אנתוסיאזמנוס
e_love|Ερωτευμένος|erotevmenos|ארוטבמנוס
dir_north|Βορράς|vorras|בורס
dir_south|Νότος|notos|נוטוס
dir_east|Ανατολή|anatoli|אנטולי
dir_west|Δύση|disi|דיסי
dir_corner|Η γωνία|i gonia|י גוניה
dir_light|Το φανάρι|to fanari|טו פנרי
dir_behind|Πίσω|piso|פיסו
dir_front|Μπροστά|brosta|ברוסטה
dir_next|Δίπλα|dipla|דיפלה
dir_back|Πίσω (γυρίστε)|piso (giriste)|פיסו (יריסטה)
dir_up|Πάνω|pano|פאנו
dir_down|Κάτω|kato|קאטו`
});

/* ---- numbers & prices (0–999,999) → tokens [text, roman, hebrew]. Thousands use feminine forms (τρεις χιλιάδες) ---- */
NW.el = (() => {
  const O = [['μηδέν', 'miden', 'מידן'], ['ένα', 'ena', 'אנה'], ['δύο', 'dio', 'דיו'], ['τρία', 'tria', 'טריה'], ['τέσσερα', 'tessera', 'טסרה'], ['πέντε', 'pente', 'פנדה'], ['έξι', 'exi', 'אקסי'], ['επτά', 'efta', 'אפטה'], ['οκτώ', 'ochto', 'אוכטו'], ['εννιά', 'ennia', 'אניה'],
    ['δέκα', 'deka', 'דקה'], ['έντεκα', 'enteka', 'אנדקה'], ['δώδεκα', 'dodeka', 'דודקה'], ['δεκατρία', 'dekatria', 'דקטריה'], ['δεκατέσσερα', 'dekatessera', 'דקטסרה'], ['δεκαπέντε', 'dekapente', 'דקפנדה'], ['δεκαέξι', 'dekaexi', 'דקאקסי'], ['δεκαεπτά', 'dekaefta', 'דקאפטה'], ['δεκαοχτώ', 'dekaochto', 'דקאוכטו'], ['δεκαεννιά', 'dekaennia', 'דקאניה']];
  const F = { 1: ['μία', 'mia', 'מיה'], 3: ['τρεις', 'tris', 'טריס'], 4: ['τέσσερις', 'tesseris', 'טסריס'], 13: ['δεκατρείς', 'dekatris', 'דקטריס'], 14: ['δεκατέσσερις', 'dekatesseris', 'דקטסריס'] };
  const T = [, , ['είκοσι', 'ikosi', 'איקוסי'], ['τριάντα', 'trianta', 'טריאנדה'], ['σαράντα', 'saranta', 'סרנדה'], ['πενήντα', 'peninta', 'פנינדה'], ['εξήντα', 'exinta', 'אקסינדה'], ['εβδομήντα', 'evdominta', 'אבדומינדה'], ['ογδόντα', 'ogdonta', 'אוגדונדה'], ['ενενήντα', 'eneninta', 'אננינדה']];
  const C = [, ['εκατό', 'ekato', 'אקטו'], ['διακόσια', 'diakosia', 'דיאקוסיה'], ['τριακόσια', 'triakosia', 'טריאקוסיה'], ['τετρακόσια', 'tetrakosia', 'טטרקוסיה'], ['πεντακόσια', 'pentakosia', 'פנדקוסיה'], ['εξακόσια', 'exakosia', 'אקסקוסיה'], ['επτακόσια', 'eftakosia', 'אפטקוסיה'], ['οκτακόσια', 'ochtakosia', 'אוכטקוסיה'], ['εννιακόσια', 'enniakosia', 'אניאקוסיה']];
  const fem = a => [a[0].replace(/ια$/, 'ιες'), a[1].replace(/ia$/, 'ies'), a[2].replace(/יה$/, 'יאס')];
  function u100(n, out, f) {
    if (!n) return;
    if (n < 20) { out.push(f && F[n] ? F[n] : O[n]); return; }
    out.push(T[Math.floor(n / 10)]);
    const u = n % 10; if (u) out.push(f && F[u] ? F[u] : O[u]);
  }
  function u1000(n, out, f) {
    const h = Math.floor(n / 100), r = n % 100;
    if (h) out.push(h === 1 ? (r ? ['εκατόν', 'ekaton', 'אקטון'] : C[1]) : (f ? fem(C[h]) : C[h]));
    u100(r, out, f);
  }
  return (n, cur) => {
    const out = [];
    if (n === 0) out.push(O[0]);
    else {
      const th = Math.floor(n / 1000), r = n % 1000;
      if (th === 1) out.push(['χίλια', 'chilia', 'חיליה']);
      else if (th) { u1000(th, out, true); out.push(['χιλιάδες', 'chiliades', 'חיליאדס']); }
      u1000(r, out, false);
    }
    if (cur) out.push(['ευρώ', 'evro', 'אברו']);
    return out.map(a => tk(a[0], a[1], a[2]));
  };
})();
NUM.el = { tokens: (n, cur) => NW.el(n, cur) };
