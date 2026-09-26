/* ===== LingoNest — lang-en.js : English content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: one line per concept id (see content.js) → id|native text|Latin transliteration|pronunciation in Hebrew letters
   To add words: add the concept to content.js, then one line here (and in every other lang-xx.js). */
LINGO.registerLang('en', {
  ver: '1.16.0',
  curSym: "$",
  /* travel kit: [icon, label{he,en}, number, (second number)] — verify locally before a trip */
  country: {"he": "מדינות דוברות אנגלית", "en": "English-speaking countries", "ru": "Англоязычные страны", "es": "Países de habla inglesa", "ar": "الدول الناطقة بالإنجليزية"},
  emergency: [
    ["🇺🇸", {"he": "ארה״ב וקנדה — חירום", "en": "USA & Canada — emergency", "ru": "США и Канада — экстренная служба", "es": "EE. UU. y Canadá — emergencias", "ar": "الولايات المتحدة وكندا — الطوارئ"}, "911"],
    ["🇬🇧", {"he": "בריטניה — חירום (גם 112 עובד)", "en": "UK — emergency (112 works too)", "ru": "Великобритания (112 тоже работает)", "es": "Reino Unido (112 también funciona)", "ar": "بريطانيا (يعمل 112 أيضا)"}, "999"],
    ["🇦🇺", {"he": "אוסטרליה — חירום", "en": "Australia — emergency", "ru": "Австралия — экстренная служба", "es": "Australia — emergencias", "ar": "أستراليا — الطوارئ"}, "000"],
    ["🇪🇺", {"he": "אירופה — חירום", "en": "Europe — emergency", "ru": "Европа — экстренная служба", "es": "Europa — emergencias", "ar": "أوروبا — الطوارئ"}, "112"]
  ],
  /* grammar & culture tips: t=title, b=body ({he,en}), ex=[native, roman, heb, meaning he, meaning en] */
  tips: [
    {"t": {"he": "סדר קבוע: מי – עושה – מה", "en": "Fixed order: who – does – what"}, "b": {"he": "באנגלית סדר המילים כמעט תמיד קבוע: נושא, פועל, מושא. I want water — לא \"Water I want\".", "en": "English word order is almost always subject – verb – object: I want water."}, "ex": [["I want water", "", "איי וואנט ווטר", "אני רוצה מים", "I want water"]]},
    {"t": {"he": "שאלות עם Do / Does", "en": "Questions with Do / Does"}, "b": {"he": "כדי לשאול, מוסיפים Do בהתחלה: You have a room → Do you have a room? עם Is/Are הופכים סדר: Is it far?", "en": "To ask, add Do at the start: Do you have a room? With is/are, swap the order: Is it far?"}, "ex": [["Do you have a room?", "", "דו יו הב א רום", "יש לכם חדר?", "Do you have a room?"], ["Is it far?", "", "איז איט פאר", "זה רחוק?", "Is it far?"]]},
    {"t": {"he": "נימוס: Could you / Can I have", "en": "Politeness: Could you / Can I have"}, "b": {"he": "\"I want\" נשמע ישיר מדי. במסעדה ובחנות אומרים Can I have… או Could I get…, ומבקשים עזרה ב-Could you… please?", "en": "\"I want\" can sound blunt. Say Can I have… / Could I get…, and ask for help with Could you… please?"}, "ex": [["Can I have the bill, please?", "", "קן איי הב דה ביל, פליז", "אפשר את החשבון?", "Can I have the bill, please?"], ["Could you help me, please?", "", "קוד יו הלפ מי, פליז", "תוכל לעזור לי?", "Could you help me, please?"]]},
    {"t": {"he": "כתיב והגייה לא תמיד תואמים", "en": "Spelling and sound often differ"}, "b": {"he": "באנגלית יש אותיות שקטות (knife = נייף, hour = אאואר) ו-th שנשמע כמו ת׳ (thank) או ד׳ (this). לכן כדאי ללמוד כל מילה עם הצליל שלה — כפתור 🔊 הוא החבר הכי טוב שלך.", "en": "English has silent letters (knife, hour) and th sounds (thank / this). Learn every word with its sound — 🔊 is your best friend."}, "ex": [["Knife", "", "נייף", "סכין", "Knife"], ["Thank you", "", "ת׳נק יו", "תודה", "Thank you"]]},
    {"t": {"he": "a / an / the", "en": "a / an / the"}, "b": {"he": "the = ה׳ הידיעה. a (או an לפני תנועה) = \"אחד\" לא מוגדר: a ticket, an apple. בעברית אין מקבילה ל-a, אז קל לשכוח אותו.", "en": "the = definite. a (an before a vowel) = \"one\": a ticket, an apple. Hebrew has no \"a\", so it's easy to forget."}, "ex": [["A ticket, please", "", "א טיקט, פליז", "כרטיס, בבקשה", "A ticket, please"], ["An apple", "", "אן אפל", "תפוח", "An apple"]]},
    {"t": {"he": "I'm looking for… — המשפט הכי שימושי", "en": "I'm looking for… — the most useful phrase"}, "b": {"he": "I'm looking for + מקום/דבר = \"אני מחפש…\". עובד בכל מצב: ברחוב, בחנות, בתחנה.", "en": "I'm looking for + place/thing works everywhere: street, shop, station."}, "ex": [["I'm looking for the station", "", "איים לוקינג פור דה סטיישן", "אני מחפש את התחנה", "I'm looking for the station"]]}
  ],
  alpha: [
    ["A a","A","אֵיי / אַ","ay"],
    ["B b","B","ב","bee"],
    ["C c","C","ק / ס","see"],
    ["D d","D","ד","dee"],
    ["E e","E","אִי / אֶ","ee"],
    ["F f","F","פ","ef"],
    ["G g","G","ג / ג׳","jee"],
    ["H h","H","ה","aitch"],
    ["I i","I","אַיי / אִ","eye"],
    ["J j","J","ג׳","jay"],
    ["K k","K","ק","kay"],
    ["L l","L","ל","el"],
    ["M m","M","מ","em"],
    ["N n","N","נ","en"],
    ["O o","O","אוֹ","oh"],
    ["P p","P","פּ","pee"],
    ["Q q","Q","ק (קוּ)","kyoo"],
    ["R r","R","ר","ar"],
    ["S s","S","ס","es"],
    ["T t","T","ט","tee"],
    ["U u","U","יוּ / אַ","yoo"],
    ["V v","V","ו (V)","vee"],
    ["W w","W","וו (W)","double-u"],
    ["X x","X","קס","ex"],
    ["Y y","Y","י","wye"],
    ["Z z","Z","ז","zee"]
  ],
  /* speaker = female: [regex source, flags, replacement] */
  gender: [],
  words: `hello|Hello||הלו
bye|Goodbye||גוּד-באי
morning|Good morning||גוּד מורנינג
thanks|Thank you||תנק יו
please|Please||פליז
sorry|Sorry||סורי
yes|Yes||יס
no|No||נואו
howareyou|How are you?||האו אר יו
good|Good||גוּד
ok|OK||אוקיי
n1|One||וואן
n2|Two||טו
n3|Three||ת׳רי
n4|Four||פור
n5|Five||פייב
n6|Six||סיקס
n7|Seven||סבן
n8|Eight||אייט
n9|Nine||ניין
n10|Ten||טן
water|Water||ווטר
toilet|Toilet||טוילט
where|Where?||וור
howmuch|How much?||האו מאץ׳
this|This||דיס
friend|Friend||פרנד
food|Food||פוּד
bread|Bread||ברד
coffee|Coffee||קופי
tea|Tea||טי
chicken|Chicken||צ׳יקן
fish|Fish||פיש
rice|Rice||רייס
beer|Beer||ביר
bill|The bill||דה ביל
tasty|Delicious||דלישס
taxi|Taxi||טקסי
bus|Bus||באס
train|Train||טריין
airport|Airport||ארפורט
hotel|Hotel||הוטל
left|Left||לפט
right|Right||רייט
straight|Straight ahead||סטרייט אהד
stop|Stop||סטופ
ticket|Ticket||טיקט
money|Money||מאני
expensive|Expensive||אקספנסיב
cheap|Cheap||צ׳יפ
market|Market||מרקט
pharmacy|Pharmacy||פרמסי
open|Open||אופן
closed|Closed||קלוזד
help|Help!||הלפ
police|Police||פוליס
doctor|Doctor||דוקטור
hospital|Hospital||הוספיטל
today|Today||טודיי
tomorrow|Tomorrow||טומורו
yesterday|Yesterday||יסטרדיי
now|Now||נאו
p_toilet|Where is the restroom?||וור איז דה רסטרום
p_cost|How much does it cost?||האו מאץ׳ דאז איט קוסט
p_nounder|I don't understand||איי דונט אנדרסטנד
p_english|Do you speak English?||דו יו ספיק אינגליש
p_slow|Please speak slowly||פליז ספיק סלואולי
p_bill|The bill, please||דה ביל, פליז
p_want|I want this one||איי וואנט דיס וואן
p_expensive|It's too expensive||איטס טו אקספנסיב
p_discount|Can I get a discount?||קן איי גט א דיסקאונט
p_address|Please take me to this address||פליז טייק מי טו דיס אדרס
p_hotel|Where is the hotel?||וור איז דה הוטל
p_doctor|I need a doctor||איי ניד א דוקטור
p_police|Call the police!||קול דה פוליס
p_israel|I'm from Israel||איים פרום איזראל
p_name|My name is ...||מאי ניים איז
p_nice|Nice to meet you||נייס טו מיט יו
p_water|Water, please||ווטר, פליז
p_help|Can you help me?||קן יו הלפ מי
p_what|What is this?||וואט איז דיס
p_nospicy|Not spicy, please||נוט ספייסי, פליז
egg|Egg||אג
fruit|Fruit||פרוּט
veg|Vegetables||וג׳טבלס
meat|Meat||מיט
milk|Milk||מילק
spicy|Spicy||ספייסי
restaurant|Restaurant||רסטורנט
ice|Ice||אייס
room|Room||רוּם
key|Key||קי
bed|Bed||בד
shower|Shower||שאוור
towel|Towel||טאוול
passport|Passport||פספורט
n0|Zero||זירו
n20|Twenty||טוונטי
n50|Fifty||פיפטי
n100|One hundred||וואן הנדרד
n1000|One thousand||וואן ת׳אוזנד
mon|Monday||מאנדיי
tue|Tuesday||טיוזדיי
wed|Wednesday||ונזדיי
thu|Thursday||ת׳רזדיי
fri|Friday||פריידיי
sat|Saturday||סטרדיי
sun|Sunday||סאנדיי
red|Red||רד
blue|Blue||בלוּ
green|Green||גרין
yellow|Yellow||ילו
black|Black||בלק
white|White||וואיט
man|Man||מן
woman|Woman||וומן
child|Child||צ׳איילד
family|Family||פמילי
i|I||איי
you|You||יו
head|Head||הד
stomach|Stomach||סטומק
hand|Hand||הנד
pain|Pain||פיין
medicine|Medicine||מדסין
sick|Sick||סיק
big|Big||ביג
small|Small||סמול
hot|Hot||הוט
cold|Cold||קולד
bad|Bad||בד
beautiful|Beautiful||ביוטיפול
eat|To eat||טו איט
drink|To drink||טו דרינק
go|To go||טו גואו
buy|To buy||טו באי
speak|To speak||טו ספיק
sleep|To sleep||טו סליפ
understand|To understand||טו אנדרסטנד
c_table|A table for two, please||א טייבל פור טו, פליז
c_menu|Can I see the menu?||קן איי סי דה מניו
c_noice|No ice, please||נואו אייס, פליז
c_nomeat|I don't eat meat||איי דונט איט מיט
c_allergy|I'm allergic to nuts||איים אלרג׳יק טו נאטס
c_delicious|Very delicious!||ורי דלישס
c_reserv|I have a reservation||איי הב א רזרוויישן
c_wifi|What's the Wi-Fi password?||וואטס דה וואי-פאי פאסוורד
c_checkout|What time is checkout?||וואט טיים איז צ׳ק-אאוט
c_howget|How do I get there?||האו דו איי גט דר
c_stophere|Stop here, please||סטופ היר, פליז
c_far|Is it far?||איז איט פאר
c_card|Can I pay by card?||קן איי פיי באי קארד
c_looking|Just looking, thanks||ג׳אסט לוקינג, תנקס
c_yourname|What's your name?||וואטס יור ניים
c_wherefrom|Where are you from?||וור אר יו פרום
c_seeyou|See you later||סי יו לייטר
c_cheers|Cheers!||צ׳ירס
c_lost|I'm lost||איים לוסט
c_passport|I lost my passport||איי לוסט מאי פספורט
c_hurts|It hurts here||איט הרטס היר
c_time|What time is it?||וואט טיים איז איט
c_again|Please say that again||פליז סיי דט אגיין
c_write|Can you write it down?||קן יו רייט איט דאון
n11|Eleven||אילבן
n12|Twelve||טוולב
n13|Thirteen||ת׳רטין
n14|Fourteen||פורטין
n15|Fifteen||פיפטין
n16|Sixteen||סיקסטין
n17|Seventeen||סבנטין
n18|Eighteen||אייטין
n19|Nineteen||ניינטין
n30|Thirty||ת׳רטי
n40|Forty||פורטי
n60|Sixty||סיקסטי
n70|Seventy||סבנטי
n80|Eighty||אייטי
n90|Ninety||ניינטי
n200|Two hundred||טו הנדרד
n500|Five hundred||פייב הנדרד
n10000|Ten thousand||טן ת׳אוזנד
t_morning|Morning||מורנינג
t_evening|Evening||איבנינג
t_night|Night||נייט
t_week|Week||וויק
t_month|Month||מאנת׳
t_year|Year||יר
t_hour|Hour||אאואר
t_minute|Minute||מיניט
dog|Dog||דוג
cat|Cat||קט
bird|Bird||בירד
horse|Horse||הורס
cow|Cow||קאו
pig|Pig||פיג
elephant|Elephant||אלפנט
monkey|Monkey||מאנקי
snake|Snake||סנייק
mosquito|Mosquito||מוסקיטו
lion|Lion||לאיון
duck|Duck||דאק
apple|Apple||אפל
banana|Banana||בננה
orange|Orange||אורנג׳
mango|Mango||מנגו
pineapple|Pineapple||פיינאפל
watermelon|Watermelon||ווטרמלון
coconut|Coconut||קוקונאט
grapes|Grapes||גרייפס
lemon|Lemon||למון
strawberry|Strawberry||סטרוברי
papaya|Papaya||פפאיה
tomato|Tomato||טומייטו
potato|Potato||פוטייטו
onion|Onion||אניון
garlic|Garlic||גארליק
cucumber|Cucumber||קיוקמבר
carrot|Carrot||קרוט
chili|Chili pepper||צ׳ילי פפר
corn|Corn||קורן
mushroom|Mushroom||מאשרום
lettuce|Lettuce||לטוס
eggplant|Eggplant||אגפלנט
soup|Soup||סופ
salad|Salad||סלד
noodles|Noodles||נודלס
cheese|Cheese||צ׳יז
butter|Butter||באטר
salt|Salt||סולט
sugar|Sugar||שוגר
cake|Cake||קייק
icecream|Ice cream||אייס קרים
juice|Juice||ג׳וס
wine|Wine||וויין
breakfast|Breakfast||ברקפסט
lunch|Lunch||לאנץ׳
dinner|Dinner||דינר
fork|Fork||פורק
spoon|Spoon||ספון
knife|Knife||נייף
glass|Glass||גלאס
plate|Plate||פלייט
bank|Bank||בנק
atm|ATM||איי-טי-אם
beach|Beach||ביץ׳
museum|Museum||מיוזיאם
temple|Temple||טמפל
street|Street||סטריט
city|City||סיטי
shop|Shop||שופ
supermarket|Supermarket||סופרמרקט
park|Park||פארק
station|Station||סטיישן
embassy|Embassy||אמבסי
phone|Phone||פון
charger|Charger||צ׳ארג׳ר
bag|Bag||בג
shoes|Shoes||שוז
clothes|Clothes||קלות׳ז
hat|Hat||הט
glasses|Glasses||גלאסז
map|Map||מפ
sunscreen|Sunscreen||סאנסקרין
umbrella|Umbrella||אמברלה
come|To come||טו קאם
want|To want||טו וואנט
need|To need||טו ניד
know|To know||טו נואו
see|To see||טו סי
hear|To hear||טו היר
give|To give||טו גיב
take|To take||טו טייק
pay|To pay||טו פיי
wait|To wait||טו וייט
walk|To walk||טו ווק
read|To read||טו ריד
write|To write||טו רייט
love|To love||טו לאב
work|To work||טו וורק
swim|To swim||טו סווים
new|New||ניו
old|Old||אולד
fast|Fast||פאסט
slow|Slow||סלואו
near|Near||ניר
far_a|Far||פאר
clean|Clean||קלין
dirty|Dirty||דרטי
tired|Tired||טאיירד
hungry|Hungry||האנגרי
thirsty|Thirsty||ת׳רסטי
happy|Happy||הפי
sad|Sad||סד
easy|Easy||איזי
difficult|Difficult||דיפיקלט
many|A lot||א לוט
sf_order|I'd like to order||איד לייק טו אורדר
sf_recommend|What do you recommend?||וואט דו יו רקומנד
sf_bottle|A bottle of water, please||א בוטל אוב ווטר, פליז
sf_isspicy|Is this spicy?||איז דיס ספייסי
sf_onemore|One more, please||וואן מור, פליז
sf_nosugar|Without sugar, please||וית׳אאוט שוגר, פליז
sf_takeaway|Can I take this to go?||קן איי טייק דיס טו גואו
ss_smaller|Do you have a smaller size?||דו יו הב א סמולר סייז
ss_try|Can I try it on?||קן איי טראי איט און
ss_two|I'll take two||איל טייק טו
ss_change|Do you have change?||דו יו הב צ׳יינג׳
ss_last|What's the final price?||וואטס דה פיינל פרייס
ss_bag|Can I have a bag?||קן איי הב א בג
sm_busstop|Where is the bus stop?||וור איז דה באס סטופ
sm_trainleave|When does the train leave?||ון דאז דה טריין ליב
sm_oneticket|One ticket, please||וואן טיקט, פליז
sm_howlong|How long does it take?||האו לונג דאז איט טייק
sm_meter|Please use the meter||פליז יוז דה מיטר
sm_slowdrive|Please drive slowly||פליז דראיב סלואולי
sm_airport|I want to go to the airport||איי וואנט טו גואו טו דה ארפורט
sh_leavebag|Can I leave my bag here?||קן איי ליב מאי בג היר
sh_ac|The air conditioner doesn't work||דה אר קונדישנר דאזנט וורק
sh_breakfast|Is breakfast included?||איז ברקפסט אינקלודד
sh_towel|I need another towel||איי ניד אנאדר טאוול
sh_taxi|Can you call me a taxi?||קן יו קול מי א טקסי
sh_late|Can I check out later?||קן איי צ׳ק אאוט לייטר
so_learning|I'm learning the language||איים לרנינג דה לנגווג׳
so_thankshelp|Thank you very much for your help||תנק יו ורי מאץ׳ פור יור הלפ
so_photo|Can you take a photo of us?||קן יו טייק א פוטו אוב אס
so_like|I like this place||איי לייק דיס פלייס
so_vacation|I'm here on vacation||איים היר און וייקיישן
so_howsay|How do you say this?||האו דו יו סיי דיס
so_noproblem|No problem||נואו פרובלם
so_beautiful|It's very beautiful!||איטס ורי ביוטיפול
sp_unwell|I don't feel well||איי דונט פיל וול
sp_nearhosp|Where is the nearest hospital?||וור איז דה נירסט הוספיטל
sp_fever|I have a fever||איי הב א פיבר
sp_helpme|Please help me||פליז הלפ מי
sp_stolen|My bag was stolen||מאי בג ווז סטולן
sp_embassy|I need the Israeli embassy||איי ניד דה איזראלי אמבסי
dt1|Where to?||וור טו
dt2|To this hotel, please.||טו דיס הוטל, פליז
dt3|OK, get in.||אוקיי, גט אין
dt4|How much is it?||האו מאץ׳ איז איט
dt5|Two hundred.||טו הנדרד
dt6|Please turn on the meter.||פליז טרן און דה מיטר
dt7|No problem.||נואו פרובלם
dt8|Stop here, thank you.||סטופ היר, תנק יו
dm1|How much is this?||האו מאץ׳ איז דיס
dm2|Three hundred.||ת׳רי הנדרד
dm3|Too expensive! Two hundred?||טו אקספנסיב! טו הנדרד
dm4|Two hundred fifty, final price.||טו הנדרד פיפטי, פיינל פרייס
dm5|OK, I'll take it.||אוקיי, איל טייק איט
dm6|Thank you very much!||תנק יו ורי מאץ׳
dr1|How many people?||האו מני פיפל
dr2|Two, please.||טו, פליז
dr3|What would you like to order?||וואט וד יו לייק טו אורדר
dr4|Fried rice with chicken, not spicy.||פראייד רייס וית׳ צ׳יקן, נוט ספייסי
dr5|And to drink?||אנד טו דרינק
dr6|Just water, please.||ג׳אסט ווטר, פליז
dr7|Could I have the bill, please?||קוד איי הב דה ביל, פליז
dh1|Hello, I have a reservation.||הלו, איי הב א רזרוויישן
dh2|Under what name?||אנדר וואט ניים
dh3|The name is ...||דה ניים איז
dh4|Your passport, please.||יור פספורט, פליז
dh5|Your room is three-oh-five.||יור רום איז ת׳רי-או-פייב
dh6|What time is breakfast?||וואט טיים איז ברקפסט
dh7|From seven to ten.||פרום סבן טו טן
dd1|Excuse me, where is the station?||אקסקיוז מי, וור איז דה סטיישן
dd2|Go straight, then turn left.||גואו סטרייט, דן טרן לפט
dd3|Is it far from here?||איז איט פאר פרום היר
dd4|No, five minutes on foot.||נואו, פייב מיניטס און פוט
dd5|Thanks a lot!||תנקס א לוט
w_weather|Weather||ודר
w_sun|Sun||סאן
w_rain|Rain||ריין
w_wind|Wind||ווינד
w_cloud|Cloud||קלאוד
w_snow|Snow||סנואו
w_storm|Storm||סטורם
w_humid|Humid||היומיד
j_teacher|Teacher||טיצ׳ר
j_driver|Driver||דראייבר
j_waiter|Waiter||וייטר
j_cook|Cook||קוק
j_student|Student||סטודנט
j_engineer|Engineer||אנג׳יניר
j_nurse|Nurse||נרס
j_seller|Seller||סלר
j_guide|Tour guide||טור גאייד
j_pharmacist|Pharmacist||פרמסיסט
e_angry|Angry||אנגרי
e_scared|Scared||סקרד
e_bored|Bored||בורד
e_worried|Worried||ווריד
e_surprised|Surprised||סרפרייזד
e_calm|Calm||קאלם
e_excited|Excited||אקסייטד
e_love|In love||אין לאב
dir_north|North||נורת׳
dir_south|South||סאות׳
dir_east|East||איסט
dir_west|West||וסט
dir_corner|Corner||קורנר
dir_light|Traffic light||טרפיק לייט
dir_behind|Behind||ביהיינד
dir_front|In front||אין פרונט
dir_next|Next to||נקסט טו
dir_back|Back||בק
dir_up|Up||אפ
dir_down|Down||דאון`
});

/* ---- numbers & prices (0–999,999) → tokens [text, roman, hebrew] ---- */
/* ---- English ---- */
NW.en = (() => {
  const ones = [['zero','זירו'],['one','וואן'],['two','טו'],['three','ת׳רי'],['four','פור'],['five','פייב'],['six','סיקס'],['seven','סבן'],['eight','אייט'],['nine','ניין'],
    ['ten','טן'],['eleven','אילבן'],['twelve','טוולב'],['thirteen','ת׳רטין'],['fourteen','פורטין'],['fifteen','פיפטין'],['sixteen','סיקסטין'],['seventeen','סבנטין'],['eighteen','אייטין'],['nineteen','ניינטין']];
  const tens = [null,null,['twenty','טוונטי'],['thirty','ת׳רטי'],['forty','פורטי'],['fifty','פיפטי'],['sixty','סיקסטי'],['seventy','סבנטי'],['eighty','אייטי'],['ninety','ניינטי']];
  const w = x => tk(x[0], x[0], x[1]);
  function under1000(n, out) {
    if (n >= 100) { out.push(w(ones[Math.floor(n / 100)]), tk('hundred', 'hundred', 'הנדרד')); n %= 100; }
    if (n >= 20) { const t = tens[Math.floor(n / 10)], o = n % 10; out.push(o ? tk(t[0] + '-' + ones[o][0], t[0] + '-' + ones[o][0], t[1] + '-' + ones[o][1]) : w(t)); }
    else if (n > 0) out.push(w(ones[n]));
  }
  return n => {
    const out = [];
    if (n === 0) return [w(ones[0])];
    if (n >= 1000) { under1000(Math.floor(n / 1000), out); out.push(tk('thousand', 'thousand', 'ת׳אוזנד')); }
    under1000(n % 1000, out);
    return out;
  };
})();
NW.enCur = n => n === 1 ? tk('dollar', 'dollar', 'דולר') : tk('dollars', 'dollars', 'דולרז');
NUM.en = { tokens: (n, cur) => cur ? NW.en(n).concat([NW.enCur(n)]) : NW.en(n) };
