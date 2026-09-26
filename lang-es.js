/* ===== LingoNest — lang-es.js : Spanish content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: one line per concept id (see content.js) → id|native text|Latin transliteration|pronunciation in Hebrew letters
   To add words: add the concept to content.js, then one line here (and in every other lang-xx.js). */
LINGO.registerLang('es', {
  ver: '1.19.0',
  curSym: "€",
  /* travel kit: [icon, label{he,en}, number, (second number)] — verify locally before a trip */
  country: {"he": "ספרד ואמריקה הלטינית", "en": "Spain & Latin America", "ru": "Испания и Латинская Америка", "es": "España y Latinoamérica", "ar": "إسبانيا وأمريكا اللاتينية"},
  emergency: [
    ["🇪🇸", {"he": "ספרד (וכל האיחוד האירופי) — חירום", "en": "Spain (and all EU) — emergency", "ru": "Испания (и весь ЕС) — экстренная служба", "es": "España (y toda la UE) — emergencias", "ar": "إسبانيا (وكل الاتحاد الأوروبي) — الطوارئ"}, "112"],
    ["🇲🇽", {"he": "מקסיקו ורוב אמריקה הלטינית — חירום", "en": "Mexico & most of Latin America", "ru": "Мексика и большая часть Латинской Америки", "es": "México y la mayor parte de Latinoamérica", "ar": "المكسيك ومعظم أمريكا اللاتينية"}, "911"],
    ["🇦🇷", {"he": "ארגנטינה — משטרה / אמבולנס", "en": "Argentina — police / ambulance", "ru": "Аргентина — полиция / скорая", "es": "Argentina — policía / ambulancia", "ar": "الأرجنتين — الشرطة / الإسعاف"}, "911", "107"]
  ],
  /* grammar & culture tips: t=title, b=body ({he,en}), ex=[native, roman, heb, meaning he, meaning en] */
  tips: [
    {"t": {"he": "זכר ונקבה: el / la, ‎-o / -a", "en": "Gender: el / la, -o / -a"}, "b": {"he": "לכל שם עצם יש מין, ובדרך כלל -o זכר ו--a נקבה. התואר מתאים את עצמו: el hotel bonito, la playa bonita.", "en": "Every noun has a gender, usually -o masculine and -a feminine. Adjectives agree: el hotel bonito, la playa bonita."}, "ex": [["La playa es bonita", "la plaia es bonita", "לה פלאיה אס בוניטה", "החוף יפה", "The beach is beautiful"], ["El hotel es bonito", "el otel es bonito", "אל אוטל אס בוניטו", "המלון יפה", "The hotel is beautiful"]]},
    {"t": {"he": "ser מול estar — שני \"להיות\"", "en": "ser vs. estar — two \"to be\""}, "b": {"he": "ser למשהו קבוע (מאיפה אני, מי אני): Soy de Israel. estar למצב זמני או מיקום: Estoy cansado (אני עייף), ¿Dónde está el baño?", "en": "ser for permanent things (origin, identity): Soy de Israel. estar for states and location: Estoy cansado, ¿Dónde está el baño?"}, "ex": [["Soy de Israel", "soi de israel", "סוי דה איסראל", "אני מישראל", "I'm from Israel"], ["Estoy cansado", "estoi kansado", "אסטוי קנסאדו", "אני עייף", "I'm tired"]]},
    {"t": {"he": "tú מול usted", "en": "tú vs. usted"}, "b": {"he": "usted (אוסטד) הוא \"אתה\" מנומס — למבוגרים, לפקידים, לשוטרים. באמריקה הלטינית משתמשים בו יותר מאשר בספרד. בספק — usted.", "en": "usted is the polite \"you\" — for older people, officials, police. More common in Latin America than Spain. When in doubt — usted."}, "ex": [["¿Me puede ayudar?", "me puede aiudar", "מה פואדה איודאר", "אתה יכול לעזור לי? (מנומס)", "Can you help me? (polite)"]]},
    {"t": {"he": "קוראים כמו שכותבים — עם כמה הפתעות", "en": "Read as written — with a few surprises"}, "b": {"he": "H שקטה (hola = אולה), J = ח (jota), LL ו-Y = י (calle = קאיה), Ñ = ני. בספרד Z ו-CE/CI נשמעים כמו th באנגלית; באמריקה הלטינית — ס.", "en": "H is silent, J = kh, LL and Y = y, Ñ = ny. In Spain Z and CE/CI sound like English th; in Latin America — s."}, "ex": [["Hola", "ola", "אולה", "שלום", "Hello"], ["La calle", "la kaie", "לה קאיה", "הרחוב", "The street"]]},
    {"t": {"he": "סימני שאלה הפוכים ושאלה בלי שינוי סדר", "en": "Upside-down marks, same word order"}, "b": {"he": "שאלה נפתחת ב-¿ ונסגרת ב-?. אפשר לשאול פשוט בעליית טון, בלי לשנות את סדר המילים: ¿Tiene agua? = יש לך מים?", "en": "Questions open with ¿ and close with ?. Just raise your voice — no word-order change: ¿Tiene agua?"}, "ex": [["¿Tiene agua?", "tiene agua", "טיינה אגואה", "יש לך מים?", "Do you have water?"]]},
    {"t": {"he": "להזמין בנימוס: quisiera", "en": "Ordering politely: quisiera"}, "b": {"he": "quiero = אני רוצה (ישיר), quisiera = הייתי רוצה (מנומס יותר). במסעדה ובחנות quisiera + por favor נשמע מצוין.", "en": "quiero = I want (direct), quisiera = I'd like (more polite). In restaurants, quisiera + por favor sounds great."}, "ex": [["Quisiera un café, por favor", "kisiera un kafe, por fabor", "קיסיירה און קפה, פור פבור", "הייתי רוצה קפה, בבקשה", "I'd like a coffee, please"]]}
  ],
  alpha: [
    ["A a","a","אַ","a"],
    ["B b","be","ב","be"],
    ["C c","ce","ק / ס","ce"],
    ["D d","de","ד","de"],
    ["E e","e","אֶ","e"],
    ["F f","efe","פ","efe"],
    ["G g","ge","ג / ח","ge"],
    ["H h","hache","שקטה","hache (silent)"],
    ["I i","i","אִי","i"],
    ["J j","jota","ח","jota"],
    ["K k","ka","ק","ka"],
    ["L l","ele","ל","ele"],
    ["M m","eme","מ","eme"],
    ["N n","ene","נ","ene"],
    ["Ñ ñ","eñe","נְיְ (כמו ניו)","eñe (ny)"],
    ["O o","o","אוֹ","o"],
    ["P p","pe","פּ","pe"],
    ["Q q","cu","ק","cu"],
    ["R r","erre","ר מתגלגלת","erre (rolled)"],
    ["S s","ese","ס","ese"],
    ["T t","te","ט","te"],
    ["U u","u","אוּ","u"],
    ["V v","uve","ב","uve (b)"],
    ["W w","uve doble","ו","uve doble"],
    ["X x","equis","קס","equis"],
    ["Y y","ye","י","ye"],
    ["Z z","zeta","ס (בספרד: ת׳)","zeta"]
  ],
  /* speaker = female: [regex source, flags, replacement] */
  gender: [["perdido","g","perdida"],["alérgico","g","alérgica"],["פרדידו","g","פרדידה"],["אלרחיקו","g","אלרחיקה"]],
  words: `hello|Hola||אולה
bye|Adiós||אדיוס
morning|Buenos días||בואנוס דיאס
thanks|Gracias||גרסיאס
please|Por favor||פור פבור
sorry|Perdón||פרדון
yes|Sí||סי
no|No||נו
howareyou|¿Cómo estás?||קומו אסטאס
good|Bien||ביין
ok|Está bien||אסטה ביין
n1|Uno||אונו
n2|Dos||דוס
n3|Tres||טרס
n4|Cuatro||קואטרו
n5|Cinco||סינקו
n6|Seis||סייס
n7|Siete||סייטה
n8|Ocho||אוצ׳ו
n9|Nueve||נואבה
n10|Diez||דייס
water|Agua||אגואה
toilet|El baño||אל באניו
where|¿Dónde?||דונדה
howmuch|¿Cuánto?||קואנטו
this|Esto||אסטו
friend|Amigo||אמיגו
food|Comida||קומידה
bread|Pan||פאן
coffee|Café||קפה
tea|Té||טה
chicken|Pollo||פויו
fish|Pescado||פסקאדו
rice|Arroz||ארוס
beer|Cerveza||סרבסה
bill|La cuenta||לה קואנטה
tasty|Delicioso||דליסיוסו
taxi|Taxi||טקסי
bus|Autobús||אאוטובוס
train|Tren||טרן
airport|Aeropuerto||אארופוארטו
hotel|Hotel||אוטל
left|Izquierda||איסקיירדה
right|Derecha||דרצ׳ה
straight|Todo recto||טודו רקטו
stop|Alto||אלטו
ticket|Boleto||בולטו
money|Dinero||דינרו
expensive|Caro||קארו
cheap|Barato||בראטו
market|Mercado||מרקאדו
pharmacy|Farmacia||פרמסיה
open|Abierto||אביירטו
closed|Cerrado||סראדו
help|¡Ayuda!||איודה
police|Policía||פוליסיה
doctor|Médico||מדיקו
hospital|Hospital||אוספיטל
today|Hoy||אוי
tomorrow|Mañana||מניאנה
yesterday|Ayer||אייר
now|Ahora||אאורה
p_toilet|¿Dónde está el baño?||דונדה אסטה אל באניו
p_cost|¿Cuánto cuesta?||קואנטו קואסטה
p_nounder|No entiendo||נו אנטיינדו
p_english|¿Habla inglés?||אבלה אינגלס
p_slow|Hable más despacio, por favor||אבלה מאס דספסיו, פור פבור
p_bill|La cuenta, por favor||לה קואנטה, פור פבור
p_want|Quiero esto||קיירו אסטו
p_expensive|Es muy caro||אס מוי קארו
p_discount|¿Me hace un descuento?||מה אסה און דסקואנטו
p_address|Lléveme a esta dirección, por favor||ייבמה א אסטה דירקסיון, פור פבור
p_hotel|¿Dónde está el hotel?||דונדה אסטה אל אוטל
p_doctor|Necesito un médico||נססיטו און מדיקו
p_police|¡Llame a la policía!||יאמה א לה פוליסיה
p_israel|Soy de Israel||סוי דה איסראל
p_name|Me llamo ...||מה יאמו
p_nice|Mucho gusto||מוצ׳ו גוסטו
p_water|Agua, por favor||אגואה, פור פבור
p_help|¿Me puede ayudar?||מה פואדה איודאר
p_what|¿Qué es esto?||קה אס אסטו
p_nospicy|Sin picante, por favor||סין פיקאנטה, פור פבור
egg|Huevo||ואבו
fruit|Fruta||פרוטה
veg|Verduras||ברדוראס
meat|Carne||קרנה
milk|Leche||לצ׳ה
spicy|Picante||פיקאנטה
restaurant|Restaurante||רסטאורנטה
ice|Hielo||יילו
room|Habitación||אביטסיון
key|Llave||יאבה
bed|Cama||קאמה
shower|Ducha||דוצ׳ה
towel|Toalla||טואיה
passport|Pasaporte||פסאפורטה
n0|Cero||סרו
n20|Veinte||ביינטה
n50|Cincuenta||סינקואנטה
n100|Cien||סיין
n1000|Mil||מיל
mon|Lunes||לונס
tue|Martes||מרטס
wed|Miércoles||מיירקולס
thu|Jueves||חואבס
fri|Viernes||ביירנס
sat|Sábado||סבאדו
sun|Domingo||דומינגו
red|Rojo||רוחו
blue|Azul||אסול
green|Verde||ברדה
yellow|Amarillo||אמריו
black|Negro||נגרו
white|Blanco||בלנקו
man|Hombre||אומברה
woman|Mujer||מוחר
child|Niño||ניניו
family|Familia||פמיליה
i|Yo||יו
you|Tú||טו
head|Cabeza||קבסה
stomach|Estómago||אסטומגו
hand|Mano||מאנו
pain|Dolor||דולור
medicine|Medicina||מדיסינה
sick|Enfermo||אנפרמו
big|Grande||גרנדה
small|Pequeño||פקניו
hot|Caliente||קליינטה
cold|Frío||פריאו
bad|Malo||מאלו
beautiful|Bonito||בוניטו
eat|Comer||קומר
drink|Beber||בבר
go|Ir||איר
buy|Comprar||קומפרר
speak|Hablar||אבלר
sleep|Dormir||דורמיר
understand|Entender||אנטנדר
c_table|Una mesa para dos, por favor||אונה מסה פרה דוס, פור פבור
c_menu|¿Me trae la carta?||מה טראה לה קרטה
c_noice|Sin hielo, por favor||סין יילו, פור פבור
c_nomeat|No como carne||נו קומו קרנה
c_allergy|Soy alérgico a los frutos secos||סוי אלרחיקו א לוס פרוטוס סקוס
c_delicious|¡Muy rico!||מוי ריקו
c_reserv|Tengo una reserva||טנגו אונה רסרבה
c_wifi|¿Cuál es la contraseña del wifi?||קואל אס לה קונטרסניה דל ויפי
c_checkout|¿A qué hora es la salida?||א קה אורה אס לה סלידה
c_howget|¿Cómo llego allí?||קומו יגו איי
c_stophere|Pare aquí, por favor||פארה אקי, פור פבור
c_far|¿Está lejos?||אסטה לחוס
c_card|¿Puedo pagar con tarjeta?||פואדו פגר קון טרחטה
c_looking|Solo estoy mirando, gracias||סולו אסטוי מירנדו, גרסיאס
c_yourname|¿Cómo te llamas?||קומו טה יאמס
c_wherefrom|¿De dónde eres?||דה דונדה ארס
c_seeyou|Hasta luego||אסטה לואגו
c_cheers|¡Salud!||סלוד
c_lost|Estoy perdido||אסטוי פרדידו
c_passport|Perdí mi pasaporte||פרדי מי פסאפורטה
c_hurts|Me duele aquí||מה דואלה אקי
c_time|¿Qué hora es?||קה אורה אס
c_again|¿Puede repetir, por favor?||פואדה רפטיר, פור פבור
c_write|¿Me lo puede escribir?||מה לו פואדה אסקריביר
n11|Once||אונסה
n12|Doce||דוסה
n13|Trece||טרסה
n14|Catorce||קטורסה
n15|Quince||קינסה
n16|Dieciséis||דייסיסייס
n17|Diecisiete||דייסיסייטה
n18|Dieciocho||דייסיאוצ׳ו
n19|Diecinueve||דייסינואבה
n30|Treinta||טריינטה
n40|Cuarenta||קוארנטה
n60|Sesenta||ססנטה
n70|Setenta||סטנטה
n80|Ochenta||אוצ׳נטה
n90|Noventa||נובנטה
n200|Doscientos||דוססיינטוס
n500|Quinientos||קינייינטוס
n10000|Diez mil||דייס מיל
t_morning|La mañana||לה מניאנה
t_evening|La tarde||לה טרדה
t_night|La noche||לה נוצ׳ה
t_week|La semana||לה סמאנה
t_month|El mes||אל מס
t_year|El año||אל אניו
t_hour|La hora||לה אורה
t_minute|El minuto||אל מינוטו
dog|Perro||פרו
cat|Gato||גאטו
bird|Pájaro||פחרו
horse|Caballo||קבאיו
cow|Vaca||באקה
pig|Cerdo||סרדו
elephant|Elefante||אלפאנטה
monkey|Mono||מונו
snake|Serpiente||סרפיינטה
mosquito|Mosquito||מוסקיטו
lion|León||לאון
duck|Pato||פאטו
apple|Manzana||מנסאנה
banana|Plátano||פלאטנו
orange|Naranja||נרנחה
mango|Mango||מנגו
pineapple|Piña||פיניה
watermelon|Sandía||סנדיאה
coconut|Coco||קוקו
grapes|Uvas||אובס
lemon|Limón||לימון
strawberry|Fresa||פרסה
papaya|Papaya||פפאיה
tomato|Tomate||טומאטה
potato|Patata||פטאטה
onion|Cebolla||סבויה
garlic|Ajo||אחו
cucumber|Pepino||פפינו
carrot|Zanahoria||סנאוריה
chili|Chile||צ׳ילה
corn|Maíz||מאיס
mushroom|Champiñón||צ׳מפיניון
lettuce|Lechuga||לצ׳וגה
eggplant|Berenjena||ברנחנה
soup|Sopa||סופה
salad|Ensalada||אנסלאדה
noodles|Fideos||פידאוס
cheese|Queso||קסו
butter|Mantequilla||מנטקייה
salt|Sal||סאל
sugar|Azúcar||אסוקר
cake|Pastel||פסטל
icecream|Helado||אלאדו
juice|Zumo||סומו
wine|Vino||בינו
breakfast|Desayuno||דסאיונו
lunch|Almuerzo||אלמוארסו
dinner|Cena||סנה
fork|Tenedor||טנדור
spoon|Cuchara||קוצ׳רה
knife|Cuchillo||קוצ׳יו
glass|Vaso||באסו
plate|Plato||פלאטו
bank|Banco||בנקו
atm|Cajero automático||קחרו אאוטומטיקו
beach|Playa||פלאיה
museum|Museo||מוסאו
temple|Templo||טמפלו
street|Calle||קאיה
city|Ciudad||סיודאד
shop|Tienda||טיינדה
supermarket|Supermercado||סופרמרקאדו
park|Parque||פרקה
station|Estación||אסטסיון
embassy|Embajada||אמבחאדה
phone|Teléfono||טלפונו
charger|Cargador||קרגדור
bag|Bolso||בולסו
shoes|Zapatos||סאפטוס
clothes|Ropa||רופה
hat|Sombrero||סומברו
glasses|Gafas||גאפס
map|Mapa||מאפה
sunscreen|Protector solar||פרוטקטור סולאר
umbrella|Paraguas||פרגואס
come|Venir||בניר
want|Querer||קרר
need|Necesitar||נססיטר
know|Saber||סבר
see|Ver||בר
hear|Oír||אויר
give|Dar||דאר
take|Tomar||טומר
pay|Pagar||פגר
wait|Esperar||אספרר
walk|Caminar||קמינר
read|Leer||לאר
write|Escribir||אסקריביר
love|Amar||אמר
work|Trabajar||טרבחר
swim|Nadar||נדר
new|Nuevo||נואבו
old|Viejo||בייחו
fast|Rápido||רפידו
slow|Lento||לנטו
near|Cerca||סרקה
far_a|Lejos||לחוס
clean|Limpio||לימפיו
dirty|Sucio||סוסיו
tired|Cansado||קנסאדו
hungry|Hambriento||אמבריינטו
thirsty|Sediento||סדיינטו
happy|Feliz||פליס
sad|Triste||טריסטה
easy|Fácil||פסיל
difficult|Difícil||דיפיסיל
many|Mucho||מוצ׳ו
sf_order|Quiero pedir||קיירו פדיר
sf_recommend|¿Qué me recomienda?||קה מה רקומיינדה
sf_bottle|Una botella de agua, por favor||אונה בוטיה דה אגואה, פור פבור
sf_isspicy|¿Esto pica?||אסטו פיקה
sf_onemore|Otro, por favor||אוטרו, פור פבור
sf_nosugar|Sin azúcar, por favor||סין אסוקר, פור פבור
sf_takeaway|¿Me lo pone para llevar?||מה לו פונה פרה יבר
ss_smaller|¿Tiene una talla más pequeña?||טיינה אונה טאיה מאס פקניה
ss_try|¿Me lo puedo probar?||מה לו פואדו פרובר
ss_two|Me llevo dos||מה יבו דוס
ss_change|¿Tiene cambio?||טיינה קמביו
ss_last|¿Cuál es el precio final?||קואל אס אל פרסיו פינאל
ss_bag|¿Me da una bolsa?||מה דה אונה בולסה
sm_busstop|¿Dónde está la parada de autobús?||דונדה אסטה לה פרדה דה אאוטובוס
sm_trainleave|¿A qué hora sale el tren?||א קה אורה סאלה אל טרן
sm_oneticket|Un billete, por favor||און בייטה, פור פבור
sm_howlong|¿Cuánto tiempo se tarda?||קואנטו טיימפו סה טרדה
sm_meter|Ponga el taxímetro, por favor||פונגה אל טקסימטרו, פור פבור
sm_slowdrive|Conduzca más despacio, por favor||קונדוסקה מאס דספסיו, פור פבור
sm_airport|Quiero ir al aeropuerto||קיירו איר אל אארופוארטו
sh_leavebag|¿Puedo dejar mi maleta aquí?||פואדו דחר מי מלטה אקי
sh_ac|El aire acondicionado no funciona||אל איירה אקונדיסיונאדו נו פונסיונה
sh_breakfast|¿El desayuno está incluido?||אל דסאיונו אסטה אינקלואידו
sh_towel|Necesito otra toalla||נססיטו אוטרה טואיה
sh_taxi|¿Me puede llamar un taxi?||מה פואדה יאמר און טקסי
sh_late|¿Puedo salir más tarde?||פואדו סליר מאס טרדה
so_learning|Estoy aprendiendo el idioma||אסטוי אפרנדיינדו אל אידיומה
so_thankshelp|Muchas gracias por su ayuda||מוצ׳ס גרסיאס פור סו איודה
so_photo|¿Nos puede sacar una foto?||נוס פואדה סקר אונה פוטו
so_like|Me gusta este lugar||מה גוסטה אסטה לוגר
so_vacation|Estoy aquí de vacaciones||אסטוי אקי דה בקסיונס
so_howsay|¿Cómo se dice esto?||קומו סה דיסה אסטו
so_noproblem|No hay problema||נו אי פרובלמה
so_beautiful|¡Es muy bonito!||אס מוי בוניטו
sp_unwell|No me siento bien||נו מה סיינטו ביין
sp_nearhosp|¿Dónde está el hospital más cercano?||דונדה אסטה אל אוספיטל מאס סרקאנו
sp_fever|Tengo fiebre||טנגו פייברה
sp_helpme|Ayúdeme, por favor||איודמה, פור פבור
sp_stolen|Me robaron el bolso||מה רובארון אל בולסו
sp_embassy|Necesito la embajada de Israel||נססיטו לה אמבחאדה דה איסראל
dt1|¿A dónde?||א דונדה
dt2|A este hotel, por favor.||א אסטה אוטל, פור פבור
dt3|Vale, suba.||באלה, סובה
dt4|¿Cuánto es?||קואנטו אס
dt5|Doscientos.||דוססיינטוס
dt6|Ponga el taxímetro, por favor.||פונגה אל טקסימטרו, פור פבור
dt7|Sin problema.||סין פרובלמה
dt8|Pare aquí, gracias.||פארה אקי, גרסיאס
dm1|¿Cuánto cuesta esto?||קואנטו קואסטה אסטו
dm2|Trescientos.||טרססיינטוס
dm3|¡Muy caro! ¿Doscientos?||מוי קארו! דוססיינטוס
dm4|Doscientos cincuenta, último precio.||דוססיינטוס סינקואנטה, אולטימו פרסיו
dm5|Vale, me lo llevo.||באלה, מה לו יבו
dm6|¡Muchas gracias!||מוצ׳ס גרסיאס
dr1|¿Cuántas personas?||קואנטס פרסונס
dr2|Dos, por favor.||דוס, פור פבור
dr3|¿Qué desea pedir?||קה דסאה פדיר
dr4|Arroz frito con pollo, sin picante.||ארוס פריטו קון פויו, סין פיקאנטה
dr5|¿Y para beber?||אי פרה בבר
dr6|Solo agua, por favor.||סולו אגואה, פור פבור
dr7|¿Me trae la cuenta, por favor?||מה טראה לה קואנטה, פור פבור
dh1|Hola, tengo una reserva.||אולה, טנגו אונה רסרבה
dh2|¿A nombre de quién?||א נומברה דה קיין
dh3|A nombre de ...||א נומברה דה
dh4|Su pasaporte, por favor.||סו פסאפורטה, פור פבור
dh5|Su habitación es la trescientos cinco.||סו אביטסיון אס לה טרססיינטוס סינקו
dh6|¿A qué hora es el desayuno?||א קה אורה אס אל דסאיונו
dh7|De siete a diez.||דה סייטה א דייס
dd1|Perdone, ¿dónde está la estación?||פרדונה, דונדה אסטה לה אסטסיון
dd2|Todo recto y luego a la izquierda.||טודו רקטו אי לואגו א לה איסקיירדה
dd3|¿Está lejos de aquí?||אסטה לחוס דה אקי
dd4|No, cinco minutos a pie.||נו, סינקו מינוטוס א פייה
dd5|¡Mil gracias!||מיל גרסיאס
da1|¿Cuál es el motivo de su visita?||קואל אס אל מוטיבו דה סו ביסיטה
da2|¿Cuánto tiempo se va a quedar?||קואנטו טיאמפו סה בה א קדאר
da3|Dos semanas.||דוס סמאנאס
da4|¡Bienvenido!||ביאנבנידו
dp1|¿Qué le duele?||קה לה דואלה
dp2|Tome este medicamento dos veces al día.||טומה אסטה מדיקמנטו דוס בסס אל דיאה
dp4|¡Que se mejore!||קה סה מחורה
ds1|Quisiera una tarjeta SIM con internet.||קיסיירה אונה טרחטה סים קון אינטרנט
ds2|¿Para cuántos días?||פארה קואנטוס דיאס
ds3|Para diez días.||פארה דיאס דיאס
ds4|Listo, ya tiene internet.||ליסטו, יה טיינה אינטרנט
dc1|¿Le puedo ayudar?||לה פואדו איודאר
dc2|¿Tiene esto en azul?||טיינה אסטו אן אסול
dc3|Sí, ¿qué talla?||סי, קה טאיה
dc4|Mediana.||מדיאנה
dc5|Claro, el probador está allí.||קלארו, אל פרובדור אסטה איי
dg1|Quisiera reservar un tour para mañana.||קיסיירה רסרבאר און טור פארה מניאנה
dg2|El tour sale a las ocho de la mañana.||אל טור סאלה א לאס אוצ׳ו דה לה מניאנה
dg3|¿Está incluido el almuerzo?||אסטה אינקלואידו אל אלמואסו
dg4|Sí, y el agua también.||סי, אי אל אגואה טמביאן
dg5|Perfecto, para dos personas, por favor.||פרפקטו, פארה דוס פרסונאס, פור פבור
w_weather|El tiempo||אל טיימפו
w_sun|Sol||סול
w_rain|Lluvia||יוביה
w_wind|Viento||ביינטו
w_cloud|Nube||נובה
w_snow|Nieve||נייבה
w_storm|Tormenta||טורמנטה
w_humid|Húmedo||אומדו
j_teacher|Profesor||פרופסור
j_driver|Conductor||קונדוקטור
j_waiter|Camarero||קמררו
j_cook|Cocinero||קוסינרו
j_student|Estudiante||אסטודיאנטה
j_engineer|Ingeniero||אינחניירו
j_nurse|Enfermera||אנפרמרה
j_seller|Vendedor||בנדדור
j_guide|Guía turístico||גיאה טוריסטיקו
j_pharmacist|Farmacéutico||פרמסאוטיקו
e_angry|Enfadado||אנפדאדו
e_scared|Asustado||אסוסטאדו
e_bored|Aburrido||אבורידו
e_worried|Preocupado||פראוקופאדו
e_surprised|Sorprendido||סורפרנדידו
e_calm|Tranquilo||טרנקילו
e_excited|Emocionado||אמוסיונאדו
e_love|Enamorado||אנמוראדו
dir_north|Norte||נורטה
dir_south|Sur||סור
dir_east|Este||אסטה
dir_west|Oeste||אואסטה
dir_corner|Esquina||אסקינה
dir_light|Semáforo||סמפורו
dir_behind|Detrás||דטראס
dir_front|Delante||דלאנטה
dir_next|Al lado de||אל לאדו דה
dir_back|Atrás||אטראס
dir_up|Arriba||אריבה
dir_down|Abajo||אבאחו`
});

/* ---- numbers & prices (0–999,999) → tokens [text, roman, hebrew] ---- */
/* ---- Spanish ---- */
NW.es = (() => {
  const H = { uno:'אונו', un:'און', dos:'דוס', tres:'טרס', cuatro:'קואטרו', cinco:'סינקו', seis:'סייס', siete:'סייטה', ocho:'אוצ׳ו', nueve:'נואבה', diez:'דייס', once:'אונסה', doce:'דוסה', trece:'טרסה', catorce:'קטורסה', quince:'קינסה', 'dieciséis':'דייסיסייס', diecisiete:'דייסיסייטה', dieciocho:'דייסיאוצ׳ו', diecinueve:'דייסינואבה',
    veinte:'ביינטה', veintiuno:'ביינטיאונו', 'veintiún':'ביינטיאון', 'veintidós':'ביינטידוס', 'veintitrés':'ביינטיטרס', veinticuatro:'ביינטיקואטרו', veinticinco:'ביינטיסינקו', 'veintiséis':'ביינטיסייס', veintisiete:'ביינטיסייטה', veintiocho:'ביינטיאוצ׳ו', veintinueve:'ביינטינואבה',
    treinta:'טריינטה', cuarenta:'קוארנטה', cincuenta:'סינקואנטה', sesenta:'ססנטה', setenta:'סטנטה', ochenta:'אוצ׳נטה', noventa:'נובנטה', y:'אי', cien:'סיין', ciento:'סיינטו',
    doscientos:'דוססיינטוס', trescientos:'טרססיינטוס', cuatrocientos:'קואטרוסיינטוס', quinientos:'קינייינטוס', seiscientos:'סייססיינטוס', setecientos:'סטסיינטוס', ochocientos:'אוצ׳וסיינטוס', novecientos:'נובסיינטוס', mil:'מיל', cero:'סרו' };
  const o = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve',
    'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'];
  const t = [, , , 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const h = [, 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];
  const w = x => tk(x, x, H[x]);
  function under1000(n, out, apocope) {
    if (n === 100) { out.push(w('cien')); return; }
    if (n >= 100) { out.push(w(h[Math.floor(n / 100)])); n %= 100; }
    if (n === 0) return;
    let words = n < 30 ? [o[n]] : (n % 10 ? [t[Math.floor(n / 10)], 'y', o[n % 10]] : [t[Math.floor(n / 10)]]);
    if (apocope) { const L = words.length - 1; if (words[L] === 'uno') words[L] = 'un'; if (words[L] === 'veintiuno') words[L] = 'veintiún'; }
    words.forEach(x => out.push(w(x)));
  }
  return (n, beforeNoun) => {
    if (n === 0) return [w('cero')];
    const out = [], th = Math.floor(n / 1000), r = n % 1000;
    if (th === 1) out.push(w('mil'));
    else if (th > 1) { under1000(th, out, true); out.push(w('mil')); }
    under1000(r, out, beforeNoun);
    return out;
  };
})();
NW.esCur = n => n === 1 ? tk('euro', 'euro', 'אאורו') : tk('euros', 'euros', 'אאורוס');
NUM.es = { tokens: (n, cur) => cur ? NW.es(n, true).concat([NW.esCur(n)]) : NW.es(n, false) };
