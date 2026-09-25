/* ===== LingoNest — lang-ar.js : Arabic content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: one line per concept id (see content.js) → id|native text|Latin transliteration|pronunciation in Hebrew letters
   To add words: add the concept to content.js, then one line here (and in every other lang-xx.js). */
LINGO.registerLang('ar', {
  ver: '1.10.0',
  curSym: "$",
  /* travel kit: [icon, label{he,en}, number, (second number)] — verify locally before a trip */
  country: {"he": "מדינות דוברות ערבית", "en": "Arabic-speaking countries", "ru": "Арабоязычные страны", "es": "Países de habla árabe", "ar": "الدول الناطقة بالعربية"},
  emergency: [
    ["🇦🇪", {"he": "איחוד האמירויות — משטרה / אמבולנס", "en": "UAE — police / ambulance", "ru": "ОАЭ — полиция / скорая", "es": "EAU — policía / ambulancia", "ar": "الإمارات — الشرطة / الإسعاف"}, "999", "998"],
    ["🇪🇬", {"he": "מצרים — משטרה / אמבולנס", "en": "Egypt — police / ambulance", "ru": "Египет — полиция / скорая", "es": "Egipto — policía / ambulancia", "ar": "مصر — الشرطة / الإسعاف"}, "122", "123"],
    ["🇯🇴", {"he": "ירדן — חירום", "en": "Jordan — emergency", "ru": "Иордания — экстренная служба", "es": "Jordania — emergencias", "ar": "الأردن — الطوارئ"}, "911"],
    ["🇲🇦", {"he": "מרוקו — משטרה / אמבולנס", "en": "Morocco — police / ambulance", "ru": "Марокко — полиция / скорая", "es": "Marruecos — policía / ambulancia", "ar": "المغرب — الشرطة / الإسعاف"}, "19", "15"]
  ],
  /* grammar & culture tips: t=title, b=body ({he,en}), ex=[native, roman, heb, meaning he, meaning en] */
  tips: [
    {"t": {"he": "ספרותית מול מדוברת", "en": "Standard vs. spoken Arabic"}, "b": {"he": "האפליקציה מלמדת ערבית ספרותית פשוטה (فصحى) — מבינים אותה בכל מקום, מהטלוויזיה ומהשלטים. ברחוב כל מדינה מדברת בניב משלה (מצרי, לבנטיני, מפרצי), אבל אם תדבר לאט ובפשטות — יבינו אותך. מקומיים ישמחו ללמד אותך את הגרסה שלהם.", "en": "The app teaches simple Modern Standard Arabic — understood everywhere, from TV and signs. On the street each country has its dialect, but speak slowly and simply and you'll be understood."}, "ex": [["ماذا؟ / شو؟", "madha / shu", "מאד׳א / שו", "מה? (ספרותית / לבנטינית)", "What? (standard / Levantine)"]]},
    {"t": {"he": "שורשים — בדיוק כמו בעברית", "en": "Roots — just like Hebrew"}, "b": {"he": "לדובר עברית יש יתרון ענק: ערבית בנויה על שורשים של 3 אותיות, כמו עברית, והרבה שורשים דומים. כ-ת-ב → كتب (לכתוב), كتاب (ספר), مكتب (משרד). ש-ל-ם → سلام (שלום).", "en": "A huge advantage for Hebrew speakers: Arabic is built on 3-letter roots, many similar to Hebrew. k-t-b → كتب (write), كتاب (book), مكتب (office)."}, "ex": [["كتاب", "kitab", "כתאב", "ספר", "Book"], ["سلام", "salam", "סלאם", "שלום", "Peace / hello"]]},
    {"t": {"he": "אין \"הוא/יש\" בהווה", "en": "No \"is/am\" in the present"}, "b": {"he": "כמו בעברית: \"אני עייף\" בלי פועל. أنا تعبان = אני עייף, هذا جميل = זה יפה.", "en": "Like Hebrew: \"I tired\" — no verb. أنا تعبان = I'm tired, هذا جميل = this is beautiful."}, "ex": [["أنا من إسرائيل", "ana min isra'il", "אנא מן אסראאיל", "אני מישראל", "I'm from Israel"], ["هذا جميل", "hatha jamil", "האד׳א ג׳מיל", "זה יפה", "This is beautiful"]]},
    {"t": {"he": "ה\"א\" הידיעה: ال", "en": "\"The\": ال"}, "b": {"he": "ال (אל) מחובר לתחילת המילה. לפני חלק מהאותיות (ת, ד, ר, ז, ס, ש, צ, ט, נ...) הל׳ נבלעת והאות מוכפלת: الشمس נשמע \"א-שמס\" ולא \"אל-שמס\".", "en": "ال (al) attaches to the word. Before \"sun letters\" (t, d, r, z, s, sh, n…) the l is swallowed: الشمس sounds \"ash-shams\"."}, "ex": [["الحساب", "al-hisab", "אל-חסאב", "החשבון", "The bill"], ["الشمس", "ash-shams", "א-שמס", "השמש", "The sun"]]},
    {"t": {"he": "פנייה לגבר ולאישה", "en": "Talking to a man vs. a woman"}, "b": {"he": "כמו בעברית, הפנייה משתנה: من فضلك לגבר (מן פדלַכּ), من فضلكِ לאישה (מן פדלִכּ). האפליקציה משתמשת בפנייה לגבר — כשפונים לאישה משנים את הסוף ל-\"כִּ\".", "en": "Like Hebrew, \"you\" changes: من فضلك to a man (fadlak), to a woman (fadlik). The app uses the male form — change the ending for a woman."}, "ex": [["شكرا لكِ", "shukran laki", "שוכרן לַכִּי", "תודה לך (לאישה)", "Thank you (to a woman)"]]},
    {"t": {"he": "ברכות שחשוב להכיר", "en": "Greetings worth knowing"}, "b": {"he": "السلام عليكم (א-סלאם עליכום) היא הברכה הכי נפוצה, ועונים وعليكم السلام (ועליכום א-סלאם). إن شاء الله (אנשאללה) = אם ירצה השם — תשמע את זה על כל תוכנית לעתיד.", "en": "السلام عليكم is the most common greeting; reply وعليكم السلام. إن شاء الله = God willing — you'll hear it about any plan."}, "ex": [["السلام عليكم", "as-salamu alaykum", "א-סלאמו עליכום", "שלום עליכם", "Peace be upon you"], ["وعليكم السلام", "wa-alaykum as-salam", "ועליכום א-סלאם", "ועליכם השלום", "And upon you peace"]]}
  ],
  alpha: [
    ["ا","ألف","א","alif"],
    ["ب","باء","ב","ba"],
    ["ت","تاء","ת","ta"],
    ["ث","ثاء","ת׳ (th כמו think)","tha"],
    ["ج","جيم","ג׳","jim"],
    ["ح","حاء","ח","ḥa"],
    ["خ","خاء","ח׳ (כ גרונית)","kha"],
    ["د","دال","ד","dal"],
    ["ذ","ذال","ד׳ (th כמו this)","dhal"],
    ["ر","راء","ר מתגלגלת","ra"],
    ["ز","زاي","ז","zay"],
    ["س","سين","ס","sin"],
    ["ش","شين","ש","shin"],
    ["ص","صاد","צ׳ (ס נחרצת)","ṣad"],
    ["ض","ضاد","ד נחרצת","ḍad"],
    ["ط","طاء","ט","ṭa"],
    ["ظ","ظاء","ט׳ (ד׳ נחרצת)","ẓa"],
    ["ع","عين","ע גרונית","ʿayn"],
    ["غ","غين","ע׳ (ר צרפתית)","ghayn"],
    ["ف","فاء","פ","fa"],
    ["ق","قاف","ק גרונית","qaf"],
    ["ك","كاف","כ / ק","kaf"],
    ["ل","لام","ל","lam"],
    ["م","ميم","מ","mim"],
    ["ن","نون","נ","nun"],
    ["ه","هاء","ה","ha"],
    ["و","واو","ו","waw"],
    ["ي","ياء","י","ya"]
  ],
  vowels: [
    ["بَ","بَ","בַּ — פתחה (a)","fatha (a)"],
    ["بِ","بِ","בִּ — כסרה (i)","kasra (i)"],
    ["بُ","بُ","בֻּ — דמה (u)","damma (u)"],
    ["بْ","بْ","בְ — סוכון (בלי תנועה)","sukun (no vowel)"],
    ["بّ","بّ","שדה — הכפלת האות","shadda (double)"],
    ["بًا","بًا","בַּן — תנוין","tanwin (-an)"],
    ["با","با","בָּא — אַ ארוכה","long aa"],
    ["بي","بي","בִּי — אִי ארוכה","long ii"],
    ["بو","بو","בּוּ — אוּ ארוכה","long uu"]
  ],
  /* speaker = female: [regex source, flags, replacement] */
  gender: [["آسف","g","آسفة"],["\\basif\\b","g","asifa"],["^אסף$","g","אספה"],["ضائع","g","ضائعة"],["da'i'","g","da'i'a"],["דאאע","g","דאאעה"]],
  words: `hello|مرحبا|marhaba|מרחבא
bye|مع السلامة|ma'a as-salama|מע א-סלאמה
morning|صباح الخير|sabah al-khayr|צבאח אל-ח׳יר
thanks|شكرا|shukran|שוכרן
please|من فضلك|min fadlak|מן פדלכ
sorry|آسف|asif|אסף
yes|نعم|na'am|נעם
no|لا|la|לא
howareyou|كيف حالك؟|kayf halak|כיף חאלכ
good|جيد|jayyid|ג׳ייד
ok|حسنا|hasanan|חסנן
n1|واحد|wahid|ואחד
n2|اثنان|ithnan|אתנאן
n3|ثلاثة|thalatha|תלאתה
n4|أربعة|arba'a|ארבעה
n5|خمسة|khamsa|ח׳מסה
n6|ستة|sitta|סתה
n7|سبعة|sab'a|סבעה
n8|ثمانية|thamaniya|תמאניה
n9|تسعة|tis'a|תסעה
n10|عشرة|'ashara|עשרה
water|ماء|maa|מאא
toilet|الحمام|al-hammam|אל-חמאם
where|أين؟|ayna|אין
howmuch|كم؟|kam|כם
this|هذا|hatha|האד׳א
friend|صديق|sadiq|צדיק
food|طعام|ta'am|טעאם
bread|خبز|khubz|ח׳ובז
coffee|قهوة|qahwa|קהווה
tea|شاي|shay|שאי
chicken|دجاج|dajaj|דג׳אג׳
fish|سمك|samak|סמכ
rice|أرز|aruzz|ארז
beer|بيرة|bira|בירה
bill|الحساب|al-hisab|אל-חסאב
tasty|لذيذ|ladhidh|לד׳יד׳
taxi|تاكسي|taksi|טאכסי
bus|حافلة|hafila|חאפלה
train|قطار|qitar|קטאר
airport|مطار|matar|מטאר
hotel|فندق|funduq|פונדק
left|يسار|yasar|יסאר
right|يمين|yamin|ימין
straight|على طول|'ala tul|עלא טול
stop|قف|qif|קף
ticket|تذكرة|tadhkira|תד׳כרה
money|نقود|nuqud|נוקוד
expensive|غالي|ghali|ע׳אלי
cheap|رخيص|rakhis|רח׳יץ
market|سوق|suq|סוק
pharmacy|صيدلية|saydaliyya|צידליה
open|مفتوح|maftuh|מפתוח
closed|مغلق|mughlaq|מע׳לק
help|النجدة!|an-najda|א-נג׳דה
police|شرطة|shurta|שורטה
doctor|طبيب|tabib|טביב
hospital|مستشفى|mustashfa|מוסתשפא
today|اليوم|al-yawm|אל-יום
tomorrow|غدا|ghadan|ע׳דן
yesterday|أمس|ams|אמס
now|الآن|al-an|אל-אן
p_toilet|أين الحمام؟|ayna al-hammam|אין אל-חמאם
p_cost|كم السعر؟|kam as-si'r|כם א-סער
p_nounder|لا أفهم|la afham|לא אפהם
p_english|هل تتكلم الإنجليزية؟|hal tatakallam al-injliziyya|הל תתכלם אל-אינג׳ליזיה
p_slow|تكلم ببطء من فضلك|takallam bi-but' min fadlak|תכלם בבוטא מן פדלכ
p_bill|الحساب من فضلك|al-hisab min fadlak|אל-חסאב מן פדלכ
p_want|أريد هذا|urid hatha|אוריד האד׳א
p_expensive|هذا غالٍ جدا|hatha ghali jiddan|האד׳א ע׳אלי ג׳דן
p_discount|هل يمكن تخفيض؟|hal yumkin takhfid|הל יומכן תח׳פיץ
p_address|خذني إلى هذا العنوان|khudhni ila hatha al-'unwan|ח׳ד׳ני אלא האד׳א אל-עונואן
p_hotel|أين الفندق؟|ayna al-funduq|אין אל-פונדק
p_doctor|أحتاج إلى طبيب|ahtaj ila tabib|אחתאג׳ אלא טביב
p_police|اتصل بالشرطة!|ittasil bish-shurta|אתצל באשורטה
p_israel|أنا من إسرائيل|ana min isra'il|אנא מן אסראאיל
p_name|اسمي ...|ismi|אסמי
p_nice|تشرفنا|tasharrafna|תשרפנא
p_water|ماء من فضلك|maa min fadlak|מאא מן פדלכ
p_help|هل يمكنك مساعدتي؟|hal yumkinuka musa'adati|הל יומכנכ מסאעדתי
p_what|ما هذا؟|ma hatha|מא האד׳א
p_nospicy|بدون حار من فضلك|bidun harr min fadlak|בדון חאר מן פדלכ
egg|بيضة|bayda|בידה
fruit|فواكه|fawakih|פואכה
veg|خضروات|khudrawat|ח׳ודראוואת
meat|لحم|lahm|לחם
milk|حليب|halib|חליב
spicy|حار|harr|חאר
restaurant|مطعم|mat'am|מטעם
ice|ثلج|thalj|תלג׳
room|غرفة|ghurfa|ע׳ורפה
key|مفتاح|miftah|מפתאח
bed|سرير|sarir|סריר
shower|دش|dush|דוש
towel|منشفة|minshafa|מנשפה
passport|جواز سفر|jawaz safar|ג׳ואז ספר
n0|صفر|sifr|צפר
n20|عشرون|'ishrun|עשרון
n50|خمسون|khamsun|ח׳מסון
n100|مئة|mi'a|מיאה
n1000|ألف|alf|אלף
mon|الاثنين|al-ithnayn|אל-אתנין
tue|الثلاثاء|ath-thulatha'|א-תלאתא
wed|الأربعاء|al-arbi'a'|אל-ארבעא
thu|الخميس|al-khamis|אל-ח׳מיס
fri|الجمعة|al-jum'a|אל-ג׳ומעה
sat|السبت|as-sabt|א-סבת
sun|الأحد|al-ahad|אל-אחד
red|أحمر|ahmar|אחמר
blue|أزرق|azraq|אזרק
green|أخضر|akhdar|אח׳דר
yellow|أصفر|asfar|אצפר
black|أسود|aswad|אסווד
white|أبيض|abyad|אביד
man|رجل|rajul|רג׳ול
woman|امرأة|imra'a|אמראה
child|طفل|tifl|טפל
family|عائلة|'a'ila|עאאלה
i|أنا|ana|אנא
you|أنت|anta|אנת
head|رأس|ra's|ראס
stomach|بطن|batn|בטן
hand|يد|yad|יד
pain|ألم|alam|אלם
medicine|دواء|dawa'|דוואא
sick|مريض|marid|מריד
big|كبير|kabir|כביר
small|صغير|saghir|צע׳יר
hot|ساخن|sakhin|סאח׳ן
cold|بارد|barid|בארד
bad|سيئ|sayyi'|סיא
beautiful|جميل|jamil|ג׳מיל
eat|يأكل|ya'kul|יאכל
drink|يشرب|yashrab|ישרב
go|يذهب|yadhhab|יד׳הב
buy|يشتري|yashtari|ישתרי
speak|يتكلم|yatakallam|יתכלם
sleep|ينام|yanam|ינאם
understand|يفهم|yafham|יפהם
c_table|طاولة لشخصين من فضلك|tawila li-shakhsayn min fadlak|טאולה לשח׳צין מן פדלכ
c_menu|القائمة من فضلك|al-qa'ima min fadlak|אל-קאאמה מן פדלכ
c_noice|بدون ثلج من فضلك|bidun thalj min fadlak|בדון תלג׳ מן פדלכ
c_nomeat|أنا لا آكل اللحم|ana la akul al-lahm|אנא לא אכל אל-לחם
c_allergy|عندي حساسية من المكسرات|'indi hasasiyya min al-mukassarat|ענדי חסאסיה מן אל-מוכסראת
c_delicious|لذيذ جدا!|ladhidh jiddan|לד׳יד׳ ג׳דן
c_reserv|عندي حجز|'indi hajz|ענדי חג׳ז
c_wifi|ما كلمة سر الواي فاي؟|ma kalimat sirr al-wai fai|מא כלמת סר אל-וואי פאי
c_checkout|متى موعد المغادرة؟|mata maw'id al-mughadara|מתא מועד אל-מע׳אדרה
c_howget|كيف أصل إلى هناك؟|kayfa asil ila hunak|כיף אצל אלא הונאכ
c_stophere|توقف هنا من فضلك|tawaqqaf huna min fadlak|תוקף הונא מן פדלכ
c_far|هل هو بعيد؟|hal huwa ba'id|הל הווא בעיד
c_card|هل يمكنني الدفع بالبطاقة؟|hal yumkinuni ad-daf' bil-bitaqa|הל יומכנני א-דפע באל-בטאקה
c_looking|أتفرج فقط، شكرا|atafarraj faqat, shukran|אתפרג׳ פקט, שוכרן
c_yourname|ما اسمك؟|ma ismuk|מא אסמכ
c_wherefrom|من أين أنت؟|min ayna anta|מן אין אנת
c_seeyou|أراك لاحقا|araka lahiqan|אראכ לאחקן
c_cheers|في صحتك!|fi sihhatak|פי צחתכ
c_lost|أنا ضائع|ana da'i'|אנא דאאע
c_passport|فقدت جواز سفري|faqadtu jawaz safari|פקדת ג׳ואז ספרי
c_hurts|يؤلمني هنا|yu'limuni huna|יולמני הונא
c_time|كم الساعة؟|kam as-sa'a|כם א-סאעה
c_again|أعد من فضلك|a'id min fadlak|אעד מן פדלכ
c_write|هل يمكنك أن تكتبه؟|hal yumkinuka an taktubahu|הל יומכנכ אן תכתבה
n11|أحد عشر|ahada 'ashar|אחד עשר
n12|اثنا عشر|ithna 'ashar|אתנא עשר
n13|ثلاثة عشر|thalathata 'ashar|תלאתת עשר
n14|أربعة عشر|arba'ata 'ashar|ארבעת עשר
n15|خمسة عشر|khamsata 'ashar|ח׳מסת עשר
n16|ستة عشر|sittata 'ashar|סתת עשר
n17|سبعة عشر|sab'ata 'ashar|סבעת עשר
n18|ثمانية عشر|thamaniyata 'ashar|תמאנית עשר
n19|تسعة عشر|tis'ata 'ashar|תסעת עשר
n30|ثلاثون|thalathun|תלאתון
n40|أربعون|arba'un|ארבעון
n60|ستون|sittun|סתון
n70|سبعون|sab'un|סבעון
n80|ثمانون|thamanun|תמאנון
n90|تسعون|tis'un|תסעון
n200|مئتان|mi'atan|מיאתאן
n500|خمسمئة|khamsumi'a|ח׳מסמיאה
n10000|عشرة آلاف|'asharat alaf|עשרת אלאף
t_morning|صباح|sabah|צבאח
t_evening|مساء|masa'|מסאא
t_night|ليل|layl|ליל
t_week|أسبوع|usbu'|אוסבוע
t_month|شهر|shahr|שהר
t_year|سنة|sana|סנה
t_hour|ساعة|sa'a|סאעה
t_minute|دقيقة|daqiqa|דקיקה
dog|كلب|kalb|כלב
cat|قطة|qitta|קטה
bird|طائر|ta'ir|טאאר
horse|حصان|hisan|חצאן
cow|بقرة|baqara|בקרה
pig|خنزير|khinzir|ח׳נזיר
elephant|فيل|fil|פיל
monkey|قرد|qird|קרד
snake|ثعبان|thu'ban|תועבאן
mosquito|بعوضة|ba'uda|בעוצ׳ה
lion|أسد|asad|אסד
duck|بطة|batta|בטה
apple|تفاحة|tuffaha|תפאחה
banana|موز|mawz|מוז
orange|برتقال|burtuqal|בורתקאל
mango|مانجو|manju|מאנג׳ו
pineapple|أناناس|ananas|אנאנאס
watermelon|بطيخ|battikh|בטיח׳
coconut|جوز الهند|jawz al-hind|ג׳וז אל-הנד
grapes|عنب|'inab|ענב
lemon|ليمون|laymun|לימון
strawberry|فراولة|farawla|פראולה
papaya|بابايا|babaya|באבאיא
tomato|طماطم|tamatim|טמאטם
potato|بطاطس|batatis|בטאטס
onion|بصل|basal|בצל
garlic|ثوم|thum|תום
cucumber|خيار|khiyar|ח׳יאר
carrot|جزر|jazar|ג׳זר
chili|فلفل حار|filfil harr|פלפל חאר
corn|ذرة|dhura|ד׳ורה
mushroom|فطر|futr|פוטר
lettuce|خس|khass|ח׳ס
eggplant|باذنجان|badhinjan|באד׳נג׳אן
soup|حساء|hasa'|חסאא
salad|سلطة|salata|סלטה
noodles|معكرونة|ma'karuna|מעכרונה
cheese|جبن|jubn|ג׳ובן
butter|زبدة|zubda|זובדה
salt|ملح|milh|מלח
sugar|سكر|sukkar|סוכר
cake|كعكة|ka'ka|כעכה
icecream|آيس كريم|ays krim|איס כרים
juice|عصير|'asir|עציר
wine|نبيذ|nabidh|נביד׳
breakfast|فطور|futur|פטור
lunch|غداء|ghada'|ע׳דאא
dinner|عشاء|'asha'|עשאא
fork|شوكة|shawka|שוכה
spoon|ملعقة|mil'aqa|מלעקה
knife|سكين|sikkin|סכין
glass|كوب|kub|כוב
plate|صحن|sahn|צחן
bank|بنك|bank|בנכ
atm|صراف آلي|sarraf ali|צראף אלי
beach|شاطئ|shati'|שאטא
museum|متحف|mathaf|מתחף
temple|معبد|ma'bad|מעבד
street|شارع|shari'|שארע
city|مدينة|madina|מדינה
shop|محل|mahall|מחל
supermarket|سوبرماركت|subermarket|סוברמרכט
park|حديقة|hadiqa|חדיקה
station|محطة|mahatta|מחטה
embassy|سفارة|sifara|ספארה
phone|هاتف|hatif|האתף
charger|شاحن|shahin|שאחן
bag|حقيبة|haqiba|חקיבה
shoes|حذاء|hidha'|חד׳אא
clothes|ملابس|malabis|מלאבס
hat|قبعة|qubba'a|קובעה
glasses|نظارة|nadhdhara|נט׳ארה
map|خريطة|kharita|ח׳ריטה
sunscreen|واقي الشمس|waqi ash-shams|ואקי א-שמס
umbrella|مظلة|midhalla|מט׳לה
come|يأتي|ya'ti|יאתי
want|يريد|yurid|יוריד
need|يحتاج|yahtaj|יחתאג׳
know|يعرف|ya'rif|יערף
see|يرى|yara|ירא
hear|يسمع|yasma'|יסמע
give|يعطي|yu'ti|יועטי
take|يأخذ|ya'khudh|יאח׳ד׳
pay|يدفع|yadfa'|ידפע
wait|ينتظر|yantadhir|ינתט׳ר
walk|يمشي|yamshi|ימשי
read|يقرأ|yaqra'|יקרא
write|يكتب|yaktub|יכתב
love|يحب|yuhibb|יוחב
work|يعمل|ya'mal|יעמל
swim|يسبح|yasbah|יסבח
new|جديد|jadid|ג׳דיד
old|قديم|qadim|קדים
fast|سريع|sari'|סריע
slow|بطيء|bati'|בטיא
near|قريب|qarib|קריב
far_a|بعيد|ba'id|בעיד
clean|نظيف|nadhif|נט׳יף
dirty|وسخ|wasikh|וסח׳
tired|تعبان|ta'ban|תעבאן
hungry|جوعان|ju'an|ג׳ועאן
thirsty|عطشان|'atshan|עטשאן
happy|سعيد|sa'id|סעיד
sad|حزين|hazin|חזין
easy|سهل|sahl|סהל
difficult|صعب|sa'b|צעב
many|كثير|kathir|כתיר
sf_order|أريد أن أطلب|urid an atlub|אוריד אן אטלב
sf_recommend|ماذا تنصحني؟|madha tansahuni|מאד׳א תנצחני
sf_bottle|زجاجة ماء من فضلك|zujajat maa min fadlak|זוג׳אג׳ת מאא מן פדלכ
sf_isspicy|هل هذا حار؟|hal hatha harr|הל האד׳א חאר
sf_onemore|واحد آخر من فضلك|wahid akhar min fadlak|ואחד אח׳ר מן פדלכ
sf_nosugar|بدون سكر من فضلك|bidun sukkar min fadlak|בדון סוכר מן פדלכ
sf_takeaway|هل يمكن أن آخذه معي؟|hal yumkin an akhudhahu ma'i|הל יומכן אן אח׳ד׳ה מעי
ss_smaller|هل عندك مقاس أصغر؟|hal 'indak maqas asghar|הל ענדכ מקאס אצע׳ר
ss_try|هل يمكنني أن أجربه؟|hal yumkinuni an ujarribahu|הל יומכנני אן אג׳רבה
ss_two|سآخذ اثنين|sa-akhudh ithnayn|סאח׳ד׳ אתנין
ss_change|هل عندك فكة؟|hal 'indak fakka|הל ענדכ פכה
ss_last|ما هو السعر النهائي؟|ma huwa as-si'r an-niha'i|מא הווא א-סער א-נהאאי
ss_bag|هل يمكن كيس من فضلك؟|hal yumkin kis min fadlak|הל יומכן כיס מן פדלכ
sm_busstop|أين موقف الحافلات؟|ayna mawqif al-hafilat|אין מוקף אל-חאפלאת
sm_trainleave|متى يغادر القطار؟|mata yughadir al-qitar|מתא יוע׳אדר אל-קטאר
sm_oneticket|تذكرة واحدة من فضلك|tadhkira wahida min fadlak|תד׳כרה ואחדה מן פדלכ
sm_howlong|كم من الوقت يستغرق؟|kam min al-waqt yastaghriq|כם מן אל-וקת יסתע׳רק
sm_meter|شغل العداد من فضلك|shaghghil al-'addad min fadlak|שע׳ל אל-עדאד מן פדלכ
sm_slowdrive|سق ببطء من فضلك|suq bi-but' min fadlak|סוק בבוטא מן פדלכ
sm_airport|أريد أن أذهب إلى المطار|urid an adhhab ila al-matar|אוריד אן אד׳הב אלא אל-מטאר
sh_leavebag|هل يمكنني ترك حقيبتي هنا؟|hal yumkinuni tark haqibati huna|הל יומכנני תרכ חקיבתי הונא
sh_ac|المكيف لا يعمل|al-mukayyif la ya'mal|אל-מוכיף לא יעמל
sh_breakfast|هل الفطور مشمول؟|hal al-futur mashmul|הל אל-פטור משמול
sh_towel|أحتاج منشفة أخرى|ahtaj minshafa ukhra|אחתאג׳ מנשפה אוח׳רא
sh_taxi|هل يمكنك أن تطلب لي تاكسي؟|hal yumkinuka an tatlub li taksi|הל יומכנכ אן תטלב לי טאכסי
sh_late|هل يمكنني المغادرة متأخرا؟|hal yumkinuni al-mughadara muta'akhkhiran|הל יומכנני אל-מוע׳אדרה מתאח׳רן
so_learning|أنا أتعلم اللغة|ana ata'allam al-lugha|אנא אתעלם אל-לוע׳ה
so_thankshelp|شكرا جزيلا على مساعدتك|shukran jazilan 'ala musa'adatik|שוכרן ג׳זילן עלא מסאעדתכ
so_photo|هل يمكنك أن تصورنا؟|hal yumkinuka an tusawwirana|הל יומכנכ אן תצורנא
so_like|أحب هذا المكان|uhibb hatha al-makan|אוחב האד׳א אל-מכאן
so_vacation|أنا هنا في إجازة|ana huna fi ijaza|אנא הונא פי אג׳אזה
so_howsay|كيف تقول هذا؟|kayfa taqul hatha|כיף תקול האד׳א
so_noproblem|لا مشكلة|la mushkila|לא משכלה
so_beautiful|هذا جميل جدا!|hatha jamil jiddan|האד׳א ג׳מיל ג׳דן
sp_unwell|لا أشعر أنني بخير|la ash'ur annani bikhayr|לא אשער אננני בח׳יר
sp_nearhosp|أين أقرب مستشفى؟|ayna aqrab mustashfa|אין אקרב מוסתשפא
sp_fever|عندي حمى|'indi humma|ענדי חומא
sp_helpme|ساعدني من فضلك|sa'idni min fadlak|סאעדני מן פדלכ
sp_stolen|سُرقت حقيبتي|suriqat haqibati|סורקת חקיבתי
sp_embassy|أحتاج السفارة الإسرائيلية|ahtaj as-sifara al-isra'iliyya|אחתאג׳ א-ספארה אל-אסראאיליה
dt1|إلى أين؟|ila ayna|אלא אין
dt2|إلى هذا الفندق من فضلك.|ila hatha al-funduq min fadlak|אלא האד׳א אל-פונדק מן פדלכ
dt3|حسنا، تفضل.|hasanan, tafaddal|חסנן, תפדל
dt4|كم الأجرة؟|kam al-ujra|כם אל-אוג׳רה
dt5|مئتان.|mi'atan|מיאתאן
dt6|شغل العداد لو سمحت.|shaghghil al-'addad law samaht|שע׳ל אל-עדאד לו סמחת
dt7|لا مشكلة أبدا.|la mushkila abadan|לא משכלה אבדן
dt8|توقف هنا، شكرا.|tawaqqaf huna, shukran|תוקף הונא, שוכרן
dm1|كم سعر هذا؟|kam si'r hatha|כם סער האד׳א
dm2|ثلاثمئة.|thalathumi'a|תלאתמיאה
dm3|غالي جدا! مئتان؟|ghali jiddan! mi'atan|ע׳אלי ג׳דן! מיאתאן
dm4|مئتان وخمسون، آخر سعر.|mi'atan wa-khamsun, akhir si'r|מיאתאן וח׳מסון, אח׳ר סער
dm5|حسنا، سآخذه.|hasanan, sa-akhudhuhu|חסנן, סאח׳ד׳ה
dm6|شكرا جزيلا!|shukran jazilan|שוכרן ג׳זילן
dr1|كم شخصا؟|kam shakhsan|כם שח׳צן
dr2|شخصان.|shakhsan|שח׳צאן
dr3|ماذا تريد أن تطلب؟|madha turid an tatlub|מאד׳א תוריד אן תטלב
dr4|أرز مقلي بالدجاج، بدون حار.|aruzz maqli bid-dajaj, bidun harr|ארז מקלי באדג׳אג׳, בדון חאר
dr5|وماذا تشرب؟|wa-madha tashrab|ומאד׳א תשרב
dr6|ماء فقط من فضلك.|maa faqat min fadlak|מאא פקט מן פדלכ
dr7|الحساب لو سمحت.|al-hisab law samaht|אל-חסאב לו סמחת
dh1|مرحبا، عندي حجز.|marhaba, 'indi hajz|מרחבא, ענדי חג׳ז
dh2|باسم من؟|bi-ism man|באסם מן
dh3|باسم ...|bi-ism|באסם
dh4|جواز سفرك من فضلك.|jawaz safarak min fadlak|ג׳ואז ספרכ מן פדלכ
dh5|غرفتك رقم ثلاثمئة وخمسة.|ghurfatuk raqm thalathumi'a wa-khamsa|ע׳ורפתכ רקם תלאתמיאה וח׳מסה
dh6|متى الفطور؟|mata al-futur|מתא אל-פטור
dh7|من السابعة إلى العاشرة.|min as-sabi'a ila al-'ashira|מן א-סאבעה אלא אל-עאשרה
dd1|عفوا، أين المحطة؟|'afwan, ayna al-mahatta|עפון, אין אל-מחטה
dd2|على طول ثم يسارا.|'ala tul thumma yasaran|עלא טול תומה יסארן
dd3|هل هو بعيد من هنا؟|hal huwa ba'id min huna|הל הווא בעיד מן הונא
dd4|لا، خمس دقائق مشيا.|la, khams daqa'iq mashyan|לא, ח׳מס דקאאק משין
dd5|شكرا كثيرا!|shukran kathiran|שוכרן כתירן
w_weather|الطقس|at-taqs|א-טקס
w_sun|شمس|shams|שמס
w_rain|مطر|matar|מטר
w_wind|ريح|rih|ריח
w_cloud|غيمة|ghayma|ע׳ימה
w_snow|ثلوج|thuluj|תלוג׳
w_storm|عاصفة|'asifa|עאצפה
w_humid|رطب|ratb|רטב
j_teacher|معلم|mu'allim|מועלם
j_driver|سائق|sa'iq|סאאק
j_waiter|نادل|nadil|נאדל
j_cook|طباخ|tabbakh|טבאח׳
j_student|طالب|talib|טאלב
j_engineer|مهندس|muhandis|מוהנדס
j_nurse|ممرضة|mumarrida|מומרצ׳ה
j_seller|بائع|ba'i'|באאע
j_guide|مرشد سياحي|murshid siyahi|מורשד סיאחי
j_pharmacist|صيدلي|saydali|צידלי
e_angry|غاضب|ghadib|ע׳אצ׳ב
e_scared|خائف|kha'if|ח׳אאף
e_bored|ملول|malul|מלול
e_worried|قلق|qaliq|קלק
e_surprised|مندهش|mundahish|מונדהש
e_calm|هادئ|hadi'|האדא
e_excited|متحمس|mutahammis|מותחמס
e_love|عاشق|'ashiq|עאשק
dir_north|شمال|shamal|שמאל
dir_south|جنوب|janub|ג׳נוב
dir_east|شرق|sharq|שרק
dir_west|غرب|gharb|ע׳רב
dir_corner|زاوية|zawiya|זאויה
dir_light|إشارة المرور|isharat al-murur|אשארת אל-מורור
dir_behind|خلف|khalf|ח׳לף
dir_front|أمام|amam|אמאם
dir_next|بجانب|bi-janib|בג׳אנב
dir_back|إلى الوراء|ila al-wara'|אלא אל-וראא
dir_up|فوق|fawq|פוק
dir_down|تحت|taht|תחת`
});

/* ---- numbers & prices (0–999,999) → tokens [text, roman, hebrew] ---- */
/* ---- Arabic (Modern Standard, simplified agreement) ---- */
NW.ar = (() => {
  const A = { 'صفر':['sifr','צפר'], 'واحد':['wahid','ואחד'], 'اثنان':['ithnan','אתנאן'], 'ثلاثة':['thalatha','תלאתה'], 'أربعة':["arba'a",'ארבעה'], 'خمسة':['khamsa','ח׳מסה'], 'ستة':['sitta','סתה'], 'سبعة':["sab'a",'סבעה'], 'ثمانية':['thamaniya','תמאניה'], 'تسعة':["tis'a",'תסעה'], 'عشرة':["'ashara",'עשרה'],
    'أحد':['ahada','אחד'], 'اثنا':['ithna','אתנא'], 'عشر':["'ashar",'עשר'], 'عشرون':["'ishrun",'עשרון'], 'ثلاثون':['thalathun','תלאתון'], 'أربعون':["arba'un",'ארבעון'], 'خمسون':['khamsun','ח׳מסון'], 'ستون':['sittun','סתון'], 'سبعون':["sab'un",'סבעון'], 'ثمانون':['thamanun','תמאנון'], 'تسعون':["tis'un",'תסעון'],
    'مئة':["mi'a",'מיאה'], 'مئتان':["mi'atan",'מיאתאן'], 'ثلاثمئة':["thalathumi'a",'תלאתמיאה'], 'أربعمئة':["arba'umi'a",'ארבעמיאה'], 'خمسمئة':["khamsumi'a",'ח׳מסמיאה'], 'ستمئة':["sittumi'a",'סתמיאה'], 'سبعمئة':["sab'umi'a",'סבעמיאה'], 'ثمانمئة':["thamanumi'a",'תמאנמיאה'], 'تسعمئة':["tis'umi'a",'תסעמיאה'],
    'ألف':['alf','אלף'], 'ألفان':['alfan','אלפאן'], 'آلاف':['alaf','אלאף'], 'دولار':['dular','דולאר'],
    'دولاران':['dularan','דולאראן'], 'دولارات':['dularat','דולאראת'], 'دولارا':['dularan','דולארן'] };
  const w = x => tk(x, A[x][0], A[x][1]);
  const o = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة', 'عشرة'];
  const t = [, , 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
  const h = [, 'مئة', 'مئتان', 'ثلاثمئة', 'أربعمئة', 'خمسمئة', 'ستمئة', 'سبعمئة', 'ثمانمئة', 'تسعمئة'];
  const AND = ['و', 'wa-', 'ו', true];   /* attaches to the next word */
  function under100(n, out) {
    if (n <= 10) { if (n) out.push(w(o[n])); return; }
    if (n === 11) { out.push(w('أحد'), w('عشر')); return; }
    if (n === 12) { out.push(w('اثنا'), w('عشر')); return; }
    if (n < 20) { out.push(w(o[n - 10]), w('عشر')); return; }
    const u = n % 10;
    if (u) out.push(w(o[u]), AND);
    out.push(w(t[Math.floor(n / 10)]));
  }
  function under1000(n, out) {
    const hh = Math.floor(n / 100), r = n % 100;
    if (hh) out.push(w(h[hh]));
    if (hh && r) out.push(AND);
    under100(r, out);
  }
  const f = n => {
    if (n === 0) return [w('صفر')];
    const out = [], th = Math.floor(n / 1000), r = n % 1000;
    if (th === 1) out.push(w('ألف'));
    else if (th === 2) out.push(w('ألفان'));
    else if (th >= 3 && th <= 10) { under100(th, out); out.push(w('آلاف')); }
    else if (th > 10) { under1000(th, out); out.push(w('ألف')); }
    if (th && r) out.push(AND);
    under1000(r, out);
    return out;
  };
  /* noun agreement: 1 → دولار واحد · 2 → دولاران · 3–10 → دولارات · 11–99 → دولارا · otherwise دولار */
  f.price = n => {
    if (n === 1) return [w('دولار'), w('واحد')];
    if (n === 2) return [w('دولاران')];
    const m = n % 100;
    return f(n).concat([w(m >= 3 && m <= 10 ? 'دولارات' : (m >= 11 ? 'دولارا' : 'دولار'))]);
  };
  return f;
})();
NW.arCur = () => tk('دولار', 'dular', 'דולאר');
NUM.ar = { tokens: (n, cur) => cur ? NW.ar.price(n) : NW.ar(n) };
