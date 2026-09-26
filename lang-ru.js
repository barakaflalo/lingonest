/* ===== LingoNest — lang-ru.js : Russian content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: one line per concept id (see content.js) → id|native text|Latin transliteration|pronunciation in Hebrew letters
   To add words: add the concept to content.js, then one line here (and in every other lang-xx.js). */
LINGO.registerLang('ru', {
  ver: '1.20.0',
  curSym: "₽",
  /* travel kit: [icon, label{he,en}, number, (second number)] — verify locally before a trip */
  country: {"he": "רוסיה", "en": "Russia", "ru": "Россия", "es": "Rusia", "ar": "روسيا"},
  emergency: [
    ["🆘", {"he": "מספר חירום כללי", "en": "General emergency", "ru": "Единый номер", "es": "Emergencias general", "ar": "الطوارئ العامة"}, "112"],
    ["🚓", {"he": "משטרה", "en": "Police", "ru": "Полиция", "es": "Policía", "ar": "الشرطة"}, "102"],
    ["🚑", {"he": "אמבולנס", "en": "Ambulance", "ru": "Скорая помощь", "es": "Ambulancia", "ar": "الإسعاف"}, "103"],
    ["🚒", {"he": "כבאות", "en": "Fire", "ru": "Пожарные", "es": "Bomberos", "ar": "الإطفاء"}, "101"]
  ],
  /* grammar & culture tips: t=title, b=body ({he,en}), ex=[native, roman, heb, meaning he, meaning en] */
  tips: [
    {"t": {"he": "אין \"הוא/יש\" בהווה", "en": "No \"is/am\" in the present"}, "b": {"he": "כמו בעברית: Я турист = אני תייר, בלי פועל. Это = זה/זאת: Это мой паспорт = זה הדרכון שלי.", "en": "Like Hebrew: Я турист = I (am) a tourist. Это = this is: Это мой паспорт = this is my passport."}, "ex": [["Я турист", "ya turist", "יא טוריסט", "אני תייר", "I'm a tourist"], ["Это мой паспорт", "eto moy pasport", "אטה מוי פאספארט", "זה הדרכון שלי", "This is my passport"]]},
    {"t": {"he": "ההטעמה משנה את הצליל", "en": "Stress changes the sound"}, "b": {"he": "ברוסית O בלי הטעמה נשמע כמו \"א\": молоко נקרא \"מלאקו\" ולא \"מולוקו\". לכן בהגייה בעברית תראה הרבה א במקום ו — זה בכוונה.", "en": "Unstressed O sounds like \"a\": молоко is read \"malako\". That's why the Hebrew pronunciation often shows א instead of ו."}, "ex": [["Молоко", "moloko", "מלאקו", "חלב", "Milk"], ["Хорошо", "khorosho", "חרשו", "טוב", "Good"]]},
    {"t": {"he": "סיומות משתנות (יחסות)", "en": "Endings change (cases)"}, "b": {"he": "שמות עצם משנים סיומת לפי התפקיד במשפט: вода (מים) אבל \"Воды, пожалуйста\" (מים בבקשה). אל תיבהל — גם עם סיומת לא נכונה יבינו אותך מצוין.", "en": "Nouns change endings by role: вода (water) but \"Воды, пожалуйста\". Don't worry — even with the wrong ending you'll be understood."}, "ex": [["Вода", "voda", "ואדה", "מים", "Water"], ["Воды, пожалуйста", "vody, pozhaluysta", "ואדי, פאז׳לוסטה", "מים, בבקשה", "Water, please"]]},
    {"t": {"he": "Вы מול ты", "en": "Вы vs. ты"}, "b": {"he": "Вы (וי) היא פנייה מנומסת — לזרים, למבוגרים, למלצרים ולנהגים. ты (טי) רק לחברים ולילדים. בספק — Вы.", "en": "Вы is polite — for strangers, older people, waiters, drivers. ты only for friends and kids. When in doubt — Вы."}, "ex": [["Вы говорите по-английски?", "vy govorite po-angliyski", "וי גבריטיה פא-אנגלייסקי", "אתה מדבר אנגלית? (מנומס)", "Do you speak English? (polite)"]]},
    {"t": {"he": "מספרים ומטבע: рубль / рубля / рублей", "en": "Numbers + currency: рубль / рубля / рублей"}, "b": {"he": "המילה אחרי מספר משתנה: 1 рубль, 2–4 рубля, 5 ומעלה рублей. במסך \"מחירים ומספרים\" האפליקציה עושה את זה בשבילך.", "en": "The word after a number changes: 1 рубль, 2–4 рубля, 5+ рублей. The Prices screen does it for you."}, "ex": [["Два рубля", "dva rublya", "דבה רובליה", "שני רובל", "Two roubles"], ["Сто рублей", "sto rubley", "סטו רובליי", "מאה רובל", "A hundred roubles"]]},
    {"t": {"he": "זכר ונקבה בעבר", "en": "Past tense has gender"}, "b": {"he": "בזמן עבר הפועל משתנה לפי המדבר: גבר אומר я потерял (איבדתי), אישה я потеряла. בהגדרות אפשר לבחור \"אני מדבר בלשון נקבה\" והמשפטים יתעדכנו.", "en": "Past verbs agree with the speaker: a man says я потерял, a woman я потеряла. Pick your form in Settings and phrases update."}, "ex": [["Я потерял паспорт", "ya poteryal pasport", "יא פטיריאל פאספארט", "איבדתי את הדרכון (גבר)", "I lost my passport (man)"]]}
  ],
  alpha: [
    ["А а","а","אַ","a"],
    ["Б б","бэ","ב","b"],
    ["В в","вэ","ו (V)","v"],
    ["Г г","гэ","ג","g"],
    ["Д д","дэ","ד","d"],
    ["Е е","е","יֶה","ye"],
    ["Ё ё","ё","יוֹ","yo"],
    ["Ж ж","жэ","ז׳","zh"],
    ["З з","зэ","ז","z"],
    ["И и","и","אִי","i"],
    ["Й й","и краткое","י קצרה","y"],
    ["К к","ка","ק","k"],
    ["Л л","эль","ל","l"],
    ["М м","эм","מ","m"],
    ["Н н","эн","נ","n"],
    ["О о","о","אוֹ","o"],
    ["П п","пэ","פּ","p"],
    ["Р р","эр","ר מתגלגלת","r"],
    ["С с","эс","ס","s"],
    ["Т т","тэ","ט","t"],
    ["У у","у","אוּ","u"],
    ["Ф ф","эф","פ","f"],
    ["Х х","ха","ח","kh"],
    ["Ц ц","цэ","צ","ts"],
    ["Ч ч","чэ","צ׳","ch"],
    ["Ш ш","ша","ש","sh"],
    ["Щ щ","ща","שְׁצ׳ (ש רכה וארוכה)","shch"],
    ["Ъ ъ","твёрдый знак","סימן קשה (בלי צליל)","hard sign"],
    ["Ы ы","ы","אִי עמוקה","y (deep i)"],
    ["Ь ь","мягкий знак","סימן רך (מרכך)","soft sign"],
    ["Э э","э","אֶ","e"],
    ["Ю ю","ю","יוּ","yu"],
    ["Я я","я","יָה","ya"]
  ],
  /* speaker = female: [regex source, flags, replacement] */
  gender: [["потерялся","g","потерялась"],["poteryalsya","g","poteryalas"],["פטיריאלסיה","g","פטיריאלאס"],["потерял ","g","потеряла "],["poteryal ","g","poteryala "],["פטיריאל ","g","פטיריאלה "]],
  words: `hello|Здравствуйте|zdravstvuyte|זדרסטבויטה
bye|До свидания|do svidaniya|דו סבידאניה
morning|Доброе утро|dobroye utro|דוברויה אוטרה
thanks|Спасибо|spasibo|ספסיבה
please|Пожалуйста|pozhaluysta|פאז׳לוסטה
sorry|Извините|izvinite|איזביניטה
yes|Да|da|דה
no|Нет|net|ניעט
howareyou|Как дела?|kak dela|קאק דילה
good|Хорошо|khorosho|חרשו
ok|Ладно|ladno|לאדנה
n1|Один|odin|אדין
n2|Два|dva|דבה
n3|Три|tri|טרי
n4|Четыре|chetyre|צ׳יטירה
n5|Пять|pyat|פיאט
n6|Шесть|shest|שסט
n7|Семь|sem|סיים
n8|Восемь|vosem|ווסים
n9|Девять|devyat|דייביט
n10|Десять|desyat|דייסיט
water|Вода|voda|ואדה
toilet|Туалет|tualet|טואלייט
where|Где?|gde|גדיה
howmuch|Сколько?|skolko|סקולקה
this|Это|eto|אטה
friend|Друг|drug|דרוק
food|Еда|yeda|יידה
bread|Хлеб|khleb|חלייפ
coffee|Кофе|kofe|קופיה
tea|Чай|chay|צ׳אי
chicken|Курица|kuritsa|קוריצה
fish|Рыба|ryba|ריבה
rice|Рис|ris|ריס
beer|Пиво|pivo|פיבה
bill|Счёт|schyot|שיוט
tasty|Вкусно|vkusno|פקוסנה
taxi|Такси|taksi|טקסי
bus|Автобус|avtobus|אפטובוס
train|Поезд|poyezd|פויעזד
airport|Аэропорт|aeroport|אירופורט
hotel|Гостиница|gostinitsa|גסטיניצה
left|Налево|nalevo|נליעבה
right|Направо|napravo|נפראבה
straight|Прямо|pryamo|פריאמה
stop|Стоп|stop|סטופ
ticket|Билет|bilet|בילייט
money|Деньги|dengi|דייניגי
expensive|Дорого|dorogo|דורגה
cheap|Дёшево|dyoshevo|דיושבה
market|Рынок|rynok|רינק
pharmacy|Аптека|apteka|אפטייקה
open|Открыто|otkryto|אטקריטה
closed|Закрыто|zakryto|זקריטה
help|Помогите!|pomogite|פאמאגיטיה
police|Полиция|politsiya|פליציה
doctor|Врач|vrach|וראץ׳
hospital|Больница|bolnitsa|בולניצה
today|Сегодня|segodnya|סיבודניה
tomorrow|Завтра|zavtra|זאפטרה
yesterday|Вчера|vchera|פצ׳ירה
now|Сейчас|seychas|סיצ׳אס
p_toilet|Где туалет?|gde tualet|גדיה טואלייט
p_cost|Сколько это стоит?|skolko eto stoit|סקולקה אטה סטויט
p_nounder|Я не понимаю|ya ne ponimayu|יא ני פנימאיו
p_english|Вы говорите по-английски?|vy govorite po-angliyski|וי גבריטיה פא-אנגלייסקי
p_slow|Говорите медленнее, пожалуйста|govorite medlenneye, pozhaluysta|גבריטיה מיידליניה, פאז׳לוסטה
p_bill|Счёт, пожалуйста|schyot, pozhaluysta|שיוט, פאז׳לוסטה
p_want|Я хочу это|ya khochu eto|יא חצ׳ו אטה
p_expensive|Это слишком дорого|eto slishkom dorogo|אטה סלישקם דורגה
p_discount|Можно скидку?|mozhno skidku|מוז׳נה סקידקו
p_address|Отвезите меня по этому адресу|otvezite menya po etomu adresu|אטביזיטיה מיניא פא אטמו אדרסו
p_hotel|Где гостиница?|gde gostinitsa|גדיה גסטיניצה
p_doctor|Мне нужен врач|mne nuzhen vrach|מניה נוז׳ן וראץ׳
p_police|Вызовите полицию!|vyzovite politsiyu|ויזאביטיה פליציו
p_israel|Я из Израиля|ya iz Izrailya|יא איז איזראילה
p_name|Меня зовут ...|menya zovut|מיניא זבוט
p_nice|Очень приятно|ochen priyatno|אוצ׳ן פריאטנה
p_water|Воды, пожалуйста|vody, pozhaluysta|ואדי, פאז׳לוסטה
p_help|Вы можете мне помочь?|vy mozhete mne pomoch|וי מוז׳טיה מניה פאמוץ׳
p_what|Что это?|chto eto|שטו אטה
p_nospicy|Не острое, пожалуйста|ne ostroye, pozhaluysta|ני אוסטרויה, פאז׳לוסטה
egg|Яйцо|yaytso|יייצו
fruit|Фрукты|frukty|פרוקטי
veg|Овощи|ovoshchi|אוואשי
meat|Мясо|myaso|מיאסה
milk|Молоко|moloko|מלאקו
spicy|Острый|ostry|אוסטרי
restaurant|Ресторан|restoran|ריסטאראן
ice|Лёд|lyod|ליוט
room|Номер|nomer|נומיר
key|Ключ|klyuch|קליוץ׳
bed|Кровать|krovat|קראבאט
shower|Душ|dush|דוש
towel|Полотенце|polotentse|פאלאטיינצה
passport|Паспорт|pasport|פאספארט
n0|Ноль|nol|נול
n20|Двадцать|dvadtsat|דבאצאט
n50|Пятьдесят|pyatdesyat|פידיסיאט
n100|Сто|sto|סטו
n1000|Тысяча|tysyacha|טיסיצ׳ה
mon|Понедельник|ponedelnik|פאנידיעלניק
tue|Вторник|vtornik|פטורניק
wed|Среда|sreda|סרידה
thu|Четверг|chetverg|צ׳יטביערק
fri|Пятница|pyatnitsa|פיאטניצה
sat|Суббота|subbota|סובוטה
sun|Воскресенье|voskresenye|ווסקריסיעניה
red|Красный|krasny|קראסני
blue|Синий|siniy|סיני
green|Зелёный|zelyony|זיליוני
yellow|Жёлтый|zholty|ז׳ולטי
black|Чёрный|chorny|צ׳ורני
white|Белый|bely|בילי
man|Мужчина|muzhchina|מושינה
woman|Женщина|zhenshchina|ז׳נשינה
child|Ребёнок|rebyonok|ריביונק
family|Семья|semya|סימיא
i|Я|ya|יא
you|Вы|vy|וי
head|Голова|golova|גלאבה
stomach|Живот|zhivot|ז׳יבוט
hand|Рука|ruka|רוקה
pain|Боль|bol|בול
medicine|Лекарство|lekarstvo|ליקארסטבה
sick|Больной|bolnoy|בלנוי
big|Большой|bolshoy|בלשוי
small|Маленький|malenkiy|מאלינקי
hot|Горячий|goryachiy|גאריאצ׳י
cold|Холодный|kholodny|חאלודני
bad|Плохой|plokhoy|פלאחוי
beautiful|Красивый|krasivy|קראסיבי
eat|Есть|yest|ייסט
drink|Пить|pit|פיט
go|Идти|idti|איטי
buy|Купить|kupit|קופיט
speak|Говорить|govorit|גבאריט
sleep|Спать|spat|ספאט
understand|Понимать|ponimat|פנימאט
c_table|Столик на двоих, пожалуйста|stolik na dvoikh, pozhaluysta|סטוליק נה דבאיח, פאז׳לוסטה
c_menu|Можно меню?|mozhno menyu|מוז׳נה מיניו
c_noice|Без льда, пожалуйста|bez lda, pozhaluysta|ביז לדה, פאז׳לוסטה
c_nomeat|Я не ем мясо|ya ne yem myaso|יא ני יים מיאסה
c_allergy|У меня аллергия на орехи|u menya allergiya na orekhi|או מיניא אלרגיה נה אריחי
c_delicious|Очень вкусно!|ochen vkusno|אוצ׳ן פקוסנה
c_reserv|У меня бронь|u menya bron|או מיניא ברון
c_wifi|Какой пароль от вай-фая?|kakoy parol ot vay-faya|קאקוי פארול אט וואי-פאיה
c_checkout|Во сколько выезд?|vo skolko vyezd|וא סקולקה ויעזד
c_howget|Как туда добраться?|kak tuda dobratsya|קאק טודה דאבראטסה
c_stophere|Остановите здесь, пожалуйста|ostanovite zdes, pozhaluysta|אסטאנאביטיה זדיעס, פאז׳לוסטה
c_far|Это далеко?|eto daleko|אטה דאליקו
c_card|Можно оплатить картой?|mozhno oplatit kartoy|מוז׳נה אפלאטיט קארטוי
c_looking|Я просто смотрю, спасибо|ya prosto smotryu, spasibo|יא פרוסטה סמאטריו, ספסיבה
c_yourname|Как вас зовут?|kak vas zovut|קאק ואס זבוט
c_wherefrom|Откуда вы?|otkuda vy|אטקודה וי
c_seeyou|До встречи|do vstrechi|דו פסטריצ׳י
c_cheers|За здоровье!|za zdorovye|זה זדארוביה
c_lost|Я потерялся|ya poteryalsya|יא פטיריאלסיה
c_passport|Я потерял паспорт|ya poteryal pasport|יא פטיריאל פאספארט
c_hurts|Здесь болит|zdes bolit|זדיעס בליט
c_time|Который час?|kotory chas|קאטורי צ׳אס
c_again|Повторите, пожалуйста|povtorite, pozhaluysta|פאפטאריטיה, פאז׳לוסטה
c_write|Можете написать?|mozhete napisat|מוז׳טיה נפיסאט
n11|Одиннадцать|odinnadtsat|אדינאצאט
n12|Двенадцать|dvenadtsat|דביניאצאט
n13|Тринадцать|trinadtsat|טרינאצאט
n14|Четырнадцать|chetyrnadtsat|צ׳יטירנאצאט
n15|Пятнадцать|pyatnadtsat|פיטנאצאט
n16|Шестнадцать|shestnadtsat|שיסנאצאט
n17|Семнадцать|semnadtsat|סימנאצאט
n18|Восемнадцать|vosemnadtsat|ווסימנאצאט
n19|Девятнадцать|devyatnadtsat|דיביטנאצאט
n30|Тридцать|tridtsat|טריצאט
n40|Сорок|sorok|סורק
n60|Шестьдесят|shestdesyat|שיזדיסיאט
n70|Семьдесят|semdesyat|סיימדיסיט
n80|Восемьдесят|vosemdesyat|ווסימדיסיט
n90|Девяносто|devyanosto|דיוויאנוסטה
n200|Двести|dvesti|דביעסטי
n500|Пятьсот|pyatsot|פיצוט
n10000|Десять тысяч|desyat tysyach|דייסיט טיסיץ׳
t_morning|Утро|utro|אוטרה
t_evening|Вечер|vecher|ויעצ׳יר
t_night|Ночь|noch|נוץ׳
t_week|Неделя|nedelya|נידיעליה
t_month|Месяц|mesyats|מייסיץ
t_year|Год|god|גוט
t_hour|Час|chas|צ׳אס
t_minute|Минута|minuta|מינוטה
dog|Собака|sobaka|סבאקה
cat|Кошка|koshka|קושקה
bird|Птица|ptitsa|פטיצה
horse|Лошадь|loshad|לושאט
cow|Корова|korova|קארובה
pig|Свинья|svinya|סביניא
elephant|Слон|slon|סלון
monkey|Обезьяна|obezyana|אביזיאנה
snake|Змея|zmeya|זמייא
mosquito|Комар|komar|קאמאר
lion|Лев|lev|ליעף
duck|Утка|utka|אוטקה
apple|Яблоко|yabloko|יאבלקה
banana|Банан|banan|באנאן
orange|Апельсин|apelsin|אפילסין
mango|Манго|mango|מאנגה
pineapple|Ананас|ananas|אנאנאס
watermelon|Арбуз|arbuz|ארבוס
coconut|Кокос|kokos|קוקס
grapes|Виноград|vinograd|ויניגראט
lemon|Лимон|limon|לימון
strawberry|Клубника|klubnika|קלובניקה
papaya|Папайя|papaya|פפאיה
tomato|Помидор|pomidor|פאמידור
potato|Картошка|kartoshka|קארטושקה
onion|Лук|luk|לוק
garlic|Чеснок|chesnok|צ׳יסנוק
cucumber|Огурец|ogurets|אגוריעץ
carrot|Морковь|morkov|מארקוף
chili|Острый перец|ostry perets|אוסטרי פייריץ
corn|Кукуруза|kukuruza|קוקורוזה
mushroom|Гриб|grib|גריפ
lettuce|Листовой салат|listovoy salat|ליסטאבוי סאלאט
eggplant|Баклажан|baklazhan|באקלאז׳אן
soup|Суп|sup|סופ
salad|Салат|salat|סאלאט
noodles|Лапша|lapsha|לאפשה
cheese|Сыр|syr|סיר
butter|Масло|maslo|מאסלה
salt|Соль|sol|סול
sugar|Сахар|sakhar|סאחאר
cake|Торт|tort|טורט
icecream|Мороженое|morozhenoye|מארוז׳ינאיה
juice|Сок|sok|סוק
wine|Вино|vino|וינו
breakfast|Завтрак|zavtrak|זאפטראק
lunch|Обед|obed|אביעט
dinner|Ужин|uzhin|אוז׳ין
fork|Вилка|vilka|וילקה
spoon|Ложка|lozhka|לושקה
knife|Нож|nozh|נוש
glass|Стакан|stakan|סטאקאן
plate|Тарелка|tarelka|טאריעלקה
bank|Банк|bank|באנק
atm|Банкомат|bankomat|באנקאמאט
beach|Пляж|plyazh|פליאש
museum|Музей|muzey|מוזיי
temple|Храм|khram|חראם
street|Улица|ulitsa|אוליצה
city|Город|gorod|גורט
shop|Магазин|magazin|מאגאזין
supermarket|Супермаркет|supermarket|סופירמארקיט
park|Парк|park|פארק
station|Вокзал|vokzal|ואקזאל
embassy|Посольство|posolstvo|פאסולסטבה
phone|Телефон|telefon|טיליפון
charger|Зарядка|zaryadka|זאריאטקה
bag|Сумка|sumka|סומקה
shoes|Обувь|obuv|אובוף
clothes|Одежда|odezhda|אדיעז׳דה
hat|Шляпа|shlyapa|שליאפה
glasses|Очки|ochki|אצ׳קי
map|Карта|karta|קארטה
sunscreen|Солнцезащитный крем|solntsezashchitny krem|סונצזאשיטני קריעם
umbrella|Зонт|zont|זונט
come|Приходить|prikhodit|פריחאדיט
want|Хотеть|khotet|חאטייט
need|Нуждаться|nuzhdatsya|נוז׳דאצה
know|Знать|znat|זנאט
see|Видеть|videt|וידיט
hear|Слышать|slyshat|סלישאט
give|Давать|davat|דאבאט
take|Брать|brat|בראט
pay|Платить|platit|פלאטיט
wait|Ждать|zhdat|ז׳דאט
walk|Ходить пешком|khodit peshkom|חאדיט פישקום
read|Читать|chitat|צ׳יטאט
write|Писать|pisat|פיסאט
love|Любить|lyubit|ליוביט
work|Работать|rabotat|ראבוטאט
swim|Плавать|plavat|פלאבאט
new|Новый|novy|נובי
old|Старый|stary|סטארי
fast|Быстрый|bystry|ביסטרי
slow|Медленный|medlenny|מיעדליני
near|Близко|blizko|בליסקה
far_a|Далеко|daleko|דאליקו
clean|Чистый|chisty|צ׳יסטי
dirty|Грязный|gryazny|גריאזני
tired|Усталый|ustaly|אוסטאלי
hungry|Голодный|golodny|גאלודני
thirsty|Хочу пить|khochu pit|חאצ׳ו פיט
happy|Счастливый|schastlivy|שיסליבי
sad|Грустный|grustny|גרוסני
easy|Лёгкий|lyogkiy|ליוחקי
difficult|Трудный|trudny|טרודני
many|Много|mnogo|מנוגה
sf_order|Я хочу заказать|ya khochu zakazat|יא חאצ׳ו זאקאזאט
sf_recommend|Что вы посоветуете?|chto vy posovetuyete|שטו וי פאסאביעטויטיה
sf_bottle|Бутылку воды, пожалуйста|butylku vody, pozhaluysta|בוטילקו ואדי, פאז׳לוסטה
sf_isspicy|Это острое?|eto ostroye|אטה אוסטראיה
sf_onemore|Ещё один, пожалуйста|yeshchyo odin, pozhaluysta|יישו אדין, פאז׳לוסטה
sf_nosugar|Без сахара, пожалуйста|bez sakhara, pozhaluysta|ביס סאחארה, פאז׳לוסטה
sf_takeaway|Можно с собой?|mozhno s soboy|מוז׳נה ססאבוי
ss_smaller|Есть размер поменьше?|yest razmer pomenshe|ייסט ראזמיער פאמיינשה
ss_try|Можно примерить?|mozhno primerit|מוז׳נה פרימיעריט
ss_two|Я возьму два|ya vozmu dva|יא ואזמו דבה
ss_change|У вас есть сдача?|u vas yest sdacha|או ואס ייסט זדאצ׳ה
ss_last|Какая окончательная цена?|kakaya okonchatelnaya tsena|קאקאיה אקאנצ׳אטילנאיה צינה
ss_bag|Можно пакет?|mozhno paket|מוז׳נה פאקייט
sm_busstop|Где автобусная остановка?|gde avtobusnaya ostanovka|גדיה אפטובוסנאיה אסטאנופקה
sm_trainleave|Когда отправляется поезд?|kogda otpravlyayetsya poyezd|קאגדה אטפראבליאיצה פויעזד
sm_oneticket|Один билет, пожалуйста|odin bilet, pozhaluysta|אדין בילייט, פאז׳לוסטה
sm_howlong|Сколько времени это займёт?|skolko vremeni eto zaymyot|סקולקה וריימיני אטה זאימיוט
sm_meter|Включите счётчик, пожалуйста|vklyuchite schyotchik, pozhaluysta|פקליוצ׳יטיה שיוצ׳יק, פאז׳לוסטה
sm_slowdrive|Езжайте медленнее, пожалуйста|yezzhayte medlenneye, pozhaluysta|ייז׳איטיה מיעדליניה, פאז׳לוסטה
sm_airport|Мне нужно в аэропорт|mne nuzhno v aeroport|מניה נוז׳נה וו אירופורט
sh_leavebag|Можно оставить здесь сумку?|mozhno ostavit zdes sumku|מוז׳נה אסטאביט זדיעס סומקו
sh_ac|Кондиционер не работает|konditsioner ne rabotayet|קאנדיציאנייר ני ראבוטאייט
sh_breakfast|Завтрак включён?|zavtrak vklyuchyon|זאפטראק פקליוצ׳ון
sh_towel|Мне нужно ещё одно полотенце|mne nuzhno yeshchyo odno polotentse|מניה נוז׳נה יישו אדנו פאלאטיינצה
sh_taxi|Вызовите мне такси, пожалуйста|vyzovite mne taksi, pozhaluysta|ויזאביטיה מניה טאקסי, פאז׳לוסטה
sh_late|Можно выехать позже?|mozhno vyyekhat pozzhe|מוז׳נה וייחאט פוז׳ה
so_learning|Я учу язык|ya uchu yazyk|יא אוצ׳ו יזיק
so_thankshelp|Большое спасибо за помощь|bolshoye spasibo za pomoshch|באלשויה ספסיבה זה פומאש
so_photo|Можете нас сфотографировать?|mozhete nas sfotografirovat|מוז׳טיה נאס ספאטאגראפירובאט
so_like|Мне нравится это место|mne nravitsya eto mesto|מניה נראביצה אטה מייסטה
so_vacation|Я здесь в отпуске|ya zdes v otpuske|יא זדיעס וו אוטפוסקה
so_howsay|Как это сказать?|kak eto skazat|קאק אטה סקאזאט
so_noproblem|Без проблем|bez problem|ביס פראבליעם
so_beautiful|Очень красиво!|ochen krasivo|אוצ׳ן קראסיבה
sp_unwell|Мне плохо|mne plokho|מניה פלוחה
sp_nearhosp|Где ближайшая больница?|gde blizhayshaya bolnitsa|גדיה בליז׳איישאיה בולניצה
sp_fever|У меня температура|u menya temperatura|או מיניא טימפיראטורה
sp_helpme|Помогите мне, пожалуйста|pomogite mne, pozhaluysta|פאמאגיטיה מניה, פאז׳לוסטה
sp_stolen|У меня украли сумку|u menya ukrali sumku|או מיניא אוקראלי סומקו
sp_embassy|Мне нужно посольство Израиля|mne nuzhno posolstvo Izrailya|מניה נוז׳נה פאסולסטבה איזראילה
dt1|Куда едем?|kuda yedem|קודה יידים
dt2|В эту гостиницу, пожалуйста.|v etu gostinitsu, pozhaluysta|וו אטו גסטיניצו, פאז׳לוסטה
dt3|Хорошо, садитесь.|khorosho, saditess|חרשו, סאדיטיס
dt4|Сколько с меня?|skolko s menya|סקולקה סמיניא
dt5|Двести.|dvesti|דביעסטי
dt6|Включите, пожалуйста, счётчик.|vklyuchite, pozhaluysta, schyotchik|פקליוצ׳יטיה, פאז׳לוסטה, שיוצ׳יק
dt7|Без проблем.|bez problem|ביס פראבליעם
dt8|Остановите здесь, спасибо.|ostanovite zdes, spasibo|אסטאנאביטיה זדיעס, ספסיבה
dm1|Сколько это стоит?|skolko eto stoit|סקולקה אטה סטויט
dm2|Триста.|trista|טריסטה
dm3|Слишком дорого! Двести?|slishkom dorogo! dvesti|סלישקם דורגה! דביעסטי
dm4|Двести пятьдесят, последняя цена.|dvesti pyatdesyat, poslednyaya tsena|דביעסטי פידיסיאט, פאסליעדניאיה צינה
dm5|Хорошо, беру.|khorosho, beru|חרשו, בירו
dm6|Большое спасибо!|bolshoye spasibo|באלשויה ספסיבה
dr1|Сколько вас?|skolko vas|סקולקה ואס
dr2|Двое.|dvoye|דבויה
dr3|Что будете заказывать?|chto budete zakazyvat|שטו בודיטיה זאקאזיוואט
dr4|Жареный рис с курицей, не острый.|zhareny ris s kuritsey, ne ostry|ז׳ארני ריס סקוריצי, ני אוסטרי
dr5|А что будете пить?|a chto budete pit|א שטו בודיטיה פיט
dr6|Просто воду, пожалуйста.|prosto vodu, pozhaluysta|פרוסטה וודו, פאז׳לוסטה
dr7|Принесите счёт, пожалуйста.|prinesite schyot, pozhaluysta|פריניסיטיה שיוט, פאז׳לוסטה
dh1|Здравствуйте, у меня бронь.|zdravstvuyte, u menya bron|זדרסטבויטה, או מיניא ברון
dh2|На какое имя?|na kakoye imya|נה קאקויה אימיא
dh3|На имя ...|na imya|נה אימיא
dh4|Ваш паспорт, пожалуйста.|vash pasport, pozhaluysta|ואש פאספארט, פאז׳לוסטה
dh5|Ваш номер триста пять.|vash nomer trista pyat|ואש נומיר טריסטה פיאט
dh6|Во сколько завтрак?|vo skolko zavtrak|וא סקולקה זאפטראק
dh7|С семи до десяти.|s semi do desyati|ססימי דו דיסיטי
dd1|Извините, где вокзал?|izvinite, gde vokzal|איזביניטה, גדיה ואקזאל
dd2|Прямо, потом налево.|pryamo, potom nalevo|פריאמה, פאטום נליעבה
dd3|Это далеко отсюда?|eto daleko otsyuda|אטה דאליקו אטסיודה
dd4|Нет, пять минут пешком.|net, pyat minut peshkom|ניעט, פיאט מינוט פישקום
dd5|Спасибо большое!|spasibo bolshoye|ספסיבה באלשויה
da1|Какова цель вашего визита?|kakova tsel' vashego vizita?|קקובה צל ואשבה ויזיטה
da2|Как долго вы пробудете?|kak dolgo vy probudete?|קק דולגה וי פרבודיטה
da3|Две недели.|dve nedeli.|דבה נדלי
da4|Добро пожаловать!|dobro pozhalovat'!|דאברו פאז׳לובט
dp1|Что у вас болит?|chto u vas bolit?|שטו או ואס באליט
dp2|Принимайте это лекарство два раза в день.|prinimayte eto lekarstvo dva raza v den'.|פרינימאיטה אטה ליקרסטבה דבה ראזה ב דן
dp4|Выздоравливайте!|vyzdoravlivayte!|ויזדרבליוואיטה
ds1|Мне нужна сим-карта с интернетом.|mne nuzhna sim-karta s internetom.|מניה נוזנה סים-קרטה ס אינטרנטם
ds2|На сколько дней?|na skol'ko dney?|נה סקולקה דניי
ds3|На десять дней.|na desyat' dney.|נה דסיט דניי
ds4|Готово, теперь у вас есть интернет.|gotovo, teper' u vas yest' internet.|גטובה, טיפר או ואס יסט אינטרנט
dc1|Вам помочь?|vam pomoch'?|ואם פמוץ׳
dc2|У вас есть это в синем цвете?|u vas yest' eto v sinem tsvete?|או ואס יסט אטה ב סינים צבטה
dc3|Да, какой размер?|da, kakoy razmer?|דה, קקוי רזמר
dc4|Средний.|sredniy.|סרדני
dc5|Конечно, примерочная вон там.|konechno, primerochnaya von tam.|קנשנה, פרימרוצ׳נאיה וון טאם
dg1|Я хочу заказать экскурсию на завтра.|ya khochu zakazat' ekskursiyu na zavtra.|יא חצ׳ו זקזאט אקסקורסיו נה זבטרה
dg2|Экскурсия начинается в восемь утра.|ekskursiya nachinayetsya v vosem' utra.|אקסקורסיה נצ׳ינאיצה ב ווסים אוטרה
dg3|Обед включён?|obed vklyuchyon?|אביד בקליוצ׳ון
dg4|Да, и вода тоже.|da, i voda tozhe.|דה, אי ואדה טוז׳ה
dg5|Отлично, на двоих, пожалуйста.|otlichno, na dvoikh, pozhaluysta.|אטליצ׳נה, נה דבאיח, פאז׳לוסטה
w_weather|Погода|pogoda|פאגודה
w_sun|Солнце|solntse|סונצה
w_rain|Дождь|dozhd|דושט
w_wind|Ветер|veter|ויעטיר
w_cloud|Облако|oblako|אובלאקה
w_snow|Снег|sneg|סניעק
w_storm|Гроза|groza|גראזה
w_humid|Влажно|vlazhno|ולאז׳נה
j_teacher|Учитель|uchitel|אוצ׳יטיל
j_driver|Водитель|voditel|ואדיטיל
j_waiter|Официант|ofitsiant|אפיציאנט
j_cook|Повар|povar|פובאר
j_student|Студент|student|סטודיינט
j_engineer|Инженер|inzhener|אינז׳ינייר
j_nurse|Медсестра|medsestra|מידסיסטרה
j_seller|Продавец|prodavets|פראדאביעץ
j_guide|Гид|gid|גיט
j_pharmacist|Фармацевт|farmatsevt|פארמאציעפט
e_angry|Злой|zloy|זלוי
e_scared|Испуганный|ispugannyy|איספוגאני
e_bored|Скучно|skuchno|סקושנה
e_worried|Обеспокоенный|obespokoyenny|אביספאקויני
e_surprised|Удивлённый|udivlyonny|אודיבליוני
e_calm|Спокойный|spokoyny|ספאקויני
e_excited|Взволнованный|vzvolnovanny|וזוואלנובאני
e_love|Влюблённый|vlyublyonny|ולובליוני
dir_north|Север|sever|סייביר
dir_south|Юг|yug|יוק
dir_east|Восток|vostok|ואסטוק
dir_west|Запад|zapad|זאפאט
dir_corner|Угол|ugol|אוגאל
dir_light|Светофор|svetofor|סביטאפור
dir_behind|Сзади|szadi|זאדי
dir_front|Впереди|vperedi|פפיריידי
dir_next|Рядом|ryadom|ריאדום
dir_back|Назад|nazad|נאזאט
dir_up|Наверх|naverkh|נאבייערח
dir_down|Вниз|vniz|וניס`
});

/* ---- numbers & prices (0–999,999) → tokens [text, roman, hebrew] ---- */
/* ---- Russian ---- */
NW.ru = (() => {
  const R = { 'ноль':['nol','נול'], 'один':['odin','אדין'], 'одна':['odna','אדנה'], 'два':['dva','דבה'], 'две':['dve','דביה'], 'три':['tri','טרי'], 'четыре':['chetyre','צ׳יטירה'], 'пять':['pyat','פיאט'], 'шесть':['shest','שסט'], 'семь':['sem','סיים'], 'восемь':['vosem','ווסים'], 'девять':['devyat','דייביט'],
    'десять':['desyat','דייסיט'], 'одиннадцать':['odinnadtsat','אדינאצאט'], 'двенадцать':['dvenadtsat','דביניאצאט'], 'тринадцать':['trinadtsat','טרינאצאט'], 'четырнадцать':['chetyrnadtsat','צ׳יטירנאצאט'], 'пятнадцать':['pyatnadtsat','פיטנאצאט'], 'шестнадцать':['shestnadtsat','שיסנאצאט'], 'семнадцать':['semnadtsat','סימנאצאט'], 'восемнадцать':['vosemnadtsat','ווסימנאצאט'], 'девятнадцать':['devyatnadtsat','דיביטנאצאט'],
    'двадцать':['dvadtsat','דבאצאט'], 'тридцать':['tridtsat','טריצאט'], 'сорок':['sorok','סורק'], 'пятьдесят':['pyatdesyat','פידיסיאט'], 'шестьдесят':['shestdesyat','שיזדיסיאט'], 'семьдесят':['semdesyat','סיימדיסיט'], 'восемьдесят':['vosemdesyat','ווסימדיסיט'], 'девяносто':['devyanosto','דיוויאנוסטה'],
    'сто':['sto','סטו'], 'двести':['dvesti','דביעסטי'], 'триста':['trista','טריסטה'], 'четыреста':['chetyresta','צ׳יטיריסטה'], 'пятьсот':['pyatsot','פיצוט'], 'шестьсот':['shestsot','שיססוט'], 'семьсот':['semsot','סימסוט'], 'восемьсот':['vosemsot','ווסימסוט'], 'девятьсот':['devyatsot','דיביצוט'],
    'тысяча':['tysyacha','טיסיצ׳ה'], 'тысячи':['tysyachi','טיסיצ׳י'], 'тысяч':['tysyach','טיסיץ׳'], 'рубль':['rubl','רובל'], 'рубля':['rublya','רובליה'], 'рублей':['rubley','רובליי'] };
  const o = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
  const t = [, , 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
  const h = [, 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
  const w = x => tk(x, R[x][0], R[x][1]);
  const form = (n, a, b, c) => { const m10 = n % 10, m100 = n % 100; if (m10 === 1 && m100 !== 11) return a; if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return b; return c; };
  function under1000(n, out, fem) {
    if (n >= 100) { out.push(w(h[Math.floor(n / 100)])); n %= 100; }
    if (n >= 20) { out.push(w(t[Math.floor(n / 10)])); n %= 10; }
    if (n > 0) { let x = o[n]; if (fem && x === 'один') x = 'одна'; if (fem && x === 'два') x = 'две'; out.push(w(x)); }
  }
  const f = n => {
    if (n === 0) return [w('ноль')];
    const out = [], th = Math.floor(n / 1000);
    if (th === 1) out.push(w('тысяча'));
    else if (th) { under1000(th, out, true); out.push(w(form(th, 'тысяча', 'тысячи', 'тысяч'))); }
    under1000(n % 1000, out, false);
    return out;
  };
  f.cur = n => w(form(n, 'рубль', 'рубля', 'рублей'));
  return f;
})();
NW.ruCur = n => NW.ru.cur(n);
NUM.ru = { tokens: (n, cur) => cur ? NW.ru(n).concat([NW.ruCur(n)]) : NW.ru(n) };
