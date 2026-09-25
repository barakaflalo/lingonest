/* ===== LingoNest — lang-yi.js : Yiddish content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('yi', {
  ver: '1.15.0',
  curSym: "$",
  /* no Yiddish TTS voice exists: speak the Hebrew-friendly pronunciation column with the Hebrew voice (LANGS.yi.tts = he-IL) */
  speakHeb: true,
  country: {"he": "קהילות דוברות יידיש", "en": "Yiddish-speaking communities", "ru": "Общины, говорящие на идише", "es": "Comunidades de habla ídish", "ar": "المجتمعات الناطقة باليديشية"},
  emergency: [
    ["🇮🇱", {"he": "ישראל — משטרה / מד״א", "en": "Israel — police / ambulance", "ru": "Израиль — полиция / скорая", "es": "Israel — policía / ambulancia", "ar": "إسرائيل — الشرطة / الإسعاف"}, "100", "101"],
    ["🇺🇸", {"he": "ארה״ב (ניו יורק) — חירום", "en": "USA (New York) — emergency", "ru": "США (Нью-Йорк)", "es": "EE. UU. (Nueva York)", "ar": "الولايات المتحدة (نيويورك)"}, "911"],
    ["🇬🇧", {"he": "בריטניה (לונדון) — חירום", "en": "UK (London) — emergency", "ru": "Великобритания (Лондон)", "es": "Reino Unido (Londres)", "ar": "بريطانيا (لندن)"}, "999"],
    ["🇪🇺", {"he": "אירופה (אנטוורפן ועוד) — חירום", "en": "Europe (Antwerp etc.) — emergency", "ru": "Европа (Антверпен и др.)", "es": "Europa (Amberes, etc.)", "ar": "أوروبا (أنتويرب وغيرها)"}, "112"]
  ],
  tips: [
    {"t": {"he": "אותיות עבריות — תנועות בתוך המילה", "en": "Hebrew letters — vowels inside the word"}, "b": {"he": "בניגוד לעברית, ביידיש כותבים את התנועות: אַ = a, אָ = o, ע = e, י = i, ו = u, יי = ey, ײַ = ay, וי = oy. לכן קל לדובר עברית לקרוא יידיש — ברגע שמכירים את הסימנים.", "en": "Unlike Hebrew, Yiddish writes the vowels: אַ = a, אָ = o, ע = e, י = i, ו = u, יי = ey, ײַ = ay, וי = oy. Easy to read once you know the marks."}, "ex": [["גוט־מאָרגן", "gut-morgn", "גוט מורגן", "בוקר טוב", "Good morning"], ["ווי גייט עס?", "vi geyt es?", "ווי גייט עס", "מה נשמע?", "How's it going?"]]},
    {"t": {"he": "מילים מעברית — בכתיב עברי", "en": "Hebrew words keep Hebrew spelling"}, "b": {"he": "כחמישית מאוצר המילים מגיע מעברית וארמית (\"לשון־קודש\"). מילים כאלה נכתבות כמו בעברית אבל נהגות אשכנזית: שבת = שאַבעס, מזל = מאַזל, חתונה = כאַסענע, תּכלית = טאַכלעס.", "en": "About a fifth of the vocabulary is Hebrew/Aramaic. Those words keep Hebrew spelling but Ashkenazi pronunciation: שבת = shabes, מזל = mazl, תּכלית = takhles."}, "ex": [["שבת", "shabes", "שאבעס", "שבת", "Sabbath"], ["מזל־טובֿ", "mazl-tov", "מאזל טוב", "מזל טוב", "Congratulations"]]},
    {"t": {"he": "קרובה לגרמנית", "en": "Close to German"}, "b": {"he": "רוב המילים ביידיש באות מגרמנית עתיקה. אם אתה מכיר קצת גרמנית או אנגלית תזהה הרבה: הויז (Haus, house), וואַסער (Wasser, water), גוט (gut, good). שאר המילים באות מעברית ומשפות סלאביות.", "en": "Most Yiddish words come from medieval German: הויז (Haus), וואַסער (Wasser), גוט (gut). The rest are Hebrew and Slavic."}, "ex": [["וואַסער", "vaser", "וואסער", "מים", "Water"], ["דאָס הויז", "dos hoyz", "דוס הויז", "הבית", "The house"]]},
    {"t": {"he": "הגייה ליטאית מול חסידית", "en": "Standard vs. Hasidic pronunciation"}, "b": {"he": "האפליקציה מלמדת יידיש תקנית (ייִוואָ, מבוססת על ההגייה הליטאית). בבני ברק, בוויליאמסבורג ובאנטוורפן תשמע בעיקר הגייה חסידית־פולנית: \"גוט\" נשמע \"גיט\", \"שבת\" נשמע \"שאָבעס\", \"וווּ\" נשמע \"ווי\". מבינים את שתיהן.", "en": "The app teaches standard (YIVO) Yiddish, based on Lithuanian pronunciation. In Bnei Brak, Williamsburg and Antwerp you'll mostly hear Hasidic-Polish: gut → git, vu → vi. Both are understood."}, "ex": [["אַ גוטן שבת", "a gutn shabes", "א גוטן שאבעס", "שבת שלום", "Good Shabbos"]]},
    {"t": {"he": "איר מול דו", "en": "איר vs. דו"}, "b": {"he": "איר (אִיר) היא הפנייה המנומסת — לזרים ולמבוגרים. דו (דו) רק לחברים, לילדים ולמשפחה. לכן אומרים \"ווי הייסט איר?\" לזר.", "en": "איר (ir) is polite — for strangers and elders. דו (du) only for friends, kids and family."}, "ex": [["ווי הייסט איר?", "vi heyst ir?", "ווי הייסט איר", "איך קוראים לך? (מנומס)", "What's your name? (polite)"]]},
    {"t": {"he": "ביטויים שחיים גם בעברית", "en": "Expressions alive in Hebrew too"}, "b": {"he": "הרבה יידיש נכנסה לעברית ולאנגלית: נו, שוין, חוצפּה, שלעפּן, קוועטשן, נחת. בנושא \"ביטויים ביידיש\" יש עוד — כולל איך מאחלים \"ביז הונדערט און צוואַנציק\" (עד 120).", "en": "Plenty of Yiddish lives on in Hebrew and English: nu, shoyn, khutspe, shlep, kvetsh, nakhes. See the \"Yiddish expressions\" topic for more."}, "ex": [["ביז הונדערט און צוואַנציק!", "biz hundert un tsvantsik!", "ביז הונדערט און צוואנציק", "עד מאה ועשרים!", "Till 120!"]]}
  ],
  note: {"he": "יידיש נכתבת באותיות עבריות, אבל התנועות נכתבות בתוך המילה: אַ (a), אָ (o), ע (e), י (i), ו (u). מילים שמקורן בעברית נשמרות בכתיב העברי (שבת, מזל, חבֿר) ונהגות בהגייה אשכנזית. 🔊 אין קול יידיש במכשירים — ההקראה משתמשת בקול העברי ומקריאה את ההגייה שבשורה השנייה, אז היא רק בקירוב.", "en": "Yiddish uses Hebrew letters, but vowels are written inside the word: אַ (a), אָ (o), ע (e), י (i), ו (u). Words of Hebrew origin keep Hebrew spelling (שבת, מזל) with Ashkenazi pronunciation. 🔊 No device has a Yiddish voice — read-aloud uses the Hebrew voice on the pronunciation line, so it's only approximate.", "ru": "Идиш пишется еврейскими буквами, но гласные пишутся внутри слова: אַ (a), אָ (o), ע (e), י (i), ו (u). Слова из иврита сохраняют ивритское написание. 🔊 Голоса идиша нет — озвучка приблизительная, ивритским голосом.", "es": "El ídish se escribe con letras hebreas, pero las vocales van dentro de la palabra: אַ (a), אָ (o), ע (e), י (i), ו (u). Las palabras de origen hebreo conservan su ortografía. 🔊 No hay voz de ídish: la lectura usa la voz hebrea y es aproximada.", "ar": "تُكتب اليديشية بحروف عبرية، لكن الحركات تُكتب داخل الكلمة: אַ (a) وאָ (o) وע (e) وי (i) وו (u). الكلمات ذات الأصل العبري تحتفظ بكتابتها. 🔊 لا يوجد صوت يديشي — القراءة تقريبية بالصوت العبري."},
  alpha: [
    ["א", "א", "שקטה (לפני ו / י בתחילת מילה)", "shtumer alef"],
    ["אַ", "אַ", "אַ", "pasekh alef (a)"],
    ["אָ", "אוֹ", "אוֹ", "komets alef (o)"],
    ["ב", "ב", "ב", "beys"],
    ["בֿ", "ו", "ו (V) — במילים עבריות", "veys"],
    ["ג", "ג", "ג", "giml"],
    ["ד", "ד", "ד", "daled"],
    ["ה", "ה", "ה", "hey"],
    ["ו", "אוּ", "אוּ (תנועה)", "vov (u)"],
    ["וו", "ו", "ו (V)", "tsvey vovn (v)"],
    ["וי", "אוֹי", "אוֹי", "vov yud (oy)"],
    ["ז", "ז", "ז", "zayen"],
    ["זש", "ז׳", "ז׳", "zayen-shin (zh)"],
    ["ח", "ח", "ח — במילים עבריות", "khes"],
    ["ט", "ט", "ט", "tes"],
    ["טש", "צ׳", "צ׳", "tes-shin (tsh)"],
    ["י", "י", "י / אִי", "yud"],
    ["יי", "אֵיי", "אֵיי", "tsvey yudn (ey)"],
    ["ײַ", "אַיי", "אַיי", "pasekh tsvey yudn (ay)"],
    ["כּ", "כּ", "כּ — במילים עבריות", "kof"],
    ["כ", "ח", "ח (כמו בעברית)", "khof"],
    ["ל", "ל", "ל", "lamed"],
    ["מ", "מ", "מ", "mem"],
    ["נ", "נ", "נ", "nun"],
    ["ס", "ס", "ס", "samekh"],
    ["ע", "אֶ", "אֶ (תנועה!)", "ayen (e)"],
    ["פּ", "פּ", "פּ", "pey"],
    ["פֿ", "פ", "פ (F)", "fey"],
    ["צ", "צ", "צ", "tsadek"],
    ["ק", "ק", "ק", "kuf"],
    ["ר", "ר", "ר", "reysh"],
    ["ש", "ש", "ש", "shin"],
    ["שׂ", "ס", "ס — במילים עבריות", "sin"],
    ["תּ", "תּ", "ת — במילים עבריות", "tof"],
    ["ת", "ס", "ס — במילים עבריות (שבת = שאבעס)", "sof"]
  ],
  /* speaker = female: [regex source, flags, replacement] */
  gender: [],
  words: `hello|שלום־עליכם|sholem-aleykhem|שולעם עליכם
bye|אַ גוטן טאָג / זײַ געזונט|a gutn tog / zay gezunt|א גוטן טוג / זיי געזונט
morning|גוט־מאָרגן|gut-morgn|גוט מורגן
thanks|אַ דאַנק|a dank|א דאנק
please|זײַט אַזוי גוט|zayt azoy gut|זייט אזוי גוט
sorry|זײַט מוחל|zayt moykhl|זייט מויחל
yes|יאָ|yo|יו
no|ניין|neyn|ניין
howareyou|ווי גייט עס?|vi geyt es?|ווי גייט עס
good|גוט|gut|גוט
ok|אָקיי / שוין|okey / shoyn|אוקיי / שוין
n1|איינס|eyns|איינס
n2|צוויי|tsvey|צוויי
n3|דרײַ|dray|דריי
n4|פֿיר|fir|פיר
n5|פֿינף|finf|פינף
n6|זעקס|zeks|זקס
n7|זיבן|zibn|זיבן
n8|אַכט|akht|אכט
n9|נײַן|nayn|ניין
n10|צען|tsen|צן
n0|נול|nul|נול
n20|צוואַנציק|tsvantsik|צוואנציק
n50|פֿופֿציק|fuftsik|פופציק
n100|הונדערט|hundert|הונדערט
n1000|טויזנט|toyznt|טויזנט
n11|עלף|elf|עלף
n12|צוועלף|tsvelf|צוועלף
n13|דרײַצן|draytsn|דרייצן
n14|פֿערצן|fertsn|פרצן
n15|פֿופֿצן|fuftsn|פופצן
n16|זעכצן|zekhtsn|זעכצן
n17|זיבעצן|zibetsn|זיבעצן
n18|אַכצן|akhtsn|אכצן
n19|נײַנצן|nayntsn|ניינצן
n30|דרײַסיק|draysik|דרייסיק
n40|פֿערציק|fertsik|פרציק
n60|זעכציק|zekhtsik|זעכציק
n70|זיבעציק|zibetsik|זיבעציק
n80|אַכציק|akhtsik|אכציק
n90|נײַנציק|nayntsik|ניינציק
n200|צוויי הונדערט|tsvey hundert|צוויי הונדערט
n500|פֿינף הונדערט|finf hundert|פינף הונדערט
n10000|צען טויזנט|tsen toyznt|צן טויזנט
water|וואַסער|vaser|וואסער
toilet|דער קלאָזעט|der klozet|דער קלוזעט
where|וווּ?|vu?|וו
howmuch|וויפֿל?|vifl?|וויפל
this|דאָס|dos|דוס
friend|אַ פֿרײַנד|a fraynd|א פריינד
food|דאָס עסן|dos esn|דוס עסן
bread|דאָס ברויט|dos broyt|דוס ברויט
coffee|דער קאַווע|der kave|דער קאווע
tea|די טיי|di tey|די טיי
chicken|די הון|di hun|די הון
fish|דער פֿיש|der fish|דער פיש
rice|דער רײַז|der rayz|דער רייז
beer|דאָס ביר|dos bir|דוס ביר
bill|די רעכענונג|di rekhenung|די רעכענונג
tasty|געשמאַק|geshmak|געשמאק
egg|דאָס איי|dos ey|דוס איי
fruit|די פּירות|di peyres|די פייראס
veg|די גרינסן|di grinsn|די גרינסן
meat|דאָס פֿלייש|dos fleysh|דוס פלייש
milk|די מילך|di milkh|די מילך
spicy|שאַרף|sharf|שארף
restaurant|דער רעסטאָראַן|der restoran|דער רסטוראן
ice|דאָס אײַז|dos ayz|דוס אייז
taxi|דער טאַקסי|der taksi|דער טאקסי
bus|דער אויטאָבוס|der oytobus|דער אויטובוס
train|די באַן|di ban|די באן
airport|דער לופֿטפּאָרט|der luftport|דער לופטפורט
hotel|דער האָטעל|der hotel|דער הוטעל
left|לינקס|links|לינקס
right|רעכטס|rekhts|רעכטס
straight|גלײַך|glaykh|גלייך
stop|שטעלט זיך אָפּ|shtelt zikh op|שטעלט זיך אופ
ticket|דער בילעט|der bilet|דער בילעט
money|געלט|gelt|געלט
expensive|טײַער|tayer|טייער
cheap|ביליק|bilik|ביליק
market|דער מאַרק|der mark|דער מארק
pharmacy|די אַפּטייק|di apteyk|די אפטייק
open|אָפֿן|ofn|אופן
closed|פֿאַרמאַכט|farmakht|פארמאכט
help|העלפֿט!|helft!|העלפט
police|די פּאָליציי|di politsey|די פוליציי
doctor|דער דאָקטער|der dokter|דער דוקטער
hospital|דער שפּיטאָל|der shpitol|דער שפיטול
today|הײַנט|haynt|היינט
tomorrow|מאָרגן|morgn|מורגן
yesterday|נעכטן|nekhtn|נעכטן
now|איצט|itst|איצט
t_morning|דער פֿרימאָרגן|der frimorgn|דער פרימורגן
t_evening|דער אָוונט|der ovnt|דער אוונט
t_night|די נאַכט|di nakht|די נאכט
t_week|די וואָך|di vokh|די ווך
t_month|דער חודש|der khoydesh|דער חוידעש
t_year|דאָס יאָר|dos yor|דוס יור
t_hour|די שעה|di sho|די שו
t_minute|די מינוט|di minut|די מינוט
p_toilet|וווּ איז דער קלאָזעט?|vu iz der klozet?|וו איז דער קלוזעט
p_cost|וויפֿל קאָסט עס?|vifl kost es?|וויפל קוסט עס
p_nounder|איך פֿאַרשטיי נישט|ikh farshtey nisht|איך פארשטיי נישט
p_english|רעדט איר ענגליש?|redt ir english?|רעדט איר ענגליש
p_slow|רעדט פּאַמעלעך, זײַט אַזוי גוט|redt pamelekh, zayt azoy gut|רעדט פאמעלעך, זייט אזוי גוט
p_bill|די רעכענונג, זײַט אַזוי גוט|di rekhenung, zayt azoy gut|די רעכענונג, זייט אזוי גוט
p_want|איך וויל דאָס|ikh vil dos|איך וויל דוס
p_expensive|עס איז צו טײַער|es iz tsu tayer|עס איז צו טייער
p_discount|קענט איר מיר געבן אַ הנחה?|kent ir mir gebn a hanokhe?|קענט איר מיר געבן א האנאחע
p_address|פֿירט מיך צו דעם אַדרעס, זײַט אַזוי גוט|firt mikh tsu dem adres, zayt azoy gut|פירט מיך צו דעם אדרעס, זייט אזוי גוט
p_hotel|וווּ איז דער האָטעל?|vu iz der hotel?|וו איז דער הוטעל
p_doctor|איך דאַרף אַ דאָקטער|ikh darf a dokter|איך דארף א דוקטער
p_police|רופֿט די פּאָליציי!|ruft di politsey!|רופט די פוליציי
p_israel|איך בין פֿון ישׂראל|ikh bin fun yisroel|איך בין פון ייסרואל
p_name|מײַן נאָמען איז ...|mayn nomen iz|מיין נומען איז
p_nice|זייער אָנגענעם|zeyer ongenem|זייער אונגענעם
p_water|וואַסער, זײַט אַזוי גוט|vaser, zayt azoy gut|וואסער, זייט אזוי גוט
p_help|קענט איר מיר העלפֿן?|kent ir mir helfn?|קענט איר מיר העלפן
p_what|וואָס איז דאָס?|vos iz dos?|ווס איז דוס
p_nospicy|ניט קיין שאַרפֿס, זײַט אַזוי גוט|nit keyn sharfs, zayt azoy gut|ניט קיין שארפס, זייט אזוי גוט
room|דער צימער|der tsimer|דער צימער
key|דער שליסל|der shlisl|דער שליסל
bed|דאָס בעט|dos bet|דוס בעט
shower|די שפּריץ|di shprits|די שפריץ
towel|דער האַנטעך|der hantekh|דער האנטעך
passport|דער פּאַס|der pas|דער פאס
mon|מאָנטיק|montik|מונטיק
tue|דינסטיק|dinstik|דינסטיק
wed|מיטוואָך|mitvokh|מיטווך
thu|דאָנערשטיק|donershtik|דונערשטיק
fri|פֿרײַטיק|fraytik|פרייטיק
sat|שבת|shabes|שאבעס
sun|זונטיק|zuntik|זונטיק
red|רויט|royt|רויט
blue|בלוי|bloy|בלוי
green|גרין|grin|גרין
yellow|געל|gel|געל
black|שוואַרץ|shvarts|שווארץ
white|ווײַס|vays|ווייס
man|אַ מאַן|a man|א מאן
woman|אַ פֿרוי|a froy|א פרוי
child|אַ קינד|a kind|א קינד
family|די משפּחה|di mishpokhe|די מישפוחע
i|איך|ikh|איך
you|איר|ir|איר
head|דער קאָפּ|der kop|דער קופ
stomach|דער בויך|der boykh|דער בויך
hand|די האַנט|di hant|די האנט
pain|דער ווייטיק|der veytik|דער ווייטיק
medicine|די רפֿואה|di refue|די רעפואע
sick|קראַנק|krank|קראנק
big|גרויס|groys|גרויס
small|קליין|kleyn|קליין
hot|הייס|heys|הייס
cold|קאַלט|kalt|קאלט
bad|שלעכט|shlekht|שלעכט
beautiful|שיין|sheyn|שיין
new|נײַ|nay|ניי
old|אַלט|alt|אלט
fast|גיך|gikh|גיך
slow|פּאַמעלעך|pamelekh|פאמעלעך
near|נאָענט|noent|נואענט
far_a|ווײַט|vayt|וויט
clean|ריין|reyn|ריין
dirty|שמוציק|shmutsik|שמוציק
tired|מיד|mid|מיד
hungry|הונגעריק|hungerik|הונגעריק
thirsty|דאָרשטיק|dorshtik|דורשטיק
happy|צופֿרידן|tsufridn|צופרידן
sad|טרויעריק|troyerik|טרויעריק
easy|גרינג|gring|גרינג
difficult|שווער|shver|שווער
many|אַ סך|a sakh|א סאך
eat|עסן|esn|עסן
drink|טרינקען|trinken|טרינקען
go|גיין|geyn|גיין
buy|קויפֿן|koyfn|קויפן
speak|רעדן|redn|רעדן
sleep|שלאָפֿן|shlofn|שלופן
understand|פֿאַרשטיין|farshteyn|פארשטיין
come|קומען|kumen|קומען
want|וועלן|veln|וועלן
need|דאַרפֿן|darfn|דארפן
know|וויסן|visn|וויסן
see|זען|zen|זען
hear|הערן|hern|הערן
give|געבן|gebn|געבן
take|נעמען|nemen|נעמען
pay|באַצאָלן|batsoln|באצולן
wait|וואַרטן|vartn|ווארטן
walk|שפּאַצירן|shpatsirn|שפאצירן
read|לייענען|leyenen|לייענען
write|שרײַבן|shraybn|שרייבן
love|ליב האָבן|lib hobn|ליב הובן
work|אַרבעטן|arbetn|ארבעטן
swim|שווימען|shvimen|שווימען
c_table|אַ טיש פֿאַר צוויי, זײַט אַזוי גוט|a tish far tsvey, zayt azoy gut|א טיש פאר צוויי, זייט אזוי גוט
c_menu|קען איך זען דעם מעניו?|ken ikh zen dem menyu?|קען איך זען דעם מעניו
c_noice|אָן אײַז, זײַט אַזוי גוט|on ayz, zayt azoy gut|און אייז, זייט אזוי גוט
c_nomeat|איך עס נישט קיין פֿלייש|ikh es nisht keyn fleysh|איך עס נישט קיין פלייש
c_allergy|איך בין אַלערגיש אויף ניס|ikh bin alergish oyf nis|איך בין אלערגיש אויף ניס
c_delicious|זייער געשמאַק!|zeyer geshmak!|זייער געשמאק
c_reserv|איך האָב אַ רעזערוואַציע|ikh hob a rezervatsye|איך הוב א רעזערוואציע
c_wifi|וואָס איז דער וויי־פֿיי פּאַראָל?|vos iz der vay-fay parol?|ווס איז דער וויי-פיי פארול
c_checkout|ווען דאַרף מען אַרויס פֿונעם צימער?|ven darf men aroys funem tsimer?|ווען דארף מען ארויס פונעם צימער
c_howget|ווי קומט מען אַהין?|vi kumt men ahin?|ווי קומט מען אהין
c_stophere|שטעלט זיך דאָ אָפּ, זײַט אַזוי גוט|shtelt zikh do op, zayt azoy gut|שטעלט זיך דו אופ, זייט אזוי גוט
c_far|איז עס ווײַט?|iz es vayt?|איז עס וויט
c_card|קען איך באַצאָלן מיט אַ קאַרטע?|ken ikh batsoln mit a karte?|קען איך באצולן מיט א קארטע
c_looking|איך קוק נאָר, אַ דאַנק|ikh kuk nor, a dank|איך קוק נור, א דאנק
c_yourname|ווי הייסט איר?|vi heyst ir?|ווי הייסט איר
c_wherefrom|פֿון וואַנען זענט איר?|fun vanen zent ir?|פון וואנען זענט איר
c_seeyou|ביז שפּעטער|biz shpeter|ביז שפעטער
c_cheers|לחיים!|lekhayim!|לעחיים
c_lost|איך האָב זיך פֿאַרבלאָנדזשעט|ikh hob zikh farblondzhet|איך הוב זיך פארבלונדזשעט
c_passport|איך האָב פֿאַרלוירן מײַן פּאַס|ikh hob farloyrn mayn pas|איך הוב פארלוירן מיין פאס
c_hurts|עס טוט מיר וויי דאָ|es tut mir vey do|עס טוט מיר וויי דו
c_time|וויפֿל איז דער זייגער?|vifl iz der zeyger?|וויפל איז דער זייגער
c_again|זאָגט נאָך אַ מאָל, זײַט אַזוי גוט|zogt nokh a mol, zayt azoy gut|זוגט נוך א מול, זייט אזוי גוט
c_write|קענט איר עס אָנשרײַבן?|kent ir es onshraybn?|קענט איר עס אונשרייבן
dog|דער הונט|der hunt|דער הונט
cat|די קאַץ|di kats|די קאץ
bird|דער פֿויגל|der foygl|דער פויגל
horse|דאָס פֿערד|dos ferd|דוס פערד
cow|די קו|di ku|די קו
pig|דער חזיר|der khazer|דער חאזער
elephant|דער העלפֿאַנד|der helfand|דער העלפאנד
monkey|די מאַלפּע|di malpe|די מאלפע
snake|די שלאַנג|di shlang|די שלאנג
mosquito|דער קאָמאַר|der komar|דער קומאר
lion|דער לייב|der leyb|דער לייב
duck|די קאַטשקע|di katshke|די קאטשקע
apple|דער עפּל|der epl|דער עפל
banana|דער באַנאַן|der banan|דער באנאן
orange|דער מאַראַנץ|der marants|דער מאראנץ
mango|דער מאַנגאָ|der mango|דער מאנגו
pineapple|דער אַנאַנאַס|der ananas|דער אנאנאס
watermelon|דער אַרבוז|der arbuz|דער ארבוז
coconut|דער קאָקאָסנוס|der kokosnus|דער קוקוסנוס
grapes|די ווײַנטרויבן|di vayntroybn|די וויינטרויבן
lemon|די לימענע|di limene|די לימענע
strawberry|די טרוסקאַפֿקע|di truskafke|די טרוסקאפקע
papaya|דער פּאַפּײַע|der papaye|דער פאפאיע
tomato|דער פּאָמידאָר|der pomidor|דער פומידור
potato|די קאַרטאָפֿל|di kartofl|די קארטופל
onion|די ציבעלע|di tsibele|די ציבעלע
garlic|דער קנאָבל|der knobl|דער קנובל
cucumber|די אוגערקע|di ugerke|די אוגערקע
carrot|די מער|di mer|די מער
chili|דער שאַרפֿער פֿעפֿער|der sharfer fefer|דער שארפער פעפער
corn|די קוקורוזע|di kukuruze|די קוקורוזע
mushroom|דער שוואָם|der shvom|דער שוום
lettuce|דער סאַלאַט|der salat|דער סאלאט
eggplant|דער פּאַטלעזשאַן|der patlezhan|דער פאטלעזשאן
soup|די זופּ|di zup|די זופ
salad|די סאַלאַטקע|di salatke|די סאלאטקע
noodles|די לאָקשן|di lokshn|די לוקשן
cheese|דער קעז|der kez|דער קעז
butter|די פּוטער|di puter|די פוטער
salt|דאָס זאַלץ|dos zalts|דוס זאלץ
sugar|דער צוקער|der tsuker|דער צוקער
cake|דער לעקעך|der lekekh|דער לעקעך
icecream|דאָס אײַזקרעם|dos ayzkrem|דוס אייזקרעם
juice|דער זאַפֿט|der zaft|דער זאפט
wine|דער ווײַן|der vayn|דער ווין
breakfast|דער פֿרישטיק|der frishtik|דער פרישטיק
lunch|דער מיטאָג|der mitog|דער מיטוג
dinner|די וועטשערע|di vetshere|די ווטשערע
fork|דער גאָפּל|der gopl|דער גופל
spoon|דער לעפֿל|der lefl|דער לעפל
knife|דער מעסער|der meser|דער מעסער
glass|דאָס גלאָז|dos gloz|דוס גלוז
plate|דער טעלער|der teler|דער טעלער
bank|דער באַנק|der bank|דער באנק
atm|דער געלט־אויטאָמאַט|der gelt-oytomat|דער געלט-אויטומאט
beach|דער פּלאַזשע|der plazhe|דער פלאזשע
museum|דער מוזיי|der muzey|דער מוזיי
temple|די שול|di shul|די שול
street|די גאַס|di gas|די גאס
city|די שטאָט|di shtot|די שטוט
shop|די קראָם|di krom|די קרום
supermarket|דער סופּערמאַרק|der supermark|דער סופערמארק
park|דער פּאַרק|der park|דער פארק
station|די סטאַנציע|di stantsye|די סטאנציע
embassy|די אַמבאַסאַדע|di ambasade|די אמבאסאדע
phone|דער טעלעפֿאָן|der telefon|דער טעלעפון
charger|דער לאָדער|der loder|דער לודער
bag|די טאַש|di tash|די טאש
shoes|די שיך|di shikh|די שיך
clothes|די קליידער|di kleyder|די קליידער
hat|דער הוט|der hut|דער הוט
glasses|די ברילן|di briln|די ברילן
map|די מאַפּע|di mape|די מאפע
sunscreen|דער זונשוץ־קרעם|der zunshuts-krem|דער זונשוץ-קרעם
umbrella|דער שירעם|der shirem|דער שירעם
sf_order|איך וויל באַשטעלן|ikh vil bashteln|איך וויל באשטעלן
sf_recommend|וואָס רעקאָמענדירט איר?|vos rekomendirt ir?|ווס רעקומענדירט איר
sf_bottle|אַ פֿלאַש וואַסער, זײַט אַזוי גוט|a flash vaser, zayt azoy gut|א פלאש וואסער, זייט אזוי גוט
sf_isspicy|איז עס שאַרף?|iz es sharf?|איז עס שארף
sf_onemore|נאָך איינס, זײַט אַזוי גוט|nokh eyns, zayt azoy gut|נוך איינס, זייט אזוי גוט
sf_nosugar|אָן צוקער, זײַט אַזוי גוט|on tsuker, zayt azoy gut|און צוקער, זייט אזוי גוט
sf_takeaway|קען איך עס מיטנעמען?|ken ikh es mitnemen?|קען איך עס מיטנעמען
ss_smaller|האָט איר אַ קלענערע גרייס?|hot ir a klenere greys?|הוט איר א קלענערע גרייס
ss_try|קען איך עס אָנפּרוּוון?|ken ikh es onpruvn?|קען איך עס אונפרוון
ss_two|איך נעם צוויי|ikh nem tsvey|איך נעם צוויי
ss_change|האָט איר קליין געלט?|hot ir kleyn gelt?|הוט איר קליין געלט
ss_last|וואָס איז דער לעצטער פּרײַז?|vos iz der letster prayz?|ווס איז דער לעצטער פרייז
ss_bag|קען איך באַקומען אַ טאָרבע?|ken ikh bakumen a torbe?|קען איך באקומען א טורבע
sm_busstop|וווּ איז די אויטאָבוס־סטאַנציע?|vu iz di oytobus-stantsye?|וו איז די אויטובוס-סטאנציע
sm_trainleave|ווען פֿאָרט אָפּ די באַן?|ven fort op di ban?|ווען פורט אופ די באן
sm_oneticket|איין בילעט, זײַט אַזוי גוט|eyn bilet, zayt azoy gut|איין בילעט, זייט אזוי גוט
sm_howlong|ווי לאַנג דויערט עס?|vi lang doyert es?|ווי לאנג דויערט עס
sm_meter|שאַלט אײַן דעם מעטער, זײַט אַזוי גוט|shalt ayn dem meter, zayt azoy gut|שאלט איין דעם מעטער, זייט אזוי גוט
sm_slowdrive|פֿאָרט פּאַמעלעכער, זײַט אַזוי גוט|fort pamelekher, zayt azoy gut|פורט פאמעלעכער, זייט אזוי גוט
sm_airport|איך וויל פֿאָרן צום לופֿטפּאָרט|ikh vil forn tsum luftport|איך וויל פורן צום לופטפורט
sh_leavebag|קען איך דאָ איבערלאָזן מײַן טאַש?|ken ikh do iberlozn mayn tash?|קען איך דו איבערלוזן מיין טאש
sh_ac|דער קלימאַט־אַפּאַראַט אַרבעט נישט|der klimat-aparat arbet nisht|דער קלימאט-אפאראט ארבעט נישט
sh_breakfast|איז דער פֿרישטיק אײַנגערעכנט?|iz der frishtik ayngerekhnt?|איז דער פרישטיק איינגערעכנט
sh_towel|איך דאַרף נאָך אַ האַנטעך|ikh darf nokh a hantekh|איך דארף נוך א האנטעך
sh_taxi|קענט איר מיר רופֿן אַ טאַקסי?|kent ir mir rufn a taksi?|קענט איר מיר רופן א טאקסי
sh_late|קען איך אַרויס שפּעטער?|ken ikh aroys shpeter?|קען איך ארויס שפעטער
so_learning|איך לערן זיך ייִדיש|ikh lern zikh yidish|איך לערן זיך יידיש
so_thankshelp|אַ גרויסן דאַנק פֿאַר דער הילף|a groysn dank far der hilf|א גרויסן דאנק פאר דער הילף
so_photo|קענט איר אונדז פֿאָטאָגראַפֿירן?|kent ir undz fotografirn?|קענט איר אונדז פוטוגראפירן
so_like|דאָס אָרט געפֿעלט מיר|dos ort gefelt mir|דוס אורט געפעלט מיר
so_vacation|איך בין דאָ אויף וואַקאַציע|ikh bin do oyf vakatsye|איך בין דו אויף וואקאציע
so_howsay|ווי זאָגט מען דאָס?|vi zogt men dos?|ווי זוגט מען דוס
so_noproblem|ניט קיין פּראָבלעם|nit keyn problem|ניט קיין פרובלעם
so_beautiful|עס איז זייער שיין!|es iz zeyer sheyn!|עס איז זייער שיין
sp_unwell|איך פֿיל זיך נישט גוט|ikh fil zikh nisht gut|איך פיל זיך נישט גוט
sp_nearhosp|וווּ איז דער נאָענטסטער שפּיטאָל?|vu iz der noentster shpitol?|וו איז דער נואנטסטער שפיטול
sp_fever|איך האָב היץ|ikh hob hits|איך הוב היץ
sp_helpme|העלפֿט מיר, זײַט אַזוי גוט|helft mir, zayt azoy gut|העלפט מיר, זייט אזוי גוט
sp_stolen|מע האָט מיר צוגעגנבֿעט די טאַש|me hot mir tsugeganvet di tash|מע הוט מיר צוגעגאנוועט די טאש
sp_embassy|איך דאַרף די ישׂראלדיקע אַמבאַסאַדע|ikh darf di yisroeldike ambasade|איך דארף די ייסרואלדיקע אמבאסאדע
dt1|וווּהין?|vuhin?|ווהין
dt2|צו דעם האָטעל, זײַט אַזוי גוט.|tsu dem hotel, zayt azoy gut.|צו דעם הוטעל, זייט אזוי גוט
dt3|גוט, זעצט זיך.|gut, zetst zikh.|גוט, זעצט זיך
dt4|וויפֿל קאָסט עס?|vifl kost es?|וויפל קוסט עס
dt5|צוויי הונדערט דאָלאַר.|tsvey hundert dolar.|צוויי הונדערט דולאר
dt6|שאַלט אײַן דעם מעטער, זײַט אַזוי גוט.|shalt ayn dem meter, zayt azoy gut.|שאלט איין דעם מעטער, זייט אזוי גוט
dt7|ניט קיין פּראָבלעם.|nit keyn problem.|ניט קיין פרובלעם
dt8|שטעלט זיך דאָ אָפּ, אַ דאַנק.|shtelt zikh do op, a dank.|שטעלט זיך דו אופ, א דאנק
dm1|וויפֿל קאָסט דאָס?|vifl kost dos?|וויפל קוסט דוס
dm2|דרײַ הונדערט.|dray hundert.|דריי הונדערט
dm3|צו טײַער! צוויי הונדערט?|tsu tayer! tsvey hundert?|צו טייער! צוויי הונדערט
dm4|צוויי הונדערט פֿופֿציק, דער לעצטער פּרײַז.|tsvey hundert fuftsik, der letster prayz.|צוויי הונדערט פופציק, דער לעצטער פרייז
dm5|גוט, איך נעם עס.|gut, ikh nem es.|גוט, איך נעם עס
dm6|אַ גרויסן דאַנק!|a groysn dank!|א גרויסן דאנק
dr1|וויפֿל מענטשן?|vifl mentshn?|וויפל מענטשן
dr2|צוויי, זײַט אַזוי גוט.|tsvey, zayt azoy gut.|צוויי, זייט אזוי גוט
dr3|וואָס ווילט איר באַשטעלן?|vos vilt ir bashteln?|ווס ווילט איר באשטעלן
dr4|געפּרעגלטער רײַז מיט הון, ניט שאַרף.|gepreglter rayz mit hun, nit sharf.|געפרעגלטער רייז מיט הון, ניט שארף
dr5|און צו טרינקען?|un tsu trinken?|און צו טרינקען
dr6|נאָר וואַסער, זײַט אַזוי גוט.|nor vaser, zayt azoy gut.|נור וואסער, זייט אזוי גוט
dr7|די רעכענונג, זײַט אַזוי גוט.|di rekhenung, zayt azoy gut.|די רעכענונג, זייט אזוי גוט
dh1|שלום־עליכם, איך האָב אַ רעזערוואַציע.|sholem-aleykhem, ikh hob a rezervatsye.|שולעם עליכם, איך הוב א רעזערוואציע
dh2|אויף וועמענס נאָמען?|oyf vemens nomen?|אויף וועמענס נומען
dh3|אויפֿן נאָמען ...|oyfn nomen|אויפן נומען
dh4|אײַער פּאַס, זײַט אַזוי גוט.|ayer pas, zayt azoy gut.|אייער פאס, זייט אזוי גוט
dh5|אײַער צימער איז דרײַ הונדערט פֿינף.|ayer tsimer iz dray hundert finf.|אייער צימער איז דריי הונדערט פינף
dh6|ווען איז דער פֿרישטיק?|ven iz der frishtik?|ווען איז דער פרישטיק
dh7|פֿון זיבן ביז צען.|fun zibn biz tsen.|פון זיבן ביז צן
dd1|זײַט מוחל, וווּ איז די סטאַנציע?|zayt moykhl, vu iz di stantsye?|זייט מויחל, וו איז די סטאנציע
dd2|גלײַך, און דערנאָך לינקס.|glaykh, un dernokh links.|גלייך, און דערנוך לינקס
dd3|איז עס ווײַט פֿון דאַנען?|iz es vayt fun danen?|איז עס וויט פון דאנען
dd4|ניין, פֿינף מינוט צו פֿוס.|neyn, finf minut tsu fus.|ניין, פינף מינוט צו פוס
dd5|אַ שיינעם דאַנק!|a sheynem dank!|א שיינעם דאנק
w_weather|דאָס וועטער|dos veter|דוס וועטער
w_sun|די זון|di zun|די זון
w_rain|דער רעגן|der regn|דער רעגן
w_wind|דער ווינט|der vint|דער ווינט
w_cloud|דער וואָלקן|der volkn|דער וולקן
w_snow|דער שניי|der shney|דער שניי
w_storm|דער שטורעם|der shturem|דער שטורעם
w_humid|פֿײַכט|faykht|פייכט
j_teacher|דער לערער|der lerer|דער לערער
j_driver|דער שאָפֿער|der shofer|דער שופער
j_waiter|דער קעלנער|der kelner|דער קעלנער
j_cook|דער קוכער|der kukher|דער קוכער
j_student|דער סטודענט|der student|דער סטודענט
j_engineer|דער אינזשעניר|der inzhenir|דער אינזשעניר
j_nurse|די קראַנקן־שוועסטער|di krankn-shvester|די קראנקן-שוועסטער
j_seller|דער פֿאַרקויפֿער|der farkoyfer|דער פארקויפער
j_guide|דער פֿירער|der firer|דער פירער
j_pharmacist|דער אַפּטייקער|der apteyker|דער אפטייקער
e_angry|בייז|beyz|בייז
e_scared|דערשראָקן|dershrokn|דערשרוקן
e_bored|עס איז מיר נודנע|es iz mir nudne|עס איז מיר נודנע
e_worried|באַזאָרגט|bazorgt|באזורגט
e_surprised|איבערגעראַשט|ibergerasht|איבערגעראשט
e_calm|רויִק|ruik|רויק
e_excited|אויפֿגערעגט|oyfgeregt|אויפגערעגט
e_love|פֿאַרליבט|farlibt|פארליבט
dir_north|צפֿון|tsofn|צאפן
dir_south|דרום|dorem|דארעם
dir_east|מיזרח|mizrekh|מיזרעך
dir_west|מערבֿ|mayrev|מאירעוו
dir_corner|דער ווינקל|der vinkl|דער ווינקל
dir_light|דער שײַנער|der shayner|דער שיינער
dir_behind|הינטער|hinter|הינטער
dir_front|פֿאָרנט|fornt|פורנט
dir_next|לעבן|lebn|לעבן
dir_back|צוריק|tsurik|צוריק
dir_up|אַרויף|aroyf|ארויף
dir_down|אַראָפּ|arop|ארופ
yx_nu|נו?|nu?|נו
yx_oyvey|אוי וויי!|oy vey!|אוי וויי
yx_mazltov|מזל־טובֿ!|mazl-tov!|מאזל טוב
yx_gutshabes|גוט־שבת!|gut-shabes!|גוט שאבעס
yx_gutyor|אַ גוט יאָר!|a gut yor!|א גוט יור
yx_gezunt|צו געזונט!|tsu gezunt!|צו געזונט
yx_biz120|ביז הונדערט און צוואַנציק!|biz hundert un tsvantsik!|ביז הונדערט און צוואנציק
yx_zolzayn|זאָל זײַן מיט מזל!|zol zayn mit mazl!|זול זיין מיט מאזל
yx_shoyn|שוין!|shoyn!|שוין
yx_takhles|תּכלית|takhles|תאכלעס
yx_khutspe|חוצפּה|khutspe|חוצפע
yx_shlep|שלעפּן|shlepn|שלעפן
yx_kvetsh|קוועטשן|kvetshn|קוועטשן
yx_nakhes|נחת|nakhes|נאחעס
yx_mentsh|אַ מענטש|a mentsh|א מענטש
yx_shmues|שמועסן|shmuesn|שמועסן
yx_bobe|די באָבע|di bobe|די בובע
yx_zeyde|דער זיידע|der zeyde|דער זיידע
yx_est|עסט, קינדערלעך!|est, kinderlekh!|עסט, קינדערלעך
yx_borkhhashem|ברוך־השם|borekh-hashem|בורוך השם
yx_sheynkeyt|אַ שיינקייט!|a sheynkeyt!|א שיינקייט
yx_gornisht|גאָרנישט|gornisht|גורנישט`
});

/* ---- numbers & prices (0–999,999) → tokens [text, roman, hebrew-friendly]. 21 = איין און צוואַנציק (German-style order) ---- */
NW.yi = (() => {
  const O = [['נול', 'nul', 'נול'], ['איינס', 'eyns', 'איינס'], ['צוויי', 'tsvey', 'צוויי'], ['דרײַ', 'dray', 'דריי'], ['פֿיר', 'fir', 'פיר'], ['פֿינף', 'finf', 'פינף'], ['זעקס', 'zeks', 'זקס'], ['זיבן', 'zibn', 'זיבן'], ['אַכט', 'akht', 'אכט'], ['נײַן', 'nayn', 'ניין'],
    ['צען', 'tsen', 'צן'], ['עלף', 'elf', 'עלף'], ['צוועלף', 'tsvelf', 'צוועלף'], ['דרײַצן', 'draytsn', 'דרייצן'], ['פֿערצן', 'fertsn', 'פרצן'], ['פֿופֿצן', 'fuftsn', 'פופצן'], ['זעכצן', 'zekhtsn', 'זעכצן'], ['זיבעצן', 'zibetsn', 'זיבעצן'], ['אַכצן', 'akhtsn', 'אכצן'], ['נײַנצן', 'nayntsn', 'ניינצן']];
  const T = [, , ['צוואַנציק', 'tsvantsik', 'צוואנציק'], ['דרײַסיק', 'draysik', 'דרייסיק'], ['פֿערציק', 'fertsik', 'פרציק'], ['פֿופֿציק', 'fuftsik', 'פופציק'], ['זעכציק', 'zekhtsik', 'זעכציק'], ['זיבעציק', 'zibetsik', 'זיבעציק'], ['אַכציק', 'akhtsik', 'אכציק'], ['נײַנציק', 'nayntsik', 'ניינציק']];
  const ONE = ['איין', 'eyn', 'איין'], UN = ['און', 'un', 'און'], H = ['הונדערט', 'hundert', 'הונדערט'], K = ['טויזנט', 'toyznt', 'טויזנט'];
  function u100(n, out, pre) {
    if (!n) return;
    if (n < 20) { out.push(n === 1 && pre ? ONE : O[n]); return; }
    const u = n % 10;
    if (u) out.push(u === 1 ? ONE : O[u], UN);
    out.push(T[Math.floor(n / 10)]);
  }
  function u1000(n, out, pre) {
    const h = Math.floor(n / 100), r = n % 100;
    if (h) { if (h > 1) out.push(O[h]); out.push(H); }
    u100(r, out, pre);
  }
  return (n, cur) => {
    const out = [];
    if (n === 0) out.push(O[0]);
    else {
      const th = Math.floor(n / 1000), r = n % 1000;
      if (th) { if (th > 1) u1000(th, out, true); out.push(K); }
      u1000(r, out, cur);
    }
    if (cur) out.push(['דאָלאַר', 'dolar', 'דולאר']);
    return out.map(a => tk(a[0], a[1], a[2]));
  };
})();
NUM.yi = { tokens: (n, cur) => NW.yi(n, cur) };
