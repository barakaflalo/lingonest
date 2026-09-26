/* ===== LingoNest — lang-yo.js : Yoruba content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('yo', {
  ver: '1.20.0',
  curSym: "₦",
  country: {"he": "דרום-מערב ניגריה ובנין", "en": "South-west Nigeria & Benin", "ru": "Юго-запад Нигерии и Бенин", "es": "Suroeste de Nigeria y Benín", "ar": "جنوب غرب نيجيريا وبنين"},
  emergency: [
    ["🇳🇬", {"he": "ניגריה — חירום", "en": "Nigeria — emergency", "ru": "Нигерия — экстренный", "es": "Nigeria — emergencias", "ar": "نيجيريا — الطوارئ"}, "112"],
    ["🚓", {"he": "ניגריה — משטרה", "en": "Nigeria — police", "ru": "Нигерия — полиция", "es": "Nigeria — policía", "ar": "نيجيريا — الشرطة"}, "199"],
    ["🏙️", {"he": "לאגוס — מוקד חירום", "en": "Lagos — emergency line", "ru": "Лагос — экстренная линия", "es": "Lagos — emergencias", "ar": "لاغوس — خط الطوارئ"}, "767"]
  ],
  tips: [
    {"t": {"he": "ברכות לכל שעה", "en": "A greeting for every hour"}, "b": {"he": "ביורובה מברכים לפי זמן ומצב: Ẹ kaaarọ (בוקר), Ẹ kaasan (צהריים), Ẹ kaalẹ (ערב), Ẹ ku iṣẹ (\"כל הכבוד על העבודה\" — למי שעובד). ה-Ẹ בהתחלה = פנייה מכבדת.", "en": "Yoruba greets by time and situation: Ẹ kaaarọ (morning), Ẹ kaasan (afternoon), Ẹ kaalẹ (evening), Ẹ ku iṣẹ (well done on your work). The initial Ẹ is respectful."}, "ex": [["Ẹ kaasan", "", "אה קאסאן", "צהריים טובים", "Good afternoon"], ["Ẹ ku iṣẹ", "", "אה קו אישה", "כל הכבוד על העבודה", "Well done (to someone working)"]]},
    {"t": {"he": "כבוד: Ẹ מול O, וכריעה", "en": "Respect: Ẹ vs O, and bowing"}, "b": {"he": "לאנשים מבוגרים ולזרים פונים ב-Ẹ (אתם, מכובד) ולא ב-O. בתרבות היורובה צעירים מברכים מבוגרים בכריעה קלה (גברים) או בכפיפת ברך (נשים).", "en": "Address elders and strangers with Ẹ (respectful plural), not O. Traditionally young men bow slightly and women curtsy to greet elders."}, "ex": [["Ẹ ṣeun", "", "אה שאון", "תודה (בכבוד)", "Thank you (respectful)"]]},
    {"t": {"he": "טונים משנים משמעות", "en": "Tones change meaning"}, "b": {"he": "ביורובה אותה מילה בטונים שונים = מילים שונות: ọkọ (בעל / מכונית / חנית / מעדר!). כאן לא כותבים את הטונים, אז ההקשר וההקשבה עוזרים. אל תדאג — מבינים אותך גם עם טונים לא מושלמים.", "en": "Same letters, different tones = different words: ọkọ can mean husband, vehicle, spear or hoe! Tones aren't written here, so listen and use context. You'll still be understood."}, "ex": [["Ọkọ", "", "אוקו", "בעל / כלי רכב (לפי הטון)", "husband / vehicle (by tone)"]]},
    {"t": {"he": "מחירים — באנגלית", "en": "Prices — in English"}, "b": {"he": "שיטת הספירה ביורובה מרתקת אבל מסובכת מאוד: בסיס 20, עם חיסור — 45 זה \"חמש פחות מחמישים\". בשווקים בניגריה מחירים נאמרים כמעט תמיד באנגלית או בפידג׳ין — לכן מסך המחירים מציג אותם כך. המספרים עצמם ביורובה נמצאים ברשימת המילים.", "en": "Yoruba counting is fascinating but very complex: base 20 with subtraction — 45 is \"five less than fifty\". In Nigerian markets prices are nearly always said in English or Pidgin, so the Prices screen shows them that way. The Yoruba numbers themselves are in the word list."}, "ex": [["Ẹẹdogun", "", "אדוגון", "15 (= 20 פחות 5)", "15 (= 20 minus 5)"]]},
    {"t": {"he": "פידג׳ין — השפה של הרחוב", "en": "Pidgin — the street language"}, "b": {"he": "בערים בניגריה כולם מבינים פידג׳ין: How you dey? (מה שלומך?), I dey fine (אני בסדר), Wetin? (מה?), Abeg (בבקשה), No wahala (אין בעיה — גם ביורובה!).", "en": "In Nigerian cities everyone understands Pidgin: How you dey? — I dey fine, Wetin? (what?), Abeg (please), No wahala (no problem)."}, "ex": [["Ko si wahala", "", "קו סי וואהאלה", "אין בעיה", "No problem"]]},
    {"t": {"he": "שמות עם משמעות", "en": "Names with meaning"}, "b": {"he": "שמות יורובה הם משפטים קטנים: Olúwaseun = \"אלוהים עשה\", Adéwálé = \"הכתר חזר הביתה\". לשאול מה פירוש השם של מישהו — פותח שיחה נהדרת.", "en": "Yoruba names are small sentences: Olúwaseun = \"God has done it\", Adéwálé = \"the crown has come home\". Asking what someone's name means is a great conversation starter."}, "ex": [["Kini itumọ orukọ yin?", "", "קיני איטומו אורוקו יין", "מה פירוש השם שלך?", "What does your name mean?"]]}
  ],
  note: {"he": "יורובה נכתבת באותיות לטיניות עם נקודה מתחת: ẹ (אֶ פתוחה), ọ (אוֹ פתוחה), ṣ (ש). זו שפה טונאלית (3 טונים) — בכתב מלא מסמנים אותם בסימנים מעל התנועות, אבל ביומיום (שלטים, הודעות) רבים לא כותבים אותם, וכך גם כאן. לכן חשוב להקשיב.", "en": "Yoruba uses Latin letters with under-dots: ẹ (open e), ọ (open o), ṣ (sh). It's tonal (3 tones) — full spelling marks tones over vowels, but everyday writing often skips them, as here. So listen carefully.", "ru": "Йоруба пишется латиницей с точками снизу: ẹ, ọ, ṣ. Язык тоновый; в повседневном письме тоны часто не пишут, как и здесь.", "es": "El yoruba usa letras latinas con punto inferior: ẹ, ọ, ṣ. Es tonal; en la escritura diaria los tonos a menudo se omiten, como aquí.", "ar": "تُكتب اليوروبا بحروف لاتينية مع نقطة تحتية: ẹ وọ وṣ. لغة نغمية؛ وكثيرا ما تُحذف علامات النغمة في الكتابة اليومية كما هنا."},
  alpha: [
    ["A a", "a", "אַ", "a"],
    ["B b", "ba", "ב", "b"],
    ["D d", "da", "ד", "d"],
    ["E e", "e", "אֵה סגורה", "e"],
    ["Ẹ ẹ", "ẹ", "אֶ פתוחה", "ẹ"],
    ["F f", "fa", "פ", "f"],
    ["G g", "ga", "ג", "g"],
    ["Gb gb", "gba", "גב (יחד!)", "gb"],
    ["H h", "ha", "ה", "h"],
    ["I i", "i", "אִי", "i"],
    ["J j", "ja", "ג׳", "j"],
    ["K k", "ka", "ק", "k"],
    ["L l", "la", "ל", "l"],
    ["M m", "ma", "מ", "m"],
    ["N n", "na", "נ", "n"],
    ["O o", "o", "אוֹ סגורה", "o"],
    ["Ọ ọ", "ọ", "אוֹ פתוחה", "ọ"],
    ["P p", "pa", "קפּ (יחד!)", "p"],
    ["R r", "ra", "ר", "r"],
    ["S s", "sa", "ס", "s"],
    ["Ṣ ṣ", "ṣa", "ש", "ṣ"],
    ["T t", "ta", "ט", "t"],
    ["U u", "u", "אוּ", "u"],
    ["W w", "wa", "ו", "w"],
    ["Y y", "ya", "י", "y"]
  ],
  voiceFallback: "heb",
  /* speaker = female: [regex source, flags, replacement] */
  gender: [],
  words: `hello|Ẹ n lẹ||אן לה
bye|O dabọ||או דאבו
morning|Ẹ kaaarọ||אה קאארו
thanks|Ẹ ṣeun||אה שאון
please|Ẹ jọwọ||אה ג׳וו
sorry|Ẹ ma binu||אה מה בינו
yes|Bẹẹni||בני
no|Rara||ראה-ראה
howareyou|Bawo ni?||באוו ני
good|Daadaa ni||דאדא ני
ok|O dara||או דארה
n1|Ọọkan||אוקאן
n2|Eeji||אג׳י
n3|Ẹẹta||אטה
n4|Ẹẹrin||אריין
n5|Aarun||ארון
n6|Ẹẹfa||אפה
n7|Eeje||אג׳ה
n8|Ẹẹjọ||אג׳ו
n9|Ẹẹsan||אסן
n10|Ẹẹwa||אווה
n0|Odo||אודו
n20|Ogun||אוגון
n50|Aadọta||אדוטה
n100|Ọgọrun||אוגורון
n1000|Ẹgbẹrun||אגברון
n11|Ọọkanla||אוקאנלה
n12|Eejila||אג׳ילה
n13|Ẹẹtala||אטלה
n14|Ẹẹrinla||אריינלה
n15|Ẹẹdogun||אדוגון
n16|Ẹẹrindinlogun||ארינדינלוגון
n17|Ẹẹtadinlogun||אטדינלוגון
n18|Ẹẹjidinlogun||אג׳ידינלוגון
n19|Ọọkandinlogun||אוקאנדינלוגון
n30|Ọgbọn||אוגבון
n40|Ogoji||אוגוג׳י
n60|Ọgọta||אוגוטה
n70|Aadọrin||אדורין
n80|Ọgọrin||אוגורין
n90|Aadọrun||אדורון
n200|Igba||איגבה
n500|Ẹẹdẹgbẹta||אדגבטה
n10000|Ẹgbaarun||אגבארון
water|Omi||אומי
toilet|Ile igbọnsẹ||אילה איגבונסה
where|Nibo?||ניבו
howmuch|Elo ni?||אלו ני
this|Eyi||איי
friend|Ọrẹ||אורה
food|Ounjẹ||אונג׳ה
bread|Buredi||בורדי
coffee|Kọfi||קופי
tea|Tii||טי
chicken|Adiẹ||אדיה
fish|Ẹja||אג׳ה
rice|Iresi||אירסי
beer|Ọti||אוטי
bill|Iwe owo||איווה אוו
tasty|O dun||או דון
egg|Ẹyin||איין
fruit|Eso||אסו
veg|Ẹfọ||אפו
meat|Ẹran||אראן
milk|Wara||ווארה
spicy|Ata||אטה
restaurant|Ile ounjẹ||אילה אונג׳ה
ice|Yinyin||יינייין
taxi|Takisi||טקיסי
bus|Bọọsi||בוסי
train|Ọkọ oju irin||אוקו אוג׳ו אירין
airport|Papa ọkọ ofurufu||פאפה אוקו אופורופו
hotel|Ile itura||אילה איטורה
left|Osi||אוסי
right|Ọtun||אוטון
straight|Taara||טארה
stop|Duro||דורו
ticket|Tikẹẹti||טיקטי
money|Owo||אוו
expensive|O wọn||או וון
cheap|Ko wọn||קו וון
market|Ọja||אוג׳ה
pharmacy|Ile itaja oogun||אילה איטג׳ה אוגון
open|Ṣi silẹ||שי סילה
closed|Ti pa||טי פה
help|Ẹ gba mi o!||אה גבה מי או
police|Ọlọpaa||אולופה
doctor|Dokita||דוקיטה
hospital|Ile iwosan||אילה איווסן
today|Oni||אוני
tomorrow|Ọla||אולה
yesterday|Ana||אנה
now|Nisinsinyi||ניסינסיני
t_morning|Owurọ||אווורו
t_evening|Irọlẹ||אירולה
t_night|Oru||אורו
t_week|Ọsẹ||אוסה
t_month|Oṣu||אושו
t_year|Ọdun||אודון
t_hour|Wakati||ווקטי
t_minute|Iṣẹju||אישג׳ו
p_toilet|Nibo ni ile igbọnsẹ wa?||ניבו ני אילה איגבונסה ווה
p_cost|Elo ni eyi?||אלו ני איי
p_nounder|Ko ye mi||קו יה מי
p_english|Ṣe ẹ n sọ Gẹẹsi?||שה אה אן סו גסי
p_slow|Ẹ jọwọ, ẹ sọrọ laiyara||אה ג׳וו, אה סורו לאיארה
p_bill|Ẹ jọwọ, mu iwe owo wa||אה ג׳וו, מו איווה אוו ווה
p_want|Mo fẹ eyi||מו פה איי
p_expensive|O wọn ju||או וון ג׳ו
p_discount|Ẹ jọwọ, ẹ din owo rẹ ku||אה ג׳וו, אה דין אוו רה קו
p_address|Ẹ jọwọ, ẹ gbe mi lọ si adirẹsi yii||אה ג׳וו, אה גבה מי לו סי אדירסי יי
p_hotel|Nibo ni ile itura wa?||ניבו ני אילה איטורה ווה
p_doctor|Mo nilo dokita||מו נילו דוקיטה
p_police|Ẹ pe ọlọpaa!||אה פה אולופה
p_israel|Mo wa lati Israeli||מו ווה לאטי איזראלי
p_name|Orukọ mi ni ...||אורוקו מי ני
p_nice|Inu mi dun lati ri yin||אינו מי דון לאטי רי יין
p_water|Ẹ jọwọ, omi||אה ג׳וו, אומי
p_help|Ṣe ẹ le ran mi lọwọ?||שה אה לה ראן מי לווו
p_what|Kini eyi?||קיני איי
p_nospicy|Ẹ jọwọ, ẹ ma fi ata si||אה ג׳וו, אה מה פי אטה סי
room|Yara||יארה
key|Kọkọrọ||קוקורו
bed|Ibusun||איבוסון
shower|Balùwẹ||באלווה
towel|Aṣọ inura||אשו אינורה
passport|Iwe irinna||איווה אירינה
mon|Ọjọ Aje||אוג׳ו אג׳ה
tue|Ọjọ Iṣẹgun||אוג׳ו אישגון
wed|Ọjọ Ru||אוג׳ו רו
thu|Ọjọ Bọ||אוג׳ו בו
fri|Ọjọ Ẹti||אוג׳ו אטי
sat|Ọjọ Abamẹta||אוג׳ו אבמטה
sun|Ọjọ Aiku||אוג׳ו אאיקו
red|Pupa||פופה
blue|Bulu||בולו
green|Alawọ ewe||אלאוו אווה
yellow|Ofeefee||אופפה
black|Dudu||דודו
white|Funfun||פונפון
man|Ọkunrin||אוקונרין
woman|Obinrin||אובינרין
child|Ọmọ||אומו
family|Ẹbi||אבי
i|Emi||אמי
you|Ẹyin||איין
head|Ori||אורי
stomach|Ikun||איקון
hand|Ọwọ||אוו
pain|Irora||אירורה
medicine|Oogun||אוגון
sick|Aisan||אאיסן
big|Nla||נלה
small|Kekere||קקרה
hot|Gbona||גבונה
cold|Tutu||טוטו
bad|Buburu||בובורו
beautiful|Lẹwa||לווה
new|Tuntun||טונטון
old|Atijọ||אטיג׳ו
fast|Yara||יארה
slow|Laiyara||לאיארה
near|Nitosi||ניטוסי
far_a|Jinna||ג׳ינה
clean|Mọ||מו
dirty|Dọti||דוטי
tired|O rẹ mi||או רה מי
hungry|Ebi n pa mi||אבי אן פה מי
thirsty|Ongbẹ n gbẹ mi||אונגבה אן גבה מי
happy|Inu mi dun||אינו מי דון
sad|Inu mi bajẹ||אינו מי באג׳ה
easy|Rọrun||רורון
difficult|Le||לה
many|Pupọ||פופו
eat|Jẹun||ג׳און
drink|Mu||מו
go|Lọ||לו
buy|Ra||רה
speak|Sọrọ||סורו
sleep|Sun||סון
understand|Ye||יה
come|Wa||ווה
want|Fẹ||פה
need|Nilo||נילו
know|Mọ (nkan)||מו
see|Ri||רי
hear|Gbọ||גבו
give|Fun||פון
take|Mu (nkan)||מו (נקאן)
pay|San||סאן
wait|Duro de||דורו דה
walk|Rin||רין
read|Ka||קה
write|Kọ||קו
love|Nifẹ||ניפה
work|Ṣiṣẹ||שישה
swim|Wẹ||וה
c_table|Tabili fun eniyan meji, ẹ jọwọ||טבילי פון איניאן מג׳י, אה ג׳וו
c_menu|Ẹ jọwọ, mu akojọ ounjẹ wa||אה ג׳וו, מו אקוג׳ו אונג׳ה ווה
c_noice|Laisi yinyin, ẹ jọwọ||לאיסי ייניין, אה ג׳וו
c_nomeat|Mi o jẹ ẹran||מי או ג׳ה אראן
c_allergy|Ẹpa ko ba mi lara mu||אפה קו בה מי לארה מו
c_delicious|O dun gan!||או דון גאן
c_reserv|Mo ti gba yara silẹ||מו טי גבה יארה סילה
c_wifi|Kini ọrọ igbaniwọle wifi?||קיני אורו איגבאניוולה וויפי
c_checkout|Aago melo ni ki n kuro?||אאגו מלו ני קי אן קורו
c_howget|Bawo ni mo ṣe le de ibẹ?||באוו ני מו שה לה דה איבה
c_stophere|Ẹ duro nibi, ẹ jọwọ||אה דורו ניבי, אה ג׳וו
c_far|Ṣe o jinna?||שה או ג׳ינה
c_card|Ṣe mo le fi kaadi sanwo?||שה מו לה פי קאדי סאנוו
c_looking|Mo kan n wo ni, ẹ ṣeun||מו קאן אן וו ני, אה שאון
c_yourname|Kini orukọ yin?||קיני אורוקו יין
c_wherefrom|Nibo ni ẹ ti wa?||ניבו ני אה טי ווה
c_seeyou|A o ri ara wa||א או רי ארה ווה
c_cheers|Ẹ ku ayọ!||אה קו איו
c_lost|Mo ti sọnu||מו טי סונו
c_passport|Mo ti sọ iwe irinna mi nu||מו טי סו איווה אירינה מי נו
c_hurts|O n dun mi nibi||או אן דון מי ניבי
c_time|Aago melo ni?||אאגו מלו ני
c_again|Ẹ tun sọ, ẹ jọwọ||אה טון סו, אה ג׳וו
c_write|Ṣe ẹ le kọ ọ silẹ fun mi?||שה אה לה קו או סילה פון מי
dog|Aja||אג׳ה
cat|Ologbo||אולוגבו
bird|Ẹyẹ||איה
horse|Ẹṣin||אשין
cow|Maalu||מאלו
pig|Ẹlẹdẹ||אלדה
elephant|Erin||אריין
monkey|Ọbọ||אובו
snake|Ejo||אג׳ו
mosquito|Ẹfọn||אפון
lion|Kiniun||קיניון
duck|Pẹpẹyẹ||פפייה
apple|Apu||אפו
banana|Ọgẹdẹ||אוגדה
orange|Ọsan||אוסאן
mango|Mangoro||מנגורו
pineapple|Ọpẹ oyinbo||אופה אויינבו
watermelon|Bara||בארה
coconut|Agbọn||אגבון
grapes|Eso ajara||אסו אג׳ארה
lemon|Osan wẹwẹ||אוסאן ווווה
strawberry|Sitiroberi||סיטירוברי
papaya|Ibẹpẹ||איבפה
tomato|Tomati||טומאטי
potato|Anamọ oyinbo||אנאמו אויינבו
onion|Alubọsa||אלובוסה
garlic|Aayu||איו
cucumber|Kukumba||קוקומבה
carrot|Karọọti||קרוטי
chili|Ata rodo||אטה רודו
corn|Agbado||אגבאדו
mushroom|Olu||אולו
lettuce|Letusi||לטוסי
eggplant|Igba (ẹfọ)||איגבה
soup|Ọbẹ||אובה
salad|Saladi||סלאדי
noodles|Nudulu||נודולו
cheese|Wara-kasi||ווארה-קאסי
butter|Bọta||בוטה
salt|Iyọ||איו
sugar|Suga||סוגה
cake|Akara oyinbo||אקארה אויינבו
icecream|Ipara yinyin||איפארה ייניין
juice|Oje eso||אוג׳ה אסו
wine|Waini||וואיני
breakfast|Ounjẹ aarọ||אונג׳ה אארו
lunch|Ounjẹ ọsan||אונג׳ה אוסאן
dinner|Ounjẹ alẹ||אונג׳ה אלה
fork|Fọọki||פוקי
spoon|Ṣibi||שיבי
knife|Ọbẹ (irin)||אובה
glass|Ife||איפה
plate|Awo||אוו
bank|Banki||באנקי
atm|ATM||איי-טי-אם
beach|Eti okun||אטי אוקון
museum|Ile iṣẹnbaye||אילה אישנבאיה
temple|Ile ijọsin||אילה איג׳וסין
street|Opopona||אופופונה
city|Ilu||אילו
shop|Ṣọọbu||שובו
supermarket|Ile itaja nla||אילה איטג׳ה נלה
park|Ọgba||אוגבה
station|Ibudo||איבודו
embassy|Ile aṣoju||אילה אשוג׳ו
phone|Foonu||פונו
charger|Ṣaja||שאג׳ה
bag|Apo||אפו
shoes|Bata||באטה
clothes|Aṣọ||אשו
hat|Fila||פילה
glasses|Digi oju||דיגי אוג׳ו
map|Maapu||מאפו
sunscreen|Ipara idaabobo oorun||איפארה אידאבובו אורון
umbrella|Agboorun||אגבורון
sf_order|Mo fẹ paṣẹ ounjẹ||מו פה פשה אונג׳ה
sf_recommend|Kini ẹ ṣeduro?||קיני אה שדורו
sf_bottle|Igo omi kan, ẹ jọwọ||איגו אומי קאן, אה ג׳וו
sf_isspicy|Ṣe ata wa ninu rẹ?||שה אטה ווה נינו רה
sf_onemore|Ọkan si, ẹ jọwọ||אוקאן סי, אה ג׳וו
sf_nosugar|Laisi suga, ẹ jọwọ||לאיסי סוגה, אה ג׳וו
sf_takeaway|Mo fẹ mu u lọ||מו פה מו או לו
ss_smaller|Ṣe kekere wa?||שה קקרה ווה
ss_try|Ṣe mo le wọ ọ wo?||שה מו לה וו או וו
ss_two|Maa mu meji||מאה מו מג׳י
ss_change|Ṣe ẹ ni ṣenji?||שה אה ני שנג׳י
ss_last|Elo ni ikẹhin?||אלו ני איקהין
ss_bag|Ẹ jọwọ, ẹ fun mi ni ọra||אה ג׳וו, אה פון מי ני אורה
sm_busstop|Nibo ni ibudo bọọsi wa?||ניבו ני איבודו בוסי ווה
sm_trainleave|Aago melo ni ọkọ oju irin maa lọ?||אאגו מלו ני אוקו אוג׳ו אירין מאה לו
sm_oneticket|Tikẹẹti kan, ẹ jọwọ||טיקטי קאן, אה ג׳וו
sm_howlong|Bawo ni yoo ṣe pẹ to?||באוו ני יו שה פה טו
sm_meter|Ẹ tan mita, ẹ jọwọ||אה טאן מיטה, אה ג׳וו
sm_slowdrive|Ẹ wa laiyara, ẹ jọwọ||אה ווה לאיארה, אה ג׳וו
sm_airport|Mo fẹ lọ si papa ọkọ ofurufu||מו פה לו סי פאפה אוקו אופורופו
sh_leavebag|Ṣe mo le fi apo mi silẹ nibi?||שה מו לה פי אפו מי סילה ניבי
sh_ac|Ẹrọ amuletutu ko ṣiṣẹ||ארו אמולטוטו קו שישה
sh_breakfast|Ṣe ounjẹ aarọ wa ninu rẹ?||שה אונג׳ה אארו ווה נינו רה
sh_towel|Mo nilo aṣọ inura miiran||מו נילו אשו אינורה מיראן
sh_taxi|Ṣe ẹ le pe takisi fun mi?||שה אה לה פה טקיסי פון מי
sh_late|Ṣe mo le kuro nigbamii?||שה מו לה קורו ניגבאמי
so_learning|Mo n kọ ede Yoruba||מו אן קו אדה יורובה
so_thankshelp|Ẹ ṣeun fun iranlọwọ yin||אה שאון פון אירנלוו יין
so_photo|Ṣe ẹ le ya aworan wa?||שה אה לה יה אוורן ווה
so_like|Mo fẹran ibi yii||מו פראן איבי יי
so_vacation|Mo wa nibi fun isinmi||מו ווה ניבי פון איסינמי
so_howsay|Bawo ni a ṣe n sọ eyi?||באוו ני א שה אן סו איי
so_noproblem|Ko si wahala||קו סי וואהאלה
so_beautiful|O lẹwa gan!||או לווה גאן
sp_unwell|Ara mi ko ya||ארה מי קו יה
sp_nearhosp|Nibo ni ile iwosan to sunmọ julọ?||ניבו ני אילה איווסן טו סונמו ג׳ולו
sp_fever|Mo ni iba||מו ני איבה
sp_helpme|Ẹ ran mi lọwọ, ẹ jọwọ||אה ראן מי לווו, אה ג׳וו
sp_stolen|Wọn ti ji apo mi||וון טי ג׳י אפו מי
sp_embassy|Mo nilo ile aṣoju Israeli||מו נילו אילה אשוג׳ו איזראלי
dt1|Nibo ni ẹ n lọ?||ניבו ני אה אן לו
dt2|Ile itura yii, ẹ jọwọ.||אילה איטורה יי, אה ג׳וו
dt3|O dara, ẹ wọle.||או דארה, אה וולה
dt4|Elo ni?||אלו ני
dt5|Naira igba.||נאירה איגבה
dt6|Ẹ tan mita, ẹ jọwọ.||אה טאן מיטה, אה ג׳וו
dt7|Ko si wahala.||קו סי וואהאלה
dt8|Ẹ duro nibi, ẹ ṣeun.||אה דורו ניבי, אה שאון
dm1|Elo ni eleyii?||אלו ני אלהיי
dm2|Ọọdunrun.||אודונרון
dm3|O wọn ju! Igba?||או וון ג׳ו! איגבה
dm4|Aadọtalerugba, ikẹhin.||אדוטלרוגבה, איקהין
dm5|O dara, maa ra a.||או דארה, מאה רה א
dm6|Ẹ ṣeun pupọ!||אה שאון פופו
dr1|Ẹ melo ni?||אה מלו ני
dr2|A jẹ meji.||א ג׳ה מג׳י
dr3|Kini ẹ fẹ jẹ?||קיני אה פה ג׳ה
dr4|Iresi dindin pẹlu adiẹ, laisi ata.||אירסי דינדין פלו אדיה, לאיסי אטה
dr5|Kini ẹ fẹ mu?||קיני אה פה מו
dr6|Omi nikan, ẹ jọwọ.||אומי ניקאן, אה ג׳וו
dr7|Ẹ jọwọ, mu iwe owo wa.||אה ג׳וו, מו איווה אוו ווה
dh1|Ẹ n lẹ, mo ti gba yara silẹ.||אן לה, מו טי גבה יארה סילה
dh2|Orukọ wo ni?||אורוקו וו ני
dh3|Orukọ ...||אורוקו
dh4|Iwe irinna yin, ẹ jọwọ.||איווה אירינה יין, אה ג׳וו
dh5|Yara yin ni ọọdunrun o le marun.||יארה יין ני אודונרון או לה מארון
dh6|Aago melo ni ounjẹ aarọ?||אאגו מלו ני אונג׳ה אארו
dh7|Lati aago meje si aago mẹwa.||לאטי אאגו מג׳ה סי אאגו מווה
dd1|Ẹ jọwọ, nibo ni ibudo ọkọ oju irin wa?||אה ג׳וו, ניבו ני איבודו אוקו אוג׳ו אירין ווה
dd2|Ẹ lọ taara, lẹhinna ẹ yi si osi.||אה לו טארה, להינה אה יי סי אוסי
dd3|Ṣe o jinna si ibi?||שה או ג׳ינה סי איבי
dd4|Rara, iṣẹju marun ni ẹsẹ.||ראה-ראה, אישג׳ו מארון ני אסה
dd5|Ẹ ṣeun gan!||אה שאון גאן
da1|Kini idi abẹwo yin?||קיני אידי אבוו יין
da2|Ọjọ melo ni ẹ maa lo?||אוג׳ו מלו ני אה מאה לו
da3|Ọsẹ meji.||אוסה מג׳י
da4|Ẹ ku abọ!||אה קו אבו
dp1|Nibo lo n dun yin?||ניבו לו אן דון יין
dp2|Ẹ lo oogun yii lẹẹmeji lojumọ.||אה לו אוגון יי לאמג׳י לוג׳ומו
dp4|Ara yin a ya o!||ארה יין א יה או
ds1|Mo fẹ kaadi SIM to ni intanẹẹti.||מו פה קאדי סים טו ני אינטנטי
ds2|Fun ọjọ melo?||פון אוג׳ו מלו
ds3|Fun ọjọ mẹwa.||פון אוג׳ו מווה
ds4|O ti ṣetan, ẹ ti ni intanẹẹti bayii.||או טי שטאן, אה טי ני אינטנטי באיי
dc1|Ṣe mo le ran yin lọwọ?||שה מו לה ראן יין לווו
dc2|Ṣe ẹ ni eyi ni awọ bulu?||שה אה ני איי ני אוו בולו
dc3|Bẹẹni, iwọn wo?||בני, איוון וו
dc4|Alabọde.||אלאבודה
dc5|O dara, yara iwọṣọ wa nibẹ.||או דארה, יארה איוושו ווה ניבה
dg1|Mo fẹ gba aye irin-ajo fun ọla.||מו פה גבה איה אירין-אג׳ו פון אולה
dg2|Irin-ajo naa bẹrẹ ni aago mẹjọ owurọ.||אירין-אג׳ו נאה ברה ני אאגו מג׳ו אווורו
dg3|Ṣe ounjẹ ọsan wa ninu rẹ?||שה אונג׳ה אוסאן ווה נינו רה
dg4|Bẹẹni, ati omi pẹlu.||בני, אטי אומי פלו
dg5|O dara pupọ, fun eniyan meji.||או דארה פופו, פון איניאן מג׳י
w_weather|Oju ọjọ||אוג׳ו אוג׳ו
w_sun|Oorun||אורון
w_rain|Ojo||אוג׳ו (גשם)
w_wind|Afẹfẹ||אפפה
w_cloud|Awọsanma||אווסנמה
w_snow|Yinyin (ojo)||ייניין
w_storm|Iji||איג׳י
w_humid|Ọrinrin||אורינרין
j_teacher|Olukọ||אולוקו
j_driver|Awakọ||אוואקו
j_waiter|Oluduro||אולודורו
j_cook|Alasẹ||אלאסה
j_student|Akẹkọ||אקקו
j_engineer|Onimọ-ẹrọ||אונימו-ארו
j_nurse|Nọọsi||נוסי
j_seller|Olutaja||אולוטג׳ה
j_guide|Atọna||אטונה
j_pharmacist|Oniṣegun oogun||אונישגון אוגון
e_angry|Inu n bi mi||אינו אן בי מי
e_scared|Ẹru n ba mi||ארו אן בה מי
e_bored|O su mi||או סו מי
e_worried|Ọkan mi ko balẹ||אוקאן מי קו באלה
e_surprised|Ẹnu ya mi||אנו יה מי
e_calm|Mo farabalẹ||מו פרבאלה
e_excited|Inu mi dun gan||אינו מי דון גאן
e_love|Mo n nifẹ||מו אן ניפה
dir_north|Ariwa||אריווה
dir_south|Guusu||גוסו
dir_east|Ila-oorun||אילה-אורון
dir_west|Iwọ-oorun||איוו-אורון
dir_corner|Igun||איגון
dir_light|Ina ọkọ||אינה אוקו
dir_behind|Lẹyin||לאיין
dir_front|Iwaju||איווג׳ו
dir_next|Lẹgbẹ||לגבה
dir_back|Pada sẹyin||פאדה סאיין
dir_up|Oke||אוקה
dir_down|Isalẹ||איסאלה`
});

/* ---- numbers & prices in Yoruba: 1–20 and round numbers in Yoruba; everything else the way prices are actually said in Nigerian markets — in English ---- */
NW.yo = (() => {
  const Y = { 0: ['odo', 'אודו'], 1: ['ọkan', 'אוקאן'], 2: ['meji', 'מג׳י'], 3: ['mẹta', 'מטה'], 4: ['mẹrin', 'מרין'], 5: ['marun', 'מארון'], 6: ['mẹfa', 'מפה'], 7: ['meje', 'מג׳ה'], 8: ['mẹjọ', 'מג׳ו'], 9: ['mẹsan', 'מסאן'], 10: ['mẹwa', 'מווה'],
    20: ['ogun', 'אוגון'], 30: ['ọgbọn', 'אוגבון'], 40: ['ogoji', 'אוגוג׳י'], 50: ['aadọta', 'אדוטה'], 100: ['ọgọrun', 'אוגורון'], 200: ['igba', 'איגבה'], 300: ['ọọdunrun', 'אודונרון'], 400: ['irinwo', 'אירינוו'], 500: ['ẹẹdẹgbẹta', 'אדגבטה'], 1000: ['ẹgbẹrun', 'אגברון'] };
  const EN = n => {                                          /* English words, as used for prices */
    const o = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const t = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const u100 = x => x < 20 ? o[x] : t[Math.floor(x / 10)] + (x % 10 ? '-' + o[x % 10] : '');
    const u1000 = x => { const h = Math.floor(x / 100), r = x % 100; return [h ? o[h] + ' hundred' : '', r ? (h ? 'and ' : '') + u100(r) : ''].filter(Boolean).join(' '); };
    if (!n) return 'zero';
    const th = Math.floor(n / 1000), r = n % 1000;
    return [th ? u1000(th) + ' thousand' : '', r ? u1000(r) : ''].filter(Boolean).join(' ');
  };
  const EH = { zero: 'זירו', one: 'וואן', two: 'טו', three: 'תרי', four: 'פור', five: 'פייב', six: 'סיקס', seven: 'סבן', eight: 'אייט', nine: 'ניין', ten: 'טן', eleven: 'אילבן', twelve: 'טוולב', thirteen: 'ת׳רטין', fourteen: 'פורטין', fifteen: 'פיפטין', sixteen: 'סיקסטין', seventeen: 'סבנטין', eighteen: 'אייטין', nineteen: 'ניינטין', twenty: 'טוונטי', thirty: 'ת׳רטי', forty: 'פורטי', fifty: 'פיפטי', sixty: 'סיקסטי', seventy: 'סבנטי', eighty: 'אייטי', ninety: 'ניינטי', hundred: 'הנדרד', thousand: 'ת׳אוזנד', and: 'אנד' };
  const eh = s => s.split(/([ -])/).map(w => EH[w] || w).join('');
  return (n, cur) => {
    let t, h;
    if (cur) { t = EN(n) + ' naira'; h = eh(EN(n)) + ' נאירה'; }       /* prices: the way they are said in the market */
    else if (Y[n]) { t = Y[n][0]; h = Y[n][1]; }
    else { t = EN(n); h = eh(t); }
    return [tk(t, t, h)];
  };
})();
NUM.yo = { tokens: (n, cur) => NW.yo(n, cur) };
