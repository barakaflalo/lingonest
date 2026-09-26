/* ===== LingoNest — lang-lg.js : Luganda content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('lg', {
  ver: '1.19.0',
  curSym: "USh",
  country: {"he": "אוגנדה (מרכז — קמפלה)", "en": "Uganda (central — Kampala)", "ru": "Уганда (центр — Кампала)", "es": "Uganda (centro — Kampala)", "ar": "أوغندا (الوسط — كمبالا)"},
  emergency: [
    ["🆘", {"he": "חירום", "en": "Emergency", "ru": "Экстренный", "es": "Emergencias", "ar": "الطوارئ"}, "999", "112"]
  ],
  tips: [
    {"t": {"he": "Gyebale ko — הברכה שכולם אוהבים", "en": "Gyebale ko — everyone's favourite greeting"}, "b": {"he": "Gyebale ko (\"כל הכבוד על העבודה\") היא ברכה שאומרים כמעט לכל אחד — למוכר, לנהג, לשכן. עונים Kale, gyebale ko nawe. Oli otya? = מה שלומך, ועונים Bulungi.", "en": "Gyebale ko (\"well done on your work\") is said to almost anyone — vendor, driver, neighbour. Reply Kale, gyebale ko nawe. Oli otya? = how are you — Bulungi."}, "ex": [["Oli otya? — Bulungi", "", "אולי אוטיה? — בולונגי", "מה שלומך? — טוב", "How are you? — Fine"]]},
    {"t": {"he": "Webale ו-Weebale nnyo", "en": "Webale and Webale nnyo"}, "b": {"he": "Webale = תודה, Webale nnyo = תודה רבה. תשמע גם Webale okujja (תודה שבאת) — מקבלים אורחים בחום רב.", "en": "Webale = thanks, Webale nnyo = thank you very much. You'll also hear Webale okujja (thanks for coming) — guests are welcomed warmly."}, "ex": [["Webale nnyo", "", "וובאלה ניו", "תודה רבה", "Thank you very much"]]},
    {"t": {"he": "כריעה לכבוד", "en": "Kneeling as respect"}, "b": {"he": "בתרבות הבאגנדה נשים (ולפעמים גם גברים צעירים) כורעות קלות כשמברכות מבוגרים. מתייר לא מצפים לזה — אבל ברכה חמה וסבלנית מאוד מוערכת.", "en": "In Buganda culture women (and sometimes young men) kneel slightly to greet elders. Visitors aren't expected to, but a warm, patient greeting is much appreciated."}, "ex": [["Mwasuze mutya, ssebo?", "", "מוואסוזה מוטיה, סבו", "איך ישנת, אדוני?", "Good morning, sir?"]]},
    {"t": {"he": "ספירה בשילינגים — מספרים גדולים", "en": "Counting shillings — big numbers"}, "b": {"he": "השילינג האוגנדי קטן, אז מחירים הם באלפים: 5,000 = enkumi ttaano. 10,000 = omutwalo — מילה מיוחדת! בשוק רבים יאמרו מחירים באנגלית (\"five thousand\"), וזה בסדר גמור.", "en": "The Ugandan shilling is small, so prices are in thousands: 5,000 = enkumi ttaano. 10,000 = omutwalo — a special word! Many vendors say prices in English, which is fine."}, "ex": [["Omutwalo", "", "אומוטוואלו", "עשרת אלפים", "Ten thousand"]]},
    {"t": {"he": "בודה-בודה", "en": "Boda-boda"}, "b": {"he": "בקמפלה נוסעים הרבה ב\"בודה-בודה\" — מוניות אופנוע. סוגרים מחיר לפני (Ssente meka?), ומבקשים Vuga mpola (סע לאט). כדאי לבקש קסדה.", "en": "In Kampala people ride boda-bodas (motorbike taxis). Agree the price first (Ssente meka?) and say Vuga mpola (drive slowly). Ask for a helmet."}, "ex": [["Vuga mpola, mwattu", "", "בוגה מפולה, מוואטו", "סע לאט, בבקשה", "Drive slowly, please"]]},
    {"t": {"he": "לוגנדה, אנגלית וסווהילית", "en": "Luganda, English and Swahili"}, "b": {"he": "באוגנדה יש כ-40 שפות. אנגלית וסווהילית רשמיות, ולוגנדה היא השפה הנפוצה ביותר בקמפלה ובמרכז. בצפון ובמערב מדברים שפות אחרות — אבל אנגלית תעבוד כמעט בכל מקום.", "en": "Uganda has about 40 languages. English and Swahili are official; Luganda is the most common in Kampala and the centre. The north and west speak others — but English works almost everywhere."}, "ex": [["Oyogera Olungereza?", "", "אויוגרה אולונגרזה", "אתה מדבר אנגלית?", "Do you speak English?"]]}
  ],
  note: {"he": "לוגנדה, שפת שבט הבאגנדה (הגדול באוגנדה), נכתבת באותיות לטיניות ונקראת כמו שכותבים. עיצור כפול (kk, ss, tt) נהגה חזק יותר, ותנועה כפולה (aa, ee) — ארוכה יותר. יש אות מיוחדת ŋ (נג).", "en": "Luganda, the language of the Baganda (Uganda's largest group), uses Latin letters and is read as written. Doubled consonants (kk, ss, tt) are stronger, doubled vowels (aa, ee) longer. Special letter ŋ (ng).", "ru": "Луганда пишется латиницей и читается как пишется. Двойные согласные сильнее, двойные гласные длиннее. Буква ŋ.", "es": "El luganda usa letras latinas y se lee como se escribe. Consonantes dobles más fuertes, vocales dobles más largas. Letra ŋ.", "ar": "تُكتب اللوغندا بحروف لاتينية وتُقرأ كما تُكتب. الحروف الساكنة المضاعفة أقوى والحركات المضاعفة أطول. حرف ŋ."},
  alpha: [
    ["A a", "a", "אַ", "a"],
    ["B b", "ba", "ב", "b"],
    ["C c", "ca", "צ׳", "c"],
    ["D d", "da", "ד", "d"],
    ["E e", "e", "אֶ", "e"],
    ["F f", "fa", "פ", "f"],
    ["G g", "ga", "ג", "g"],
    ["I i", "i", "אִי", "i"],
    ["J j", "ja", "ג׳", "j"],
    ["K k", "ka", "ק", "k"],
    ["L l", "la", "ל", "l"],
    ["M m", "ma", "מ", "m"],
    ["N n", "na", "נ", "n"],
    ["Ny ny", "nya", "ני", "ny"],
    ["Ŋ ŋ", "ŋa", "נג", "ŋ"],
    ["O o", "o", "אוֹ", "o"],
    ["P p", "pa", "פּ", "p"],
    ["R r", "ra", "ר", "r"],
    ["S s", "sa", "ס", "s"],
    ["T t", "ta", "ט", "t"],
    ["U u", "u", "אוּ", "u"],
    ["V v", "va", "ו (V)", "v"],
    ["W w", "wa", "ו", "w"],
    ["Y y", "ya", "י", "y"],
    ["Z z", "za", "ז", "z"]
  ],
  voiceFallback: "heb",
  /* speaker = female: [regex source, flags, replacement] */
  gender: [],
  words: `hello|Gyebale ko / Ki kati||ג׳בלה קו / קי קאטי
bye|Weeraba||ווראבה
morning|Wasuze otya nno?||וואסוזה אוטיה נו
thanks|Webale||וובאלה
please|Mwattu||מוואטו
sorry|Nsonyiwa||נסוניווה
yes|Yee||יה
no|Nedda||נדה
howareyou|Oli otya?||אולי אוטיה
good|Bulungi||בולונגי
ok|Kale||קאלה
n1|Emu||אמו
n2|Bbiri||בירי
n3|Ssatu||סאטו
n4|Nnya||ניה
n5|Ttaano||טאנו
n6|Mukaaga||מוקאגה
n7|Musanvu||מוסאנבו
n8|Munaana||מונאנה
n9|Mwenda||מוונדה
n10|Kkumi||קומי
n0|Zeero||זרו
n20|Abiri||אבירי
n50|Ataano||אטאנו
n100|Kikumi||קיקומי
n1000|Lukumi||לוקומי
n11|Kkumi n'emu||קומי נאמו
n12|Kkumi na bbiri||קומי נה בירי
n13|Kkumi na ssatu||קומי נה סאטו
n14|Kkumi na nnya||קומי נה ניה
n15|Kkumi na ttaano||קומי נה טאנו
n16|Kkumi na mukaaga||קומי נה מוקאגה
n17|Kkumi na musanvu||קומי נה מוסאנבו
n18|Kkumi na munaana||קומי נה מונאנה
n19|Kkumi na mwenda||קומי נה מוונדה
n30|Asatu||אסאטו
n40|Ana||אנה
n60|Nkaaga||נקאגה
n70|Nsanvu||נסאנבו
n80|Kinaana||קינאנה
n90|Kyenda||צ׳נדה
n200|Bibiri||ביבירי
n500|Bitaano||ביטאנו
n10000|Omutwalo||אומוטוואלו
water|Amazzi||אמאזי
toilet|Kaabuyonjo||קאבויונג׳ו
where|Wa?||ווה
howmuch|Ssente meka?||סנטה מקה
this|Kino||קינו
friend|Mukwano||מוקוואנו
food|Emmere||אמרה
bread|Omugaati||אומוגאטי
coffee|Kaawa||קאווה
tea|Caayi||צ׳אי
chicken|Enkoko||אנקוקו
fish|Ekyennyanja||אצ׳ניאנג׳ה
rice|Omuceere||אומוצ׳רה
beer|Bbiya||ביאה
bill|Bbiiru||בירו
tasty|Kiwoomu||קיוומו
egg|Eggi||אגי
fruit|Ebibala||אביבאלה
veg|Enva endiirwa||אנבה אנדירווה
meat|Ennyama||אניאמה
milk|Amata||אמאטה
spicy|Kibalagala||קיבאלאגאלה
restaurant|Wooteeri (ey'okulya)||ווטרי
ice|Omuzira||אומוזירה
taxi|Takisi||טאקיסי
bus|Bbaasi||באסי
train|Eggaali y'omukka||אגאלי יומוקה
airport|Ekisaawe ky'ennyonyi||אקיסאווה צ׳אניוני
hotel|Hoteeri||הוטרי
left|Kkono||קונו
right|Ddyo||דיו
straight|Genda butereevu||גנדה בוטרבו
stop|Yimirira||יימירירה
ticket|Tikiti||טיקיטי
money|Ssente||סנטה
expensive|Kya bbeeyi||צ׳ה ביי
cheap|Kya buseere||צ׳ה בוסרה
market|Akatale||אקאטלה
pharmacy|Famasi||פאמאסי
open|Kiggule||קיגולה
closed|Kiggale||קיגאלה
help|Nnyamba!||ניאמבה
police|Poliisi||פוליסי
doctor|Omusawo||אומוסאוו
hospital|Eddwaliro||אדוואלירו
today|Leero||לרו
tomorrow|Enkya||אנצ׳ה
yesterday|Jjo||ג׳ו
now|Kaakano||קאקאנו
t_morning|Ku makya||קו מאצ׳ה
t_evening|Akawungeezi||אקוונגזי
t_night|Ekiro||אקירו
t_week|Wiiki||וויקי
t_month|Omwezi||אומוזי
t_year|Omwaka||אומוואקה
t_hour|Essaawa||אסאווה
t_minute|Eddakiika||אדאקיקה
p_toilet|Kaabuyonjo eri wa?||קאבויונג׳ו ארי ווה
p_cost|Kino ssente meka?||קינו סנטה מקה
p_nounder|Sitegedde||סיטגדה
p_english|Oyogera Olungereza?||אויוגרה אולונגרזה
p_slow|Mwattu yogera mpola||מוואטו יוגרה מפולה
p_bill|Mwattu ndeetera bbiiru||מוואטו נדטרה בירו
p_want|Njagala kino||נג׳אגאלה קינו
p_expensive|Kya bbeeyi nnyo||צ׳ה ביי ניו
p_discount|Kendeeza ku bbeeyi, mwattu||קנדזה קו ביי, מוואטו
p_address|Mwattu ntwala ku ndagiriro eno||מוואטו נטוואלה קו נדגירירו אנו
p_hotel|Hoteeri eri wa?||הוטרי ארי ווה
p_doctor|Nneetaaga omusawo||נטאגה אומוסאוו
p_police|Kuba poliisi essimu!||קובה פוליסי אסימו
p_israel|Nva Isiraeri||נבה איסיראלי
p_name|Erinnya lyange nze ...||ארינייה ליאנגה נזה
p_nice|Nsanyuse okukulaba||נסניוסה אוקוקולבה
p_water|Mwattu amazzi||מוואטו אמאזי
p_help|Osobola okunnyamba?||אוסובולה אוקוניאמבה
p_what|Kino kiki?||קינו קיקי
p_nospicy|Tossaamu kibalagala, mwattu||טוסאמו קיבאלאגאלה, מוואטו
room|Ekisenge||אקיסנגה
key|Ekisumuluzo||אקיסומולוזו
bed|Ekitanda||אקיטנדה
shower|Bafu||באפו
towel|Tawulo||טאוולו
passport|Paasipooti||פאסיפוטי
mon|Balaza||בלאזה
tue|Lwakubiri||לוואקובירי
wed|Lwakusatu||לוואקוסאטו
thu|Lwakuna||לוואקונה
fri|Lwakutaano||לוואקוטאנו
sat|Lwamukaaga||לוואמוקאגה
sun|Ssabbiiti||סאביטי
red|Kimyufu||קימיופו
blue|Bbululu||בולולו
green|Kiragala||קירגאלה
yellow|Kyenvu||צ׳נבו
black|Kiddugavu||קידוגאבו
white|Kyeru||צ׳רו
man|Omusajja||אומוסאג׳ה
woman|Omukazi||אומוקאזי
child|Omwana||אומוואנה
family|Amaka||אמאקה
i|Nze||נזה
you|Ggwe||גווה
head|Omutwe||אומוטווה
stomach|Olubuto||אולובוטו
hand|Omukono||אומוקונו
pain|Obulumi||אובולומי
medicine|Eddagala||אדאגאלה
sick|Omulwadde||אומולוואדה
big|Kinene||קיננה
small|Kitono||קיטונו
hot|Kyokya||צ׳וצ׳ה
cold|Kinnyogovu||קיניוגובו
bad|Kibi||קיבי
beautiful|Kirungi nnyo||קירונגי ניו
new|Kiggya||קיג׳ה
old|Kikadde||קיקאדה
fast|Mangu||מאנגו
slow|Mpola||מפולה
near|Kumpi||קומפי
far_a|Wala||וואלה
clean|Kiyonjo||קיונג׳ו
dirty|Kikyafu||קיצ׳אפו
tired|Nkooye||נקויה
hungry|Enjala enuma||אנג׳אלה אנומה
thirsty|Ennyonta enuma||אניונטה אנומה
happy|Nsanyuse||נסניוסה
sad|Nnakuwavu||נאקווואבו
easy|Kyangu||צ׳אנגו
difficult|Kizibu||קיזיבו
many|Bingi||בינגי
eat|Okulya||אוקוליה
drink|Okunywa||אוקוניווה
go|Okugenda||אוקוגנדה
buy|Okugula||אוקוגולה
speak|Okwogera||אוקווגרה
sleep|Okwebaka||אוקוובאקה
understand|Okutegeera||אוקוטגרה
come|Okujja||אוקוג׳ה
want|Okwagala||אוקוואגאלה
need|Okwetaaga||אוקווטאגה
know|Okumanya||אוקומאניה
see|Okulaba||אוקולבה
hear|Okuwulira||אוקווולירה
give|Okuwa||אוקווה
take|Okutwala||אוקוטוואלה
pay|Okusasula||אוקוסאסולה
wait|Okulinda||אוקולינדה
walk|Okutambula||אוקוטאמבולה
read|Okusoma||אוקוסומה
write|Okuwandiika||אוקוואנדיקה
love|Okwagala (omuntu)||אוקוואגאלה
work|Okukola||אוקוקולה
swim|Okuwuga||אוקווגה
c_table|Emmeeza ey'abantu babiri, mwattu||אמזה איאבאנטו באבירי, מוואטו
c_menu|Mwattu ndeetera menu||מוואטו נדטרה מניו
c_noice|Tossaamu muzira, mwattu||טוסאמו מוזירה, מוואטו
c_nomeat|Sirya nnyama||סיריה ניאמה
c_allergy|Ebinyeebwa tebinkwatako bulungi||אביניבווה טבינקוואטאקו בולונגי
c_delicious|Kiwoomu nnyo!||קיוומו ניו
c_reserv|Nnina ekisenge kye nneekwata||נינה אקיסנגה צ׳ה נקוואטה
c_wifi|Password ya wifi y'eriwa?||פסוורד יה וויפי יאריווה
c_checkout|Nfuluma ku ssaawa mmeka?||נפולומה קו סאווה מקה
c_howget|Ntuuka ntya eyo?||נטוקה נטיה איו
c_stophere|Yimirira wano, mwattu||יימירירה וואנו, מוואטו
c_far|Wala?||וואלה
c_card|Nsobola okusasula ne kaadi?||נסובולה אוקוסאסולה נה קאדי
c_looking|Ndaba bulabi, webale||נדאבה בולבי, וובאלה
c_yourname|Erinnya lyo ggwe ani?||ארינייה ליו גווה אני
c_wherefrom|Ova wa?||אובה ווה
c_seeyou|Tunaalabagana||טונאלבגאנה
c_cheers|Cheers!||צ׳ירס
c_lost|Mbuze||מבוזה
c_passport|Paasipooti yange ebuze||פאסיפוטי יאנגה אבוזה
c_hurts|Wano wannuma||וואנו וואנומה
c_time|Ssaawa mmeka?||סאווה מקה
c_again|Mwattu ddamu||מוואטו דאמו
c_write|Osobola okukiwandiika?||אוסובולה אוקוקיוואנדיקה
dog|Embwa||אמבווה
cat|Kapa||קאפה
bird|Ekinyonyi||אקיניוני
horse|Embalaasi||אמבאלאסי
cow|Ente||אנטה
pig|Embizzi||אמביזי
elephant|Enjovu||אנג׳ובו
monkey|Enkima||אנקימה
snake|Omusota||אומוסוטה
mosquito|Ensiri||אנסירי
lion|Empologoma||אמפולוגומה
duck|Embaata||אמבאטה
apple|Apo||אפו
banana|Ettooke / Menvu||אטוקה / מנבו
orange|Omucungwa||אומוצ׳ונגווה
mango|Muyembe||מוימבה
pineapple|Enanaasi||אנאנאסי
watermelon|Ebinekoolo||אבינקולו
coconut|Nazi||נאזי
grapes|Emizabbibu||אמיזאביבו
lemon|Nniimu||נימו
strawberry|Stroberi||סטרוברי
papaya|Paapaali||פאפאלי
tomato|Nnyaanya||ניאניה
potato|Lumonde||לומונדה
onion|Obutungulu||אובוטונגולו
garlic|Katungulu ccumu||קאטונגולו צ׳ומו
cucumber|Kukumba||קוקומבה
carrot|Kaloti||קאלוטי
chili|Kamulali||קאמולאלי
corn|Kasooli||קאסולי
mushroom|Obutiko||אובוטיקו
lettuce|Letisi||לטיסי
eggplant|Bbiringanya||בירינגאניה
soup|Ssupu||סופו
salad|Saladi||סלאדי
noodles|Makaroni||מקרוני
cheese|Ccizi||צ׳יזי
butter|Bbata||באטה
salt|Omunnyo||אומוניו
sugar|Ssukaali||סוקאלי
cake|Keeki||קקי
icecream|Ayisikuliimu||אייסיקולימו
juice|Omubisi||אומוביסי
wine|Wayini||וואיני
breakfast|Ekyenkya||אצ׳נצ׳ה
lunch|Ekyemisana||אצ׳מיסאנה
dinner|Ekyeggulo||אצ׳גולו
fork|Wuuma||וומה
spoon|Ekijiiko||אקיג׳יקו
knife|Akambe||אקאמבה
glass|Gilaasi||גילאסי
plate|Essowaani||אסוואני
bank|Bbanka||באנקה
atm|ATM||איי-טי-אם
beach|Olubalama||אולובאלאמה
museum|Ekisaawe ky'ebyafaayo||אקיסאווה צ׳ביאפאיו
temple|Essinzizo||אסינזיזו
street|Oluguudo||אולוגודו
city|Ekibuga||אקיבוגה
shop|Edduuka||אדוקה
supermarket|Ssupamaketi||סופמקטי
park|Ppaaka||פאקה
station|Siteegi||סיטגי
embassy|Ekitebe ky'eggwanga||אקיטבה צ׳גוואנגה
phone|Essimu||אסימו
charger|Cajja||צ׳אג׳ה
bag|Ensawo||אנסאוו
shoes|Engatto||אנגאטו
clothes|Engoye||אנגויה
hat|Enkoofiira||אנקופירה
glasses|Galubindi||גאלובינדי
map|Maapu||מאפו
sunscreen|Ebizigo by'omusana||אביזיגו ביומוסאנה
umbrella|Ekisiikirize||אקיסיקיריזה
sf_order|Njagala okulagira||נג׳אגאלה אוקולגירה
sf_recommend|Ki ky'oyinza okundagira?||קי צ׳ויינזה אוקונדגירה
sf_bottle|Eccupa y'amazzi emu, mwattu||אצ׳ופה יאמאזי אמו, מוואטו
sf_isspicy|Kino kirimu kamulali?||קינו קירימו קאמולאלי
sf_onemore|Endala emu, mwattu||אנדאלה אמו, מוואטו
sf_nosugar|Tossaamu ssukaali, mwattu||טוסאמו סוקאלי, מוואטו
sf_takeaway|Ngenda nakyo||נגנדה נאצ׳ו
ss_smaller|Olina ekitono?||אולינה אקיטונו
ss_try|Nsobola okukigezaako?||נסובולה אוקוקיגזאקו
ss_two|Nja kutwala bibiri||נג׳ה קוטוואלה ביבירי
ss_change|Olina ssente entono?||אולינה סנטה אנטונו
ss_last|Bbeeyi esembayo meka?||ביי אסמבאיו מקה
ss_bag|Mwattu mpa akaveera||מוואטו מפה אקאברה
sm_busstop|Siteegi ya bbaasi eri wa?||סיטגי יה באסי ארי ווה
sm_trainleave|Eggaali egenda ku ssaawa mmeka?||אגאלי אגנדה קו סאווה מקה
sm_oneticket|Tikiti emu, mwattu||טיקיטי אמו, מוואטו
sm_howlong|Kitwala bbanga ki?||קיטוואלה בנגה קי
sm_meter|Mwattu teeka ku mita||מוואטו טקה קו מיטה
sm_slowdrive|Mwattu vuga mpola||מוואטו בוגה מפולה
sm_airport|Njagala kugenda ku kisaawe ky'ennyonyi||נג׳אגאלה קוגנדה קו קיסאווה צ׳אניוני
sh_leavebag|Nsobola okulekawo ensawo yange wano?||נסובולה אוקולקאוו אנסאוו יאנגה וואנו
sh_ac|AC tekola||איי-סי טקולה
sh_breakfast|Ekyenkya kirimu?||אצ׳נצ׳ה קירימו
sh_towel|Nneetaaga tawulo endala||נטאגה טאוולו אנדאלה
sh_taxi|Osobola okumpitira takisi?||אוסובולה אוקומפיטירה טאקיסי
sh_late|Nsobola okufuluma oluvannyuma?||נסובולה אוקופולומה אולובאניומה
so_learning|Njiga Oluganda||נג׳יגה אולוגאנדה
so_thankshelp|Webale nnyo okunnyamba||וובאלה ניו אוקוניאמבה
so_photo|Osobola okutukuba ekifaananyi?||אוסובולה אוקוטוקובה אקיפאנאני
so_like|Njagala nnyo wano||נג׳אגאלה ניו וואנו
so_vacation|Ndi wano mu luwummula||נדי וואנו מו לווומולה
so_howsay|Kino kiyitibwa kitya?||קינו קייטיבווה קיטיה
so_noproblem|Tewali buzibu||טוואלי בוזיבו
so_beautiful|Kirungi nnyo!||קירונגי ניו
sp_unwell|Siwulira bulungi||סיוולירה בולונגי
sp_nearhosp|Eddwaliro erisinga okumpi liri wa?||אדוואלירו אריסינגה אוקומפי לירי ווה
sp_fever|Nnina omusujja||נינה אומוסוג׳ה
sp_helpme|Mwattu nnyamba||מוואטו ניאמבה
sp_stolen|Bambbye ensawo yange||באמביה אנסאוו יאנגה
sp_embassy|Nneetaaga ekitebe kya Isiraeri||נטאגה אקיטבה צ׳ה איסיראלי
dt1|Ogenda wa?||אוגנדה ווה
dt2|Ku hoteeri eno, mwattu.||קו הוטרי אנו, מוואטו
dt3|Kale, yingira.||קאלה, יינגירה
dt4|Ssente meka?||סנטה מקה
dt5|Silingi bibiri.||סילינגי ביבירי
dt6|Mwattu teeka ku mita.||מוואטו טקה קו מיטה
dt7|Tewali buzibu.||טוואלי בוזיבו
dt8|Yimirira wano, webale.||יימירירה וואנו, וובאלה
dm1|Kino kya meka?||קינו צ׳ה מקה
dm2|Bisatu.||ביסאטו
dm3|Kya bbeeyi nnyo! Bibiri?||צ׳ה ביי ניו! ביבירי
dm4|Bibiri mu ataano, ye bbeeyi esembayo.||ביבירי מו אטאנו, יה ביי אסמבאיו
dm5|Kale, nkitwala.||קאלה, נקיטוואלה
dm6|Webale nnyo!||וובאלה ניו
dr1|Muli bameka?||מולי באמקה
dr2|Tuli babiri.||טולי באבירי
dr3|Mwagala ki?||מוואגאלה קי
dr4|Omuceere ogw'okusiika n'enkoko, tossaamu kamulali.||אומוצ׳רה אוגווקוסיקה נאנקוקו, טוסאמו קאמולאלי
dr5|Mwagala kunywa ki?||מוואגאלה קוניווה קי
dr6|Amazzi gokka, mwattu.||אמאזי גוקה, מוואטו
dr7|Mwattu ndeetera bbiiru.||מוואטו נדטרה בירו
dh1|Gyebale ko, nnina ekisenge kye nneekwata.||ג׳בלה קו, נינה אקיסנגה צ׳ה נקוואטה
dh2|Mu linnya ki?||מו ליינייה קי
dh3|Mu linnya lya ...||מו ליינייה ליה
dh4|Paasipooti yo, mwattu.||פאסיפוטי יו, מוואטו
dh5|Ekisenge kyo kya bisatu mu ttaano.||אקיסנגה צ׳ו צ׳ה ביסאטו מו טאנו
dh6|Ekyenkya kiba ku ssaawa mmeka?||אצ׳נצ׳ה קיבה קו סאווה מקה
dh7|Okuva ku ssaawa emu okutuuka ku ssaawa nnya.||אוקובה קו סאווה אמו אוקוטוקה קו סאווה ניה
dd1|Nsonyiwa, siteegi eri wa?||נסוניווה, סיטגי ארי ווה
dd2|Genda butereevu, oluvannyuma okyuse ku kkono.||גנדה בוטרבו, אולובאניומה אוצ׳וסה קו קונו
dd3|Wala okuva wano?||וואלה אוקובה וואנו
dd4|Nedda, eddakiika ttaano n'ebigere.||נדה, אדאקיקה טאנו נאביגרה
dd5|Webale nnyo nnyini!||וובאלה ניו ניני
da1|Kiki ekikuleese okukyala?||קיקי אקיקולסה אוקוצ׳אלה
da2|Onoomala bbanga ki wano?||אונומאלה בנגה קי וואנו
da3|Wiiki bbiri.||וויקי בירי
da4|Tukwaniriza!||טוקוואנירזה
dp1|Olumwa wa?||אולומווה ווה
dp2|Mira eddagala lino emirundi ebiri olunaku.||מירה אדאגאלה לינו אמירונדי אבירי אולונאקו
dp4|Katonda akuwonye!||קאטונדה אקוווניה
ds1|Njagala sim kaadi erimu intaneti.||נג׳אגאלה סים קאדי ארימו אינטנטי
ds2|Ya nnaku mmeka?||יה נאקו מקה
ds3|Ya nnaku kkumi.||יה נאקו קומי
ds4|Kiwedde, kati olina intaneti.||קיוודה, קאטי אולינה אינטנטי
dc1|Nkuyambe?||נקויאמבה
dc2|Kino olina kya bbululu?||קינו אולינה צ׳ה בולולו
dc3|Yee, sayizi ki?||יה, סאייזי קי
dc4|Eya wakati.||איה וואקאטי
dc5|Kale, ekisenge eky'okugezaamu kiri eri.||קאלה, אקיסנגה איוקוגזאמו קירי ארי
dg1|Njagala okubuukirira olugendo lw'enkya.||נג׳אגאלה אוקובוקירירה אולוגנדו לוואנצ׳ה
dg2|Olugendo lusimbula ssaawa bbiri ez'oku makya.||אולוגנדו לוסימבולה סאווה בירי אזוקו מאצ׳ה
dg3|Ekyemisana kirimu?||אצ׳מיסאנה קירימו
dg4|Yee, n'amazzi.||יה, נאמאזי
dg5|Kirungi, abantu babiri.||קירונגי, אבאנטו באבירי
w_weather|Obudde||אובודה
w_sun|Enjuba||אנג׳ובה
w_rain|Enkuba||אנקובה
w_wind|Empewo||אמפוו
w_cloud|Ekire||אקירה
w_snow|Omuzira (okuva waggulu)||אומוזירה
w_storm|Kibuyaga||קיבויאגה
w_humid|Obunnyogovu||אובוניוגובו
j_teacher|Omusomesa||אומוסומסה
j_driver|Ddereeva||דרבה
j_waiter|Weyita||וויטה
j_cook|Omufumbi||אומופומבי
j_student|Omuyizi||אומויזי
j_engineer|Yinginiya||יינגיניה
j_nurse|Omujjanjabi||אומוג׳אנג׳אבי
j_seller|Omutunzi||אומוטונזי
j_guide|Omulambuzi||אומולמבוזי
j_pharmacist|Omukugu mu ddagala||אומוקוגו מו דאגאלה
e_angry|Nnyiize||ניזה
e_scared|Ntidde||נטידה
e_bored|Kinkooyesezza||קינקויסזה
e_worried|Neeraliikirira||נרליקירירה
e_surprised|Neewuunyizza||נוונייזה
e_calm|Nteredde||נטרדה
e_excited|Nsanyuse nnyo||נסניוסה ניו
e_love|Nkwagala||נקוואגאלה
dir_north|Bukiikakkono||בוקיקאקונו
dir_south|Bukiikaddyo||בוקיקאדיו
dir_east|Buvanjuba||בובאנג׳ובה
dir_west|Bugwanjuba||בוגוואנג׳ובה
dir_corner|Ku kkoona||קו קונה
dir_light|Taala z'oku luguudo||טאלה זוקו לוגודו
dir_behind|Emabega||אמאבגה
dir_front|Mu maaso||מו מאסו
dir_next|Ku mabbali||קו מאבאלי
dir_back|Ddayo emabega||דאיו אמאבגה
dir_up|Waggulu||וואגולו
dir_down|Wansi||וואנסי`
});

/* ---- numbers & prices (0–999,999) in Luganda → tokens [text, roman, hebrew]. Prices in Uganda shillings; "mu" joins tens and units ---- */
NW.lg = (() => {
  const O = [['zeero', 'זרו'], ['emu', 'אמו'], ['bbiri', 'בירי'], ['ssatu', 'סאטו'], ['nnya', 'ניה'], ['ttaano', 'טאנו'], ['mukaaga', 'מוקאגה'], ['musanvu', 'מוסאנבו'], ['munaana', 'מונאנה'], ['mwenda', 'מוונדה']];
  const T = [, ['kkumi', 'קומי'], ['abiri', 'אבירי'], ['asatu', 'אסאטו'], ['ana', 'אנה'], ['ataano', 'אטאנו'], ['nkaaga', 'נקאגה'], ['nsanvu', 'נסאנבו'], ['kinaana', 'קינאנה'], ['kyenda', 'צ׳נדה']];
  const H = [, ['kikumi', 'קיקומי'], ['bibiri', 'ביבירי'], ['bisatu', 'ביסאטו'], ['bina', 'בינה'], ['bitaano', 'ביטאנו'], ['lukaaga', 'לוקאגה'], ['lusanvu', 'לוסאנבו'], ['lunaana', 'לונאנה'], ['lwenda', 'לוונדה']];
  const MU = ['mu', 'מו'];
  function u1000(n, out) {
    const h = Math.floor(n / 100), t = Math.floor(n % 100 / 10), u = n % 10;
    if (h) out.push(H[h]);
    if (h && (t || u)) out.push(MU);
    if (t === 1 && u) out.push(T[1], ['na', 'נה'], O[u]);
    else { if (t) out.push(T[t]); if (t && u) out.push(MU); if (u) out.push(O[u]); }
  }
  return (n, cur) => {
    const out = cur ? [['silingi', 'סילינגי']] : [];
    if (n === 0) out.push(O[0]);
    else {
      const th = Math.floor(n / 1000), r = n % 1000;
      if (th === 1) out.push(['lukumi', 'לוקומי']);
      else if (th === 10) out.push(['omutwalo', 'אומוטוואלו']);
      else if (th) { out.push(['enkumi', 'אנקומי']); u1000(th, out); }
      if (th && r) out.push(MU);
      u1000(r, out);
    }
    return out.map(a => tk(a[0], a[0], a[1]));
  };
})();
NUM.lg = { tokens: (n, cur) => NW.lg(n, cur) };
