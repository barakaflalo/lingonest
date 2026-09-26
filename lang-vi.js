/* ===== LingoNest — lang-vi.js : Vietnamese content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('vi', {
  ver: '1.19.0',
  curSym: "₫",
  country: {"he": "וייטנאם", "en": "Vietnam", "ru": "Вьетнам", "es": "Vietnam", "ar": "فيتنام"},
  emergency: [
    ["🚓", {"he": "משטרה", "en": "Police", "ru": "Полиция", "es": "Policía", "ar": "الشرطة"}, "113"],
    ["🚒", {"he": "כבאות", "en": "Fire", "ru": "Пожарные", "es": "Bomberos", "ar": "الإطفاء"}, "114"],
    ["🚑", {"he": "אמבולנס", "en": "Ambulance", "ru": "Скорая", "es": "Ambulancia", "ar": "الإسعاف"}, "115"]
  ],
  tips: [
    {"t": {"he": "כינויים לפי גיל", "en": "Pronouns by age"}, "b": {"he": "בווייטנאמית \"אתה\" תלוי בגיל ובמגדר: anh (גבר מעט מבוגר), chị (אישה מעט מבוגרת), em (צעיר ממך), cô / chú (מבוגרים). כשלא בטוחים — bạn (חבר) מתאים לבני גילך, והאפליקציה משתמשת בו.", "en": "\"You\" depends on age and gender: anh (slightly older man), chị (slightly older woman), em (younger), cô / chú (elders). When unsure, bạn (friend) works for peers — the app uses it."}, "ex": [["Chào anh!", "", "צ׳או אן", "שלום! (לגבר)", "Hello! (to a man)"], ["Chào chị!", "", "צ׳או צ׳י", "שלום! (לאישה)", "Hello! (to a woman)"]]},
    {"t": {"he": "אין נטיות", "en": "No conjugation"}, "b": {"he": "הפועל לא משתנה. זמנים מסמנים במילה קטנה: đã (עבר), đang (עכשיו), sẽ (עתיד). Tôi đã ăn = אכלתי, Tôi sẽ đi = אלך.", "en": "Verbs never change. Mark time with a small word: đã (past), đang (now), sẽ (future). Tôi đã ăn = I ate, Tôi sẽ đi = I will go."}, "ex": [["Tôi đang học", "", "טוי דאנג הוק", "אני לומד (עכשיו)", "I'm studying"]]},
    {"t": {"he": "כסף: אפסים רבים", "en": "Money: lots of zeros"}, "b": {"he": "הדונג קטן מאוד — מחירים בעשרות ומאות אלפים. אומרים \"năm mươi nghìn\" (50 אלף) ולפעמים רק \"năm mươi\" — והאלפים מובנים. שימו לב שהשטרות של 20,000 ו-500,000 דומים בצבע!", "en": "The đồng is tiny — prices run in tens and hundreds of thousands. People say \"năm mươi nghìn\" (50,000) or just \"năm mươi\", the thousands implied. The 20,000 and 500,000 notes look alike!"}, "ex": [["Năm mươi nghìn", "", "נאם מואי נגין", "50,000", "50,000"]]},
    {"t": {"he": "צפון מול דרום", "en": "North vs. south"}, "b": {"he": "בהאנוי d, gi ו-r נשמעים ז, ובסייגון — י ו-ר. \"אלף\" בצפון nghìn ובדרום ngàn. מבינים את שניהם — והאפליקציה משתמשת במבטא הצפוני.", "en": "In Hanoi d, gi and r sound like z; in Saigon like y and r. \"Thousand\" is nghìn in the north, ngàn in the south. Both are understood; the app uses the northern accent."}, "ex": [["Một nghìn / một ngàn", "", "מוט נגין / מוט נגאן", "אלף (צפון / דרום)", "a thousand (north / south)"]]},
    {"t": {"he": "פו, באן מי וקפה עם חלב מרוכז", "en": "Phở, bánh mì and cà phê sữa đá"}, "b": {"he": "שלוש מילים שכל מטייל צריך: phở (מרק אטריות), bánh mì (הכריך המפורסם), ו-cà phê sữa đá (קפה קר עם חלב מרוכז). בדוכני רחוב יושבים על שרפרפים נמוכים — זו החוויה.", "en": "Three words every traveller needs: phở (noodle soup), bánh mì (the famous sandwich) and cà phê sữa đá (iced coffee with condensed milk). Street stalls mean tiny plastic stools — that's the experience."}, "ex": [["Cà phê sữa đá", "", "קה פה סואה דה", "קפה קר עם חלב מרוכז", "Iced milk coffee"]]},
    {"t": {"he": "Không sao — הכול בסדר", "en": "Không sao — no worries"}, "b": {"he": "Không sao (\"אין מה\") = אין בעיה, הכול טוב. Không (חונג) לבד = לא, וגם אפס, וגם מסיים שאלות: Bạn khỏe không? (אתה בריא?). מילה אחת, המון שימושים.", "en": "Không sao = no problem. Không alone = no, zero, and it ends yes/no questions: Bạn khỏe không? One word, many uses."}, "ex": [["Không sao", "", "חונג סאו", "אין בעיה", "No problem"]]}
  ],
  note: {"he": "וייטנאמית נכתבת באותיות לטיניות (הכתב \"קוֹק נגוּ\"), עם הרבה סימנים: חלקם משנים את התנועה (ă, â, ê, ô, ơ, ư) וחלקם הם 6 הטונים. đ = ד. x = ס, ו-nh/ng/ch/tr/gi הם צירופים עם צליל משלהם. האפליקציה מלמדת את המבטא הצפוני (האנוי).", "en": "Vietnamese uses Latin letters (Quốc ngữ) with many marks: some change the vowel (ă, â, ê, ô, ơ, ư), others are the 6 tones. đ = d, x = s, and nh/ng/ch/tr/gi have their own sounds. The app teaches the northern (Hanoi) accent.", "ru": "Вьетнамский пишется латиницей с множеством знаков: часть меняет гласную, часть — 6 тонов. đ = д, x = с. Северный (ханойский) выговор.", "es": "El vietnamita usa letras latinas con muchos signos: unos cambian la vocal y otros marcan los 6 tonos. đ = d, x = s. Acento del norte (Hanói).", "ar": "تُكتب الفيتنامية بحروف لاتينية مع علامات كثيرة: بعضها يغيّر الحركة وبعضها النغمات الست. đ = د، x = س. لهجة الشمال (هانوي)."},
  alpha: [
    ["A a", "a", "אַ", "a"],
    ["Ă ă", "ă", "אַ קצרה", "ă"],
    ["Â â", "â", "אֶ עמומה קצרה", "â"],
    ["B b", "ba", "ב", "b"],
    ["C c", "ca", "ק", "c"],
    ["D d", "da", "ז (צפון) / י (דרום)", "d"],
    ["Đ đ", "đa", "ד", "đ"],
    ["E e", "e", "אֶ פתוחה", "e"],
    ["Ê ê", "ê", "אֵה סגורה", "ê"],
    ["G g", "ga", "ג", "g"],
    ["H h", "ha", "ה", "h"],
    ["I i", "i", "אִי", "i"],
    ["K k", "ka", "ק", "k"],
    ["L l", "la", "ל", "l"],
    ["M m", "ma", "מ", "m"],
    ["N n", "na", "נ", "n"],
    ["O o", "o", "אוֹ פתוחה", "o"],
    ["Ô ô", "ô", "אוֹ סגורה", "ô"],
    ["Ơ ơ", "ơ", "אֶ עמומה (כמו ə)", "ơ"],
    ["P p", "pa", "פּ", "p"],
    ["Q q", "qua", "קו", "q"],
    ["R r", "ra", "ז (צפון) / ר (דרום)", "r"],
    ["S s", "sa", "ס / ש", "s"],
    ["T t", "ta", "ט", "t"],
    ["U u", "u", "אוּ", "u"],
    ["Ư ư", "ư", "אוּ בשפתיים ישרות", "ư"],
    ["V v", "va", "ו (V)", "v"],
    ["X x", "xa", "ס", "x"],
    ["Y y", "y", "אִי", "y"]
  ],
  tones: [["ma", "ma", {"he": "שטוח — בינוני וישר", "en": "Level — mid, flat", "ru": "Ровный", "es": "Llano", "ar": "مستوية"}, {"he": "רוח רפאים", "en": "ghost", "ru": "призрак", "es": "fantasma", "ar": "شبح"}], ["mà", "mà", {"he": "יורד — נמוך ויורד", "en": "Falling — low, falling", "ru": "Нисходящий", "es": "Descendente", "ar": "هابطة"}, {"he": "אבל", "en": "but", "ru": "но", "es": "pero", "ar": "لكن"}], ["má", "má", {"he": "עולה — גבוה ועולה", "en": "Rising — high, rising", "ru": "Восходящий", "es": "Ascendente", "ar": "صاعدة"}, {"he": "אמא (בדרום) / לחי", "en": "mother (south) / cheek", "ru": "мама / щека", "es": "madre / mejilla", "ar": "أم / خد"}], ["mả", "mả", {"he": "שאלה — יורד ועולה", "en": "Dipping — falls then rises", "ru": "Нисходяще-восходящий", "es": "Descendente-ascendente", "ar": "هابطة ثم صاعدة"}, {"he": "קבר", "en": "tomb", "ru": "могила", "es": "tumba", "ar": "قبر"}], ["mã", "mã", {"he": "שבור — עולה עם עצירה בגרון", "en": "Broken — rising with a glottal break", "ru": "Прерывистый", "es": "Quebrado", "ar": "مكسورة"}, {"he": "סוס (ספרותי) / קוד", "en": "horse (literary) / code", "ru": "лошадь / код", "es": "caballo / código", "ar": "حصان / رمز"}], ["mạ", "mạ", {"he": "כבד — נמוך וקטוע", "en": "Heavy — low, cut short", "ru": "Тяжёлый", "es": "Pesado", "ar": "ثقيلة"}, {"he": "שתיל אורז", "en": "rice seedling", "ru": "рисовый росток", "es": "plántula de arroz", "ar": "شتلة أرز"}]],
  toneNote: {"he": "בווייטנאמית 6 טונים, וכל אחד משנה את המשמעות לגמרי. הסימן מעל/מתחת לתנועה הוא הטון. שמע איך \"מא\" אחת הופכת לשש מילים.", "en": "Vietnamese has 6 tones, each changing the meaning completely. The mark above/below the vowel is the tone. Hear how one \"ma\" becomes six words.", "ru": "Во вьетнамском 6 тонов; знак над или под гласной — тон.", "es": "El vietnamita tiene 6 tonos; la marca sobre o bajo la vocal es el tono.", "ar": "في الفيتنامية 6 نغمات؛ العلامة فوق أو تحت الحركة هي النغمة."},
  /* speaker = female: [regex source, flags, replacement] */
  gender: [],
  words: `hello|Xin chào||סין צ׳או
bye|Tạm biệt||טאם ביאט
morning|Chào buổi sáng||צ׳או בואוי סאנג
thanks|Cảm ơn||קאם און
please|Làm ơn||לאם און
sorry|Xin lỗi||סין לוי
yes|Vâng / Có||ואנג / קו
no|Không||חונג
howareyou|Bạn khỏe không?||באן חואה חונג
good|Khỏe / Tốt||חואה / טוט
ok|Được||דואוק
n1|Một||מוט
n2|Hai||האי
n3|Ba||בה
n4|Bốn||בון
n5|Năm||נאם
n6|Sáu||סאו
n7|Bảy||באי
n8|Tám||טאם
n9|Chín||צ׳ין
n10|Mười||מואי
n0|Không||חונג
n20|Hai mươi||האי מואי
n50|Năm mươi||נאם מואי
n100|Một trăm||מוט צ׳אם
n1000|Một nghìn||מוט נגין
n11|Mười một||מואי מוט
n12|Mười hai||מואי האי
n13|Mười ba||מואי בה
n14|Mười bốn||מואי בון
n15|Mười lăm||מואי לאם
n16|Mười sáu||מואי סאו
n17|Mười bảy||מואי באי
n18|Mười tám||מואי טאם
n19|Mười chín||מואי צ׳ין
n30|Ba mươi||בה מואי
n40|Bốn mươi||בון מואי
n60|Sáu mươi||סאו מואי
n70|Bảy mươi||באי מואי
n80|Tám mươi||טאם מואי
n90|Chín mươi||צ׳ין מואי
n200|Hai trăm||האי צ׳אם
n500|Năm trăm||נאם צ׳אם
n10000|Mười nghìn||מואי נגין
water|Nước||נואוק
toilet|Nhà vệ sinh||ניה וה סין
where|Ở đâu?||או דאו
howmuch|Bao nhiêu?||באו ניאו
this|Cái này||קאי נאי
friend|Bạn||באן
food|Đồ ăn||דו אן
bread|Bánh mì||באן מי
coffee|Cà phê||קה פה
tea|Trà||צ׳ה
chicken|Gà||גה
fish|Cá||קה
rice|Cơm||קום
beer|Bia||ביה
bill|Hóa đơn||הואה דון
tasty|Ngon||נגון
egg|Trứng||צ׳ונג
fruit|Trái cây||צ׳אי קאי
veg|Rau||ראו
meat|Thịt||טיט
milk|Sữa||סואה
spicy|Cay||קאי
restaurant|Nhà hàng||ניה האנג
ice|Đá||דה
taxi|Taxi||טקסי
bus|Xe buýt||סה בויט
train|Tàu hỏa||טאו הואה
airport|Sân bay||סאן באי
hotel|Khách sạn||חאק סאן
left|Bên trái||בן צ׳אי
right|Bên phải||בן פאי
straight|Đi thẳng||די טאנג
stop|Dừng lại||יונג לאי
ticket|Vé||וה
money|Tiền||טיאן
expensive|Đắt||דאט
cheap|Rẻ||זה
market|Chợ||צ׳ו
pharmacy|Nhà thuốc||ניה טואוק
open|Mở cửa||מו קואה
closed|Đóng cửa||דונג קואה
help|Cứu tôi với!||קיו טוי ווי
police|Cảnh sát||קאן סאט
doctor|Bác sĩ||באק סי
hospital|Bệnh viện||בן ויאן
today|Hôm nay||הום נאי
tomorrow|Ngày mai||נגאי מאי
yesterday|Hôm qua||הום קואה
now|Bây giờ||באי זו
t_morning|Buổi sáng||בואוי סאנג
t_evening|Buổi tối||בואוי טוי
t_night|Ban đêm||באן דם
t_week|Tuần||טואן
t_month|Tháng||טאנג
t_year|Năm (thời gian)||נאם
t_hour|Giờ||זו
t_minute|Phút||פוט
p_toilet|Nhà vệ sinh ở đâu?||ניה וה סין או דאו
p_cost|Cái này bao nhiêu tiền?||קאי נאי באו ניאו טיאן
p_nounder|Tôi không hiểu||טוי חונג היאו
p_english|Bạn nói tiếng Anh không?||באן נוי טיאנג אן חונג
p_slow|Làm ơn nói chậm lại||לאם און נוי צ׳אם לאי
p_bill|Làm ơn tính tiền||לאם און טין טיאן
p_want|Tôi muốn cái này||טוי מואן קאי נאי
p_expensive|Đắt quá||דאט קואה
p_discount|Bớt được không?||בוט דואוק חונג
p_address|Làm ơn đưa tôi đến địa chỉ này||לאם און דואה טוי דן דיה צ׳י נאי
p_hotel|Khách sạn ở đâu?||חאק סאן או דאו
p_doctor|Tôi cần bác sĩ||טוי קאן באק סי
p_police|Gọi cảnh sát!||גוי קאן סאט
p_israel|Tôi đến từ Israel||טוי דן טו איסראל
p_name|Tên tôi là ...||טן טוי לה
p_nice|Rất vui được gặp bạn||זאט וואי דואוק גאפ באן
p_water|Làm ơn cho tôi nước||לאם און צ׳ו טוי נואוק
p_help|Bạn giúp tôi được không?||באן זופ טוי דואוק חונג
p_what|Cái này là gì?||קאי נאי לה זי
p_nospicy|Không cay, làm ơn||חונג קאי, לאם און
room|Phòng||פונג
key|Chìa khóa||צ׳יה חואה
bed|Giường||זואנג
shower|Vòi sen||ווי סן
towel|Khăn tắm||חאן טאם
passport|Hộ chiếu||הו צ׳יאו
mon|Thứ hai||טו האי
tue|Thứ ba||טו בה
wed|Thứ tư||טו טו
thu|Thứ năm||טו נאם
fri|Thứ sáu||טו סאו
sat|Thứ bảy||טו באי
sun|Chủ nhật||צ׳ו ניאט
red|Màu đỏ||מאו דו
blue|Màu xanh dương||מאו סאן זואנג
green|Màu xanh lá||מאו סאן לה
yellow|Màu vàng||מאו ואנג
black|Màu đen||מאו דן
white|Màu trắng||מאו צ׳אנג
man|Đàn ông||דאן אונג
woman|Phụ nữ||פו נו
child|Trẻ em||צ׳ה אם
family|Gia đình||זה דין
i|Tôi||טוי
you|Bạn||באן
head|Đầu||דאו
stomach|Bụng||בונג
hand|Tay||טאי
pain|Đau||דאו
medicine|Thuốc||טואוק
sick|Bị ốm||בי אום
big|To||טו
small|Nhỏ||ניו
hot|Nóng||נונג
cold|Lạnh||לאן
bad|Xấu||סאו
beautiful|Đẹp||דפ
new|Mới||מוי
old|Cũ||קו
fast|Nhanh||ניאן
slow|Chậm||צ׳אם
near|Gần||גאן
far_a|Xa||סה
clean|Sạch||סאק
dirty|Bẩn||באן
tired|Mệt||מט
hungry|Đói||דוי
thirsty|Khát||חאט
happy|Vui||וואי
sad|Buồn||בואון
easy|Dễ||זה
difficult|Khó||חו
many|Nhiều||ניאו
eat|Ăn||אן
drink|Uống||אואונג
go|Đi||די
buy|Mua||מואה
speak|Nói||נוי
sleep|Ngủ||נגו
understand|Hiểu||היאו
come|Đến||דן
want|Muốn||מואן
need|Cần||קאן
know|Biết||ביאט
see|Nhìn||נין
hear|Nghe||נגה
give|Cho||צ׳ו
take|Lấy||לאי
pay|Trả tiền||צ׳ה טיאן
wait|Chờ||צ׳ו
walk|Đi bộ||די בו
read|Đọc||דוק
write|Viết||ויאט
love|Yêu||יאו
work|Làm việc||לאם ויאק
swim|Bơi||בוי
c_table|Cho tôi bàn hai người||צ׳ו טוי באן האי נגואוי
c_menu|Cho tôi xem thực đơn||צ׳ו טוי סם טוק דון
c_noice|Không đá, làm ơn||חונג דה, לאם און
c_nomeat|Tôi không ăn thịt||טוי חונג אן טיט
c_allergy|Tôi bị dị ứng đậu phộng||טוי בי זי אונג דאו פונג
c_delicious|Ngon quá!||נגון קואה
c_reserv|Tôi đã đặt phòng||טוי דה דאט פונג
c_wifi|Mật khẩu wifi là gì?||מאט חאו וויפי לה זי
c_checkout|Mấy giờ phải trả phòng?||מאי זו פאי צ׳ה פונג
c_howget|Đi đến đó bằng cách nào?||די דן דו באנג קאק נאו
c_stophere|Dừng ở đây, làm ơn||יונג או דאי, לאם און
c_far|Có xa không?||קו סה חונג
c_card|Trả bằng thẻ được không?||צ׳ה באנג טה דואוק חונג
c_looking|Tôi chỉ xem thôi, cảm ơn||טוי צ׳י סם טוי, קאם און
c_yourname|Bạn tên là gì?||באן טן לה זי
c_wherefrom|Bạn đến từ đâu?||באן דן טו דאו
c_seeyou|Hẹn gặp lại||הן גאפ לאי
c_cheers|Một, hai, ba, dô!||מוט, האי, בה, יו
c_lost|Tôi bị lạc||טוי בי לאק
c_passport|Tôi bị mất hộ chiếu||טוי בי מאט הו צ׳יאו
c_hurts|Tôi đau ở đây||טוי דאו או דאי
c_time|Mấy giờ rồi?||מאי זו זוי
c_again|Làm ơn nói lại||לאם און נוי לאי
c_write|Bạn viết ra được không?||באן ויאט זה דואוק חונג
dog|Con chó||קון צ׳ו
cat|Con mèo||קון מאו
bird|Con chim||קון צ׳ים
horse|Con ngựa||קון נגואה
cow|Con bò||קון בו
pig|Con lợn||קון לון
elephant|Con voi||קון ווי
monkey|Con khỉ||קון חי
snake|Con rắn||קון זאן
mosquito|Con muỗi||קון מואוי
lion|Con sư tử||קון סו טו
duck|Con vịt||קון ויט
apple|Táo||טאו
banana|Chuối||צ׳ואוי
orange|Cam||קאם
mango|Xoài||סואי
pineapple|Dứa||זואה
watermelon|Dưa hấu||זואה האו
coconut|Dừa||זואה
grapes|Nho||ניו
lemon|Chanh||צ׳אן
strawberry|Dâu tây||זאו טאי
papaya|Đu đủ||דו דו
tomato|Cà chua||קה צ׳ואה
potato|Khoai tây||חואי טאי
onion|Hành tây||האן טאי
garlic|Tỏi||טוי
cucumber|Dưa chuột||זואה צ׳ואוט
carrot|Cà rốt||קה זוט
chili|Ớt||אוט
corn|Ngô||נגו
mushroom|Nấm||נאם
lettuce|Xà lách||סה לאק
eggplant|Cà tím||קה טים
soup|Canh / Súp||סופ
salad|Gỏi / Salad||גוי
noodles|Phở / Mì||פו / מי
cheese|Phô mai||פו מאי
butter|Bơ||בו
salt|Muối||מואוי
sugar|Đường||דואנג
cake|Bánh ngọt||באן נגוט
icecream|Kem||קם
juice|Nước ép||נואוק אפ
wine|Rượu vang||זואו ואנג
breakfast|Bữa sáng||בואה סאנג
lunch|Bữa trưa||בואה צ׳ואה
dinner|Bữa tối||בואה טוי
fork|Nĩa||ניאה
spoon|Thìa||טיאה
knife|Dao||זאו
glass|Cốc||קוק
plate|Đĩa||דיאה
bank|Ngân hàng||נגאן האנג
atm|Cây ATM||קאי איי-טי-אם
beach|Bãi biển||באי ביאן
museum|Bảo tàng||באו טאנג
temple|Chùa||צ׳ואה
street|Đường phố||דואנג פו
city|Thành phố||טאן פו
shop|Cửa hàng||קואה האנג
supermarket|Siêu thị||סיאו טי
park|Công viên||קונג ויאן
station|Nhà ga||ניה גה
embassy|Đại sứ quán||דאי סו קואן
phone|Điện thoại||דיאן טואי
charger|Sạc||סאק
bag|Túi||טואי
shoes|Giày||זאי
clothes|Quần áo||קואן או
hat|Mũ||מו
glasses|Kính||קין
map|Bản đồ||באן דו
sunscreen|Kem chống nắng||קם צ׳ונג נאנג
umbrella|Ô||או
sf_order|Tôi muốn gọi món||טוי מואן גוי מון
sf_recommend|Bạn gợi ý món gì?||באן גוי אי מון זי
sf_bottle|Cho tôi một chai nước||צ׳ו טוי מוט צ׳אי נואוק
sf_isspicy|Món này có cay không?||מון נאי קו קאי חונג
sf_onemore|Thêm một cái nữa, làm ơn||טם מוט קאי נואה, לאם און
sf_nosugar|Không đường, làm ơn||חונג דואנג, לאם און
sf_takeaway|Cho tôi mang về||צ׳ו טוי מאנג וה
ss_smaller|Có cỡ nhỏ hơn không?||קו קו ניו הון חונג
ss_try|Tôi thử được không?||טוי טו דואוק חונג
ss_two|Tôi lấy hai cái||טוי לאי האי קאי
ss_change|Bạn có tiền lẻ không?||באן קו טיאן לה חונג
ss_last|Giá cuối cùng là bao nhiêu?||זה קואוי קונג לה באו ניאו
ss_bag|Cho tôi cái túi||צ׳ו טוי קאי טואי
sm_busstop|Trạm xe buýt ở đâu?||צ׳אם סה בויט או דאו
sm_trainleave|Mấy giờ tàu chạy?||מאי זו טאו צ׳אי
sm_oneticket|Cho tôi một vé||צ׳ו טוי מוט וה
sm_howlong|Mất bao lâu?||מאט באו לאו
sm_meter|Làm ơn bật đồng hồ||לאם און באט דונג הו
sm_slowdrive|Làm ơn đi chậm lại||לאם און די צ׳אם לאי
sm_airport|Tôi muốn đi sân bay||טוי מואן די סאן באי
sh_leavebag|Tôi gửi túi ở đây được không?||טוי גואי טואי או דאי דואוק חונג
sh_ac|Máy lạnh không hoạt động||מאי לאן חונג הואט דונג
sh_breakfast|Có bao gồm bữa sáng không?||קו באו גום בואה סאנג חונג
sh_towel|Cho tôi thêm một cái khăn||צ׳ו טוי טם מוט קאי חאן
sh_taxi|Gọi giúp tôi taxi được không?||גוי זופ טוי טקסי דואוק חונג
sh_late|Tôi trả phòng muộn được không?||טוי צ׳ה פונג מואון דואוק חונג
so_learning|Tôi đang học tiếng Việt||טוי דאנג הוק טיאנג ויאט
so_thankshelp|Cảm ơn bạn đã giúp đỡ||קאם און באן דה זופ דו
so_photo|Chụp giúp chúng tôi một tấm ảnh được không?||צ׳ופ זופ צ׳ונג טוי מוט טאם אן דואוק חונג
so_like|Tôi thích nơi này||טוי טיק נוי נאי
so_vacation|Tôi đi du lịch||טוי די זו ליק
so_howsay|Cái này nói thế nào?||קאי נאי נוי טה נאו
so_noproblem|Không sao||חונג סאו
so_beautiful|Đẹp quá!||דפ קואה
sp_unwell|Tôi thấy không khỏe||טוי טאי חונג חואה
sp_nearhosp|Bệnh viện gần nhất ở đâu?||בן ויאן גאן ניאט או דאו
sp_fever|Tôi bị sốt||טוי בי סוט
sp_helpme|Làm ơn giúp tôi||לאם און זופ טוי
sp_stolen|Tôi bị mất cắp túi||טוי בי מאט קאפ טואי
sp_embassy|Tôi cần đại sứ quán Israel||טוי קאן דאי סו קואן איסראל
dt1|Đi đâu ạ?||די דאו א
dt2|Khách sạn này, làm ơn.||חאק סאן נאי, לאם און
dt3|Vâng, mời lên xe.||ואנג, מוי לן סה
dt4|Bao nhiêu tiền?||באו ניאו טיאן
dt5|Hai trăm nghìn.||האי צ׳אם נגין
dt6|Làm ơn bật đồng hồ.||לאם און באט דונג הו
dt7|Không sao.||חונג סאו
dt8|Dừng ở đây, cảm ơn.||יונג או דאי, קאם און
dm1|Cái này giá bao nhiêu?||קאי נאי זה באו ניאו
dm2|Ba trăm.||בה צ׳אם
dm3|Đắt quá! Hai trăm nhé?||דאט קואה! האי צ׳אם ניה
dm4|Hai trăm rưỡi, giá cuối.||האי צ׳אם זואוי, זה קואוי
dm5|Được, tôi lấy.||דואוק, טוי לאי
dm6|Cảm ơn nhiều!||קאם און ניאו
dr1|Mấy người ạ?||מאי נגואוי א
dr2|Hai người.||האי נגואוי
dr3|Anh chị dùng gì?||אן צ׳י זונג זי
dr4|Cơm chiên gà, không cay.||קום צ׳יאן גה, חונג קאי
dr5|Uống gì ạ?||אואונג זי א
dr6|Chỉ nước thôi, cảm ơn.||צ׳י נואוק טוי, קאם און
dr7|Tính tiền, làm ơn.||טין טיאן, לאם און
dh1|Xin chào, tôi đã đặt phòng.||סין צ׳או, טוי דה דאט פונג
dh2|Tên gì ạ?||טן זי א
dh3|Tên là ...||טן לה
dh4|Cho xem hộ chiếu, làm ơn.||צ׳ו סם הו צ׳יאו, לאם און
dh5|Phòng của anh là ba trăm linh năm.||פונג קואה אן לה בה צ׳אם לין נאם
dh6|Bữa sáng lúc mấy giờ?||בואה סאנג לוק מאי זו
dh7|Từ bảy giờ đến mười giờ.||טו באי זו דן מואי זו
dd1|Xin lỗi, nhà ga ở đâu?||סין לוי, ניה גה או דאו
dd2|Đi thẳng, rồi rẽ trái.||די טאנג, זוי זה צ׳אי
dd3|Có xa đây không?||קו סה דאי חונג
dd4|Không, đi bộ năm phút.||חונג, די בו נאם פוט
dd5|Cảm ơn nhiều lắm!||קאם און ניאו לאם
da1|Mục đích chuyến đi của bạn là gì?||מוק דיק צ׳ויאן די קואה באן לה זי
da2|Bạn ở lại bao lâu?||באן או לאי באו לאו
da3|Hai tuần.||האי טואן
da4|Chào mừng!||צ׳או מונג
dp1|Bạn đau ở đâu?||באן דאו או דאו
dp2|Uống thuốc này ngày hai lần.||אואונג טואוק נאי נגאי האי לאן
dp4|Mau khỏe nhé!||מאו חואה ניה
ds1|Tôi muốn mua sim có internet.||טוי מואן מואה סים קו אינטרנט
ds2|Dùng mấy ngày?||זונג מאי נגאי
ds3|Mười ngày.||מואי נגאי
ds4|Xong rồi, giờ bạn có internet rồi.||סונג זוי, זו באן קו אינטרנט זוי
dc1|Anh cần gì ạ?||אן קאן זי א
dc2|Cái này có màu xanh dương không?||קאי נאי קו מאו סאן זואנג חונג
dc3|Có ạ, cỡ nào?||קו א, קו נאו
dc4|Cỡ M.||קו אם
dc5|Dạ, phòng thử đồ ở đằng kia.||זה, פונג טו דו או דאנג קיה
dg1|Tôi muốn đặt tour cho ngày mai.||טוי מואן דאט טור צ׳ו נגאי מאי
dg2|Tour khởi hành lúc tám giờ sáng.||טור חוי האן לוק טאם זו סאנג
dg3|Có bao gồm bữa trưa không?||קו באו גום בואה צ׳ואה חונג
dg4|Có, và cả nước uống nữa.||קו, וה קה נואוק אואונג נואה
dg5|Tuyệt, cho hai người nhé.||טויאט, צ׳ו האי נגואוי ניה
w_weather|Thời tiết||טואי טיאט
w_sun|Mặt trời||מאט צ׳ואי
w_rain|Mưa||מואה
w_wind|Gió||זו
w_cloud|Mây||מאי
w_snow|Tuyết||טויאט
w_storm|Bão||באו
w_humid|Ẩm ướt||אם אואט
j_teacher|Giáo viên||זאו ויאן
j_driver|Tài xế||טאי סה
j_waiter|Phục vụ||פוק וו
j_cook|Đầu bếp||דאו בפ
j_student|Sinh viên||סין ויאן
j_engineer|Kỹ sư||קי סו
j_nurse|Y tá||אי טה
j_seller|Người bán hàng||נגואוי באן האנג
j_guide|Hướng dẫn viên||הואונג זאן ויאן
j_pharmacist|Dược sĩ||זואוק סי
e_angry|Tức giận||טוק זאן
e_scared|Sợ||סו
e_bored|Chán||צ׳אן
e_worried|Lo lắng||לו לאנג
e_surprised|Ngạc nhiên||נגאק ניאן
e_calm|Bình tĩnh||בין טין
e_excited|Hào hứng||האו הונג
e_love|Đang yêu||דאנג יאו
dir_north|Phía bắc||פיה באק
dir_south|Phía nam||פיה נאם
dir_east|Phía đông||פיה דונג
dir_west|Phía tây||פיה טאי
dir_corner|Góc đường||גוק דואנג
dir_light|Đèn giao thông||דן זאו טונג
dir_behind|Phía sau||פיה סאו
dir_front|Phía trước||פיה צ׳ואוק
dir_next|Bên cạnh||בן קאן
dir_back|Quay lại||קואי לאי
dir_up|Trên||צ׳ן
dir_down|Dưới||זואוי`
});

/* ---- numbers & prices (0–999,999) in Vietnamese (northern) → tokens [text, roman, hebrew]. mốt / lăm / tư after tens, lẻ for a missing ten; prices in đồng ---- */
NW.vi = (() => {
  const O = [['không', 'חונג'], ['một', 'מוט'], ['hai', 'האי'], ['ba', 'בה'], ['bốn', 'בון'], ['năm', 'נאם'], ['sáu', 'סאו'], ['bảy', 'באי'], ['tám', 'טאם'], ['chín', 'צ׳ין']];
  function u100(n, out, hasH) {
    const t = Math.floor(n / 10), u = n % 10;
    if (t === 0) { if (u) { if (hasH) out.push(['lẻ', 'לה']); out.push(O[u]); } return; }
    out.push(t === 1 ? ['mười', 'מואי'] : O[t]);
    if (t > 1) out.push(['mươi', 'מואי']);
    if (u === 1 && t > 1) out.push(['mốt', 'מוט']);
    else if (u === 5) out.push(['lăm', 'לאם']);
    else if (u === 4 && t > 1) out.push(['tư', 'טו']);
    else if (u) out.push(O[u]);
  }
  function u1000(n, out, full) {
    const h = Math.floor(n / 100), r = n % 100;
    if (h || full) { out.push(O[h], ['trăm', 'צ׳אם']); }
    if (r) u100(r, out, h > 0 || full);
  }
  return (n, cur) => {
    const out = [];
    if (n === 0) out.push(O[0]);
    else {
      const th = Math.floor(n / 1000), r = n % 1000;
      if (th) { u1000(th, out, false); out.push(['nghìn', 'נגין']); }
      if (r) u1000(r, out, th > 0 && r < 100);
    }
    if (cur) out.push(['đồng', 'דונג']);
    return out.map(a => tk(a[0], a[0], a[1]));
  };
})();
NUM.vi = { tokens: (n, cur) => NW.vi(n, cur) };
