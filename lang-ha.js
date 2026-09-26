/* ===== LingoNest — lang-ha.js : Hausa content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('ha', {
  ver: '1.19.0',
  curSym: "₦",
  country: {"he": "ניגריה (צפון), ניז׳ר ומערב אפריקה", "en": "Northern Nigeria, Niger & West Africa", "ru": "Север Нигерии, Нигер", "es": "Norte de Nigeria y Níger", "ar": "شمال نيجيريا والنيجر"},
  emergency: [
    ["🇳🇬", {"he": "ניגריה — חירום", "en": "Nigeria — emergency", "ru": "Нигерия — экстренный", "es": "Nigeria — emergencias", "ar": "نيجيريا — الطوارئ"}, "112"],
    ["🚓", {"he": "ניגריה — משטרה", "en": "Nigeria — police", "ru": "Нигерия — полиция", "es": "Nigeria — policía", "ar": "نيجيريا — الشرطة"}, "199"],
    ["🇳🇪", {"he": "ניז׳ר — משטרה", "en": "Niger — police", "ru": "Нигер — полиция", "es": "Níger — policía", "ar": "النيجر — الشرطة"}, "17"]
  ],
  tips: [
    {"t": {"he": "ברכות — חלק חשוב בשיחה", "en": "Greetings matter"}, "b": {"he": "בהאוסה לא קופצים ישר לעניין. שואלים Ina kwana? (איך ישנת?), Ina gajiya? (איך העייפות?), Ina iyali? (מה שלום המשפחה?) — ועונים על הכול Lafiya lau (בסדר גמור). רק אחר כך מבקשים.", "en": "Don't jump straight to business. Ask Ina kwana? (how did you sleep?), Ina gajiya? (how's the tiredness?), Ina iyali? (how's the family?) — answer everything Lafiya lau (all fine). Then make your request."}, "ex": [["Ina gajiya?", "", "אינה גאג׳יה", "איך העייפות? (ברכה)", "How's the tiredness? (greeting)"], ["Lafiya lau", "", "לאפיה לאו", "הכול בסדר", "All is well"]]},
    {"t": {"he": "מילים מערבית", "en": "Arabic loans"}, "b": {"he": "האיסלאם הביא לסווהילית ולהאוסה הרבה ערבית. תזהה את המספרים 20–90: ashirin, talatin, arba'in, hamsin — כמו בערבית. גם ימי השבוע: Alhamis (חמישי), Jumma'a (שישי), Asabar (שבת).", "en": "Islam brought many Arabic words: 20–90 are ashirin, talatin, arba'in, hamsin — like Arabic. Days too: Alhamis, Jumma'a, Asabar."}, "ex": [["Hamsin", "", "המסין", "חמישים", "Fifty"]]},
    {"t": {"he": "Don Allah — בבקשה", "en": "Don Allah — please"}, "b": {"he": "Don Allah (\"למען השם\") הוא \"בבקשה\" היומיומי, ו-Na gode = תודה. אחרי עסקה טובה מוסיפים Allah ya saka (שאלוהים יגמול).", "en": "Don Allah (\"for God's sake\") is everyday \"please\", and Na gode = thanks. After a good deal add Allah ya saka (may God reward)."}, "ex": [["Na gode sosai", "", "נה גודה סוסאי", "תודה רבה", "Thank you very much"]]},
    {"t": {"he": "כבוד לגיל", "en": "Respect for age"}, "b": {"he": "לאנשים מבוגרים פונים בכבוד, לפעמים עם Baba (אבא) או Mama. נותנים ומקבלים ביד ימין. בצפון ניגריה השמרני — לבוש צנוע מתקבל בברכה.", "en": "Address elders respectfully, often as Baba or Mama. Give and receive with the right hand. In the conservative north, modest dress is appreciated."}, "ex": [["Sannu, Baba", "", "סאנו, באבה", "שלום, אבא (לאדם מבוגר)", "Hello, sir (to an elder)"]]},
    {"t": {"he": "מיקוח בשוק", "en": "Bargaining in the market"}, "b": {"he": "בשוק (kasuwa) מתמקחים. שואלים Nawa ne? (כמה?), עונים Ya yi tsada! (יקר!) ומבקשים Ka rage (תוריד). בחיוך — זה חלק מהתרבות.", "en": "In the market (kasuwa) you bargain: Nawa ne? (how much?), Ya yi tsada! (too expensive!), Ka rage (lower it). With a smile — it's part of the culture."}, "ex": [["Ka rage kaɗan", "", "קה ראגה קאדן", "תוריד קצת", "Lower it a bit"]]},
    {"t": {"he": "האוסה במערב אפריקה", "en": "Hausa across West Africa"}, "b": {"he": "האוסה משמשת כשפת מסחר גם מחוץ לניגריה — בניז׳ר, גאנה, קמרון וצ׳אד. בערים הגדולות בניגריה רבים מדברים גם אנגלית ופידג׳ין.", "en": "Hausa is a trade language beyond Nigeria — Niger, Ghana, Cameroon, Chad. In big Nigerian cities many also speak English and Pidgin."}, "ex": [["Kana jin Turanci?", "", "קאנה ג׳ין טורנצ׳י", "אתה מדבר אנגלית?", "Do you speak English?"]]}
  ],
  note: {"he": "האוסה נכתבת באותיות לטיניות, עם כמה אותיות מיוחדות: ɓ ו-ɗ (ב ו-ד \"נבלעות\" פנימה), ƙ (ק חזקה), ו-'y. היא השפה הגדולה בצפון ניגריה ובניז׳ר, ומדוברת על ידי עשרות מיליונים במערב אפריקה. יש בה הרבה מילים מערבית.", "en": "Hausa uses Latin letters plus a few special ones: ɓ and ɗ (\"swallowed\" b and d), ƙ (a strong k), and 'y. It's the big language of northern Nigeria and Niger, spoken by tens of millions across West Africa, with many Arabic loans.", "ru": "Хауса пишется латиницей с особыми буквами ɓ, ɗ, ƙ и 'y. Главный язык севера Нигерии и Нигера.", "es": "El hausa usa letras latinas con algunas especiales: ɓ, ɗ, ƙ e 'y. Es la gran lengua del norte de Nigeria y de Níger.", "ar": "تُكتب الهوسا بحروف لاتينية مع حروف خاصة: ɓ وɗ وƙ و'y. هي اللغة الكبرى في شمال نيجيريا والنيجر."},
  alpha: [
    ["A a", "a", "אַ", "a"],
    ["B b", "ba", "ב", "b"],
    ["Ɓ ɓ", "ɓa", "ב נבלעת פנימה", "ɓ"],
    ["C c", "ca", "צ׳", "c"],
    ["D d", "da", "ד", "d"],
    ["Ɗ ɗ", "ɗa", "ד נבלעת פנימה", "ɗ"],
    ["E e", "e", "אֶ", "e"],
    ["F f", "fa", "פ", "f"],
    ["G g", "ga", "ג", "g"],
    ["H h", "ha", "ה", "h"],
    ["I i", "i", "אִי", "i"],
    ["J j", "ja", "ג׳", "j"],
    ["K k", "ka", "ק", "k"],
    ["Ƙ ƙ", "ƙa", "ק חזקה (פליטה)", "ƙ"],
    ["L l", "la", "ל", "l"],
    ["M m", "ma", "מ", "m"],
    ["N n", "na", "נ", "n"],
    ["O o", "o", "אוֹ", "o"],
    ["R r", "ra", "ר", "r"],
    ["S s", "sa", "ס", "s"],
    ["Sh sh", "sha", "ש", "sh"],
    ["T t", "ta", "ט", "t"],
    ["Ts ts", "tsa", "צ (פליטה)", "ts"],
    ["U u", "u", "אוּ", "u"],
    ["W w", "wa", "ו", "w"],
    ["Y y", "ya", "י", "y"],
    ["'Y 'y", "'ya", "י חזקה", "'y"],
    ["Z z", "za", "ז", "z"]
  ],
  voiceFallback: "heb",
  /* speaker = female: [regex source, flags, replacement] */
  gender: [],
  words: `hello|Sannu||סאנו
bye|Sai anjima||סאי אנג׳ימה
morning|Ina kwana?||אינה קוואנה
thanks|Na gode||נה גודה
please|Don Allah||דון אללה
sorry|Yi haƙuri||יי האקורי
yes|Ee||אה
no|A'a||אעה
howareyou|Yaya kake?||יאיה קאקה
good|Lafiya lau||לאפיה לאו
ok|To||טו
n1|Ɗaya||דאיה
n2|Biyu||ביו
n3|Uku||אוקו
n4|Huɗu||הודו
n5|Biyar||ביאר
n6|Shida||שידה
n7|Bakwai||בקוואי
n8|Takwas||טקווס
n9|Tara||טרה
n10|Goma||גומה
n0|Sifili||סיפילי
n20|Ashirin||אשירין
n50|Hamsin||המסין
n100|Ɗari||דארי
n1000|Dubu||דובו
n11|Goma sha ɗaya||גומה שה דאיה
n12|Goma sha biyu||גומה שה ביו
n13|Goma sha uku||גומה שה אוקו
n14|Goma sha huɗu||גומה שה הודו
n15|Goma sha biyar||גומה שה ביאר
n16|Goma sha shida||גומה שה שידה
n17|Goma sha bakwai||גומה שה בקוואי
n18|Goma sha takwas||גומה שה טקווס
n19|Goma sha tara||גומה שה טרה
n30|Talatin||טלאטין
n40|Arba'in||ארבעין
n60|Sittin||סיטין
n70|Saba'in||סבעין
n80|Tamanin||טמנין
n90|Casa'in||צ׳אסעין
n200|Ɗari biyu||דארי ביו
n500|Ɗari biyar||דארי ביאר
n10000|Dubu goma||דובו גומה
water|Ruwa||רווה
toilet|Bayan gida||באיאן גידה
where|Ina?||אינה
howmuch|Nawa ne?||נאווה נה
this|Wannan||וואנן
friend|Aboki||אבוקי
food|Abinci||אבינצ׳י
bread|Burodi||בורודי
coffee|Kofi||קופי
tea|Shayi||שאיי
chicken|Kaza||קאזה
fish|Kifi||קיפי
rice|Shinkafa||שינקאפה
beer|Giya||גיה
bill|Lissafi||ליסאפי
tasty|Da daɗi||דה דאדי
egg|Ƙwai||קוואי
fruit|'Ya'yan itace||יאיאן איטצ׳ה
veg|Kayan lambu||קאיאן לאמבו
meat|Nama||נאמה
milk|Madara||מדארה
spicy|Mai yaji||מאי יאג׳י
restaurant|Gidan abinci||גידאן אבינצ׳י
ice|Ƙanƙara||קאנקארה
taxi|Tasi||טאסי
bus|Bas||באס
train|Jirgin ƙasa||ג׳ירגין קאסה
airport|Filin jirgin sama||פילין ג׳ירגין סאמה
hotel|Otal||אוטאל
left|Hagu||האגו
right|Dama||דאמה
straight|Kai tsaye||קאי צאיה
stop|Tsaya||צאיה
ticket|Tikiti||טיקיטי
money|Kuɗi||קודי
expensive|Mai tsada||מאי צאדה
cheap|Mai araha||מאי אראהה
market|Kasuwa||קסווה
pharmacy|Kantin magani||קאנטין מגאני
open|A buɗe||א בודה
closed|A rufe||א רופה
help|Taimako!||טאימאקו
police|'Yan sanda||יאן סאנדה
doctor|Likita||ליקיטה
hospital|Asibiti||אסיביטי
today|Yau||יאו
tomorrow|Gobe||גובה
yesterday|Jiya||ג׳יה
now|Yanzu||יאנזו
t_morning|Safiya||סאפיה
t_evening|Yamma||יאמה
t_night|Dare||דארה
t_week|Mako||מאקו
t_month|Wata||וואטה
t_year|Shekara||שקארה
t_hour|Awa||אווה
t_minute|Minti||מינטי
p_toilet|Ina bayan gida yake?||אינה באיאן גידה יאקה
p_cost|Nawa ne wannan?||נאווה נה וואנן
p_nounder|Ban gane ba||באן גאנה בה
p_english|Kana jin Turanci?||קאנה ג׳ין טורנצ׳י
p_slow|Don Allah ka yi magana a hankali||דון אללה קה יי מגאנה א האנקאלי
p_bill|Kawo lissafi, don Allah||קאוו ליסאפי, דון אללה
p_want|Ina son wannan||אינה סון וואנן
p_expensive|Ya yi tsada sosai||יה יי צאדה סוסאי
p_discount|Ka rage mini, don Allah||קה ראגה מיני, דון אללה
p_address|Kai ni wannan adireshi, don Allah||קאי ני וואנן אדירשי, דון אללה
p_hotel|Ina otal ɗin yake?||אינה אוטאל דין יאקה
p_doctor|Ina bukatar likita||אינה בוקאטאר ליקיטה
p_police|Kira 'yan sanda!||קירה יאן סאנדה
p_israel|Ni daga Isra'ila nake||ני דאגה איסראילה נאקה
p_name|Sunana ...||סונאנה
p_nice|Na ji daɗin saduwa da kai||נה ג׳י דאדין סאדווה דה קאי
p_water|Ruwa, don Allah||רווה, דון אללה
p_help|Za ka iya taimaka mini?||זה קה איה טאימאקה מיני
p_what|Menene wannan?||מננה וואנן
p_nospicy|Ba yaji, don Allah||בה יאג׳י, דון אללה
room|Ɗaki||דאקי
key|Makulli||מאקולי
bed|Gado||גאדו
shower|Wanka||וואנקה
towel|Tawul||טאוול
passport|Fasfo||פאספו
mon|Litinin||ליטינין
tue|Talata||טלאטה
wed|Laraba||לארבה
thu|Alhamis||אלחמיס
fri|Jumma'a||ג׳ומעה
sat|Asabar||אסבאר
sun|Lahadi||לאהדי
red|Ja||ג׳ה
blue|Shuɗi||שודי
green|Kore||קורה
yellow|Rawaya||ראוואיה
black|Baƙi||באקי
white|Fari||פארי
man|Namiji||נאמיג׳י
woman|Mace||מאצ׳ה
child|Yaro||יארו
family|Iyali||איאלי
i|Ni||ני
you|Kai||קאי
head|Kai (jiki)||קאי (ג׳יקי)
stomach|Ciki||צ׳יקי
hand|Hannu||האנו
pain|Ciwo||צ׳יוו
medicine|Magani||מגאני
sick|Ba lafiya||בה לאפיה
big|Babba||באבה
small|Ƙarami||קארמי
hot|Zafi||זאפי
cold|Sanyi||סאניי
bad|Mummuna||מומונה
beautiful|Kyakkyawa||קיאקיאווה
new|Sabo||סאבו
old|Tsoho||צוהו
fast|Da sauri||דה סאורי
slow|A hankali||א האנקאלי
near|Kusa||קוסה
far_a|Nisa||ניסה
clean|Mai tsabta||מאי צאבטה
dirty|Datti||דאטי
tired|Na gaji||נה גאג׳י
hungry|Ina jin yunwa||אינה ג׳ין יונווה
thirsty|Ina jin ƙishirwa||אינה ג׳ין קישירווה
happy|Farin ciki||פארין צ׳יקי
sad|Baƙin ciki||באקין צ׳יקי
easy|Sauƙi||סאוקי
difficult|Wuya||וויה
many|Da yawa||דה יאווה
eat|Ci||צ׳י
drink|Sha||שה
go|Tafi||טאפי
buy|Saya||סאיה
speak|Yi magana||יי מגאנה
sleep|Barci||בארצ׳י
understand|Gane||גאנה
come|Zo||זו
want|So||סו
need|Bukata||בוקאטה
know|Sani||סאני
see|Gani||גאני
hear|Ji||ג׳י
give|Ba||בה
take|Ɗauka||דאוקה
pay|Biya||ביה
wait|Jira||ג׳ירה
walk|Tafiya da ƙafa||טאפיה דה קאפה
read|Karanta||קראנטה
write|Rubuta||רובוטה
love|Ƙauna||קאונה
work|Aiki||אייקי
swim|Iyo||איו
c_table|Tebur na mutum biyu, don Allah||טבור נה מוטום ביו, דון אללה
c_menu|Kawo menu, don Allah||קאוו מניו, דון אללה
c_noice|Ba ƙanƙara, don Allah||בה קאנקארה, דון אללה
c_nomeat|Ba na cin nama||בה נה צ׳ין נאמה
c_allergy|Ina da rashin lafiyar gyaɗa||אינה דה ראשין לאפיאר גיאדה
c_delicious|Yana da daɗi sosai!||יאנה דה דאדי סוסאי
c_reserv|Na yi ajiyar ɗaki||נה יי אג׳יאר דאקי
c_wifi|Menene lambar wifi?||מננה לאמבאר וויפי
c_checkout|Yaushe zan fita?||יאושה זאן פיטה
c_howget|Yaya zan je can?||יאיה זאן ג׳ה צ׳אן
c_stophere|Tsaya nan, don Allah||צאיה נאן, דון אללה
c_far|Akwai nisa?||אקוואי ניסה
c_card|Zan iya biya da kati?||זאן איה ביה דה קאטי
c_looking|Ina kallo ne kawai, na gode||אינה קאלו נה קאוואי, נה גודה
c_yourname|Yaya sunanka?||יאיה סונאנקה
c_wherefrom|Daga ina kake?||דאגה אינה קאקה
c_seeyou|Sai anjima||סאי אנג׳ימה
c_cheers|Lafiya!||לאפיה
c_lost|Na ɓata||נה בטה
c_passport|Na rasa fasfona||נה ראסה פאספונה
c_hurts|Nan yana ciwo||נאן יאנה צ׳יוו
c_time|Ƙarfe nawa ne?||קארפה נאווה נה
c_again|Maimaita, don Allah||מאימאיטה, דון אללה
c_write|Za ka iya rubuta mini?||זה קה איה רובוטה מיני
dog|Kare||קארה
cat|Kyanwa||קיאנווה
bird|Tsuntsu||צונצו
horse|Doki||דוקי
cow|Saniya||סאניה
pig|Alade||אלאדה
elephant|Giwa||גיווה
monkey|Biri||בירי
snake|Maciji||מצ׳יג׳י
mosquito|Sauro||סאורו
lion|Zaki||זאקי
duck|Agwagwa||אגוואגווה
apple|Tuffa||טופה
banana|Ayaba||איאבה
orange|Lemu||למו
mango|Mangwaro||מאנגוורו
pineapple|Abarba||אבארבה
watermelon|Kankana||קאנקאנה
coconut|Kwakwa||קוואקווה
grapes|Inabi||אינאבי
lemon|Lemun tsami||למון צאמי
strawberry|Stroberi||סטרוברי
papaya|Gwanda||גוואנדה
tomato|Tumatir||טומאטיר
potato|Dankali||דאנקאלי
onion|Albasa||אלבאסה
garlic|Tafarnuwa||טפארנווה
cucumber|Kokwamba||קוקוומבה
carrot|Karas||קאראס
chili|Barkono||בארקונו
corn|Masara||מסארה
mushroom|Naman kaza||נאמאן קאזה
lettuce|Latas||לאטאס
eggplant|Gauta||גאוטה
soup|Miya||מייה
salad|Salati||סלאטי
noodles|Taliya||טליה
cheese|Cuku||צ׳וקו
butter|Man shanu||מאן שאנו
salt|Gishiri||גישירי
sugar|Sukari||סוקרי
cake|Kek||קק
icecream|Ice cream||אייס קרים
juice|Lemo||למו
wine|Giyar inabi||גיאר אינאבי
breakfast|Karin kumallo||קארין קומאלו
lunch|Abincin rana||אבינצ׳ין ראנה
dinner|Abincin dare||אבינצ׳ין דארה
fork|Cokali mai yatsa||צ׳וקאלי מאי יאצה
spoon|Cokali||צ׳וקאלי
knife|Wuƙa||ווקה
glass|Gilashi||גילאשי
plate|Faranti||פרנטי
bank|Banki||באנקי
atm|ATM||איי-טי-אם
beach|Bakin teku||באקין טקו
museum|Gidan tarihi||גידאן טריחי
temple|Wurin ibada||וורין איבאדה
street|Titi||טיטי
city|Birni||בירני
shop|Shago||שאגו
supermarket|Babban shago||באבאן שאגו
park|Wurin shaƙatawa||וורין שאקאטאווה
station|Tasha||טאשה
embassy|Ofishin jakadanci||אופישין ג׳אקאדנצ׳י
phone|Waya||ואיה
charger|Caja||צ׳אג׳ה
bag|Jaka||ג׳אקה
shoes|Takalma||טקאלמה
clothes|Tufafi||טופאפי
hat|Hula||הולה
glasses|Tabarau||טבאראו
map|Taswira||טאסווירה
sunscreen|Man kariya daga rana||מאן קריה דאגה ראנה
umbrella|Laima||לאימה
sf_order|Ina so in yi oda||אינה סו אין יי אודה
sf_recommend|Me za ka ba ni shawara?||מה זה קה בה ני שאווארה
sf_bottle|Kwalbar ruwa ɗaya, don Allah||קוואלבאר רווה דאיה, דון אללה
sf_isspicy|Akwai yaji a ciki?||אקוואי יאג׳י א צ׳יקי
sf_onemore|Ƙara ɗaya, don Allah||קארה דאיה, דון אללה
sf_nosugar|Ba sukari, don Allah||בה סוקרי, דון אללה
sf_takeaway|Zan tafi da shi||זאן טאפי דה שי
ss_smaller|Akwai ƙarami?||אקוואי קארמי
ss_try|Zan iya gwadawa?||זאן איה גוואדאווה
ss_two|Zan ɗauki biyu||זאן דאוקי ביו
ss_change|Kana da canji?||קאנה דה צ׳אנג׳י
ss_last|Nawa ne na ƙarshe?||נאווה נה נה קארשה
ss_bag|Ka ba ni leda, don Allah||קה בה ני לדה, דון אללה
sm_busstop|Ina tashar bas take?||אינה טאשאר באס טאקה
sm_trainleave|Yaushe jirgin ƙasa zai tashi?||יאושה ג׳ירגין קאסה זאי טאשי
sm_oneticket|Tikiti ɗaya, don Allah||טיקיטי דאיה, דון אללה
sm_howlong|Zai ɗauki lokaci nawa?||זאי דאוקי לוקאצ׳י נאווה
sm_meter|Kunna mita, don Allah||קונה מיטה, דון אללה
sm_slowdrive|Ka tuƙa a hankali, don Allah||קה טוקה א האנקאלי, דון אללה
sm_airport|Ina so in je filin jirgin sama||אינה סו אין ג׳ה פילין ג׳ירגין סאמה
sh_leavebag|Zan iya barin jakata nan?||זאן איה בארין ג׳אקאטה נאן
sh_ac|Na'urar sanyaya ba ta aiki||נאורר סאניאיה בה טה אייקי
sh_breakfast|Akwai karin kumallo?||אקוואי קארין קומאלו
sh_towel|Ina bukatar wani tawul||אינה בוקאטאר ואני טאוול
sh_taxi|Za ka iya kira mini tasi?||זה קה איה קירה מיני טאסי
sh_late|Zan iya fita a makare?||זאן איה פיטה א מאקארה
so_learning|Ina koyon Hausa||אינה קויון האוסה
so_thankshelp|Na gode da taimakonka||נה גודה דה טאימאקונקה
so_photo|Za ka iya ɗaukar mana hoto?||זה קה איה דאוקאר מאנה הוטו
so_like|Ina son wannan wuri||אינה סון וואנן וורי
so_vacation|Ina hutu a nan||אינה הוטו א נאן
so_howsay|Yaya ake cewa wannan?||יאיה אקה צ׳ווה וואנן
so_noproblem|Ba matsala||בה מאצאלה
so_beautiful|Yana da kyau sosai!||יאנה דה קיאו סוסאי
sp_unwell|Ba na jin daɗi||בה נה ג׳ין דאדי
sp_nearhosp|Ina asibiti mafi kusa?||אינה אסיביטי מאפי קוסה
sp_fever|Ina da zazzaɓi||אינה דה זאזאבי
sp_helpme|Taimake ni, don Allah||טאימאקה ני, דון אללה
sp_stolen|An sace jakata||אן סאצ׳ה ג׳אקאטה
sp_embassy|Ina bukatar ofishin jakadancin Isra'ila||אינה בוקאטאר אופישין ג׳אקאדנצ׳ין איסראילה
dt1|Ina za ka?||אינה זה קה
dt2|Wannan otal, don Allah.||וואנן אוטאל, דון אללה
dt3|To, shiga.||טו, שיגה
dt4|Nawa ne?||נאווה נה
dt5|Naira ɗari biyu.||נאירה דארי ביו
dt6|Kunna mita, don Allah.||קונה מיטה, דון אללה
dt7|Ba matsala.||בה מאצאלה
dt8|Tsaya nan, na gode.||צאיה נאן, נה גודה
dm1|Nawa ne wannan kayan?||נאווה נה וואנן קאיאן
dm2|Ɗari uku.||דארי אוקו
dm3|Ya yi tsada! Ɗari biyu?||יה יי צאדה! דארי ביו
dm4|Ɗari biyu da hamsin, na ƙarshe.||דארי ביו דה המסין, נה קארשה
dm5|To, zan ɗauka.||טו, זאן דאוקה
dm6|Na gode sosai!||נה גודה סוסאי
dr1|Ku nawa ne?||קו נאווה נה
dr2|Mu biyu ne.||מו ביו נה
dr3|Me za ku ci?||מה זה קו צ׳י
dr4|Shinkafa soyayyiya da kaza, ba yaji.||שינקאפה סויאייה דה קאזה, בה יאג׳י
dr5|Me za ku sha?||מה זה קו שה
dr6|Ruwa kawai, don Allah.||רווה קאוואי, דון אללה
dr7|Kawo lissafi, don Allah.||קאוו ליסאפי, דון אללה
dh1|Sannu, na yi ajiyar ɗaki.||סאנו, נה יי אג׳יאר דאקי
dh2|Da wane suna?||דה וואנה סונה
dh3|Da sunan ...||דה סונאן
dh4|Fasfonka, don Allah.||פאספונקה, דון אללה
dh5|Ɗakinka lamba ɗari uku da biyar ne.||דאקינקה לאמבה דארי אוקו דה ביאר נה
dh6|Karfe nawa ake karin kumallo?||קארפה נאווה אקה קארין קומאלו
dh7|Daga ƙarfe bakwai zuwa goma.||דאגה קארפה בקוואי זווה גומה
dd1|Gafara dai, ina tasha take?||גאפארה דאי, אינה טאשה טאקה
dd2|Kai tsaye, sannan ka juya hagu.||קאי צאיה, סאנאן קה ג׳ויה האגו
dd3|Akwai nisa daga nan?||אקוואי ניסה דאגה נאן
dd4|A'a, minti biyar da ƙafa.||אעה, מינטי ביאר דה קאפה
dd5|Na gode ƙwarai!||נה גודה קוואראי
da1|Menene dalilin ziyararka?||מננה דלילין זיארארקה
da2|Kwana nawa za ka yi?||קוואנה נאווה זה קה יי
da3|Mako biyu.||מאקו ביו
da4|Barka da zuwa!||בארקה דה זווה
dp1|Ina ke maka ciwo?||אינה קה מאקה צ׳יוו
dp2|Sha wannan magani sau biyu a rana.||שה וואנן מגאני סאו ביו א ראנה
dp4|Allah ya ba ka lafiya!||אללה יה בה קה לאפיה
ds1|Ina son layin waya mai intanet.||אינה סון לאיין ואיה מאי אינטנט
ds2|Na kwana nawa?||נה קוואנה נאווה
ds3|Na kwana goma.||נה קוואנה גומה
ds4|Ya gama, yanzu kana da intanet.||יה גאמה, יאנזו קאנה דה אינטנט
dc1|Me kake nema?||מה קאקה נמה
dc2|Akwai wannan mai launin shuɗi?||אקוואי וואנן מאי לאונין שודי
dc3|Akwai, wane girma?||אקוואי, וואנה גירמה
dc4|Matsakaici.||מאצאקאיצ׳י
dc5|To, ɗakin gwaji yana can.||טו, דאקין גוואג׳י יאנה צ׳אן
dg1|Ina so in yi ajiyar yawon buɗe ido na gobe.||אינה סו אין יי אג׳יאר יאוון בודה אידו נה גובה
dg2|Za a tashi ƙarfe takwas na safe.||זה א טאשי קארפה טקווס נה סאפה
dg3|Akwai abincin rana a ciki?||אקוואי אבינצ׳ין ראנה א צ׳יקי
dg4|Eh, da ruwa ma.||אה, דה רווה מה
dg5|Madalla, mutum biyu don Allah.||מאדאלה, מוטום ביו דון אללה
w_weather|Yanayi||יאנאיי
w_sun|Rana||ראנה
w_rain|Ruwan sama||רוואן סאמה
w_wind|Iska||איסקה
w_cloud|Gajimare||גאג׳ימארה
w_snow|Dusar ƙanƙara||דוסאר קאנקארה
w_storm|Hadari||האדרי
w_humid|Danshi||דאנשי
j_teacher|Malami||מאלאמי
j_driver|Direba||דירבה
j_waiter|Mai hidima||מאי הידימה
j_cook|Mai dafa abinci||מאי דאפה אבינצ׳י
j_student|Ɗalibi||דאליבי
j_engineer|Injiniya||אינג׳יניה
j_nurse|Ma'aikaciyar jinya||מאאיקאציאר ג׳יניה
j_seller|Mai sayarwa||מאי סאיארווה
j_guide|Jagora||ג׳אגורה
j_pharmacist|Mai sayar da magani||מאי סאיאר דה מגאני
e_angry|Na yi fushi||נה יי פושי
e_scared|Na ji tsoro||נה ג׳י צורו
e_bored|Na gaji da jira||נה גאג׳י דה ג׳ירה
e_worried|Ina damuwa||אינה דמווה
e_surprised|Na yi mamaki||נה יי מאמאקי
e_calm|Natsuwa||נאצווה
e_excited|Ina farin ciki sosai||אינה פארין צ׳יקי סוסאי
e_love|Ina ƙauna||אינה קאונה
dir_north|Arewa||ארווה
dir_south|Kudu||קודו
dir_east|Gabas||גאבאס
dir_west|Yamma (hanya)||יאמה (האניה)
dir_corner|Kusurwa||קוסורווה
dir_light|Fitilar hanya||פיטילאר האניה
dir_behind|Baya||באיה
dir_front|Gaba||גאבה
dir_next|Kusa da||קוסה דה
dir_back|Koma baya||קומה באיה
dir_up|Sama||סאמה
dir_down|Ƙasa||קאסה`
});

/* ---- numbers & prices (0–999,999) in Hausa → tokens [text, roman, hebrew]. Currency first: naira ɗari biyu ---- */
NW.ha = (() => {
  const O = [['sifili', 'סיפילי'], ['ɗaya', 'דאיה'], ['biyu', 'ביו'], ['uku', 'אוקו'], ['huɗu', 'הודו'], ['biyar', 'ביאר'], ['shida', 'שידה'], ['bakwai', 'בקוואי'], ['takwas', 'טקווס'], ['tara', 'טרה']];
  const T = [, ['goma', 'גומה'], ['ashirin', 'אשירין'], ['talatin', 'טלאטין'], ["arba'in", 'ארבעין'], ['hamsin', 'המסין'], ['sittin', 'סיטין'], ["saba'in", 'סבעין'], ['tamanin', 'טמנין'], ["casa'in", 'צ׳אסעין']];
  const DA = ['da', 'דה'];
  function u1000(n) {                       /* → list of groups */
    const g = [], h = Math.floor(n / 100), t = Math.floor(n % 100 / 10), u = n % 10;
    if (h) g.push(h === 1 ? [['ɗari', 'דארי']] : [['ɗari', 'דארי'], O[h]]);
    if (t === 1 && u) g.push([T[1], ['sha', 'שה'], O[u]]);
    else { if (t) g.push([T[t]]); if (u) g.push([O[u]]); }
    return g;
  }
  const join = gs => { const out = []; gs.forEach((g, i) => { if (i) out.push(DA); out.push(...g); }); return out; };
  function words(n) {
    if (n === 0) return [O[0]];
    const th = Math.floor(n / 1000), r = n % 1000, g = [];
    if (th) g.push(th === 1 ? [['dubu', 'דובו']] : [['dubu', 'דובו'], ...join(u1000(th))]);
    g.push(...u1000(r));
    return join(g);
  }
  return (n, cur) => (cur ? [['naira', 'נאירה'], ...words(n)] : words(n)).map(a => tk(a[0], a[0], a[1]));
})();
NUM.ha = { tokens: (n, cur) => NW.ha(n, cur) };
