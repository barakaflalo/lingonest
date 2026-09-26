/* ===== LingoNest — lang-ja.js : Japanese content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('ja', {
  ver: '1.16.0',
  curSym: "¥",
  country: {"he": "יפן", "en": "Japan", "ru": "Япония", "es": "Japón", "ar": "اليابان"},
  emergency: [
    ["🚓", {"he": "משטרה", "en": "Police", "ru": "Полиция", "es": "Policía", "ar": "الشرطة"}, "110"],
    ["🚑", {"he": "אמבולנס וכבאות", "en": "Ambulance & fire", "ru": "Скорая и пожарные", "es": "Ambulancia y bomberos", "ar": "الإسعاف والإطفاء"}, "119"],
    ["ℹ️", {"he": "קו מידע לתיירים (אנגלית, 24/7)", "en": "Japan Visitor Hotline (English, 24/7)", "ru": "Линия для туристов (англ., 24/7)", "es": "Línea para visitantes (inglés, 24/7)", "ar": "خط الزوار (بالإنجليزية، 24/7)"}, "050-3816-2787"]
  ],
  tips: [
    {"t": {"he": "すみません — המילה שעושה הכול", "en": "すみません — the do-everything word"}, "b": {"he": "סומימסן = סליחה, תודה (\"סליחה שטרחת\"), וגם \"אפשר רגע?\" כשקוראים למלצר. אם יש מילה אחת לזכור ביפן — זו היא.", "en": "sumimasen = excuse me, sorry, thank-you-for-the-trouble, and \"excuse me!\" to call a waiter. If you remember one word in Japan, make it this."}, "ex": [["すみません！", "sumimasen!", "סומימסן", "סליחה! / אפשר רגע?", "Excuse me!"]]},
    {"t": {"he": "です / ます — לדבר בנימוס", "en": "desu / masu — speaking politely"}, "b": {"he": "משפט מנומס ביפנית נגמר ב-です (דס) או ב-ます (מס). ה-u בסוף כמעט לא נשמעת. כתייר תמיד מדברים בצורה הזו — היא מתאימה לכל אחד.", "en": "Polite sentences end in です (desu) or ます (masu); the final u is barely heard. As a visitor always use this form."}, "ex": [["おいしいです", "oishii desu", "אוישי דס", "טעים (מנומס)", "It's delicious (polite)"]]},
    {"t": {"he": "הפועל בסוף המשפט", "en": "The verb comes last"}, "b": {"he": "סדר המילים ביפנית: מי – מה – פועל. \"אני מים שותה\". מילים קטנות אחרי המילה מסמנות את תפקידה: は (ווה) = הנושא, を (או) = מה, に (ני) = לאן.", "en": "Word order is subject–object–verb: \"I water drink\". Small particles mark roles: は (wa) topic, を (o) object, に (ni) destination."}, "ex": [["水を飲みます", "mizu o nomimasu", "מיזו או נומימס", "אני שותה מים", "I drink water"]]},
    {"t": {"he": "קטקאנה = מילים שאתה כבר מכיר", "en": "Katakana = words you already know"}, "b": {"he": "מילים לועזיות ביפנית מקבלות תנועה אחרי כל עיצור: ホテル = הוטרו (hotel), ビール = בירו, アイスクリーム = אאיסוקורימו. נסה לקרוא שלטים בקטקאנה ולנחש — זה עובד מפתיע טוב.", "en": "Foreign words get a vowel after each consonant: ホテル = hoteru, ビール = bīru, アイスクリーム = aisukurīmu. Try reading katakana signs and guessing — it works surprisingly well."}, "ex": [["コーヒー", "kōhī", "קוהי", "קפה", "Coffee"], ["タクシー", "takushī", "טקושי", "מונית", "Taxi"]]},
    {"t": {"he": "נימוסים שחשוב לדעת", "en": "Etiquette worth knowing"}, "b": {"he": "לא נותנים טיפ — זה עלול להביך. חולצים נעליים בבתים, במקדשים ובחלק מהמסעדות. ברכבות מדברים בשקט ולא בטלפון. משלמים דרך המגש הקטן בקופה, לא ביד.", "en": "No tipping — it can embarrass. Shoes off in homes, temples and some restaurants. Trains are quiet — no phone calls. Put money on the small tray at the till."}, "ex": [["ごちそうさまでした", "gochisōsama deshita", "גוצ׳יסוסמה דשטה", "תודה על הארוחה", "Thanks for the meal"]]},
    {"t": {"he": "いただきます ו-ごちそうさま", "en": "itadakimasu and gochisōsama"}, "b": {"he": "לפני אוכל אומרים いただきます (איטדקימס — \"אני מקבל בהכרת תודה\"), ואחרי — ごちそうさまでした. אם תגיד את זה במסעדה, יחייכו אליך.", "en": "Before eating say いただきます (itadakimasu), after — ごちそうさまでした. Say it in a restaurant and you'll get smiles."}, "ex": [["いただきます", "itadakimasu", "איטדקימס", "בתיאבון (לפני האוכל)", "Let's eat (before a meal)"]]}
  ],
  note: {"he": "ביפנית שלוש מערכות כתב, ומשתמשים בכולן יחד: הִירָגָנָה (46 סימנים, למילים יפניות ולסיומות), קָטָקָנָה (46 סימנים, למילים לועזיות כמו ホテル = הוטרו) וקַנְגִ׳י (סימנים סיניים עם משמעות). כל סימן קאנה הוא הברה: か = קַ, き = קִי. מתחילים מהירגנה.", "en": "Japanese uses three scripts together: hiragana (46 signs, Japanese words and endings), katakana (46 signs, foreign words like ホテル = hoteru) and kanji (Chinese characters with meaning). Each kana is a syllable: か = ka. Start with hiragana.", "ru": "В японском три письменности: хирагана (46 знаков), катакана (46 знаков, для иностранных слов, ホテル = хотэру) и кандзи. Каждый знак каны — слог. Начните с хираганы.", "es": "El japonés usa tres escrituras juntas: hiragana (46 signos), katakana (46 signos, para palabras extranjeras: ホテル = hoteru) y kanji. Cada kana es una sílaba. Empieza por el hiragana.", "ar": "تستخدم اليابانية ثلاث كتابات معا: هيراغانا (46 رمزا)، كاتاكانا (46 رمزا للكلمات الأجنبية: ホテル = هوتيرو) وكانجي. كل رمز كانا مقطع. ابدأ بالهيراغانا."},
  vowelNote: {"he": "קטקאנה משמשת למילים שבאו משפות אחרות — ולכן היא החברה הכי טובה של תייר: コーヒー = קוהי (קפה), タクシー = טקושי (מונית), ビール = בירו (בירה). אותם צלילים כמו בהירגנה, צורה אחרת. הקו ー מאריך תנועה.", "en": "Katakana is used for loanwords — a traveller's best friend: コーヒー = kōhī (coffee), タクシー = takushī (taxi), ビール = bīru (beer). Same sounds as hiragana, different shapes. The dash ー lengthens a vowel.", "ru": "Катакана — для заимствований: コーヒー = кохи (кофе), タクシー = такуси. Те же звуки, что в хирагане. Черта ー удлиняет гласную.", "es": "El katakana es para préstamos: コーヒー = kōhī (café), タクシー = takushī. Mismos sonidos que el hiragana. La raya ー alarga la vocal.", "ar": "الكاتاكانا للكلمات الدخيلة: コーヒー = كوهي (قهوة)، タクシー = تاكوشي. نفس أصوات الهيراغانا بشكل مختلف. الخط ー يمد الحركة."},
  alpha: [
    ["あ", "あ", "אַ", "a"],
    ["い", "い", "אִי", "i"],
    ["う", "う", "אוּ", "u"],
    ["え", "え", "אֶ", "e"],
    ["お", "お", "אוֹ", "o"],
    ["か", "か", "קַ", "ka"],
    ["き", "き", "קִי", "ki"],
    ["く", "く", "קוּ", "ku"],
    ["け", "け", "קֶ", "ke"],
    ["こ", "こ", "קוֹ", "ko"],
    ["さ", "さ", "סַ", "sa"],
    ["し", "し", "שִי", "shi"],
    ["す", "す", "סוּ", "su"],
    ["せ", "せ", "סֶ", "se"],
    ["そ", "そ", "סוֹ", "so"],
    ["た", "た", "טַ", "ta"],
    ["ち", "ち", "צ׳ִי", "chi"],
    ["つ", "つ", "צוּ", "tsu"],
    ["て", "て", "טֶ", "te"],
    ["と", "と", "טוֹ", "to"],
    ["な", "な", "נַ", "na"],
    ["に", "に", "נִי", "ni"],
    ["ぬ", "ぬ", "נוּ", "nu"],
    ["ね", "ね", "נֶ", "ne"],
    ["の", "の", "נוֹ", "no"],
    ["は", "は", "הַ", "ha"],
    ["ひ", "ひ", "הִי", "hi"],
    ["ふ", "ふ", "פוּ", "fu"],
    ["へ", "へ", "הֶ", "he"],
    ["ほ", "ほ", "הוֹ", "ho"],
    ["ま", "ま", "מַ", "ma"],
    ["み", "み", "מִי", "mi"],
    ["む", "む", "מוּ", "mu"],
    ["め", "め", "מֶ", "me"],
    ["も", "も", "מוֹ", "mo"],
    ["や", "や", "יַ", "ya"],
    ["ゆ", "ゆ", "יוּ", "yu"],
    ["よ", "よ", "יוֹ", "yo"],
    ["ら", "ら", "רַ", "ra"],
    ["り", "り", "רִי", "ri"],
    ["る", "る", "רוּ", "ru"],
    ["れ", "れ", "רֶ", "re"],
    ["ろ", "ろ", "רוֹ", "ro"],
    ["わ", "わ", "וַה", "wa"],
    ["を", "を", "אוֹ (מילת יחס)", "wo"],
    ["ん", "ん", "נ (בסוף הברה)", "n"]
  ],
  vowels: [
    ["ア", "ア", "אַ", "a"],
    ["イ", "イ", "אִי", "i"],
    ["ウ", "ウ", "אוּ", "u"],
    ["エ", "エ", "אֶ", "e"],
    ["オ", "オ", "אוֹ", "o"],
    ["カ", "カ", "קַ", "ka"],
    ["キ", "キ", "קִי", "ki"],
    ["ク", "ク", "קוּ", "ku"],
    ["ケ", "ケ", "קֶ", "ke"],
    ["コ", "コ", "קוֹ", "ko"],
    ["サ", "サ", "סַ", "sa"],
    ["シ", "シ", "שִי", "shi"],
    ["ス", "ス", "סוּ", "su"],
    ["セ", "セ", "סֶ", "se"],
    ["ソ", "ソ", "סוֹ", "so"],
    ["タ", "タ", "טַ", "ta"],
    ["チ", "チ", "צ׳ִי", "chi"],
    ["ツ", "ツ", "צוּ", "tsu"],
    ["テ", "テ", "טֶ", "te"],
    ["ト", "ト", "טוֹ", "to"],
    ["ナ", "ナ", "נַ", "na"],
    ["ニ", "ニ", "נִי", "ni"],
    ["ヌ", "ヌ", "נוּ", "nu"],
    ["ネ", "ネ", "נֶ", "ne"],
    ["ノ", "ノ", "נוֹ", "no"],
    ["ハ", "ハ", "הַ", "ha"],
    ["ヒ", "ヒ", "הִי", "hi"],
    ["フ", "フ", "פוּ", "fu"],
    ["ヘ", "ヘ", "הֶ", "he"],
    ["ホ", "ホ", "הוֹ", "ho"],
    ["マ", "マ", "מַ", "ma"],
    ["ミ", "ミ", "מִי", "mi"],
    ["ム", "ム", "מוּ", "mu"],
    ["メ", "メ", "מֶ", "me"],
    ["モ", "モ", "מוֹ", "mo"],
    ["ヤ", "ヤ", "יַ", "ya"],
    ["ユ", "ユ", "יוּ", "yu"],
    ["ヨ", "ヨ", "יוֹ", "yo"],
    ["ラ", "ラ", "רַ", "ra"],
    ["リ", "リ", "רִי", "ri"],
    ["ル", "ル", "רוּ", "ru"],
    ["レ", "レ", "רֶ", "re"],
    ["ロ", "ロ", "רוֹ", "ro"],
    ["ワ", "ワ", "וַה", "wa"],
    ["ヲ", "ヲ", "אוֹ (מילת יחס)", "wo"],
    ["ン", "ン", "נ (בסוף הברה)", "n"]
  ],
  vowelsTitle: {"he": "קטקאנה", "en": "Katakana", "ru": "Катакана", "es": "Katakana", "ar": "كاتاكانا"},
  /* speaker = female: [regex source, flags, replacement] */
  gender: [],
  words: `hello|こんにちは|konnichiwa|קוניצ׳יווה
bye|さようなら|sayōnara|סאיונרה
morning|おはようございます|ohayō gozaimasu|אוהאיו גוזאימס
thanks|ありがとうございます|arigatō gozaimasu|אריגאטו גוזאימס
please|お願いします|onegai shimasu|אונגאי שימס
sorry|すみません|sumimasen|סומימסן
yes|はい|hai|האי
no|いいえ|iie|אייה
howareyou|お元気ですか？|o-genki desu ka?|או-גנקי דס קה
good|いいです|ii desu|אי דס
ok|大丈夫です|daijōbu desu|דאיג׳ובו דס
n1|一|ichi|איצ׳י
n2|二|ni|ני
n3|三|san|סאן
n4|四|yon|יון
n5|五|go|גו
n6|六|roku|רוקו
n7|七|nana|ננה
n8|八|hachi|האצ׳י
n9|九|kyū|קיו
n10|十|jū|ג׳ו
n0|ゼロ|zero|זרו
n20|二十|nijū|ניג׳ו
n50|五十|gojū|גוג׳ו
n100|百|hyaku|היאקו
n1000|千|sen|סן
n11|十一|jūichi|ג׳ואיצ׳י
n12|十二|jūni|ג׳וני
n13|十三|jūsan|ג׳וסאן
n14|十四|jūyon|ג׳ויון
n15|十五|jūgo|ג׳וגו
n16|十六|jūroku|ג׳ורוקו
n17|十七|jūnana|ג׳וננה
n18|十八|jūhachi|ג׳והאצ׳י
n19|十九|jūkyū|ג׳וקיו
n30|三十|sanjū|סאנג׳ו
n40|四十|yonjū|יונג׳ו
n60|六十|rokujū|רוקוג׳ו
n70|七十|nanajū|ננג׳ו
n80|八十|hachijū|האצ׳יג׳ו
n90|九十|kyūjū|קיוג׳ו
n200|二百|nihyaku|ניהיאקו
n500|五百|gohyaku|גוהיאקו
n10000|一万|ichiman|איצ׳ימן
water|水|mizu|מיזו
toilet|トイレ|toire|טוירה
where|どこ？|doko?|דוקו
howmuch|いくら？|ikura?|איקורה
this|これ|kore|קורה
friend|友達|tomodachi|טומודאצ׳י
food|食べ物|tabemono|טבמונו
bread|パン|pan|פאן
coffee|コーヒー|kōhī|קוהי
tea|お茶|o-cha|או-צ׳ה
chicken|鶏肉|toriniku|טוריניקו
fish|魚|sakana|סקנה
rice|ご飯|gohan|גוהאן
beer|ビール|bīru|בירו
bill|お会計|o-kaikei|או-קאיקיי
tasty|おいしい|oishii|אוישי
egg|卵|tamago|טמגו
fruit|果物|kudamono|קודמונו
veg|野菜|yasai|יאסאי
meat|肉|niku|ניקו
milk|牛乳|gyūnyū|גיוניו
spicy|辛い|karai|קראי
restaurant|レストラン|resutoran|רסוטורן
ice|氷|kōri|קורי
taxi|タクシー|takushī|טקושי
bus|バス|basu|באסו
train|電車|densha|דנשה
airport|空港|kūkō|קוקו
hotel|ホテル|hoteru|הוטרו
left|左|hidari|הידארי
right|右|migi|מיגי
straight|まっすぐ|massugu|מסוגו
stop|止まって|tomatte|טומטה
ticket|切符|kippu|קיפו
money|お金|o-kane|או-קנה
expensive|高い|takai|טקאי
cheap|安い|yasui|יאסוי
market|市場|ichiba|איצ׳יבה
pharmacy|薬局|yakkyoku|יאקיוקו
open|営業中|eigyōchū|איגיוצ׳ו
closed|閉店|heiten|הייטן
help|助けて！|tasukete!|טסקטה
police|警察|keisatsu|קייסצו
doctor|医者|isha|אישה
hospital|病院|byōin|ביואין
today|今日|kyō|קיו
tomorrow|明日|ashita|אשטה
yesterday|昨日|kinō|קינו
now|今|ima|אימה
t_morning|朝|asa|אסה
t_evening|夕方|yūgata|יוגאטה
t_night|夜|yoru|יורו
t_week|一週間|isshūkan|אישוקאן
t_month|一か月|ikkagetsu|איקגצו
t_year|一年|ichinen|איצ׳ינן
t_hour|一時間|ichijikan|איצ׳יג׳יקאן
t_minute|一分|ippun|איפון
p_toilet|トイレはどこですか？|toire wa doko desu ka?|טוירה ווה דוקו דס קה
p_cost|いくらですか？|ikura desu ka?|איקורה דס קה
p_nounder|分かりません|wakarimasen|וואקרימסן
p_english|英語を話せますか？|eigo o hanasemasu ka?|איגו או הנסמס קה
p_slow|ゆっくり話してください|yukkuri hanashite kudasai|יוקורי הנשטה קודסאי
p_bill|お会計お願いします|o-kaikei onegai shimasu|או-קאיקיי אונגאי שימס
p_want|これをください|kore o kudasai|קורה או קודסאי
p_expensive|高すぎます|takasugimasu|טקסוגימס
p_discount|安くなりますか？|yasuku narimasu ka?|יאסוקו נרימס קה
p_address|この住所までお願いします|kono jūsho made onegai shimasu|קונו ג׳ושו מדה אונגאי שימס
p_hotel|ホテルはどこですか？|hoteru wa doko desu ka?|הוטרו ווה דוקו דס קה
p_doctor|医者が必要です|isha ga hitsuyō desu|אישה גה היצויו דס
p_police|警察を呼んでください！|keisatsu o yonde kudasai!|קייסצו או יונדה קודסאי
p_israel|イスラエルから来ました|Isuraeru kara kimashita|איסוראירו קרה קימשטה
p_name|私の名前は…です|watashi no namae wa ... desu|ווטשי נו נמאה ווה ... דס
p_nice|はじめまして|hajimemashite|האג׳ימהמשטה
p_water|お水をお願いします|o-mizu o onegai shimasu|או-מיזו או אונגאי שימס
p_help|手伝ってもらえますか？|tetsudatte moraemasu ka?|טצודטה מוראמס קה
p_what|これは何ですか？|kore wa nan desu ka?|קורה ווה נאן דס קה
p_nospicy|辛くしないでください|karaku shinaide kudasai|קרקו שינאידה קודסאי
room|部屋|heya|הייה
key|鍵|kagi|קגי
bed|ベッド|beddo|בדו
shower|シャワー|shawā|שווא
towel|タオル|taoru|טאורו
passport|パスポート|pasupōto|פסופוטו
mon|月曜日|getsuyōbi|גצויובי
tue|火曜日|kayōbi|קאיובי
wed|水曜日|suiyōbi|סויובי
thu|木曜日|mokuyōbi|מוקויובי
fri|金曜日|kin'yōbi|קיניובי
sat|土曜日|doyōbi|דויובי
sun|日曜日|nichiyōbi|ניצ׳יובי
red|赤|aka|אקה
blue|青|ao|אאו
green|緑|midori|מידורי
yellow|黄色|kiiro|קיירו
black|黒|kuro|קורו
white|白|shiro|שירו
man|男の人|otoko no hito|אוטוקו נו היטו
woman|女の人|onna no hito|אונה נו היטו
child|子供|kodomo|קודומו
family|家族|kazoku|קזוקו
i|私|watashi|ווטשי
you|あなた|anata|אנטה
head|頭|atama|אטמה
stomach|お腹|onaka|אונקה
hand|手|te|טה
pain|痛み|itami|איטמי
medicine|薬|kusuri|קוסורי
sick|病気|byōki|ביוקי
big|大きい|ōkii|אוקי
small|小さい|chiisai|צ׳יסאי
hot|暑い|atsui|אצוי
cold|寒い|samui|סמוי
bad|悪い|warui|ווארוי
beautiful|きれい|kirei|קיריי
new|新しい|atarashii|אטרשי
old|古い|furui|פורוי
fast|速い|hayai|האיאי
slow|遅い|osoi|אוסוי
near|近い|chikai|צ׳יקאי
far_a|遠い|tōi|טואי
clean|清潔|seiketsu|סייקצו
dirty|汚い|kitanai|קיטנאי
tired|疲れた|tsukareta|צוקרטה
hungry|お腹が空いた|onaka ga suita|אונקה גה סויטה
thirsty|喉が渇いた|nodo ga kawaita|נודו גה קוואיטה
happy|嬉しい|ureshii|אורשי
sad|悲しい|kanashii|קנשי
easy|簡単|kantan|קנטן
difficult|難しい|muzukashii|מוזוקשי
many|たくさん|takusan|טקוסן
eat|食べる|taberu|טברו
drink|飲む|nomu|נומו
go|行く|iku|איקו
buy|買う|kau|קאו
speak|話す|hanasu|הנסו
sleep|寝る|neru|נרו
understand|分かる|wakaru|וואקרו
come|来る|kuru|קורו
want|欲しい|hoshii|הושי
need|必要|hitsuyō|היצויו
know|知る|shiru|שירו
see|見る|miru|מירו
hear|聞く|kiku|קיקו
give|あげる|ageru|אגרו
take|取る|toru|טורו
pay|払う|harau|הראו
wait|待つ|matsu|מצו
walk|歩く|aruku|ארוקו
read|読む|yomu|יומו
write|書く|kaku|קקו
love|愛する|aisuru|אאיסורו
work|働く|hataraku|הטרקו
swim|泳ぐ|oyogu|אויוגו
c_table|二人です|futari desu|פוטארי דס
c_menu|メニューをお願いします|menyū o onegai shimasu|מניו או אונגאי שימס
c_noice|氷なしでお願いします|kōri nashi de onegai shimasu|קורי נשי דה אונגאי שימס
c_nomeat|肉は食べません|niku wa tabemasen|ניקו ווה טבמסן
c_allergy|ナッツアレルギーがあります|nattsu arerugī ga arimasu|נצו ארורוגי גה ארימס
c_delicious|とてもおいしいです！|totemo oishii desu!|טוטמו אוישי דס
c_reserv|予約しています|yoyaku shite imasu|יויאקו שטה אימס
c_wifi|Wi-Fiのパスワードは何ですか？|waifai no pasuwādo wa nan desu ka?|וואיפאי נו פסוואדו ווה נאן דס קה
c_checkout|チェックアウトは何時ですか？|chekkuauto wa nanji desu ka?|צ׳קואאוטו ווה נאנג׳י דס קה
c_howget|どうやって行きますか？|dō yatte ikimasu ka?|דו יאטה איקימס קה
c_stophere|ここで止めてください|koko de tomete kudasai|קוקו דה טומטה קודסאי
c_far|遠いですか？|tōi desu ka?|טואי דס קה
c_card|カードで払えますか？|kādo de haraemasu ka?|קאדו דה הראמס קה
c_looking|見ているだけです|mite iru dake desu|מיטה אירו דקה דס
c_yourname|お名前は？|o-namae wa?|או-נמאה ווה
c_wherefrom|どちらから来ましたか？|dochira kara kimashita ka?|דוצ׳ירה קרה קימשטה קה
c_seeyou|また後で|mata ato de|מטה אטו דה
c_cheers|乾杯！|kanpai!|קנפאי
c_lost|道に迷いました|michi ni mayoimashita|מיצ׳י ני מאיוימשטה
c_passport|パスポートをなくしました|pasupōto o nakushimashita|פסופוטו או נקושימשטה
c_hurts|ここが痛いです|koko ga itai desu|קוקו גה איטאי דס
c_time|今何時ですか？|ima nanji desu ka?|אימה נאנג׳י דס קה
c_again|もう一度お願いします|mō ichido onegai shimasu|מו איצ׳ידו אונגאי שימס
c_write|書いてもらえますか？|kaite moraemasu ka?|קאיטה מוראמס קה
dog|犬|inu|אינו
cat|猫|neko|נקו
bird|鳥|tori|טורי
horse|馬|uma|אומה
cow|牛|ushi|אושי
pig|豚|buta|בוטה
elephant|象|zō|זו
monkey|猿|saru|סרו
snake|蛇|hebi|הבי
mosquito|蚊|ka|קה
lion|ライオン|raion|ראיון
duck|アヒル|ahiru|אהירו
apple|りんご|ringo|רינגו
banana|バナナ|banana|בננה
orange|オレンジ|orenji|אורנג׳י
mango|マンゴー|mangō|מנגו
pineapple|パイナップル|painappuru|פאינאפורו
watermelon|スイカ|suika|סויקה
coconut|ココナッツ|kokonattsu|קוקונצו
grapes|ぶどう|budō|בודו
lemon|レモン|remon|רמון
strawberry|いちご|ichigo|איצ׳יגו
papaya|パパイヤ|papaiya|פפאיה
tomato|トマト|tomato|טומטו
potato|じゃがいも|jagaimo|ג׳אגאימו
onion|玉ねぎ|tamanegi|טמנגי
garlic|にんにく|ninniku|ניניקו
cucumber|きゅうり|kyūri|קיורי
carrot|にんじん|ninjin|נינג׳ין
chili|唐辛子|tōgarashi|טוגרשי
corn|とうもろこし|tōmorokoshi|טומורוקושי
mushroom|きのこ|kinoko|קינוקו
lettuce|レタス|retasu|רטסו
eggplant|なす|nasu|נסו
soup|スープ|sūpu|סופו
salad|サラダ|sarada|סרדה
noodles|麺|men|מן
cheese|チーズ|chīzu|צ׳יזו
butter|バター|batā|בטא
salt|塩|shio|שיו
sugar|砂糖|satō|סאטו
cake|ケーキ|kēki|קקי
icecream|アイスクリーム|aisukurīmu|אאיסוקורימו
juice|ジュース|jūsu|ג׳וסו
wine|ワイン|wain|וואין
breakfast|朝ご飯|asagohan|אסגוהאן
lunch|昼ご飯|hirugohan|הירוגוהאן
dinner|晩ご飯|bangohan|באנגוהאן
fork|フォーク|fōku|פוקו
spoon|スプーン|supūn|סופון
knife|ナイフ|naifu|נאיפו
glass|コップ|koppu|קופו
plate|お皿|o-sara|או-סרה
bank|銀行|ginkō|גינקו
atm|ATM|ē-tī-emu|איי-טי-אמו
beach|ビーチ|bīchi|ביצ׳י
museum|博物館|hakubutsukan|הקובוצוקאן
temple|お寺|o-tera|או-טרה
street|通り|tōri|טורי
city|町|machi|מצ׳י
shop|店|mise|מיסה
supermarket|スーパー|sūpā|סופא
park|公園|kōen|קואן
station|駅|eki|אקי
embassy|大使館|taishikan|טאישיקאן
phone|携帯|keitai|קייטאי
charger|充電器|jūdenki|ג׳ודנקי
bag|かばん|kaban|קבאן
shoes|靴|kutsu|קוצו
clothes|服|fuku|פוקו
hat|帽子|bōshi|בושי
glasses|眼鏡|megane|מגנה
map|地図|chizu|צ׳יזו
sunscreen|日焼け止め|hiyakedome|היאקהדומה
umbrella|傘|kasa|קסה
sf_order|注文お願いします|chūmon onegai shimasu|צ׳ומון אונגאי שימס
sf_recommend|おすすめは何ですか？|osusume wa nan desu ka?|אוסוסומה ווה נאן דס קה
sf_bottle|水を一本お願いします|mizu o ippon onegai shimasu|מיזו או איפון אונגאי שימס
sf_isspicy|これは辛いですか？|kore wa karai desu ka?|קורה ווה קראי דס קה
sf_onemore|もう一つお願いします|mō hitotsu onegai shimasu|מו היטוצו אונגאי שימס
sf_nosugar|砂糖なしでお願いします|satō nashi de onegai shimasu|סאטו נשי דה אונגאי שימס
sf_takeaway|持ち帰りでお願いします|mochikaeri de onegai shimasu|מוצ׳יקאארי דה אונגאי שימס
ss_smaller|もっと小さいサイズはありますか？|motto chiisai saizu wa arimasu ka?|מוטו צ׳יסאי סאיזו ווה ארימס קה
ss_try|試着してもいいですか？|shichaku shite mo ii desu ka?|שיצ׳אקו שטה מו אי דס קה
ss_two|二つください|futatsu kudasai|פוטצו קודסאי
ss_change|お釣りはありますか？|o-tsuri wa arimasu ka?|או-צורי ווה ארימס קה
ss_last|全部でいくらですか？|zenbu de ikura desu ka?|זנבו דה איקורה דס קה
ss_bag|袋をもらえますか？|fukuro o moraemasu ka?|פוקורו או מוראמס קה
sm_busstop|バス停はどこですか？|basutei wa doko desu ka?|בסוטיי ווה דוקו דס קה
sm_trainleave|電車は何時に出ますか？|densha wa nanji ni demasu ka?|דנשה ווה נאנג׳י ני דמס קה
sm_oneticket|切符を一枚お願いします|kippu o ichimai onegai shimasu|קיפו או איצ׳ימאי אונגאי שימס
sm_howlong|どのくらいかかりますか？|dono kurai kakarimasu ka?|דונו קוראי קקרימס קה
sm_meter|メーターを使ってください|mētā o tsukatte kudasai|מטא או צוקטה קודסאי
sm_slowdrive|ゆっくり運転してください|yukkuri unten shite kudasai|יוקורי אונטן שטה קודסאי
sm_airport|空港まで行きたいです|kūkō made ikitai desu|קוקו מדה איקיטאי דס
sh_leavebag|荷物を預けてもいいですか？|nimotsu o azukete mo ii desu ka?|נימוצו או אזוקטה מו אי דס קה
sh_ac|エアコンが動きません|eakon ga ugokimasen|אאקון גה אוגוקימסן
sh_breakfast|朝食は付いていますか？|chōshoku wa tsuite imasu ka?|צ׳ושוקו ווה צויטה אימס קה
sh_towel|タオルをもう一枚ください|taoru o mō ichimai kudasai|טאורו או מו איצ׳ימאי קודסאי
sh_taxi|タクシーを呼んでもらえますか？|takushī o yonde moraemasu ka?|טקושי או יונדה מוראמס קה
sh_late|チェックアウトを遅くできますか？|chekkuauto o osoku dekimasu ka?|צ׳קואאוטו או אוסוקו דקימס קה
so_learning|日本語を勉強しています|nihongo o benkyō shite imasu|ניהונגו או בנקיו שטה אימס
so_thankshelp|助けてくれてありがとうございます|tasukete kurete arigatō gozaimasu|טסקטה קורטה אריגאטו גוזאימס
so_photo|写真を撮ってもらえますか？|shashin o totte moraemasu ka?|שאשין או טוטה מוראמס קה
so_like|ここが好きです|koko ga suki desu|קוקו גה סקי דס
so_vacation|休暇で来ています|kyūka de kite imasu|קיוקה דה קיטה אימס
so_howsay|これは何と言いますか？|kore wa nan to iimasu ka?|קורה ווה נאן טו איימס קה
so_noproblem|問題ありません|mondai arimasen|מונדאי ארימסן
so_beautiful|とてもきれいです！|totemo kirei desu!|טוטמו קיריי דס
sp_unwell|気分が悪いです|kibun ga warui desu|קיבון גה ווארוי דס
sp_nearhosp|一番近い病院はどこですか？|ichiban chikai byōin wa doko desu ka?|איצ׳יבן צ׳יקאי ביואין ווה דוקו דס קה
sp_fever|熱があります|netsu ga arimasu|נצו גה ארימס
sp_helpme|助けてください|tasukete kudasai|טסקטה קודסאי
sp_stolen|かばんを盗まれました|kaban o nusumaremashita|קבאן או נוסומרמשטה
sp_embassy|イスラエル大使館に行きたいです|Isuraeru taishikan ni ikitai desu|איסוראירו טאישיקאן ני איקיטאי דס
dt1|どちらまで？|dochira made?|דוצ׳ירה מדה
dt2|このホテルまでお願いします。|kono hoteru made onegai shimasu.|קונו הוטרו מדה אונגאי שימס
dt3|はい、どうぞ。|hai, dōzo.|האי, דוזו
dt4|いくらですか。|ikura desu ka.|איקורה דס קה
dt5|二百円です。|nihyaku en desu.|ניהיאקו אן דס
dt6|メーターを使ってください。|mētā o tsukatte kudasai.|מטא או צוקטה קודסאי
dt7|問題ありません。|mondai arimasen.|מונדאי ארימסן
dt8|ここで止めてください。ありがとう。|koko de tomete kudasai. arigatō.|קוקו דה טומטה קודסאי. אריגאטו
dm1|これはいくらですか？|kore wa ikura desu ka?|קורה ווה איקורה דס קה
dm2|三百円です。|sanbyaku en desu.|סאנביאקו אן דס
dm3|高すぎます！二百円は？|takasugimasu! nihyaku en wa?|טקסוגימס! ניהיאקו אן ווה
dm4|二百五十円、これが最後です。|nihyaku gojū en, kore ga saigo desu.|ניהיאקו גוג׳ו אן, קורה גה סאיגו דס
dm5|じゃあ、それにします。|jā, sore ni shimasu.|ג׳א, סורה ני שימס
dm6|どうもありがとうございます！|dōmo arigatō gozaimasu!|דומו אריגאטו גוזאימס
dr1|何名様ですか？|nanmei-sama desu ka?|נאנמיי-סמה דס קה
dr2|二人です。|futari desu.|פוטארי דס
dr3|ご注文は？|go-chūmon wa?|גו-צ׳ומון ווה
dr4|鶏肉のチャーハン、辛くしないでください。|toriniku no chāhan, karaku shinaide kudasai.|טוריניקו נו צ׳אהאן, קרקו שינאידה קודסאי
dr5|お飲み物は？|o-nomimono wa?|או-נומימונו ווה
dr6|お水だけでお願いします。|o-mizu dake de onegai shimasu.|או-מיזו דקה דה אונגאי שימס
dr7|お会計お願いします。|o-kaikei onegai shimasu.|או-קאיקיי אונגאי שימס
dh1|こんにちは、予約しています。|konnichiwa, yoyaku shite imasu.|קוניצ׳יווה, יויאקו שטה אימס
dh2|お名前をお願いします。|o-namae o onegai shimasu.|או-נמאה או אונגאי שימס
dh3|…です。|... desu.|... דס
dh4|パスポートをお願いします。|pasupōto o onegai shimasu.|פסופוטו או אונגאי שימס
dh5|お部屋は三〇五号室です。|o-heya wa san-maru-go gōshitsu desu.|או-הייה ווה סאן-מרו-גו גושיצו דס
dh6|朝食は何時ですか？|chōshoku wa nanji desu ka?|צ׳ושוקו ווה נאנג׳י דס קה
dh7|七時から十時までです。|shichiji kara jūji made desu.|שיצ׳יג׳י קרה ג׳וג׳י מדה דס
dd1|すみません、駅はどこですか？|sumimasen, eki wa doko desu ka?|סומימסן, אקי ווה דוקו דס קה
dd2|まっすぐ行って、左です。|massugu itte, hidari desu.|מסוגו איטה, הידארי דס
dd3|ここから遠いですか？|koko kara tōi desu ka?|קוקו קרה טואי דס קה
dd4|いいえ、歩いて五分です。|iie, aruite go-fun desu.|אייה, ארויטה גו-פון דס
dd5|どうもありがとう！|dōmo arigatō!|דומו אריגאטו
w_weather|天気|tenki|טנקי
w_sun|太陽|taiyō|טאייו
w_rain|雨|ame|אמה
w_wind|風|kaze|קזה
w_cloud|雲|kumo|קומו
w_snow|雪|yuki|יוקי
w_storm|嵐|arashi|ארשי
w_humid|蒸し暑い|mushiatsui|מושיאצוי
j_teacher|先生|sensei|סנסיי
j_driver|運転手|untenshu|אונטנשו
j_waiter|ウェイター|weitā|וייטא
j_cook|料理人|ryōrinin|ריורינין
j_student|学生|gakusei|גקוסיי
j_engineer|エンジニア|enjinia|אנג׳יניה
j_nurse|看護師|kangoshi|קנגושי
j_seller|店員|ten'in|טנאין
j_guide|ガイド|gaido|גאידו
j_pharmacist|薬剤師|yakuzaishi|יאקוזאישי
e_angry|怒っている|okotte iru|אוקוטה אירו
e_scared|怖い|kowai|קוואי
e_bored|退屈|taikutsu|טאיקוצו
e_worried|心配|shinpai|שינפאי
e_surprised|驚いた|odoroita|אודורויטה
e_calm|落ち着いている|ochitsuite iru|אוצ׳יצויטה אירו
e_excited|わくわく|wakuwaku|וואקוואקו
e_love|恋している|koi shite iru|קוי שטה אירו
dir_north|北|kita|קיטה
dir_south|南|minami|מינמי
dir_east|東|higashi|היגשי
dir_west|西|nishi|נישי
dir_corner|角|kado|קדו
dir_light|信号|shingō|שינגו
dir_behind|後ろ|ushiro|אושירו
dir_front|前|mae|מאה
dir_next|隣|tonari|טונרי
dir_back|戻って|modotte|מודוטה
dir_up|上|ue|אואה
dir_down|下|shita|שטה`
});

/* ---- numbers & prices (0–999,999) in Japanese → one token [kanji, rōmaji, hebrew]. Groups of 万 (10,000); sound changes: sanbyaku, roppyaku, happyaku, sanzen, hassen ---- */
NW.ja = (() => {
  const K = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const RM = ['', 'ichi', 'ni', 'san', 'yon', 'go', 'roku', 'nana', 'hachi', 'kyū'];
  const HB = ['', 'איצ׳י', 'ני', 'סאן', 'יון', 'גו', 'רוקו', 'ננה', 'האצ׳י', 'קיו'];
  function u10000(n) {                     /* 1..9999 → [kanji, roman, hebrew] */
    const t = [], r = [], h = [];
    const th = Math.floor(n / 1000), hu = Math.floor(n % 1000 / 100), te = Math.floor(n % 100 / 10), u = n % 10;
    if (th) { t.push((th > 1 ? K[th] : '') + '千'); const s = th === 1 ? ['sen', 'סן'] : th === 3 ? ['sanzen', 'סאנזן'] : th === 8 ? ['hassen', 'האסן'] : [RM[th] + 'sen', HB[th] + 'סן']; r.push(s[0]); h.push(s[1]); }
    if (hu) { t.push((hu > 1 ? K[hu] : '') + '百'); const s = hu === 1 ? ['hyaku', 'היאקו'] : hu === 3 ? ['sanbyaku', 'סאנביאקו'] : hu === 6 ? ['roppyaku', 'רופיאקו'] : hu === 8 ? ['happyaku', 'האפיאקו'] : [RM[hu] + 'hyaku', HB[hu] + 'היאקו']; r.push(s[0]); h.push(s[1]); }
    if (te) { t.push((te > 1 ? K[te] : '') + '十'); r.push((te > 1 ? RM[te] : '') + 'jū'); h.push((te > 1 ? HB[te] : '') + 'ג׳ו'); }
    if (u) { t.push(K[u]); r.push(RM[u]); h.push(HB[u]); }
    return [t.join(''), r.join(' '), h.join(' ')];
  }
  return (n, cur) => {
    let t, r, h;
    if (n === 0) { t = 'ゼロ'; r = 'zero'; h = 'זרו'; }
    else {
      const man = Math.floor(n / 10000), rest = n % 10000, p = [];
      if (man) { const x = u10000(man); p.push([x[0] + '万', x[1].replace(/ /g, '') + 'man', x[2].replace(/ /g, '') + 'מן']); if (man === 1) p[0] = ['一万', 'ichiman', 'איצ׳ימן']; }
      if (rest) p.push(u10000(rest));
      t = p.map(x => x[0]).join(''); r = p.map(x => x[1]).join(' '); h = p.map(x => x[2]).join(' ');
    }
    if (cur) { t += '円'; r += ' en'; h += ' אן'; }
    return [tk(t, r, h)];
  };
})();
NUM.ja = { sep: '', tokens: (n, cur) => NW.ja(n, cur) };
