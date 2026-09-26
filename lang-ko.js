/* ===== LingoNest — lang-ko.js : Korean content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('ko', {
  ver: '1.16.0',
  curSym: "₩",
  country: {"he": "קוריאה הדרומית", "en": "South Korea", "ru": "Южная Корея", "es": "Corea del Sur", "ar": "كوريا الجنوبية"},
  emergency: [
    ["🚓", {"he": "משטרה", "en": "Police", "ru": "Полиция", "es": "Policía", "ar": "الشرطة"}, "112"],
    ["🚑", {"he": "אמבולנס וכבאות", "en": "Ambulance & fire", "ru": "Скорая и пожарные", "es": "Ambulancia y bomberos", "ar": "الإسعاف والإطفاء"}, "119"],
    ["ℹ️", {"he": "קו תיירים (אנגלית, 24/7)", "en": "Tourist hotline (English, 24/7)", "ru": "Линия для туристов (24/7)", "es": "Línea turística (24/7)", "ar": "خط السياح (24/7)"}, "1330"]
  ],
  tips: [
    {"t": {"he": "הַאנְגוּל — לומדים בערב אחד", "en": "Hangul — learn it in an evening"}, "b": {"he": "כל בלוק הוא הברה אחת, בנוי מעיצור + תנועה (+ עיצור סופי). אחרי שמכירים 24 הצורות, אפשר לקרוא כמעט כל שלט — גם אם לא מבינים, הרבה מילים הן אנגלית: 커피 = קופי (coffee), 택시 = טקשי.", "en": "Each block is one syllable: consonant + vowel (+ final consonant). Once you know the 24 shapes you can read almost any sign — and many words are English: 커피 = keopi (coffee), 택시 = taeksi."}, "ex": [["커피", "keopi", "קופי", "קפה", "Coffee"], ["호텔", "hotel", "הוטל", "מלון", "Hotel"]]},
    {"t": {"he": "-요 = נימוס", "en": "-yo = politeness"}, "b": {"he": "רוב המשפטים המנומסים נגמרים ב-요 (יו): 감사해요, 좋아요, 맛있어요. הצורה הרשמית יותר נגמרת ב-니다 (נידה): 감사합니다. כתייר — תמיד עם 요 או 니다.", "en": "Polite sentences end in 요 (yo): 좋아요, 맛있어요. More formal ones end in 니다: 감사합니다. As a visitor, always use one of them."}, "ex": [["감사합니다", "gamsahamnida", "קמסהמנידה", "תודה (רשמי)", "Thank you (formal)"], ["고마워요", "gomawoyo", "קומוואיו", "תודה (מנומס)", "Thanks (polite)"]]},
    {"t": {"he": "주세요 — \"תן לי בבקשה\"", "en": "주세요 — \"please give me\""}, "b": {"he": "אומרים את הדבר ואחריו 주세요 (צ׳וסאיו): 물 주세요 = מים בבקשה, 이거 주세요 = את זה בבקשה. עם זה מזמינים כמעט הכול.", "en": "Say the thing + 주세요 (juseyo): 물 주세요 = water please, 이거 주세요 = this one please. Works for almost everything."}, "ex": [["이거 주세요", "igeo juseyo", "איגו צ׳וסאיו", "את זה בבקשה", "This one, please"]]},
    {"t": {"he": "שתי שיטות מספרים", "en": "Two number systems"}, "b": {"he": "לקוריאנית שתי שיטות: סינית-קוריאנית (일, 이, 삼) למחירים, תאריכים ודקות — וקוריאנית (하나, 둘, 셋) לספירת דברים ולשעות. במחירים ובמסך \"מחירים ומספרים\" — תמיד השיטה הראשונה. 10,000 = 만 (מאן).", "en": "Korean has two systems: Sino-Korean (il, i, sam) for prices, dates and minutes, and native (hana, dul, set) for counting things and hours. Prices always use the first. 10,000 = 만 (man)."}, "ex": [["만 원", "man won", "מאן וון", "10,000 וון", "10,000 won"], ["하나, 둘, 셋", "hana, dul, set", "הנה, טול, סת", "אחת, שתיים, שלוש", "one, two, three"]]},
    {"t": {"he": "הפועל בסוף, ומילות יחס", "en": "Verb last, with particles"}, "b": {"he": "כמו ביפנית: \"אני מים שותה\". מילים קטנות אחרי המילה מסמנות תפקיד: 은/는 (נושא), 을/를 (מה), 에 (לאן).", "en": "Like Japanese: \"I water drink\". Particles after words mark their role: 은/는 topic, 을/를 object, 에 destination."}, "ex": [["물을 마셔요", "mureul masyeoyo", "מורול משיויו", "אני שותה מים", "I drink water"]]},
    {"t": {"he": "נימוסים בקוריאה", "en": "Etiquette in Korea"}, "b": {"he": "מקבלים ונותנים דברים בשתי ידיים (או ביד ימין כשהשמאלית תומכת), במיוחד למבוגרים. לא נותנים טיפ. לפני אוכל אומרים 잘 먹겠습니다, ובמסעדה לא מתחילים לאכול לפני המבוגר בשולחן.", "en": "Give and receive with both hands, especially with elders. No tipping. Before eating say 잘 먹겠습니다, and don't start before the eldest at the table."}, "ex": [["잘 먹겠습니다", "jal meokgetseumnida", "צ׳אל מוקגסומנידה", "בתיאבון (לפני אוכל)", "Let's eat (before a meal)"]]}
  ],
  note: {"he": "האלפבית הקוריאני — הַאנְגוּל — הומצא ב-1443 כדי שיהיה קל ללמוד אותו, ואפשר באמת לקרוא אותו אחרי יום-יומיים. 14 עיצורים בסיסיים ו-10 תנועות, שמסודרים בבלוקים של הברה: ㅎ + ㅏ + ㄴ = 한 (הַן).", "en": "Korean Hangul was invented in 1443 to be easy — you can read it after a day or two. 14 basic consonants and 10 vowels, stacked into syllable blocks: ㅎ + ㅏ + ㄴ = 한 (han).", "ru": "Корейский хангыль создан в 1443 году, чтобы его было легко выучить: 14 согласных и 10 гласных складываются в слоги: ㅎ + ㅏ + ㄴ = 한.", "es": "El hangul coreano se inventó en 1443 para ser fácil: 14 consonantes y 10 vocales que se agrupan en bloques silábicos: ㅎ + ㅏ + ㄴ = 한.", "ar": "اختُرعت الأبجدية الكورية (هانغول) عام 1443 لتكون سهلة: 14 ساكنا و10 حركات تُجمع في مقاطع: ㅎ + ㅏ + ㄴ = 한."},
  vowelNote: {"he": "תנועות נכתבות כקווים עם \"זיז\": ㅏ (אַ), ㅓ (אוֹ פתוחה), ㅗ (אוֹ), ㅜ (אוּ). זיז כפול מוסיף י: ㅑ = יַ. בסוף — שלוש דוגמאות איך אותיות מתחברות לבלוק הברה אחד.", "en": "Vowels are lines with a small stroke: ㅏ (a), ㅓ (eo), ㅗ (o), ㅜ (u). A double stroke adds y: ㅑ = ya. At the end — how letters join into one syllable block.", "ru": "Гласные — линии со штрихом: ㅏ (а), ㅓ (о открытое), ㅗ (о), ㅜ (у). Двойной штрих добавляет й: ㅑ = я.", "es": "Las vocales son líneas con un trazo: ㅏ (a), ㅓ (eo), ㅗ (o), ㅜ (u). Un trazo doble añade y: ㅑ = ya.", "ar": "الحركات خطوط مع نتوء: ㅏ (a) وㅓ (eo) وㅗ (o) وㅜ (u). النتوء المزدوج يضيف ي: ㅑ = يا."},
  alpha: [
    ["ㄱ", "가", "ק / ג", "g / k"],
    ["ㄴ", "나", "נ", "n"],
    ["ㄷ", "다", "ט / ד", "d / t"],
    ["ㄹ", "라", "ר / ל", "r / l"],
    ["ㅁ", "마", "מ", "m"],
    ["ㅂ", "바", "פ / ב", "b / p"],
    ["ㅅ", "사", "ס (ש לפני i)", "s"],
    ["ㅇ", "아", "שקטה בהתחלה / נג בסוף", "- / ng"],
    ["ㅈ", "자", "צ׳ / ג׳", "j"],
    ["ㅊ", "차", "צ׳ נשופה", "ch"],
    ["ㅋ", "카", "ק נשופה", "k"],
    ["ㅌ", "타", "ט נשופה", "t"],
    ["ㅍ", "파", "פּ נשופה", "p"],
    ["ㅎ", "하", "ה", "h"],
    ["ㄲ", "까", "ק חזקה (כפולה)", "kk"],
    ["ㄸ", "따", "ט חזקה", "tt"],
    ["ㅃ", "빠", "פּ חזקה", "pp"],
    ["ㅆ", "싸", "ס חזקה", "ss"],
    ["ㅉ", "짜", "צ׳ חזקה", "jj"]
  ],
  vowels: [
    ["ㅏ", "아", "אַ", "a"],
    ["ㅑ", "야", "יַ", "ya"],
    ["ㅓ", "어", "אוֹ פתוחה (ŏ)", "eo"],
    ["ㅕ", "여", "יוֹ פתוחה", "yeo"],
    ["ㅗ", "오", "אוֹ", "o"],
    ["ㅛ", "요", "יוֹ", "yo"],
    ["ㅜ", "우", "אוּ", "u"],
    ["ㅠ", "유", "יוּ", "yu"],
    ["ㅡ", "으", "אֻ (שפתיים ישרות)", "eu"],
    ["ㅣ", "이", "אִי", "i"],
    ["ㅐ", "애", "אֶ", "ae"],
    ["ㅔ", "에", "אֶ", "e"],
    ["ㅘ", "와", "וָא", "wa"],
    ["ㅝ", "워", "וּוֹ", "wo"],
    ["ㅚ", "외", "וֶה", "oe"],
    ["ㅟ", "위", "וִי", "wi"],
    ["ㅢ", "의", "אֻי", "ui"],
    ["가", "가", "ק + אַ = קַ (בלוק הברה)", "ga"],
    ["한", "한", "ה + אַ + נ = הַן", "han"],
    ["국", "국", "ק + אוּ + ק = קוּק", "guk"]
  ],
  /* speaker = female: [regex source, flags, replacement] */
  gender: [],
  words: `hello|안녕하세요|annyeonghaseyo|אניונג-הסאיו
bye|안녕히 계세요|annyeonghi gyeseyo|אניונג-הי גיסאיו
morning|좋은 아침이에요|joeun achimieyo|צ׳ואון אצ׳ים-יאיו
thanks|감사합니다|gamsahamnida|קמסהמנידה
please|주세요|juseyo|צ׳וסאיו
sorry|죄송합니다|joesonghamnida|צ׳ווסונג-המנידה
yes|네|ne|נה
no|아니요|aniyo|אניו
howareyou|잘 지내세요?|jal jinaeseyo?|צ׳אל צ׳ינסאיו
good|좋아요|joayo|צ׳ואיו
ok|괜찮아요|gwaenchanayo|קוונצ׳אנאיו
n1|일|il|איל
n2|이|i|אי
n3|삼|sam|סאם
n4|사|sa|סה
n5|오|o|או
n6|육|yuk|יוק
n7|칠|chil|צ׳יל
n8|팔|pal|פאל
n9|구|gu|קו
n10|십|sip|שיפ
n0|영|yeong|יונג
n20|이십|isip|אי-שיפ
n50|오십|osip|או-שיפ
n100|백|baek|פק
n1000|천|cheon|צ׳ון
n11|십일|sibil|שיביל
n12|십이|sibi|שיבי
n13|십삼|sipsam|שיפ-סאם
n14|십사|sipsa|שיפ-סה
n15|십오|sibo|שיבו
n16|십육|simnyuk|שים-ניוק
n17|십칠|sipchil|שיפ-צ׳יל
n18|십팔|sippal|שיפ-פאל
n19|십구|sipgu|שיפ-קו
n30|삼십|samsip|סאם-שיפ
n40|사십|sasip|סה-שיפ
n60|육십|yuksip|יוק-שיפ
n70|칠십|chilsip|צ׳יל-שיפ
n80|팔십|palsip|פאל-שיפ
n90|구십|gusip|קו-שיפ
n200|이백|ibaek|אי-בק
n500|오백|obaek|או-בק
n10000|만|man|מאן
water|물|mul|מול
toilet|화장실|hwajangsil|הווג׳אנג-שיל
where|어디요?|eodiyo?|או-דיו
howmuch|얼마예요?|eolmayeyo?|אולמה-יאיו
this|이거|igeo|איגו
friend|친구|chingu|צ׳ינגו
food|음식|eumsik|אומשיק
bread|빵|ppang|פאנג
coffee|커피|keopi|קופי
tea|차|cha|צ׳ה
chicken|닭고기|dakgogi|טאק-גוגי
fish|생선|saengseon|סנג-סון
rice|밥|bap|באפ
beer|맥주|maekju|מק-צ׳ו
bill|계산서|gyesanseo|קיסאן-סו
tasty|맛있어요|masisseoyo|משישויו
egg|계란|gyeran|קיראן
fruit|과일|gwail|קוואיל
veg|야채|yachae|יאצ׳ה
meat|고기|gogi|קוגי
milk|우유|uyu|אויו
spicy|매워요|maewoyo|מוואיו
restaurant|식당|sikdang|שיק-דאנג
ice|얼음|eoreum|אורום
taxi|택시|taeksi|טקשי
bus|버스|beoseu|פוסו
train|기차|gicha|קיצ׳ה
airport|공항|gonghang|קונג-האנג
hotel|호텔|hotel|הוטל
left|왼쪽|oenjjok|ווין-צ׳וק
right|오른쪽|oreunjjok|אורון-צ׳וק
straight|똑바로|ttokbaro|טוק-בארו
stop|세워 주세요|sewo juseyo|סווא צ׳וסאיו
ticket|표|pyo|פיו
money|돈|don|טון
expensive|비싸요|bissayo|פיסאיו
cheap|싸요|ssayo|סאיו
market|시장|sijang|שיג׳אנג
pharmacy|약국|yakguk|יאק-קוק
open|영업 중|yeongeop jung|יונג-אופ צ׳ונג
closed|휴무|hyumu|היומו
help|도와주세요!|dowajuseyo!|טוואג׳וסאיו
police|경찰|gyeongchal|קיונג-צ׳אל
doctor|의사|uisa|אויסה
hospital|병원|byeongwon|פיונג-וון
today|오늘|oneul|אונול
tomorrow|내일|naeil|נאיל
yesterday|어제|eoje|אוג׳ה
now|지금|jigeum|צ׳יגום
t_morning|아침|achim|אצ׳ים
t_evening|저녁|jeonyeok|צ׳וניוק
t_night|밤|bam|פאם
t_week|주|ju|צ׳ו
t_month|달|dal|טאל
t_year|해|hae|הה
t_hour|시간|sigan|שיגאן
t_minute|분|bun|פון
p_toilet|화장실이 어디예요?|hwajangsiri eodiyeyo?|הווג׳אנג-שילי או-די-יאיו
p_cost|이거 얼마예요?|igeo eolmayeyo?|איגו אולמה-יאיו
p_nounder|이해가 안 돼요|ihaega an dwaeyo|איהגה אן טוואיו
p_english|영어 하세요?|yeongeo haseyo?|יונגו הסאיו
p_slow|천천히 말해 주세요|cheoncheonhi malhae juseyo|צ׳ון-צ׳וני מאלה צ׳וסאיו
p_bill|계산해 주세요|gyesanhae juseyo|קיסאנה צ׳וסאיו
p_want|이거 주세요|igeo juseyo|איגו צ׳וסאיו
p_expensive|너무 비싸요|neomu bissayo|נומו פיסאיו
p_discount|깎아 주세요|kkakka juseyo|קאקה צ׳וסאיו
p_address|이 주소로 가 주세요|i jusoro ga juseyo|אי צ׳וסורו קה צ׳וסאיו
p_hotel|호텔이 어디예요?|hoteri eodiyeyo?|הוטלי או-די-יאיו
p_doctor|의사가 필요해요|uisaga piryohaeyo|אויסגה פיריו-האיו
p_police|경찰을 불러 주세요!|gyeongchareul bulleo juseyo!|קיונג-צ׳ארול פולו צ׳וסאיו
p_israel|이스라엘에서 왔어요|Iseuraeleseo wasseoyo|איסוראלסו וואסויו
p_name|제 이름은 ...이에요|je ireumeun ... ieyo|צ׳ה אירומון ... איאיו
p_nice|반갑습니다|bangapseumnida|פנגאפ-סומנידה
p_water|물 주세요|mul juseyo|מול צ׳וסאיו
p_help|도와주실 수 있어요?|dowajusil su isseoyo?|טוואג׳ושיל סו אישויו
p_what|이게 뭐예요?|ige mwoyeyo?|איגה מוואיאיו
p_nospicy|안 맵게 해 주세요|an maepge hae juseyo|אן מפקה הה צ׳וסאיו
room|방|bang|פאנג
key|열쇠|yeolsoe|יול-סווה
bed|침대|chimdae|צ׳ים-דה
shower|샤워|syawo|שאוו
towel|수건|sugeon|סוגון
passport|여권|yeogwon|יו-קוון
mon|월요일|woryoil|וואריו-איל
tue|화요일|hwayoil|הוואיו-איל
wed|수요일|suyoil|סויו-איל
thu|목요일|mogyoil|מוגיו-איל
fri|금요일|geumyoil|קומיו-איל
sat|토요일|toyoil|טויו-איל
sun|일요일|iryoil|איריו-איל
red|빨간색|ppalgansaek|פאלגאן-סק
blue|파란색|paransaek|פאראן-סק
green|초록색|choroksaek|צ׳ורוק-סק
yellow|노란색|noransaek|נוראן-סק
black|검은색|geomeunsaek|קומון-סק
white|흰색|huinsaek|הין-סק
man|남자|namja|נאמג׳ה
woman|여자|yeoja|יוג׳ה
child|아이|ai|אאי
family|가족|gajok|קאג׳וק
i|저|jeo|צ׳ו
you|당신|dangsin|טאנג-שין
head|머리|meori|מורי
stomach|배|bae|פה
hand|손|son|סון
pain|통증|tongjeung|טונג-צ׳ונג
medicine|약|yak|יאק
sick|아파요|apayo|אפאיו
big|커요|keoyo|קויו
small|작아요|jagayo|צ׳אגאיו
hot|더워요|deowoyo|טוואיו
cold|추워요|chuwoyo|צ׳וואיו
bad|나빠요|nappayo|נאפאיו
beautiful|예뻐요|yeppeoyo|יפויו
new|새로운|saeroun|סרואון
old|오래된|oraedoen|אורה-דוון
fast|빨라요|ppallayo|פאלאיו
slow|느려요|neuryeoyo|נוריויו
near|가까워요|gakkawoyo|קאקוואיו
far_a|멀어요|meoreoyo|מורויו
clean|깨끗해요|kkaekkeuthaeyo|קקותאיו
dirty|더러워요|deoreowoyo|טורוואיו
tired|피곤해요|pigonhaeyo|פיגונאיו
hungry|배고파요|baegopayo|פה-גופאיו
thirsty|목말라요|mongmallayo|מונג-מאלאיו
happy|행복해요|haengbokhaeyo|הנג-בוקאיו
sad|슬퍼요|seulpeoyo|סולפויו
easy|쉬워요|swiwoyo|שוויוואיו
difficult|어려워요|eoryeowoyo|אוריוואיו
many|많아요|manayo|מאנאיו
eat|먹다|meokda|מוקטה
drink|마시다|masida|משידה
go|가다|gada|קאדה
buy|사다|sada|סאדה
speak|말하다|malhada|מאלהדה
sleep|자다|jada|צ׳אדה
understand|이해하다|ihaehada|איההדה
come|오다|oda|אודה
want|원하다|wonhada|וונהדה
need|필요하다|piryohada|פיריו-הדה
know|알다|alda|אלדה
see|보다|boda|פודה
hear|듣다|deutda|טוטדה
give|주다|juda|צ׳ודה
take|가져가다|gajyeogada|קאג׳ו-גאדה
pay|내다|naeda|נדה
wait|기다리다|gidarida|קידרידה
walk|걷다|geotda|קוטדה
read|읽다|ikda|איקדה
write|쓰다|sseuda|סודה
love|사랑하다|saranghada|סרנג-הדה
work|일하다|ilhada|אילהדה
swim|수영하다|suyeonghada|סויונג-הדה
c_table|두 명이요|du myeongiyo|טו מיונג-איו
c_menu|메뉴판 주세요|menyupan juseyo|מניו-פאן צ׳וסאיו
c_noice|얼음 빼 주세요|eoreum ppae juseyo|אורום פה צ׳וסאיו
c_nomeat|고기를 안 먹어요|gogireul an meogeoyo|קוגירול אן מוגויו
c_allergy|견과류 알레르기가 있어요|gyeongwaryu allereugiga isseoyo|קיונגוואריו אלרוגיגה אישויו
c_delicious|정말 맛있어요!|jeongmal masisseoyo!|צ׳ונג-מאל משישויו
c_reserv|예약했어요|yeyakhaesseoyo|יאיאק-השויו
c_wifi|와이파이 비밀번호가 뭐예요?|waipai bimilbeonhoga mwoyeyo?|וואיפאי פימיל-בונהוגה מוואיאיו
c_checkout|체크아웃은 몇 시예요?|chekeuauseun myeot siyeyo?|צ׳קואאוסון מיות שי-יאיו
c_howget|거기 어떻게 가요?|geogi eotteoke gayo?|קוגי אוטוקה קאיו
c_stophere|여기서 세워 주세요|yeogiseo sewo juseyo|יוגיסו סווא צ׳וסאיו
c_far|멀어요?|meoreoyo?|מורויו
c_card|카드 돼요?|kadeu dwaeyo?|קאדו טוואיו
c_looking|그냥 구경하는 거예요|geunyang gugyeonghaneun geoyeyo|קוניאנג קוגיונג-האנון קויאיו
c_yourname|성함이 어떻게 되세요?|seonghami eotteoke doeseyo?|סונג-המי אוטוקה טוסאיו
c_wherefrom|어디에서 오셨어요?|eodieseo osyeosseoyo?|או-די-אסו אושיושויו
c_seeyou|나중에 봐요|najunge bwayo|נאג׳ונגה בוואיו
c_cheers|건배!|geonbae!|קונבה
c_lost|길을 잃었어요|gireul ireosseoyo|קירול אירושויו
c_passport|여권을 잃어버렸어요|yeogwoneul ireobeoryeosseoyo|יו-קוונול אירובוריושויו
c_hurts|여기가 아파요|yeogiga apayo|יוגיגה אפאיו
c_time|지금 몇 시예요?|jigeum myeot siyeyo?|צ׳יגום מיות שי-יאיו
c_again|다시 말해 주세요|dasi malhae juseyo|טאשי מאלה צ׳וסאיו
c_write|써 주실 수 있어요?|sseo jusil su isseoyo?|סו צ׳ושיל סו אישויו
dog|개|gae|קה
cat|고양이|goyangi|קויאנגי
bird|새|sae|סה
horse|말|mal|מאל
cow|소|so|סו
pig|돼지|dwaeji|טווג׳י
elephant|코끼리|kokkiri|קוקירי
monkey|원숭이|wonsungi|וונסונגי
snake|뱀|baem|פם
mosquito|모기|mogi|מוגי
lion|사자|saja|סאג׳ה
duck|오리|ori|אורי
apple|사과|sagwa|סאגווה
banana|바나나|banana|פננה
orange|오렌지|orenji|אורנג׳י
mango|망고|manggo|מאנגו
pineapple|파인애플|painaepeul|פאינפול
watermelon|수박|subak|סובאק
coconut|코코넛|kokoneot|קוקונוט
grapes|포도|podo|פודו
lemon|레몬|remon|למון
strawberry|딸기|ttalgi|טאלגי
papaya|파파야|papaya|פפאיה
tomato|토마토|tomato|טומטו
potato|감자|gamja|קאמג׳ה
onion|양파|yangpa|יאנגפה
garlic|마늘|maneul|מאנול
cucumber|오이|oi|אוי
carrot|당근|danggeun|טאנגון
chili|고추|gochu|קוצ׳ו
corn|옥수수|oksusu|אוקסוסו
mushroom|버섯|beoseot|פוסות
lettuce|상추|sangchu|סאנגצ׳ו
eggplant|가지|gaji|קאג׳י
soup|국|guk|קוק
salad|샐러드|saelleodeu|סלודו
noodles|국수|guksu|קוקסו
cheese|치즈|chijeu|צ׳יג׳ו
butter|버터|beoteo|פוטו
salt|소금|sogeum|סוגום
sugar|설탕|seoltang|סולטאנג
cake|케이크|keikeu|קייקו
icecream|아이스크림|aiseukeurim|אאיסוקורים
juice|주스|juseu|צ׳וסו
wine|와인|wain|וואין
breakfast|아침 식사|achim siksa|אצ׳ים שיקסה
lunch|점심|jeomsim|צ׳ומשים
dinner|저녁 식사|jeonyeok siksa|צ׳וניוק שיקסה
fork|포크|pokeu|פוקו
spoon|숟가락|sutgarak|סוטגאראק
knife|칼|kal|קאל
glass|컵|keop|קופ
plate|접시|jeopsi|צ׳ופשי
bank|은행|eunhaeng|אונהנג
atm|ATM / 현금인출기|hyeongeum inchulgi|היונגום אינצ׳ולגי
beach|해변|haebyeon|הביון
museum|박물관|bangmulgwan|פאנגמולגוואן
temple|절|jeol|צ׳ול
street|거리|geori|קורי
city|도시|dosi|טושי
shop|가게|gage|קאגה
supermarket|슈퍼마켓|syupeomaket|שופומאקט
park|공원|gongwon|קונגוון
station|역|yeok|יוק
embassy|대사관|daesagwan|טסאגוואן
phone|휴대폰|hyudaepon|היודפון
charger|충전기|chungjeongi|צ׳ונג-צ׳ונגי
bag|가방|gabang|קאבאנג
shoes|신발|sinbal|שינבאל
clothes|옷|ot|אות
hat|모자|moja|מוג׳ה
glasses|안경|angyeong|אנגיונג
map|지도|jido|צ׳ידו
sunscreen|선크림|seonkeurim|סונקורים
umbrella|우산|usan|אוסאן
sf_order|주문할게요|jumunhalgeyo|צ׳ומונהאלגאיו
sf_recommend|뭐가 맛있어요?|mwoga masisseoyo?|מווגה משישויו
sf_bottle|물 한 병 주세요|mul han byeong juseyo|מול האן פיונג צ׳וסאיו
sf_isspicy|이거 매워요?|igeo maewoyo?|איגו מוואיו
sf_onemore|하나 더 주세요|hana deo juseyo|הנה טו צ׳וסאיו
sf_nosugar|설탕 빼 주세요|seoltang ppae juseyo|סולטאנג פה צ׳וסאיו
sf_takeaway|포장해 주세요|pojanghae juseyo|פוג׳אנגה צ׳וסאיו
ss_smaller|더 작은 사이즈 있어요?|deo jageun saijeu isseoyo?|טו צ׳אגון סאיג׳ו אישויו
ss_try|입어 봐도 돼요?|ibeo bwado dwaeyo?|איבו פוואדו טוואיו
ss_two|두 개 주세요|du gae juseyo|טו קה צ׳וסאיו
ss_change|잔돈 있어요?|jandon isseoyo?|צ׳אנדון אישויו
ss_last|제일 싼 가격이 얼마예요?|jeil ssan gagyeogi eolmayeyo?|צ׳איל סאן קאגיוגי אולמה-יאיו
ss_bag|봉투 주세요|bongtu juseyo|פונגטו צ׳וסאיו
sm_busstop|버스 정류장이 어디예요?|beoseu jeongnyujangi eodiyeyo?|פוסו צ׳ונגניוג׳אנגי או-די-יאיו
sm_trainleave|기차가 몇 시에 출발해요?|gichaga myeot sie chulbalhaeyo?|קיצ׳אגה מיות שיאה צ׳ולבאראיו
sm_oneticket|표 한 장 주세요|pyo han jang juseyo|פיו האן צ׳אנג צ׳וסאיו
sm_howlong|얼마나 걸려요?|eolmana geollyeoyo?|אולמנה קוליויו
sm_meter|미터기 켜 주세요|miteogi kyeo juseyo|מיטוגי קיו צ׳וסאיו
sm_slowdrive|천천히 가 주세요|cheoncheonhi ga juseyo|צ׳ון-צ׳וני קה צ׳וסאיו
sm_airport|공항으로 가 주세요|gonghangeuro ga juseyo|קונג-האנגורו קה צ׳וסאיו
sh_leavebag|짐을 맡길 수 있어요?|jimeul matgil su isseoyo?|צ׳ימול מאטגיל סו אישויו
sh_ac|에어컨이 안 돼요|eeokeoni an dwaeyo|אאוקוני אן טוואיו
sh_breakfast|조식 포함이에요?|josik pohamieyo?|צ׳ושיק פוהמיאיו
sh_towel|수건 하나 더 주세요|sugeon hana deo juseyo|סוגון הנה טו צ׳וסאיו
sh_taxi|택시 좀 불러 주세요|taeksi jom bulleo juseyo|טקשי צ׳ום פולו צ׳וסאיו
sh_late|늦게 체크아웃해도 돼요?|neutge chekeuauthaedo dwaeyo?|נוטקה צ׳קואאוטהדו טוואיו
so_learning|한국어를 배우고 있어요|hangugeoreul baeugo isseoyo|הנגוגורול פאוגו אישויו
so_thankshelp|도와주셔서 감사합니다|dowajusyeoseo gamsahamnida|טוואג׳ושיוסו קמסהמנידה
so_photo|사진 좀 찍어 주세요|sajin jom jjigeo juseyo|סאג׳ין צ׳ום צ׳יגו צ׳וסאיו
so_like|여기 정말 좋아요|yeogi jeongmal joayo|יוגי צ׳ונג-מאל צ׳ואיו
so_vacation|휴가 왔어요|hyuga wasseoyo|היוגה וואסויו
so_howsay|이거 뭐라고 해요?|igeo mworago haeyo?|איגו מוורגו האיו
so_noproblem|문제없어요|munjeeopseoyo|מונג׳ה-אופסויו
so_beautiful|정말 예뻐요!|jeongmal yeppeoyo!|צ׳ונג-מאל יפויו
sp_unwell|몸이 안 좋아요|momi an joayo|מומי אן צ׳ואיו
sp_nearhosp|가장 가까운 병원이 어디예요?|gajang gakkaun byeongwoni eodiyeyo?|קאג׳אנג קאקאון פיונג-ווני או-די-יאיו
sp_fever|열이 있어요|yeori isseoyo|יורי אישויו
sp_helpme|도와주세요|dowajuseyo|טוואג׳וסאיו
sp_stolen|가방을 도둑맞았어요|gabangeul dodungmajasseoyo|קאבאנגול טודונג-מאג׳אסויו
sp_embassy|이스라엘 대사관에 가야 해요|Iseurael daesagwane gaya haeyo|איסוראל טסאגוואנה קאיה האיו
dt1|어디로 가세요?|eodiro gaseyo?|אודירו קאסאיו
dt2|이 호텔로 가 주세요.|i hotello ga juseyo.|אי הוטלו קה צ׳וסאיו
dt3|네, 타세요.|ne, taseyo.|נה, טאסאיו
dt4|얼마예요?|eolmayeyo?|אולמה-יאיו
dt5|이백 원이에요.|ibaek wonieyo.|אי-בק ווניאיו
dt6|미터기 켜 주세요.|miteogi kyeo juseyo.|מיטוגי קיו צ׳וסאיו
dt7|문제없어요.|munjeeopseoyo.|מונג׳ה-אופסויו
dt8|여기서 세워 주세요. 감사합니다.|yeogiseo sewo juseyo. gamsahamnida.|יוגיסו סווא צ׳וסאיו. קמסהמנידה
dm1|이거 얼마예요?|igeo eolmayeyo?|איגו אולמה-יאיו
dm2|삼백 원이에요.|sambaek wonieyo.|סאם-בק ווניאיו
dm3|너무 비싸요! 이백 원 어때요?|neomu bissayo! ibaek won eottaeyo?|נומו פיסאיו! אי-בק וון אוטאיו
dm4|이백오십 원, 마지막 가격이에요.|ibaegosip won, majimak gagyeogieyo.|אי-בק-או-שיפ וון, מאג׳ימק קאגיוגיאיו
dm5|좋아요, 살게요.|joayo, salgeyo.|צ׳ואיו, סאלגאיו
dm6|정말 감사합니다!|jeongmal gamsahamnida!|צ׳ונג-מאל קמסהמנידה
dr1|몇 분이세요?|myeot buniseyo?|מיות פוניסאיו
dr2|두 명이요.|du myeongiyo.|טו מיונג-איו
dr3|뭐 드릴까요?|mwo deurilkkayo?|מוו טורילקאיו
dr4|닭고기 볶음밥, 안 맵게 해 주세요.|dakgogi bokkeumbap, an maepge hae juseyo.|טאק-גוגי פוקומבאפ, אן מפקה הה צ׳וסאיו
dr5|음료는요?|eumnyoneunyo?|אומניונוניו
dr6|물만 주세요.|mulman juseyo.|מולמאן צ׳וסאיו
dr7|계산해 주세요.|gyesanhae juseyo.|קיסאנה צ׳וסאיו
dh1|안녕하세요, 예약했어요.|annyeonghaseyo, yeyakhaesseoyo.|אניונג-הסאיו, יאיאק-השויו
dh2|성함이 어떻게 되세요?|seonghami eotteoke doeseyo?|סונג-המי אוטוקה טוסאיו
dh3|... 이에요.|... ieyo.|... איאיו
dh4|여권 주세요.|yeogwon juseyo.|יו-קוון צ׳וסאיו
dh5|방은 305호예요.|bangeun sambaego-hoyeyo.|פאנגון סאם-בק-או הויאיו
dh6|조식은 몇 시예요?|josigeun myeot siyeyo?|צ׳ושיגון מיות שי-יאיו
dh7|일곱 시부터 열 시까지예요.|ilgop sibuteo yeol sikkajiyeyo.|אילגופ שיבוטו יול שיקאג׳יאיו
dd1|실례합니다, 역이 어디예요?|sillyehamnida, yeogi eodiyeyo?|שיליה-המנידה, יוגי או-די-יאיו
dd2|쭉 가서 왼쪽으로 가세요.|jjuk gaseo oenjjogeuro gaseyo.|צ׳וק קאסו ווין-צ׳וגורו קאסאיו
dd3|여기서 멀어요?|yeogiseo meoreoyo?|יוגיסו מורויו
dd4|아니요, 걸어서 오 분이에요.|aniyo, georeoseo o bunieyo.|אניו, קורוסו או פוניאיו
dd5|정말 고맙습니다!|jeongmal gomapseumnida!|צ׳ונג-מאל קומאפסומנידה
w_weather|날씨|nalssi|נאלשי
w_sun|해|hae|הה
w_rain|비|bi|פי
w_wind|바람|baram|פאראם
w_cloud|구름|gureum|קורום
w_snow|눈|nun|נון
w_storm|폭풍|pokpung|פוקפונג
w_humid|습해요|seupaeyo|סופאיו
j_teacher|선생님|seonsaengnim|סונסנג-נים
j_driver|기사님|gisanim|קיסנים
j_waiter|종업원|jongeobwon|צ׳ונגובוון
j_cook|요리사|yorisa|יוריסה
j_student|학생|haksaeng|האקסנג
j_engineer|엔지니어|enjinieo|אנג׳יניו
j_nurse|간호사|ganhosa|קאנהוסה
j_seller|점원|jeomwon|צ׳ומוון
j_guide|가이드|gaideu|קאידו
j_pharmacist|약사|yaksa|יאקסה
e_angry|화났어요|hwanasseoyo|הוונאסויו
e_scared|무서워요|museowoyo|מוסוואיו
e_bored|지루해요|jiruhaeyo|צ׳ירואיו
e_worried|걱정돼요|geokjeongdwaeyo|קוקצ׳ונג-טוואיו
e_surprised|놀랐어요|nollasseoyo|נולאסויו
e_calm|차분해요|chabunhaeyo|צ׳אבונאיו
e_excited|신나요|sinnayo|שינאיו
e_love|사랑에 빠졌어요|sarange ppajyeosseoyo|סרנגה פאג׳יושויו
dir_north|북쪽|bukjjok|פוק-צ׳וק
dir_south|남쪽|namjjok|נאם-צ׳וק
dir_east|동쪽|dongjjok|טונג-צ׳וק
dir_west|서쪽|seojjok|סו-צ׳וק
dir_corner|모퉁이|motungi|מוטונגי
dir_light|신호등|sinhodeung|שינהודונג
dir_behind|뒤|dwi|טווי
dir_front|앞|ap|אפ
dir_next|옆|yeop|יופ
dir_back|뒤로|dwiro|טווירו
dir_up|위|wi|ווי
dir_down|아래|arae|אראה`
});

/* ---- numbers & prices (0–999,999) in Sino-Korean → one token [hangul, romanization, hebrew]. Groups of 만 (10,000); no 일 before 십/백/천/만 ---- */
NW.ko = (() => {
  const D = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
  const R = ['', 'il', 'i', 'sam', 'sa', 'o', 'yuk', 'chil', 'pal', 'gu'];
  const H = ['', 'איל', 'אי', 'סאם', 'סה', 'או', 'יוק', 'צ׳יל', 'פאל', 'קו'];
  const U = [['천', 'cheon', 'צ׳ון'], ['백', 'baek', 'בק'], ['십', 'sip', 'שיפ'], ['', '', '']];
  function u10000(n) {
    const d = [Math.floor(n / 1000), Math.floor(n % 1000 / 100), Math.floor(n % 100 / 10), n % 10];
    let t = '', r = [], h = [];
    d.forEach((x, i) => {
      if (!x) return;
      const one = x === 1 && i < 3;                 /* 백, not 일백 */
      t += (one ? '' : D[x]) + U[i][0];
      r.push((one ? '' : R[x]) + U[i][1]);
      h.push((one ? '' : H[x] + (U[i][2] ? '-' : '')) + U[i][2]);
    });
    return [t, r.join(''), h.join(' ')];
  }
  return (n, cur) => {
    let t, r, h;
    if (n === 0) { t = '영'; r = 'yeong'; h = 'יונג'; }
    else {
      const man = Math.floor(n / 10000), rest = n % 10000, parts = [];
      if (man) { const x = man === 1 ? ['', '', ''] : u10000(man); parts.push([x[0] + '만', x[1] + 'man', (x[2] ? x[2] + '-' : '') + 'מאן']); }
      if (rest) parts.push(u10000(rest));
      t = parts.map(x => x[0]).join(''); r = parts.map(x => x[1]).join(' '); h = parts.map(x => x[2]).join(' ');
    }
    if (cur) { t += ' 원'; r += ' won'; h += ' וון'; }
    return [tk(t, r, h)];
  };
})();
NUM.ko = { tokens: (n, cur) => NW.ko(n, cur) };
