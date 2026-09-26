/* ===== LingoNest — lang-zh.js : Mandarin Chinese content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('zh', {
  ver: '1.20.0',
  curSym: "¥",
  country: {"he": "סין וטייוואן", "en": "China & Taiwan", "ru": "Китай и Тайвань", "es": "China y Taiwán", "ar": "الصين وتايوان"},
  emergency: [
    ["🚓", {"he": "סין — משטרה", "en": "China — police", "ru": "Китай — полиция", "es": "China — policía", "ar": "الصين — الشرطة"}, "110"],
    ["🚑", {"he": "סין — אמבולנס", "en": "China — ambulance", "ru": "Китай — скорая", "es": "China — ambulancia", "ar": "الصين — الإسعاف"}, "120"],
    ["🚒", {"he": "סין — כבאות", "en": "China — fire", "ru": "Китай — пожарные", "es": "China — bomberos", "ar": "الصين — الإطفاء"}, "119"],
    ["🇹🇼", {"he": "טייוואן — משטרה / אמבולנס", "en": "Taiwan — police / ambulance", "ru": "Тайвань — полиция / скорая", "es": "Taiwán — policía / ambulancia", "ar": "تايوان — الشرطة / الإسعاف"}, "110", "119"]
  ],
  tips: [
    {"t": {"he": "הטונים הם חלק מהמילה", "en": "Tones are part of the word"}, "b": {"he": "mǎi (טון 3) = לקנות, mài (טון 4) = למכור. אותה הברה, הפוך לגמרי! אל תיבהל — מההקשר מבינים הרבה, אבל שווה להקשיב ל-🐢 ולחקות את \"המנגינה\".", "en": "mǎi (tone 3) = buy, mài (tone 4) = sell. Same syllable, opposite meaning! Context helps a lot, but listen with 🐢 and copy the melody."}, "ex": [["买", "mǎi", "מאי (טון 3)", "לקנות", "to buy"], ["卖", "mài", "מאי (טון 4)", "למכור", "to sell"]]},
    {"t": {"he": "אין נטיות — בכלל", "en": "No conjugation — at all"}, "b": {"he": "בסינית הפועל לא משתנה: אני/אתה/הם, עבר/עתיד — אותה מילה. 了 (לה) אחרי פועל = זה קרה. 我吃了 = אכלתי.", "en": "Verbs never change: I/you/they, past/future — same word. 了 (le) after a verb = it happened. 我吃了 = I ate."}, "ex": [["我吃了", "wǒ chī le", "וואו צ׳ה לה", "אכלתי", "I've eaten"]]},
    {"t": {"he": "שלילה: 不 ו-没", "en": "Negation: 不 and 没"}, "b": {"he": "不 (בו) לפני פועל ותואר — לא: 不辣 = לא חריף. 没 (מיי) עם 有 (יש) ועם עבר: 没有 = אין / לא היה. 没问题 = אין בעיה.", "en": "不 (bù) negates verbs/adjectives: 不辣 = not spicy. 没 (méi) goes with 有 and the past: 没有 = there isn't. 没问题 = no problem."}, "ex": [["不要辣", "bú yào là", "בו יאו לה", "בלי חריף", "No spice"], ["没问题", "méi wèntí", "מיי ון-טי", "אין בעיה", "No problem"]]},
    {"t": {"he": "מילות מדידה", "en": "Measure words"}, "b": {"he": "בין מספר לשם עצם תמיד בא \"מסווג\": 一个人 (אדם אחד), 一张票 (כרטיס אחד), 一杯茶 (כוס תה). כשלא יודעים — 个 (גה) עובד כמעט תמיד.", "en": "Between a number and a noun comes a measure word: 一个人, 一张票, 一杯茶. When unsure, 个 (ge) usually works."}, "ex": [["两个", "liǎng ge", "ליאנג גה", "שניים (מהם)", "two (of them)"]]},
    {"t": {"he": "תשלום בסין", "en": "Paying in China"}, "b": {"he": "בסין כמעט הכול משולם בטלפון — WeChat Pay ו-Alipay. כדאי להתקין ולחבר כרטיס אשראי לפני הנסיעה. מזומן עדיין מתקבל, אבל לא תמיד יש עודף. בשווקים מתמקחים; בחנויות רשת — לא.", "en": "In China almost everything is paid by phone — WeChat Pay and Alipay. Set one up with your card before the trip. Cash is accepted but change isn't always available. Bargain in markets, not in chain stores."}, "ex": [["可以刷卡吗？", "kěyǐ shuākǎ ma?", "קה-יי שואה-קה מה", "אפשר לשלם בכרטיס?", "Can I pay by card?"]]},
    {"t": {"he": "הסימנים — לזהות, לא לכתוב", "en": "Characters — recognise, don't write"}, "b": {"he": "אין צורך ללמוד לכתוב אלפי סימנים כדי להסתדר. מספיק לזהות כמה שלטים: 男 (גברים), 女 (נשים), 出口 (יציאה), 入口 (כניסה), 厕所 (שירותים).", "en": "You don't need to write thousands of characters to get by. Recognise a few signs: 男 (men), 女 (women), 出口 (exit), 入口 (entrance), 厕所 (toilet)."}, "ex": [["出口", "chūkǒu", "צ׳ו-קואו", "יציאה", "Exit"], ["入口", "rùkǒu", "רו-קואו", "כניסה", "Entrance"]]}
  ],
  note: {"he": "לסינית אין אלף־בית — כל סימן הוא מילה או הברה (你 = אתה, 好 = טוב). כדי לקרוא ולהגות משתמשים בפִּינְיִין: כתיב לטיני עם סימני טון (nǐ hǎo). כאן לומדים את צלילי הפינִיִין: 23 עיצורים פותחים, סיומות וטונים.", "en": "Chinese has no alphabet — each character is a word or syllable (你 = you, 好 = good). To read and pronounce we use pinyin: Latin letters with tone marks (nǐ hǎo). Here you learn the pinyin sounds: 23 initials, finals and tones.", "ru": "В китайском нет алфавита: каждый иероглиф — слово или слог. Для чтения используют пиньинь — латиницу со знаками тонов (nǐ hǎo). Здесь — звуки пиньиня: инициали, финали и тоны.", "es": "El chino no tiene alfabeto: cada carácter es una palabra o sílaba. Para leer se usa el pinyin, letras latinas con tonos (nǐ hǎo). Aquí aprendes sus sonidos: iniciales, finales y tonos.", "ar": "لا أبجدية في الصينية — كل رمز كلمة أو مقطع. للقراءة يُستخدم البينيين: حروف لاتينية مع علامات النغمة (nǐ hǎo). هنا تتعلم أصواته: البدايات والنهايات والنغمات."},
  vowelNote: {"he": "כל הברה בסינית = עיצור פותח + סיומת + טון. לדוגמה mǎ = m + a + טון 3. שים לב ל-ü (אִי עם שפתיים מעוגלות) ול-e העמוקה.", "en": "Every syllable = initial + final + tone, e.g. mǎ = m + a + tone 3. Watch ü (\"ee\" with rounded lips) and the deep e.", "ru": "Каждый слог = инициаль + финаль + тон, напр. mǎ = m + a + 3-й тон.", "es": "Cada sílaba = inicial + final + tono, p. ej. mǎ = m + a + tono 3.", "ar": "كل مقطع = بداية + نهاية + نغمة، مثل mǎ = m + a + النغمة 3."},
  alpha: [
    ["b", "波", "ב (לא נשוף)", "b — bō"],
    ["p", "坡", "פּ (נשוף)", "p — pō"],
    ["m", "摸", "מ", "m — mō"],
    ["f", "佛", "פ", "f — fó"],
    ["d", "得", "ד", "d — dé"],
    ["t", "特", "ט (נשוף)", "t — tè"],
    ["n", "讷", "נ", "n — nè"],
    ["l", "勒", "ל", "l — lè"],
    ["g", "哥", "ג", "g — gē"],
    ["k", "科", "ק (נשוף)", "k — kē"],
    ["h", "喝", "ח רכה", "h — hē"],
    ["j", "鸡", "ג׳ רכה", "j — jī"],
    ["q", "七", "צ׳ (נשוף)", "q — qī"],
    ["x", "西", "ש רכה", "x — xī"],
    ["zh", "知", "ג׳ (לשון מקופלת)", "zh — zhī"],
    ["ch", "吃", "צ׳ (לשון מקופלת)", "ch — chī"],
    ["sh", "诗", "ש", "sh — shī"],
    ["r", "日", "ז׳ / ר רכה", "r — rì"],
    ["z", "资", "דז", "z — zī"],
    ["c", "次", "צ (נשוף)", "c — cì"],
    ["s", "思", "ס", "s — sī"],
    ["y", "一", "י", "y — yī"],
    ["w", "五", "ו", "w — wǔ"]
  ],
  vowels: [
    ["a", "啊", "אַ", "a"],
    ["o", "哦", "אוֹ", "o"],
    ["e", "鹅", "אֶ עמוקה (כמו ы)", "e"],
    ["i", "一", "אִי", "i"],
    ["u", "乌", "אוּ", "u"],
    ["ü", "鱼", "אִי בשפתיים מעוגלות", "ü"],
    ["ai", "爱", "אַי", "ai"],
    ["ei", "杯", "אֵיי", "ei"],
    ["ao", "奥", "אַאוֹ", "ao"],
    ["ou", "欧", "אוֹאוּ", "ou"],
    ["an", "安", "אַן", "an"],
    ["en", "恩", "אֶן", "en"],
    ["ang", "昂", "אַנג", "ang"],
    ["eng", "灯", "אֶנג", "eng"],
    ["ong", "东", "אוּנג", "ong"],
    ["er", "二", "אַר", "er"]
  ],
  vowelsTitle: {"he": "סיומות (תנועות)", "en": "Finals (vowels)", "ru": "Финали (гласные)", "es": "Finales (vocales)", "ar": "النهايات (الحركات)"},
  tones: [["妈", "mā", {"he": "טון 1 — גבוה וישר", "en": "Tone 1 — high & level", "ru": "1-й тон — высокий ровный", "es": "Tono 1 — alto y llano", "ar": "النغمة 1 — عالية ومستوية"}, {"he": "אמא", "en": "mother", "ru": "мама", "es": "madre", "ar": "أم"}], ["麻", "má", {"he": "טון 2 — עולה (כמו שאלה)", "en": "Tone 2 — rising", "ru": "2-й тон — восходящий", "es": "Tono 2 — ascendente", "ar": "النغمة 2 — صاعدة"}, {"he": "קנבוס", "en": "hemp", "ru": "конопля", "es": "cáñamo", "ar": "قنب"}], ["马", "mǎ", {"he": "טון 3 — יורד ועולה", "en": "Tone 3 — dipping", "ru": "3-й тон — нисходяще-восходящий", "es": "Tono 3 — descendente-ascendente", "ar": "النغمة 3 — هابطة ثم صاعدة"}, {"he": "סוס", "en": "horse", "ru": "лошадь", "es": "caballo", "ar": "حصان"}], ["骂", "mà", {"he": "טון 4 — יורד חד (כמו פקודה)", "en": "Tone 4 — sharp falling", "ru": "4-й тон — резкий нисходящий", "es": "Tono 4 — descendente", "ar": "النغمة 4 — هابطة حادة"}, {"he": "לנזוף", "en": "to scold", "ru": "ругать", "es": "regañar", "ar": "يوبّخ"}], ["吗", "ma", {"he": "טון ניטרלי — קצר וקל", "en": "Neutral tone — short & light", "ru": "Нейтральный тон", "es": "Tono neutro", "ar": "نغمة محايدة"}, {"he": "מילת שאלה", "en": "question particle", "ru": "вопросительная частица", "es": "partícula interrogativa", "ar": "أداة استفهام"}]],
  twister: "妈妈骂马吗？",
  toneNote: {"he": "בסינית יש 4 טונים ועוד טון ניטרלי — והטון משנה את המשמעות לגמרי. שמע: אותה הברה \"מא\" היא אמא, קנבוס, סוס או לנזוף.", "en": "Mandarin has 4 tones plus a neutral one — and tone changes the meaning completely. Listen: the same \"ma\" is mother, hemp, horse or scold.", "ru": "В китайском 4 тона и нейтральный — тон полностью меняет смысл: «ма» — мама, конопля, лошадь или ругать.", "es": "El mandarín tiene 4 tonos más uno neutro, y el tono cambia el significado: \"ma\" es madre, cáñamo, caballo o regañar.", "ar": "في الصينية 4 نغمات ونغمة محايدة، والنغمة تغيّر المعنى: \"ما\" = أم، قنب، حصان أو يوبّخ."},
  twisterNote: {"he": "\"אמא נוזפת בסוס?\" — mā ma mà mǎ ma", "en": "\"Is mum scolding the horse?\" — mā ma mà mǎ ma", "ru": "«Мама ругает лошадь?» — mā ma mà mǎ ma", "es": "\"¿Mamá regaña al caballo?\" — mā ma mà mǎ ma", "ar": "\"هل تؤنّب الأم الحصان؟\" — mā ma mà mǎ ma"},
  /* speaker = female: [regex source, flags, replacement] */
  gender: [],
  words: `hello|你好|nǐ hǎo|ני האו
bye|再见|zàijiàn|דזאי-ג׳יין
morning|早上好|zǎoshang hǎo|דזאו-שאנג האו
thanks|谢谢|xièxie|שייה-שייה
please|请|qǐng|צ׳ינג
sorry|对不起|duìbuqǐ|דויי-בו-צ׳י
yes|是的|shì de|שה דה
no|不是|bú shì|בו שה
howareyou|你好吗？|nǐ hǎo ma?|ני האו מה
good|好|hǎo|האו
ok|好的|hǎo de|האו דה
n1|一|yī|יי
n2|二|èr|אר
n3|三|sān|סאן
n4|四|sì|סה
n5|五|wǔ|וו
n6|六|liù|ליו
n7|七|qī|צ׳י
n8|八|bā|בא
n9|九|jiǔ|ג׳יו
n10|十|shí|שה
n0|零|líng|לינג
n20|二十|èrshí|אר-שה
n50|五十|wǔshí|וו-שה
n100|一百|yìbǎi|יי-באי
n1000|一千|yìqiān|יי-צ׳יין
n11|十一|shíyī|שה-יי
n12|十二|shí'èr|שה-אר
n13|十三|shísān|שה-סאן
n14|十四|shísì|שה-סה
n15|十五|shíwǔ|שה-וו
n16|十六|shíliù|שה-ליו
n17|十七|shíqī|שה-צ׳י
n18|十八|shíbā|שה-בא
n19|十九|shíjiǔ|שה-ג׳יו
n30|三十|sānshí|סאן-שה
n40|四十|sìshí|סה-שה
n60|六十|liùshí|ליו-שה
n70|七十|qīshí|צ׳י-שה
n80|八十|bāshí|בא-שה
n90|九十|jiǔshí|ג׳יו-שה
n200|两百|liǎngbǎi|ליאנג-באי
n500|五百|wǔbǎi|וו-באי
n10000|一万|yíwàn|יי-וואן
water|水|shuǐ|שוויי
toilet|洗手间|xǐshǒujiān|שי-שואו-ג׳יין
where|哪里？|nǎlǐ?|נה-לי
howmuch|多少钱？|duōshao qián?|דואו-שאו צ׳יין
this|这个|zhège|ג׳ה-גה
friend|朋友|péngyou|פנג-יואו
food|食物|shíwù|שה-וו
bread|面包|miànbāo|מיין-באו
coffee|咖啡|kāfēi|קא-פיי
tea|茶|chá|צ׳ה
chicken|鸡肉|jīròu|ג׳י-רואו
fish|鱼|yú|יו
rice|米饭|mǐfàn|מי-פאן
beer|啤酒|píjiǔ|פי-ג׳יו
bill|账单|zhàngdān|ג׳אנג-דאן
tasty|好吃|hǎochī|האו-צ׳ה
egg|鸡蛋|jīdàn|ג׳י-דאן
fruit|水果|shuǐguǒ|שוויי-גואו
veg|蔬菜|shūcài|שו-צאי
meat|肉|ròu|רואו
milk|牛奶|niúnǎi|ניו-נאי
spicy|辣|là|לה
restaurant|餐厅|cāntīng|צאן-טינג
ice|冰块|bīngkuài|בינג-קואיי
taxi|出租车|chūzūchē|צ׳ו-דזו-צ׳ה
bus|公交车|gōngjiāochē|גונג-ג׳יאו-צ׳ה
train|火车|huǒchē|הואו-צ׳ה
airport|机场|jīchǎng|ג׳י-צ׳אנג
hotel|酒店|jiǔdiàn|ג׳יו-דיין
left|左边|zuǒbian|דזואו-ביין
right|右边|yòubian|יואו-ביין
straight|一直走|yìzhí zǒu|יי-ג׳ה דזואו
stop|停|tíng|טינג
ticket|票|piào|פיאו
money|钱|qián|צ׳יין
expensive|贵|guì|גוויי
cheap|便宜|piányi|פיין-יי
market|市场|shìchǎng|שה-צ׳אנג
pharmacy|药店|yàodiàn|יאו-דיין
open|开门|kāimén|קאי-מן
closed|关门|guānmén|גואן-מן
help|救命！|jiùmìng!|ג׳יו-מינג
police|警察|jǐngchá|ג׳ינג-צ׳ה
doctor|医生|yīshēng|יי-שנג
hospital|医院|yīyuàn|יי-יואן
today|今天|jīntiān|ג׳ין-טיין
tomorrow|明天|míngtiān|מינג-טיין
yesterday|昨天|zuótiān|דזואו-טיין
now|现在|xiànzài|שיין-דזאי
t_morning|早上|zǎoshang|דזאו-שאנג
t_evening|傍晚|bàngwǎn|באנג-וואן
t_night|晚上|wǎnshang|וואן-שאנג
t_week|星期|xīngqī|שינג-צ׳י
t_month|月|yuè|יואה
t_year|年|nián|ניין
t_hour|小时|xiǎoshí|שיאו-שה
t_minute|分钟|fēnzhōng|פן-ג׳ונג
p_toilet|洗手间在哪里？|xǐshǒujiān zài nǎlǐ?|שי-שואו-ג׳יין דזאי נה-לי
p_cost|这个多少钱？|zhège duōshao qián?|ג׳ה-גה דואו-שאו צ׳יין
p_nounder|我听不懂|wǒ tīng bu dǒng|וואו טינג בו דונג
p_english|你会说英语吗？|nǐ huì shuō Yīngyǔ ma?|ני חויי שואו יינג-יו מה
p_slow|请说慢一点|qǐng shuō màn yìdiǎn|צ׳ינג שואו מאן יי-דיין
p_bill|请买单|qǐng mǎidān|צ׳ינג מאי-דאן
p_want|我要这个|wǒ yào zhège|וואו יאו ג׳ה-גה
p_expensive|太贵了|tài guì le|טאי גוויי לה
p_discount|可以便宜一点吗？|kěyǐ piányi yìdiǎn ma?|קה-יי פיין-יי יי-דיין מה
p_address|请带我去这个地址|qǐng dài wǒ qù zhège dìzhǐ|צ׳ינג דאי וואו צ׳ו ג׳ה-גה די-ג׳ה
p_hotel|酒店在哪里？|jiǔdiàn zài nǎlǐ?|ג׳יו-דיין דזאי נה-לי
p_doctor|我需要医生|wǒ xūyào yīshēng|וואו שו-יאו יי-שנג
p_police|快叫警察！|kuài jiào jǐngchá!|קואיי ג׳יאו ג׳ינג-צ׳ה
p_israel|我来自以色列|wǒ láizì Yǐsèliè|וואו לאי-דזה יי-סה-ליה
p_name|我叫…|wǒ jiào ...|וואו ג׳יאו
p_nice|很高兴认识你|hěn gāoxìng rènshi nǐ|הן גאו-שינג רן-שה ני
p_water|请给我水|qǐng gěi wǒ shuǐ|צ׳ינג גיי וואו שוויי
p_help|你能帮我吗？|nǐ néng bāng wǒ ma?|ני ננג באנג וואו מה
p_what|这是什么？|zhè shì shénme?|ג׳ה שה שן-מה
p_nospicy|不要辣|bú yào là|בו יאו לה
room|房间|fángjiān|פאנג-ג׳יין
key|钥匙|yàoshi|יאו-שה
bed|床|chuáng|צ׳ואנג
shower|淋浴|línyù|לין-יו
towel|毛巾|máojīn|מאו-ג׳ין
passport|护照|hùzhào|חו-ג׳או
mon|星期一|xīngqīyī|שינג-צ׳י-יי
tue|星期二|xīngqī'èr|שינג-צ׳י-אר
wed|星期三|xīngqīsān|שינג-צ׳י-סאן
thu|星期四|xīngqīsì|שינג-צ׳י-סה
fri|星期五|xīngqīwǔ|שינג-צ׳י-וו
sat|星期六|xīngqīliù|שינג-צ׳י-ליו
sun|星期天|xīngqītiān|שינג-צ׳י-טיין
red|红色|hóngsè|חונג-סה
blue|蓝色|lánsè|לאן-סה
green|绿色|lǜsè|ליו-סה
yellow|黄色|huángsè|הואנג-סה
black|黑色|hēisè|היי-סה
white|白色|báisè|באי-סה
man|男人|nánrén|נאן-רן
woman|女人|nǚrén|ניו-רן
child|孩子|háizi|האי-דזה
family|家人|jiārén|ג׳יה-רן
i|我|wǒ|וואו
you|您|nín|נין
head|头|tóu|טואו
stomach|肚子|dùzi|דו-דזה
hand|手|shǒu|שואו
pain|疼|téng|טנג
medicine|药|yào|יאו
sick|生病|shēngbìng|שנג-בינג
big|大|dà|דה
small|小|xiǎo|שיאו
hot|热|rè|רה
cold|冷|lěng|לנג
bad|不好|bù hǎo|בו האו
beautiful|漂亮|piàoliang|פיאו-ליאנג
new|新|xīn|שין
old|旧|jiù|ג׳יו
fast|快|kuài|קואיי
slow|慢|màn|מאן
near|近|jìn|ג׳ין
far_a|远|yuǎn|יואן
clean|干净|gānjìng|גאן-ג׳ינג
dirty|脏|zāng|דזאנג
tired|累|lèi|ליי
hungry|饿|è|אה
thirsty|渴|kě|קה
happy|开心|kāixīn|קאי-שין
sad|难过|nánguò|נאן-גואו
easy|容易|róngyì|רונג-יי
difficult|难|nán|נאן
many|很多|hěn duō|הן דואו
eat|吃|chī|צ׳ה
drink|喝|hē|הה
go|去|qù|צ׳ו
buy|买|mǎi|מאי
speak|说|shuō|שואו
sleep|睡觉|shuìjiào|שוויי-ג׳יאו
understand|懂|dǒng|דונג
come|来|lái|לאי
want|要|yào|יאו
need|需要|xūyào|שו-יאו
know|知道|zhīdào|ג׳ה-דאו
see|看|kàn|קאן
hear|听|tīng|טינג
give|给|gěi|גיי
take|拿|ná|נה
pay|付钱|fùqián|פו-צ׳יין
wait|等|děng|דנג
walk|走路|zǒulù|דזואו-לו
read|读|dú|דו
write|写|xiě|שייה
love|爱|ài|אאי
work|工作|gōngzuò|גונג-דזואו
swim|游泳|yóuyǒng|יואו-יונג
c_table|两个人|liǎng ge rén|ליאנג גה רן
c_menu|请给我菜单|qǐng gěi wǒ càidān|צ׳ינג גיי וואו צאי-דאן
c_noice|不要冰|bú yào bīng|בו יאו בינג
c_nomeat|我不吃肉|wǒ bù chī ròu|וואו בו צ׳ה רואו
c_allergy|我对坚果过敏|wǒ duì jiānguǒ guòmǐn|וואו דויי ג׳יין-גואו גואו-מין
c_delicious|太好吃了！|tài hǎochī le!|טאי האו-צ׳ה לה
c_reserv|我有预订|wǒ yǒu yùdìng|וואו יואו יו-דינג
c_wifi|Wi-Fi密码是什么？|Wi-Fi mìmǎ shì shénme?|וואי-פאי מי-מה שה שן-מה
c_checkout|几点退房？|jǐ diǎn tuìfáng?|ג׳י דיין טויי-פאנג
c_howget|怎么去那里？|zěnme qù nàlǐ?|דזן-מה צ׳ו נה-לי
c_stophere|请在这里停车|qǐng zài zhèlǐ tíngchē|צ׳ינג דזאי ג׳ה-לי טינג-צ׳ה
c_far|远吗？|yuǎn ma?|יואן מה
c_card|可以刷卡吗？|kěyǐ shuākǎ ma?|קה-יי שואה-קה מה
c_looking|我只是看看，谢谢|wǒ zhǐshì kànkan, xièxie|וואו ג׳ה-שה קאן-קאן, שייה-שייה
c_yourname|您叫什么名字？|nín jiào shénme míngzi?|נין ג׳יאו שן-מה מינג-דזה
c_wherefrom|您是哪国人？|nín shì nǎ guó rén?|נין שה נה גואו רן
c_seeyou|回头见|huítóu jiàn|חויי-טואו ג׳יין
c_cheers|干杯！|gānbēi!|גאן-ביי
c_lost|我迷路了|wǒ mílù le|וואו מי-לו לה
c_passport|我的护照丢了|wǒ de hùzhào diū le|וואו דה חו-ג׳או דיו לה
c_hurts|这里疼|zhèlǐ téng|ג׳ה-לי טנג
c_time|现在几点？|xiànzài jǐ diǎn?|שיין-דזאי ג׳י דיין
c_again|请再说一遍|qǐng zài shuō yí biàn|צ׳ינג דזאי שואו יי ביין
c_write|可以写下来吗？|kěyǐ xiě xiàlái ma?|קה-יי שייה שיה-לאי מה
dog|狗|gǒu|גואו
cat|猫|māo|מאו
bird|鸟|niǎo|ניאו
horse|马|mǎ|מה
cow|牛|niú|ניו
pig|猪|zhū|ג׳ו
elephant|大象|dàxiàng|דה-שיאנג
monkey|猴子|hóuzi|הואו-דזה
snake|蛇|shé|שה
mosquito|蚊子|wénzi|ון-דזה
lion|狮子|shīzi|שה-דזה
duck|鸭子|yāzi|יה-דזה
apple|苹果|píngguǒ|פינג-גואו
banana|香蕉|xiāngjiāo|שיאנג-ג׳יאו
orange|橙子|chéngzi|צ׳נג-דזה
mango|芒果|mángguǒ|מאנג-גואו
pineapple|菠萝|bōluó|בו-לואו
watermelon|西瓜|xīguā|שי-גואה
coconut|椰子|yēzi|יה-דזה
grapes|葡萄|pútao|פו-טאו
lemon|柠檬|níngméng|נינג-מנג
strawberry|草莓|cǎoméi|צאו-מיי
papaya|木瓜|mùguā|מו-גואה
tomato|西红柿|xīhóngshì|שי-חונג-שה
potato|土豆|tǔdòu|טו-דואו
onion|洋葱|yángcōng|יאנג-צונג
garlic|大蒜|dàsuàn|דה-סואן
cucumber|黄瓜|huángguā|הואנג-גואה
carrot|胡萝卜|húluóbo|חו-לואו-בו
chili|辣椒|làjiāo|לה-ג׳יאו
corn|玉米|yùmǐ|יו-מי
mushroom|蘑菇|mógu|מו-גו
lettuce|生菜|shēngcài|שנג-צאי
eggplant|茄子|qiézi|צ׳יה-דזה
soup|汤|tāng|טאנג
salad|沙拉|shālā|שה-לה
noodles|面条|miàntiáo|מיין-טיאו
cheese|奶酪|nǎilào|נאי-לאו
butter|黄油|huángyóu|הואנג-יואו
salt|盐|yán|יאן
sugar|糖|táng|טאנג
cake|蛋糕|dàngāo|דאן-גאו
icecream|冰淇淋|bīngqílín|בינג-צ׳י-לין
juice|果汁|guǒzhī|גואו-ג׳ה
wine|葡萄酒|pútaojiǔ|פו-טאו-ג׳יו
breakfast|早餐|zǎocān|דזאו-צאן
lunch|午餐|wǔcān|וו-צאן
dinner|晚餐|wǎncān|וואן-צאן
fork|叉子|chāzi|צ׳ה-דזה
spoon|勺子|sháozi|שאו-דזה
knife|刀|dāo|דאו
glass|杯子|bēizi|ביי-דזה
plate|盘子|pánzi|פאן-דזה
bank|银行|yínháng|יין-האנג
atm|取款机|qǔkuǎnjī|צ׳ו-קואן-ג׳י
beach|海滩|hǎitān|האי-טאן
museum|博物馆|bówùguǎn|בו-וו-גואן
temple|寺庙|sìmiào|סה-מיאו
street|街道|jiēdào|ג׳יה-דאו
city|城市|chéngshì|צ׳נג-שה
shop|商店|shāngdiàn|שאנג-דיין
supermarket|超市|chāoshì|צ׳או-שה
park|公园|gōngyuán|גונג-יואן
station|车站|chēzhàn|צ׳ה-ג׳אן
embassy|大使馆|dàshǐguǎn|דה-שה-גואן
phone|手机|shǒujī|שואו-ג׳י
charger|充电器|chōngdiànqì|צ׳ונג-דיין-צ׳י
bag|包|bāo|באו
shoes|鞋|xié|שיה
clothes|衣服|yīfu|יי-פו
hat|帽子|màozi|מאו-דזה
glasses|眼镜|yǎnjìng|יאן-ג׳ינג
map|地图|dìtú|די-טו
sunscreen|防晒霜|fángshàishuāng|פאנג-שאי-שואנג
umbrella|雨伞|yǔsǎn|יו-סאן
sf_order|我想点菜|wǒ xiǎng diǎn cài|וואו שיאנג דיין צאי
sf_recommend|你推荐什么？|nǐ tuījiàn shénme?|ני טויי-ג׳יין שן-מה
sf_bottle|请给我一瓶水|qǐng gěi wǒ yì píng shuǐ|צ׳ינג גיי וואו יי פינג שוויי
sf_isspicy|这个辣吗？|zhège là ma?|ג׳ה-גה לה מה
sf_onemore|再来一个|zài lái yí ge|דזאי לאי יי גה
sf_nosugar|不要糖|bú yào táng|בו יאו טאנג
sf_takeaway|请帮我打包|qǐng bāng wǒ dǎbāo|צ׳ינג באנג וואו דה-באו
ss_smaller|有小一点的吗？|yǒu xiǎo yìdiǎn de ma?|יואו שיאו יי-דיין דה מה
ss_try|可以试一下吗？|kěyǐ shì yíxià ma?|קה-יי שה יי-שיה מה
ss_two|我要两个|wǒ yào liǎng ge|וואו יאו ליאנג גה
ss_change|有零钱吗？|yǒu língqián ma?|יואו לינג-צ׳יין מה
ss_last|最低多少钱？|zuì dī duōshao qián?|דזויי די דואו-שאו צ׳יין
ss_bag|可以给我一个袋子吗？|kěyǐ gěi wǒ yí ge dàizi ma?|קה-יי גיי וואו יי גה דאי-דזה מה
sm_busstop|公交车站在哪里？|gōngjiāo chēzhàn zài nǎlǐ?|גונג-ג׳יאו צ׳ה-ג׳אן דזאי נה-לי
sm_trainleave|火车几点出发？|huǒchē jǐ diǎn chūfā?|הואו-צ׳ה ג׳י דיין צ׳ו-פה
sm_oneticket|一张票|yì zhāng piào|יי ג׳אנג פיאו
sm_howlong|要多长时间？|yào duō cháng shíjiān?|יאו דואו צ׳אנג שה-ג׳יין
sm_meter|请打表|qǐng dǎbiǎo|צ׳ינג דה-ביאו
sm_slowdrive|请开慢一点|qǐng kāi màn yìdiǎn|צ׳ינג קאי מאן יי-דיין
sm_airport|我要去机场|wǒ yào qù jīchǎng|וואו יאו צ׳ו ג׳י-צ׳אנג
sh_leavebag|可以把包放在这里吗？|kěyǐ bǎ bāo fàng zài zhèlǐ ma?|קה-יי בה באו פאנג דזאי ג׳ה-לי מה
sh_ac|空调坏了|kōngtiáo huài le|קונג-טיאו הואיי לה
sh_breakfast|含早餐吗？|hán zǎocān ma?|האן דזאו-צאן מה
sh_towel|我需要一条毛巾|wǒ xūyào yì tiáo máojīn|וואו שו-יאו יי טיאו מאו-ג׳ין
sh_taxi|可以帮我叫出租车吗？|kěyǐ bāng wǒ jiào chūzūchē ma?|קה-יי באנג וואו ג׳יאו צ׳ו-דזו-צ׳ה מה
sh_late|可以晚点退房吗？|kěyǐ wǎn diǎn tuìfáng ma?|קה-יי וואן דיין טויי-פאנג מה
so_learning|我在学中文|wǒ zài xué Zhōngwén|וואו דזאי שואה ג׳ונג-ון
so_thankshelp|谢谢你的帮助|xièxie nǐ de bāngzhù|שייה-שייה ני דה באנג-ג׳ו
so_photo|可以帮我们拍张照吗？|kěyǐ bāng wǒmen pāi zhāng zhào ma?|קה-יי באנג וואו-מן פאי ג׳אנג ג׳או מה
so_like|我喜欢这里|wǒ xǐhuan zhèlǐ|וואו שי-הואן ג׳ה-לי
so_vacation|我来度假|wǒ lái dùjià|וואו לאי דו-ג׳יה
so_howsay|这个怎么说？|zhège zěnme shuō?|ג׳ה-גה דזן-מה שואו
so_noproblem|没问题|méi wèntí|מיי ון-טי
so_beautiful|太漂亮了！|tài piàoliang le!|טאי פיאו-ליאנג לה
sp_unwell|我不舒服|wǒ bù shūfu|וואו בו שו-פו
sp_nearhosp|最近的医院在哪里？|zuì jìn de yīyuàn zài nǎlǐ?|דזויי ג׳ין דה יי-יואן דזאי נה-לי
sp_fever|我发烧了|wǒ fāshāo le|וואו פה-שאו לה
sp_helpme|请帮帮我|qǐng bāngbang wǒ|צ׳ינג באנג-באנג וואו
sp_stolen|我的包被偷了|wǒ de bāo bèi tōu le|וואו דה באו ביי טואו לה
sp_embassy|我需要以色列大使馆|wǒ xūyào Yǐsèliè dàshǐguǎn|וואו שו-יאו יי-סה-ליה דה-שה-גואן
dt1|去哪里？|qù nǎlǐ?|צ׳ו נה-לי
dt2|请去这个酒店。|qǐng qù zhège jiǔdiàn.|צ׳ינג צ׳ו ג׳ה-גה ג׳יו-דיין
dt3|好的，上车吧。|hǎo de, shàng chē ba.|האו דה, שאנג צ׳ה בה
dt4|多少钱？|duōshao qián?|דואו-שאו צ׳יין
dt5|两百块。|liǎngbǎi kuài.|ליאנג-באי קואיי
dt6|请打表。|qǐng dǎbiǎo.|צ׳ינג דה-ביאו
dt7|没问题。|méi wèntí.|מיי ון-טי
dt8|请在这里停，谢谢。|qǐng zài zhèlǐ tíng, xièxie.|צ׳ינג דזאי ג׳ה-לי טינג, שייה-שייה
dm1|这个怎么卖？|zhège zěnme mài?|ג׳ה-גה דזן-מה מאי
dm2|三百块。|sānbǎi kuài.|סאן-באי קואיי
dm3|太贵了！两百块行吗？|tài guì le! liǎngbǎi kuài xíng ma?|טאי גוויי לה! ליאנג-באי קואיי שינג מה
dm4|两百五，最低价了。|liǎngbǎi wǔ, zuì dī jià le.|ליאנג-באי וו, דזויי די ג׳יה לה
dm5|好，我要了。|hǎo, wǒ yào le.|האו, וואו יאו לה
dm6|谢谢您！|xièxie nín!|שייה-שייה נין
dr1|几位？|jǐ wèi?|ג׳י וויי
dr2|两位。|liǎng wèi.|ליאנג וויי
dr3|您要点什么？|nín yào diǎn shénme?|נין יאו דיין שן-מה
dr4|鸡肉炒饭，不要辣。|jīròu chǎofàn, bú yào là.|ג׳י-רואו צ׳או-פאן, בו יאו לה
dr5|喝点什么？|hē diǎn shénme?|הה דיין שן-מה
dr6|只要水，谢谢。|zhǐ yào shuǐ, xièxie.|ג׳ה יאו שוויי, שייה-שייה
dr7|买单，谢谢。|mǎidān, xièxie.|מאי-דאן, שייה-שייה
dh1|你好，我有预订。|nǐ hǎo, wǒ yǒu yùdìng.|ני האו, וואו יואו יו-דינג
dh2|请问您贵姓？|qǐngwèn nín guìxìng?|צ׳ינג-ון נין גוויי-שינג
dh3|我姓…|wǒ xìng ...|וואו שינג
dh4|请出示护照。|qǐng chūshì hùzhào.|צ׳ינג צ׳ו-שה חו-ג׳או
dh5|您的房间是三零五。|nín de fángjiān shì sān líng wǔ.|נין דה פאנג-ג׳יין שה סאן לינג וו
dh6|早餐几点？|zǎocān jǐ diǎn?|דזאו-צאן ג׳י דיין
dh7|七点到十点。|qī diǎn dào shí diǎn.|צ׳י דיין דאו שה דיין
dd1|请问，火车站在哪里？|qǐngwèn, huǒchēzhàn zài nǎlǐ?|צ׳ינג-ון, הואו-צ׳ה-ג׳אן דזאי נה-לי
dd2|一直走，然后左转。|yìzhí zǒu, ránhòu zuǒ zhuǎn.|יי-ג׳ה דזואו, ראן-הואו דזואו ג׳ואן
dd3|离这里远吗？|lí zhèlǐ yuǎn ma?|לי ג׳ה-לי יואן מה
dd4|不远，走路五分钟。|bù yuǎn, zǒulù wǔ fēnzhōng.|בו יואן, דזואו-לו וו פן-ג׳ונג
dd5|太谢谢了！|tài xièxie le!|טאי שייה-שייה לה
da1|您来访的目的是什么？|nín láifǎng de mùdì shì shénme?|נין לאי-פאנג דה מו-די שה שן-מה
da2|您要待多久？|nín yào dāi duō jiǔ?|נין יאו דאי דואו ג׳יו
da3|两个星期。|liǎng ge xīngqī.|ליאנג גה שינג-צ׳י
da4|欢迎！|huānyíng!|הואן-יינג
dp1|哪里疼？|nǎlǐ téng?|נה-לי טנג
dp2|这个药一天吃两次。|zhège yào yì tiān chī liǎng cì.|ג׳ה-גה יאו יי טיין צ׳ה ליאנג צה
dp4|早日康复！|zǎorì kāngfù!|דזאו-רה קאנג-פו
ds1|我想买一张带流量的电话卡。|wǒ xiǎng mǎi yì zhāng dài liúliàng de diànhuà kǎ.|וואו שיאנג מאי יי ג׳אנג דאי ליו-ליאנג דה דיין-הואה קה
ds2|要几天的？|yào jǐ tiān de?|יאו ג׳י טיין דה
ds3|十天的。|shí tiān de.|שה טיין דה
ds4|好了，现在可以上网了。|hǎo le, xiànzài kěyǐ shàngwǎng le.|האו לה, שיין-דזאי קה-יי שאנג-וואנג לה
dc1|您需要什么？|nín xūyào shénme?|נין שו-יאו שן-מה
dc2|这个有蓝色的吗？|zhège yǒu lánsè de ma?|ג׳ה-גה יואו לאן-סה דה מה
dc3|有，您穿多大号？|yǒu, nín chuān duō dà hào?|יואו, נין צ׳ואן דואו דה האו
dc4|中号。|zhōng hào.|ג׳ונג האו
dc5|可以，试衣间在那边。|kěyǐ, shìyījiān zài nàbiān.|קה-יי, שה-יי-ג׳יין דזאי נה-ביין
dg1|我想预订明天的一日游。|wǒ xiǎng yùdìng míngtiān de yírì yóu.|וואו שיאנג יו-דינג מינג-טיין דה יי-רה יואו
dg2|早上八点出发。|zǎoshang bā diǎn chūfā.|דזאו-שאנג בא דיין צ׳ו-פה
dg3|包午饭吗？|bāo wǔfàn ma?|באו וו-פאן מה
dg4|包，还有水。|bāo, hái yǒu shuǐ.|באו, האי יואו שוויי
dg5|太好了，两个人。|tài hǎo le, liǎng ge rén.|טאי האו לה, ליאנג גה רן
w_weather|天气|tiānqì|טיין-צ׳י
w_sun|太阳|tàiyáng|טאי-יאנג
w_rain|雨|yǔ|יו
w_wind|风|fēng|פנג
w_cloud|云|yún|יון
w_snow|雪|xuě|שואה
w_storm|暴风雨|bàofēngyǔ|באו-פנג-יו
w_humid|潮湿|cháoshī|צ׳או-שה
j_teacher|老师|lǎoshī|לאו-שה
j_driver|司机|sījī|סה-ג׳י
j_waiter|服务员|fúwùyuán|פו-וו-יואן
j_cook|厨师|chúshī|צ׳ו-שה
j_student|学生|xuésheng|שואה-שנג
j_engineer|工程师|gōngchéngshī|גונג-צ׳נג-שה
j_nurse|护士|hùshi|חו-שה
j_seller|售货员|shòuhuòyuán|שואו-הואו-יואן
j_guide|导游|dǎoyóu|דאו-יואו
j_pharmacist|药剂师|yàojìshī|יאו-ג׳י-שה
e_angry|生气|shēngqì|שנג-צ׳י
e_scared|害怕|hàipà|האי-פה
e_bored|无聊|wúliáo|וו-ליאו
e_worried|担心|dānxīn|דאן-שין
e_surprised|惊讶|jīngyà|ג׳ינג-יה
e_calm|平静|píngjìng|פינג-ג׳ינג
e_excited|兴奋|xīngfèn|שינג-פן
e_love|恋爱了|liàn'ài le|ליין-אאי לה
dir_north|北|běi|ביי
dir_south|南|nán|נאן
dir_east|东|dōng|דונג
dir_west|西|xī|שי
dir_corner|拐角|guǎijiǎo|גואיי-ג׳יאו
dir_light|红绿灯|hónglǜdēng|חונג-ליו-דנג
dir_behind|后面|hòumiàn|הואו-מיין
dir_front|前面|qiánmiàn|צ׳יין-מיין
dir_next|旁边|pángbiān|פאנג-ביין
dir_back|回去|huíqù|חויי-צ׳ו
dir_up|上面|shàngmiàn|שאנג-מיין
dir_down|下面|xiàmiàn|שיה-מיין`
});

/* ---- numbers & prices (0–999,999) in Mandarin → one token [hanzi, pinyin, hebrew]. 零 fills gaps, 两 for 2 before 百/千/万 ---- */
NW.zh = (() => {
  const C = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const P = ['líng', 'yī', 'èr', 'sān', 'sì', 'wǔ', 'liù', 'qī', 'bā', 'jiǔ'];
  const H = ['לינג', 'יי', 'אר', 'סאן', 'סה', 'וו', 'ליו', 'צ׳י', 'בא', 'ג׳יו'];
  const U = [['千', 'qiān', 'צ׳יין'], ['百', 'bǎi', 'באי'], ['十', 'shí', 'שה'], ['', '', '']];
  function u10000(n, lead) {
    const d = [Math.floor(n / 1000), Math.floor(n % 1000 / 100), Math.floor(n % 100 / 10), n % 10];
    const t = [], p = [], h = [];
    let zero = false, started = false;
    d.forEach((x, i) => {
      if (!x) { if (started) zero = true; return; }
      if (zero) { t.push('零'); p.push('líng'); h.push('לינג'); zero = false; }
      if (i === 2 && x === 1 && !started && lead) { t.push('十'); p.push('shí'); h.push('שה'); }
      else {
        const two = x === 2 && (i === 0 || i === 1);
        t.push((two ? '两' : C[x]) + U[i][0]);
        p.push((two ? 'liǎng' : (x === 1 && i < 2 ? 'yì' : P[x])) + U[i][1]);
        h.push((two ? 'ליאנג' : H[x]) + (U[i][2] ? '-' + U[i][2] : ''));
      }
      started = true;
    });
    return [t.join(''), p.join(' '), h.join(' ')];
  }
  return (n, cur) => {
    let t, p, h;
    if (n === 0) { t = '零'; p = 'líng'; h = 'לינג'; }
    else {
      const wan = Math.floor(n / 10000), rest = n % 10000, parts = [];
      if (wan) { const x = wan === 2 ? ['两', 'liǎng', 'ליאנג'] : wan === 1 ? ['一', 'yí', 'יי'] : u10000(wan, true); parts.push([x[0] + '万', x[1].replace(/ /g, '') + 'wàn', x[2].replace(/ /g, '-') + '-וואן']); }
      if (rest) { const x = u10000(rest, !wan); if (wan && rest < 1000) parts.push(['零' + x[0], 'líng ' + x[1], 'לינג ' + x[2]]); else parts.push(x); }
      t = parts.map(x => x[0]).join(''); p = parts.map(x => x[1]).join(' '); h = parts.map(x => x[2]).join(' ');
    }
    if (cur) { t += '元'; p += ' yuán'; h += ' יואן'; }
    return [tk(t, p, h)];
  };
})();
NUM.zh = { sep: '', tokens: (n, cur) => NW.zh(n, cur) };
