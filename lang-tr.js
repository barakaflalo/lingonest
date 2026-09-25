/* ===== LingoNest — lang-tr.js : Turkish content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('tr', {
  ver: '1.14.0',
  curSym: "₺",
  country: {"he": "טורקיה וקפריסין הצפונית", "en": "Turkey & Northern Cyprus", "ru": "Турция", "es": "Turquía", "ar": "تركيا"},
  emergency: [
    ["🆘", {"he": "חירום (אמבולנס, משטרה, כבאות)", "en": "Emergency (ambulance, police, fire)", "ru": "Экстренный (все службы)", "es": "Emergencias (todo)", "ar": "الطوارئ (كل الخدمات)"}, "112"],
    ["🚓", {"he": "משטרה", "en": "Police", "ru": "Полиция", "es": "Policía", "ar": "الشرطة"}, "155"],
    ["👮", {"he": "ז׳נדרמריה (מחוץ לערים)", "en": "Gendarmerie (outside cities)", "ru": "Жандармерия", "es": "Gendarmería", "ar": "الدرك"}, "156"]
  ],
  tips: [
    {"t": {"he": "מילה ארוכה = משפט שלם", "en": "One long word = a whole sentence"}, "b": {"he": "טורקית \"מדביקה\" סיומות: ev (בית) → evim (הבית שלי) → evimde (בבית שלי) → evimdeyim (אני בבית שלי). לכן מילים נראות ארוכות — אבל הן בנויות מחלקים קבועים.", "en": "Turkish glues endings on: ev (house) → evim (my house) → evimde (in my house) → evimdeyim (I'm at my house). Long words, built from regular pieces."}, "ex": [["Evimdeyim", "", "אבימדיים", "אני בבית", "I'm at home"]]},
    {"t": {"he": "הרמוניית תנועות", "en": "Vowel harmony"}, "b": {"he": "הסיומות משנות תנועה לפי המילה: ev-ler (בתים) אבל araba-lar (מכוניות). לא צריך לשנן — שומעים את זה, ובמשפטי האפליקציה זה כבר נכון.", "en": "Endings change their vowel to match the word: ev-ler (houses) but araba-lar (cars). No need to memorise — you'll hear it, and the app's phrases already get it right."}, "ex": [["Evler / arabalar", "", "אבלר / ארבלר", "בתים / מכוניות", "houses / cars"]]},
    {"t": {"he": "הפועל בסוף", "en": "The verb comes last"}, "b": {"he": "כמו ביפנית ובקוריאנית: \"אני מים רוצה\" — Su istiyorum. שאלה עם mı/mi/mu/mü: Uzak mı? = רחוק?", "en": "Like Japanese and Korean: \"I water want\" — Su istiyorum. Questions with mı/mi/mu/mü: Uzak mı? = Is it far?"}, "ex": [["Su istiyorum", "", "סו איסטיורום", "אני רוצה מים", "I want water"]]},
    {"t": {"he": "תה, מיקוח ואירוח", "en": "Tea, bargaining and hospitality"}, "b": {"he": "בטורקיה מציעים çay (צ׳אי) כל הזמן — גם בחנויות. בבזאר מתמקחים בנחת ובחיוך; להגיד Çok pahalı! זה חלק מהמשחק. Teşekkürler = תודה, ובצורה חמה יותר: Sağ olun!", "en": "Tea (çay) is offered everywhere — even in shops. In the bazaar you bargain calmly with a smile. Teşekkürler = thanks; warmer: Sağ olun!"}, "ex": [["Sağ olun!", "", "סא אולון", "תודה! (חם)", "Thanks! (warm)"]]},
    {"t": {"he": "מילים מוכרות מעברית וערבית", "en": "Words familiar from Hebrew and Arabic"}, "b": {"he": "בטורקית הרבה מילים ממקור ערבי ופרסי שישמעו מוכרות: kitap (ספר, כתאב), hesap (חשבון), merhaba (מרחבא), dünya (עולם, דוניא).", "en": "Many Arabic and Persian loans sound familiar: kitap (book), hesap (bill), merhaba, dünya (world)."}, "ex": [["Hesap, lütfen", "", "הסאפ, לוטפן", "חשבון, בבקשה", "The bill, please"]]},
    {"t": {"he": "Siz מול sen", "en": "Siz vs. sen"}, "b": {"he": "Siz (סיז) הוא \"אתה\" המנומס — לזרים ולמבוגרים. sen רק לחברים. לכן Nasılsınız? (מנומס) ולא Nasılsın?", "en": "Siz is the polite \"you\" — strangers and elders. sen for friends. So Nasılsınız? (polite) not Nasılsın?"}, "ex": [["Nasılsınız?", "", "נסילסיניז", "מה שלומך? (מנומס)", "How are you? (polite)"]]}
  ],
  note: {"he": "בטורקית 29 אותיות לטיניות, ונקראים בדיוק כמו שכותבים — כל אות = צליל אחד. שים לב למיוחדות: ç = צ׳, ş = ש, c = ג׳, ğ = מאריכה את התנועה שלפניה (כמעט שקטה), ı (בלי נקודה) = אִי עמוקה, ö / ü = כמו בגרמנית.", "en": "Turkish has 29 Latin letters and is read exactly as written — one letter, one sound. Special ones: ç = ch, ş = sh, c = j, ğ lengthens the vowel before it (almost silent), dotless ı = a deep \"i\", ö / ü as in German.", "ru": "В турецком 29 латинских букв, читается как пишется: ç = ч, ş = ш, c = дж, ğ удлиняет предыдущую гласную, ı = ы, ö / ü — как в немецком.", "es": "El turco tiene 29 letras latinas y se lee como se escribe: ç = ch, ş = sh, c = y (dj), ğ alarga la vocal anterior, ı sin punto = i profunda, ö / ü como en alemán.", "ar": "في التركية 29 حرفا لاتينيا وتُقرأ كما تُكتب: ç = تش، ş = ش، c = ج، ğ تطيل الحركة قبلها، ı بلا نقطة = إي عميقة، ö / ü كما في الألمانية."},
  alpha: [
    ["A a", "A", "אַ", "a"],
    ["B b", "B", "ב", "be"],
    ["C c", "C", "ג׳ (!)", "ce"],
    ["Ç ç", "Ç", "צ׳", "çe"],
    ["D d", "D", "ד", "de"],
    ["E e", "E", "אֶ", "e"],
    ["F f", "F", "פ", "fe"],
    ["G g", "G", "ג", "ge"],
    ["Ğ ğ", "Ğ", "מאריכה תנועה (שקטה)", "yumuşak ge"],
    ["H h", "H", "ה", "he"],
    ["I ı", "I", "אִי עמוקה (כמו ы)", "ı"],
    ["İ i", "İ", "אִי", "i"],
    ["J j", "J", "ז׳", "je"],
    ["K k", "K", "ק", "ke"],
    ["L l", "L", "ל", "le"],
    ["M m", "M", "מ", "me"],
    ["N n", "N", "נ", "ne"],
    ["O o", "O", "אוֹ", "o"],
    ["Ö ö", "Ö", "אֶ מעוגלת (ö)", "ö"],
    ["P p", "P", "פּ", "pe"],
    ["R r", "R", "ר", "re"],
    ["S s", "S", "ס", "se"],
    ["Ş ş", "Ş", "ש", "şe"],
    ["T t", "T", "ט", "te"],
    ["U u", "U", "אוּ", "u"],
    ["Ü ü", "Ü", "אִי מעוגלת (ü)", "ü"],
    ["V v", "V", "ו (V)", "ve"],
    ["Y y", "Y", "י", "ye"],
    ["Z z", "Z", "ז", "ze"]
  ],
  /* speaker = female: [regex source, flags, replacement] */
  gender: [],
  words: `hello|Merhaba||מרהבה
bye|Hoşça kal||הושצ׳ה קאל
morning|Günaydın||גוניידין
thanks|Teşekkür ederim||טשקור אדרים
please|Lütfen||לוטפן
sorry|Özür dilerim||אוזור דילרים
yes|Evet||אווט
no|Hayır||היר
howareyou|Nasılsınız?||נסילסיניז
good|İyi||איי
ok|Tamam||טמאם
n1|Bir||ביר
n2|İki||איקי
n3|Üç||אוץ׳
n4|Dört||דורט
n5|Beş||בש
n6|Altı||אלטה
n7|Yedi||ידי
n8|Sekiz||סקיז
n9|Dokuz||דוקוז
n10|On||און
n0|Sıfır||סיפיר
n20|Yirmi||יירמי
n50|Elli||אלי
n100|Yüz||יוז
n1000|Bin||בין
n11|On bir||און ביר
n12|On iki||און איקי
n13|On üç||און אוץ׳
n14|On dört||און דורט
n15|On beş||און בש
n16|On altı||און אלטה
n17|On yedi||און ידי
n18|On sekiz||און סקיז
n19|On dokuz||און דוקוז
n30|Otuz||אוטוז
n40|Kırk||קירק
n60|Altmış||אלטמיש
n70|Yetmiş||יטמיש
n80|Seksen||סקסן
n90|Doksan||דוקסן
n200|İki yüz||איקי יוז
n500|Beş yüz||בש יוז
n10000|On bin||און בין
water|Su||סו
toilet|Tuvalet||טואלט
where|Nerede?||נרדה
howmuch|Ne kadar?||נה קדר
this|Bu||בו
friend|Arkadaş||ארקדש
food|Yemek||ימק
bread|Ekmek||אקמק
coffee|Kahve||קהווה
tea|Çay||צ׳אי
chicken|Tavuk||טבוק
fish|Balık||בליק
rice|Pilav||פילאב
beer|Bira||בירה
bill|Hesap||הסאפ
tasty|Lezzetli||לזטלי
egg|Yumurta||יומורטה
fruit|Meyve||מייבה
veg|Sebze||סבזה
meat|Et||את
milk|Süt||סוט
spicy|Acı||אג׳ה
restaurant|Restoran||רסטורן
ice|Buz||בוז
taxi|Taksi||טקסי
bus|Otobüs||אוטובוס
train|Tren||טרן
airport|Havalimanı||הבלימנה
hotel|Otel||אוטל
left|Sol||סול
right|Sağ||סא
straight|Düz||דוז
stop|Durun||דורון
ticket|Bilet||בילט
money|Para||פרה
expensive|Pahalı||פהלה
cheap|Ucuz||אוג׳וז
market|Pazar||פזאר
pharmacy|Eczane||אג׳זאנה
open|Açık||אצ׳יק
closed|Kapalı||קפלה
help|İmdat!||אימדאט
police|Polis||פוליס
doctor|Doktor||דוקטור
hospital|Hastane||הסטאנה
today|Bugün||בוגון
tomorrow|Yarın||יארין
yesterday|Dün||דון
now|Şimdi||שימדי
t_morning|Sabah||סבאח
t_evening|Akşam||אקשם
t_night|Gece||גג׳ה
t_week|Hafta||הפטה
t_month|Ay||איי
t_year|Yıl||ייל
t_hour|Saat||סאאט
t_minute|Dakika||דקיקה
p_toilet|Tuvalet nerede?||טואלט נרדה
p_cost|Bu ne kadar?||בו נה קדר
p_nounder|Anlamıyorum||אנלמיורום
p_english|İngilizce biliyor musunuz?||אינגיליזג׳ה ביליור מוסונוז
p_slow|Lütfen yavaş konuşun||לוטפן יאוואש קונושון
p_bill|Hesap, lütfen||הסאפ, לוטפן
p_want|Bunu istiyorum||בונו איסטיורום
p_expensive|Çok pahalı||צ׳וק פהלה
p_discount|İndirim yapar mısınız?||אינדירים יאפר מיסיניז
p_address|Beni bu adrese götürün, lütfen||בני בו אדרסה גוטורון, לוטפן
p_hotel|Otel nerede?||אוטל נרדה
p_doctor|Doktora ihtiyacım var||דוקטורה איחטיאג׳ים ואר
p_police|Polis çağırın!||פוליס צ׳איירין
p_israel|İsrail'denim||איסראילדנים
p_name|Benim adım ...||בנים אדים
p_nice|Memnun oldum||ממנון אולדום
p_water|Su, lütfen||סו, לוטפן
p_help|Bana yardım edebilir misiniz?||בנה יארדים אדבילר מיסיניז
p_what|Bu ne?||בו נה
p_nospicy|Acısız olsun, lütfen||אג׳יסיז אולסון, לוטפן
room|Oda||אודה
key|Anahtar||אנהטאר
bed|Yatak||יאטק
shower|Duş||דוש
towel|Havlu||האבלו
passport|Pasaport||פסאפורט
mon|Pazartesi||פזרטסי
tue|Salı||סלה
wed|Çarşamba||צ׳רשמבה
thu|Perşembe||פרשמבה
fri|Cuma||ג׳ומה
sat|Cumartesi||ג׳ומרטסי
sun|Pazar (günü)||פזאר (גונו)
red|Kırmızı||קירמיזי
blue|Mavi||מאבי
green|Yeşil||ישיל
yellow|Sarı||סארה
black|Siyah||סיאח
white|Beyaz||ביאז
man|Adam||אדם
woman|Kadın||קדין
child|Çocuk||צ׳וג׳וק
family|Aile||אאילה
i|Ben||בן
you|Siz||סיז
head|Baş||בש
stomach|Karın||קרין
hand|El||אל
pain|Ağrı||אארה
medicine|İlaç||אילאץ׳
sick|Hasta||הסטה
big|Büyük||בויוק
small|Küçük||קוצ׳וק
hot|Sıcak||סיג׳אק
cold|Soğuk||סואוק
bad|Kötü||קוטו
beautiful|Güzel||גוזל
new|Yeni||יני
old|Eski||אסקי
fast|Hızlı||היזלה
slow|Yavaş||יאוואש
near|Yakın||יאקין
far_a|Uzak||אוזק
clean|Temiz||טמיז
dirty|Kirli||קירלי
tired|Yorgun||יורגון
hungry|Aç||אץ׳
thirsty|Susamış||סוסמיש
happy|Mutlu||מוטלו
sad|Üzgün||אוזגון
easy|Kolay||קולאי
difficult|Zor||זור
many|Çok||צ׳וק
eat|Yemek||ימק
drink|İçmek||איצ׳מק
go|Gitmek||גיטמק
buy|Satın almak||סטין אלמק
speak|Konuşmak||קונושמק
sleep|Uyumak||אויומק
understand|Anlamak||אנלמק
come|Gelmek||גלמק
want|İstemek||איסטמק
need|İhtiyaç duymak||איחטיאץ׳ דוימק
know|Bilmek||בילמק
see|Görmek||גורמק
hear|Duymak||דוימק
give|Vermek||ורמק
take|Almak||אלמק
pay|Ödemek||אודמק
wait|Beklemek||בקלמק
walk|Yürümek||יורומק
read|Okumak||אוקומק
write|Yazmak||יאזמק
love|Sevmek||סבמק
work|Çalışmak||צ׳לישמק
swim|Yüzmek||יוזמק
c_table|İki kişilik masa, lütfen||איקי קישיליק מסה, לוטפן
c_menu|Menü, lütfen||מנו, לוטפן
c_noice|Buzsuz, lütfen||בוזסוז, לוטפן
c_nomeat|Et yemiyorum||את ימיורום
c_allergy|Kuruyemişe alerjim var||קורוימישה אלרז׳ים ואר
c_delicious|Çok lezzetli!||צ׳וק לזטלי
c_reserv|Rezervasyonum var||רזרוסיונום ואר
c_wifi|Wi-Fi şifresi nedir?||ויפי שיפרסי נדיר
c_checkout|Çıkış saat kaçta?||צ׳יקיש סאאט קצ׳טה
c_howget|Oraya nasıl giderim?||אוראיה נסיל גידרים
c_stophere|Burada durun, lütfen||בורדה דורון, לוטפן
c_far|Uzak mı?||אוזק מה
c_card|Kartla ödeyebilir miyim?||קרטלה אודיבילר מיים
c_looking|Sadece bakıyorum, teşekkürler||סאדג׳ה בקיורום, טשקורלר
c_yourname|Adınız ne?||אדיניז נה
c_wherefrom|Nerelisiniz?||נרליסיניז
c_seeyou|Görüşürüz||גורושורוז
c_cheers|Şerefe!||שרפה
c_lost|Kayboldum||קייבולדום
c_passport|Pasaportumu kaybettim||פסאפורטומו קייבטים
c_hurts|Burası ağrıyor||בוראסה אאריור
c_time|Saat kaç?||סאאט קאץ׳
c_again|Tekrar eder misiniz?||טקרר אדר מיסיניז
c_write|Yazabilir misiniz?||יאזבילר מיסיניז
dog|Köpek||קופק
cat|Kedi||קדי
bird|Kuş||קוש
horse|At||את
cow|İnek||אינק
pig|Domuz||דומוז
elephant|Fil||פיל
monkey|Maymun||מיימון
snake|Yılan||יילן
mosquito|Sivrisinek||סיבריסינק
lion|Aslan||אסלן
duck|Ördek||אורדק
apple|Elma||אלמה
banana|Muz||מוז
orange|Portakal||פורטקל
mango|Mango||מנגו
pineapple|Ananas||אננס
watermelon|Karpuz||קרפוז
coconut|Hindistan cevizi||הינדיסטן ג׳ביזי
grapes|Üzüm||אוזום
lemon|Limon||לימון
strawberry|Çilek||צ׳ילק
papaya|Papaya||פפאיה
tomato|Domates||דומטס
potato|Patates||פטטס
onion|Soğan||סואן
garlic|Sarımsak||סרימסאק
cucumber|Salatalık||סלטליק
carrot|Havuç||האבוץ׳
chili|Acı biber||אג׳ה ביבר
corn|Mısır||מיסיר
mushroom|Mantar||מנטר
lettuce|Marul||מרול
eggplant|Patlıcan||פטליג׳אן
soup|Çorba||צ׳ורבה
salad|Salata||סלטה
noodles|Erişte||ארישטה
cheese|Peynir||פיניר
butter|Tereyağı||טרייאה
salt|Tuz||טוז
sugar|Şeker||שקר
cake|Pasta||פסטה
icecream|Dondurma||דונדורמה
juice|Meyve suyu||מייבה סויו
wine|Şarap||שראפ
breakfast|Kahvaltı||קהבלטה
lunch|Öğle yemeği||אוילה ימיי
dinner|Akşam yemeği||אקשם ימיי
fork|Çatal||צ׳טל
spoon|Kaşık||קשיק
knife|Bıçak||ביצ׳אק
glass|Bardak||ברדק
plate|Tabak||טבק
bank|Banka||בנקה
atm|ATM / Bankamatik||בנקמטיק
beach|Plaj||פלאז׳
museum|Müze||מוזה
temple|Tapınak||טפינק
street|Sokak||סוקק
city|Şehir||שהיר
shop|Dükkan||דוקאן
supermarket|Market||מרקט
park|Park||פרק
station|İstasyon||איסטסיון
embassy|Büyükelçilik||בויוקאלצ׳יליק
phone|Telefon||טלפון
charger|Şarj aleti||שרז׳ אלטי
bag|Çanta||צ׳נטה
shoes|Ayakkabı||איקבה
clothes|Kıyafet||קיאפט
hat|Şapka||שפקה
glasses|Gözlük||גוזלוק
map|Harita||הריטה
sunscreen|Güneş kremi||גונש קרמי
umbrella|Şemsiye||שמסייה
sf_order|Sipariş vermek istiyorum||סיפריש ורמק איסטיורום
sf_recommend|Ne önerirsiniz?||נה אונרירסיניז
sf_bottle|Bir şişe su, lütfen||ביר שישה סו, לוטפן
sf_isspicy|Acı mı?||אג׳ה מה
sf_onemore|Bir tane daha, lütfen||ביר טאנה דהה, לוטפן
sf_nosugar|Şekersiz, lütfen||שקרסיז, לוטפן
sf_takeaway|Paket yapar mısınız?||פקט יאפר מיסיניז
ss_smaller|Daha küçük beden var mı?||דהה קוצ׳וק בדן ואר מה
ss_try|Deneyebilir miyim?||דניבילר מיים
ss_two|İki tane alıyorum||איקי טאנה אליורום
ss_change|Bozuk paranız var mı?||בוזוק פרניז ואר מה
ss_last|Son fiyat ne?||סון פיאט נה
ss_bag|Poşet alabilir miyim?||פושט אלבילר מיים
sm_busstop|Otobüs durağı nerede?||אוטובוס דוראה נרדה
sm_trainleave|Tren saat kaçta kalkıyor?||טרן סאאט קצ׳טה קלקיור
sm_oneticket|Bir bilet, lütfen||ביר בילט, לוטפן
sm_howlong|Ne kadar sürer?||נה קדר סורר
sm_meter|Taksimetreyi açın, lütfen||טקסימטריי אצ׳ין, לוטפן
sm_slowdrive|Daha yavaş gidin, lütfen||דהה יאוואש גידין, לוטפן
sm_airport|Havalimanına gitmek istiyorum||הבלימנינה גיטמק איסטיורום
sh_leavebag|Çantamı burada bırakabilir miyim?||צ׳נטמה בורדה בירקבילר מיים
sh_ac|Klima çalışmıyor||קלימה צ׳לישמיור
sh_breakfast|Kahvaltı dahil mi?||קהבלטה דהיל מי
sh_towel|Bir havlu daha lazım||ביר האבלו דהה לאזים
sh_taxi|Bana taksi çağırır mısınız?||בנה טקסי צ׳איירר מיסיניז
sh_late|Geç çıkış yapabilir miyim?||גץ׳ צ׳יקיש יאפבילר מיים
so_learning|Türkçe öğreniyorum||טורקצ׳ה אורניורום
so_thankshelp|Yardımınız için çok teşekkürler||יארדימיניז איצ׳ין צ׳וק טשקורלר
so_photo|Fotoğrafımızı çeker misiniz?||פוטוראפימיזה צ׳קר מיסיניז
so_like|Burayı çok sevdim||בוראיה צ׳וק סבדים
so_vacation|Tatildeyim||טטילדיים
so_howsay|Bunu nasıl söylersiniz?||בונו נסיל סוילרסיניז
so_noproblem|Sorun değil||סורון דיל
so_beautiful|Çok güzel!||צ׳וק גוזל
sp_unwell|Kendimi iyi hissetmiyorum||קנדימי איי היסטמיורום
sp_nearhosp|En yakın hastane nerede?||אן יאקין הסטאנה נרדה
sp_fever|Ateşim var||אטשים ואר
sp_helpme|Yardım edin, lütfen||יארדים אדין, לוטפן
sp_stolen|Çantam çalındı||צ׳נטם צ׳לינדה
sp_embassy|İsrail büyükelçiliğine ihtiyacım var||איסראיל בויוקאלצ׳ילינה איחטיאג׳ים ואר
dt1|Nereye?||נריה
dt2|Bu otele, lütfen.||בו אוטלה, לוטפן
dt3|Tamam, binin.||טמאם, בינין
dt4|Ne kadar tutar?||נה קדר טוטר
dt5|İki yüz lira.||איקי יוז לירה
dt6|Taksimetreyi açın, lütfen.||טקסימטריי אצ׳ין, לוטפן
dt7|Sorun değil.||סורון דיל
dt8|Burada durun, teşekkürler.||בורדה דורון, טשקורלר
dm1|Bu kaç para?||בו קאץ׳ פרה
dm2|Üç yüz.||אוץ׳ יוז
dm3|Çok pahalı! İki yüz olur mu?||צ׳וק פהלה! איקי יוז אולור מו
dm4|İki yüz elli, son fiyat.||איקי יוז אלי, סון פיאט
dm5|Tamam, alıyorum.||טמאם, אליורום
dm6|Çok teşekkürler!||צ׳וק טשקורלר
dr1|Kaç kişisiniz?||קאץ׳ קישיסיניז
dr2|İki kişiyiz.||איקי קישייז
dr3|Ne alırsınız?||נה אלירסיניז
dr4|Tavuklu pilav, acısız.||טבוקלו פילאב, אג׳יסיז
dr5|İçecek olarak?||איצ׳ג׳ק אולרק
dr6|Sadece su, lütfen.||סאדג׳ה סו, לוטפן
dr7|Hesap, lütfen.||הסאפ, לוטפן
dh1|Merhaba, rezervasyonum var.||מרהבה, רזרוסיונום ואר
dh2|Hangi isimle?||הנגי איסימלה
dh3|... adına.||... אדינה
dh4|Pasaportunuz, lütfen.||פסאפורטונוז, לוטפן
dh5|Odanız üç yüz beş.||אודניז אוץ׳ יוז בש
dh6|Kahvaltı saat kaçta?||קהבלטה סאאט קצ׳טה
dh7|Yediden ona kadar.||ידידן אונה קדר
dd1|Affedersiniz, istasyon nerede?||אפדרסיניז, איסטסיון נרדה
dd2|Düz gidin, sonra sola.||דוז גידין, סונרה סולה
dd3|Buradan uzak mı?||בורדן אוזק מה
dd4|Hayır, yürüyerek beş dakika.||היר, יורויירק בש דקיקה
dd5|Çok sağ olun!||צ׳וק סא אולון
w_weather|Hava durumu||הבה דורומו
w_sun|Güneş||גונש
w_rain|Yağmur||יאמור
w_wind|Rüzgar||רוזגאר
w_cloud|Bulut||בולוט
w_snow|Kar||קאר
w_storm|Fırtına||פירטינה
w_humid|Nemli||נמלי
j_teacher|Öğretmen||אורטמן
j_driver|Şoför||שופור
j_waiter|Garson||גרסון
j_cook|Aşçı||אשצ׳ה
j_student|Öğrenci||אורנג׳י
j_engineer|Mühendis||מוהנדיס
j_nurse|Hemşire||המשירה
j_seller|Satıcı||סטיג׳ה
j_guide|Rehber||רהבר
j_pharmacist|Eczacı||אג׳זג׳ה
e_angry|Kızgın||קיזגין
e_scared|Korkmuş||קורקמוש
e_bored|Sıkılmış||סיקילמיש
e_worried|Endişeli||אנדישלי
e_surprised|Şaşırmış||שאשירמיש
e_calm|Sakin||סאקין
e_excited|Heyecanlı||הייג׳נלה
e_love|Aşık||אאשיק
dir_north|Kuzey||קוזיי
dir_south|Güney||גוניי
dir_east|Doğu||דואו
dir_west|Batı||בטה
dir_corner|Köşe||קושה
dir_light|Trafik ışığı||טרפיק אישיה
dir_behind|Arkada||ארקדה
dir_front|Önde||אונדה
dir_next|Yanında||יאנינדה
dir_back|Geri||גרי
dir_up|Yukarı||יוקרה
dir_down|Aşağı||אשאה`
});

/* ---- numbers & prices (0–999,999) → tokens [text, roman, hebrew]. yüz / bin without "bir" ---- */
NW.tr = (() => {
  const O = [['sıfır', 'סיפיר'], ['bir', 'ביר'], ['iki', 'איקי'], ['üç', 'אוץ׳'], ['dört', 'דורט'], ['beş', 'בש'], ['altı', 'אלטה'], ['yedi', 'ידי'], ['sekiz', 'סקיז'], ['dokuz', 'דוקוז']];
  const T = [, ['on', 'און'], ['yirmi', 'יירמי'], ['otuz', 'אוטוז'], ['kırk', 'קירק'], ['elli', 'אלי'], ['altmış', 'אלטמיש'], ['yetmiş', 'יטמיש'], ['seksen', 'סקסן'], ['doksan', 'דוקסן']];
  function u1000(n, out) {
    const h = Math.floor(n / 100), t = Math.floor(n % 100 / 10), u = n % 10;
    if (h) { if (h > 1) out.push(O[h]); out.push(['yüz', 'יוז']); }
    if (t) out.push(T[t]);
    if (u) out.push(O[u]);
  }
  return (n, cur) => {
    const out = [];
    if (n === 0) out.push(O[0]);
    else {
      const th = Math.floor(n / 1000), r = n % 1000;
      if (th) { if (th > 1) u1000(th, out); out.push(['bin', 'בין']); }
      u1000(r, out);
    }
    if (cur) out.push(['lira', 'לירה']);
    return out.map(a => tk(a[0], a[0], a[1]));
  };
})();
NUM.tr = { tokens: (n, cur) => NW.tr(n, cur) };
