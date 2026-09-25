/* ===== LingoNest — lang-de.js : German content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('de', {
  ver: '1.15.0',
  curSym: "€",
  country: {"he": "גרמניה, אוסטריה ושווייץ", "en": "Germany, Austria & Switzerland", "ru": "Германия, Австрия и Швейцария", "es": "Alemania, Austria y Suiza", "ar": "ألمانيا والنمسا وسويسرا"},
  emergency: [
    ["🆘", {"he": "חירום — אמבולנס וכבאות (בכל אירופה)", "en": "Emergency — ambulance & fire (all Europe)", "ru": "Экстренный — скорая и пожарные", "es": "Emergencias — ambulancia y bomberos", "ar": "الطوارئ — الإسعاف والإطفاء"}, "112"],
    ["🇩🇪", {"he": "גרמניה — משטרה", "en": "Germany — police", "ru": "Германия — полиция", "es": "Alemania — policía", "ar": "ألمانيا — الشرطة"}, "110"],
    ["🇦🇹", {"he": "אוסטריה — משטרה / אמבולנס", "en": "Austria — police / ambulance", "ru": "Австрия — полиция / скорая", "es": "Austria — policía / ambulancia", "ar": "النمسا — الشرطة / الإسعاف"}, "133", "144"],
    ["🇨🇭", {"he": "שווייץ — משטרה / אמבולנס", "en": "Switzerland — police / ambulance", "ru": "Швейцария — полиция / скорая", "es": "Suiza — policía / ambulancia", "ar": "سويسرا — الشرطة / الإسعاف"}, "117", "144"]
  ],
  tips: [
    {"t": {"he": "Sie מול du", "en": "Sie vs. du"}, "b": {"he": "Sie (זי, תמיד באות גדולה) הוא \"אתה\" המנומס — לזרים, למוכרים ולפקידים. du רק לחברים ולצעירים. גרמנים מקפידים על זה יותר מרוב האירופאים — בספק, Sie.", "en": "Sie (always capitalized) is the polite \"you\" — strangers, shop staff, officials. du for friends and young people. Germans care about this — when in doubt, Sie."}, "ex": [["Sprechen Sie Englisch?", "", "שפרכן זי אנגליש", "אתה מדבר אנגלית? (מנומס)", "Do you speak English? (polite)"]]},
    {"t": {"he": "der, die, das", "en": "der, die, das"}, "b": {"he": "לכל שם עצם יש אחד משלושה מינים: der (זכר), die (נקבה), das (סתמי), ולא תמיד יש היגיון: das Mädchen (הילדה) הוא סתמי. טיפ: לומדים כל מילה יחד עם ה-der/die/das שלה — כך האפליקציה מציגה אותן.", "en": "Every noun is der (masc.), die (fem.) or das (neuter) — not always logical: das Mädchen (the girl) is neuter. Learn each word with its article, as the app shows them."}, "ex": [["Der Zug / die Stadt / das Hotel", "", "דר צוג / די שטט / דאס הוטל", "הרכבת / העיר / המלון", "The train / the city / the hotel"]]},
    {"t": {"he": "ei מול ie — הטריק החשוב", "en": "ei vs. ie — the key trick"}, "b": {"he": "קוראים את האות השנייה: ei = איי (nein = ניין, Wein = ויין), ie = אִי (Bier = ביר, Liebe = ליבה). ובנוסף: w נשמע ו, ו-v נשמע פ.", "en": "Read the second letter: ei = \"eye\" (nein, Wein), ie = \"ee\" (Bier, Liebe). Also: w sounds v, and v sounds f."}, "ex": [["Nein", "", "ניין", "לא", "No"], ["Das Bier", "", "דאס ביר", "הבירה", "The beer"]]},
    {"t": {"he": "Ich möchte — להזמין בנימוס", "en": "Ich möchte — ordering politely"}, "b": {"he": "Ich will (אני רוצה) נשמע ישיר מדי. Ich möchte (איך מכטה, הייתי רוצה) מתאים לכל מקום. ובסוף — bitte. במסעדה נוהגים לעגל את החשבון כטיפ ולהגיד את הסכום למלצר.", "en": "Ich will sounds blunt; Ich möchte (I'd like) works everywhere, plus bitte. In restaurants you round up the bill as a tip and tell the waiter the total."}, "ex": [["Ich möchte ein Bier, bitte", "", "איך מכטה איין ביר, ביטה", "הייתי רוצה בירה, בבקשה", "I'd like a beer, please"]]},
    {"t": {"he": "דיוק ושקט", "en": "Punctuality and quiet"}, "b": {"he": "בגרמניה מגיעים בזמן — איחור של 5 דקות דורש התנצלות. ביום ראשון רוב החנויות סגורות, ושומרים על שקט בשעות הערב. בתחבורה הציבורית קונים כרטיס ומחתימים אותו לפני העלייה — אין מחסומים, אבל יש ביקורות.", "en": "Be on time — 5 minutes late needs an apology. Most shops close on Sunday, and evenings are quiet. On public transport buy and validate your ticket before boarding — no gates, but inspectors."}, "ex": [["Entschuldigung, ich bin spät", "", "אנטשולדיגונג, איך בין שפט", "סליחה, איחרתי", "Sorry, I'm late"]]},
    {"t": {"he": "אוסטריה ושווייץ", "en": "Austria & Switzerland"}, "b": {"he": "באוסטריה ובדרום גרמניה אומרים Grüß Gott (גריס גוט) או Servus כשלום. בשווייץ — Grüezi (גריאצי). השוויצרים מדברים בדיאלקט שקשה להבין, אבל כולם מבינים ועונים גם בגרמנית תקנית.", "en": "In Austria and southern Germany say Grüß Gott or Servus; in Switzerland Grüezi. Swiss dialect is hard to follow, but everyone understands and answers in standard German."}, "ex": [["Grüß Gott!", "", "גריס גוט", "שלום (אוסטריה/בוואריה)", "Hello (Austria/Bavaria)"], ["Grüezi!", "", "גריאצי", "שלום (שווייץ)", "Hello (Switzerland)"]]}
  ],
  note: {"he": "בגרמנית 26 אותיות ועוד ä, ö, ü (אומלאוט) ו-ß (ס כפולה). כל שם עצם נכתב באות גדולה (das Haus). הקריאה עקבית — ברגע שמכירים את הצירופים (ei, ie, sch, ch) קוראים כמעט הכול נכון.", "en": "German has 26 letters plus ä, ö, ü and ß. Every noun is capitalized (das Haus). Reading is consistent — once you know the combinations (ei, ie, sch, ch) you read almost everything right.", "ru": "В немецком 26 букв плюс ä, ö, ü и ß. Все существительные пишутся с большой буквы. Чтение последовательное — зная сочетания (ei, ie, sch, ch), читаешь почти всё правильно.", "es": "El alemán tiene 26 letras más ä, ö, ü y ß. Todos los sustantivos van en mayúscula. La lectura es regular: conociendo las combinaciones (ei, ie, sch, ch) lees casi todo bien.", "ar": "في الألمانية 26 حرفا إضافة إلى ä وö وü وß. كل الأسماء تبدأ بحرف كبير. القراءة منتظمة — بمعرفة التركيبات (ei, ie, sch, ch) تقرأ كل شيء تقريبا بشكل صحيح."},
  vowelNote: {"he": "ei = איי (nein = ניין), ie = אִי (Bier = ביר) — הפוך ממה שנראה! w = ו (V), v = פ, z = צ, s לפני תנועה = ז. בתחילת מילה sp/st נשמעים שפּ/שט (Straße = שטרסה).", "en": "ei = \"eye\" (nein), ie = \"ee\" (Bier) — the opposite of what it looks like! w = v, v = f, z = ts, s before a vowel = z. At the start sp/st sound shp/sht.", "ru": "ei = «ай» (nein), ie = «и» (Bier). w = «в», v = «ф», z = «ц», s перед гласной = «з». В начале слова sp/st = «шп/шт».", "es": "ei = \"ai\" (nein), ie = \"i\" (Bier). w = v, v = f, z = ts, s ante vocal = z. Al inicio sp/st suenan \"shp/sht\".", "ar": "ei = آي (nein)، ie = إي (Bier). w = ف (V)، v = ف، z = تس، s قبل حركة = ز. في أول الكلمة sp/st = شب/شت."},
  alpha: [
    ["A a", "A", "אַ", "a"],
    ["Ä ä", "Ä", "אֶ", "a-umlaut"],
    ["B b", "B", "ב", "be"],
    ["C c", "C", "ק / צ", "ce"],
    ["D d", "D", "ד", "de"],
    ["E e", "E", "אֶ", "e"],
    ["F f", "F", "פ", "ef"],
    ["G g", "G", "ג", "ge"],
    ["H h", "H", "ה (שקטה אחרי תנועה)", "ha"],
    ["I i", "I", "אִי", "i"],
    ["J j", "J", "י", "jot"],
    ["K k", "K", "ק", "ka"],
    ["L l", "L", "ל", "el"],
    ["M m", "M", "מ", "em"],
    ["N n", "N", "נ", "en"],
    ["O o", "O", "אוֹ", "o"],
    ["Ö ö", "Ö", "אֶ בשפתיים מעוגלות", "o-umlaut"],
    ["P p", "P", "פּ", "pe"],
    ["Q q", "Q", "קוו", "ku"],
    ["R r", "R", "ר גרונית", "er"],
    ["S s", "S", "ז / ס", "es"],
    ["ß", "ß", "ס כפולה", "eszett"],
    ["T t", "T", "ט", "te"],
    ["U u", "U", "אוּ", "u"],
    ["Ü ü", "Ü", "אִי בשפתיים מעוגלות", "u-umlaut"],
    ["V v", "V", "פ", "fau"],
    ["W w", "W", "ו (V)", "we"],
    ["X x", "X", "קס", "ix"],
    ["Y y", "Y", "אִי / י", "ypsilon"],
    ["Z z", "Z", "צ", "zet"]
  ],
  vowels: [
    ["ei", "nein", "איי (nein = ניין)", "ei"],
    ["ie", "Bier", "אִי (Bier = ביר)", "ie"],
    ["eu / äu", "heute", "אוֹי (heute = הויטה)", "eu"],
    ["sch", "Schule", "ש (Schule = שולה)", "sch"],
    ["ch", "ich", "ח רכה / ש (ich = איך)", "ch"],
    ["sp / st", "Straße", "שפּ / שט בתחילת מילה", "sp / st"],
    ["z", "Zug", "צ (Zug = צוג)", "z"],
    ["w", "Wasser", "ו (Wasser = וואסר)", "w"],
    ["v", "Vater", "פ (Vater = פאטר)", "v"],
    ["-er", "Wasser", "אַר רכה בסוף מילה", "-er"]
  ],
  /* speaker = female: [regex source, flags, replacement] */
  gender: [],
  words: `hello|Hallo / Guten Tag||האלו / גוטן טאג
bye|Tschüss / Auf Wiedersehen||צ׳וס / אויף וידרזיין
morning|Guten Morgen||גוטן מורגן
thanks|Danke||דנקה
please|Bitte||ביטה
sorry|Entschuldigung||אנטשולדיגונג
yes|Ja||יא
no|Nein||ניין
howareyou|Wie geht es Ihnen?||וי גייט אס אינן
good|Gut||גוט
ok|Okay / In Ordnung||אוקיי / אין אורדנונג
n1|Eins||איינס
n2|Zwei||צוויי
n3|Drei||דריי
n4|Vier||פיר
n5|Fünf||פינף
n6|Sechs||זקס
n7|Sieben||זיבן
n8|Acht||אכט
n9|Neun||נוין
n10|Zehn||צן
n0|Null||נול
n20|Zwanzig||צוואנציג
n50|Fünfzig||פינפציג
n100|Hundert||הונדרט
n1000|Tausend||טאוזנט
n11|Elf||אלף
n12|Zwölf||צוולף
n13|Dreizehn||דרייצן
n14|Vierzehn||פירצן
n15|Fünfzehn||פינפצן
n16|Sechzehn||זכצן
n17|Siebzehn||זיבצן
n18|Achtzehn||אכצן
n19|Neunzehn||נוינצן
n30|Dreißig||דרייסיג
n40|Vierzig||פירציג
n60|Sechzig||זכציג
n70|Siebzig||זיבציג
n80|Achtzig||אכציג
n90|Neunzig||נוינציג
n200|Zweihundert||צוויי-הונדרט
n500|Fünfhundert||פינף-הונדרט
n10000|Zehntausend||צן-טאוזנט
water|Wasser||וואסר
toilet|Die Toilette||די טואלטה
where|Wo?||וו
howmuch|Wie viel?||וי פיל
this|Das||דאס
friend|Freund||פרוינד
food|Das Essen||דאס אסן
bread|Das Brot||דאס ברוט
coffee|Der Kaffee||דר קפה
tea|Der Tee||דר טה
chicken|Das Hähnchen||דאס הנכן
fish|Der Fisch||דר פיש
rice|Der Reis||דר רייס
beer|Das Bier||דאס ביר
bill|Die Rechnung||די רכנונג
tasty|Lecker||לקר
egg|Das Ei||דאס איי
fruit|Das Obst||דאס אובסט
veg|Das Gemüse||דאס גמיזה
meat|Das Fleisch||דאס פלייש
milk|Die Milch||די מילך
spicy|Scharf||שארף
restaurant|Das Restaurant||דאס רסטורן
ice|Das Eis||דאס אייס
taxi|Das Taxi||דאס טקסי
bus|Der Bus||דר בוס
train|Der Zug||דר צוג
airport|Der Flughafen||דר פלוגהאפן
hotel|Das Hotel||דאס הוטל
left|Links||לינקס
right|Rechts||רכטס
straight|Geradeaus||גרדה-אאוס
stop|Halt||האלט
ticket|Die Fahrkarte||די פארקרטה
money|Das Geld||דאס גלט
expensive|Teuer||טויר
cheap|Billig||ביליג
market|Der Markt||דר מרקט
pharmacy|Die Apotheke||די אפוטקה
open|Offen||אופן
closed|Geschlossen||גשלוסן
help|Hilfe!||הילפה
police|Die Polizei||די פוליצאי
doctor|Der Arzt||דר ארצט
hospital|Das Krankenhaus||דאס קרנקנהאוס
today|Heute||הויטה
tomorrow|Morgen||מורגן
yesterday|Gestern||גסטרן
now|Jetzt||יצט
t_morning|Der Morgen||דר מורגן
t_evening|Der Abend||דר אבנד
t_night|Die Nacht||די נאכט
t_week|Die Woche||די ווכה
t_month|Der Monat||דר מונאט
t_year|Das Jahr||דאס יאר
t_hour|Die Stunde||די שטונדה
t_minute|Die Minute||די מינוטה
p_toilet|Wo ist die Toilette?||וו איסט די טואלטה
p_cost|Wie viel kostet das?||וי פיל קוסטט דאס
p_nounder|Ich verstehe nicht||איך פרשטיה ניכט
p_english|Sprechen Sie Englisch?||שפרכן זי אנגליש
p_slow|Bitte sprechen Sie langsam||ביטה שפרכן זי לנגזאם
p_bill|Die Rechnung, bitte||די רכנונג, ביטה
p_want|Ich möchte das||איך מכטה דאס
p_expensive|Das ist zu teuer||דאס איסט צו טויר
p_discount|Geht es billiger?||גייט אס ביליגר
p_address|Bitte bringen Sie mich zu dieser Adresse||ביטה ברינגן זי מיך צו דיזר אדרסה
p_hotel|Wo ist das Hotel?||וו איסט דאס הוטל
p_doctor|Ich brauche einen Arzt||איך בראוכה איינן ארצט
p_police|Rufen Sie die Polizei!||רופן זי די פוליצאי
p_israel|Ich komme aus Israel||איך קומה אאוס איזראל
p_name|Ich heiße ...||איך הייסה
p_nice|Freut mich||פרויט מיך
p_water|Wasser, bitte||וואסר, ביטה
p_help|Können Sie mir helfen?||קנן זי מיר הלפן
p_what|Was ist das?||ואס איסט דאס
p_nospicy|Nicht scharf, bitte||ניכט שארף, ביטה
room|Das Zimmer||דאס צימר
key|Der Schlüssel||דר שליסל
bed|Das Bett||דאס בט
shower|Die Dusche||די דושה
towel|Das Handtuch||דאס הנטוך
passport|Der Reisepass||דר רייזהפס
mon|Montag||מונטאג
tue|Dienstag||דינסטאג
wed|Mittwoch||מיטוך
thu|Donnerstag||דונרסטאג
fri|Freitag||פרייטאג
sat|Samstag||זמסטאג
sun|Sonntag||זונטאג
red|Rot||רוט
blue|Blau||בלאו
green|Grün||גרין
yellow|Gelb||גלב
black|Schwarz||שוורץ
white|Weiß||וייס
man|Der Mann||דר מאן
woman|Die Frau||די פראו
child|Das Kind||דאס קינד
family|Die Familie||די פמיליה
i|Ich||איך
you|Sie||זי
head|Der Kopf||דר קופף
stomach|Der Bauch||דר באוך
hand|Die Hand||די הנד
pain|Der Schmerz||דר שמרץ
medicine|Das Medikament||דאס מדיקמנט
sick|Krank||קרנק
big|Groß||גרוס
small|Klein||קליין
hot|Heiß||הייס
cold|Kalt||קאלט
bad|Schlecht||שלכט
beautiful|Schön||שן
new|Neu||נוי
old|Alt||אלט
fast|Schnell||שנל
slow|Langsam||לנגזאם
near|Nah||נא
far_a|Weit||וייט
clean|Sauber||זאובר
dirty|Schmutzig||שמוציג
tired|Müde||מידה
hungry|Hungrig||הונגריג
thirsty|Durstig||דורסטיג
happy|Glücklich||גליקליך
sad|Traurig||טראוריג
easy|Einfach||איינפך
difficult|Schwierig||שוויריג
many|Viel||פיל
eat|Essen||אסן
drink|Trinken||טרינקן
go|Gehen||גיין
buy|Kaufen||קאופן
speak|Sprechen||שפרכן
sleep|Schlafen||שלאפן
understand|Verstehen||פרשטיין
come|Kommen||קומן
want|Wollen||וולן
need|Brauchen||בראוכן
know|Wissen||ויסן
see|Sehen||זיין
hear|Hören||הרן
give|Geben||גייבן
take|Nehmen||ניימן
pay|Bezahlen||בצאלן
wait|Warten||ורטן
walk|Laufen||לאופן
read|Lesen||לייזן
write|Schreiben||שרייבן
love|Lieben||ליבן
work|Arbeiten||ארבייטן
swim|Schwimmen||שווימן
c_table|Einen Tisch für zwei, bitte||איינן טיש פיר צוויי, ביטה
c_menu|Die Speisekarte, bitte||די שפייזהקרטה, ביטה
c_noice|Ohne Eis, bitte||אונה אייס, ביטה
c_nomeat|Ich esse kein Fleisch||איך אסה קיין פלייש
c_allergy|Ich bin allergisch gegen Nüsse||איך בין אלרגיש גגן ניסה
c_delicious|Sehr lecker!||זר לקר
c_reserv|Ich habe eine Reservierung||איך הבה איינה רזרווירונג
c_wifi|Wie ist das WLAN-Passwort?||וי איסט דאס ולאן-פסוורט
c_checkout|Bis wann muss ich auschecken?||ביס ואן מוס איך אאוסצ׳קן
c_howget|Wie komme ich dorthin?||וי קומה איך דורט-הין
c_stophere|Halten Sie hier, bitte||האלטן זי היר, ביטה
c_far|Ist es weit?||איסט אס וייט
c_card|Kann ich mit Karte zahlen?||קן איך מיט קרטה צאלן
c_looking|Ich schaue nur, danke||איך שאוא נור, דנקה
c_yourname|Wie heißen Sie?||וי הייסן זי
c_wherefrom|Woher kommen Sie?||וו-הר קומן זי
c_seeyou|Bis später||ביס שפטר
c_cheers|Prost!||פרוסט
c_lost|Ich habe mich verlaufen||איך הבה מיך פרלאופן
c_passport|Ich habe meinen Pass verloren||איך הבה מיינן פס פרלורן
c_hurts|Es tut hier weh||אס טוט היר וה
c_time|Wie spät ist es?||וי שפט איסט אס
c_again|Können Sie das wiederholen?||קנן זי דאס וידרהולן
c_write|Können Sie das aufschreiben?||קנן זי דאס אאופשרייבן
dog|Der Hund||דר הונד
cat|Die Katze||די קצה
bird|Der Vogel||דר פוגל
horse|Das Pferd||דאס פפרד
cow|Die Kuh||די קו
pig|Das Schwein||דאס שוויין
elephant|Der Elefant||דר אלפנט
monkey|Der Affe||דר אפה
snake|Die Schlange||די שלנגה
mosquito|Die Mücke||די מיקה
lion|Der Löwe||דר לווה
duck|Die Ente||די אנטה
apple|Der Apfel||דר אפפל
banana|Die Banane||די בננה
orange|Die Orange||די אורנז׳ה
mango|Die Mango||די מנגו
pineapple|Die Ananas||די אננס
watermelon|Die Wassermelone||די וואסרמלונה
coconut|Die Kokosnuss||די קוקוסנוס
grapes|Die Trauben||די טראובן
lemon|Die Zitrone||די ציטרונה
strawberry|Die Erdbeere||די ארדברה
papaya|Die Papaya||די פפאיה
tomato|Die Tomate||די טומטה
potato|Die Kartoffel||די קרטופל
onion|Die Zwiebel||די צוויבל
garlic|Der Knoblauch||דר קנובלאוך
cucumber|Die Gurke||די גורקה
carrot|Die Karotte||די קרוטה
chili|Die Chili||די צ׳ילי
corn|Der Mais||דר מאיס
mushroom|Der Pilz||דר פילץ
lettuce|Der Salat||דר זלאט
eggplant|Die Aubergine||די אוברז׳ינה
soup|Die Suppe||די זופה
salad|Der Salat (Gericht)||דר זלאט (גריכט)
noodles|Die Nudeln||די נודלן
cheese|Der Käse||דר קזה
butter|Die Butter||די בוטר
salt|Das Salz||דאס זלץ
sugar|Der Zucker||דר צוקר
cake|Der Kuchen||דר קוכן
icecream|Das Eis (Speiseeis)||דאס אייס (שפייזה-אייס)
juice|Der Saft||דר זפט
wine|Der Wein||דר ויין
breakfast|Das Frühstück||דאס פרישטיק
lunch|Das Mittagessen||דאס מיטאג-אסן
dinner|Das Abendessen||דאס אבנד-אסן
fork|Die Gabel||די גאבל
spoon|Der Löffel||דר לפל
knife|Das Messer||דאס מסר
glass|Das Glas||דאס גלאס
plate|Der Teller||דר טלר
bank|Die Bank||די בנק
atm|Der Geldautomat||דר גלד-אאוטומאט
beach|Der Strand||דר שטרנד
museum|Das Museum||דאס מוזיאום
temple|Der Tempel||דר טמפל
street|Die Straße||די שטרסה
city|Die Stadt||די שטט
shop|Das Geschäft||דאס גשפט
supermarket|Der Supermarkt||דר זופרמרקט
park|Der Park||דר פרק
station|Der Bahnhof||דר באנהוף
embassy|Die Botschaft||די בוטשפט
phone|Das Handy||דאס הנדי
charger|Das Ladegerät||דאס לאדה-גרט
bag|Die Tasche||די טשה
shoes|Die Schuhe||די שואה
clothes|Die Kleidung||די קליידונג
hat|Der Hut||דר הוט
glasses|Die Brille||די ברילה
map|Die Karte||די קרטה
sunscreen|Die Sonnencreme||די זונן-קרם
umbrella|Der Regenschirm||דר רגנשירם
sf_order|Ich möchte bestellen||איך מכטה בשטלן
sf_recommend|Was empfehlen Sie?||ואס אמפפלן זי
sf_bottle|Eine Flasche Wasser, bitte||איינה פלשה וואסר, ביטה
sf_isspicy|Ist das scharf?||איסט דאס שארף
sf_onemore|Noch eins, bitte||נוך איינס, ביטה
sf_nosugar|Ohne Zucker, bitte||אונה צוקר, ביטה
sf_takeaway|Zum Mitnehmen, bitte||צום מיטניימן, ביטה
ss_smaller|Haben Sie eine kleinere Größe?||האבן זי איינה קליינרה גרסה
ss_try|Kann ich das anprobieren?||קן איך דאס אנפרובירן
ss_two|Ich nehme zwei||איך ניימה צוויי
ss_change|Haben Sie Kleingeld?||האבן זי קליין-גלד
ss_last|Was ist der Endpreis?||ואס איסט דר אנד-פרייס
ss_bag|Kann ich eine Tüte haben?||קן איך איינה טיטה האבן
sm_busstop|Wo ist die Bushaltestelle?||וו איסט די בוס-האלטה-שטלה
sm_trainleave|Wann fährt der Zug ab?||ואן פרט דר צוג אפ
sm_oneticket|Eine Fahrkarte, bitte||איינה פארקרטה, ביטה
sm_howlong|Wie lange dauert es?||וי לנגה דאוארט אס
sm_meter|Bitte schalten Sie das Taxameter ein||ביטה שלטן זי דאס טקסמטר איין
sm_slowdrive|Bitte fahren Sie langsamer||ביטה פארן זי לנגזאמר
sm_airport|Ich möchte zum Flughafen||איך מכטה צום פלוגהאפן
sh_leavebag|Kann ich meine Tasche hier lassen?||קן איך מיינה טשה היר לסן
sh_ac|Die Klimaanlage funktioniert nicht||די קלימה-אנלגה פונקציונירט ניכט
sh_breakfast|Ist das Frühstück inklusive?||איסט דאס פרישטיק אינקלוזיבה
sh_towel|Ich brauche noch ein Handtuch||איך בראוכה נוך איין הנטוך
sh_taxi|Können Sie mir ein Taxi rufen?||קנן זי מיר איין טקסי רופן
sh_late|Kann ich später auschecken?||קן איך שפטר אאוסצ׳קן
so_learning|Ich lerne Deutsch||איך לרנה דויטש
so_thankshelp|Vielen Dank für Ihre Hilfe||פילן דנק פיר אירה הילפה
so_photo|Können Sie ein Foto von uns machen?||קנן זי איין פוטו פון אונס מכן
so_like|Mir gefällt es hier||מיר גפלט אס היר
so_vacation|Ich bin im Urlaub hier||איך בין אים אורלאופ היר
so_howsay|Wie sagt man das?||וי זאגט מן דאס
so_noproblem|Kein Problem||קיין פרובלם
so_beautiful|Das ist wunderschön!||דאס איסט וונדרשן
sp_unwell|Mir geht es nicht gut||מיר גייט אס ניכט גוט
sp_nearhosp|Wo ist das nächste Krankenhaus?||וו איסט דאס נכסטה קרנקנהאוס
sp_fever|Ich habe Fieber||איך הבה פיבר
sp_helpme|Bitte helfen Sie mir||ביטה הלפן זי מיר
sp_stolen|Meine Tasche wurde gestohlen||מיינה טשה וורדה גשטולן
sp_embassy|Ich brauche die israelische Botschaft||איך בראוכה די איזראלישה בוטשפט
dt1|Wohin?||וו-הין
dt2|Zu diesem Hotel, bitte.||צו דיזם הוטל, ביטה
dt3|In Ordnung, steigen Sie ein.||אין אורדנונג, שטייגן זי איין
dt4|Was kostet das?||ואס קוסטט דאס
dt5|Zweihundert Euro.||צוויי-הונדרט אויירו
dt6|Bitte schalten Sie das Taxameter ein.||ביטה שלטן זי דאס טקסמטר איין
dt7|Kein Problem.||קיין פרובלם
dt8|Halten Sie hier, danke.||האלטן זי היר, דנקה
dm1|Was kostet das hier?||ואס קוסטט דאס היר
dm2|Dreihundert.||דריי-הונדרט
dm3|Zu teuer! Zweihundert?||צו טויר! צוויי-הונדרט
dm4|Zweihundertfünfzig, letzter Preis.||צוויי-הונדרט-פינפציג, לצטר פרייס
dm5|Gut, ich nehme es.||גוט, איך ניימה אס
dm6|Vielen Dank!||פילן דנק
dr1|Wie viele Personen?||וי פילה פרזונן
dr2|Zwei, bitte.||צוויי, ביטה
dr3|Was möchten Sie bestellen?||ואס מכטן זי בשטלן
dr4|Gebratener Reis mit Hähnchen, nicht scharf.||גבראטנר רייס מיט הנכן, ניכט שארף
dr5|Und zu trinken?||אונד צו טרינקן
dr6|Nur Wasser, bitte.||נור וואסר, ביטה
dr7|Die Rechnung, bitte.||די רכנונג, ביטה
dh1|Guten Tag, ich habe eine Reservierung.||גוטן טאג, איך הבה איינה רזרווירונג
dh2|Auf welchen Namen?||אויף ולכן נאמן
dh3|Auf den Namen ...||אויף דן נאמן
dh4|Ihren Pass, bitte.||אירן פס, ביטה
dh5|Ihr Zimmer ist dreihundertfünf.||איר צימר איסט דריי-הונדרט-פינף
dh6|Wann gibt es Frühstück?||ואן גיבט אס פרישטיק
dh7|Von sieben bis zehn Uhr.||פון זיבן ביס צן אור
dd1|Entschuldigung, wo ist der Bahnhof?||אנטשולדיגונג, וו איסט דר באנהוף
dd2|Geradeaus, dann links.||גרדה-אאוס, דן לינקס
dd3|Ist es weit von hier?||איסט אס וייט פון היר
dd4|Nein, fünf Minuten zu Fuß.||ניין, פינף מינוטן צו פוס
dd5|Danke schön!||דנקה שן
w_weather|Das Wetter||דאס ודר
w_sun|Die Sonne||די זונה
w_rain|Der Regen||דר רגן
w_wind|Der Wind||דר וינד
w_cloud|Die Wolke||די וולקה
w_snow|Der Schnee||דר שניי
w_storm|Der Sturm||דר שטורם
w_humid|Feucht||פויכט
j_teacher|Der Lehrer||דר לרר
j_driver|Der Fahrer||דר פארר
j_waiter|Der Kellner||דר קלנר
j_cook|Der Koch||דר קוך
j_student|Der Student||דר שטודנט
j_engineer|Der Ingenieur||דר אינז׳ניר
j_nurse|Die Krankenschwester||די קרנקן-שווסטר
j_seller|Der Verkäufer||דר פרקויפר
j_guide|Der Reiseführer||דר רייזה-פירר
j_pharmacist|Der Apotheker||דר אפוטקר
e_angry|Wütend||ויטנד
e_scared|Ängstlich||אנגסטליך
e_bored|Gelangweilt||גלנגוויילט
e_worried|Besorgt||בזורגט
e_surprised|Überrascht||איברשט
e_calm|Ruhig||רואיג
e_excited|Aufgeregt||אאופגרגט
e_love|Verliebt||פרליבט
dir_north|Norden||נורדן
dir_south|Süden||זידן
dir_east|Osten||אוסטן
dir_west|Westen||וסטן
dir_corner|Die Ecke||די אקה
dir_light|Die Ampel||די אמפל
dir_behind|Hinter||הינטר
dir_front|Vorne||פורנה
dir_next|Neben||ניבן
dir_back|Zurück||צוריק
dir_up|Oben||אובן
dir_down|Unten||אונטן`
});

/* ---- numbers & prices (0–999,999) → tokens [text, roman, hebrew]. German writes numbers as one word; the Hebrew uses hyphens ---- */
NW.de = (() => {
  const O = [['null', 'נול'], ['eins', 'איינס'], ['zwei', 'צוויי'], ['drei', 'דריי'], ['vier', 'פיר'], ['fünf', 'פינף'], ['sechs', 'זקס'], ['sieben', 'זיבן'], ['acht', 'אכט'], ['neun', 'נוין'],
    ['zehn', 'צן'], ['elf', 'אלף'], ['zwölf', 'צוולף'], ['dreizehn', 'דרייצן'], ['vierzehn', 'פירצן'], ['fünfzehn', 'פינפצן'], ['sechzehn', 'זכצן'], ['siebzehn', 'זיבצן'], ['achtzehn', 'אכצן'], ['neunzehn', 'נוינצן']];
  const T = [, , ['zwanzig', 'צוואנציג'], ['dreißig', 'דרייסיג'], ['vierzig', 'פירציג'], ['fünfzig', 'פינפציג'], ['sechzig', 'זכציג'], ['siebzig', 'זיבציג'], ['achtzig', 'אכציג'], ['neunzig', 'נוינציג']];
  const unit = (u, pre) => u === 1 ? ['ein', 'איין'] : O[u];
  function u100(n, final) {
    if (n < 20) return n === 1 && !final ? ['ein', 'איין'] : O[n];
    const u = n % 10, t = T[Math.floor(n / 10)];
    return u ? [unit(u)[0] + 'und' + t[0], unit(u)[1] + '-אונט-' + t[1]] : t;
  }
  function u1000(n, final) {
    const h = Math.floor(n / 100), r = n % 100; let t = '', hb = '';
    if (h) { t = (h === 1 ? 'ein' : O[h][0]) + 'hundert'; hb = (h === 1 ? 'איין' : O[h][1]) + '-הונדרט'; }
    if (r) { const x = u100(r, final); t += x[0]; hb += (hb ? '-' : '') + x[1]; }
    return [t, hb];
  }
  return (n, cur) => {
    let t, hb;
    if (n === 0) { t = 'null'; hb = 'נול'; }
    else {
      const th = Math.floor(n / 1000), r = n % 1000; t = ''; hb = '';
      if (th) { const x = u1000(th, false); t = x[0] + 'tausend'; hb = x[1] + '-טאוזנט'; }
      if (r) { const x = u1000(r, !cur); t += x[0]; hb += (hb ? '-' : '') + x[1]; }
    }
    if (cur && n === 1) { t = 'ein'; hb = 'איין'; }
    const toks = [tk(t, t, hb)];
    if (cur) toks.push(tk('Euro', 'Euro', 'אויירו'));
    return toks;
  };
})();
NUM.de = { tokens: (n, cur) => NW.de(n, cur) };
