/* ===== LingoNest — lang-ig.js : Igbo content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('ig', {
  ver: '1.19.0',
  curSym: "₦",
  country: {"he": "דרום-מזרח ניגריה", "en": "South-east Nigeria", "ru": "Юго-восток Нигерии", "es": "Sureste de Nigeria", "ar": "جنوب شرق نيجيريا"},
  emergency: [
    ["🇳🇬", {"he": "ניגריה — חירום", "en": "Nigeria — emergency", "ru": "Нигерия — экстренный", "es": "Nigeria — emergencias", "ar": "نيجيريا — الطوارئ"}, "112"],
    ["🚓", {"he": "ניגריה — משטרה", "en": "Nigeria — police", "ru": "Нигерия — полиция", "es": "Nigeria — policía", "ar": "نيجيريا — الشرطة"}, "199"]
  ],
  tips: [
    {"t": {"he": "Kedụ? — מה נשמע", "en": "Kedụ? — how are you"}, "b": {"he": "Kedụ? (קדו) היא הברכה הנפוצה, ועונים Ọ dị mma (הכול טוב). Ndewo = שלום, Daalụ = תודה, Biko = בבקשה. עם חמש המילים האלה מתחילים כל שיחה.", "en": "Kedụ? is the common greeting; answer Ọ dị mma (it's good). Ndewo = hello, Daalụ = thanks, Biko = please. Five words that start any chat."}, "ex": [["Kedụ? — Ọ dị mma", "", "קדו? — או די מה", "מה נשמע? — טוב", "How are you? — Fine"]]},
    {"t": {"he": "ספירה עשרונית ופשוטה", "en": "Simple decimal counting"}, "b": {"he": "בניגוד ליורובה, באיגבו ספירה פשוטה: iri (10), iri abụọ (\"עשר שתיים\" = 20), iri abụọ na otu (21), narị (100), puku (1000). לכן מסך המחירים עובד כאן באיגבו מלאה.", "en": "Unlike Yoruba, Igbo counting is simple: iri (10), iri abụọ (\"ten two\" = 20), iri abụọ na otu (21), narị (100), puku (1000). So the Prices screen works fully in Igbo."}, "ex": [["Iri abụọ na otu", "", "אירי אבואו נה אוטו", "21", "21"]]},
    {"t": {"he": "פתגמים — מלח הדיבור", "en": "Proverbs — the salt of speech"}, "b": {"he": "באיגבו אומרים ש\"פתגמים הם שמן הדקל שבו אוכלים מילים\". אנשים משלבים פתגמים בשיחה, ומי שמכיר אחד או שניים — זוכה לחיוך גדול.", "en": "Igbo say \"proverbs are the palm oil with which words are eaten\". People weave proverbs into conversation — know one or two and you'll get big smiles."}, "ex": [["Onye aghala nwanne ya", "", "אוניה אגאלה נוואנה יה", "אל תעזוב את אחיך", "Don't leave your brother behind"]]},
    {"t": {"he": "קולה — סמל הכנסת אורחים", "en": "Kola — the sign of welcome"}, "b": {"he": "בבית איגבו מגישים לאורח אגוז קולה (ọjị) בטקס קצר עם ברכה. אם מציעים לך — זה כבוד גדול; מקבלים בתודה.", "en": "In an Igbo home a guest is offered kola nut (ọjị) in a small ceremony with a blessing. Being offered it is a great honour — accept with thanks."}, "ex": [["Onye wetara ọjị wetara ndụ", "", "אוניה ווטרה אוג׳י ווטרה נדו", "מי שמביא קולה — מביא חיים", "He who brings kola brings life"]]},
    {"t": {"he": "Ndo — \"צר לי\" שאומרים הרבה", "en": "Ndo — the \"sorry\" you hear a lot"}, "b": {"he": "Ndo (נדו) נאמר כשמישהו נפגע, עייף או מתקשה — כמו \"אוי, סליחה\" או \"שלא תדע\". Ndo, nwanne m = \"צר לי, אחי\".", "en": "Ndo is said when someone is hurt, tired or struggling — \"sorry about that\". Ndo, nwanne m = \"sorry, my brother\"."}, "ex": [["Ndo", "", "נדו", "צר לי / סליחה", "Sorry"]]},
    {"t": {"he": "אנגלית ופידג׳ין לצד איגבו", "en": "English and Pidgin alongside Igbo"}, "b": {"he": "בערים כמו אנוגה, אונישה ופורט הרקורט מדברים הרבה אנגלית ופידג׳ין, ומשלבים מילים באיגבו. אנגלית היא השפה הרשמית של ניגריה — והיא כבר נמצאת באפליקציה.", "en": "In cities like Enugu, Onitsha and Port Harcourt people mix English and Pidgin with Igbo. English is Nigeria's official language — already in the app."}, "ex": [["Ị na-asụ Bekee?", "", "אי נה-אסו בקה", "אתה מדבר אנגלית?", "Do you speak English?"]]}
  ],
  note: {"he": "איגבו נכתבת באותיות לטיניות עם נקודה מתחת: ị, ọ, ụ (תנועות \"פתוחות\"), ו-ṅ (נג). יש בה צירופים מיוחדים: gb, kp (שני עיצורים יחד), gw, kw, nw, ny. שפה טונאלית — גם כאן הטונים לא מסומנים, כמו בכתיבה היומיומית.", "en": "Igbo uses Latin letters with under-dots: ị, ọ, ụ (open vowels) and ṅ (ng). Special clusters: gb, kp (two consonants at once), gw, kw, nw, ny. It's tonal — tones aren't marked here, as in everyday writing.", "ru": "Игбо пишется латиницей с точками снизу: ị, ọ, ụ и ṅ. Сочетания gb, kp, gw, kw, nw, ny. Язык тоновый; тоны здесь не отмечены.", "es": "El igbo usa letras latinas con punto inferior: ị, ọ, ụ y ṅ. Grupos gb, kp, gw, kw, nw, ny. Es tonal; aquí no se marcan los tonos.", "ar": "تُكتب الإيغبو بحروف لاتينية مع نقطة تحتية: ị وọ وụ وṅ، وتركيبات gb وkp وgw وkw وnw وny. لغة نغمية؛ النغمات غير معلّمة هنا."},
  alpha: [
    ["A a", "a", "אַ", "a"],
    ["B b", "ba", "ב", "b"],
    ["Ch ch", "cha", "צ׳", "ch"],
    ["D d", "da", "ד", "d"],
    ["E e", "e", "אֶ", "e"],
    ["F f", "fa", "פ", "f"],
    ["G g", "ga", "ג", "g"],
    ["Gb gb", "gba", "גב (יחד)", "gb"],
    ["Gh gh", "gha", "ע׳ (ר גרונית)", "gh"],
    ["Gw gw", "gwa", "גו", "gw"],
    ["H h", "ha", "ה", "h"],
    ["I i", "i", "אִי", "i"],
    ["Ị ị", "ị", "אִ פתוחה", "ị"],
    ["J j", "ja", "ג׳", "j"],
    ["K k", "ka", "ק", "k"],
    ["Kp kp", "kpa", "קפּ (יחד)", "kp"],
    ["Kw kw", "kwa", "קו", "kw"],
    ["L l", "la", "ל", "l"],
    ["M m", "ma", "מ", "m"],
    ["N n", "na", "נ", "n"],
    ["Ṅ ṅ", "ṅa", "נג", "ṅ"],
    ["Nw nw", "nwa", "נו", "nw"],
    ["Ny ny", "nya", "ני", "ny"],
    ["O o", "o", "אוֹ", "o"],
    ["Ọ ọ", "ọ", "אוֹ פתוחה", "ọ"],
    ["P p", "pa", "פּ", "p"],
    ["R r", "ra", "ר", "r"],
    ["S s", "sa", "ס", "s"],
    ["Sh sh", "sha", "ש", "sh"],
    ["T t", "ta", "ט", "t"],
    ["U u", "u", "אוּ", "u"],
    ["Ụ ụ", "ụ", "אוּ פתוחה", "ụ"],
    ["V v", "va", "ו (V)", "v"],
    ["W w", "wa", "ו", "w"],
    ["Y y", "ya", "י", "y"],
    ["Z z", "za", "ז", "z"]
  ],
  voiceFallback: "heb",
  /* speaker = female: [regex source, flags, replacement] */
  gender: [],
  words: `hello|Ndewo||נדווו
bye|Ka ọ dị||קה או די
morning|Ụtụtụ ọma||אוטוטו אומה
thanks|Daalụ||דאלו
please|Biko||ביקו
sorry|Ndo||נדו
yes|Ee||אה
no|Mba||מבה
howareyou|Kedụ?||קדו
good|Ọ dị mma||או די מה
ok|Ngwa||נגווה
n1|Otu||אוטו
n2|Abụọ||אבואו
n3|Atọ||אטו
n4|Anọ||אנו
n5|Ise||איסה
n6|Isii||איסי
n7|Asaa||אסאה
n8|Asatọ||אסאטו
n9|Itoolu||איטולו
n10|Iri||אירי
n0|Efu||אפו
n20|Iri abụọ||אירי אבואו
n50|Iri ise||אירי איסה
n100|Otu narị||אוטו נארי
n1000|Otu puku||אוטו פוקו
n11|Iri na otu||אירי נה אוטו
n12|Iri na abụọ||אירי נה אבואו
n13|Iri na atọ||אירי נה אטו
n14|Iri na anọ||אירי נה אנו
n15|Iri na ise||אירי נה איסה
n16|Iri na isii||אירי נה איסי
n17|Iri na asaa||אירי נה אסאה
n18|Iri na asatọ||אירי נה אסאטו
n19|Iri na itoolu||אירי נה איטולו
n30|Iri atọ||אירי אטו
n40|Iri anọ||אירי אנו
n60|Iri isii||אירי איסי
n70|Iri asaa||אירי אסאה
n80|Iri asatọ||אירי אסאטו
n90|Iri itoolu||אירי איטולו
n200|Narị abụọ||נארי אבואו
n500|Narị ise||נארי איסה
n10000|Puku iri||פוקו אירי
water|Mmiri||מירי
toilet|Ụlọ mposi||אולו מפוסי
where|Ebee?||אבה
howmuch|Ego ole?||אגו אולה
this|Nke a||נקה א
friend|Enyi||אניי
food|Nri||נרי
bread|Achịcha||אצ׳יצ׳ה
coffee|Kọfị||קופי
tea|Tii||טי
chicken|Ọkụkọ||אוקוקו
fish|Azụ||אזו
rice|Osikapa||אוסיקאפה
beer|Mmanya bịa||מאניה ביה
bill|Akwụkwọ ụgwọ||אקווקוו אוגוו
tasty|Ọ tọrọ ụtọ||או טורו אוטו
egg|Akwa||אקווה
fruit|Mkpụrụ osisi||מקפורו אוסיסי
veg|Akwụkwọ nri||אקווקוו נרי
meat|Anụ||אנו
milk|Mmiri ara ehi||מירי ארה אהי
spicy|Ose||אוסה
restaurant|Ụlọ nri||אולו נרי
ice|Ice (mmiri kpụkọrọ akpụkọ)||אייס
taxi|Tagzi||טקסי
bus|Ụgbọ ala (bọs)||אוגבו אלה
train|Ụgbọ okporo ígwè||אוגבו אוקפורו איגווה
airport|Ọdụ ụgbọ elu||אודו אוגבו אלו
hotel|Họtel||הוטל
left|Aka ekpe||אקה אקפה
right|Aka nri||אקה נרי
straight|Kwụ ọtọ||קוו אוטו
stop|Kwụsị||קווסי
ticket|Tiketi||טיקטי
money|Ego||אגו
expensive|Ọ dị oke ọnụ||או די אוקה אונו
cheap|Ọ dị ọnụ ala||או די אונו אלה
market|Ahịa||אהיה
pharmacy|Ụlọ ọgwụ||אולו אוגוו
open|Mepere emepe||מפרה אמפה
closed|Emechiri||אמצ׳ירי
help|Nyere m aka!||ניירה אם אקה
police|Ndị uwe ojii||נדי אווה אוג׳י
doctor|Dọkịta||דוקיטה
hospital|Ụlọ ọgwụ (ụlọ ọrịa)||אולו אוריה
today|Taa||טאה
tomorrow|Echi||אצ׳י
yesterday|Ụnyaahụ||אוניאהו
now|Ugbu a||אוגבו א
t_morning|Ụtụtụ||אוטוטו
t_evening|Mgbede||מגבדה
t_night|Abalị||אבאלי
t_week|Izu||איזו
t_month|Ọnwa||אונווה
t_year|Afọ||אפו
t_hour|Awa||אווה
t_minute|Nkeji||נקג׳י
p_toilet|Ebee ka ụlọ mposi dị?||אבה קה אולו מפוסי די
p_cost|Ego ole ka nke a bụ?||אגו אולה קה נקה א בו
p_nounder|Aghọtaghị m||אגוטאגי אם
p_english|Ị na-asụ Bekee?||אי נה-אסו בקה
p_slow|Biko, kwuo nwayọọ||ביקו, קוואו נוואיו
p_bill|Biko, weta akwụkwọ ụgwọ||ביקו, ווטה אקווקוו אוגוו
p_want|Achọrọ m nke a||אצ׳ורו אם נקה א
p_expensive|Ọ dị oke ọnụ nke ukwuu||או די אוקה אונו נקה אוקוו
p_discount|Biko, belata ọnụ ahịa||ביקו, בלאטה אונו אהיה
p_address|Biko, kpọga m n'adreesị a||ביקו, קפוגה אם נאדרסי א
p_hotel|Ebee ka họtel dị?||אבה קה הוטל די
p_doctor|Achọrọ m dọkịta||אצ׳ורו אם דוקיטה
p_police|Kpọọ ndị uwe ojii!||קפואו נדי אווה אוג׳י
p_israel|Esi m Israel||אסי אם איזראל
p_name|Aha m bụ ...||אהה אם בו
p_nice|Obi dị m ụtọ ịhụ gị||אובי די אם אוטו איהו גי
p_water|Biko, mmiri||ביקו, מירי
p_help|Ị nwere ike inyere m aka?||אי נוורה איקה איניירה אם אקה
p_what|Gịnị bụ nke a?||גיני בו נקה א
p_nospicy|Biko, etinyela ose||ביקו, אטיניילה אוסה
room|Ọnụ ụlọ||אונו אולו
key|Igodo||איגודו
bed|Akwa ndina||אקווה נדינה
shower|Ebe ịsa ahụ||אבה איסה אהו
towel|Akwa nhicha ahụ||אקווה ניצ׳ה אהו
passport|Paspọtụ||פספוטו
mon|Mọnde||מונדה
tue|Tiuzdee||טיוזדה
wed|Wenezdee||וונזדה
thu|Tọọzdee||טוזדה
fri|Fraịdee||פראידה
sat|Satọdee||סאטודה
sun|Sọnde||סונדה
red|Uhie||אוהיה
blue|Acha anụnụ||אצ׳ה אנונו
green|Akwụkwọ ndụ||אקווקוו נדו
yellow|Odo||אודו
black|Oji||אוג׳י
white|Ọcha||אוצ׳ה
man|Nwoke||נווקה
woman|Nwaanyị||נוואני
child|Nwata||נוואטה
family|Ezinụlọ||אזינולו
i|Mụ||מו
you|Gị||גי
head|Isi||איסי
stomach|Afọ (ahụ)||אפו
hand|Aka||אקה
pain|Mgbu||מגבו
medicine|Ọgwụ||אוגוו
sick|Ọrịa||אוריה
big|Ukwu||אוקוו
small|Obere||אוברה
hot|Ọkụ||אוקו
cold|Oyi||אויי
bad|Ọjọọ||אוג׳ו
beautiful|Mma||מה
new|Ọhụrụ||אוהורו
old|Ochie||אוצ׳יה
fast|Ọsọ ọsọ||אוסו אוסו
slow|Nwayọọ||נוואיו
near|Nso||נסו
far_a|Anya||אניה
clean|Ọcha (dị ọcha)||די אוצ׳ה
dirty|Unyi||אוניי
tired|Ike gwụrụ m||איקה גוורו אם
hungry|Agụụ na-agụ m||אגו נה-אגו אם
thirsty|Akpịrị na-akpọ m nkụ||אקפירי נה-אקפו אם נקו
happy|Obi ụtọ||אובי אוטו
sad|Obi ọjọọ||אובי אוג׳ו
easy|Mfe||מפה
difficult|Siri ike||סירי איקה
many|Ọtụtụ||אוטוטו
eat|Iri nri||אירי נרי
drink|Ịṅụ||איניו
go|Ịga||איגה
buy|Ịzụ||איזו
speak|Ikwu okwu||איקוו אוקוו
sleep|Ihi ụra||איהי אורה
understand|Ịghọta||איגוטה
come|Ịbịa||איביה
want|Ịchọ||איצ׳ו
need|Ịchọ nke ukwuu||איצ׳ו
know|Ịmara||אימרה
see|Ịhụ||איהו
hear|Ịnụ||אינו
give|Inye||איניה
take|Iwere||איוורה
pay|Ịkwụ ụgwọ||איקוו אוגוו
wait|Ichere||איצ׳רה
walk|Ije ije||איג׳ה איג׳ה
read|Ịgụ||איגו
write|Ide||אידה
love|Ịhụ n'anya||איהו נאניה
work|Ịrụ ọrụ||אירו אורו
swim|Igwu mmiri||איגוו מירי
c_table|Tebụl maka mmadụ abụọ, biko||טבול מאקה מאדו אבואו, ביקו
c_menu|Biko, weta menu||ביקו, ווטה מניו
c_noice|Enweghị ice, biko||אנוגי אייס, ביקו
c_nomeat|Anaghị m eri anụ||אנאגי אם ארי אנו
c_allergy|Ahụ m anaghị anabata ahụekere||אהו אם אנאגי אנבטה אהואקרה
c_delicious|Ọ tọrọ ụtọ nke ukwuu!||או טורו אוטו נקה אוקוו
c_reserv|Enwere m ndokwa ọnụ ụlọ||אנוורה אם נדוקווה אונו אולו
c_wifi|Gịnị bụ paswọọdụ wifi?||גיני בו פסוודו וויפי
c_checkout|Mgbe ole ka m ga-apụ?||מגבה אולה קה אם גה-אפו
c_howget|Kedu ka m ga-esi ruo ebe ahụ?||קדו קה אם גה-אסי רואו אבה אהו
c_stophere|Kwụsị ebe a, biko||קווסי אבה א, ביקו
c_far|Ọ dị anya?||או די אניה
c_card|Enwere m ike iji kaadị kwụọ ụgwọ?||אנוורה אם איקה איג׳י קאדי קוואו אוגוו
c_looking|Ana m ele anya naanị, daalụ||אנה אם אלה אניה נאני, דאלו
c_yourname|Kedu aha gị?||קדו אהה גי
c_wherefrom|Ebee ka i si?||אבה קה אי סי
c_seeyou|Ka ọ dị mgbe ọzọ||קה או די מגבה אוזו
c_cheers|Ahụ ike!||אהו איקה
c_lost|Efuola m ụzọ||אפואולה אם אוזו
c_passport|Paspọtụ m efuola||פספוטו אם אפואולה
c_hurts|Ebe a na-egbu m mgbu||אבה א נה-אגבו אם מגבו
c_time|Kedu oge ole?||קדו אוגה אולה
c_again|Biko, kwughachi ya||ביקו, קווגאצ׳י יה
c_write|Ị nwere ike ide ya?||אי נוורה איקה אידה יה
dog|Nkịta||נקיטה
cat|Nwamba||נוואמבה
bird|Nnụnụ||ננונו
horse|Ịnyịnya||אינייניה
cow|Ehi||אהי
pig|Ezi||אזי
elephant|Enyi (anụ)||אניי (אנו)
monkey|Enwe||אנווה
snake|Agwọ||אגוו
mosquito|Anwụnta||אנוונטה
lion|Ọdụm||אודום
duck|Ọbọgwụ||אובוגוו
apple|Apụl||אפול
banana|Unere||אונרה
orange|Oroma||אורומה
mango|Mangoro||מנגורו
pineapple|Akwụ oyibo||אקוו אויבו
watermelon|Anyụ||אניו
coconut|Akụ oyibo||אקו אויבו
grapes|Mkpụrụ vaịn||מקפורו ואין
lemon|Oroma nkịrịsị||אורומה נקיריסי
strawberry|Sturoberi||סטרוברי
papaya|Okwuru bekee||אוקוורו בקה
tomato|Tomato||טומטו
potato|Nduku||נדוקו
onion|Yabasị||יאבאסי
garlic|Galik||גאליק
cucumber|Kukumba||קוקומבה
carrot|Karọt||קרוט
chili|Ose oyibo||אוסה אויבו
corn|Ọka||אוקה
mushroom|Ero||ארו
lettuce|Letus||לטוס
eggplant|Anara||אנארה
soup|Ofe||אופה
salad|Salad||סלאד
noodles|Noodles||נודלס
cheese|Chiiz||צ׳יז
butter|Bọta||בוטה
salt|Nnu||ננו
sugar|Shuga||שוגה
cake|Keki||קקי
icecream|Ice cream||אייס קרים
juice|Mmiri mkpụrụ osisi||מירי מקפורו אוסיסי
wine|Mmanya vaịn||מאניה ואין
breakfast|Nri ụtụtụ||נרי אוטוטו
lunch|Nri ehihie||נרי אהיהיה
dinner|Nri abalị||נרי אבאלי
fork|Ndụdụ||נדודו
spoon|Ngaji||נגאג׳י
knife|Mma||מה (סכין)
glass|Iko||איקו
plate|Efere||אפרה
bank|Ụlọ akụ||אולו אקו
atm|ATM||איי-טי-אם
beach|Ọnụ mmiri||אונו מירי
museum|Ụlọ ihe ncheta||אולו איהה נצ׳טה
temple|Ụlọ nsọ||אולו נסו
street|Okporo ụzọ||אוקפורו אוזו
city|Obodo mepere emepe||אובודו מפרה אמפה
shop|Ụlọ ahịa||אולו אהיה
supermarket|Nnukwu ụlọ ahịa||נוקוו אולו אהיה
park|Ogige||אוגיגה
station|Ọdụ||אודו
embassy|Ụlọ ọrụ nnọchite anya||אולו אורו ננוצ׳יטה אניה
phone|Ekwentị||אקוונטי
charger|Chaja||צ׳אג׳ה
bag|Akpa||אקפה
shoes|Akpụkpọ ụkwụ||אקפוקפו אוקוו
clothes|Uwe||אווה
hat|Okpu||אוקפו
glasses|Ugogbe anya||אוגוגבה אניה
map|Maapụ||מאפו
sunscreen|Ude anyanwụ||אודה אניאנוו
umbrella|Nche anwụ||נצ׳ה אנוו
sf_order|Achọrọ m ịtụ nri||אצ׳ורו אם איטו נרי
sf_recommend|Gịnị ka ị na-atụ aro?||גיני קה אי נה-אטו ארו
sf_bottle|Otu karama mmiri, biko||אוטו קרמה מירי, ביקו
sf_isspicy|Ose ọ dị n'ime ya?||אוסה או די נימה יה
sf_onemore|Otu ọzọ, biko||אוטו אוזו, ביקו
sf_nosugar|Enweghị shuga, biko||אנוגי שוגה, ביקו
sf_takeaway|Aga m ebu ya laa||אגה אם אבו יה לאה
ss_smaller|Ị nwere nke pere mpe?||אי נוורה נקה פרה מפה
ss_try|Enwere m ike ịnwale ya?||אנוורה אם איקה אינוואלה יה
ss_two|Aga m ewere abụọ||אגה אם אוורה אבואו
ss_change|Ị nwere chenji?||אי נוורה צ׳נג׳י
ss_last|Ego ole ka ọ ga-abụ n'ikpeazụ?||אגו אולה קה או גה-אבו ניקפאזו
ss_bag|Biko, nye m akpa rọba||ביקו, ניה אם אקפה רובה
sm_busstop|Ebee ka ọdụ ụgbọ ala dị?||אבה קה אודו אוגבו אלה די
sm_trainleave|Mgbe ole ka ụgbọ okporo ígwè ga-apụ?||מגבה אולה קה אוגבו אוקפורו איגווה גה-אפו
sm_oneticket|Otu tiketi, biko||אוטו טיקטי, ביקו
sm_howlong|Ọ ga-ewe ogologo oge ole?||או גה-אווה אוגולוגו אוגה אולה
sm_meter|Biko, gbanye mita||ביקו, גבאניה מיטה
sm_slowdrive|Biko, nwayọọ na-anya||ביקו, נוואיו נה-אניה
sm_airport|Achọrọ m ịga ọdụ ụgbọ elu||אצ׳ורו אם איגה אודו אוגבו אלו
sh_leavebag|Enwere m ike ịhapụ akpa m ebe a?||אנוורה אם איקה איהאפו אקפה אם אבה א
sh_ac|Ihe na-eme ka ọ dị jụụ anaghị arụ ọrụ||איהה נה-אמה קה או די ג׳ו אנאגי ארו אורו
sh_breakfast|Nri ụtụtụ ọ gụnyere?||נרי אוטוטו או גונייארה
sh_towel|Achọrọ m akwa nhicha ahụ ọzọ||אצ׳ורו אם אקווה ניצ׳ה אהו אוזו
sh_taxi|Ị nwere ike ịkpọrọ m tagzi?||אי נוורה איקה איקפורו אם טקסי
sh_late|Enwere m ike ịpụ ma e mesịa?||אנוורה אם איקה איפו מה א מסיה
so_learning|Ana m amụ asụsụ Igbo||אנה אם אמו אסוסו איגבו
so_thankshelp|Daalụ maka enyemaka gị||דאלו מאקה אניימאקה גי
so_photo|Ị nwere ike ise anyị foto?||אי נוורה איקה איסה אניי פוטו
so_like|Ebe a na-amasị m||אבה א נה-אמסי אם
so_vacation|Anọ m ebe a maka ezumike||אנו אם אבה א מאקה אזומיקה
so_howsay|Kedu ka esi akpọ nke a?||קדו קה אסי אקפו נקה א
so_noproblem|Ọ dịghị nsogbu||או דיגי נסוגבו
so_beautiful|Ọ mara mma nke ukwuu!||או מרה מה נקה אוקוו
sp_unwell|Ahụ adịghị m mma||אהו אדיגי אם מה
sp_nearhosp|Ebee ka ụlọ ọgwụ kacha nso dị?||אבה קה אולו אוגוו קצ׳ה נסו די
sp_fever|Ahụ na-ekpo m ọkụ||אהו נה-אקפו אם אוקו
sp_helpme|Biko, nyere m aka||ביקו, ניירה אם אקה
sp_stolen|Ha zuru akpa m||הה זורו אקפה אם
sp_embassy|Achọrọ m ụlọ ọrụ nnọchite anya Israel||אצ׳ורו אם אולו אורו ננוצ׳יטה אניה איזראל
dt1|Ebee ka ị na-aga?||אבה קה אי נה-אגה
dt2|Họtel a, biko.||הוטל א, ביקו
dt3|Ọ dị mma, banye.||או די מה, באניה
dt4|Ego ole?||אגו אולה
dt5|Naira narị abụọ.||נאירה נארי אבואו
dt6|Biko, gbanye mita.||ביקו, גבאניה מיטה
dt7|Ọ dịghị nsogbu.||או דיגי נסוגבו
dt8|Kwụsị ebe a, daalụ.||קווסי אבה א, דאלו
dm1|Ego ole ka nke a?||אגו אולה קה נקה א
dm2|Narị atọ.||נארי אטו
dm3|Ọ dị oke ọnụ! Narị abụọ?||או די אוקה אונו! נארי אבואו
dm4|Narị abụọ na iri ise, nke ikpeazụ.||נארי אבואו נה אירי איסה, נקה איקפאזו
dm5|Ọ dị mma, aga m azụ ya.||או די מה, אגה אם אזו יה
dm6|Daalụ nke ukwuu!||דאלו נקה אוקוו
dr1|Unu ole?||אונו אולה
dr2|Anyị abụọ.||אניי אבואו
dr3|Gịnị ka unu ga-eri?||גיני קה אונו גה-ארי
dr4|Osikapa e ghere eghe na ọkụkọ, enweghị ose.||אוסיקאפה א גרה אגה נה אוקוקו, אנוגי אוסה
dr5|Kedu ihe ọṅụṅụ?||קדו איהה אוניוניו
dr6|Naanị mmiri, biko.||נאני מירי, ביקו
dr7|Biko, weta akwụkwọ ụgwọ.||ביקו, ווטה אקווקוו אוגוו
dh1|Ndewo, enwere m ndokwa ọnụ ụlọ.||נדווו, אנוורה אם נדוקווה אונו אולו
dh2|N'aha onye?||נאהה אוניה
dh3|N'aha ...||נאהה
dh4|Paspọtụ gị, biko.||פספוטו גי, ביקו
dh5|Ọnụ ụlọ gị bụ narị atọ na ise.||אונו אולו גי בו נארי אטו נה איסה
dh6|Mgbe ole ka nri ụtụtụ dị?||מגבה אולה קה נרי אוטוטו די
dh7|Site n'elekere asaa ruo elekere iri.||סיטה נאלקרה אסאה רואו אלקרה אירי
dd1|Biko, ebee ka ọdụ ụgbọ okporo ígwè dị?||ביקו, אבה קה אודו אוגבו אוקפורו איגווה די
dd2|Gaa n'ihu, wee tụgharịa n'aka ekpe.||גאה ניהו, ווה טוגאריה נאקה אקפה
dd3|Ọ dị anya site ebe a?||או די אניה סיטה אבה א
dd4|Mba, nkeji ise n'ụkwụ.||מבה, נקג׳י איסה נוקוו
dd5|Daalụ rinne!||דאלו רינה
da1|Gịnị bụ ebumnuche njem gị?||גיני בו אבומנוצ׳ה נג׳ם גי
da2|Ụbọchị ole ka ị ga-anọ?||אובוצ׳י אולה קה אי גה-אנו
da3|Izu abụọ.||איזו אבואו
da4|Nnọọ!||נואו
dp1|Ebee na-egbu gị mgbu?||אבה נה-אגבו גי מגבו
dp2|Ṅụọ ọgwụ a ugboro abụọ kwa ụbọchị.||ניואו אוגוו א אוגבורו אבואו קווה אובוצ׳י
dp4|Gbakee ngwa ngwa!||גבאקה נגווה נגווה
ds1|Achọrọ m kaadị SIM nwere ịntanetị.||אצ׳ורו אם קאדי סים נוורה אינטנטי
ds2|Maka ụbọchị ole?||מאקה אובוצ׳י אולה
ds3|Maka ụbọchị iri.||מאקה אובוצ׳י אירי
ds4|Ọ dị njikere, ị nwere ịntanetị ugbu a.||או די נג׳יקרה, אי נוורה אינטנטי אוגבו א
dc1|Enwere m ike inyere gị aka?||אנוורה אם איקה איניירה גי אקה
dc2|Ị nwere nke a na-acha anụnụ?||אי נוורה נקה א נה-אצ׳ה אנונו
dc3|Ee, nha ole?||אה, נהה אולה
dc4|Nke etiti.||נקה אטיטי
dc5|Ọ dị mma, ọnụ ụlọ nnwale dị ebe ahụ.||או די מה, אונו אולו ננוואלה די אבה אהו
dg1|Achọrọ m idebe njem nlegharị anya maka echi.||אצ׳ורו אם אידבה נג׳ם נלגארי אניה מאקה אצ׳י
dg2|Njem ahụ ga-amalite n'elekere asatọ nke ụtụtụ.||נג׳ם אהו גה-אמליטה נאלקרה אסאטו נקה אוטוטו
dg3|Nri ehihie ọ gụnyere?||נרי אהיהיה או גונייארה
dg4|Ee, na mmiri kwa.||אה, נה מירי קווה
dg5|Ọ dị mma, maka mmadụ abụọ.||או די מה, מאקה מאדו אבואו
w_weather|Ọnọdụ ihu igwe||אונודו איהו איגווה
w_sun|Anyanwụ||אניאנוו
w_rain|Mmiri ozuzo||מירי אוזוזו
w_wind|Ikuku||איקוקו
w_cloud|Igwe ojii||איגווה אוג׳י
w_snow|Snoo||סנו
w_storm|Oke ifufe||אוקה איפופה
w_humid|Iru mmiri||אירו מירי
j_teacher|Onye nkuzi||אוניה נקוזי
j_driver|Onye ọkwọ ụgbọ ala||אוניה אוקוו אוגבו אלה
j_waiter|Onye na-eje ozi||אוניה נה-אג׳ה אוזי
j_cook|Onye isi nri||אוניה איסי נרי
j_student|Nwa akwụkwọ||נווה אקווקוו
j_engineer|Onye injinia||אוניה אינג׳יניה
j_nurse|Nọọsụ||נוסו
j_seller|Onye ahịa||אוניה אהיה
j_guide|Onye ndu||אוניה נדו
j_pharmacist|Onye na-ere ọgwụ||אוניה נה-ארה אוגוו
e_angry|Iwe na-ewe m||איווה נה-אווה אם
e_scared|Egwu na-atụ m||אגוו נה-אטו אם
e_bored|Ike agwụla m||איקה אגוולה אם
e_worried|Obi na-ama m jijiji||אובי נה-אמה אם ג׳יג׳יג׳י
e_surprised|O juru m anya||או ג׳ורו אם אניה
e_calm|Obi dị m jụụ||אובי די אם ג׳ו
e_excited|Obi dị m ụtọ nke ukwuu||אובי די אם אוטו נקה אוקוו
e_love|Ahụrụ m n'anya||אהורו אם נאניה
dir_north|Ugwu||אוגוו
dir_south|Ndịda||נדידה
dir_east|Ọwụwa anyanwụ||אוווה אניאנוו
dir_west|Ọdịda anyanwụ||אודידה אניאנוו
dir_corner|Nkuku||נקוקו
dir_light|Ọkụ okporo ụzọ||אוקו אוקפורו אוזו
dir_behind|N'azụ||נאזו
dir_front|N'ihu||ניהו
dir_next|N'akụkụ||נאקוקו
dir_back|Laghachi azụ||לאגאצ׳י אזו
dir_up|Elu||אלו
dir_down|Ala||אלה`
});

/* ---- numbers & prices (0–999,999) in Igbo → tokens [text, roman, hebrew]. Decimal: iri abụọ (20), narị (100), puku (1000); currency first ---- */
NW.ig = (() => {
  const O = [['efu', 'אפו'], ['otu', 'אוטו'], ['abụọ', 'אבואו'], ['atọ', 'אטו'], ['anọ', 'אנו'], ['ise', 'איסה'], ['isii', 'איסי'], ['asaa', 'אסאה'], ['asatọ', 'אסאטו'], ['itoolu', 'איטולו']];
  const IRI = ['iri', 'אירי'], NA = ['na', 'נה'];
  function u1000(n) {
    const g = [], h = Math.floor(n / 100), t = Math.floor(n % 100 / 10), u = n % 10;
    if (h) g.push([['narị', 'נארי'], O[h]]);
    if (t) g.push(t === 1 ? [IRI] : [IRI, O[t]]);
    if (u) g.push([O[u]]);
    return g;
  }
  const join = gs => { const out = []; gs.forEach((g, i) => { if (i) out.push(NA); out.push(...g); }); return out; };
  function words(n) {
    if (n === 0) return [O[0]];
    const th = Math.floor(n / 1000), r = n % 1000, g = [];
    if (th) g.push([['puku', 'פוקו'], ...join(u1000(th))]);
    g.push(...u1000(r));
    return join(g);
  }
  return (n, cur) => (cur ? [['naira', 'נאירה'], ...words(n)] : words(n)).map(a => tk(a[0], a[0], a[1]));
})();
NUM.ig = { tokens: (n, cur) => NW.ig(n, cur) };
