/* ===== LingoNest — lang-id.js : Indonesian content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('id', {
  ver: '1.19.0',
  curSym: "Rp",
  country: {"he": "אינדונזיה (באלי, ג׳קרטה ועוד)", "en": "Indonesia (Bali, Jakarta and more)", "ru": "Индонезия", "es": "Indonesia", "ar": "إندونيسيا"},
  emergency: [
    ["🆘", {"he": "חירום כללי", "en": "General emergency", "ru": "Экстренный", "es": "Emergencias", "ar": "الطوارئ"}, "112"],
    ["🚓", {"he": "משטרה", "en": "Police", "ru": "Полиция", "es": "Policía", "ar": "الشرطة"}, "110"],
    ["🚑", {"he": "אמבולנס", "en": "Ambulance", "ru": "Скорая", "es": "Ambulancia", "ar": "الإسعاف"}, "118", "119"]
  ],
  tips: [
    {"t": {"he": "שפה בלי מלכודות", "en": "A language without traps"}, "b": {"he": "באינדונזית הפועל לא משתנה (saya makan = אני אוכל/אכלתי/אוכל), אין זכר ונקבה ואין טונים. רבים = כפל: anak (ילד) → anak-anak (ילדים). זמן מסמנים ב-sudah (כבר), sedang (עכשיו), akan (עתיד).", "en": "Verbs never change (saya makan = I eat/ate), no gender, no tones. Plural = doubling: anak → anak-anak. Time words: sudah (already), sedang (now), akan (will)."}, "ex": [["Saya sudah makan", "", "סאיה סודה מאקן", "כבר אכלתי", "I've already eaten"]]},
    {"t": {"he": "ברכות לפי שעה", "en": "Greetings by time of day"}, "b": {"he": "Selamat pagi (בוקר), Selamat siang (צהריים), Selamat sore (אחר הצהריים), Selamat malam (ערב/לילה). Selamat = \"בשלום\" — אותה מילה כמו \"סלאם\".", "en": "Selamat pagi (morning), siang (midday), sore (afternoon), malam (evening). Selamat comes from the same root as salaam."}, "ex": [["Selamat malam", "", "סלאמט מאלם", "ערב טוב", "Good evening"]]},
    {"t": {"he": "Pak ו-Bu", "en": "Pak and Bu"}, "b": {"he": "לגבר פונים Pak (\"אבא\", אדוני), לאישה Bu (\"אמא\", גברתי) — גם לנהג ולמוכרת. Mas / Mbak לצעירים. זה מנומס וחם.", "en": "Address a man as Pak (sir), a woman as Bu (madam) — drivers and vendors too. Mas / Mbak for younger people. Polite and warm."}, "ex": [["Terima kasih, Pak", "", "טרימה קאסיה, פאק", "תודה, אדוני", "Thank you, sir"]]},
    {"t": {"he": "מחירים באלפים", "en": "Prices in thousands"}, "b": {"he": "הרופיה קטנה — מחירים באלפים ובעשרות אלפים. בשוק מתמקחים: Bisa kurang? (אפשר פחות?). במוניות מבקשים argo (מונה), או משתמשים באפליקציה.", "en": "The rupiah is small — prices run in thousands. In markets bargain: Bisa kurang? (can it be less?). In taxis ask for the argo (meter) or use an app."}, "ex": [["Bisa kurang?", "", "ביסה קורנג", "אפשר פחות?", "Can you lower it?"]]},
    {"t": {"he": "Tidak apa-apa ו-jam karet", "en": "Tidak apa-apa and \"rubber time\""}, "b": {"he": "Tidak apa-apa = אין בעיה, לא נורא. ויש ביטוי שכל מטייל לומד: jam karet (\"שעון גומי\") — לוחות זמנים גמישים. כדאי לקחת בסבלנות.", "en": "Tidak apa-apa = no problem. And every traveller learns jam karet (\"rubber time\") — flexible schedules. Take it easy."}, "ex": [["Tidak apa-apa", "", "טידאק אפה אפה", "לא נורא", "No worries"]]},
    {"t": {"he": "באלי — גם באלינזית", "en": "Bali — Balinese too"}, "b": {"he": "באלי היא אי הינדואי עם שפה משלה (באלינזית), אבל כולם מדברים אינדונזית. בכניסה למקדשים (pura) לובשים סארונג. תודה בבאלינזית: Suksma (סוקסמה) — תשמח אותם.", "en": "Bali is Hindu with its own language (Balinese), but everyone speaks Indonesian. Wear a sarong to enter temples (pura). Thanks in Balinese: Suksma."}, "ex": [["Suksma", "", "סוקסמה", "תודה (באלינזית)", "Thank you (Balinese)"]]}
  ],
  note: {"he": "אינדונזית נכתבת באותיות לטיניות רגילות, בלי סימנים מיוחדים, ונקראת בדיוק כמו שכותבים. c = צ׳ (cabai = צ׳אבאי), j = ג׳, ny = ני, ng = נג, sy = ש. אין טונים, אין נטיות, אין זכר ונקבה — אחת השפות הקלות בעולם.", "en": "Indonesian uses plain Latin letters with no special marks and is read exactly as written. c = ch (cabai), j = j, ny, ng, sy = sh. No tones, no conjugation, no gender — one of the world's easiest languages.", "ru": "Индонезийский пишется обычной латиницей и читается как пишется. c = ч, j = дж. Нет тонов, спряжений и рода.", "es": "El indonesio usa letras latinas sin signos y se lee como se escribe. c = ch, j = y. Sin tonos, conjugaciones ni género.", "ar": "تُكتب الإندونيسية بحروف لاتينية عادية وتُقرأ كما تُكتب. c = تش، j = ج. لا نغمات ولا تصريف ولا تذكير وتأنيث."},
  alpha: [
    ["A a", "a", "אַ", "a"],
    ["B b", "be", "ב", "b"],
    ["C c", "ce", "צ׳ (!)", "c"],
    ["D d", "de", "ד", "d"],
    ["E e", "e", "אֶ / שווא", "e"],
    ["F f", "ef", "פ", "f"],
    ["G g", "ge", "ג", "g"],
    ["H h", "ha", "ה", "h"],
    ["I i", "i", "אִי", "i"],
    ["J j", "je", "ג׳", "j"],
    ["K k", "ka", "ק", "k"],
    ["L l", "el", "ל", "l"],
    ["M m", "em", "מ", "m"],
    ["N n", "en", "נ", "n"],
    ["Ng ng", "nga", "נג", "ng"],
    ["Ny ny", "nya", "ני", "ny"],
    ["O o", "o", "אוֹ", "o"],
    ["P p", "pe", "פּ", "p"],
    ["R r", "er", "ר מתגלגלת", "r"],
    ["S s", "es", "ס", "s"],
    ["Sy sy", "sya", "ש", "sy"],
    ["T t", "te", "ט", "t"],
    ["U u", "u", "אוּ", "u"],
    ["W w", "we", "ו", "w"],
    ["Y y", "ye", "י", "y"],
    ["Z z", "zet", "ז", "z"]
  ],
  /* speaker = female: [regex source, flags, replacement] */
  gender: [],
  words: `hello|Halo / Selamat siang||הלו / סלאמט סיאנג
bye|Sampai jumpa||סמפאי ג׳ומפה
morning|Selamat pagi||סלאמט פאגי
thanks|Terima kasih||טרימה קאסיה
please|Tolong||טולונג
sorry|Maaf||מאאף
yes|Ya||יה
no|Tidak||טידאק
howareyou|Apa kabar?||אפה קבאר
good|Baik||באיק
ok|Oke||אוקה
n1|Satu||סאטו
n2|Dua||דואה
n3|Tiga||טיגה
n4|Empat||אמפאט
n5|Lima||לימה
n6|Enam||אנאם
n7|Tujuh||טוג׳וה
n8|Delapan||דלאפאן
n9|Sembilan||סמבילאן
n10|Sepuluh||ספולוה
n0|Nol||נול
n20|Dua puluh||דואה פולוה
n50|Lima puluh||לימה פולוה
n100|Seratus||סראטוס
n1000|Seribu||סריבו
n11|Sebelas||סבלאס
n12|Dua belas||דואה בלאס
n13|Tiga belas||טיגה בלאס
n14|Empat belas||אמפאט בלאס
n15|Lima belas||לימה בלאס
n16|Enam belas||אנאם בלאס
n17|Tujuh belas||טוג׳וה בלאס
n18|Delapan belas||דלאפאן בלאס
n19|Sembilan belas||סמבילאן בלאס
n30|Tiga puluh||טיגה פולוה
n40|Empat puluh||אמפאט פולוה
n60|Enam puluh||אנאם פולוה
n70|Tujuh puluh||טוג׳וה פולוה
n80|Delapan puluh||דלאפאן פולוה
n90|Sembilan puluh||סמבילאן פולוה
n200|Dua ratus||דואה ראטוס
n500|Lima ratus||לימה ראטוס
n10000|Sepuluh ribu||ספולוה ריבו
water|Air||איר
toilet|Toilet||טואילט
where|Di mana?||די מאנה
howmuch|Berapa?||ברפה
this|Ini||איני
friend|Teman||טמאן
food|Makanan||מקאנן
bread|Roti||רוטי
coffee|Kopi||קופי
tea|Teh||טה
chicken|Ayam||איאם
fish|Ikan||איקן
rice|Nasi||נאסי
beer|Bir||ביר
bill|Tagihan||טגיהן
tasty|Enak||אנאק
egg|Telur||טלור
fruit|Buah||בואה
veg|Sayur||סאיור
meat|Daging||דאגינג
milk|Susu||סוסו
spicy|Pedas||פדאס
restaurant|Restoran||רסטורן
ice|Es||אס
taxi|Taksi||טקסי
bus|Bus||בוס
train|Kereta||קרטה
airport|Bandara||בנדרה
hotel|Hotel||הוטל
left|Kiri||קירי
right|Kanan||קאנן
straight|Lurus||לורוס
stop|Berhenti||ברהנטי
ticket|Tiket||טיקט
money|Uang||אואנג
expensive|Mahal||מהאל
cheap|Murah||מורה
market|Pasar||פאסר
pharmacy|Apotek||אפוטק
open|Buka||בוקה
closed|Tutup||טוטופ
help|Tolong!||טולונג
police|Polisi||פוליסי
doctor|Dokter||דוקטר
hospital|Rumah sakit||רומה סאקיט
today|Hari ini||הארי איני
tomorrow|Besok||בסוק
yesterday|Kemarin||קמארין
now|Sekarang||סקרנג
t_morning|Pagi||פאגי
t_evening|Sore||סורה
t_night|Malam||מאלם
t_week|Minggu||מינגו
t_month|Bulan||בולן
t_year|Tahun||טאהון
t_hour|Jam||ג׳אם
t_minute|Menit||מניט
p_toilet|Toilet di mana?||טואילט די מאנה
p_cost|Berapa harganya?||ברפה הרגניה
p_nounder|Saya tidak mengerti||סאיה טידאק מנגרטי
p_english|Bisa bahasa Inggris?||ביסה בהאסה אינגריס
p_slow|Tolong bicara pelan-pelan||טולונג ביצ׳ארה פלאן פלאן
p_bill|Minta tagihannya||מינטה טגיהאניה
p_want|Saya mau ini||סאיה מאו איני
p_expensive|Terlalu mahal||טרלאלו מהאל
p_discount|Bisa kurang?||ביסה קורנג
p_address|Tolong antar saya ke alamat ini||טולונג אנטר סאיה קה אלאמט איני
p_hotel|Hotelnya di mana?||הוטלניה די מאנה
p_doctor|Saya butuh dokter||סאיה בוטוה דוקטר
p_police|Panggil polisi!||פנגיל פוליסי
p_israel|Saya dari Israel||סאיה דארי איזראל
p_name|Nama saya ...||נאמה סאיה
p_nice|Senang bertemu Anda||סננג ברטמו אנדה
p_water|Minta air, tolong||מינטה איר, טולונג
p_help|Bisa bantu saya?||ביסה באנטו סאיה
p_what|Ini apa?||איני אפה
p_nospicy|Tidak pedas, ya||טידאק פדאס, יה
room|Kamar||קאמר
key|Kunci||קונצ׳י
bed|Tempat tidur||טמפט טידור
shower|Kamar mandi||קאמר מנדי
towel|Handuk||הנדוק
passport|Paspor||פספור
mon|Senin||סנין
tue|Selasa||סלאסה
wed|Rabu||ראבו
thu|Kamis||קאמיס
fri|Jumat||ג׳ומאט
sat|Sabtu||סבטו
sun|Minggu (hari)||מינגו
red|Merah||מרה
blue|Biru||בירו
green|Hijau||היג׳או
yellow|Kuning||קונינג
black|Hitam||היטם
white|Putih||פוטיה
man|Laki-laki||לאקי לאקי
woman|Perempuan||פרמפואן
child|Anak||אנאק
family|Keluarga||קלוארגה
i|Saya||סאיה
you|Anda||אנדה
head|Kepala||קפאלה
stomach|Perut||פרוט
hand|Tangan||טנגן
pain|Sakit||סאקיט
medicine|Obat||אובט
sick|Sakit (badan)||סאקיט
big|Besar||בסר
small|Kecil||קצ׳יל
hot|Panas||פאנס
cold|Dingin||דינגין
bad|Buruk||בורוק
beautiful|Indah||אינדה
new|Baru||בארו
old|Lama||לאמה
fast|Cepat||צ׳פאט
slow|Pelan||פלאן
near|Dekat||דקאט
far_a|Jauh||ג׳אוה
clean|Bersih||ברסיה
dirty|Kotor||קוטור
tired|Capek||צ׳אפק
hungry|Lapar||לאפר
thirsty|Haus||האוס
happy|Senang||סננג
sad|Sedih||סדיה
easy|Mudah||מודה
difficult|Sulit||סוליט
many|Banyak||באניאק
eat|Makan||מאקן
drink|Minum||מינום
go|Pergi||פרגי
buy|Beli||בלי
speak|Bicara||ביצ׳ארה
sleep|Tidur||טידור
understand|Mengerti||מנגרטי
come|Datang||דאטנג
want|Mau||מאו
need|Butuh||בוטוה
know|Tahu||טאהו
see|Lihat||ליהאט
hear|Dengar||דנגר
give|Beri||ברי
take|Ambil||אמביל
pay|Bayar||באיאר
wait|Tunggu||טונגו
walk|Jalan kaki||ג׳אלן קאקי
read|Baca||באצ׳ה
write|Tulis||טוליס
love|Cinta||צ׳ינטה
work|Kerja||קרג׳ה
swim|Berenang||ברנאנג
c_table|Meja untuk dua orang||מג׳ה אונטוק דואה אורנג
c_menu|Minta menunya||מינטה מנוניה
c_noice|Tanpa es, ya||טנפה אס, יה
c_nomeat|Saya tidak makan daging||סאיה טידאק מאקן דאגינג
c_allergy|Saya alergi kacang||סאיה אלרגי קאצ׳אנג
c_delicious|Enak sekali!||אנאק סקאלי
c_reserv|Saya sudah pesan kamar||סאיה סודה פסן קאמר
c_wifi|Apa password wifi-nya?||אפה פסוורד וויפיניה
c_checkout|Check-out jam berapa?||צ׳ק-אאוט ג׳אם ברפה
c_howget|Bagaimana ke sana?||בגאימאנה קה סאנה
c_stophere|Berhenti di sini, ya||ברהנטי די סיני, יה
c_far|Jauh?||ג׳אוה
c_card|Bisa bayar pakai kartu?||ביסה באיאר פאקאי קרטו
c_looking|Lihat-lihat saja, terima kasih||ליהאט ליהאט סאג׳ה, טרימה קאסיה
c_yourname|Siapa nama Anda?||סיאפה נאמה אנדה
c_wherefrom|Anda dari mana?||אנדה דארי מאנה
c_seeyou|Sampai nanti||סמפאי נאנטי
c_cheers|Bersulang!||ברסולאנג
c_lost|Saya tersesat||סאיה טרססאט
c_passport|Paspor saya hilang||פספור סאיה הילאנג
c_hurts|Sakit di sini||סאקיט די סיני
c_time|Jam berapa sekarang?||ג׳אם ברפה סקרנג
c_again|Tolong ulangi||טולונג אולנגי
c_write|Bisa ditulis?||ביסה דיטוליס
dog|Anjing||אנג׳ינג
cat|Kucing||קוצ׳ינג
bird|Burung||בורונג
horse|Kuda||קודה
cow|Sapi||סאפי
pig|Babi||באבי
elephant|Gajah||גאג׳ה
monkey|Monyet||מוניט
snake|Ular||אולר
mosquito|Nyamuk||ניאמוק
lion|Singa||סינגה
duck|Bebek||בבק
apple|Apel||אפל
banana|Pisang||פיסנג
orange|Jeruk||ג׳רוק
mango|Mangga||מנגה
pineapple|Nanas||נאנס
watermelon|Semangka||סמנגקה
coconut|Kelapa||קלאפה
grapes|Anggur||אנגור
lemon|Jeruk nipis||ג׳רוק ניפיס
strawberry|Stroberi||סטרוברי
papaya|Pepaya||פפאיה
tomato|Tomat||טומט
potato|Kentang||קנטנג
onion|Bawang bombay||באוואנג בומבאי
garlic|Bawang putih||באוואנג פוטיה
cucumber|Mentimun||מנטימון
carrot|Wortel||וורטל
chili|Cabai||צ׳אבאי
corn|Jagung||ג׳גונג
mushroom|Jamur||ג׳אמור
lettuce|Selada||סלאדה
eggplant|Terong||טרונג
soup|Sup||סופ
salad|Salad||סלאד
noodles|Mi||מי
cheese|Keju||קג׳ו
butter|Mentega||מנטגה
salt|Garam||גארם
sugar|Gula||גולה
cake|Kue||קואה
icecream|Es krim||אס קרים
juice|Jus||ג׳וס
wine|Anggur (minuman)||אנגור
breakfast|Sarapan||סראפן
lunch|Makan siang||מאקן סיאנג
dinner|Makan malam||מאקן מאלם
fork|Garpu||גרפו
spoon|Sendok||סנדוק
knife|Pisau||פיסאו
glass|Gelas||גלאס
plate|Piring||פירינג
bank|Bank||בנק
atm|ATM||אה-טה-אם
beach|Pantai||פנטאי
museum|Museum||מוזאום
temple|Pura||פורה
street|Jalan||ג׳אלן
city|Kota||קוטה
shop|Toko||טוקו
supermarket|Supermarket||סופרמרקט
park|Taman||טאמן
station|Stasiun||סטאסיון
embassy|Kedutaan||קדוטאן
phone|HP (ha-pe)||הא-פה
charger|Casan||צ׳אסן
bag|Tas||טאס
shoes|Sepatu||ספאטו
clothes|Baju||באג׳ו
hat|Topi||טופי
glasses|Kacamata||קאצ׳ה מאטה
map|Peta||פטה
sunscreen|Tabir surya||טאביר סוריה
umbrella|Payung||פאיונג
sf_order|Saya mau pesan||סאיה מאו פסן
sf_recommend|Apa yang enak di sini?||אפה יאנג אנאק די סיני
sf_bottle|Satu botol air, ya||סאטו בוטול איר, יה
sf_isspicy|Ini pedas?||איני פדאס
sf_onemore|Satu lagi, ya||סאטו לאגי, יה
sf_nosugar|Tanpa gula, ya||טנפה גולה, יה
sf_takeaway|Dibungkus, ya||דיבונגקוס, יה
ss_smaller|Ada ukuran yang lebih kecil?||אדה אוקורן יאנג לביה קצ׳יל
ss_try|Boleh saya coba?||בולה סאיה צ׳ובה
ss_two|Saya ambil dua||סאיה אמביל דואה
ss_change|Ada uang kecil?||אדה אואנג קצ׳יל
ss_last|Harga pasnya berapa?||הרגה פאסניה ברפה
ss_bag|Minta kantong plastik||מינטה קנטונג פלסטיק
sm_busstop|Halte bus di mana?||הלטה בוס די מאנה
sm_trainleave|Keretanya berangkat jam berapa?||קרטאניה ברנגקט ג׳אם ברפה
sm_oneticket|Satu tiket, ya||סאטו טיקט, יה
sm_howlong|Berapa lama?||ברפה לאמה
sm_meter|Tolong pakai argo||טולונג פאקאי ארגו
sm_slowdrive|Tolong pelan-pelan||טולונג פלאן פלאן
sm_airport|Saya mau ke bandara||סאיה מאו קה בנדרה
sh_leavebag|Boleh titip tas di sini?||בולה טיטיפ טאס די סיני
sh_ac|AC-nya tidak jalan||אה-צה-ניה טידאק ג׳אלן
sh_breakfast|Sudah termasuk sarapan?||סודה טרמאסוק סראפן
sh_towel|Saya butuh handuk lagi||סאיה בוטוה הנדוק לאגי
sh_taxi|Bisa panggilkan taksi?||ביסה פנגילקן טקסי
sh_late|Boleh check-out lebih lambat?||בולה צ׳ק-אאוט לביה לאמבאט
so_learning|Saya sedang belajar bahasa Indonesia||סאיה סדנג בלאג׳ר בהאסה אינדונזיה
so_thankshelp|Terima kasih atas bantuannya||טרימה קאסיה אטאס בנטואניה
so_photo|Bisa tolong fotokan kami?||ביסה טולונג פוטוקן קאמי
so_like|Saya suka tempat ini||סאיה סוקה טמפט איני
so_vacation|Saya sedang liburan||סאיה סדנג ליבורן
so_howsay|Bagaimana bilangnya?||בגאימאנה בילאנגניה
so_noproblem|Tidak apa-apa||טידאק אפה אפה
so_beautiful|Indah sekali!||אינדה סקאלי
sp_unwell|Saya tidak enak badan||סאיה טידאק אנאק באדן
sp_nearhosp|Rumah sakit terdekat di mana?||רומה סאקיט טרדקאט די מאנה
sp_fever|Saya demam||סאיה דמאם
sp_helpme|Tolong bantu saya||טולונג באנטו סאיה
sp_stolen|Tas saya dicuri||טאס סאיה דיצ׳ורי
sp_embassy|Saya perlu kedutaan Israel||סאיה פרלו קדוטאן איזראל
dt1|Ke mana, Pak?||קה מאנה, פאק
dt2|Ke hotel ini, ya.||קה הוטל איני, יה
dt3|Oke, silakan naik.||אוקה, סילאקן נאיק
dt4|Berapa ongkosnya?||ברפה אונגקוסניה
dt5|Dua ratus ribu.||דואה ראטוס ריבו
dt6|Tolong pakai argo.||טולונג פאקאי ארגו
dt7|Tidak apa-apa.||טידאק אפה אפה
dt8|Berhenti di sini, terima kasih.||ברהנטי די סיני, טרימה קאסיה
dm1|Ini berapa?||איני ברפה
dm2|Tiga ratus.||טיגה ראטוס
dm3|Mahal sekali! Dua ratus, ya?||מהאל סקאלי! דואה ראטוס, יה
dm4|Dua ratus lima puluh, harga pas.||דואה ראטוס לימה פולוה, הרגה פאס
dm5|Oke, saya ambil.||אוקה, סאיה אמביל
dm6|Terima kasih banyak!||טרימה קאסיה באניאק
dr1|Berapa orang?||ברפה אורנג
dr2|Dua orang.||דואה אורנג
dr3|Mau pesan apa?||מאו פסן אפה
dr4|Nasi goreng ayam, tidak pedas.||נאסי גורנג איאם, טידאק פדאס
dr5|Minumnya?||מינומניה
dr6|Air putih saja, terima kasih.||איר פוטיה סאג׳ה, טרימה קאסיה
dr7|Minta tagihannya, ya.||מינטה טגיהאניה, יה
dh1|Selamat siang, saya sudah pesan kamar.||סלאמט סיאנג, סאיה סודה פסן קאמר
dh2|Atas nama siapa?||אטאס נאמה סיאפה
dh3|Atas nama ...||אטאס נאמה
dh4|Paspornya, ya.||פספורניה, יה
dh5|Kamar Anda nomor tiga ratus lima.||קאמר אנדה נומור טיגה ראטוס לימה
dh6|Sarapan jam berapa?||סראפן ג׳אם ברפה
dh7|Dari jam tujuh sampai jam sepuluh.||דארי ג׳אם טוג׳וה סמפאי ג׳אם ספולוה
dd1|Permisi, stasiun di mana?||פרמיסי, סטאסיון די מאנה
dd2|Lurus saja, lalu belok kiri.||לורוס סאג׳ה, לאלו בלוק קירי
dd3|Jauh dari sini?||ג׳אוה דארי סיני
dd4|Tidak, jalan kaki lima menit.||טידאק, ג׳אלן קאקי לימה מניט
dd5|Terima kasih banyak!||טרימה קאסיה באניאק
da1|Apa tujuan kunjungan Anda?||אפה טוג׳ואן קונג׳ונגן אנדה
da2|Berapa lama Anda tinggal?||ברפה לאמה אנדה טינגל
da3|Dua minggu.||דואה מינגו
da4|Selamat datang!||סלאמט דאטנג
dp1|Sakitnya di mana?||סאקיטניה די מאנה
dp2|Minum obat ini dua kali sehari.||מינום אובט איני דואה קאלי סהארי
dp4|Semoga cepat sembuh!||סמוגה צ׳פאט סמבוה
ds1|Saya mau kartu SIM dengan internet.||סאיה מאו קרטו סים דנגן אינטרנט
ds2|Untuk berapa hari?||אונטוק ברפה הארי
ds3|Untuk sepuluh hari.||אונטוק ספולוה הארי
ds4|Sudah siap, sekarang Anda bisa internetan.||סודה סיאפ, סקרנג אנדה ביסה אינטרנטן
dc1|Ada yang bisa dibantu?||אדה יאנג ביסה דיבנטו
dc2|Ada yang warna biru?||אדה יאנג וורנה בירו
dc3|Ada, ukuran berapa?||אדה, אוקורן ברפה
dc4|Ukuran M.||אוקורן אם
dc5|Tentu, kamar pas ada di sana.||טנטו, קאמר פאס אדה די סאנה
dg1|Saya mau pesan tur untuk besok.||סאיה מאו פסן טור אונטוק בסוק
dg2|Turnya berangkat jam delapan pagi.||טורניה ברנגקט ג׳אם דלאפאן פאגי
dg3|Sudah termasuk makan siang?||סודה טרמאסוק מאקן סיאנג
dg4|Ya, air minum juga.||יה, איר מינום ג׳וגה
dg5|Bagus, untuk dua orang, ya.||באגוס, אונטוק דואה אורנג, יה
w_weather|Cuaca||צ׳ואצ׳ה
w_sun|Matahari||מאטהארי
w_rain|Hujan||הוג׳אן
w_wind|Angin||אנגין
w_cloud|Awan||אוואן
w_snow|Salju||סלג׳ו
w_storm|Badai||באדאי
w_humid|Lembap||למבאפ
j_teacher|Guru||גורו
j_driver|Sopir||סופיר
j_waiter|Pelayan||פלאיאן
j_cook|Koki||קוקי
j_student|Mahasiswa||מהאסיסווה
j_engineer|Insinyur||אינסיניור
j_nurse|Perawat||פראוואט
j_seller|Penjual||פנג׳ואל
j_guide|Pemandu wisata||פמנדו ויסאטה
j_pharmacist|Apoteker||אפוטקר
e_angry|Marah||מארה
e_scared|Takut||טאקוט
e_bored|Bosan||בוסן
e_worried|Khawatir||חאוואטיר
e_surprised|Kaget||קאגט
e_calm|Tenang||טנאנג
e_excited|Semangat||סמנגאט
e_love|Jatuh cinta||ג׳אטוה צ׳ינטה
dir_north|Utara||אוטארה
dir_south|Selatan||סלאטן
dir_east|Timur||טימור
dir_west|Barat||בארט
dir_corner|Pojok||פוג׳וק
dir_light|Lampu merah||לאמפו מרה
dir_behind|Di belakang||די בלאקנג
dir_front|Di depan||די דפן
dir_next|Di sebelah||די סבלה
dir_back|Kembali||קמבאלי
dir_up|Atas||אטאס
dir_down|Bawah||באווה`
});

/* ---- numbers & prices (0–999,999) in Indonesian → tokens [text, roman, hebrew]. se- = one (seratus, seribu); prices in rupiah ---- */
NW.id = (() => {
  const O = [['nol', 'נול'], ['satu', 'סאטו'], ['dua', 'דואה'], ['tiga', 'טיגה'], ['empat', 'אמפאט'], ['lima', 'לימה'], ['enam', 'אנאם'], ['tujuh', 'טוג׳וה'], ['delapan', 'דלאפאן'], ['sembilan', 'סמבילאן']];
  function u100(n, out) {
    const t = Math.floor(n / 10), u = n % 10;
    if (t === 0) { if (u) out.push(O[u]); return; }
    if (t === 1) { out.push(u === 0 ? ['sepuluh', 'ספולוה'] : u === 1 ? ['sebelas', 'סבלאס'] : O[u]); if (u > 1) out.push(['belas', 'בלאס']); return; }
    out.push(O[t], ['puluh', 'פולוה']); if (u) out.push(O[u]);
  }
  function u1000(n, out) {
    const h = Math.floor(n / 100), r = n % 100;
    if (h === 1) out.push(['seratus', 'סראטוס']); else if (h) out.push(O[h], ['ratus', 'ראטוס']);
    if (r) u100(r, out);
  }
  return (n, cur) => {
    const out = cur ? [] : [];
    if (n === 0) out.push(O[0]);
    else {
      const th = Math.floor(n / 1000), r = n % 1000;
      if (th === 1) out.push(['seribu', 'סריבו']); else if (th) { u1000(th, out); out.push(['ribu', 'ריבו']); }
      if (r) u1000(r, out);
    }
    if (cur) out.push(['rupiah', 'רופיה']);
    return out.map(a => tk(a[0], a[0], a[1]));
  };
})();
NUM.id = { tokens: (n, cur) => NW.id(n, cur) };
